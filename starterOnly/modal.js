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
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const loc1 = document.getElementById('location1');
const loc2 = document.getElementById('location2');
const loc3 = document.getElementById('location3');
const loc4 = document.getElementById('location4');
const loc5 = document.getElementById('location5');
const loc6 = document.getElementById('location6');
const gtc = document.getElementById('checkbox1');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event
modalClose.addEventListener("click", closeModal);
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// form validation
const form = document.querySelector('form');
form.addEventListener("submit", validateForm);

function validateForm(event) {
  // name validation (at least 2 characters, not empty)
  function validateName(input) {
    if (input.trim() === '' || !/^[a-zA-Z]{2,}$/.test(input)) {
      throw new Error("Le nom doit comporter au moins 2 caractères alphabétiques.");
    }
  }

  // email validation
  function validateEmail(input) {
    if (input.trim() === '' || !/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/.test(input)) {
      throw new Error("Veuillez fournir une adresse e-mail valide.");
    }
  }

  // quantity validation
  function validateQuantity(input) {
    if (input.trim() === '' || !/^\d+$/.test(input)) {
      throw new Error("La quantité doit être un nombre entier.");
    }
  }

  // location checked
  function locSelected() {
    if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) {
      throw new Error("Veuillez choisir au moins une option de localisation.");
    }
  }

  // general terms & condition
  function gtcChecked() {
    if (!gtc.checked) {
      throw new Error("Veuillez accepter les conditions générales pour continuer.");
    }
  }

  try {
    // Validation checks for each field
    validateName(firstName.value);
    validateName(lastName.value);
    validateEmail(email.value);
    validateQuantity(quantity.value);
    locSelected();
    gtcChecked();
    alert("Votre inscription est validée !");

  } catch (error) {
    alert(error.message);
    event.preventDefault();
  }
}