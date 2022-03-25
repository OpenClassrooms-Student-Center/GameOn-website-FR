function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Les elements DOM
 *
 *
 */
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn"); // bouton j'imscrit
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

/* Les elements DOM
 *@param{span} closeform - Le span qui va fermer la croix de la fenetre du formulaire
 *
 */
document.getElementById("closeform").addEventListener("click", function () {
  modalbg.style.display = "none";
});

/* Les elements DOM
 *@param{bouton} button-thank - Le bouton qui va fermer "thanks" via "fermer"
 *
 */
document.querySelector(".button-thank").addEventListener("click", function () {
  thankBg.style.display = "none";
  modalbg.style.display = "none";
  document.getElementById("reserve").reset();
});

//add validate on clinck for checkbox2, condition
document.querySelector("#checkbox1").addEventListener("change", function () {
  caseErrorMsg();
});

// fermer thanks via croix
document.getElementById("closethanks").addEventListener("click", function () {
  thankBg.style.display = "none";
  modalbg.style.display = "none";
});

// La fonction dedié pour la validation de la form
function validate() {
  let valid = true;
  valid = valid & checkFirstName();
  valid = valid & checklastName();
  valid = valid & checkemailValid();
  valid = valid & checkbirthValid();
  valid = valid & checkquantityTournaments();
  valid = valid & checkBoxCity();
  valid = valid & caseErrorMsg();
  if (valid) {
    modalbg.style.display = "none";
    thankBg.style.display = "block";
    addFirstNameModal();
  }
  return false;
}

/**  La verification et validation du Prenom  FirstName , la longeur min 2 caracteres, sans caracteres speciaux, les accents accepteés, la fonction return un boolean */
function checkFirstName() {
  const firstName = document.getElementById("first");
  const firstErrorMsg = document.querySelector(".firstErrorMsg");
  const regPatern = /^[[A-Za-z\é\è\ê\ç\ë\à\-]{2,20}$/g;
  const isFirstNameValid = regPatern.test(firstName.value);

  if (isFirstNameValid) {
    firstErrorMsg.classList.add("hidden");
    firstName.setCustomValidity("");
  } else {
    firstErrorMsg.classList.remove("hidden");
    //la transformation in input invalid, pour activer les styles du css, qui va colorer le background du input
    firstName.setCustomValidity("Invalid field.");
  }
  return isFirstNameValid;
}

/**Check lastName */
function checklastName() {
  let lastName = document.getElementById("last");
  const lastErrorMsg = document.querySelector(".lastErrorMsg");
  const regPatern = /^[[A-Za-z\é\è\ê\ç\ë\à\-]{2,20}$/g;
  let isLastNameValid = regPatern.test(lastName.value);

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
    cityRadiosErrorMsg.classList.add("hidden");
    return true;
  } else {
    //ajoute le message d'erreur
    cityRadiosErrorMsg.classList.remove("hidden");
    return false;
  }
}

/**Check RadioCity */
function caseErrorMsg() {
  let selectedCase = document.querySelector("input[name=condition]");
  const radiosErrorMsg = document.querySelector(".errorMsg");

  if (selectedCase.checked) {
    radiosErrorMsg.classList.add("hidden");
    selectedCase.setCustomValidity("");
    return true;
  } else {
    selectedCase.setCustomValidity("Invalid field.");
    radiosErrorMsg.classList.remove("hidden");
    return false;
  }
}

/** Ajouter le prenom et email a la modale de remerciement */
function addFirstNameModal() {
  let firstName = document.getElementById("first");
  let text = document.getElementById("firstNameMerci");
  text.innerText = firstName.value;
}
