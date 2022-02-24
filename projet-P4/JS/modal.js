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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 
 *OUVERTURE OU FERMETURE DE LA FENÊTRE DE LA MODALE (ecoute de l'évenement + action)
 */
// -------GESTION DE LA MODALE-------------------------------------------------------
//launch modal event (boutons "je m'inscris")
registrationBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * FONCTIONS DE TEST ET VALIDATION DES CHAMPS (INPUTS)
 */

/**
 * MESSAGE D'ERREUR APPELÉ PAR LES FONCTIONS DE VALIDATION DES CHAMPS (INPUTS)
 */

//fonction qui va gérer le contenu des inputs.
const errorDisplay = (tag, message, valid) => {
    const container = document.querySelector("." + tag + "-formData");
    const span = document.querySelector("." + tag + "-formData > span");
    if (!valid) {
        container.classList.add("error");
        span.textContent = message;
    } else {
        container.classList.remove("error");
        span.textContent = message;
    }

};
//CHECK FIRST & LAST*****************************************************************************************************************************************************
const firstLastChecker = (value, tag) => {
    if (!value) {
        errorDisplay(tag, "Le champ doit être rempli!");
    } else if (value.length > 0 && (value.length < 3 || value.length > 20)) {
        errorDisplay(tag, "Veuillez entrer 2 caractères ou plus");

    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
        errorDisplay(tag, "Le pseudo ne doit pas contenir de caractères spéciaux");

    } else {
        errorDisplay(tag, "", true);
        return true;
    }
};

//CHECK EMAIL*****************************************************************************************************************************************************
const emailChecker = (value, tag) => {
    if (value == "") {
        errorDisplay(tag, "Le champ doit être rempli!");

    } else if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        errorDisplay(tag, "Le mail n'est pas valide");

    } else {
        errorDisplay(tag, "", true);
        return true;
    }
};

//CHECK DATE DE NAISSANCE*****************************************************************************************************************************************************
const birthdayChecker = (value, tag) => {
    let checkInput = value;
    let checkDate = value;
    let dateNow = Date.now();
    let dateInput = Date.parse(checkDate);


    if (checkInput == "") {
        errorDisplay(tag, "Le champ date de naissance doit être rempli");

    } else if (!checkInput.match(/[0-9]/)) {
        errorDisplay(tag, "Vous devez entrer votre date de naissance.");

    } else {
        if (dateInput < dateNow) {
            errorDisplay(tag, "", true);
            return true;
        } else {
            errorDisplay(tag, "Date de naissance impossible");

        }
    }
};
//CHECK DE LA QUANTITE*****************************************************************************************************************************************************
const quantityChecker = (value, tag) => {
    if (value == "") {
        errorDisplay(tag, "Le champ nombre de trournoi doit être rempli");

    } else if (!value.match(/^[0-9]+$/)) {
        errorDisplay(tag, "Veuillez entrer un chiffre");

    } else if (!value.match(/^[0-9][0-9]?$/)) {
        errorDisplay(tag, "Le chiffre doit être compris entre 0 et 99.");

    } else {
        errorDisplay(tag, "", true);
        return true;
    }
}


//CHECK DES BOUTONS RADIO*****************************************************************************************************************************************************
// let radioButton;
// // Quel tournoi?
const checkboxChecker = (value) => {
    const checkRadioClass = document.querySelector(".location-formData");
    const checkRadioSpan = document.querySelector(".location-formData > span");

    if (!value) {
        checkRadioClass.classList.add("error");
        checkRadioSpan.textContent = "Vous devez choisir une option.";
    } else {
        checkRadioClass.classList.remove("error");
        checkRadioSpan.textContent = "";
        return true;

    }
}

//CHECK CONDITIONS D'UTILISATION*****************************************************************************************************************************************************

//Conditions d'utilisation

const termsUseChecker = (value, tag) => {
    if (!value) {
        errorDisplay(tag, "Vous devez vérifier que vous acceptez les termes et conditions d'utilisation.");
    } else if (!document.getElementById("checkbox1").checked) {
        errorDisplay(tag, "Vous devez vérifier que vous acceptez les termes et conditions d'utilisation.");
    } else {
        errorDisplay(tag, "", true);
        return true;
    }
};

//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */
//******************************************************************************************************************************* */


//LISTENER SUR CHACUN DES ELEMENTS*****************************************************************************************************************************************************

