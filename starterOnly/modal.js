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

const firstNameInput = document.getElementById('first').value;
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationInput = document.querySelectorAll("[name='location']");
const checkboxInput = document.getElementById("checkbox1");

const errorMessages = {
  firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
  lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
  email: "Veuillez entrer une adresse email valide.",
  birthdate: "Veuillez entrer une date de naissance valide.",
  quantity: "Veuillez entrer un nombre valide.",
  location: "Veuillez choisir une ville.",
  checkbox: "Veuillez accepter les conditions d'utilisations.",
};

// Fermer la modale #1
const closeBtn = document.querySelectorAll(".close");

//validation modal: ajouter confirmation quand envoie réussi #4
const modalV = document.querySelector(".modalValidate");
const modalVbg = document.querySelector(".bground2");
const closeBtnV = document.querySelectorAll(".closeV");
const closeBtn2 = document.querySelectorAll(".close2");

// Implémenter entrées du formulaire #2, ajouter validation ou messages d'erreur #3, ajouter confirmation quand envoie réussi #4
// submit
document.getElementById("reserve-form").addEventListener("submit", validate);

const firstNameError = document.getElementById('firstError');
firstNameError.style.display = "none";
//fonction validate des champs de saisie
function validate () {
  //alert ("hello");
  let firstNameInput = document.getElementById('first').value;
  //let firstNameErrors = document.getElementById('firstError').value;
  //prénom
  alert (firstNameInput.trim().length);
  if (firstNameInput.trim().length<2){
    //alert ("prénom trop court");
    firstNameError.style.display = "inline";
  } 
  /*else {
    alert ("prénom ok")
  }*/
}


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal validation event
closeBtnV.forEach((btn) => btn.addEventListener("click", closeModalV));
closeBtn2.forEach((btn) => btn.addEventListener("click", closeModalV));

// launch modal form 
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

//close modal form and open validate: ouvre la modale et la ferme en cliquant
function validateModal() {
  modalbg.style.display = "none";
  modalV.style.display = "flex";
  modalVbg.style.display = "block";
}

// close modal Validation form 
function closeModalV() {
  modalV.style.display = "none";
  modalVbg.style.display = "none";
}

function isInvalid(element, message) {
  let target;
  if (NodeList.prototype.isPrototypeOf(element)) target = element[0].parentNode;
  else target = element.parentNode;
  target.setAttribute("data-error-visible", true);
  target.setAttribute("data-error", message);
}

//remove previous alerts
function removeAlerts() {
  let invalidFields = document.querySelectorAll(
    '.formData[data-error-visible="true"]'
  );
  for (let field of invalidFields) {
    field.setAttribute("data-error-visible", false);
    field.setAttribute("data-error", "");
  }
}

//validate first name
/*function firstValidation() {
  let inputValue = firstNameInput.value;
  if (inputValue !== null && inputValue.length >= 2) return true;
  else return false;
}*/

const firstValue = firstNameInput.value;
isfirst = (name) => {
  return new RegExp(/^[A-Za-z]{2,20}$/).test(name);
};
isValid = () => {
  if (
    isValidFirstName()
  ) {
    return true;
  } else {
    return false;
  }
};
isValid();
console.log("statut form IS VALID ?", isValid());
isValidFirstName = () => {
  if (firstValue === "") {
    setErrorFor(firstNameInput, "le champ est vide");
    return false;
  } else if (!firstNameInput(firstValue)) {
    setErrorFor(
      firstNameInput,
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    return false;
  } else {
    setSuccessFor(firstNameInput);
    return true;
  }
};

isValidFirstName();
console.log("statut FIRSTNAME", isValidFirstName());

// écoute les événements sur cet élément.
firstNameInput.addEventListener("input", (e) => {
  let etv = e.target.value;
  isfirst(etv)
    ? setSuccessFor(firstNameInput)
    : setErrorFor(
      firstNameInput,
        "Veuillez entrer 2 caractères ou plus pour le champ du nom."
      );
});


//validate last name
function lastValidation() {
  let inputValue = lastNameInput.value;
  if (inputValue !== null && inputValue.length >= 2) return true;
  else return false;
}

//validate email
function emailValidation() {
  let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
  return regex.test(emailInput.value);
}

//validate birthday
function birthdateValidation() {
  let birthdate = new Date(birthdateInput.value);
  let today = new Date();
  if (birthdate.toString() !== "Invalid Date") {
    if (
      birthdate.getDate() >= today.getDate() &&
      birthdate.getMonth() == today.getMonth() &&
      birthdate.getFullYear() == today.getFullYear()
    ) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

//validate quantity
function quantityValidation() {
  let regex = /^[0-9]+$/;
  return regex.test(quantityInput.value);
}

