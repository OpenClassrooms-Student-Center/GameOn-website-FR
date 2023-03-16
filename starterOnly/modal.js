function editNav() {
  let x = document.getElementById("myTopnav");
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



// #1 close modal form
const closeModalCross = document.querySelector(".close");

closeModalCross.addEventListener("click", () => {
  modalbg.style.display = "none";
});



// #2 Implement form entries and #3 Add validation or error messages

// variable that will contain the complete form
const form = document.getElementById('form');

// event listener allows to attach a callback function which gets triggered once the form is submitted
form.addEventListener('submit', (e) => {
  // page doesn't refresh when we click on submit,
  e.preventDefault();
});

// create a function containing functions that will check all the fields of the form
function validate() {

  validateFirst();
  validateLast();
  validateEmail();
  validateBirthdate();
  validateQuantity();
  validateLocation();
  validateConditions();

  // #4 Add confirmation when submit successfully
  const confirmationSubmit = document.getElementById('confirmation-submit');
  
  if (validateFirst() && validateLast() && validateEmail() && validateBirthdate() && validateQuantity() && validateLocation() && validateConditions() === true) {
    form.style.display = "none";
    confirmationSubmit.style.display = "block";
    confirmationSubmit.style.textAlign = "center";
    confirmationSubmit.style.marginBottom = "30px"; 
    confirmationSubmit.innerHTML = "Merci ! <br>Votre réservation a été reçue."
    closeModalBtn.style.display = "block";
    closeModalBtn.style.marginBottom = "20px"; 
    return true;
  }
}

// close modal form with "close" red button when submit successfully
const closeModalBtn = document.querySelector("#close-btn");
closeModalBtn.style.display = "none";
closeModalBtn.addEventListener("click", () => {
  modalbg.style.display = "none";
});


// function display error message
function displayError(element, message) {
  element.setAttribute('data-error', message)
  element.setAttribute('data-error-visible', true)
}
// function for remove error message
function removeError(element) {
  element.removeAttribute('data-error')
  element.removeAttribute('data-error-visible')
}


// Check firstname length characters
function validateFirst() {
  const first = document.getElementById('first');
  if (first.value.length == '' || first.value.length < 2) {
    displayError(formData[0], 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
  } else {
    removeError(formData[0])
    return true;
  }
}

// Check lastname length characters
function validateLast() {
  const last = document.getElementById('last');
  if (last.value.length == '' || last.value.length < 2) {
    displayError(formData[1], 'Veuillez entrer 2 caractères ou plus pour le champ du nom.')
  } else {
    removeError(formData[1])
    return true;
  }
}

// Check if valid e-mail format
function validateEmail() {
  const email = document.getElementById('email');
  let regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (regexEmail.test(email.value) == false) {
    displayError(formData[2], 'Veuillez renseigner une adresse mail valide.')
  } else {
    removeError(formData[2])
    return true;
  }
}

// Check if valid birthdate format
const birthdate = document.getElementById('birthdate');
function validateBirthdate() {
  let regexBirthdate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  if (birthdate.value == '' && regexBirthdate.test(birthdate.value) == false) {
    displayError(formData[3], 'Veuillez renseigner une date de naissance valide.')
  } else {
    removeError(formData[3])
    return true;
  }
}

// Checks if valid number format
function validateQuantity() {
  const quantity = document.getElementById('quantity');
  let regexQuantity = /^[0-9]{1,2}$/;
  if (regexQuantity.test(quantity.value) == false) {
    displayError(formData[4], 'Veuillez indiquer un nombre de tournoi.')
  } else {
    removeError(formData[4])
    return true;
  }
}

// Checks if the user has selected a location
const radios = document.querySelectorAll('.checkbox-input[type=radio]');
let radio = "";
function validateLocation() {
  for(let i = 0 ; i < radios.length; i++) {
    if(radios[i].checked) {
      radio = radios[i].value;
      removeError(formData[5])
      return true;
    } else {
      radio = radios[i].value;
      displayError(formData[5], 'Veuillez choisir un tournoi.')
    }
  }
}

// Checks if the user has checked conditions
const conditions = document.querySelector('#checkbox1:checked');
function validateConditions() {
  if (conditions.checked !== true) {
    displayError(formData[6], 'Veuillez accepter les conditions d\'utilisations.')
  } else {
    removeError(formData[6])
    return true;
  }
}