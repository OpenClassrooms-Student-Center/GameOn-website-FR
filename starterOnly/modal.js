function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*--------- DOM ELEMENTS ---------*/

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll("#close");
// form elements
const form = document.getElementById ('reserve');
const firstName = document.getElementById ('first');
const lastName = document.getElementById ('last');
const email = document.getElementById ('email');
const birthdate = document.getElementById ('birthdate');
const quantity = document.getElementById ('quantity');
const CGV = document.getElementById ('checkbox1');


/*--------- EVENTS ---------*/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// form submit
reserve.addEventListener('submit', (e) => {
  e.preventDefault();

  validate();

  if (validFirstName() == true && validLastName() == true && validEmail() == true && validBirthdate() == true && validQuantity() == true && validCGV() == true) {
    alert("Form valid");
    closeModal();
  }
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value);
  console.log(birthdate.value);
  console.log(quantity.value);
  console.log('submit');
})

// close modal event
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

/*--------- FUNCTIONS ---------*/

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Form validation
function validate() {

  validFirstName();
  validLastName();
  validEmail();
  validBirthdate();
  validQuantity();
  validCGV();
}

// FirstName validation
function validFirstName() {
  if (!firstName.value) {
    setErreur(firstName, "Veuillez renseigner un prénom.");
  } else if (firstName.value.length <= 1){
    setErreur(firstName, "Veuillez entrer 2 caractères ou plus pour le champ du prenom.");
  } else {
    setValid(firstName);
    return true;
  }
}
// LastName validation
function validLastName() {
  if (!lastName.value) {
    setErreur(lastName, "Veuillez renseigner un nom.");
  } else if (lastName.value.length <= 1){
    setErreur(lastName, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  } else {
    setValid(lastName);
    return true;
  }
}
// email validation
function validEmail() {
  if (!email.value) {
    setErreur(email, "Veuillez renseigner un E-mail.");
  } else {
    setValid(email);
    return true;
  }
}
// Birthdate validation
function validBirthdate() {
  if (!birthdate.value) {
    setErreur(birthdate, "Veuillez renseigner une date de naissance.");
  } else {
    setValid(birthdate);
    return true;
  }
}
// Quantity validation
function validQuantity() {
  if (!quantity.value) {
    setErreur(quantity, "Veuillez renseigner a combien de tournois GameOn avez-vous déjà participé.");
  } else {
    setValid(quantity);
    return true;
  }
}
// CGV validation
function validCGV() {
  if (CGV.checked) {
    setValid(CGV);
    return true;
  } else {
    setErreur(CGV, "Veuillez accepter les CGV.");
  }
}

// SetErreur validation
function setErreur(input, message) {
  // Form elements for error and validation
  const formDataInput = input.parentElement; // Select input
  const small = formDataInput.querySelector('small'); // Select div for error message

  small.innerText = message;
  input.className = 'text-control input-error';
}
// SetValid validation
function setValid(input) {
  // Form elements for error and validation
  const formDataInput = input.parentElement; // Select input
  const small = formDataInput.querySelector('small'); // Select div for error message

  small.innerText = " "; // Reset error message
  input.className = 'text-control input-valid';
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


