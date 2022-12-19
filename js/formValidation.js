/* 
Objets au sein de variables qui récuperent les éléments du DOM.
*/

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const birthdate = document.getElementById("birthdate");
const allLocations = document.getElementById("AllLocations");
const checkbox1 = document.getElementById("checkbox1");
const input = document.getElementsByClassName("text-control");
const form = document.getElementById("form");

/* 
Ajout d'un addEventListener sur un élément HTML.
*/

function formFieldsValidation(element, method, event) {
  element.addEventListener(event, method);
}
formFieldsValidation(firstName, checkFirstName, "focusout");
formFieldsValidation(lastName, checkLastName, "focusout");
formFieldsValidation(email, checkEmail, "focusout");
formFieldsValidation(birthdate, checkBirthdate, "focusout");
formFieldsValidation(quantity, checkTournamentsQuantity, "focusout");
formFieldsValidation(checkbox1, checkCheckBox, "change");
formFieldsValidation(form, validate, "submit");

/* 
Selection pour chacun des inputs de type radio.
*/

document
  .querySelectorAll("input[type='radio']")
  .forEach((elt) => formFieldsValidation(elt, radioChecked, "click"));

function validate(evt) {
  let isFirstNameOk = checkFirstName();
  let isLastNameOk = checkLastName();
  let isEmailOK = checkEmail();
  let isBirthdateOk = checkBirthdate();
  let isQtyOk = checkTournamentsQuantity();
  let isRadioOk = checkRadio();
  let ischeckBoxOk = checkCheckBox();

  /* Si toutes les conditions sont vérifiées alors envoi le formulaire */
  if (
    isFirstNameOk &&
    isLastNameOk &&
    isEmailOK &&
    isBirthdateOk &&
    isQtyOk &&
    isRadioOk &&
    ischeckBoxOk
  ) {
    /* Affiche un message d'alerte quand l'envoi est réussi */

    alert("Votre demande a été reçue");
  } else {
    evt.preventDefault();
  }
}

/* Fonctions qui vérifient les conditions de validation */

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
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  birthdate.parentElement.setAttribute("data-error-visible", "false");
  return true;
}

function checkTournamentsQuantity() {
  const qty = Number.parseInt(quantity.value);
  if (!Number.isInteger(qty) || qty < 1) {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  quantity.parentElement.setAttribute("data-error-visible", "false");
  return true;
}

function checkCheckBox() {
  if (!checkbox1.checked) {
    checkbox1.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  checkbox1.parentElement.setAttribute("data-error-visible", "false");
  return true;
}

function checkRadio() {
  const isOneChecked = document.querySelector("input[type='radio']:checked");
  if (!isOneChecked) {
    document
      .getElementById("AllLocations")
      .setAttribute("data-error-visible", "true");
    return false;
  }
  document
    .getElementById("AllLocations")
    .setAttribute("data-error-visible", "false");
  return true;
}

/* bouton radio coché n'implique plus de message d'erreur*/

function radioChecked() {
  document
    .getElementById("AllLocations")
    .setAttribute("data-error-visible", "false");
}
