// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modal = document.getElementById('modal');
const $registrationForm = document.querySelector('.registration-form');


// Functions
//  -> dédié à l'affichage

// Fonction pour ouvrir et fermer la modal
function modalDisplay(displayStyle) {
  modal.style.display = displayStyle 
}

//  -> dédié aux vérifications
function checkFirstName() {
  const firstNameInput = document.getElementById('first').value;
  const $firstErrorMsg = document.querySelector("#firstErrorMsg");
  const isFirstNameValid = firstNameInput.length < 2;

  if (isFirstNameValid) {
    $firstErrorMsg.style.display = "block";
  } else {
    $firstErrorMsg.style.display = "none";
  }
  return isFirstNameValid;
}

function checkLastName() {
  const lastNameInput = document.getElementById('last').value;
  const $lastErrorMsg = document.querySelector('#lastErrorMsg');
  const isLastNameValid = lastNameInput.length < 2;

  if (isLastNameValid) {
    $lastErrorMsg.style.display = "block";
  } else {
    $lastErrorMsg.style.display = "none";
  }
  return isLastNameValid;
}

function checkEmail() {
  const emailInput = document.getElementById('email').value;
  const emailFormat = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;";
  const $emailErrorMsg = document.querySelector('#emailErrorMsg');
  let isEmailValid = true;
  console.log(emailFormat);

  if (emailInput.value.match(emailFormat)) {
    let isEmailValid = false;
    $emailErrorMsg.style.display = "block";

  } else {
    $emailErrorMsg.style.display = "none";
    let isEmailValid = true;
  }
  return 
}


function isFormValid() {
  checkFirstName();
  checkLastName();
  checkEmail();
}


// Event Listeners
$registrationForm.addEventListener('submit', function(event) {
  event.preventDefault()

  if (isFormValid()) {
    console.log("=====")
    console.log("tu peux passer à l'étape d'après")
    console.log("=====")
  } else {
    console.log("=====")
    console.log("C'est pété, il y a un truc pas clair dans le formulaire")
    console.log("=====")
  }

})

/**
 * querySelector -> ça retourne un élément de type noeud
 * querySelectorAll -> ça retourne un tableau (de noeuds ?)
 */


// À l'événement submit, déclenche la fonction à sa droite


