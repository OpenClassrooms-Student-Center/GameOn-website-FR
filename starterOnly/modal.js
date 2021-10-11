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

const firstNameInput = document.getElementById('first');
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationInput = document.querySelectorAll("[name='location']");
const checkboxInput = document.getElementById("checkbox1");


//Aucune coché par defaut
const BtnLocationDefault = (locationInput.checked = false);
console.log("STATUT LOCATION DEFAULT " + BtnLocationDefault + "");

//Condition coché par defaut
const ConditionDefaultchecked = (checkboxInput.checked = true);
console.log("STATUT C.G.V DEFAULT " + ConditionDefaultchecked + "");


const errorMessages = {
  firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
  lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
  email: "Veuillez entrer une adresse email valide.",
  birthdate: "Veuillez entrer une date de naissance valide.",
  quantity: "Veuillez entrer un nombre valide.",
  location: "Veuillez choisir une ville.",
  checkbox: "Veuillez accepter les conditions d'utilisations.",
};


// Fermer la modale #1
const closeBtn = document.querySelectorAll(".close");

//validation modal: ajouter confirmation quand envoie réussi #4
const modalV = document.querySelector(".modalValidate");
const modalVbg = document.querySelector(".bground2");
const closeBtnV = document.querySelectorAll(".closeV");
const closeBtn2 = document.querySelectorAll(".close2");

// Implémenter entrées du formulaire #2, ajouter validation ou messages d'erreur #3, ajouter confirmation quand envoie réussi #4
// submit
document.getElementById("reserve-form").addEventListener("submit", validate);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal validation event
closeBtnV.forEach((btn) => btn.addEventListener("click", closeModalV));
closeBtn2.forEach((btn) => btn.addEventListener("click", closeModalV));

// launch modal form 
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

//close modal form and open validate: ouvre la modale et la ferme en cliquant
function validateModal() {
  modalbg.style.display = "none";
  modalV.style.display = "flex";
  modalVbg.style.display = "block";
  firstNameInput.value = ""; //permet de vider formulaire après validation
  lastNameInput.value = "";
  birthdateInput.value = "";
  emailInput.value = "";
  quantityInput.value = "";
  locationInput.value = "";
}

// close modal Validation form 
function closeModalV() {
  modalV.style.display = "none";
  modalVbg.style.display = "none";
}

function isInvalid(element, message) {
  let target = "";
  if (NodeList.prototype.isPrototypeOf(element)) target = element[0].parentNode;
  else target = element.parentNode;
  target.setAttribute("data-error-visible", true);
  target.setAttribute("data-error", message);
}

//remove previous alerts
function removeAlerts() {
  let invalidFields = document.querySelectorAll(
    '.formData[data-error-visible="true"]'
  );
  for (let field of invalidFields) {
    field.setAttribute("data-error-visible", false);
    field.setAttribute("data-error", "");
  }
}

// Implémenter entrées du formulaire #2 /Ajouter validation ou messages d'erreur #3 / Test localisation
//Validation location
function validateLocation() {
  const input = locationInput;
  for (var i = 0; i < input.length; i++) {
    const validityState = input[i].checked;
    if (validityState) {
      return true;
    }
  }
  return false;
}

//Validation prénom
function firstValidation() {
  let inputValue = firstNameInput.value;
  if (inputValue !== null && inputValue.length >= 2) return true;
  else return false;
}

//Validation nom
function lastValidation() {
  let inputValue = lastNameInput.value;
  if (inputValue !== null && inputValue.length >= 2) return true;
  else return false;
}

//Validation email
function emailValidation() {
  let regex = /^[A-Za-z0-9-éàè.]+@[a-z.]+[a-z.]$/;
  return regex.test(emailInput.value);
}

//Validation anniversaire
/*function birthdateValidation() {
  let birthdate = new Date(birthdateInput.value);
  let today = new Date();
  if (birthdate.toString() !== "Invalid Date") {
    if (
      birthdate.getDate() >= today.getDate() &&
      birthdate.getMonth() == today.getMonth() &&
      birthdate.getFullYear() == today.getFullYear()
    ) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}*/
function birthdateValidation() {
  let birthdate = new Date(birthdateInput.value);
  let today = new Date();
  let limitAge = new Date();
  limitAge.setFullYear(today.getFullYear()-18); //on retire 18 année à la date d'aujourd'hui
  if (birthdate.toString() !== "Invalid Date") {
    if (
      birthdate > limitAge 
    ) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

//Validation quantity
function quantityValidation() {
  let regex = /^[0-9]+$/;
  return regex.test(quantityInput.value);
}

//Validation cgv
function validateRules() {
  const input = checkboxInput;
  const validityState = input.checked;
  if (validityState == false) {
    return false;
  } else {
    return true;
    //console.log("statut CGV", validateRules());
  }
}


// Fonction principal du formulaire on test si location et cgv son ok avant de fermer la modale , les autres inputs sont testé avant par required
function validate(e) {
  e.preventDefault();

  let isValidInput = true;
  removeAlerts();
  if (!firstValidation()) {
    isValidInput = false;
    isInvalid(firstNameInput, errorMessages.firstName);
  }
  if (!lastValidation()) {
    isValidInput = false;
    isInvalid(lastNameInput, errorMessages.lastName);
  }
  if (!emailValidation()) {
    isValidInput = false;
    isInvalid(emailInput, errorMessages.email);
  }
  if (!birthdateValidation()) {
    isValidInput = false;
    isInvalid(birthdateInput, errorMessages.birthdate);
  }
  if (!quantityValidation()) {
    isValidInput = false;
    isInvalid(quantityInput, errorMessages.quantity);
  }
  if (!validateLocation()) {
    isValidInput = false;
    isInvalid(locationInput, errorMessages.location);
  }
  if (!validateRules()) {
    isValidInput = false;
    isInvalid(checkboxInput, errorMessages.checkbox);
  }
  if (isValidInput) {
    validateModal();
  }
}