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
const formsData = document.querySelectorAll(".formData");

const validate = document.querySelector(".btn-submit");
const form = document.querySelector("form");
const closer = document.querySelectorAll(".close");

let stringsNumber = document.querySelectorAll(".text-control");
let formInputs = document.querySelectorAll("input");

var checkFirst = false;
var checkName = false;
var checkMail = false;
var checkDate = false;
var checkTournament = false;
var checkRadio = false;
var checkBox = false;

var firstNameValue = "";
var lastNameValue = "";
var mailValue = "";
var dateValue = "";
var tournamentValue = "";
var cityValue = "";

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//ISSUE 1 Fermer la modal
function closeModal() {
  modalbg.style.display = "none";
}

closer.forEach((closer) => {
  closer.addEventListener("click", closeModal);
});

var firstName = document.querySelector(".formData>#first");

firstName.addEventListener("input", () => {
  var container = firstName.parentNode;
  if (firstName.value.length <= 2) {
    container.setAttribute("data-error-visible", "true");
    container.setAttribute(
      "data-error",
      "Le prénom doit comporter au minimum 3 caractères"
    );
  } else if (!firstName.value.match(/^[A-Za-z]+$/)) {
    //console.log("regexerror");
    container.setAttribute("data-error-visible", "true");
    container.setAttribute(
      "data-error",
      "Le prénom ne peut pas avoir de chiffre ou de caractères spéciaux"
    );
  } else {
    //onsole.log("ok");
    container.setAttribute("data-error-visible", "");
    checkFirst = true;
    firstNameValue = firstName.value;
  }
});

var lastName = document.querySelector(".formData>#last");
lastName.addEventListener("input", () => {
  var container = lastName.parentNode;
  if (lastName.value.length <= 2) {
    container.setAttribute("data-error-visible", "true");
    container.setAttribute(
      "data-error",
      "Le nom doit comporter au minimum 3 caractères"
    );
  } else if (!lastName.value.match(/^[A-Za-z]+$/)) {
    //console.log("regexerror");
    container.setAttribute("data-error-visible", "true");
    container.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
  } else {
    //onsole.log("ok");
    container.setAttribute("data-error-visible", "");
    checkName = true;
    lastNameValue = lastName.value;
  }
});

var eMail = document.querySelector(".formData>#email");
eMail.addEventListener("input", () => {
  var container = eMail.parentNode;
  if (
    !eMail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ||
    eMail.value == null
  ) {
    //console.log("regexerror");
    container.setAttribute("data-error-visible", "true");
    container.setAttribute("data-error", "L'adresse email n'est pas valide");
  } else {
    //onsole.log("ok");
    container.setAttribute("data-error-visible", "");
    checkMail = true;
    mailValue = eMail.value;
  }
});

var date = document.querySelector(".formData>#birthdate");
date.addEventListener("input", () => {
  var container = date.parentNode;
  if (!date.value.match()) {
    //console.log("regexerror");
    container.setAttribute("data-error-visible", "true");
    container.setAttribute("data-error", "Le format de date n'est pas correct");
  } else {
    //onsole.log("ok");
    container.setAttribute("data-error-visible", "");
    checkDate = true;
    dateValue = date.value;
  }
});

var tournament = document.querySelector(".formData>#quantity");
tournament.addEventListener("input", () => {
  var container = tournament.parentNode;
  if (!tournament.value.match(/[0-9]/) || tournament === null) {
    //console.log("regexerror");
    container.setAttribute("data-error-visible", "true");
    container.setAttribute("data-error", "Vous devez saisir un chiffre");
  } else {
    //onsole.log("ok");
    container.setAttribute("data-error-visible", "");
    checkTournament = true;
    tournamentValue = tournament.value;
  }
});

var radios = document.querySelectorAll("input[type=radio]");
radios.forEach((radio) => {
  var container = radio.parentNode;
  radio.addEventListener("click", () => {
    cityValue = radio.value;
    checkRadio = true;
  });

  if (!radio.checked) {
    container.setAttribute("data-error-visible", "true");
    checkRadio = false;
  }
});

checkbox1.addEventListener("click", () => {
  if (checkbox1.checked) {
    checkBox = true;
  } else {
    checkBox = false;
    container.setAttribute(
      "data-error",
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
  }
});

validate.addEventListener("click", (submitting) => {
  submitting.preventDefault();
  envoyer();
});

function envoyer() {
  if (
    checkFirst == true &&
    checkName == true &&
    checkMail == true &&
    checkDate == true &&
    checkTournament == true &&
    checkRadio == true &&
    checkBox == true
  ) {
    alert("toto");
    data = {
      firstNameValue,
      lastNameValue,
      mailValue,
      cityValue,
      dateValue,
      tournamentValue,
      cityValue,
    };
  } else {
    console.log(
      checkFirst,
      checkName,
      checkRadio,
      checkTournament,
      checkMail,
      checkDate,
      checkBox
    );
    formInputs.forEach((form) => {
      container = form.parentNode;
      container.setAttribute("data-error-visible", "true");
      container.setAttribute("data-error", "Vous devez remplir ce champs");
    });
  }
}
console.log("tesaat");
