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
const closeModalBtn = document.querySelector(".close");

closeModalBtn.addEventListener("click", () => {
  modalbg.style.display = "none";
});



// #2 Implement form entries and #3 Add validation or error messages

// create a function containing functions that will check all the fields of the form
function validate() {
  validateFirst();
  validateLast();
  validateEmail();
  validateBirthdate();
  validateQuantity();
  validateLocation();
  validateConditions();

  if (validateFirst() && validateLast() && validateEmail() && validateBirthdate() && validateQuantity() && validateLocation() && validateConditions() === true) {
    alert("Merci ! Votre réservation a été reçue.");
  }
}


// variable that will contain the complete form
const form = document.getElementById('form');

// event listener allows to attach a callback function which gets triggered once the form is submitted
form.addEventListener('submit', (e) => {
  // page doesn't refresh when we click on submit,
  e.preventDefault();
  console.log(first.value);
  console.log(last.value);
  console.log(email.value);
  console.log(birthdate.value);
  console.log(quantity.value);
  console.log(radio);
  console.log(conditions.checked);
  console.log('submit');
});

// Check firstname length characters
function validateFirst() {
  const first = document.getElementById('first');
  if (first.value.length == '' || first.value.length < 2) {
    document.querySelector('.first-error').innerHTML =
    'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
  } else {
    document.querySelector('.first-error').innerHTML = '';
    return true;
  }
}


// Check lastname length characters
function validateLast() {
  const last = document.getElementById('last');
  if (last.value.length == '' || last.value.length < 2) {
    document.querySelector('.last-error').innerHTML =
      'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
  } else {
    document.querySelector('.last-error').innerHTML = '';
    return true;
  }
}


// Check if valid e-mail format
function validateEmail() {
  const email = document.getElementById('email');
  let regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (regexEmail.test(email.value) == false) {
    document.querySelector('.email-error').innerHTML =
      'Veuillez entrer une adresse email valide.';
  } else {
    document.querySelector('.email-error').innerHTML = '';
    return true;
  }
}

// Check if valid birthdate format
const birthdate = document.getElementById('birthdate');
function validateBirthdate() {
  let regexBirthdate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  if (birthdate.value == '' && regexBirthdate.test(birthdate.value) == false) {
    document.querySelector('.birthdate-error').innerHTML =
    'Veuillez entrer une date de naissance valide.';
  } else {
    document.querySelector('.birthdate-error').innerHTML = '';
    return true;
  }
}


// Checks if valid number format
function validateQuantity() {
  const quantity = document.getElementById('quantity');
  let regexQuantity = /^[0-9]{1,2}$/;
  if (regexQuantity.test(quantity.value) == false) {
    document.querySelector('.quantity-error').innerHTML =
      'Veuillez indiquer un nombre de tournoi.';
  } else {
    document.querySelector('.quantity-error').innerHTML = '';
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
      document.querySelector('.location-error').innerHTML = '';
      return true;
    }
  }
  document.querySelector('.location-error').innerHTML =
  'Veuillez sélectionner un tournoi.';
  return false;
}


// Checks if the user has checked conditions
const conditions = document.querySelector('#checkbox1:checked');
function validateConditions() {
  if (conditions.checked == true) {
    document.querySelector('.checkbox1-error').innerHTML = '';
    return true;
  }
    document.querySelector('.checkbox1-error').innerHTML =
    'Vous devez vérifier que vous acceptez les termes et conditions.';
    return false;
}