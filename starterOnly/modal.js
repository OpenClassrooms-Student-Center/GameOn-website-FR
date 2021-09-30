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

// Fermer la modale #1
const closeBtn = document.querySelectorAll(".close");

//validation: ajouter confirmation quand envoie réussi #4
const modalV = document.querySelector(".modalValidate");
const modalVbg = document.querySelector(".bground2");
const closeBtnV = document.querySelectorAll(".closeV");
const closeBtn2 = document.querySelectorAll(".close2");

// Implémenter entrées du formulaire #2, ajouter validation ou messages d'erreur #3, ajouter confirmation quand envoie réussi #4
// submit
document.getElementById("reserve-form").addEventListener("submit", validate);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal validation event
closeBtnV.forEach((btn) => btn.addEventListener("click", closeModalV));
closeBtn2.forEach((btn) => btn.addEventListener("click", closeModalV));

//déclaration variables du DOM
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationInput = document.querySelectorAll("[name='location']");
const checkboxInput = document.getElementById("checkbox1");

const errorMessages = {
  firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
  lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
  email: "Veuillez entrer une adresse email valide.",
  birthdate: "Veuillez entrer une date de naissance valide.",
  quantity: "Veuillez entrer un nombre valide.",
  location: "Veuillez choisir une ville.",
  checkbox: "Veuillez accepter les conditions d'utilisations.",
};

// launch modal form 
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

//close modal form and open validate: ouvre la modale et la ferme en cliquant
function validateModal() {
  modalbg.style.display = "none";
  modalV.style.display = "flex";
  modalVbg.style.display = "block";
}

// close modal Validation form 
function closeModalV() {
  modalV.style.display = "none";
  modalVbg.style.display = "none";
}

function isInvalid(element, message) {
  let target;
  if (NodeList.prototype.isPrototypeOf(element)) target = element[0].parentNode;
  else target = element.parentNode;
  target.setAttribute("data-error-visible", true);
  target.setAttribute("data-error", message);
}

//form regex
isName = (name) => {
  return new RegExp(/^[A-Za-z]{2,20}$/).test(name);
};
isMail = (mail) => {
  return new RegExp(/^[A-Za-z0-9-éàè.]+@[a-z.]+[a-z.]$/).test(mail);
};
isBirth = (birthdate) => {
  return new RegExp(/^\d{4}\-\d{2}\-\d{2}$/).test(birthdate);
};
isQuantity = (quantity) => {
  return new RegExp("^([1-9][0-9]?){0,1}$").test(quantity);
};

