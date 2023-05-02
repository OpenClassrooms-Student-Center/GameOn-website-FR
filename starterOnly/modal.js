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
const successMessage = document.querySelector(".content .success_text");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}

// ##################################################################################################
// ##################################################################################################
// ISSUE #1: fermer la modale (ajouter la fonctionnalité au bouton x)
// ##################################################################################################

function hideModal() {
  modalbg.style.display = "none";

  let allInputs = document.querySelectorAll("input:not(input[type=submit])");
  allInputs.forEach((singleInput) => (singleInput.value = ""));
  
  let allErrors = document.querySelectorAll(".form-message");
  allErrors.forEach((singleError) => (singleError.innerText = ""));

  let allClassesInvalid = document.querySelectorAll(".invalid");
  allClassesInvalid.forEach((singleClassInvalid) => (singleClassInvalid.classList.remove("invalid")));

  // /TODO : DElete all reference to `.invalid` class + remove all error messages
}

let spanClose = document.querySelector(".close");
spanClose.addEventListener("click", (e) => {
  let target = e.target;
  if (target === spanClose) {
    hideModal();
  }
});


