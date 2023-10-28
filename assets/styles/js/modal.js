function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements  ///Valeur à null 
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const form = document.querySelector('form');

const messageErreur = document.querySelectorAll(".errorMessage");


document.getElementById("firstname").closest(".errorMessage");
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

  
  event.preventDefault();

  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;

  validateFirstname();
  validateLastname();
  validateEmail();
  
}

function validateFirstname() {
  if (firstname.length < 2) {
    messageErreur.textContent = "Le prénom doit contenir au moins deux caractères";
    messageErreur.setAttribute("data-error-visible", "true");
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
