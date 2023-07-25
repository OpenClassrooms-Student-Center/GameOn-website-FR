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
const validationConditions = document.getElementById('input[name="checkbox"]');
const errorElementRadio = document.getElementById("error-location");
errorElementRadio.textContent = "";
let isRadioChecked = false;
let isCheckboxChecked = false;
let isValid = true;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  console.log("validationConditions", validationConditions);
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
      document.getElementById("error-location").innerHTML = "";
    }

    // --------------------------------------------------------------------------

    validationConditions.forEach((validationCondition) => {
      if (validationCondition.checked) {
        console.log("test bip boop");
        isRadioChecked = true;
        return;
      }
    });

    if (!isCheckboxChecked) {
      document.getElementById("error-location").innerHTML =
        "Veuillez sélectionner un tournoi";
      isValid = false;
    } else {
      document.getElementById("error-validation").innerHTML = "";
    }

    // --------------------------------------------------------------------------

    if (isValid) {
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
