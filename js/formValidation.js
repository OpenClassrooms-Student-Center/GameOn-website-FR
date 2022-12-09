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
formFieldsValidation(firstName, checkForm, 'focusout');
formFieldsValidation(lastName, checkForm, 'focusout');
formFieldsValidation(email, checkEmail, 'focusout');
formFieldsValidation(birthdate, checkBirthdate, 'focusout');
formFieldsValidation(quantity, checkTournamentsQuantity, 'focusout');
formFieldsValidation(allLocations, checkLocations, 'change');

function checkForm(e) {
  e.preventDefault();

  let isFirstNameOk = checkLength(firstName, 2);
  let isLastNameOk = checkLength(lastName, 2);

  if (isFirstNameOk && isLastNameOk) {
    console.log("c'est good");
  }

}

function checkLength(element, length) {
  const formData = element.parentElement;

  if (element.value.length < length || first.value === '') {
    formData.setAttribute("data-error-visible", "true");
    return false;
  }

  formData.setAttribute("data-error-visible", "false");
  return true;
}


function checkEmail() {
  const regex = 
  /^[\w._%+-]+@[\w.-]+\.[A-Za-z]{2,}$/

  if (email.value.match(regex)) {
    email.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
  email.parentElement.setAttribute("data-error-visible", "true");

  return false;
}

function checkBirthdate() {
  if (birthdate.value.length !== 10) {
    console.log("zut");

    birthdate.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  birthdate.parentElement.setAttribute("data-error-visible", "false");
  return true;
}

function checkTournamentsQuantity() {
  if (quantity.value.length === 0 || quantity.value < 0) {
      quantity.parentElement.setAttribute('data-error-visible', 'true');
      return false;
  }
  quantity.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}

function checkCheckBox() {
  if (checkbox1.checked === false) {
      checkbox1.parentElement.setAttribute('data-error-visible', 'true');
      return false;
  }
  checkbox1.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}

// form.addEventListener("focusout", checkForm);
form.addEventListener("focusout", checkEmail);
form.addEventListener("focusout", checkBirthdate);
form.addEventListener("change", checkCheckBox);
// form.addEventListener("focusout", checkLocations);
