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
const formData = document.querySelectorAll(".formData");
const formBod = document.querySelector(".form-body");
const validationMessage = document.getElementById("validation-message");
const listRadioInputs = document.querySelectorAll('input[name="location"]');
const validationConditions = document.querySelector('input[name="checkbox"]');
const errorElementRadio = document.getElementById("error-location");
errorElementRadio.textContent = "";

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  console.log("validationConditions", validationConditions.checked);
}
function hideModal() {
  modalbg.style.display = "none";
}
function hideContent() {
  formBod.style.display = "none";
}
function displayValidationMessage() {
  validationMessage.style.display = "flex";
  validationMessage.textContent = "Merci! Votre réservation a été reçue.";
}

function validate(event) {
  try {
    event.preventDefault();
    isValid = true;
    isCheckboxChecked = false; // Reset to false at the beginning of validation
    isRadioChecked = false; // Reset to false at the beginning of validation

    const fields = [
      { id: "first", name: "prénom" },
      { id: "last", name: "nom" },
      { id: "email", name: "e-mail" },
      { id: "birthdate", name: "date de naissance" },
      { id: "quantity", name: "quantité" },
    ];

    fields.forEach((field) => {
      const baliseField = document.getElementById(field.id);
      const valeurField = baliseField.value.trim();
      const errorElement = document.getElementById("error-" + field.id);
      errorElement.textContent = "";

      if (valeurField === "") {
        console.log(`Le champ ${field.name} est vide`);
        isValid = false;
        errorElement.textContent = `Le champ ${field.name} est vide`;
      }
    });

    // --------------------------------------------------------------------------

    listRadioInputs.forEach((radioInput) => {
      if (radioInput.checked) {
        isRadioChecked = true;
        return;
      }
    });

    if (!isRadioChecked) {
      document.getElementById("error-location").innerHTML =
        "Veuillez sélectionner un tournoi";
      isValid = false;
    } else {
      console.log("RadioChecked");
      document.getElementById("error-location").innerHTML = "";
    }

    // --------------------------------------------------------------------------

    if (validationConditions.checked) {
      isCheckboxChecked = true;
    } else {
      isCheckboxChecked = false;
    }

    if (!isCheckboxChecked) {
      document.getElementById("error-checkbox").innerHTML =
        "Veuillez accepter les conditions d'utilisation.";
      isValid = false;
    } else {
      console.log("CheckboxChecked");
      document.getElementById("error-checkbox").innerHTML = "";
    }

    // --------------------------------------------------------------------------

    // Corrected selector to capture elements with the class "error-message"
    const errorMessageSpans = document.querySelectorAll(".error-message");

    // Apply red background color to all error message spans and hide if no error
    let hasError = false;
    errorMessageSpans.forEach((span) => {
      if (span.innerHTML.trim() !== "") {
        span.style.backgroundColor = "red";
        hasError = true;
      } else {
        span.style.backgroundColor = "";
      }
    });
    // --------------------------------------------------------------------------

    if (isValid && isCheckboxChecked && isRadioChecked) {
      fields.forEach((field) => {
        const errorElement = document.getElementById("error-" + field.id);
        errorElement.textContent = "";
      });
      console.log("All fields are filled");
      hideContent();
      displayValidationMessage();
      setTimeout(() => {
        form.submit();
      }, 5000);
    }
  } catch (error) {
    console.error(error.message);
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", validate);
