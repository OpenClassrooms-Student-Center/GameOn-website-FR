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
const modalBtn = document.querySelectorAll(".modal-btn"); // bouton j'imscrit
const formData = document.querySelectorAll(".formData");
const formBtn = document.querySelector(".inscription");
const thankBtn = document.querySelectorAll(".thank-btn"); //bouton du modal merci "fermer"
const thankBg = document.querySelector(".bground-thank"); //modal merci
const registrationForm = document.querySelector(".registrationForm"); //validation

// launch modal event, je m'inscrit
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form (transform en block )
function launchModal() {
  modalbg.style.display = "block";
  thankBg.style.display = "none";
}

//fermer la croix de la fenetre du formulaire
document.getElementById("closeform").addEventListener("click", function () {
  modalbg.style.display = "none";
});

// fermer thanks via "fermer"
document.querySelector(".button-thank").addEventListener("click", function () {
  thankBg.style.display = "none";
  modalbg.style.display = "none";
});

// fermer thanks via croix
document.getElementById("closethanks").addEventListener("click", function () {
  thankBg.style.display = "none";
  modalbg.style.display = "none";
});

function validate() {
  let valid = true;
  valid = valid && checkFirstName();
  valid = valid && checklastName();
  if (valid) {
    modalbg.style.display = "none";
    thankBg.style.display = "block";
  }

  return false;
}
// Dedicated functions to check the form validity, validation de la form

/** Check if the first name lenght is equal or upper than 2 and return a boolean */
function checkFirstName() {
  const firstName = document.getElementById("first").value;
  const firstErrorMsg = document.querySelector(".firstErrorMsg");
  const isFirstNameValid = firstName.trim().length >= 2;

  if (isFirstNameValid) {
    firstErrorMsg.classList.add("hidden");
  } else {
    firstErrorMsg.classList.remove("hidden");
  }
  return isFirstNameValid;
}

/**Check lastName */
function checklastName() {
  let lastName = document.getElementById("last").value;
  const lastErrorMsg = document.querySelector(".lastErrorMsg");
  const isLastNameValid = lastName.trim().length >= 2;

  if (isLastNameValid) {
    lastErrorMsg.classList.add("hidden");
  } else {
    lastErrorMsg.classList.remove("hidden");
  }
  return isLastNameValid;
}

/**Check email */
function checkemailValid() {
  let emailValid = document.getElementById("email").value;
  let regExMail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let $emailErrorMsg = document.querySelector(".emailErrorMsg");
  let isEmailValid = regExMail.test(emailValid);

  if (isEmailValid) {
    emailErrorMsg.classList.add("hidden");
  } else {
    emailErrorMsg.classList.remove("hidden");
  }
  return isEmailValid;
}

/**Check birthday */
function checkbirthValid() {
  let birthValid = document.getElementById("birthdate").value;
  //var dateControl = document.querySelector('input[type="datetime-local"');
  // calculez data inferiuoara de ziua de azi
  const regExAge = /(19\d\d|20[0-3])(-\d\d){2}/;
  const ageErrorMsg = document.querySelector(".ageErrorMsg");
  const isDateValid = regExAge.test(birthValid);

  if (isDateValid) {
    ageErrorMsg.classList.add("hidden");
  } else {
    ageErrorMsg.classList.remove("hidden");
  }
  return isDateValid;
}

/**Check quantityCity */
function checkquantityTournaments() {
  let quantityTournaments = document.getElementById("quantity").value;
  const tournamentErrorMsg = document.querySelector(".tournamentErrorMsg");
  const isTournamentNumberIsValid = quantityTournaments.length > 0;

  if (isTournamentNumberIsValid) {
    tournamentErrorMsg.classList.add("hidden");
  } else {
    tournamentErrorMsg.classList.remove("hidden");
  }
  return isTournamentNumberIsValid;
}

/**Check RadioCity */
function checkBoxCity() {
  const cityRadios = document.querySelectorAll("#city-radios .checkbox-input");
  const CityRadiosErrorMsg = document.querySelector(".CityRadiosErrorMsg");
  let isCityRadiosNumberValid = false;

  for (let i = 0; i < $cityRadios.length; i++) {
    if (cityRadios[i].checked) {
      CityRadiosErrorMsg.classList.add("hidden");
      isCityRadiosNumberValid = true;
      break;
    } else {
      CityRadiosErrorMsg.classList.remove("hidden");
    }
  }
  return isCityRadiosNumberValid;
}
