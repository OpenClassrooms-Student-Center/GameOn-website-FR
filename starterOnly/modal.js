function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// *******************
// *******************
// My code starts here
// *******************
// *******************

// **********************
// Fermeture de la modale
// **********************

let close = document.querySelector(".close");

close.addEventListener("click", () => {
  modalbg.style.display = "none";
});

// *************************************************************************************
// Fonction pour vérifier le nombre de caractères utilisés dans le champs prénom
// *************************************************************************************

function verifyNbreCaracteresPrenom(chaine) {
  let regex = /[a-zA-Z]{2,}/; /*new RegExp("[a-zA-Z]{2,}"); */
  let resultat = regex.test(chaine);

  if (chaine === "") {
    throw new Error("Le champ ne peut pas être vide");
  }

  if (resultat === false){
    throw new Error("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  }
}

// *************************************************************************************
// Fonction pour vérifier le nombre de caractères utilisés dans le champs prénom
// *************************************************************************************

function verifyNbreCaracteresNom(chaine) {
  let regex = /[a-zA-Z]{2,}/; /*new RegExp("[a-zA-Z]{2,}"); */
  let resultat = regex.test(chaine);

  if (chaine === "") {
    throw new Error("Le champ ne peut pas rester vide");
  }

  if (resultat === false){
    throw new Error("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }
}

// **********************
// Vérification du Prénom
// Pas vide
// Au minimum 2 caractères
// **********************

function prenomOk() {
  let balisePrenom = document.getElementById("first");
  let prenom = balisePrenom.value.trim(); /* .trim() supprime les espaces inutiles et les caractères de contrôle qui pourraient empêcher la regex de fonctionner correctement */

  verifyNbreCaracteres(prenom);
}

// **********************
// Vérification du nom
// Pas vide
// Au minimum 2 caractères
// **********************

function nomOk() {
  let baliseNom = document.getElementById("last");
  let nom = baliseNom.value.trim(); /* .trim() supprime les espaces inutiles et les caractères de contrôle qui pourraient empêcher la regex de fonctionner correctement */

  verifyNbreCaracteres(nom);
}

// ***********************
// Vérification de l'email
// ***********************

function emailOk() {
  let baliseEmail = document.getElementById("email");
  let email = baliseEmail.value;
  let regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+");
  let resultat = regexEmail.test(email);

  if ((resultat == false)) {
    throw new Error("L'adresse mail rentrée n'est pas conforme");
  }
}

// *******************************************************************************
// Vérification que le champs nbre de concours à bien été rempli avec des chiffres
// *******************************************************************************

function nbreConcoursOk() {
  let baliseQuantity = document.getElementById("quantity");
  let quantity = baliseQuantity.value;
  let regexQuantity = new RegExp("[0-9]");
  let resultat = regexQuantity.test(quantity);

  if ((resultat == false)) {
    throw new Error("Vous devez remplir le champs avec un chiffre");
  }
}

// *******************************************************************************
// Vérification que le champs date de naissance est valide
// *******************************************************************************

function formatBirthdate(date) {
  const parts = date.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function birthdateOk() {
  let baliseBirthdate = document.getElementById("birthdate");
  let birthdate = baliseBirthdate.value;

  let formattedDate = formatBirthdate(birthdate);

  let regexBirthdate = /^([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/\d{4}$/;
  let resultat = regexBirthdate.test(formattedDate);

  if (!resultat) {
    throw new Error("Votre date de naissance n'est pas valide");
  }
}

// ***************************************************
// Vérif qu'un des boutons radios est bien sélectionné
// ***************************************************

function radioBtnOk() {
  // Option 1
  let btnRadio = document.querySelector('input[name="location"]:checked')

  if (!btnRadio){
    throw new Error("Vous devez sélectionner une ville")
  }
}

// **********************************************************
// Vérif que les conditions d'utilisation sont bien acceptées
// **********************************************************

function termsOfUseOk() {
  let checkboxTermsOfUse = document.getElementById("checkbox1")

  if (!checkboxTermsOfUse.checked) {
    throw new Error("Les conditions d'utilisation sont obligatoires")
  }
}

// ***************************************************
// Fonction pour faire apparaîtere le message d'erreur
// ***************************************************

function alertMessage(message, errorSpanId){

  let injectionMessageErreur = document.getElementById(errorSpanId)

  injectionMessageErreur.textContent = message

  injectionMessageErreur.style.fontSize = "1rem"
  injectionMessageErreur.style.color = "red"
}

// **********************************************************
// Fonction finale
// **********************************************************

function validate() {

  try {
    prenomOk();
    nomOk();
    emailOk();
    birthdateOk();
    nbreConcoursOk();
    radioBtnOk();
    termsOfUseOk();
  } catch (error) {

    let errorSpanId = "";

    if(error.message.includes("prénom")){
      errorSpanId = "error-first"
    } else if (error.message.includes("nom")){
      errorSpanId = "error-last"
    } else if (error.message.includes("être")){
      errorSpanId = "error-first"
    } else if (error.message.includes("rester")){
      errorSpanId = "error-last"
    } else if (error.message.includes("conforme")){
      errorSpanId = "error-email"
    } else if (error.message.includes("chiffre")){
      errorSpanId = "error-quantity"
    } else if (error.message.includes("naissance")){
      errorSpanId = "error-birthdate"
    } else if (error.message.includes("ville")){
      errorSpanId = "error-location"
    } else if (error.message.includes("obligatoires")){
      errorSpanId = "error-termsOfUse"
    }

    alertMessage(error.message, errorSpanId)
  }
}

// ********************************************************************************
// empeche le comportement par défaut du formulaire et lance la fonction principale
// ********************************************************************************

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});
