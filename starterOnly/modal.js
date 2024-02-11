function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg    = document.querySelector(".bground");
const modalBtn   = document.querySelectorAll(".modal-btn");
const formData   = document.querySelectorAll(".formData");
const modalClose = document.querySelector("#close-modal");
const form       = document.querySelector("#reserve");
const firstName  = document.querySelector("#first");
const lastName   = document.querySelector("#last");
const email      = document.querySelector("#email");
const birthdate  = document.querySelector("#birthdate");
const quantity   = document.querySelector("#quantity");
const locationsIds = ["#location1", "#location2", "#location3", "#location4", "#location5", "#location6"];
const locations  = locationsIds.map((id) => document.querySelector(id));
const checkbox1  = document.querySelector("#checkbox1");
const checkbox2  = document.querySelector("#checkbox2");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  removeErrors();
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Error messages
function showError(input, message) {
  const formDataDiv = input.closest(".formData");
  formDataDiv.setAttribute("data-error-visible", "true");
  formDataDiv.setAttribute("data-error", message);
}

function removeErrors() {
  formData.forEach((data) => {
    data.setAttribute("data-error-visible", "false");
  });
}

// Check inputs
function validate() {

  let isValid = true;
  removeErrors();

  // FIRST NAME
  if (firstName.value.length == 0) {
    showError(firstName, "Veuillez renseigner ce champ");
    isValid = false;

  } else if (firstName.value.length < 2) {
    showError(firstName, "Votre prénom doit comporter au moins 2 caractères");
    isValid = false;
  }

  // LAST NAME
  if (lastName.value.length == 0) {
    showError(lastName, "Veuillez renseigner ce champ");
    isValid = false;

  } else if (lastName.value.length < 2) {
    showError(lastName, "Votre nom doit comporter au moins 2 caractères");
    isValid = false;
  }

  // EMAIL
  if (email.value.length == 0) {
    showError(email, "Veuillez renseigner ce champ");
    isValid = false;

  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) { // Regex email: x@x.x
    showError(email, "Veuillez entrer une adresse mail valide");
    isValid = false;
  }

  // BIRTHDATE
  if (birthdate.value.length == 0) {
    showError(birthdate, "Veuillez renseigner ce champ");
    isValid = false;
  } else {
    const date = new Date(birthdate.value);
    const now = new Date();
    const age = now.getFullYear() - date.getFullYear();

    if (!(age > 18)) {
      showError(birthdate, "Vous devez avoir plus de 18 ans");
      isValid = false;
    } else if (age > 100) {
      showError(birthdate, "Vous devez avoir moins de 100 ans");
      isValid = false;
    }
  }

  // QUANTITY
  if (quantity.value.length == 0) {
    showError(quantity, "Veuillez renseigner un nombre");
    isValid = false;

  } else if (quantity.value < 0) {
    showError(quantity, "Veuillez entrer un nombre positif");
    isValid = false;
  }

  // LOCATION
  // Check if at least one location is checked
  const locationChecked = locations.reduce((acc, location) => acc || location.checked, false);

  if (!locationChecked) {
    showError(locations[0], "Veuillez choisir une ville");
    isValid = false;
  }

  // CONDITIONS
  if (!checkbox1.checked) {
    showError(checkbox1, "Vous devez accepter les conditions d'utilisation");
    isValid = false;
  }

  if (isValid) {
    window.alert("Merci ! Votre réservation a été reçue.");
  }

  return isValid;
}