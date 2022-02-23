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
//CHECK FIRST & LAST*****************************************************************************************************************************************************
const firstLastChecker = (value, tag) => {
    if (!value) {
        errorDisplay(tag, "Le champ doit être rempli!");
    } else if (value.length > 0 && (value.length < 3 || value.length > 20)) {
        console.log("pas ok ok");
        //Le 3ème paramètre, on le passe que pour le mettre à true.
        errorDisplay(tag, "Le pseudo doit faire entre 3 et 20 caractères");

    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
        errorDisplay(tag, "Le pseudo ne doit pas contenir de caractères spéciaux");

    } else {
        //ds ce cas on est ds le dernier else de notre fonction errorDisplay
        errorDisplay(tag, "", true);
        console.log("action");
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
        //on fait disparaître le message d'erreur
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
    console.log(dateNow);
    console.log(dateInput);

    if (checkInput == "") {
        errorDisplay(tag, "Le champ date de naissance doit être rempli");

    } else if (!checkInput.match(/[0-9]/)) {
        console.log("la date est vide", checkInput);
        errorDisplay(tag, "Vous devez entrer votre date de naissance.");

    } else {
        if (dateInput < dateNow) {
            console.log("Ok");
            errorDisplay(tag, "", true);
            return true;
        } else {
            console.log("pas Ok");
            errorDisplay(tag, "Date de naissance impossible");

        }
    }
    console.log("date", checkInput);
};
//CHECK DE LA QUANTITE*****************************************************************************************************************************************************
const quantityChecker = (value, tag) => {
    if (value == "") {
        errorDisplay(tag, "Le champ nombre de trournoi doit être rempli");

    } else if (!value.match(/^[0-9]+$/)) {
        console.log("Pas un chiffre", value);
        errorDisplay(tag, "Veuillez entrer un chiffre");

    } else if (!value.match(/^[0-9][0-9]?$/)) {
        console.log("Mauvaise quantité", value);
        errorDisplay(tag, "Le chiffre doit être compris entre 0 et 99.");

    } else {
        console.log("Bonne quantité", value);
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
    // console.log("Valeur de la checkbox:", value);
    // console.log(checkRadioClass);
    // console.log(checkRadioSpan);

    if (!value) {
        // Ajout de la classe "error" si c pas valide
        checkRadioClass.classList.add("error");
        // Ecriture du message d'erreur dans la balise span 
        checkRadioSpan.textContent = "Vous devez choisir une ville.";
        // radioButton = null;
        console.log("checkboxChecker no", value);
    } else {
        // Suppression de la classe "error" si c valide 
        checkRadioClass.classList.remove("error");
        // Ecriture du message (vide) dans la balise span
        checkRadioSpan.textContent = "";
        // radioButton = value;
        console.log("checkboxChecker OK", value);
        return true;

    }
}

//CHECK CONDITIONS D'UTILISATION*****************************************************************************************************************************************************

//Conditions d'utilisation

const termsUseChecker = (value, tag) => {
    console.log("test", value);
    if (!value) {
        errorDisplay(tag, "Vous devez vérifier que vous acceptez les termes et conditions d'utilisation.");
    } else if (!document.getElementById("checkbox1").checked) {
        console.log("décoché");
        errorDisplay(tag, "Vous devez vérifier que vous acceptez les termes et conditions d'utilisation.");
        console.log("valeur de checkbox 2ème tps (dans le if)", checkbox1);
    } else {
        console.log("coché");
        errorDisplay(tag, "", true);
        console.log("valeur de checkbox 2ème tps (else)", checkbox1);
        return true;
    }
};
//******************************************************************************************************************************* */

//FIRST
//Récupération de l'id first dans le DOM
let firstInput = document.getElementById("first");
console.log("valeur de l'input", firstInput.value);

//Ajout du listener sur l'élément et contrôle:
firstInput.addEventListener('change', (e) => {
    console.log("TARGET FIRST", e.target.value);
    //Fonction déclenchée au listener, en gros, dès que le firstname est 
    //modifié, qu'on appelle cette fonction.
    firstLastChecker(e.target.value, "first");
});

//LAST
//Récupération de l'id last dans le DOM
let lastInput = document.getElementById("last");
console.log("valeur de l'input", lastInput.value);

//Ajout du listener sur l'élément et contrôle:
lastInput.addEventListener('change', (e) => {
    console.log("TARGET LAST", e.target.value);
    //Fonction déclenchée au listener, en gros, dès que le firstname est 
    //modifié, qu'on appelle cette fonction.
    firstLastChecker(e.target.value, "last");
});
//EMAIL
let emailInput = document.getElementById("email");
console.log("valeur de l'input", emailInput.value);

//Ajout du listener sur l'élément et contrôle:
emailInput.addEventListener('change', (e) => {
    console.log("TARGET EMAIL", e.target.value);
    //Fonction déclenchée au listener, en gros, dès que le firstname est 
    //modifié, qu'on appelle cette fonction.
    emailChecker(e.target.value, "email");
});

//DATE DE NAISSANCE
let birthdayInput = document.getElementById("birthdate");
console.log("valeur de l'input", birthdayInput.value);

//Ajout du listener sur l'élément et contrôle:
birthdayInput.addEventListener('change', (e) => {
    console.log("TARGET BIRTHDAY", e.target.value);
    //Fonction déclenchée au listener, en gros, dès que le firstname est 
    //modifié, qu'on appelle cette fonction.
    birthdayChecker(e.target.value, "birthdate");
});

//NOMBRE DE TOURNOI
let quantityInput = document.getElementById("quantity");
console.log("valeur de l'input", quantityInput.value);

//Ajout du listener sur l'élément et contrôle:
quantityInput.addEventListener('input', (e) => {
    console.log("TARGET QUANTITY", e.target.value);
    //Fonction déclenchée au listener, en gros, dès que le firstname est 
    //modifié, qu'on appelle cette fonction.
    quantityChecker(e.target.value, "number");
});
//Conditions d'utilisation
let choiceInput = document.getElementById("checkbox1");
choiceInput.addEventListener('change', (e) => {
    console.log("TARGET CONDITIONS D'UTILISATION", e.target.value);
    termsUseChecker(e.target.value, "checkbox1");
});
//A REVOIR......
//CHOIX DU TOURNOI
let checkBoxValue = "";
let checkBoxInput = document.querySelectorAll('input[type="radio"]');
checkBoxInput.forEach((inputValue) => {
    inputValue.addEventListener('input', (e) => {
        console.log(e.target.id);
        switch (e.target.id) {
            case "location1":
                checkboxChecker(e.target.value);
                console.log("Valeur de location1 ds le switch", e.target.value);
                checkBoxValue = e.target.value;
                console.log("Valeur de location1-checkBoxValue ds le switch", checkBoxValue);
                break;
            case "location2":
                checkboxChecker(e.target.value);
                console.log("Valeur de location2 ds le switch", e.target.value);
                checkBoxValue = e.target.value;
                console.log("Valeur de location2-checkBoxValue ds le switch", checkBoxValue);
                break;
            case "location3":
                checkboxChecker(e.target.value);
                console.log("Valeur de location3 ds le switch", e.target.value);
                checkBoxValue = e.target.value;
                console.log("Valeur de location3-checkBoxValue ds le switch", checkBoxValue);
                break;
            case "location4":
                checkboxChecker(e.target.value);
                console.log("Valeur de location4 ds le switch", e.target.value);
                checkBoxValue = e.target.value;
                console.log("Valeur de location4-checkBoxValue ds le switch", checkBoxValue);
                break;
            case "location5":
                checkboxChecker(e.target.value);
                console.log("Valeur de location5 ds le switch", e.target.value);
                checkBoxValue = e.target.value;
                console.log("Valeur de location5-checkBoxValue ds le switch", checkBoxValue);
                break;
            case "location6":
                checkboxChecker(e.target.value);
                console.log("Valeur de location6 ds le switch", e.target.value);
                checkBoxValue = e.target.value;
                console.log("Valeur de location6-checkBoxValue ds le switch", checkBoxValue);
                break;
            default:
                null;
        }
    })
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
    lastValue = lastInput.value;
    emailValue = emailInput.value;
    birthdayValue = birthdayInput.value;
    quantityValue = quantityInput.value;
    // checkboxChecker(radioButton);
    // checkBoxValue = checkBoxInput.value;
    console.log("Valeur finale du bouton radio: ", checkBoxValue);
    termsUseValue = choiceInput.value;
    console.log("conditions d'utilisations: ", choiceInput.value);

    if (firstLastChecker(firstValue, "first") && firstLastChecker(lastValue, "last") && emailChecker(emailValue, "email") && birthdayChecker(birthdayValue, "birthdate") && quantityChecker(quantityValue, "number") && checkboxChecker(checkBoxValue) && termsUseChecker(termsUseValue, "checkbox1") == true) {
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