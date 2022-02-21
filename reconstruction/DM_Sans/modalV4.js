//MODAL OK + Ré organisation du code

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
const inputs = document.querySelectorAll('input[type="text"],input[type="email"],input[type="date"],input[type="number"],input[type="radio"], input[type="checkbox"]');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


/**
 * 
 *OUVERTURE OU FERMETURE DE LA FENÊTRE DE LA MODALE (ecoute de l'évenement + action)
 */
// -------GESTION DE LA MODALE-------------------------------------------------------
// launch modal event
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/**
 * DÉCLARATION DES VARIABLES DE VALIDATION POUR LE FORMULAIRE
 */

let first,
    last,
    email,
    birthdate,
    number,
    radioButton,
    checkbox1;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/**
 * FONCTIONS DE TEST ET VALIDATION DES CHAMPS (INPUTS)
 */

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


/**
 * CONTRÔLE DU PRENOM
 * Issues(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
 */
//Prénom
function firstChecker(value) {
    //Observation de ce que récupère la fonction
    console.log(value);
    if (!value) {
        errorDisplay("first", "Le champ doit être rempli!");
        // alert("Mettez votre nom.");
        first = null;
    } else if (value.length > 0 && (value.length < 3 || value.length > 20)) {
        //Le 3ème paramètre, on le passe que pour le mettre à true.
        errorDisplay("first", "Le pseudo doit faire entre 3 et 20 caractères");
        first = null;
    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
        errorDisplay("first", "Le pseudo ne doit pas contenir de caractères spéciaux");
        // Si tout ça c bon, je le rends valide
        first = null;
    } else {
        //ds ce cas on est ds le dernier else de notre fonction errorDisplay
        errorDisplay('first', "", true);
        // On incrémente notre variable de l'information du pseudo
        // Comme si on crée des boîtes qui reçoivent ce qui a été tapé par l'utilisateur
        // sur tout ce qui est fonctionnel
        // Donc on va dire "First, on te passe la value":
        first = value;
        //!!!Il faut se prémunir de qqchose: si jamais le first n'est pas bon, 
        //qu'on ne puisse pas envoyer le formulaire.
        // c à dire si l'utilisteur tape au début un bon pseudo
        // Et qu'après ce pseudo n'est pas bon par accident une lettre est effacé.
        // pour régler cela, cf instruction first = null ds les blocs ci-dessus.
    }
}

/**
 * CONTRÔLE DU NOM
 * Issues(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
 */
//Nom
function lastChecker(value) {
    //Observation de ce que récupère la fonction
    console.log(value);
    if (value == "") {
        errorDisplay("last", "Le champ doit être rempli!");
        // alert("Mettez votre nom.");
        last = null;
    } else if (value.length > 0 && (value.length < 3 || value.length > 20)) {
        errorDisplay("last", "Le pseudo doit faire entre 3 et 20 caractères");
        last = null;
    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
        errorDisplay("last", "Le pseudo ne doit pas contenir de caractères spéciaux");
        last = null;
    } else {
        errorDisplay('last', "", true);
        last = value;
    }
}

/**
 * CONTRÔLE DE L'EMAIL
 * Issues(3) L'adresse électronique est valide.
 */

function emailChecker(value) {
    if (value == "") {
        errorDisplay("email", "Le champ doit être rempli!");
        // alert("Mettez votre nom.");
        email = null;
    } else if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        errorDisplay("email", "Le mail n'est pas valide");
        //on passe la variable sur null si jamais elle a été incrémentée
        email = null;
    } else {
        //on fait disparaître le message d'erreur
        errorDisplay("email", "", true);
        //Puis on incrémente la variable
        email = value;
    }
};

/**
 * CONTRÔLE DE LA DATE DE NAISSANCE
 */
//Date de naissance
function birthdayChecker(value) {
    let checkInput = value;
    let checkDate = value;
    let dateNow = Date.now();
    let dateInput = Date.parse(checkDate);
    console.log(dateNow);
    console.log(dateInput);

    if (checkInput == "") {
        errorDisplay("birthdate", "Le champ date de naissance doit être rempli");
        birthdate = null;
    } else if (!checkInput.match(/[0-9]/)) {
        console.log("la date est vide", checkInput);
        errorDisplay("birthdate", "Vous devez entrer votre date de naissance.");
        birthdate = null;
    } else {
        if (dateInput < dateNow) {
            console.log("Ok");
            errorDisplay("birthdate", "", true);
            birthdate = value;
        } else {
            console.log("pas Ok");
            errorDisplay("birthdate", "Date de naissance impossible");
            birthdate = null;
        }
    }
    console.log("date", checkInput);
};

/**
 * CONTRÔLE DE LA QUANTITÉ
 * Issues(4) Pour le nombre de concours, une valeur numérique est saisie.
 */

//Nombre de tournois
function quantityChecker(value) {
    if (value == "") {
        errorDisplay("number", "Le champ nombre de trournoi doit être rempli");
        number = null;
    } else if (!value.match(/^[0-9]+$/)) {
        console.log("Pas un chiffre", value);
        errorDisplay("number", "Veuillez entrer un chiffre");
        number = null;
    } else if (!value.match(/^[0-9][0-9]?$/)) {
        console.log("Mauvaise quantité", value);
        errorDisplay("number", "Le chiffre doit être compris entre 0 et 99.");
        number = null;
    } else {
        console.log("Bonne quantité", value);
        errorDisplay("number", "", true);
        number = value;
    }
}

