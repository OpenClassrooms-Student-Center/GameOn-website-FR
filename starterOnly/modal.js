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
const closeModalBtn = document.querySelectorAll("#close");

// Mes VARIABLES
let myForm = document.getElementById("myForm");
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let tournoiNumber = document.getElementById("quantity");
let locationUn = document.getElementById("location1");
let locationDeux = document.getElementById("location2");
let locationTrois = document.getElementById("location3");
let locationQuatre = document.getElementById("location4");
let locationCinq = document.getElementById("location5");
let locationSix = document.getElementById("location6");
let checkCondition = document.getElementById("checkbox1");
let msgConfirm = document.getElementById("message-confirm");

// MES FONCTIONS
// A l'envoi on vérifie que la fonction checkInputs return true //
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  // Si return true alors on fait apparaitre le msg de validation
  if (checkInputs() == true) {
    msgConfirm.style.display = "block";
    messageValid();
    // Sinon on return false est le formulaire ne s'envoie pas.
  } else {
    return false;
  }
});

function checkInputs() {
  // Conditions if NAME //
  let firstError = document.getElementById("first_error");
  // Si firstName est égal a vide ou inferieux a deux = msg d'erreur + return false.
  if (firstName.value == "" || firstName.value.length < 2) {
    firstError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champs du prénom";
    firstError.style.color = "Red";
    firstError.style.fontSize = "20px";
    return false;
    // Sinon pas de msg d'erreur + return true.
  } else {
    firstError.innerHTML = "";
  }

  // Conditions if LASTNAME //
  let lastError = document.getElementById("last_error");
  // Si lastName est égal a vide ou inferieur a deux = msg d'erreur + return false.
  if (lastName.value == "" || lastName.value.length < 2) {
    lastError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champs du nom";
    lastError.style.color = "red";
    lastError.style.fontSize = "20px";
    return false;
    // Sinon pas de msg d'erreur + return true.
  } else {
    lastError.innerHTML = "";
  }

  // Conditions if EMAIL //
  let emailError = document.getElementById("email_error");
  let myRegex =
    /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  // Si myRegex est different de la valeur de email ou si email est égal a vide = msg d'erreur + return false.
  if (!myRegex.test(email.value) || email.Value == "") {
    emailError.innerHTML = "Veuillez rentrer une adresse mail valide";
    emailError.style.color = "red";
    emailError.style.fontSize = "20px";
    return false;
    // Sinon pas de msg d'erreur + return true.
  } else {
    emailError.innerHTML = "";
  }

  let birthdate = document.getElementById("birthdate");
  let birthdateError = document.getElementById("birthdate_error");
  let regex = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
  if (!regex.test(birthdate.value)) {
    birthdateError.innerHTML = "Veuillez rentrer une adresse mail valide";
    birthdateError.style.color = "red";
    birthdateError.style.fontSize = "20px";
    return false;
  } else {
    birthdateError.innerHTML = "";
  }

  // Conditions if TOURNOI //
  let numberError = document.getElementById("tournoi_error");
  // Si tournoiNumber est égal à 0 ou si la valeur de tournoiNumber n'es pas un nombre = msg d'erreur + return false.
  if (tournoiNumber.value == "" || isNaN(tournoiNumber.value)) {
    numberError.innerHTML = "Veuillez rentrer au moins un chiffre";
    numberError.style.color = "red";
    numberError.style.fontSize = "20px";
    return false;
  } else {
    numberError.innerHTML = "";
  }

  // Conditions if CHECKBOX //
  let locationError = document.getElementById("location_error");
  // Si au moins un des six inputs est checked = pas de msg d'erreur + return true.
  if (
    locationUn.checked ||
    locationDeux.checked ||
    locationTrois.checked ||
    locationQuatre.checked ||
    locationCinq.checked ||
    locationSix.checked
  ) {
    locationError.innerHTML = "";
    // Sinon si aucun input n'est checked = msg d'erreur + return false
  } else {
    locationError.innerHTML = "Vous devez choisir une option";
    locationError.style.color = "red";
    locationError.style.fontSize = "20px";
    return false;
  }

  // Conditions if REGLEMENT //
  let conditionError = document.getElementById("condition_error");
  // Si checkbox n'est pas coché = msg d'erreur + return false.
  if (!checkCondition.checked) {
    conditionError.innerHTML =
      "Vous devez verifier que vous acceptez les termes et conditions";
    conditionError.style.color = "red";
    conditionError.style.fontSize = "20px";
    return false;
    // Sinon pas de msg d'erreur + return true.
  } else {
    conditionError.innerHTML = "";
  }
  return true;
}

function messageValid() {
  // Au clique sur l'input le message de validation disparait + envoie du formulaire.
  let cliqueOk = document.getElementById("validate");
  cliqueOk.addEventListener("click", () => {
    msgConfirm.style.display = "none";
    myForm.submit();
  });
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close modal event
closeModalBtn.forEach((elt) => {
  elt.addEventListener("click", closeModal);
});

//Close modal form
function closeModal() {
  modalbg.style.display = "none";
}
