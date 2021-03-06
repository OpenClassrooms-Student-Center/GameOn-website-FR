// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modal = document.getElementById('modal');
const $registrationForm = document.querySelector('.registration-form');


// Fonction pour ouvrir et fermer la modal
function modalDisplay(displayStyle) {
  modal.style.display = displayStyle 
}

// Fonctions dédiées aux vérifications

/* @function checkFirstName - Check if the first name lenght is upper than 2 and return a boolean
*
*  @const {value} firstNameInput - Return a value of an input
*  @const {string} firstErrorMsg - Change add or remove css propertie
*  @const {boolean} isFirstNameValid - Return true if the value is > 2
*  @param {string} - If the boolean is true add a propertie to the string, if its false remove
*  @return {boolean} - Return a boolean 
*/
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
  const cityRadios = document.querySelectorAll('#city-radios .checkbox-input');
  const $tournamentCityErrorMsg = document.querySelector('.tournamentCityErrorMsg');
  const isTournamentCityNumberIsValid = cityRadios;

  for (let i = 0; i < cityRadios.length; i++) {
    if (cityRadios[i].checked) {
      $tournamentCityErrorMsg.classList.add('hidden');
      break
    } else {
      $tournamentCityErrorMsg.classList.remove('hidden');
    }
  }
  return isTournamentCityNumberIsValid
}

function checkTermsAndConditions() {
  const terms = document.querySelector('#acceptConditions')
  const $termsCheckMsg = document.querySelector('.termsCheckMsg');
  const termsAreChecked = terms.checked;

  if (termsAreChecked) {
    $termsCheckMsg.classList.add('hidden');
  } else {
    $termsCheckMsg.classList.remove('hidden');
  }
  return termsAreChecked
}

// Arrow function for check if the form input are all valids
const isFormValid = () => checkFirstName() && checkLastName() && checkEmail() && checkAge() && checkTournamentCount() && checkTournamentCity() && checkTermsAndConditions()


// Event Listeners
$registrationForm.addEventListener('submit', function(event) {
  event.preventDefault()

  if (isFormValid()) {
    modalDisplay('none')
  } else {

  }

})

