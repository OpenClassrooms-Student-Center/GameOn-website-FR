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
const closeBtn = document.querySelector(".close");
const form = document.querySelector('form');

const messageErreur = document.querySelectorAll(".errorMessage");

const lastname = document.getElementById("lastname").value;
const firstname = document.getElementById("firstname").value;
const email = document.getElementById("email").value;
const competition = document.getElementById("quantity").value;
const terms = document.getElementById("termsCondition");
const locationName = document.getElementsByName("location");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event, click x button
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close modal event, click outside modal
modalbg.addEventListener('click', function (event) {
  if (event.target === modalbg) {
    closeModal();
  }
})

function validate() {
  validateFirstname();
  validateLastname();
  validateEmail();
  validateLocation();
  validateCompetition();
  termsAccepted();
  
  return true;
}

function validateFirstname() {
  if (firstname.length < 2) {
    messageErreur.textContent = "Le prénom doit contenir au moins deux caractères";
    return false;
  }

  if (firstname.length == 0) {
    messageErreur.textContent = "Le champ prénom ne peut pas être vide";
  }
}

function validateLastname() {
  if (firstname.length < 2) {
    messageErreur.textContent = "Le nom doit contenir au moins deux caractères";
  }

  if (firstname.length == 0) {
    messageErreur.textContent = "Le champ nom ne peut pas être vide";
  }
}

function validateEmail() {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (regex.test(email) == false) {
    messageErreur.textContent = "L'adresse mail n'est pas valide";
  }
}

function validateCompetition() {

  if (Number.isInteger(competition) == false) {
    messageErreur.textContent = "Ce champ doit contenir un chiffre";
  }
}

function validateLocation() {

  var coché = false;

  for (var i = 0; i < locationName.length; i++) { //Pourqoi location.length
    if (locationName[i].checked) {
      coché = true;
      break;
    } 
  }

  if (!coché) {
    messageErreur.textContent = "Veuillez sélectionner un lieu";
  }
}

function termsAccepted() {
  if (terms.checked == false) {
    messageErreur.textContent = "L'acceptation des conditions d'utilisation est obligatoire";
  }
}