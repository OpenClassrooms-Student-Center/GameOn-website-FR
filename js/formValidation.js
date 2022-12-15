const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const birthdate = document.getElementById("birthdate");
const allLocations = document.getElementById("allLocations");
const locations = document.querySelectorAll("#allLocations .checkbox-input");
const checkbox1 = document.getElementById("checkbox1");
const input = document.getElementsByClassName("text-control");
const form = document.getElementById("form");

// FORM FIELDS EVENTS

function formFieldsValidation(element, method, event) {
  element.addEventListener(event, method);
}
formFieldsValidation(firstName, checkFirstName, "focusout");
formFieldsValidation(lastName, checkLastName, "focusout");
formFieldsValidation(email, checkEmail, "focusout");
formFieldsValidation(birthdate, checkBirthdate, "focusout");
formFieldsValidation(quantity, checkTournamentsQuantity, "focusout");
forAllFieldsValidation(checkbox1, checkCheckBox, "change");
forAllFieldsValidation(locations, checkRadio, "change");
formFieldsValidation(form, validate, "submit");

function validate(evt) {
  evt.preventDefault();
  if (
    checkFirstName() &&
    checkLastName() &&
    checkEmail() &&
    checkBirthdate() &&
    checkTournamentsQuantity() &&
    checkCheckBox() &&
    checkRadio()
  ) {
    console.log("c'est good");
    displayModalSubmit();
    return true;
  }
  evt.preventDefault();
  return false;
}

// let isFirstNameOk = checkLength(firstName, 2);
// let isLastNameOk = checkLength(lastName, 2);

function checkFirstName() {
  const formData = firstName.parentElement;

  if (firstName.value.length < 2) {
    formData.setAttribute("data-error-visible", "true");
    return false;
  }

  formData.setAttribute("data-error-visible", "false");
  return true;
}

function checkLastName() {
  const formData = lastName.parentElement;

  if (lastName.value.length < 2) {
    formData.setAttribute("data-error-visible", "true");
    return false;
  }

  formData.setAttribute("data-error-visible", "false");
  return true;
}


function checkEmail() {
  const regex = /^[\w._%+-]+@[\w.-]+\.[A-Za-z]{2,}$/;

  if (email.value.match(regex)) {
    email.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
  email.parentElement.setAttribute("data-error-visible", "true");

  return false;
}

function checkBirthdate() {
  const date = Date.parse(birthdate.value);
  if (isNaN(date)) {
    console.log("zut");

    birthdate.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  birthdate.parentElement.setAttribute("data-error-visible", "false");
  return true;
}

function checkTournamentsQuantity() {
  const qty = Number.parseInt(quantity.value);
  if (!Number.isInteger(qty) || qty.value < 1) {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  quantity.parentElement.setAttribute("data-error-visible", "false");
  return true;
}

function checkCheckBox() {
  if (checkbox1.checked === false) {
    checkbox1.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  checkbox1.parentElement.setAttribute("data-error-visible", "false");
  return true;
}

function checkRadio() {
  const isOneChecked = document.querySelector("input[type='radio']:checked");
  if (isOneChecked === false) {
    checkbox1.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  checkbox1.parentElement.setAttribute("data-error-visible", "false");
  return true;
}

// function forAllFieldsValidation() {
//   checkFirstName()
//   checkLastName()
//   checkEmail()
//   checkBirthdate()
//   checkTournamentsQuantity()
//   checkRadio()
//   checkCheckBox()
// }