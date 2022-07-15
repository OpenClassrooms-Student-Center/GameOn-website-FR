const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName("close")[0];
const form = document.querySelectorAll("form")[0];
let fields = document.querySelectorAll("form input[required]");
let locations = document.querySelectorAll("input[type=radio]");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let birthdate = document.getElementById("birthdate");
let email = document.getElementById("email");
let conditionsUtilisation = document.getElementById("conditionsUtilisation");
const buttonSubmit = document.getElementById("btn-submit");

// change to responsive navbar
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close modal event
closeBtn.addEventListener("click", closeModal);

// validate form
buttonSubmit.addEventListener("click", validateForm);

function validateForm(e) {
  e.preventDefault();
  e.stopPropagation();

  let valid = true;

  for (let field of fields) {
    if (!field.checkValidity()) {
      addErrorAttribute(field.parentElement);
      addErrorMessages();

      valid = false;
    } else {
      clearErrorMessage(field.parentElement);
    }
  }

  if (valid) {
    closeModal();
    form.reset();
  }
}

// clear data-error message
function clearErrorMessage(element) {
  element.setAttribute("data-error-visible", "false");
  element.setAttribute("data-error", "");
}

// set data-error attribute
function addErrorAttribute(element) {
  element.setAttribute("data-error-visible", "true");
}

// write a personnalized error message
function writeErrorMessage(element, message) {
  element.setAttribute("data-error", message);
}

// all personalizd error messages
function addErrorMessages() {
  writeErrorMessage(firstname.parentElement, "Veuillez entrer 2 caractères ou plus.");
  writeErrorMessage(lastname.parentElement, "Veuillez entrer 2 caractères ou plus.");
  writeErrorMessage(birthdate.parentElement, "Vous devez entrer votre date de naissance.");
  writeErrorMessage(conditionsUtilisation.parentElement, "Vous devez vérifier que vous acceptez les termes et conditions.");
}

// check if one radio button is checked
function udapteAttribute(element) {
  if (element.target.matches("input[required]")) {
    element.target.removeAttribute("required");
  }
}

for (let location of locations) {
  location.addEventListener("change", udapteAttribute);
  writeErrorMessage(location.parentElement, "Vous devez choisir une option");
}

// check fields validity (without needing to press submit button)
for (let field of fields) {
  field.addEventListener("input", function () {
    if (!field.checkValidity()) {
      addErrorAttribute(field.parentElement);
      addErrorMessages();
    } else {
      clearErrorMessage(field.parentElement);
    }
  });
}
