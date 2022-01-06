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
const bouton = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const confirmationCloseBtn = document.querySelectorAll(".btn-close");
const regexName = /[a-zA-Z]+/g;
const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const form = document.getElementById("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkedCity = document.querySelectorAll(".checkedCity");
const checkbox = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Fermeture du modal
bouton.addEventListener("click", () => (modalbg.style.display = "none"));

//Empêcher la page de se recharger
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validForm();
});

//Fonctions pour le formulaire
function goodBorder(element) {
  changeBorder(element, "green");
}

function badBorder(element) {
  changeBorder(element, "red");
}

function changeBorder(element, color) {
  element.style.border = "2px solid " + color;
}

function removeInvisible(element) {
  element.nextElementSibling.classList.remove("invisible");
}
function addInvisible(element) {
  element.nextElementSibling.classList.add("invisible");
}

//Fonctions de contrôle du formulaire
first.addEventListener("blur", (e) => {
  checkPrenom();
});
last.addEventListener("blur", (e) => {
  checkNom();
});
email.addEventListener("blur", (e) => {
  checkEmail();
});
birthdate.addEventListener("blur", (e) => {
  checkBirthdate();
});
quantity.addEventListener("blur", (e) => {
  checkQuantity();
});
checkedCity.forEach((check) => check.addEventListener("click", checkLocation));

//Fonction de contrôle du prénom
function checkPrenom() {
  const firstValue = first.value.trim();
  if (regexName.exec(firstValue) === null || first.length < 2) {
    removeInvisible(first);
    badBorder(first);
    return false;
  }
  goodBorder(first);
  addInvisible(first);
  return true;
}

//Fonction de contrôle du nom
function checkNom() {
  const lastValue = last.value.trim();
  if (regexName.exec(lastValue) === null || last.length < 2) {
    removeInvisible(last);
    badBorder(last);
    return false;
  }
  goodBorder(last);
  addInvisible(last);
  return true;
}

//validation du formulaire de l'email
function checkEmail() {
  const emailValue = email.value.trim();
  if (regexEmail.exec(emailValue) === null) {
    removeInvisible(email);
    badBorder(email);
    return false;
  }
  goodBorder(email);
  addInvisible(email);
  return true;
}

//Fonction de contrôle de la date de naissance
function checkBirthdate() {
  const birthdateValue = birthdate.value;
  if (birthdateValue == "") {
    removeInvisible(birthdate);
    badBorder(birthdate);
    return false;
  }
  goodBorder(birthdate);
  addInvisible(birthdate);
  return true;
}

//Fonction de validation du nombre de tournois
function checkQuantity() {
  const quantityValue = quantity.value;
  if (quantityValue === "" || quantityValue > 99) {
    removeInvisible(quantity);
    badBorder(quantity);
    return false;
  }
  goodBorder(quantity);
  addInvisible(quantity);
  return true;
}

//Fonction de validation location
function checkLocation() {
  const checkedCityValue = document.querySelectorAll(".checkedCity:checked");
  if (checkedCityValue.length === 0) {
    document.getElementById("errorCity").classList.remove("invisible");
    return false;
  }
  document.getElementById("errorCity").classList.add("invisible");
  return true;
}

//Fonction de validation checkbox
function checkCheckbox() {
  if (checkbox.checked === false) {
    removeInvisible(checkbox);
    badBorder(checkbox);
    return false;
  }
  goodBorder(checkbox);
  addInvisible(checkbox);
  return true;
}

// //Fonction de validation du formulaire
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (
//     checkPrenom() &&
//     checkNom() &&
//     checkEmail() &&
//     checkBirthdate() &&
//     checkQuantity() &&
//     checkLocation() &&
//     checkCheckbox()
//   ) {
//     modalbg.style.display = "none";
//     console.log("Bravo vous avez rempli le formulaire");
//   } else {
//     console.log("Erreur! Veuillez remplir le formulaire correctement");
//   }
// });

//Fonctions de contrôle avant validation du formulaire
function validForm() {
  checkPrenom();
  checkNom();
  checkEmail();
  checkBirthdate();
  checkQuantity();
  checkLocation();
}
