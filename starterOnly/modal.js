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
      "Le nom ne peut pas avoir de chiffre ou de caractères spéciaux"
    );
  } else {
    //onsole.log("ok");
    container.setAttribute("data-error-visible", "");
  }
});

var eMail = document.querySelector(".formData>#email");
eMail.addEventListener("input", () => {
  var container = eMail.parentNode;
  if (!eMail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    //console.log("regexerror");
    container.setAttribute("data-error-visible", "true");
    container.setAttribute("data-error", "L'adresse email n'est pas valide");
  } else {
    //onsole.log("ok");
    container.setAttribute("data-error-visible", "");
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
  }
});

var radios = document.querySelectorAll("input[type=radio]");
radios.forEach((radio) => {
  var container = radio.parentNode;
  if (!radio.checked) {
    container.setAttribute("data-error-visible", "true");
  }
});

validate.addEventListener("click", (submitting) => {
  submitting.preventDefault();
  if ((firstName = false)) {
    alert("toto");
  }
});
