function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
// REGEX 
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const regexBirthdate = /^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i;
const regexNumber = /^[0-9]*$/;

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

const form = document.getElementsByName('reserve')[0];

// EVENTS
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModal);


// FUNCTIONS
function launchModal() {
    modalbg.style.display = "block";
}

function closeModal() {
    modalbg.style.display = "none";
}

// permet de ne pas soumettre les données du formulaire. A la place on fermera la fenetre une fois les saisies validés
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

// fonctions gestion des erreurs de saisie 
// affiche l'erreur
function displayErrorMessage(elementId, message) {
    if (elementId && message) {
        document.getElementById(elementId).style.display = "block";
        document.getElementById(elementId).innerText = message;
    }
    else throw new Error('Missing parameter for handler error message');
}
// 'efface' le message d'erreur
function hideErrorMessage(elementId) {
    if (elementId) document.getElementById(elementId).style.display = "none";
}

// verifie que le champ n'est pas vide
function isEmpty(value) {
    if (!value) return false;
    else return true;
}


function validate() {
  
    let firstValid = isEmpty(form["first"].value) && form["first"].value.length >= 2 ;
    firstValid ? hideErrorMessage('error-first', form["first"]) : displayErrorMessage('error-first', "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");

    let lastValid = isEmpty(form["last"].value) && form["last"].value.length >= 2 ;
    lastValid ? hideErrorMessage('error-last', form["last"]) : displayErrorMessage('error-last', "Veuillez entrer 2 caractères ou plus pour le champ du nom.");

    let emailValid = isEmpty(form["email"].value) && regexEmail.test(form["email"].value);
    emailValid ? hideErrorMessage('error-email', form["email"]) : displayErrorMessage('error-email', "Veuillez entrer une addresse mail valide.");

    let birthdateValid = isEmpty(form["birthdate"].value) && regexBirthdate.test(form["birthdate"].value);
    birthdateValid ? hideErrorMessage('error-birthdate', form["birthdate"]) : displayErrorMessage('error-birthdate', "Veuillez entrer une date de naissance valide.");

    let quantityValid = isEmpty(form["quantity"].value) && regexNumber.test(form["quantity"].value);
    quantityValid ? hideErrorMessage('error-quantity', form["quantity"]) : displayErrorMessage('error-quantity', "Veuillez entrer une valeur numérique.");

    let locationValid = isEmpty(form["location"].value);
    locationValid ? hideErrorMessage('error-location') : displayErrorMessage('error-location', "Veuillez sélectionner une ville.");

    let termsValid = isEmpty(form["checkbox1"].checked);
    termsValid ? hideErrorMessage('error-checkbox1') : displayErrorMessage('error-checkbox1', "Veuillez acceptez les conditions générales.");

    // si tous les champs sont valides alors on renvoie vrai et on ferme le formulaire.
    if (
        firstValid
        && lastValid
        && emailValid
        && birthdateValid
        && quantityValid
        && locationValid
        && termsValid
    ) {
        alert('Merci ! Votre réservation a été reçue.');
        closeModal();
    }
}