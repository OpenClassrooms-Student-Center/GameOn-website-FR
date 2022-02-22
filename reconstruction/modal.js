//MODAL OK + Ré organisation du code
// + fonctions fléchées:OK

/**
 * ATTRIBUTION DES CONSTANTES AUX ELEMENTS DU DOM
 */
//formulaire complet
const modalFrame = document.querySelector(".bground");
//Boutons "Je m'inscris"
const registrationBtn = document.querySelectorAll(".modal-btn");
//Fermeture du formulaire avec la croix
const closeWindowBtn = document.querySelector(".close");
// Contenant de la Fenêtre de remerciements
const blocThanks = document.querySelector(".bloc-thanks");
// Croix pour la fermeture de la Fenêtre remerciements
const crossWindowThanks = document.querySelector(".closeThanks");
// Bouton "Fermer" de la Fenêtre de remerciements
const btnWindowThanks = document.querySelector(".btn-closeThanks");
// // Formulaire
const fullForm = document.querySelector("#form");
console.log("Formulaire test", fullForm);
// Identification de ce qui se passe ds chaque input pour créer un contrôle:
// On va donc pointer tous ces inputs (tous ensemble).
// const inputs = document.querySelectorAll('input[type="text"],input[type="email"],input[type="date"],input[type="number"],input[type="radio"], input[type="checkbox"]');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 
 *OUVERTURE OU FERMETURE DE LA FENÊTRE DE LA MODALE (ecoute de l'évenement + action)
 */
// -------GESTION DE LA MODALE-------------------------------------------------------
//launch modal event (boutons "je m'inscris")
//Ajout des EventListener aux boutons de l'index.html
registrationBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
//pour lancer le formulaire
function launchModal() {
    modalFrame.style.display = "block";
}

// Ecoute du click sur la croix de la Modale
closeWindowBtn.addEventListener("click", closeWindow);


// Fermeture du Formulaire
function closeWindow() {
    modalFrame.style.display = "none";
    document.getElementById("form").reset(); // Effacement des champs à la fermeture de la Modale
}

// -------GESTION DE LA FENETRE REMERCIEMENTS-------------------------------------------------------
// Ouverture de la Fenêtre de remerciements
function windowThanks() {
    blocThanks.style.display = "block";
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * MESSAGE D'ERREUR APPELÉ PAR LES FONCTIONS DE VALIDATION DES CHAMPS (INPUTS)
 */
//fonction qui va gérer le contenu des inputs.
//Elle prend 3 paramètres: Un tag, un message, puis elle va dire si valide ou pas
const errorDisplay = (tag, message, valid) => {
    //On passe un tag dynamique
    const container = document.querySelector("." + tag + "-formData");
    const span = document.querySelector("." + tag + "-formData > span");
    //On vérifie si cette fonction est d'erreur ou pas d'erreur (est-ce qu'elle est valide)
    if (!valid) {
        //3mn58
        container.classList.add("error");
        span.textContent = message;
        //Et si c valide:
    } else {
        container.classList.remove("error");
        span.textContent = message;
    }

};

const firstLastChecker = (value) => {
    if (!value) {
        errorDisplay("first", "Le champ doit être rempli!");
    } else if (value.length > 0 && (value.length < 3 || value.length > 20)) {
        console.log("pas ok ok");
        //Le 3ème paramètre, on le passe que pour le mettre à true.
        errorDisplay("first", "Le pseudo doit faire entre 3 et 20 caractères");

    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
        errorDisplay("first", "Le pseudo ne doit pas contenir de caractères spéciaux");

    } else {
        //ds ce cas on est ds le dernier else de notre fonction errorDisplay
        errorDisplay('first', "", true);
        console.log("action");
        return true;

    }
}

//Récupération de l'élément dans le DOM
let firstInput = document.getElementById("first");
console.log("valeur de l'input", firstInput.value);

// On checke avt d'appuyer sur le bouton
//Ajout du listener sur l'élément:
firstInput.addEventListener('change', (e) => {
    console.log("TARGET", e.target.value);
    //Fonction déclenchée au listener, en gros, dès que le firstname est 
    //modifié, qu'on appelle cette fonction.
    firstLastChecker(e.target.value);
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * VALIDATION DU FORMULAIRE
 */
// Pour confirmer envoi du formulaire:
fullForm.addEventListener('submit', (e) => {
    console.log("test lancement fonction submit");
    // empêche l'envoi du formulaire
    e.preventDefault();
    // Récupération de la valeur au submit
    firstValue = firstInput.value;
    console.log("firstValue ds submit", firstValue);
    if (firstLastChecker(firstValue) == true) {
        alert("Inscription validée!");
        //Fermeture de la Modale
        closeWindow();
        // Effacement des champs du formulaire
        document.getElementById("form").reset();
        // Fenêtre remerciements
        windowThanks();
        // // Fermeture de la fenêtre de remerciements avec "clic" sur la Croix ou sur le Bouton "Fermer"
        crossWindowThanks.addEventListener("click", closeWindowThanks);
        btnWindowThanks.addEventListener("click", closeWindowThanks);
        first = "";

        function closeWindowThanks() {
            blocThanks.style.display = "none";
        }

    } else {
        alert("Remplir les champs correctement!");

    };

});