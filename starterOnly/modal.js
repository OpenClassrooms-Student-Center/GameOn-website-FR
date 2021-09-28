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

// ToDo : Fermer la modale #1
const closeBtn = document.querySelectorAll(".close");

//modal validation Ajouter confirmation quand envoie réussi #4
const modalV = document.querySelector(".modalValidate");
const modalVbg = document.querySelector(".bground2");
const closeBtnV = document.querySelectorAll(".closeV");
const closeBtn2 = document.querySelectorAll(".close2");

// Implémenter entrées du formulaire #2 /Ajouter validation ou messages d'erreur #3 /Ajouter confirmation quand envoie réussi #4

// submit
document.getElementById("reserve-form").addEventListener("submit", validate);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal validation event
closeBtnV.forEach((btn) => btn.addEventListener("click", closeModalV));
closeBtn2.forEach((btn) => btn.addEventListener("click", closeModalV));

const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationInput = document.querySelectorAll("[name='location']");
const checkboxInput = document.getElementById("checkbox1");

const errorMessages = {
  firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
  lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
  email: "Veuillez entrer une adresse email valide.",
  birthdate: "Veuillez entrer une date de naissance valide.",
  quantity: "Veuillez entrer un nombre valide.",
  location: "Veuillez choisir une ville.",
  checkbox: "Veuillez accepter les conditions d'utilisations.",
};

// F launch modal form (handler)
function launchModal() {
  modalbg.style.display = "block";
}

// F close modal form (handler)
function closeModal() {
  modalbg.style.display = "none";
}

//close modal form and open validate
function validateModal() {
  modalbg.style.display = "none";
  modalV.style.display = "flex";
  modalVbg.style.display = "block";
}

// F close modal Validation form (handler)
function closeModalV() {
  modalV.style.display = "none";
  modalVbg.style.display = "none";
}

function isInvalid(element, message) {
  let target;
  if (NodeList.prototype.isPrototypeOf(element)) target = element[0].parentNode;
  else target = element.parentNode;
  target.setAttribute("data-error-visible", true);
  target.setAttribute("data-error", message);
}
//delete previous alerts
function removeAlerts() {
  let invalidFields = document.querySelectorAll(
    '.formData[data-error-visible="true"]'
  );
  for (let field of invalidFields) {
    field.setAttribute("data-error-visible", false);
    field.setAttribute("data-error", "");
  }
}
function firstValidation() {
  let inputValue = firstNameInput.value;
  if (inputValue !== null && inputValue.length >= 2) return true;
  else return false;
}
function lastValidation() {
  let inputValue = lastNameInput.value;
  if (inputValue !== null && inputValue.length >= 2) return true;
  else return false;
}
function emailValidation() {
  let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
  return regex.test(emailInput.value);
}
function birthdateValidation() {
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
}
function quantityValidation() {
  let regex = /^[0-9]+$/;
  return regex.test(quantityInput.value);
}
// Implémenter entrées du formulaire #2 /Ajouter validation ou messages d'erreur #3 / Test localisation
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

function validateRules() {
  const input = checkboxInput;
  const validityState = input.checked;
  if (validityState == false) {
    return false;
  } else {
    return true;
  }
}

// F principal du formulaire on test si location et rules son true avant de fermer le modal , les autres inputs sont testé avant via required
function validate(ev) {
  ev.preventDefault();

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
