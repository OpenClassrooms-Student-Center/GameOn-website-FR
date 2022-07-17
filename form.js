// DOM elements
const confirmationModal = document.getElementById("confirmation-modal");
const closeThanksBtn = document.querySelectorAll(".close-thanks-modal");
const mainModal = document.getElementsByClassName("content")[0];
const buttonSubmit = document.getElementById("btn-submit");
let fields = document.querySelectorAll("form input[required]");
let locations = document.querySelectorAll("input[type=radio]");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let birthdate = document.getElementById("birthdate");
let email = document.getElementById("email");
let conditionsUtilisation = document.getElementById("conditionsUtilisation");

// validate form
buttonSubmit.addEventListener("click", validateForm);

function validateForm(e) {
  e.preventDefault();
  e.stopPropagation();

  let valid = true;

  for (let field of fields) {
    if (!field.checkValidity()) {
      addErrorAttribute(field);
      addErrorMessages();

      valid = false;
    } else {
      clearErrorMessage(field);
    }
  }

  if (valid) {
    mainModal.style.display = "none";
    confirmationModal.style.display = "flex";
    form.reset();
  }
}

// clear data-error message
function clearErrorMessage(element) {
  element.parentElement.setAttribute("data-error-visible", "false");
  element.parentElement.setAttribute("data-error", "");
}

// set data-error attribute
function addErrorAttribute(element) {
  element.parentElement.setAttribute("data-error-visible", "true");
}

// write a personnalized error message
function writeErrorMessage(element, message) {
  element.parentElement.setAttribute("data-error", message);
}

// all personalized error messages
function addErrorMessages() {
  writeErrorMessage(firstname, "Veuillez entrer 2 caractères ou plus.");
  writeErrorMessage(lastname, "Veuillez entrer 2 caractères ou plus.");
  writeErrorMessage(birthdate, "Vous devez entrer votre date de naissance.");
  writeErrorMessage(conditionsUtilisation, "Vous devez vérifier que vous acceptez les termes et conditions.");
}

// check if one radio button is checked
function udapteAttribute(element) {
  if (element.target.matches("input[required]")) {
    element.target.removeAttribute("required");
  }
}

for (let location of locations) {
  location.addEventListener("change", udapteAttribute);
  writeErrorMessage(location, "Vous devez choisir une option");
}

// check fields validity (without needing to press submit button)
for (let field of fields) {
  field.addEventListener("input", function () {
    if (!field.checkValidity()) {
      addErrorAttribute(field);
      addErrorMessages();
    } else {
      clearErrorMessage(field);
    }
  });
}

// close confirmation modal
function closeThanksModal() {
  confirmationModal.style.display = "none";
  modalbg.style.display = "none";
}

// close confirmation event
closeThanksBtn.forEach((btn) => btn.addEventListener("click", closeThanksModal));
