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
// Fonction pour vérifier le nombre de caractères utilisés dans les champs nom et prénom
// *************************************************************************************

function verifyNbreCaracteres(chaine) {
  let regex = new RegExp("/[a-zA-Z]{2,}/gm"); 
  let resultat = regex.test(chaine);

  if (resultat == false) {
    throw new Error("vous devez rentrer au moins 2 caractères");
  }

  if (chaine === "") {
    throw new Error("Le champ ne peut pas être vide");
  }
}

// **********************
// Vérification du Prénom et nom
// Pas vide
// Au minimum 2 caractères
// **********************

function prenomNomOk() {
  let balisePrenom = document.getElementById("first");
  let baliseNom = document.getElementById("last");
  let prenom = balisePrenom.value;
  let nom = baliseNom.value;

  verifyNbreCaracteres(prenom);
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

// ***************************************************
// Vérif qu'un des boutons radios est bien sélectionné
// ***************************************************

function radioBtnOk() {
  let btnRadio = document.querySelectorAll('input[name="location"]')

  if (!btnRadio.checked){
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

// **********************************************************
// Fonction finale
// **********************************************************

function validate() {
  try {
    prenomNomOk();
    emailOk();
    nbreConcoursOk();
    radioBtnOk();
    termsOfUseOk();
  } catch (error) {
    console.log("une erreur s'est produite : " + error.message);
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
