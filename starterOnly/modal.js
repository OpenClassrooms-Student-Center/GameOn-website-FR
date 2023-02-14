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

/******
*
  MODAL
*
******/

// launch modal event
const modalBtn = document.querySelectorAll(".modal-btn");
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

/******
*
  FORM VALIDATION
*
******/

// DOM
const form = document.getElementById("form");
const formData = document.querySelectorAll(".formData");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");

/***********
 * 
 * ADD / REMOVE DATA-ATTRIBUTE
 * 
************/

// set error message to "true"
function displayError(element, message) {
  element.setAttribute('data-error', message)
  element.setAttribute('data-error-visible', true)
}

// Function for remove one error msg
function removeError(element) {
  element.removeAttribute('data-error')
  element.removeAttribute('data-error-visible')
}

/***********
 * 
 * CHECK FUNCTION VALIDATION
 * 
************/

// regex
const emailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/

function isValid() {
  // first name validation 
  if (firstName.value === "" || firstName.value.length < 2) {
    displayError(formData[0], 'Veuillez renseigner votre prénom')
  } else {
    removeError(formData[0])
  }
  // last name validation 
  if (lastName.value === "") {
    displayError(formData[1], 'Veuillez renseigner votre nom')
  } else {
    removeError(formData[1])
  }
  // email validation 
  if (email.value === "" || !email.value.match(emailRegex)) {
    displayError(formData[2], 'Veuillez renseigner un email valide')
  } else {
    removeError(formData[2])
  }
} 

// check function onClick
form.addEventListener("click", isValid);

// form preventDefault
form.addEventListener('submit', e => {
	e.preventDefault()
});


