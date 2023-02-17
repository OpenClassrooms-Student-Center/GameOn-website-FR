// author: nicolaspatschkowski OpenClassrooms || https://github.com/nicolaspatschkowski && https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR.git
// modifyed by Stephane Malho (https://github.com/stephaneMalho) && https://github.com/stephanemalho/GameOn-website-FR.git

// dom elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const birthdate = document.getElementById("birthdate");
const inputs = document.getElementById("inputs");
const locations = document.querySelectorAll("#inputs .checkbox-input");
const checkbox1 = document.getElementById("checkbox1");
const input = document.getElementsByClassName("text-control");
const form = document.getElementById("form");
const regularRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// first name input validation
function isFirstName() {
  if (
    firstName.value.trim().length < 2 ||
    first.value.trim() === "" ||
    !firstName.value.match(regularRegex)
  ) {
    firstName.parentElement.setAttribute("data-error-visible", "true");
    firstName.style.border = "2px solid #e54858";
    return false;
  }
  first.parentElement.setAttribute("data-error-visible", "false");
  first.style.border = "solid #279e7a 0.19rem";
  return true;
}

// last name input validation
function isLastName() {
  if (
    lastName.value.trim().length < 2 ||
    last.value.trim() === "" ||
    !lastName.value.match(regularRegex)
  ) {
    lastName.parentElement.setAttribute("data-error-visible", "true");
    lastName.style.border = "2px solid #e54858";
    return false;
  }
  last.parentElement.setAttribute("data-error-visible", "false");
  last.style.border = "solid #279e7a 0.19rem";
  return true;
}

// email input validation
function isEmail() {
  if (email.value.trim().match(emailRegex)) {
    email.parentElement.setAttribute("data-error-visible", "false");
    email.style.border = "solid #279e7a 0.19rem";
    return true;
  }
  email.parentElement.setAttribute("data-error-visible", "true");
  email.style.border = "2px solid #e54858";
  return false;
}

// birthdate input validation
function isBirthdate() {
  if (
    !birthdate.value.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/) ||
    birthdate.value > new Date().toISOString().slice(0, 10)
  ) {
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    birthdate.style.border = "2px solid #e54858";

    return false;
  }
  birthdate.parentElement.setAttribute("data-error-visible", "false");
  birthdate.style.border = "solid #279e7a 0.19rem";
  return true;
}

// quantity input validation
function isTournamentsQuantity() {
  if (
    quantity.value.trim().length === 0 ||
    isNaN(quantity.value.trim()) === true ||
    quantity.value.trim() < 0 ||
    quantity.value.trim() > 99
  ) {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    quantity.style.border = "2px solid #e54858";
    return false;
  }
  quantity.parentElement.setAttribute("data-error-visible", "false");
  quantity.style.border = "solid #279e7a 0.19rem";
  return true;
}

// locations input validation
function isLocations() {
  inputs.setAttribute("data-error-visible", "true");
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      inputs.setAttribute("data-error-visible", "false");
      return true;
    }
  }
  return false;
}

// checkbox validation
function isCheckBox() {
  if (checkbox1.checked === false) {
    checkbox1.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  checkbox1.parentElement.setAttribute("data-error-visible", "false");
  return true;
}

// form validation
function isValidInput(element, method, event) {
  element.addEventListener(event, method);
}
isValidInput(firstName, isFirstName, "focusout");
isValidInput(lastName, isLastName, "focusout");
isValidInput(email, isEmail, "focusout");
isValidInput(birthdate, isBirthdate, "focusout");
isValidInput(quantity, isTournamentsQuantity, "focusout");
isValidInput(inputs, isLocations, "change");
isValidInput(checkbox1, isCheckBox, "change");

// check all inputs
function checkAllinput() {
  isFirstName();
  isLastName();
  isEmail();
  isBirthdate();
  isTournamentsQuantity();
  isLocations();
  isCheckBox();
}

// form validation for all inputs
function formValidation() {
  if (
    isFirstName() === true &&
    isLastName() === true &&
    isEmail() === true &&
    isBirthdate() === true &&
    isTournamentsQuantity() === true &&
    isLocations() === true &&
    isCheckBox() === true
  ) {
    return true;
  }
  return false;
}

// close modal
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (formValidation() == true) {
    document.querySelector("form").reset();
    closeForm();
    confirmationModal();
  } else {
    checkAllinput();
  }
});









