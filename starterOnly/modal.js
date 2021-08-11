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
const closeModalBtn = document.querySelectorAll("#close");

// VARIABLES
let myForm = document.getElementById("myForm");
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let tournoiNumber = document.getElementById("quantity");
let locationUn = document.getElementById("location1");
let locationDeux = document.getElementById("location2");
let locationTrois = document.getElementById("location3");
let locationQuatre = document.getElementById("location4");
let locationCinq = document.getElementById("location5");
let locationSix = document.getElementById("location6");
let checkCondition = document.getElementById("checkbox1");
let msgConfirm = document.getElementById("message-confirm");

// My FUNCTIONS
// When sending the form we check that checkInputs return true
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  if (checkInputs() == true) {
    msgConfirm.style.display = "block";
    messageValid();
  } else {
    return false;
  }
});

function checkInputs() {
  // Conditions if FIRSTNAME
  let firstError = document.getElementById("first_error");
  if (firstName.value == "" || firstName.value.length < 2) {
    firstError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champs du prénom.";
    firstError.style.color = "Red";
    firstError.style.fontSize = "20px";
    return false;
  } else {
    firstError.innerHTML = "";
  }

  // Conditions if LASTNAME
  let lastError = document.getElementById("last_error");
  if (lastName.value == "" || lastName.value.length < 2) {
    lastError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champs du nom.";
    lastError.style.color = "red";
    lastError.style.fontSize = "20px";
    return false;
  } else {
    lastError.innerHTML = "";
  }

  // Conditions if EMAIL
  let emailError = document.getElementById("email_error");
  let myRegex =
    /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  if (!myRegex.test(email.value) || email.Value == "") {
    emailError.innerHTML = "Veuillez rentrer une adresse mail valide.";
    emailError.style.color = "red";
    emailError.style.fontSize = "20px";
    return false;
  } else {
    emailError.innerHTML = "";
  }

  //Conditions if BIRTHDATE
  let birthdate = document.getElementById("birthdate");
  let birthdateError = document.getElementById("birthdate_error");
  let regex = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
  if (!regex.test(birthdate.value)) {
    birthdateError.innerHTML = "Vous devez entrer votre date de naissance.";
    birthdateError.style.color = "red";
    birthdateError.style.fontSize = "20px";
    return false;
  } else {
    birthdateError.innerHTML = "";
  }

  // Conditions if TOURNOI
  let numberError = document.getElementById("tournoi_error");
  if (tournoiNumber.value == "" || isNaN(tournoiNumber.value)) {
    numberError.innerHTML = "Veuillez rentrer au moins un chiffre";
    numberError.style.color = "red";
    numberError.style.fontSize = "20px";
    return false;
  } else {
    numberError.innerHTML = "";
  }

  // Conditions if CHECKBOX
  let locationError = document.getElementById("location_error");
  if (
    locationUn.checked ||
    locationDeux.checked ||
    locationTrois.checked ||
    locationQuatre.checked ||
    locationCinq.checked ||
    locationSix.checked
  ) {
    locationError.innerHTML = "";
  } else {
    locationError.innerHTML = "Vous devez choisir une option.";
    locationError.style.color = "red";
    locationError.style.fontSize = "20px";
    return false;
  }

  // Conditions if REGLEMENT
  let conditionError = document.getElementById("condition_error");
  if (!checkCondition.checked) {
    conditionError.innerHTML =
      "Vous devez verifier que vous acceptez les termes et conditions.";
    conditionError.style.color = "red";
    conditionError.style.fontSize = "20px";
    return false;
  } else {
    conditionError.innerHTML = "";
  }
  return true;
}

function messageValid() {
  // When clicking on the button, the validation message disappears + send form
  let cliqueOk = document.getElementById("validate");
  cliqueOk.addEventListener("click", () => {
    msgConfirm.style.display = "none";
    myForm.submit();
  });
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close modal event
closeModalBtn.forEach((elt) => {
  elt.addEventListener("click", closeModal);
});

//Close modal form
function closeModal() {
  modalbg.style.display = "none";
}
