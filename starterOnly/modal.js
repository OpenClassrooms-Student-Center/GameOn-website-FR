/***********************************************
************ VARIABLES / CONSTANTS ***********
***********************************************/

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const form = document.getElementById("form");

// PATTERN validation
const namePattern = /^([A-Za-zÀ-ÿ][-,a-z. ']+[ ]*)+$/;
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/***********************************************
******************** EVENTS ********************
***********************************************/

// click : launch modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// click : close modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// change : first name input
form.first.addEventListener("change", function() {
  validFirstName(this);
});

// change : last name input
form.last.addEventListener("change", function() {
  validLastName(this);
});

// change : email input
form.email.addEventListener("change", function () {
  validEmail(this);
});

// change : birthdate input
form.birthdate.addEventListener("change", function () {
  validBirthdate(this);
});

// change : quantity input
form.quantity.addEventListener("change", function () {
  validQuantity(this);
});

// change : cgu input
form.cgu.addEventListener("change", function () {
  validCgu(this);
});

/***********************************************
****************** FUNCTIONS *******************
***********************************************/

// Navbar
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal() {
  modalbg.style.display = "none";
}

// ********* form inputs validation *********

// valid first name
const validFirstName = function (first) {
  if (first.value.trim().length < 2) {
    setErrorFor(first, "Veuillez entrer 2 caractères ou plus pour le champ du Prénom");
    return false;
  } 
  if (!namePattern.test(first.value.trim())) {
    setErrorFor(first, "Votre Prénom n'est pas valide");
    return false;
  }
  else {
    first.value = first.value.trim();
    removeErrorFor(first);
    return true;
  }
};

// valid last name
const validLastName = function (last) {
  if (last.value.trim().length < 2) {
    setErrorFor(last, "Veuillez entrer 2 caractères ou plus pour le champ du Nom");
    return false;
  } 
  if (!namePattern.test(last.value.trim())) {
    setErrorFor(last, "Votre Nom n'est pas valide");
    return false;
  }
  else {
    last.value = last.value.trim();
    removeErrorFor(last);
    return true;
  }
};

// ********* comments management error/success *********

function setErrorFor(input, errorComment) {
  const formData = input.parentElement;
  formData.setAttribute("data-error-visible", "true");
  formData.setAttribute("data-error", errorComment);
}

function removeErrorFor(input) {
  const formData = input.parentElement;
  formData.removeAttribute("data-error-visible");
  formData.removeAttribute("data-error");
} 