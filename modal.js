// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const form = document.forms["reserve"];
const firstName = form.elements["first"];
const lastName = form.elements["last"];
const email = form.elements["email"];
const birthDate = form.elements["birthdate"];
const quantity = form.elements["quantity"];
const locations = form.elements["location"];
const gtcCheckbox = form.elements["checkbox1"];

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
modalClose.addEventListener("click", closeModal);

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Form validation
form.addEventListener("submit", validateForm);

function validateForm(event) {
  let hasErrors = false;

  function validateFirstName(input, errorElementId) {
    if (input.trim() === '' || !/^[a-zA-Z]{2,}$/.test(input)) {
      displayError(errorElementId, "Votre prénom doit comprendre au moins 2 caractères alphabétiques.");
      markInputAsInvalid(errorElementId);
      hasErrors = true;
    }
  }

  function validateLastName(input, errorElementId) {
    if (input.trim() === '' || !/^[a-zA-Z]{2,}$/.test(input)) {
      displayError(errorElementId, "Votre nom doit comprendre au moins 2 caractères alphabétiques.");
      markInputAsInvalid(errorElementId);
      hasErrors = true;
    }
  }

  function validateEmail(input, errorElementId) {
    if (input.trim() === '' || !/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/.test(input)) {
      displayError(errorElementId, "Veuillez renseigner une adresse email valide.");
      markInputAsInvalid(errorElementId);
      hasErrors = true;
    }
  }

  function validateDate(input, errorElementId) {
    if (input.trim() === '' || !/^\d{4}-\d{2}-\d{2}$/.test(input)) {
      displayError(errorElementId, "Veuillez indiquer votre date de naissance.");
      markInputAsInvalid(errorElementId);
      hasErrors = true;
    }
  }

  function validateQuantity(input, errorElementId) {
    if (input.trim() === '' || !/^\d+$/.test(input)) {
      displayError(errorElementId, "La quantité doit être un nombre entier.");
      markInputAsInvalid(errorElementId);
      hasErrors = true;
    }
  }

  function validateLocation(locations, errorElementId) {
    const checkedLocations = Array.from(locations).some(loc => loc.checked);
    if (!checkedLocations) {
      displayError(errorElementId, "Veuillez choisir une option de localisation.");
      hasErrors = true;
    }
  }

  function validateGTC(gtcCheckbox, errorElementId) {
    if (!gtcCheckbox.checked) {
      displayError(errorElementId, "Veuillez accepter les Conditions Générales d'Utilisation pour valider votre inscription.");
      hasErrors = true;
    }
  }

  // Function to display error messages
  function displayError(errorElementId, errorMessage) {
    const errorElement = document.getElementById(errorElementId);
    if (errorElement) {
      errorElement.textContent = errorMessage;
    }
  }

  // Function to mark input as invalid
  function markInputAsInvalid(errorElementId) {
    const inputElement = document.getElementById(errorElementId.replace("error-", ""));
    if (inputElement) {
      inputElement.classList.add("invalid-input");
    }
  }

  // Field validation
  validateFirstName(firstName.value, 'error-first');
  validateLastName(lastName.value, 'error-last');
  validateEmail(email.value, 'error-email');
  validateDate(birthDate.value, 'error-date');
  validateQuantity(quantity.value, 'error-qty');
  validateLocation(locations, 'error-location');
  validateGTC(gtcCheckbox, 'error-gtc');

  // Keep form from beeing sent if errors
  event.preventDefault();
  if (hasErrors) {
    return;
  }

  // hide form and display success message if form valid
  document.querySelectorAll(".formData").forEach((element) => {
    element.style.display = "none";
  });
  document.getElementById("valid-message").style.display = "block";
}

// Close success message
function closeSuccessMessage() {
  document.querySelector('.bground').style.display = 'none';
}
document.querySelector('.btn-close').addEventListener('click', closeSuccessMessage);
