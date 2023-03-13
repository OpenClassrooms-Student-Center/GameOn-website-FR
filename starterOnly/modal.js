// Nav
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
const modalBody = document.querySelector(".modal-body");
const form = document.forms["signup-form"];
const formData = document.querySelectorAll(".formData");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const tournaments = document.getElementById("quantity");
const cities = document.getElementsByName("location");
const terms = document.getElementById("checkbox1");
const submitBtn = document.querySelectorAll(".btn-submit");

// Variables
let isFormValid = false;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexNames = /^[A-Za-z][A-Za-z'-]+([ A-Za-z][A-Za-z'-]+)*/;
const errorMessages = {
  emptyField: "Ce champ doit être rempli.",
  nameLength: "Le nom doit contenir au moins 2 lettres.",
  textFormat: "Veuillez vérifier le format.",
  birthdateMissing: "Vous devez entrer votre date de naissance.",
  citiesNotSelected: "Vous devez choisir une option.",
  tournamentsValue: "Vous devez entrer une valeur numérique",
  termsNotChecked:
    "Vous devez vérifier que vous acceptez les termes et conditions.",
};

// disable HTML5 validation
form.setAttribute("novalidate", "");

// launch modal form
modalBtn.forEach((btn) => btn.addEventListener("click", showModal));

// close modal form
document.querySelector(".close").addEventListener("click", hideModal);

// form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate().then(confirmationScreen());
});

async function validate() {
  nameFieldsValidation(firstName);
  nameFieldsValidation(lastName);
  emailFieldValidation();
  birthdateFieldValidation();
  tournamentsFieldValidation();
  citiesValidation();
  termsValidation();
}

firstName.addEventListener("change", () => nameFieldsValidation(firstName));
lastName.addEventListener("change", () => nameFieldsValidation(lastName));
email.addEventListener("change", () => emailFieldValidation());
birthDate.addEventListener("change", () => birthdateFieldValidation());
tournaments.addEventListener("change", () => tournamentsFieldValidation());

cities.forEach((city) =>
  city.addEventListener("change", () => citiesValidation())
);

terms.addEventListener("change", () => termsValidation());

///// helper functions ///////
/////////////////////////////

// show modal
function showModal() {
  modalbg.style.display = "block";

  // if validation already succeeded once form is set to display none
  if (form.style.display == "none") {
    form.style.display = "block";
  }
}

// hide modal and clear inputs
function hideModal() {
  modalbg.style.display = "none";
  removeAllDataAttributes(formData); // FIXME - obligé avec form.reset() ? Ou doublon ?
  modalBody.removeChild(
    document.querySelector(".confirm-message").parentElement
  );
  form.reset();
}

function errorHandler(input, text) {
  input.parentElement.setAttribute("data-error", text);
  input.parentElement.setAttribute("data-error-visible", "true");
  isFormValid = false;
  return;
}

function removeDataAttribute(input) {
  input.parentElement.removeAttribute("data-error");
  input.parentElement.removeAttribute("data-error-visible");
  isFormValid = true;
}

function removeAllDataAttributes(data) {
  for (let i = 0; i < data.length; i++) {
    data[i].removeAttribute("data-error");
    data[i].removeAttribute("data-error-visible");
  }
}

function nameFieldsValidation(input) {
  if (input.value === "") {
    return errorHandler(input, errorMessages.emptyField);
  }
  if (input.value.length == 1) {
    return errorHandler(input, errorMessages.nameLength);
  }
  if (!input.value.match(regexNames)) {
    return errorHandler(input, errorMessages.textFormat);
  }

  removeDataAttribute(input);
}

function emailFieldValidation() {
  if (email.value === "") {
    return errorHandler(email, errorMessages.emptyField);
  }
  if (!email.value.match(regexEmail)) {
    return errorHandler(email, errorMessages.textFormat);
  }

  removeDataAttribute(email);
}

function birthdateFieldValidation() {
  if (birthDate.value === "") {
    return errorHandler(birthDate, errorMessages.birthdateMissing);
  }
  removeDataAttribute(birthDate);
}

function tournamentsFieldValidation() {
  if (tournaments.value === "" || isNaN(tournaments.value)) {
    return errorHandler(tournaments, errorMessages.tournamentsValue);
  }
  removeDataAttribute(tournaments);
}

function citiesValidation() {
  let isSelected = false;
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].checked) {
      removeDataAttribute(cities[0]);
      isSelected = true;
      return;
    }
  }

  isSelected
    ? (isFormValid = true)
    : errorHandler(cities[0], errorMessages.citiesNotSelected);
}

function termsValidation() {
  if (!terms.checked) {
    return errorHandler(terms, errorMessages.termsNotChecked);
  }
  if (!isFormValid) {
    return (isFormValid = false);
  }

  removeDataAttribute(terms);
}

function createConfirmation() {
  let confirmContainer = document.createElement("div");
  let confirmMessage = document.createElement("p");
  let confirmButton = document.createElement("button");

  confirmMessage.innerText = "Merci pour votre incription";
  confirmMessage.classList.add("confirm-message");

  confirmButton.innerText = "Fermer";
  confirmButton.setAttribute("onClick", "hideModal()");
  confirmButton.classList.add("button");
  confirmButton.classList.add("btn-submit");

  confirmContainer.appendChild(confirmMessage);
  confirmContainer.appendChild(confirmButton);

  modalBody.appendChild(confirmContainer);
}

function confirmationScreen() {
  if (!isFormValid) return;

  console.trace(isFormValid);
  form.style.display = "none";
  createConfirmation();
  removeAllDataAttributes(formData);
}
