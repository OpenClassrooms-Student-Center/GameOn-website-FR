const errors_enum ={
    prenom: "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
    nom: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
    mail: "Veuillez entrer un email valide.",
    naissance: "Vous devez entrer votre date de naissance.",
    tournois: "Le nombre doit être compris entre 0 et 99.",
    villes: "Vous devez choisir une option.",
    conditions: "Vous devez vérifier que vous acceptez les termes et conditions."
}

let error_list = {
    error_prenom: errors_enum.prenom,
    error_nom: errors_enum.nom,
    error_mail: errors_enum.mail,
    error_naissance: errors_enum.naissance,
    error_tournois: "",
    error_villes: errors_enum.villes,
    error_conditions: errors_enum.conditions
}

function editNav() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalConfirm = document.querySelectorAll("#confirm-message");
const form = document.getElementById("formulaire");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
    form.addEventListener('submit', verifyForm);
    //launch input events
    document.getElementById("first").addEventListener("change", change_prenom);
    document.getElementById("last").addEventListener("change", change_nom);
    document.getElementById("email").addEventListener("change", change_mail);
    document.getElementById("birthdate").addEventListener("change", change_naissance);
    document.getElementById("quantity").addEventListener("change", change_tournois);
    document.getElementById("villes").addEventListener("change", change_villes);
    document.getElementById("checkbox1").addEventListener("change", change_conditions);
}

/**
 * Lorsque l'on ferme le formulaire on supprime les valeurs entrées
 * et on reset l'affichage ainsi que les erreurs du formulaires
 */
function closeForm() {
    modalbg.style.display = "none";
    form.style.display = "block";
    modalConfirm[0].style.display = "none";
    for (const tc of form.getElementsByClassName("text-control")) {
        if (tc.type === "number") {
            tc.value = 0;
        } else {
            tc.value = "";
        }
    }
    for (const ci of form.getElementsByClassName("checkbox-input")) {
        if (ci.checked) {
            ci.checked = false;
        }
    }
    error_list = {
        error_prenom: errors_enum.prenom,
        error_nom: errors_enum.nom,
        error_mail: errors_enum.mail,
        error_naissance: errors_enum.naissance,
        error_tournois: "",
        error_villes: errors_enum.villes,
        error_conditions: errors_enum.conditions
    }
}

/**
 * Suppression du refresh de la page lors de l'envoi du formulaire
 * Permet d'afficher le message de validation de l'envoi
 * @param event "submit"
 */
function verifyForm(event) {
    const inputs_required = document.getElementsByClassName("error");
    let everithing_valid = true;
    let i = 0
    for (const v in error_list){
        if (error_list[v] !== ""){
            everithing_valid = false;
        }
        inputs_required[i].textContent = error_list[v];
        i++;
    }
    if (everithing_valid){
        form.style.display = "none";
        modalConfirm[0].style.display = "block";
    }
    event.preventDefault()
}

/**
 * Vérifie que le prénom fait au minimum 2 caractères
 */
function change_prenom() {
    if (this.value.length > 1) {
        error_list.error_prenom = "";
    } else {
        error_list.error_prenom = errors_enum.prenom;
    }

}

/**
 * Vérifie que le nom fait au minimum 2 caractères
 */
function change_nom() {
    if (this.value.length > 1) {
        error_list.error_nom = "";
    } else {
        error_list.error_nom = errors_enum.nom;
    }
}

/**
 * Vérifie que le mail est valide
 */
function change_mail() {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regex.test(this.value.toLowerCase())) {
        error_list.error_mail = "";
    } else {
        error_list.error_mail = errors_enum.mail;
    }

}

/**
 * Vérifie que la date de naissance est sélectionné
 */
function change_naissance() {
    if (this.value === "") {
        error_list.error_naissance = errors_enum.naissance;
    } else {
        error_list.error_naissance = "";
    }

}

/**
 * Vérifie que le nombre de tournois est supérieur à 0
 */
function change_tournois() {
    if (parseInt(this.value) >= 0 && parseInt(this.value) <= 99) {
        error_list.error_tournois = "";
    } else {
        error_list.error_tournois = errors_enum.tournois;
    }
}

/**
 * Vérifie qu'au moins une ville à été sélectionné
 */
function change_villes() {
    let one_checked = false;
    for (let i = 0; i < this.children.length; i += 2) {
        if (this.children[i].checked) {
            one_checked = true;
        }
    }
    if (one_checked) {
        error_list.error_villes = "";
    } else {
        error_list.error_villes = errors_enum.villes;
    }
}

/**
 * Vérifie que les conditions ont été accepté
 */
function change_conditions() {
    if (this.checked) {
        error_list.error_conditions = "";
    } else {
        error_list.error_conditions = errors_enum.conditions;
    }
}