/**
 * CONTRÔLE DES BOUTONS RADIO
 * Issues(5) Un bouton radio est sélectionné.
 */
// Quel tournoi?
function checkboxChecker(value) {
    const checkRadioClass = document.querySelector(".location-formData");
    const checkRadioSpan = document.querySelector(".location-formData > span");
    console.log("Valeur de la checkbox:", value);
    console.log(checkRadioClass);
    console.log(checkRadioSpan);

    if (!value) {
        // Ajout de la classe "error" si c pas valide
        checkRadioClass.classList.add("error");
        // Ecriture du message d'erreur dans la balise span 
        checkRadioSpan.textContent = "Vous devez choisir une ville.";
        radioButton = null;
        console.log("checkboxChecker no", value);
    } else {
        // Suppression de la classe "error" si c valide 
        checkRadioClass.classList.remove("error");
        // Ecriture du message (vide) dans la balise span
        checkRadioSpan.textContent = "";
        radioButton = value;
        console.log("checkboxChecker OK", value);
    }
}

/**
 * CONTRÔLE DE LA COCHE DES CONDITIONS D'UTILISATION
 * Issues(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
 */
//Conditions d'utilisation
console.log("valeur de checkbox 1er tps", checkbox1);

function termsUseChecker(value) {
    console.log("test", value);
    if (!value) {
        errorDisplay("checkbox1", "Vous devez vérifier que vous acceptez les termes et conditions d'utilisation.");
        checkbox1 = null;
    } else if (!document.getElementById("checkbox1").checked) {
        console.log("décoché");
        errorDisplay("checkbox1", "Vous devez vérifier que vous acceptez les termes et conditions d'utilisation.");
        checkbox1 = null;
        console.log("valeur de checkbox 2ème tps (dans le if)", checkbox1);
    } else {
        console.log("coché");
        errorDisplay("checkbox1", "", true);
        checkbox1 = value;
        console.log("valeur de checkbox 2ème tps (else)", checkbox1);
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


/**
 * DÉTECTION DE LA VALEUR POUR CHAQUE INPUT (champ du formulaire)
 * ET ENVOI VERS LA FONCTION TEST ASSOCIÉE A L'INPUT
 */
//Création d'un evenlistener sur chaque input
inputs.forEach((inputValue) => {
    inputValue.addEventListener('input', (e) => {
        //on identifie ds quel input on travaille.
        //Et là on voit qu'on vient de créer 4 evenlistener en qqs lignes.
        console.log(e.target.id);
        console.log("La target", e.target.value);
        //test des fonctions
        // firstChecker(e.target.value);
        // lastChecker(e.target.value);
        // Via un switch, selon le e.target.id, on va lui dire:
        // "selon le cas que tu touves selon la target (car son rôle sera de tester le e.target.id),
        // et bien si tu tombes sur pseudo, et bien joues-moi pseudo-cheker... etc idem pour les autres
        // inputs.
        // Du coup selon ce que fait l'utilisateur on fait un check:
        switch (e.target.id) {
            case "first":
                firstChecker(e.target.value);
                break;
            case "last":
                lastChecker(e.target.value);
                break;
            case "email":
                emailChecker(e.target.value);
                break;
            case "birthdate":
                birthdayChecker(e.target.value);
                break;
            case "quantity":
                quantityChecker(e.target.value);
                break;
            case "location1":
                checkboxChecker(e.target.value);
                break;
            case "location2":
                checkboxChecker(e.target.value);
                break;
            case "location3":
                checkboxChecker(e.target.value);
                break;
            case "location4":
                checkboxChecker(e.target.value);
                break;
            case "location5":
                checkboxChecker(e.target.value);
                break;
            case "location6":
                checkboxChecker(e.target.value);
                break;
            case "checkbox1":
                termsUseChecker(e.target.value);
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
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/**
 * VALIDATION DU FORMULAIRE
 */

// Pour confirmer envoi du formulaire:
fullForm.addEventListener('submit', (e) => {
    // const data = null;
    // console.log("Objet data", data);
    console.log("test lancement fonction submit");
    // empêche l'envoi du formulaire
    e.preventDefault();
    firstChecker(first);
    lastChecker(last);
    emailChecker(email);
    birthdayChecker(birthdate);
    quantityChecker(number);
    checkboxChecker(radioButton);
    termsUseChecker(checkbox1);

    //si tous les champs sont corrects
    if (first && last && email && birthdate && number && radioButton && checkbox1) {
        alert("Inscription validée!");
        //Fermeture de la Modale
        closeWindow();
        // // ****A    REVOIR*********************************************
        // Effacement des champs du formulaire
        document.getElementById("form").reset();
        // Fenêtre remerciements
        windowThanks();
        // // Fermeture de la fenêtre de remerciements avec "clic" sur la Croix ou sur le Bouton "Fermer"
        crossWindowThanks.addEventListener("click", closeWindowThanks);
        btnWindowThanks.addEventListener("click", closeWindowThanks);

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