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

// Dedicated functions to check the form validity

/** Check if the first name lenght is equal or upper than 2 and return a boolean */
function checkFirstName() {
  const firstNameInput = document.getElementById('first').value;
  const $firstErrorMsg = document.querySelector(".firstErrorMsg");
  const isFirstNameValid = firstNameInput.length >= 2;

  if (isFirstNameValid) {
    $firstErrorMsg.classList.add('hidden');
  } else {
    $firstErrorMsg.classList.remove('hidden');
  }
  return isFirstNameValid;
}

/** Check if the last name lenght is equal or upper than 2 and return a boolean */
function checkLastName() {
  const lastNameInput = document.getElementById('last').value;
  const $lastErrorMsg = document.querySelector('.lastErrorMsg');
  const isLastNameValid = lastNameInput.length >= 2;

  if (isLastNameValid) {
    $lastErrorMsg.classList.add('hidden');
  } else {
    $lastErrorMsg.classList.remove('hidden');
  }
  return isLastNameValid;
}

/** Check if the email format is valid and match to the regex and return a boolean */
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

/** Check if the age is filled and return a boolean */
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

/** Check if the tournament count is filled and return a boolean */
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

/** Check if one radio button is checked and return a boolean */
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

/** Check if the user has checked the terms and conditions and return a boolean */
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

/** Arrow function for check if the form input are all valids */
const isFormValid = () => checkFirstName() && checkLastName() && checkEmail() && checkAge() && checkTournamentCount() && checkTournamentCity() && checkTermsAndConditions()


/**  Event Listeners for submit button */
$registrationForm.addEventListener('submit', function(event) {
  event.preventDefault()
// if all booleans are true
  if (isFormValid()) {
    // untoggle the modal
    modalDisplay('none');
    // call the notification toast to confirm
    showNotificationToast()
  } 
})

