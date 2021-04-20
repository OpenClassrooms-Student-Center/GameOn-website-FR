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
const modalBody = document.querySelector('.modal-body');
const registred = document.querySelector('.registred');
const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const signUpBtn = document.querySelector("#btn-signup");
const closeBtnRed = document.querySelector("#closeBtnRed");

const currentDate = Date.now();
const oneYear = 31557600000; // 365.25 jours * 24 heures * 60 min * 60 secondes * 1000 milisecondes
const maxDate = currentDate - (oneYear * 120); // age maxi 120 ans
const minDate = currentDate - (oneYear * 10); // age mini 10 ans

let nameOk = /^[A-Z][a-zàçéèëêîï]+(['\-\s][A-Z][a-zàçéèëêîï])?$/;
let emailOk = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
let inputsOk = true;


// add event listeners
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);
signUpBtn.addEventListener("submit", validate);
closeBtnRed.addEventListener("click", closeModal);

// launch modal form
function launchModal(event) {
  form.reset();
  registred.style.display = "none";
  modalbg.style.display = "block";
  modalBody.style.display = "block";
}

// close modal mode
function closeModal(event) {
  modalbg.style.display = "none";
}

// function validate called at form submit event
function validate() {
  inputsOk = true;
  checkInputs();
  if (inputsOk == true) {
    modalBody.style.display = "none";
    registred.style.display = "block";
  }
  return false;
}

// checks the inputs and switch var inputsOk to false if not OK
function checkInputs() {
  let first = document.getElementById("first");
  let last = document.getElementById("last");
  let email = document.getElementById("email");
  let birthDate = document.getElementById("birthdate");
  let quantity = document.getElementById("quantity");
  let location = document.getElementsByName("location");
  let checkbox1 = document.getElementById("checkbox1");
  let birthInput = Date.parse(birthDate.value);

  if (!nameOk.test(first.value)) {
    formData[0].dataset.error = "Majuscule initiale puis lettres, espace, apostrophe et tiret sont valides";
    formData[0].dataset.errorVisible = "true";
    inputsOk = false;
  } else {
    formData[0].dataset.error = "";
    formData[0].dataset.errorVisible = "false";
  }

  if (nameOk.test(last.value) == false) {
    formData[1].dataset.error = "Majuscule initiale puis lettres, espace, apostrophe et tiret sont valides";
    formData[1].dataset.errorVisible = "true";
    inputsOk = false;
  } else {
    formData[1].dataset.error = "";
    formData[1].dataset.errorVisible = "false";
  }

  if (emailOk.test(email.value) == false) {
    formData[2].dataset.error = "Veuillez renseigner une adresse mail correcte";
    formData[2].dataset.errorVisible = "true";
    inputsOk = false;
  } else {
    formData[2].dataset.error = "";
    formData[2].dataset.errorVisible = "false";
  }

  if (birthInput > minDate) {
    formData[3].dataset.error = "Vous êtes trop jeune ! (min 10 ans)";
    formData[3].dataset.errorVisible = "true";
    inputsOk = false;
  } else if (birthInput < maxDate) {
    formData[3].dataset.error = "L'âge maximum vraisemblable est de 120 ans !";
    formData[3].dataset.errorVisible = "true";
    inputsOk = false;
  }

  // in case of FIRST registration, no location is required
  if (quantity.value == "" || quantity.value == NaN || quantity.value == 0) {
    quantity.value = 0;
    for (let i = 0; i < 6; i++) {
      location[i] = false;
      location[i].setAttribute.disable = "true";
    }
  } else {
    if (quantity.value > 99) {
      formData[4].dataset.error = "Nombre d'évènements acceptés : de 0 à 99.";
      formData[4].dataset.errorVisible = "true";
      inputsOk = false;
    } else {
      formData[4].dataset.error = "";
      formData[4].dataset.errorVisible = "false";
      for (let i = 0; i < 6; i++) {
        location[i].setAttribute.disable = "false";
      }
    }
  }

  if (quantity.value > 0) {
    if (!(location[0].checked ||
        location[1].checked ||
        location[2].checked ||
        location[3].checked ||
        location[4].checked ||
        location[5].checked)) {
      formData[5].dataset.error = "Veuillez sélectionner au moins un lieu.";
      formData[5].dataset.errorVisible = "true";
      inputsOk = false;
    } else {
      formData[5].dataset.error = "";
      formData[5].dataset.errorVisible = "false";
    }
  }

  if (!checkbox1.checked) {
    formData[6].dataset.error = "Veuillez lire et accepter nos termes et conditions SVP.";
    formData[6].dataset.errorVisible = "true";
    inputsOk = false;
  } else {
    formData[6].dataset.error = "";
    formData[6].dataset.errorVisible = "false";
  }
}