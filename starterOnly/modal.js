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
const closeBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}
// From https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function validate(event) {
  // Prevent refresh
  event.preventDefault();

  // First name
  const firstNameInput = document.querySelector("#first");
  const firstNameValue = firstNameInput.value;
  if (firstNameValue.length < 2) {
    return;
  }

  // Last name
  const lastNameInput = document.querySelector("#last");
  const lastNameValue = lastNameInput.value;
  if (lastNameValue.length < 2) {
    return;
  }

  // Email
  const emailInput = document.querySelector("#email");
  const emailValue = emailInput.value;
  const isEmailValid = validateEmail(emailValue);
  if (!isEmailValid) {
    return;
  }

  // Quantity
  const quantityInput = document.querySelector("#quantity");
  const quantityValue = quantityInput.value;
  if (quantityValue.length === 0) {
    return;
  }

  // Location
  const locationInputs = document.getElementsByName("location");
  let hasLocationChecked = false;

  for (const locInput of locationInputs) {
    if (locInput.checked) {
      hasLocationChecked = true;
      break;
    }
  }

  if (!hasLocationChecked) {
    return;
  }

  // Checkbox1
  const checkbox1Input = document.querySelector("#checkbox1");
  if (!checkbox1Input.checked) {
    return;
  }

  closeModal();
}
