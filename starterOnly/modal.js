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
const closeModal = document.querySelector("#close");
const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="number"],input[type="date"],input[type="radio"] ,input[type="checkbox"]'
); // Pour selectionner les inputs

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close Modal event
closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
});

//-------------------------------------------------------------------
//validation form
//-------------------------------------------------------------------
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateFirst() === false) {
    return false;
  } else if (validateLast() === false) {
    return false;
  } else if (validateEmail() === false) {
    return false;
  } else if (validateBirthdate() === false) {
    return false;
  } else if (validateQuantity() === false) {
    return false;
  } else if (validateCities() === false) {
    return false;
  } else if (validateCheckbox() === false) {
    return false;
  } else {
    form.remove();
    let validate = document.querySelector(".modal-body");
    let message = document.querySelector("p");
    message.classList.add("validationText");
    message.textContent = "Merci! Votre reservation a été reçue";
    validate.appendChild(message);
    let btnCloseValidation = document.createElement("button");
    btnCloseValidation.classList.add("btn-submit");
    btnCloseValidation.textContent = "Fermer";
    btnCloseValidation.addEventListener("click", () => {
      modalbg.style.display = "none";
    }); // pour fermer le bouton
    validate.appendChild(btnCloseValidation);
  }
});

//-------------------------------------------------------------------
//Regex
//-------------------------------------------------------------------
let checkFirst = /^[a-zA-Z-]*$/;
let checkLast = /^[a-zA-Z-]*$/;
let checkMail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let checkDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
let checkQuantity = /^[0-9]*$/;
//-------------------------------------------------------------------
//Functions Form  first,last, email, date, quantity, radio, checkbox
//-------------------------------------------------------------------

// Fonction prénom

function validateFirst() {
  let first = form.elements["first"]; // je viens chercher l'id
  let error = document.getElementById("errorFirst");
  if (checkFirst.test(first.value) === false || first.value.length <= 1) {
    first.classList.add("input-error");
    first.classList.remove("input-validate");
    error.innerText = "Veuillez entrer 2 caractères pour le prénom.";
    return false;
  } else {
    first.classList.remove("input-error");
    first.classList.add("input-validate");
    error.innerText = "";
    return true;
  }
}

//Fonction nom

function validateLast() {
  let last = form.elements["last"]; // je viens chercher l'id dans le form
  let error = document.getElementById("errorLast");
  if (checkLast.test(last.value) === false || last.value.length <= 1) {
    last.classList.add("input-error");
    last.classList.remove("input-validate");
    error.innerText = "Veuillez entrer 2 caractères pour le nom. ";
    return false;
  } else {
    last.classList.remove("input-error");
    last.classList.add("input-validate");
    error.innerText = "";

    return true;
  }
}

//Fonction Email

function validateEmail() {
  let email = form.elements["email"]; // je viens chercher l'id
  let error = document.getElementById("errorMail");
  if (checkMail.test(email.value) === false) {
    email.classList.add("input-error");
    email.classList.remove("input-validate");
    error.innerText = "Veuillez saisir un email valide";
    return false;
  } else {
    email.classList.remove("input-error");
    email.classList.add("input-validate");
    error.innerText = "";

    return true;
  }
}

//Fonction Date de Naissance

function validateBirthdate() {
  let birthdate = form.elements["birthdate"];
  let error = document.getElementById("errorBirthdate");
  if (
    checkDate.test(birthdate.value) === false ||
    checkDate.test(birthdate.value) === 0
  ) {
    birthdate.classList.add("input-error");
    birthdate.classList.remove("input-validate");
    error.innerText = "Veuillez saisir votre date de naissance";
    return false;
  } else {
    birthdate.classList.remove("input-error");
    birthdate.classList.add("input-validate");
    error.innerText = "";
    return true;
  }
}

//fonction quantité de tournois participés

function validateQuantity() {
  let quantity = form.elements["quantity"]; // je viens chercher l'id
  let error = document.getElementById("errorQuantity");
  if (checkQuantity.test(quantity.value) === false || quantity.value === "") {
    quantity.classList.add("input-error");
    quantity.classList.remove("input-validate");
    error.innerText =
      "Veuillez indiquer le nombre de tournois auxquels vous avez participé";
    return false;
  } else {
    quantity.classList.remove("input-error");
    quantity.classList.add("input-validate");
    error.innerText = "";
    return true;
  }
}

//Fonction boutons Radio

function validateCities() {
  let cities = form.elements["location"];
  let error = document.getElementById("errorRadio");
  let valid = false;
  for (
    let i = 0;
    i < cities.length;
    i++ //boucle pour verifier si une ville est selectionnée
  )
    if (cities[i].checked) {
      valid = true;
      break;
    }

  if (!valid) {
    error.innerText = "Veuillez selctionner une ville";
    return false;
  } else {
    error.innerText = "";
    return true;
  }
}

//Fonction checkbox cgu

function validateCheckbox() {
  let checkbox = form.elements["checkbox1"];
  let error = document.getElementById("errorCheckbox");

  if (!checkbox.checked) {
    error.innerText = "Veuillez accepter les conditions d'utilisation";
    return false;
  } else {
    error.innerText = "";
    return true;
  }
}

//-------------------------------------------------------------------
// boucle pour recupérer la value de chaque inputs
//-------------------------------------------------------------------
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "first":
        validateFirst(e.target.value);
        break;
      case "last":
        validateLast(e.target.value);
        break;
      case "email":
        validateEmail(e.target.value);
        break;
      case "birthdate":
        validateBirthdate(e.target.value);
        break;
      case "quantity":
        validateQuantity(e.target.value);
        break;
      default:
        null;
    }
  });
});
