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
// form element
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

  if (validFirstName() == true && validLastName() == true && validEmail() == true && validBirthdate() == true && validQuantity() == true && validCGV() == true) {
    alert("Form valid");
    closeModal();
  }
}

// FirstName validation
function validFirstName() {
  if (!firstName.value) {
    firstName.classList.add('input-error');
    alert("Veuillez renseigner un Prenom.");
    return false;
  } else if (firstName.value.length <= 1){
    firstName.classList.add('input-error');
    alert("Veuillez entrer 2 caractères ou plus pour le champ du prenom.");
    return false;
  } else {
    firstName.classList.add('input-valid');
    firstName.classList.remove('input-error');
    return true;
  }
}
// LastName validation
function validLastName() {
  if (!lastName.value) {
    lastName.classList.add('input-error');
    alert("Veuillez renseigner un Nom.");
    return false;
  } else if (lastName.value.length <= 1){
    lastName.classList.add('input-error');
    alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    return false;
  } else {
    lastName.classList.add('input-valid');
    lastName.classList.remove('input-error');
    return true;
  }
}
// email validation
function validEmail() {
  if (!email.value) {
    email.classList.add('input-error');
    alert("Veuillez renseigner un E-mail.");
    return false;
  } else {
    email.classList.add('input-valid');
    email.classList.remove('input-error');
    return true;
  }
}
// Birthdate validation
function validBirthdate() {
  if (!birthdate.value) {
    birthdate.classList.add('input-error');
    alert("Veuillez renseigner une date de naissance.");
    return false;
  } else {
    birthdate.classList.add('input-valid');
    birthdate.classList.remove('input-error');
    return true;
  }
}
// Quantity validation
function validQuantity() {
  if (!quantity.value) {
    quantity.classList.add('input-error');
    alert("Veuillez renseigner a combien de tournois GameOn avez-vous déjà participé.");
    return false;
  } else {
    quantity.classList.add('input-valid');
    quantity.classList.remove('input-error');
    return true;
  }
}
// Quantity validation
function validCGV() {
  if (CGV.checked) {
    return true;
  } else {
    alert("Veuillez accepter les CGV.");
    return false;
  }
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


