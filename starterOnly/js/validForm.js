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
    firstName.value.trim().length < 2 || // check if the input is empty or less than 2 characters
    first.value.trim() === "" || // check if the input is empty
    !firstName.value.match(regularRegex) // check if the input is not a letter
  ) {
    firstName.parentElement.setAttribute("data-error-visible", "true"); // display error message
    firstName.style.border = "2px solid #e54858"; // change border color
    return false; // return false
  }
  first.parentElement.setAttribute("data-error-visible", "false"); // hide error message
  first.style.border = "solid #279e7a 0.19rem"; // change border color
  return true; // return true
}

// last name input validation
function isLastName() {
  if (
    lastName.value.trim().length < 2 || // check if the input is empty or less than 2 characters
    last.value.trim() === "" || // check if the input is empty
    !lastName.value.match(regularRegex) // check if the input is not a letter
  ) {
    lastName.parentElement.setAttribute("data-error-visible", "true"); // display error message
    lastName.style.border = "2px solid #e54858"; // change border color
    return false; // return false
  }
  last.parentElement.setAttribute("data-error-visible", "false"); // hide error message
  last.style.border = "solid #279e7a 0.19rem"; // change border color
  return true; // return true
}

// email input validation
function isEmail() {
  if (email.value.trim().match(emailRegex)) { // check if the input is a valid email
    email.parentElement.setAttribute("data-error-visible", "false"); // hide error message
    email.style.border = "solid #279e7a 0.19rem"; // change border color
    return true; // return true
  }
  email.parentElement.setAttribute("data-error-visible", "true"); // display error message
  email.style.border = "2px solid #e54858"; // change border color
  return false; // return false
}

// birthdate input validation
function isBirthdate() {
  if (
    !birthdate.value.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/) || // check if the input is not a date
    birthdate.value > new Date().toISOString().slice(0, 10) // check if the input is not a future date
  ) {
    birthdate.parentElement.setAttribute("data-error-visible", "true"); // display error message
    birthdate.style.border = "2px solid #e54858"; // change border color

    return false; // return false
  }
  birthdate.parentElement.setAttribute("data-error-visible", "false"); // hide error message
  birthdate.style.border = "solid #279e7a 0.19rem"; // change border color
  return true; // return true
}

// quantity input validation
function isTournamentsQuantity() {
  if (
    quantity.value.trim().length === 0 || // check if the input is empty 
    isNaN(quantity.value.trim()) === true || // check if the input is not a number 
    quantity.value.trim() < 0 || // check if the input is less than 0
    quantity.value.trim() > 99 // check if the input is more than 99
  ) {
    quantity.parentElement.setAttribute("data-error-visible", "true"); // display error message
    quantity.style.border = "2px solid #e54858"; // change border color
    return false; // return false
  }
  quantity.parentElement.setAttribute("data-error-visible", "false"); // hide error message
  quantity.style.border = "solid #279e7a 0.19rem"; // change border color
  return true; // return true
}

// locations input validation
function isLocations() {
  inputs.setAttribute("data-error-visible", "true"); // display error message
  for (let i = 0; i < locations.length; i++) { // loop through the locations
    if (locations[i].checked) { // check if the location is checked
      inputs.setAttribute("data-error-visible", "false"); // hide error message
      return true; // return true
    }
  }
  return false; // return false
}

// checkbox validation
function isCheckBox() {
  if (checkbox1.checked === false) { // check if the checkbox is not checked
    checkbox1.parentElement.setAttribute("data-error-visible", "true"); // display error message
    return false; // return false
  }
  checkbox1.parentElement.setAttribute("data-error-visible", "false"); // hide error message
  return true; // return true
}

// form validation
function isValidInput(element, method, event) { 
  element.addEventListener(event, method);  // add event listener to the element 
}
isValidInput(firstName, isFirstName, "focusout"); // call the function on focus out event
isValidInput(lastName, isLastName, "focusout");
isValidInput(email, isEmail, "focusout");
isValidInput(birthdate, isBirthdate, "focusout");
isValidInput(quantity, isTournamentsQuantity, "focusout");
isValidInput(inputs, isLocations, "change"); // call the function on change event
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
  e.preventDefault(); // prevent the form from submitting
  if (formValidation() == true) { // check if all inputs are valid
    document.querySelector("form").reset(); // reset the form
    closeForm(); // close the form
    confirmationModal(); // display the confirmation modal
  } else {
    checkAllinput(); // check all inputs
  }
});

