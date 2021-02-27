/***********************************************
************ VARIABLES / CONSTANTS *************
***********************************************/

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close");
const form = document.getElementById("form");
let formData = document.querySelectorAll(".formData");
let commentErrorLocation = document.querySelector('.error-location');

// PATTERN validation
const namePattern = /^([A-Za-zÀ-ÿ][-,a-z. ']+[ ]*)+$/;
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numberPattern = /^[0-9]*$/;

/***********************************************
******************** EVENTS ********************
***********************************************/

// click : launch modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// click : close modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// change : first name input
form.first.addEventListener("change", function() {
  validFirstName(this);
});

// change : last name input
form.last.addEventListener("change", function() {
  validLastName(this);
});

// change : email input
form.email.addEventListener("change", function () {
  validEmail(this);
});

// change : birthdate input
form.birthdate.addEventListener("change", function () {
  validBirthdate(this);
});

// change : quantity input
form.quantity.addEventListener("change", function () {
  validQuantity(this);
});

// change : cgu input
form.cgu.addEventListener("change", function () {
  validCgu(this);
});

// listen to submit form
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    validFirstName(first) &&
    validLastName(last) &&
    validEmail(email) &&
    validBirthdate(birthdate) &&
    validQuantity(quantity) &&
    validLocation() &&
    validCgu(cgu)
  ) {
    console.log("inscription ok")
  } else {
    console.log("vous devez remplir tous les champs requis")
  }
});

/***********************************************
****************** FUNCTIONS *******************
***********************************************/

// Navbar
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal() {
  modalbg.style.display = "none";
}

// ********* form inputs validation *********

// valid first name
const validFirstName = function (first) {
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

// valid last name
const validLastName = function (last) {
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

// valid email
const validEmail = function (email) {
  if (!emailPattern.test(email.value.trim())) {
    setErrorFor(email, "Veuillez entrer une adresse email valide");
    return false;
  } else {
    email.value = email.value.trim();
    removeErrorFor(email);
    return true;
  }
};

// valid birthdate
const validBirthdate = function (birthdate) {
  let currentYear = new Date().getFullYear();
  let minAge = currentYear - 18;
  let maxAge = currentYear - 100;
  // user birth year
  let UserBirthYear = birthdate.value.split('-')[0];

  if ((UserBirthYear > minAge) || (UserBirthYear < maxAge)) {
    setErrorFor(birthdate, "Veuillez entrer une date d'anniversaire valide");
    return false;
  }
  else {
    removeErrorFor(birthdate);
    return true;
  }
};

// valid number of tournaments
const validQuantity = function (quantity) {
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

// valid location
const validLocation = function () {
  const options = document.querySelectorAll(`input[type=radio][name="location"]`);
  let checkOption;
  // options iteration
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      checkOption = options[i].value;
    }
  }
  // listen radio input with id
  document.body.addEventListener("change", function (e) {
    let target = e.target;
    switch (target.id) {
      case "location1":
        commentErrorLocation.innerText = '';
        break;
      case "location2":
        commentErrorLocation.innerText = '';
        break;
      case "location3":
        commentErrorLocation.innerText = '';
        break;
      case "location4":
        commentErrorLocation.innerText = '';
        break;
      case "location5":
        commentErrorLocation.innerText = '';
        break;
      case "location6":
        commentErrorLocation.innerText = '';
        break;
    }
  });

  if (checkOption != null) {
    return true;
  } else {
    commentErrorLocation.innerText = 'Veuillez choisir une ville';
    return false;
  }
};

// valid cgu
const validCgu = function (cgu) {
  if (!cgu.checked) {
    setErrorFor(cgu, "Veuillez accepter les conditions d'utilisation");
    return false;
  } else {
    removeErrorFor(cgu);
    return true;
  }
};

// ********* comments management error/success *********

function setErrorFor(input, errorComment) {
  formData = input.parentElement;
  formData.setAttribute("data-error-visible", "true");
  formData.setAttribute("data-error", errorComment);
}

function removeErrorFor(input) {
  formData = input.parentElement;
  formData.removeAttribute("data-error-visible");
  formData.removeAttribute("data-error");
} 