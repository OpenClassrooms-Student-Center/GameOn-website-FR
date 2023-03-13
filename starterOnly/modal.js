"use strict";

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// functions

function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal() {
  modalbg.style.display = "none";
}

// select location
function selectLocation() {
  const locationList = document.querySelectorAll("input[name='location']");
  
  let i = 0;
  for (i ; i < locationList.length; i++) {
    let location = locationList[i];

    if(location.checked == true) {
      location.setAttribute("checked","checked");

    }
  }
}

// hide effects error
function removeErrorMessage(span, field) {
  setTimeout(() => {
    span.style.display = "none";
    field.style.border = "none";
  }, 
  5000);
}

// effects error
function errorMessage(message, formData, field) {
  const spanElt = document.createElement("span");
  spanElt.textContent = message;
  spanElt.style.color = "#cc0000";
  spanElt.style.fontSize = "1rem";
  const span = formData.appendChild(spanElt);
  field.style.border = "2px solid #cc0000";

  removeErrorMessage(span, field);
}

// first input validation
function firstValidation() {
  let firstField = document.getElementById("first");

  if (!firstField.value.match(/^[a-z]{2,}$/i)) {
    let message = "Le prénom doit contenir que des lettres et en avoir au moins 2";
    const formData = document.querySelector(".modal-body .formData:nth-child(1)");

    errorMessage(message, formData, firstField);

    return false;
  }

  return true;
}

// last input validation
function lastValidation() {
  let lastField = document.getElementById("last");

  if (!lastField.value.match(/^[a-z]{2,}$/i)) {
    let message = "Le nom doit contenir que des lettres et en avoir au moins 2";
    const formData = document.querySelector(".modal-body .formData:nth-child(2)");

    errorMessage(message, formData, lastField);

    return false;
  }

  return true;
}

// email validation
function emailValidation() {
  let emailField = document.getElementById("email");

  if (!emailField.value.match(/^[\w\-.]{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,4}$/)) {
    let message = "Veuillez saisir une adresse email valide";
    const formData = document.querySelector(".modal-body .formData:nth-child(3)");

    errorMessage(message, formData, emailField);

    return false;
  }

  return true;
}

// birthdate validation
function birthdateValidation() {
  let birthdateField = document.getElementById("birthdate");

  if (!birthdateField.value.match(/^[\d]{4}-[\d]{2}-[\d]{2}$/)) {
    let message = "Veuillez renseigner votre date de naissance";
    const formData = document.querySelector(".modal-body .formData:nth-child(4)");

    errorMessage(message, formData, birthdateField);

    return false;
  }

  return true;
}

// quantity participation validation
function quantityValidation() {
  let quantityField = document.getElementById("quantity");
  
  if (!quantityField.value.match(/^[\d]{1,2}$/)) {
    let message = "Veuillez saisir des chiffres entre 0 et 99";
    const formData = document.querySelector(".modal-body .formData:nth-child(5)");

    errorMessage(message, formData, quantityField);

    return false;
  }

  return true;
}

// location validation
function locationValidation() {
  const selectedLocation = document.querySelectorAll(".modal-body .formData:nth-child(7) input[checked]");
  
  if (selectedLocation.length == 0) {
    let message = "Veuillez cocher un tournoi";
    const formData = document.querySelector(".modal-body .formData:nth-child(7)");

    errorMessage(message, formData, formData);

    return false;
  }

  return true;
}

// terms validation
function termsValidation() {
  const terms = document.getElementById("checkbox1");
  
  if (!terms.checked) {
    let message = "Veuillez accepter les conditions générales";
    const formData = document.querySelector(".modal-body .formData:nth-child(8)");

    errorMessage(message, formData, formData);

    return false;
  }

  return true;
}

// hide form fields
function hideFields() {
  const form = document.querySelector("form[name='reserve']");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fields = Object.values(formData);

    fields.forEach((field) => {
      field.style.display = "none";
    });

    successMessage(form);
  });
}

// modal success message
function successMessage(form) {
  
  const successMessage = document.querySelector("form p");

  successMessage.textContent = "Merci pour votre inscription";
  successMessage.style.fontSize = "1.8rem";
  successMessage.style.textAlign = "center";
  successMessage.style.padding = "280px 60px 280px 60px";

  document.querySelector(".btn-submit").value = "Fermer";

  // close modal success message
  form.addEventListener("submit", (event) => {
    closeModal();
    form.reset();
  });
  
}

// inputs validation
function validate() {

  let first = firstValidation(),
      last = lastValidation(),
      email = emailValidation(),
      birthdate = birthdateValidation(),
      quantity = quantityValidation(),
      location = locationValidation(),
      terms = termsValidation();
  
  if (first && last && email && birthdate && quantity && location && terms) {
    hideFields();

  } 
  else {
    return false;
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closeModal);


