function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM ELEMENTS
const modalBtn = document.querySelectorAll(".modal-btn");   //open modal button
const modalbg = document.querySelector(".bground");         //modal
const closeBtn = document.querySelector(".close");        //close btn modal


// LAUNCH FORM

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// CLOSE FORM

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close modal event
closeBtn.addEventListener("click", closeModal);


// INPUTS

// POUR TOUS LES INPUTS

// firstName
const regText = /[a-zA-ZÀ-ÿ]/;
const firstName = document.querySelector("#first");
firstName.addEventListener('input', function() {
  console.log(firstName.value.length);
  if (regText.test(firstName.value) && firstName.value.length > 2) {
    firstName.parentNode.dataset.errorVisible = false;
    return true
  } else {
    firstName.parentNode.dataset.error = "Le prénom doit avoir 2 caractères ou plus";
    firstName.parentNode.dataset.errorVisible = true;
    return false
  }
  }
);

// check firstname
function checkFirstName (firstName) {
  const regText = /[a-zA-ZÀ-ÿ]/;
  if (regText.test(firstName.value) && firstName.value.length > 2) {
    firstName.parentNode.dataset.errorVisible = false;
    return true
  } else {
    firstName.parentNode.dataset.error = "Le prénom doit avoir 2 caractères ou plus";
    firstName.parentNode.dataset.errorVisible = true;
    return false
  }
  };


// lastName

const lastName = document.querySelector("#last");
lastName.addEventListener('input', function() {
  console.log(lastName.value.length);
  if (regText.test(lastName.value) && lastName.value.length > 2) {
    lastName.parentNode.dataset.errorVisible = false;
    return true
  } else {
    lastName.parentNode.dataset.error = "Le nom doit avoir 2 caractères ou plus";
    lastName.parentNode.dataset.errorVisible = true;
    return false
  }
  }
);

// check lastName
function checkLastName (lastName) {
  if (regText.test(lastName.value) && lastName.value.length > 2) {
    lastName.parentNode.dataset.errorVisible = false;
    return true
  } else {
    lastName.parentNode.dataset.error = "Le nom doit avoir 2 caractères ou plus";
    lastName.parentNode.dataset.errorVisible = true;
    return false
  }
};


// email
const regEmail = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
const email = document.querySelector("#email");
email.addEventListener('input', function() {
  console.log(email.value.length);
  console.log(regText.test);
  if (regEmail.test(email.value)) {
    email.parentNode.dataset.errorVisible = false;
    return true
  } else {
    email.parentNode.dataset.error = "Veuillez entrer un mail valide";
    email.parentNode.dataset.errorVisible = true;
    return false
  }
  }
);

// check email
function checkEmail (email) {
  const regEmail = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
  if (regEmail.test(email.value)) {
    email.parentNode.dataset.errorVisible = false;
    return true
  } else {
    email.parentNode.dataset.error = "Veuillez entrer un mail valide";
    email.parentNode.dataset.errorVisible = true;
    return false
  }
};

// birthDate

const birthDate = document.querySelector("#birthdate");
birthDate.addEventListener('input', function() {
  console.log(birthDate.value);
  if (birthDate.value == "") {
    birthDate.parentNode.dataset.error = "Veuillez saisir votre date de naissance";
    birthDate.parentNode.dataset.errorVisible = true;
    return false 
  } else {
    birthDate.parentNode.dataset.errorVisible = false;
    return true
  }
  }
);

// check birthDate
function checkBirthDate (birthDate) {
  if (birthDate.value == "") {
    birthDate.parentNode.dataset.error = "Veuillez saisir votre date de naissance";
    birthDate.parentNode.dataset.errorVisible = true;
    return false 
  } else {
    birthDate.parentNode.dataset.errorVisible = false;
    return true
  }};

// concours A MODFIER
// (4) Pour le nombre de concours, une valeur numérique est saisie.
const regNumber = /^[0-9]$/;
const quantity = document.querySelector("#quantity");
quantity.addEventListener('input', function() {
  console.log(quantity.value);
  if (regNumber.test(quantity.value) && (quantity.value === "" || parseInt(quantity.value) <= 20)) {
    quantity.parentNode.dataset.errorVisible = false;
    return true
  } else {
    quantity.parentNode.dataset.error = "Veuillez saisir un nombre";
    quantity.parentNode.dataset.errorVisible = true;
    return false 
  }
  }
);

// check quantity

function checkQuantity (quantity) {
  if (regNumber.test(quantity.value) && (quantity.value === "" || parseInt(quantity.value) <= 20)) {
    quantity.parentNode.dataset.errorVisible = false;
    return true
  } else {
    quantity.parentNode.dataset.error = "Veuillez saisir un nombre";
    quantity.parentNode.dataset.errorVisible = true;
    return false 
  }};


// radio A MODFIER
// (5) Un bouton radio est sélectionné.
const radio = document.querySelectorAll("input[name='location']");
radio.addEventListener('click', function() {
  console.log(radio[i].value);
  for (i = 0; i < radio.length; i++) {
  if (radio[i].value == "") {
    radio.parentNode.dataset.errorVisible = true;
    return false 
  } else {
    radio.parentNode.dataset.errorVisible = false;
    return true
  }
  }}
);

// check radio
function checkRadio (radio) {
  if (radio[i].value == "") {
    radio.parentNode.dataset.errorVisible = true;
    return false 
  } else {
    radio.parentNode.dataset.errorVisible = false;
    return true
  }
};

// required A MODFIER
// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.

const checkbox = document.querySelector("checkbox1");
checkbox.addEventListener('click', function() {
  console.log(checkbox.value);
  if (checkbox.checked) {
    checkbox.parentNode.dataset.errorVisible = true;
    return false 
  } else {
    checkbox.parentNode.dataset.error = "Veuillez cocher la case des conditions d'utilisations";
    checkbox.parentNode.dataset.errorVisible = false;
    return true
  }
  }
);

// check checkbox
function checkCheckbox (checkbox) {
  if (checkbox.checked) {
    checkbox.parentNode.dataset.errorVisible = true;
    return false 
  } else {
    checkbox.parentNode.dataset.error = "Veuillez cocher la case des conditions d'utilisations";
    checkbox.parentNode.dataset.errorVisible = false;
    return true
  }
};


// Submit A MODFIER
const modalSubmit = document.querySelector(".btn-submit");  //modal submit button
modalSubmit.addEventListener('click', function(e) {
  e.preventDefault();
  if (checkFirstName(firstName.value) 
  && checkLastName(lastName.value) 
  && checkEmail(email.value) 
  && checkBirthDate(birthDate.value) 
  && checkQuantity(quantity.value) 
  && checkRadio(radio.value) 
  && checkCheckbox(checkbox.value)) {
  modalSuccess ()
  } else {
    alert('fbgdffdhfdfh');
  }
});

function modalSuccess () {
  const supprModal = document.querySelector("modal-body");
  supprModal.parentNode.removeChild(supprModal);
};