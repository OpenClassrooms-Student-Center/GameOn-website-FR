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

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  var submitButton = document.querySelector(".btn-submit");
  submitButton.disabled = true;
  submitButton.style.backgroundColor = "grey";
  validateForm(); // call validateForm when the modal is launched
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// get form fields
var firstName = document.getElementById("first");
var lastName = document.getElementById("last");
var email = document.getElementById("email");
var quantity = document.getElementById("quantity");
var radios = document.querySelectorAll('input[name="location"]');
var terms = document.getElementById("checkbox1");
var submitButton = document.querySelector(".btn-submit");

firstName.addEventListener("input", validateForm);
lastName.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);
quantity.addEventListener("input", validateForm);
radios.forEach((r) => r.addEventListener("input", validateForm));
terms.addEventListener("input", validateForm);

function validateForm() {
  // check if all form fields are filled
  var isFormFilled =
    firstName.value &&
    lastName.value &&
    email.value &&
    quantity.value &&
    document.querySelector('input[name="location"]:checked') &&
    terms.checked;

  // enable or disable submit button based on whether form is filled
  submitButton.disabled = !isFormFilled;

  if (submitButton.disabled) {
    submitButton.style.backgroundColor = "grey";
  } else {
    submitButton.style.backgroundColor = ""; // Reset to default color
  }
}

document.querySelector("form").addEventListener("submit", function (event) {
  // prevent form submission
  event.preventDefault();

  // validate form fields
  if (firstName.value.length < 2) {
    displayError(firstName, "Le prénom doit comporter au moins 2 caractères");
  } else if (lastName.value.length < 2) {
    displayError(
      lastName,
      "Le nom de famille doit comporter au moins 2 caractères"
    );
  } else if (!email.value.includes("@")) {
    displayError(email, "L'adresse électronique n'est pas valide");
  } else if (isNaN(quantity.value)) {
    displayError(
      quantity,
      "Le nombre de tournois doit être une valeur numérique"
    );
  } else if (!document.querySelector('input[name="location"]:checked')) {
    displayError(
      document.querySelector('input[name="location"]'),
      "Un lieu doit être sélectionné"
    );
  } else if (!terms.checked) {
    displayError(terms, "Les conditions générales doivent être acceptées");
  } else {
    // only submit the form if all validations pass
    event.target.submit();
  }
});

function displayError(input, message) {
  // create error message element
  var error = document.createElement("div");
  error.className = "error-message";
  error.textContent = message;

  // add error message to DOM
  input.parentElement.appendChild(error);

  // change input border color to red
  input.style.borderColor = "red";
}
