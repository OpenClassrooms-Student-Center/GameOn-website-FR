// DOM elements
const confirmationModal = document.getElementById("confirmation-modal");
const closeThanksBtn = document.querySelectorAll(".close-thanks-modal");
const mainModal = document.getElementsByClassName("content")[0];
const form = document.getElementById("reserve");
const buttonSubmit = document.getElementById("btn-submit");
const fields = document.querySelectorAll("form input[required]");
const locations = document.querySelectorAll("input[type=radio]");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const birthdate = document.getElementById("birthdate");
const email = document.getElementById("email");
const nbrTurnement = document.getElementById("quantity");
const conditionsUtilisation = document.getElementById("conditionsUtilisation");

// validate form
form.addEventListener("submit", validateForm);

function validateForm(event) {
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
  } else {
    event.preventDefault();
  }
}

// clear data-error message
function clearErrorMessage(element) {
  element.parentElement.setAttribute("data-error-visible", "false");
  element.parentElement.setAttribute("data-error", "");
}

// add data-error attribute
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

// check fields without needing to press submit button

firstname.addEventListener("input", function (e) {
  if (!e.target.checkValidity()) {
    addErrorAttribute(e.target);
    writeErrorMessage(firstname, "Veuillez entrer 2 caractères ou plus.");
  } else {
    clearErrorMessage(e.target);
  }
});

lastname.addEventListener("input", function (e) {
  if (!e.target.checkValidity()) {
    addErrorAttribute(e.target);
    writeErrorMessage(lastname, "Veuillez entrer 2 caractères ou plus.");
  } else {
    clearErrorMessage(e.target);
  }
});

birthdate.addEventListener("input", function (e) {
  if (!e.target.checkValidity()) {
    addErrorAttribute(e.target);
    writeErrorMessage(birthdate, "Vous devez entrer votre date de naissance.");
  } else {
    clearErrorMessage(e.target);
  }
});

email.addEventListener("input", function (e) {
  if (!e.target.checkValidity()) {
    addErrorAttribute(e.target);
  } else {
    clearErrorMessage(e.target);
  }
});

nbrTurnement.addEventListener("input", function (e) {
  if (!e.target.checkValidity()) {
    addErrorAttribute(e.target);
  } else {
    clearErrorMessage(e.target);
  }
});

conditionsUtilisation.addEventListener("change", function (e) {
  if (!e.target.checkValidity()) {
    addErrorAttribute(e.target);
    writeErrorMessage(conditionsUtilisation, "Vous devez vérifier que vous acceptez les termes et conditions.");
  } else {
    clearErrorMessage(e.target);
  }
});

for (let location of locations) {
  location.addEventListener("change", function (e) {
    if (!e.target.checkValidity()) {
      addErrorAttribute(e.target);
      writeErrorMessage(location, "Vous devez choisir une option");
    } else {
      clearErrorMessage(e.target);
    }
  });
}

// close confirmation modal
function closeThanksModal() {
  confirmationModal.style.display = "none";
  modalbg.style.display = "none";
  body.style.overflow = "auto";
}

// close confirmation event
closeThanksBtn.forEach((btn) => btn.addEventListener("click", closeThanksModal));
