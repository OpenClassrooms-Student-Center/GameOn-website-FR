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
    return input.trim() !== '' && /^[a-zA-Z]{2,}$/.test(input);
  }

  // email validation
  function validateEmail(input) {
    return input.trim() !== '' && /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/.test(input);
  }

  // quantity validation
  function validateQuantity(input) {
    return input.trim() !== '' && /^\d+$/.test(input);
  }

  // location checked
  function locSelected() {
    return loc1.checked || loc2.checked || loc3.checked || loc4.checked || loc5.checked || loc6.checked;
  }

  // general terms & condition
  function gtcChecked() {
    return gtc.checked;
  }

  // Validation checks
  const ValidName = validateName(firstName.value) && validateName(lastName.value);
  const ValidEmail = validateEmail(email.value);
  const ValidQty = validateQuantity(quantity.value);
  const LocationSelected = locSelected();
  const GTCChecked = gtcChecked();

  // Check all validations
  const ValidForm = ValidName && ValidEmail && ValidQty && LocationSelected && GTCChecked;

  // If form is not valid, prevent submission and display error messages
  if (!ValidForm) {
    event.preventDefault();
  }
}
