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
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.forEach((span) => span.addEventListener("click", closeModal));

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
const numberCompetitions = document.getElementById("quantity");

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
  isFirstValid = regexFirst.test(text);
});

// last name entry test
last.addEventListener("input", function (event) {
  const text = event.target.value.trim();
  isLastValid = regexLast.test(text);
});

// email entry test
email.addEventListener("input", function (event) {
  const text = event.target.value.trim();
  isEmailValid = regexEmail.test(text);
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
const townTournament = document.querySelectorAll('input[type="radio"]');
townTournament.forEach(function (town) {
  town.addEventListener("click", function () {
    if (town.checked) {
      whatTownChecked = true;
    }
  });
});

// check that the box for compliance with the terms of use is checked
const checkBoxUse = document.getElementById("checkbox1");
useConditions = checkBoxUse.checked;
checkBoxUse.addEventListener("click", function () {
  if (checkBoxUse.checked) {
    useConditions = true;
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
  var form = document.forms["reserve"];
  if (validate()) {
    form.submit();
  }

// close modal form
function closeModal() {
  modalbg.style.display = "none";

}
