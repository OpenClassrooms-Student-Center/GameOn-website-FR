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
  'input[type="text"], input[type="date"],input[type="number"]'
);

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
});

//-------------------------------------------------------------------
//Regex
//-------------------------------------------------------------------
let checkFirst = /^[a-zA-Z-]*$/;
let checkLast = /^[a-zA-Z-]*$/;
let checkMail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let checkBirthdate =
  /^\s+(?:0[1-9]|[12][0-9]|3[01])[-/.](?:0[1-9]|1[012])[-/.](?:19\d{2}|20[01][0-9]|2020)\b$/;
let checkQuantity = /^[0-9]*$/;
//-------------------------------------------------------------------
//Functions Form  first,last, email, date, quantity, radio, checkbox
//-------------------------------------------------------------------
function validateFirst() {
  let first = form.elements["first"]; // je viens chercher l'id
  let error = document.getElementById("errorFirst");
  if (checkFirst.test(first.value) === false || first.value.length <= 2) {
    first.classList.add("input-error");
    first.classList.remove("input-validate");
    error.innerText =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom, sans caractères spéciaux.";
    return false;
  } else {
    first.classList.remove("input-error");
    first.classList.add("input-validate");
    error.innerText = "";
    return true;
  }
}

function validateLast() {
  let last = form.elements["last"]; // je viens chercher l'id dans le form
  let error = document.getElementById("errorLast");
  if (checkLast.test(last.value) === false || last.value.length <= 2) {
    last.classList.add("input-error");
    last.classList.remove("input-validate");
    error.innerText =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom. ";
    return false;
  } else {
    last.classList.remove("input-error");
    last.classList.add("input-validate");
    error.innerText = "";

    return true;
  }
}

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
function validateBirthdate() {
  let birthdate = form.elements["birthdate"];
  let error = document.getElementById("errorBirthdate");
  if (birthdate.value === "") {
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

function validateQuantity() {
  let quantity = form.elements["quantity"]; // je viens chercher l'id
  let error = document.getElementById("errorQuantity");
  if (checkQuantity.test(quantity.value) === false || quantity.value === "") {
    quantity.classList.add("input-error");
    quantity.classList.remove("input-validate");
    error.innerText =
      "Veuillez indiquer le nombre de tournois auquels vous avez participé";
    return false;
  } else {
    quantity.classList.remove("input-error");
    quantity.classList.add("input-validate");
    error.innerText = "";
    return true;
  }
}
//-------------------------------------------------------------------
// Pour recupérer la value de chaque inputs
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
