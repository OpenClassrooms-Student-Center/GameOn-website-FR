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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// -------------------------------            Issue #1              ----------------------------------//
// ------------  close modal when click on span class "close" by changing display mode  ---------------//

// creating a function that changes the display value
function closeModal() {
  modalbg.style.display = "none";
}
// select the close button by className
const closeBtn = document.querySelector(".close");
// on click, calling closeModal() function
closeBtn.addEventListener("click", closeModal);




// -------------------------------            Issue #2              ----------------------------------//
// ------------           form inputs must be valid when clicking on "Submit"           ---------------//

// Select all form entries
const form = document.querySelector("form");

// Select submit button
const submit = document.querySelector(".btn-submit");

// By default, disable Submit button
submit.disabled = true;

// Cancel default behaviour of Submit button

submit.addEventListener("click", function(event) {
  event.preventDefault();
})




// ------------                       validates form entries                           ---------------//



// function to validate "first" entry
function validateFirst() {
  const first = form.first;
  let namesRegex = /\w{2,}/;
  // checking if input value match the regex pattern, if so return true
  return namesRegex.test(first.value);
}
// validateFirst();


function validateLast() {
  const last = form.last;
  let namesRegex = /\w{2,}/;
  return namesRegex.test(last.value);
}

function validateEmail() {
  const email = form.email;
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email.value);
}

function validateBirthdate() {
  const birthdate = form.birthdate;
  let dateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
  return dateRegex.test(birthdate.value);
}

function validateQuantity() {
  const quantity = form.quantity;
  let quantityRegex = /^\d+$/;
  return quantityRegex.test(quantity.value);
}

// function to validate if a location is checked
function validateLocation() {
  // selecting all the input of type radio
  const locations = document.querySelectorAll("[type=radio]");
  //looping on all radio buttons to check if one is checked
  for (const location of locations) {
    if (location.checked) {
      // if so return true
      return true;
    }
  }
  return false;
}

function validateTOU() {
  // selecting the checkbox input managing the terms of use
  const terms = document.querySelector("#checkbox1");
  // checking if this is checked, if so return true
  return terms.checked;
}

function validateForm() {
  validateFirst();
  validateLast();
  validateEmail();
  validateBirthdate();
  validateQuantity();
  validateLocation();
  validateTOU();
  // select the "Submit button"
  // disable button if all input are not valid
  if (validateFirst() && validateLast() && validateEmail() && validateBirthdate() && validateQuantity() && validateLocation() && validateTOU()) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
};

form.addEventListener("input", validateForm);
