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
const modalClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalClose.addEventListener("click", closeModal);

var modal = document.querySelector(".content");

// close modal form
function closeModal() {
  modal.classList.add("closing");
  modal.classList.remove("opening");
  setTimeout(function () {
    modalbg.style.display = "none";
    modal.classList.remove("closing");
  }, 500); // apply display: none; after the closing animation has played
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modal.classList.add("opening");

  // Disable the submit button when the modal is launched
  submitButton.disabled = true;
  submitButton.style.backgroundColor = "grey";
}

// get form fields
var firstName = document.getElementById("first");
var lastName = document.getElementById("last");
var email = document.getElementById("email");
var quantity = document.getElementById("quantity");
var radios = document.querySelectorAll('input[name="location"]');
var terms = document.getElementById("checkbox1");
var submitButton = document.querySelector('input[type="submit"]');
var birthdate = document.getElementById("birthdate");
var birthdateValue = new Date(birthdate.value);

firstName.addEventListener("input", validateForm);
lastName.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);
quantity.addEventListener("input", validateForm);
radios.forEach((r) => r.addEventListener("input", validateForm));
terms.addEventListener("input", validateForm);

function validateForm() {
  // check if any form field is filled
  var isFormFilled =
    firstName.value ||
    lastName.value ||
    email.value ||
    quantity.value ||
    document.querySelector('input[name="location"]:checked') ||
    terms.checked;

  // enable or disable submit button based on whether any field is filled
  submitButton.disabled = !isFormFilled;

  if (submitButton.disabled) {
    submitButton.style.backgroundColor = "grey";
  } else {
    submitButton.style.backgroundColor = ""; // Reset to default color
  }
}

function displayError(input, message) {
  // remove existing error messages
  var existingError = input.parentElement.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  // create error message element
  var error = document.createElement("div");
  error.className = "error-message";
  error.textContent = message;

  // add error message to DOM
  input.parentElement.appendChild(error);

  // change input border color to red
  input.style.borderColor = "red";
}

document.querySelector("form").addEventListener("submit", function (event) {
  // prevent form submission
  event.preventDefault();

  // validate form fields
  var isValid = true;

  if (firstName.value.length < 2) {
    displayError(firstName, "Le prénom doit comporter au moins 2 caractères");
    isValid = false;
  } else if (lastName.value.length < 2) {
    displayError(
      lastName,
      "Le nom de famille doit comporter au moins 2 caractères"
    );
    isValid = false;
  } else if (!email.value.includes("@")) {
    displayError(email, "L'adresse électronique n'est pas valide");
    isValid = false;
  } else if (isNaN(birthdateValue)) {
    displayError(birthdate, "La date de naissance doit être valide");
    isValid = false;
  } else if (isNaN(quantity.value) || quantity.value === "") {
    displayError(quantity, "Le nombre de tournois doit être inscrit");
    isValid = false;
  } else if (isNaN(quantity.value)) {
    displayError(
      quantity,
      "Le nombre de tournois doit être une valeur numérique"
    );
    isValid = false;
  } else if (!document.querySelector('input[name="location"]:checked')) {
    displayError(
      document.querySelector('input[name="location"]'),
      "Un lieu doit être sélectionné"
    );
    isValid = false;
  } else if (!terms.checked) {
    displayError(terms, "Les conditions générales doivent être acceptées");
    isValid = false;
  }

  // Validation du formulaire uniquement si tous les champs sont remplis
  if (isValid) {
    // Récupère le contenu de la modale
    var modalContent = document.querySelector(".modal-body");

    // Vérifie si le contenu de la modale existe
    if (modalContent) {
      // Supprime tous les enfants du contenu de la modale
      while (modalContent.firstChild) {
        modalContent.firstChild.remove();
      }

      // Crée un message de remerciement
      var thankYouMessage = document.createElement("h2");
      thankYouMessage.textContent = "Merci pour votre inscription";
      thankYouMessage.style.textAlign = "center"; // Centre le texte
      thankYouMessage.className = "thank-you-msg"; // Ajoute une classe pour le style

      // Crée un bouton de fermeture
      var closeButton = document.createElement("input");
      closeButton.type = "submit";
      closeButton.value = "Fermer";
      closeButton.className = "btn-close"; // Ajoute une classe pour le style

      // Ajoute le message de remerciement et le bouton de fermeture au contenu de la modale
      modalContent.appendChild(thankYouMessage);
      modalContent.appendChild(closeButton);

      // Ajoute un écouteur d'événements au bouton de fermeture pour fermer la modale lorsqu'il est cliqué
      closeButton.addEventListener("click", closeModal);
    }
  }
});
