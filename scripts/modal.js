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

// Fonctions dédiées aux vérifications

function checkFirstName() {
  const firstNameInput = document.getElementById('first').value;
  const $firstErrorMsg = document.querySelector(".firstErrorMsg");
  const isFirstNameValid = firstNameInput.length > 2;

  if (isFirstNameValid) {
    $firstErrorMsg.classList.add('hidden');
  } else {
    $firstErrorMsg.classList.remove('hidden');
  }
  return isFirstNameValid;
}

function checkLastName() {
  const lastNameInput = document.getElementById('last').value;
  const $lastErrorMsg = document.querySelector('.lastErrorMsg');
  const isLastNameValid = lastNameInput.length > 2;

  if (isLastNameValid) {
    $lastErrorMsg.classList.add('hidden');
  } else {
    $lastErrorMsg.classList.remove('hidden');
  }
  return isLastNameValid;
}

function checkEmail() {
  const emailInput = document.getElementById('email').value;
  const regExMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const $emailErrorMsg = document.querySelector('.emailErrorMsg');
  const isEmailValid = regExMail.test(emailInput)

  if (isEmailValid) {
    $emailErrorMsg.classList.add('hidden')
  } else {
    $emailErrorMsg.classList.remove('hidden')
  }
  return isEmailValid
}

function checkAge() {
  const ageInput = document.getElementById('birthdate').value;
  const $ageErrorMsg =  document.querySelector('.ageErrorMsg');
  const isAgeValid = ageInput.length > 0;

  if (isAgeValid) {
    $ageErrorMsg.classList.add('hidden');
  } else {
    $ageErrorMsg.classList.remove('hidden')
  }
  return isAgeValid
}

function checkTournamentCount() {
  const tournamentInput = document.getElementById('quantity').value;
  const $tournamentErrorMsg = document.querySelector('.tournamentErrorMsg');
  const isTournamentNumberIsValid = tournamentInput.length > 0;

  if (isTournamentNumberIsValid) {
    $tournamentErrorMsg.classList.add('hidden');
  } else {
    $tournamentErrorMsg.classList.remove('hidden')
  }
  return isTournamentNumberIsValid
}

function checkTournamentCity() {
  const cityRadios = document.getElementsById('city-radios');
  const $tournamentCityErrorMsg = document.querySelector('.tournamentCityErrorMsg');
  const isTournamentCityIsValid = cityRadios.checked;

  if (isTournamentCityIsValid) {
    $tournamentCityErrorMsg.classList.add('hidden')
  } else {
    $tournamentCityErrorMsg.classList.remove('hidden')
  }
  return isTournamentCityIsValid
}

function checkTerms() {
  //
}



const isFormValid = () => checkFirstName() && checkLastName() && checkEmail() && checkAge() && checkTournamentCount() && checkTournamentCity()


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


