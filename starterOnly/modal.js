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
const popupMessage = document.getElementById("popup-message");
const listRadioInputs = document.querySelectorAll(".formData input");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  console.log("listRadioInputs", listRadioInputs);
}
function hideModal() {
  modalbg.style.display = "none";
}

function hideContent() {
  formBod.style.display = "none";
}

function displayValidationMessage() {
  validationMessage.style.display = "flex";
  validationMessage.textContent = "Merci !";
}

function displayPopupMessage(message) {
  popupMessage.textContent = message;
  popupMessage.style.display = "block";
}

function hidePopupMessage() {
  popupMessage.style.display = "none";
}

function ajaxPost() {
  var data = newFormData();
  data.append("data");
  return false;
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

    let isValid = true;
    let isRadioChecked = false;
    const listRadioInputs = document.querySelectorAll(
      ".formData input[type='radio']"
    );

    fields.forEach((field) => {
      const baliseField = document.getElementById(field.id);
      const valeurField = baliseField.value.trim();

      if (valeurField === "") {
        console.log(`Le champ ${field.name} est vide`);
        isValid = false;
        throw new Error(`Le champ ${field.name} est vide`);
      }
    });

    listRadioInputs.forEach((radioInput) => {
      if (radioInput.checked) {
        isRadioChecked = true;
      }
    });

    if (!isRadioChecked) {
      console.log("Aucun choix de radio n'est sélectionné");
      isValid = false;
      throw new Error("Aucun choix de radio n'est sélectionné");
    }
    const isCheckboxChecked = document.getElementById("checkbox1").checked;

    if (!isCheckboxChecked) {
      console.log(
        "La case à cocher 'J'ai lu et accepté les conditions d'utilisation' n'est pas cochée."
      );
      isValid = false;
      throw new Error(
        "La case à cocher 'J'ai lu et accepté les conditions d'utilisation' n'est pas cochée."
      );
    }

    if (isValid) {
      console.log("All fields are filled");
      hideContent();
      hidePopupMessage();
      displayValidationMessage();
      setTimeout(() => {
        form.submit();
      }, 5000);
    }
  } catch (error) {
    console.error(error.message);
    displayPopupMessage(error.message);
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", validate);

// ... (your existing code)
