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
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
    form.addEventListener('submit', cancelRefresh);
}

/**
 * Lorsque l'on ferme le formulaire on supprime les valeurs entrées
 * et on reset l'affichage
 */
function closeForm() {
    modalbg.style.display = "none";
    form.style.display = "block";
    modalConfirm[0].style.display = "none";
    for (const tc of form.getElementsByClassName("text-control")){
        if (tc.type === "number"){
            tc.value = 0;
        }
        else {
            tc.value = "";
        }
    }
    for (const ci of form.getElementsByClassName("checkbox-input")){
        if (ci.checked){
            ci.checked = false;
        }
    }
}

/**
 * Suppression du refresh de la page lors de l'envoi du formulaire
 * Permet d'afficher le message de validation de l'envoi
 * @param event "submit"
 */
function cancelRefresh(event){
    form.style.display = "none";
    modalConfirm[0].style.display = "block";
    event.preventDefault()
}


