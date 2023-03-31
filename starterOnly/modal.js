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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// list of regex
// Firstname
const regexFirst = new RegExp("^.+\\S{2,}$");

// Lastname
const regexLast = new RegExp("^.+\\S{2,}$");

// email
const regexEmail = new RegExp("^\\S+@\\S+\\.\\S+$");

// Number of competitions
const regexNumberCompetitions = new RegExp("^[0-9]+$");

// declaration of the variables containing the value of the inputs
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const numberCompetitions = document.getElementById("quantity");
const townTournament = document.querySelectorAll('input[type="radio"]');
const townTournamentId = document.getElementById('location1');
const checkBoxUse = document.getElementById("checkbox1");
const form = document.querySelector("form");

// declaration of variables to validate each entry
let isFirstValid = false;
let isLastValid = false;
let isEmailValid = false;
let isBirthdateValid = false;
let isNumberCompetitionsValid = false;
let whatTownChecked = false;
let useConditions = false;

// fist name entry test
first.addEventListener("input", function (event) {
  const text = event.target.value.trim();
  if (!regexFirst.test(text)) {
    first.parentElement.setAttribute('data-error-visible', 'true');
  } else {
    isFirstValid = true;
    first.parentElement.setAttribute('data-error-visible', 'false');
  }
});

// last name entry test
last.addEventListener("input", function (event) {
  const text = event.target.value.trim();
  if (!regexLast.test(text)) {
    last.parentElement.setAttribute('data-error-visible', 'true');
  } else {
    isLastValid = true;
    last.parentElement.setAttribute('data-error-visible', 'false');
  }
});

// email entry test
email.addEventListener("input", function (event) {
  const text = event.target.value.trim();
  if (!regexEmail.test(text)) {
    email.parentElement.setAttribute('data-error-visible', 'true');
  } else {
    isEmailValid = true;
    email.parentElement.setAttribute('data-error-visible', 'false');
  }
});

// Check that the anniversary date is valid
function checkDateValidity() {
  const birthdateInput = document.getElementById("birthdate");
  birthdateInput.addEventListener("input", function () {
    const dateString = birthdateInput.value;
    if (dateString !== "") {
      isBirthdateValid = true;
    }
  });
}
checkDateValidity();

// number of competitions entry test
numberCompetitions.addEventListener("input", function (event) {
  const text = event.target.value.trim();
  isNumberCompetitionsValid = regexNumberCompetitions.test(text);
});

// town radio which entry test tournament
townTournament.forEach(function (town) {
  town.addEventListener("click", function () {
    if (town.checked) {
      whatTownChecked = true;
    }
  });
});

// check that the box for compliance with the terms of use is checked
useConditions = checkBoxUse.checked;
checkBoxUse.addEventListener("click", function () {
  if (checkBoxUse.checked) {
    useConditions = true;
  }
  else {
    useConditions = false;
  }
});

// Check that each box is filled in correctly before validate
function validate() {
  return (
    isFirstValid &&
    isLastValid &&
    isEmailValid &&
    isBirthdateValid &&
    isNumberCompetitionsValid &&
    whatTownChecked &&
    useConditions
  );
}

// sending the form
function submitForm() {
  validateCase();
  var form = document.forms["reserve"];
  if (validate()) {
    form.submit();
  }
}

// Check the validity of radio, date and checkbox inputs
function validateCase() {
  const valuesToValidate = [isFirstValid, isLastValid, isEmailValid, isBirthdateValid, isNumberCompetitionsValid, whatTownChecked, useConditions];
  const elements = [first, last, email, birthdate, numberCompetitions, townTournamentId, checkBoxUse];
  
  for (let i = 0; i < valuesToValidate.length; i++) {
    if (!valuesToValidate[i]) {
      elements[i].parentElement.setAttribute('data-error-visible', 'true');
    } else {
      elements[i].parentElement.setAttribute('data-error-visible', 'false');
    }
  }
}
