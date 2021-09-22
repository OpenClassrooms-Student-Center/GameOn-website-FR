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
const closeBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
}

// afficher message d'erreur
let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let email = document.querySelector("#email");
let birthdate = document.querySelector("#birthdate");
let quantity = document.querySelector("#quantity");

let checkboxIcons = document.querySelectorAll(".checkbox-icon");

const birthdateError = "Vous devez entrer votre date de naissance.";
const firstnameError = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const lastnameError = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const emailError = "Veuillez entrer une adresse email valide.";
const optionError = "Vous devez choisir une option.";
const consentError = "Vous devez vérifier que vous acceptez les termes et conditions.";

// firstname.addEventListener("input", displayError);
// // lastname.addEventListener("input", displayError(lastname));

// function displayError() {
//   if(firstname.validity.valid) {
//     firstname.classList.add("valid");
//     firstname.classList.remove("invalid");
//   } else {
//     firstname.classList.remove("valid");
//     firstname.classList.add("invalid");
//   } 
// }
