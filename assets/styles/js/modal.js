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

  const competition = document.getElementById("quantity");
  
  validateFirstname();
  validateLastname();
  validateEmail();
}

function validateFirstname() {
  if (firstname.value.length < 2) {
    firstname.closest(".formData").setAttribute("data-error", "Le prénom doit contenir au moins deux caractères");
    firstname.closest(".formData").setAttribute("data-error-visible", "true");
  } else {
    firstname.closest(".formData").setAttribute("data-error-visible", "false");
  }

  if (firstname.value.length == 0) {
    firstname.closest(".formData").setAttribute("data-error", "Le champ prénom ne peut pas être vide");
    firstname.closest(".formData").setAttribute("data-error-visible", "true");
  } else {
    firstname.closest(".formData").setAttribute("data-error-visible", "false");
  }
}

function validateLastname() {
  if (lastname.value.length < 2) {
    lastname.closest(".formData").setAttribute("data-error", "Le nom doit contenir au moins deux caractères");
    lastname.closest(".formData").setAttribute("data-error-visible", "true");
  } else {
    lastname.closest(".formData").setAttribute("data-error-visible", "false");
  }

  if (firstname.length == 0) {
    lastname.closest(".formData").setAttribute("data-error", "Le champ nom ne peut pas être vide");
    lastname.closest(".formData").setAttribute("data-error-visible", "true");
  } else {
    firstname.closest(".formData").setAttribute("data-error-visible", "false");
  }
}

function validateEmail() {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (regex.test(email.value) == false) {
    email.closest(".formData").setAttribute("data-error", "L'adresse email n'est pas valide");
    email.closest(".formData").setAttribute("data-error-visible", "true");
  } else {
    email.closest(".formData").setAttribute("data-error-visible", "false");
  }

  if (email.length == 0) {
    email.closest(".formData").setAttribute("data-eror", "le champ email ne peut pas être vide");
    email.closest(".formData").setAttribute("data-error-visible", "true");
  } else {
    email.closest(".formData").setAttribute("data-error-visible", "false");
  }
}
