"use strict";

// DOM Elements
let commentErrorLocation = document.querySelector(".error-location");

// validation Pattern
const namePattern = /^([A-Za-zÀ-ÿ][-,a-z. ']+[ ]*)+$/;
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numberPattern = /^[0-9]*$/;

// ********* checked and feedback form inputs *********

// verification and feedback for first name
const checkedFirstName = function (first) {
  if (first.value.trim().length == "") {
    setErrorFor(first, "Veuillez renseigner votre Prénom");
    return false;
  }
  if (first.value.trim().length < 2) {
    setErrorFor(first, "Veuillez entrer 2 caractères ou plus pour le champ du Prénom");
    return false;
  }
  if (!namePattern.test(first.value.trim())) {
    setErrorFor(first, "Votre Prénom n'est pas valide");
    return false;
  }
  else {
    first.value = first.value.trim();
    removeErrorFor(first);
    return true;
  }
};

// verification and feedback for last name
const checkedLastName = function (last) {
  if (last.value.trim().length == "") {
    setErrorFor(last, "Veuillez renseigner votre Nom");
    return false;
  }
  if (last.value.trim().length < 2) {
    setErrorFor(last, "Veuillez entrer 2 caractères ou plus pour le champ du Nom");
    return false;
  }
  if (!namePattern.test(last.value.trim())) {
    setErrorFor(last, "Votre Nom n'est pas valide");
    return false;
  }
  else {
    last.value = last.value.trim();
    removeErrorFor(last);
    return true;
  }
};

// verification and feedback for email
const checkedEmail = function (email) {
  if (!emailPattern.test(email.value.trim())) {
    setErrorFor(email, "Veuillez entrer une adresse email valide");
    return false;
  } else {
    email.value = email.value.trim();
    removeErrorFor(email);
    return true;
  }
};

// verification and feedback for birthdate
const checkedBirthdate = function (birthdate) {
  let currentYear = new Date().getFullYear();
  let minAge = currentYear - 18;
  let maxAge = currentYear - 130;
  // user birth year
  let userBirthYear = birthdate.value.split("-")[0];

  if (birthdate.value == "") {
    setErrorFor(birthdate, "Vous devez indiquer votre date de naissance");
    return false;
  }
  if (userBirthYear > minAge) {
    setErrorFor(birthdate, "Vous devez avoir 18 ans pour pouvoir participer");
    return false;
  }
  if (userBirthYear < maxAge) {
    setErrorFor(birthdate, "Veuillez entrer une date d'anniversaire valide");
    return false;
  }
  else {
    removeErrorFor(birthdate);
    return true;
  }
};

// verification and feedback for quantity of tournaments
const checkedQuantity = function (quantity) {
  // check if numeric value
  if (quantity.value == "") {
    setErrorFor(quantity, "Veuillez indiquer votre nombre de participation");
    return false;
  }
  // check if numeric value
  if (isNaN(quantity.value)) {
    setErrorFor(quantity, "Veuillez indiquer une valeur numérique");
    return false;
  }
  // check if value is a number integer
  if (!numberPattern.test(quantity.value.trim())) {
    setErrorFor(quantity, "Veuillez indiquer un nombre entier et positif");
    return false;
  }
  // check if value is less than 100
  if (quantity.value >= 100) {
    setErrorFor(quantity, "Veuillez indiquer une valeur inférieure à 100");
    return false;
  }
   else {
    quantity.value = quantity.value.trim();
    removeErrorFor(quantity);
    return true;
  }
};

// verification and feedback for location
const checkedLocation = function () {
  const locations = document.querySelectorAll(`input[type=radio][name="location"]`);
  let checkLocation;
  // options iteration
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      checkLocation = locations[i].value;
    }
  }
  // listen radio input with id
  document.body.addEventListener("change", function (e) {
    let target = e.target;
    switch (target.id) {
      case "location1":
        commentErrorLocation.innerText = "";
        break;
      case "location2":
        commentErrorLocation.innerText = "";
        break;
      case "location3":
        commentErrorLocation.innerText = "";
        break;
      case "location4":
        commentErrorLocation.innerText = "";
        break;
      case "location5":
        commentErrorLocation.innerText = "";
        break;
      case "location6":
        commentErrorLocation.innerText = "";
        break;
    }
  });

  if (checkLocation != null) {
    return true;
  } else {
    commentErrorLocation.innerText = "Veuillez choisir une ville";
    return false;
  }
};

// verification and feedback for cgu
const checkedCgu = function (cgu) {
  if (!cgu.checked) {
    setErrorFor(cgu, "Veuillez accepter les conditions d'utilisation");
    return false;
  } else {
    removeErrorFor(cgu);
    return true;
  }
};