//FIRST
//Récupération de l'id first dans le DOM
let firstInput = document.getElementById("first");

//Ajout du listener sur l'élément et contrôle:
firstInput.addEventListener('change', (e) => {
    firstLastChecker(e.target.value, "first");
});


//LAST
//Récupération de l'id last dans le DOM
let lastInput = document.getElementById("last");

//Ajout du listener sur l'élément et contrôle:
lastInput.addEventListener('change', (e) => {
    firstLastChecker(e.target.value, "last");
});


//EMAIL
let emailInput = document.getElementById("email");

//Ajout du listener sur l'élément et contrôle:
emailInput.addEventListener('change', (e) => {
    emailChecker(e.target.value, "email");
});


//DATE DE NAISSANCE
let birthdayInput = document.getElementById("birthdate");

//Ajout du listener sur l'élément et contrôle:
birthdayInput.addEventListener('change', (e) => {
    birthdayChecker(e.target.value, "birthdate");
});



//NOMBRE DE TOURNOI
let quantityInput = document.getElementById("quantity");

//Ajout du listener sur l'élément et contrôle:
quantityInput.addEventListener('input', (e) => {
    quantityChecker(e.target.value, "number");
});



//CONDITIONS D'UTILISATION
let choiceInput = document.getElementById("checkbox1");

//Ajout du listener sur l'élément et contrôle:
choiceInput.addEventListener('change', (e) => {
    termsUseChecker(e.target.value, "checkbox1");
});



//CHOIX DU TOURNOI
let checkBoxValue = "";
let checkBoxInput = document.querySelectorAll('input[type="radio"]');

//Ajout du listener
checkBoxInput.forEach((inputValue) => {
    inputValue.addEventListener('input', (e) => {
        switch (e.target.id) {
            case "location1":
                checkboxChecker(e.target.value);
                checkBoxValue = e.target.value;
                break;
            case "location2":
                checkboxChecker(e.target.value);
                checkBoxValue = e.target.value;
                break;
            case "location3":
                checkboxChecker(e.target.value);
                checkBoxValue = e.target.value;
                break;
            case "location4":
                checkboxChecker(e.target.value);
                checkBoxValue = e.target.value;
                break;
            case "location5":
                checkboxChecker(e.target.value);
                checkBoxValue = e.target.value;
                break;
            case "location6":
                checkboxChecker(e.target.value);
                checkBoxValue = e.target.value;
                break;
            default:
                null;
        }
    })
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * VALIDATION DU FORMULAIRE
 */
// Pour confirmer envoi du formulaire:
fullForm.addEventListener('submit', (e) => {
    // empêche l'envoi du formulaire
    e.preventDefault();
    // Récupération de la valeur au submit
    firstValue = firstInput.value;
    lastValue = lastInput.value;
    emailValue = emailInput.value;
    birthdayValue = birthdayInput.value;
    quantityValue = quantityInput.value;
    termsUseValue = choiceInput.value;

    if (firstLastChecker(firstValue, "first") &&
        firstLastChecker(lastValue, "last") &&
        emailChecker(emailValue, "email") &&
        birthdayChecker(birthdayValue, "birthdate") &&
        quantityChecker(quantityValue, "number") &&
        checkboxChecker(checkBoxValue) &&
        termsUseChecker(termsUseValue, "checkbox1") == true) {
        alert("Merci! Votre réservation a été reçue!");
        //Fermeture de la Modale
        closeWindow();
        // Effacement des champs du formulaire
        document.getElementById("form").reset();
        // Fenêtre remerciements
        windowThanks();
        // Fermeture de la fenêtre de remerciements avec "clic" sur la Croix ou sur le Bouton "Fermer"
        crossWindowThanks.addEventListener("click", closeWindowThanks);
        btnWindowThanks.addEventListener("click", closeWindowThanks);

        firstValue = "";
        lastValue = "";
        emailValue = "";
        birthdayValue = "";
        quantityValue = "";
        checkBoxValue = "";
        termsUseValue = "";

        function closeWindowThanks() {
            blocThanks.style.display = "none";
        }

    } else {
        alert("Remplir les champs correctement!");

    };

});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/**
 * SWITCH CLASS RESPONSIVE
 * Lors du clic sur l'icône menu "fa-bars" :
 * lancement de la fonction editNav qui switch entre la classe "topnav" et "topnav.responsive"
 */

//Pour gérer le responive de la nav-bar
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}