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

// Dedicated functions to check the form validity, validation de la form
function validate() {
  let valid = true;
  valid = valid && checkFirstName();
  valid = valid && checklastName();
  valid = valid && checkemailValid();
  valid = valid && checkbirthValid();
  valid = valid && checkquantityTournaments();
  valid = valid && checkBoxCity();
  if (valid) {
    modalbg.style.display = "none";
    thankBg.style.display = "block";
  }
  return false;
}

/** Check if the first name lenght is equal or upper than 2 and return a boolean */
function checkFirstName() {
  const firstName = document.getElementById("first");
  const firstErrorMsg = document.querySelector(".firstErrorMsg");
  const isFirstNameValid = firstName.value.trim().length >= 2;

  if (isFirstNameValid) {
    firstErrorMsg.classList.add("hidden");
    firstName.setCustomValidity("");
  } else {
    firstErrorMsg.classList.remove("hidden");
    firstName.setCustomValidity("Invalid field."); //transform in the invalid input, for css
  }
  return isFirstNameValid;
}

/**Check lastName */
function checklastName() {
  let lastName = document.getElementById("last");
  const lastErrorMsg = document.querySelector(".lastErrorMsg");
  const isLastNameValid = lastName.value.trim().length >= 2;

  if (isLastNameValid) {
    lastErrorMsg.classList.add("hidden");
    lastName.setCustomValidity("");
  } else {
    lastErrorMsg.classList.remove("hidden");
    lastName.setCustomValidity("Invalid field.");
  }
  return isLastNameValid;
}

/**Check email */
function checkemailValid() {
  let emailValid = document.getElementById("email");
  let regExMail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailErrorMsg = document.querySelector(".emailErrorMsg");
  let isEmailValid = regExMail.test(emailValid.value);

  if (isEmailValid) {
    emailErrorMsg.classList.add("hidden");
    emailValid.setCustomValidity("");
  } else {
    emailErrorMsg.classList.remove("hidden");
    emailValid.setCustomValidity("Invalid field.");
  }
  return isEmailValid;
}

/**Check birthday */
function checkbirthValid() {
  let birthValid = document.getElementById("birthdate");
  let validDate = Date.parse(birthValid.value);
  let isDateValid = validDate < Date.now();
  const ageErrorMsg = document.querySelector(".ageErrorMsg");
  if (isDateValid) {
    ageErrorMsg.classList.add("hidden");
    birthValid.setCustomValidity("");
  } else {
    ageErrorMsg.classList.remove("hidden");
    birthValid.setCustomValidity("Invalid field.");
  }
  return isDateValid;
}

/**Check quantityCity */
function checkquantityTournaments() {
  let quantityTournaments = document.getElementById("quantity");
  const tournamentErrorMsg = document.querySelector(".tournamentErrorMsg");
  const isTournamentNumberIsValid = quantityTournaments.value.length > 0;

  if (isTournamentNumberIsValid) {
    tournamentErrorMsg.classList.add("hidden");
    quantityTournaments.setCustomValidity("");
  } else {
    tournamentErrorMsg.classList.remove("hidden");
    quantityTournaments.setCustomValidity("Invalid field.");
  }
  return isTournamentNumberIsValid;
}

/**Check RadioCity */
function checkBoxCity() {
  //récupére tous les boutons radios en fonction de leur attribut name, qui est identique
  let selectedCheckbox = document.querySelector("input[name=location]:checked");
  const cityRadiosErrorMsg = document.querySelector(".CityRadiosErrorMsg");

  if (selectedCheckbox != null) {
    return true;
  } else {
    //ajoute le message d'erreur
    cityRadiosErrorMsg.classList.remove("hidden");
    return false;
  }
}
