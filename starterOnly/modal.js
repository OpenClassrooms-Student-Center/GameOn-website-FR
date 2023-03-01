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
function selectLocation() 
{
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
function errorMessage(message, formData, field) 
{
  const spanElt = document.createElement("span");
  spanElt.textContent = message;
  spanElt.style.color = "#cc0000";
  spanElt.style.fontSize = "1rem";
  const span = formData.appendChild(spanElt);
  field.style.border = "3px solid #cc0000";

  removeErrorMessage(span, field);
}

// inputs validation
function validate()
{

  const selectedLocation = document.querySelectorAll(".modal-body .formData:nth-child(7) input[checked]");
  const terms = document.getElementById("checkbox1");

  let first = document.getElementById("first");
  let last = document.getElementById("last");
  let email = document.getElementById("email");
  let birthDate = document.getElementById("birthdate");
  let quantity = document.getElementById("quantity");
  
  // first input validation
  if (!first.value.match(/^[a-z]{2,}$/i)) {

    let message = "Le prénom doit contenir que des lettres et en avoir au moins 2";
    const formData = document.querySelector(".modal-body .formData:nth-child(1)");

    errorMessage(message, formData, first);

    return false;
  }

  // last input validation
  if (!last.value.match(/^[a-z]{2,}$/i)) {
    let message = "Le nom doit contenir que des lettres et en avoir au moins 2";
    const formData = document.querySelector(".modal-body .formData:nth-child(2)");

    errorMessage(message, formData, last);

    return false;
  }

  // email validation
  if (!email.value.match(/^[\w\-.]{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,4}$/)) {
    let message = "Veuillez saisir une adresse email valide";
    const formData = document.querySelector(".modal-body .formData:nth-child(3)");

    errorMessage(message, formData, email);

    return false;
  }

  // birthdate validation
  if (!birthDate.value.match(/^[\d]{4}-[\d]{2}-[\d]{2}$/)) {
    let message = "Veuillez renseigner votre date de naissance";
    const formData = document.querySelector(".modal-body .formData:nth-child(4)");

    errorMessage(message, formData, birthDate);

    return false;
  }

  // quantity participation validation
  if (!quantity.value.match(/^[\d]{1,2}$/)) {
    let message = "Veuillez saisir des chiffres entre 0 et 99";
    const formData = document.querySelector(".modal-body .formData:nth-child(5)");

    errorMessage(message, formData, quantity);

    return false;
  }

  // location validation
  if (selectedLocation.length == 0) {
    let message = "Veuillez cocher un tournoi";
    const formData = document.querySelector(".modal-body .formData:nth-child(7)");

    errorMessage(message, formData, formData);

    return false;
  }

  // terms validation
  if (!terms.checked) {
    let message = "Veuillez accepter les conditions générales";
    const formData = document.querySelector(".modal-body .formData:nth-child(8)");

    errorMessage(message, formData, formData);

    return false;
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closeModal);