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
///////
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

function validate() {
  form.style.display = "none";
  createConfirmation();
}

function createConfirmation() {
  let confirmContainer = document.createElement("div");
  let confirmMessage = document.createElement("p");
  let confirmButton = document.createElement("button");
  confirmMessage.innerText = "Merci pour votre incription";
  confirmButton.innerText = "Fermer";
  confirmButton.setAttribute("onClick", "hideModal()");
  confirmButton.classList.add("button");
  confirmButton.classList.add("btn-submit");
  confirmMessage.classList.add("confirm-message");
  confirmContainer.appendChild(confirmMessage);
  confirmContainer.appendChild(confirmButton);
  modalBody.appendChild(confirmContainer);

  // document.querySelector(".btn-submit").addEventListener("click", hideModal); //fixme
}

// launch modal form
modalBtn.forEach((btn) => btn.addEventListener("click", showModal));

// close modal form
document.querySelector(".close").addEventListener("click", hideModal);


// form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeDataAttribute(formData);
  formValidation();
});

function formValidation() {
  nameFieldsValidation(firstName);
  nameFieldsValidation(lastName);

  if (email.value === "") {
    errorHandler(email, errorMessages.emptyField);
  } else if (!email.value.match(regexEmail)) {
    errorHandler(email, errorMessages.textFormat);
  }

  if (birthDate.value === "")
    errorHandler(birthDate, errorMessages.birthdateMissing);

  if (tournaments.value === "" || isNaN(tournaments.value)) {
    errorHandler(tournaments, errorMessages.tournamentsValue);
  }

  if (isCityMissing()) {
    errorHandler(cities[0], errorMessages.citiesNotSelected);
  }

  if (!terms.checked) {
    errorHandler(terms, errorMessages.termsNotChecked);
  }
}

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
  removeDataAttribute(formData); // FIXME - obligé avec form.reset() ? Ou doublon ?
  modalBody.removeChild(document.querySelector(".confirm-message").parentElement);
  form.reset();
}

function errorHandler(input, text) {
  input.parentElement.setAttribute("data-error", text);
  input.parentElement.setAttribute("data-error-visible", "true");
}

function removeDataAttribute(data) {
  for (let i = 0; i < data.length; i++) {
    data[i].removeAttribute("data-error");
    data[i].removeAttribute("data-error-visible");
  }
}

function nameFieldsValidation(input) {
  if (input.value === "") {
    errorHandler(input, errorMessages.emptyField);
  } else if (input.value.length == 1) {
    errorHandler(input, errorMessages.nameLength);
  } else if (!input.value.match(regexNames)) {
    errorHandler(input, errorMessages.textFormat);
  }
}

function isCityMissing() {
  let isSelected = false;
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].checked) isSelected = true;
  }
  return !isSelected;
}
