function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
let formContent = document.getElementById("reserve");     //form content



// ____________________FORM
const modalBtn = document.querySelectorAll(".modal-btn");   //open modal button
const modalbg = document.querySelector(".bground");         //modal

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

// btn de fermeture de la modale
const closeBtn = document.querySelector(".close");

// btn de validation de formulaire
const submitFormBtn = document.querySelector(".btn-submit");


// ____________________INPUTS

// default messages
const firstNameMessage = "Le prénom doit comporter au moins 2 caractères alphabétiques";
const lastNameMessage = "Le nom doit comporter au moins 2 caractères alphabétiques";
const emailMessage = "L'adresse e-mail n'est pas valide !";
const birthdateMessage = "La date de naissance n'est pas valide !";
const quantityMessage = "Merci d'entrer un nombre entre 1 et 99 !";
const cityMessage = "Vous devez selectionner une ville !";
const acceptationMessage =  "Vous devez accepter les conditions d'utilisation !";
const requiredFieldsMessage =  "Vous devez compléter tous les champs obligatoires !";

// SUBMIT
const modalSubmit = document.querySelector(".btn-submit");  //modal submit button
const modalSuccess = document.getElementById("modalSuccess");//modal success

btn-submit.addEventListener("submit", function(e) {
  e.preventDefault();
const firstName = document.getElementById("first");         //firtname input
const lastName = document.getElementById("last");           //lastname input
const email = document.getElementById("email");             //email input
const birthdate = document.getElementById("birthdate");     //birthdate input
const quantity = document.getElementById("quantity");       //quantity input
const city = document.getElementById("location1");          //city input
const conditionAcceptation = document.getElementById("checkbox1");     //conditions input
});

