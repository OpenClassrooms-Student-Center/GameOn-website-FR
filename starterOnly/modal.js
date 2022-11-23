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
const closeModalBtn = document.querySelectorAll("#close");
const modalBody = document.querySelector(".modal-body");

//Form --> récupération des champs
const form = document.getElementById("reserve");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const cities = document.getElementsByName("location");
const checkBox = document.getElementById("checkbox1");
const formValidation = document.getElementById("reserve");

//Form --> messages d'erreur
const message = document.getElementById("data_missing");
const messageLast = document.getElementById("last_missing");
const emailMissing = document.getElementById("email_missing");
const birthdateMissing = document.getElementById("birthdate_missing");
const quantityMissing = document.getElementById("quantity_missing");
const locationMissing = document.getElementById("location_missing");
const checkboxMissing = document.getElementById("checkbox_missing");
const messageValidation = document.getElementById("message_validation");

//form validation

formValidation.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validFirstName() == true) {
    confirmation();
    sendFormMessage();
  }
});

function validate() {
  validFirstName();
  validLastName();
  validEmail();
  validBirthdate();
  validQuantity();
  validLocation();
  validCheckbox();
}

// Message form sent
function sendFormMessage() {
  messageValidation.innerHTML =
    "<p>Merci pour<br>votre inscription.</p>" +
    '<button class="button button-close" onclick="closeModal()">Fermer</button>';
  form.reset();
}

function confirmation() {
  modalBody.classList.add("confirmation");
}

//firstName validation

function validFirstName() {
  if (!firstName.value) {
    message.innerText = "Veuillez renseigner un prénom.";
    return false;
  } else if (firstName.value.length < 1) {
    message.innerText = "Veuillez entrer 2 caractères min.";
    return false;
  } else if (firstName.value.match(/^ *$/)) {
    message.innerText = "Caractère non autorisé.";
    return false;
  } else firstName;
  return true;
}

//lastName validation

function validLastName() {
  if (!lastName.value) {
    messageLast.innerText = "Veuillez renseigner un nom.";
    return false;
  } else if (lastName.value.length < 1) {
    messageLast.innerText = "Veuillez entrer 2 caractères min.";
    return false;
  } else if (lastName.value.match(/^ *$/)) {
    messageLast.innerText = "Caractère non autorisé.";
    return false;
  } else lastName;
  return true;
}

//email validation

function validEmail() {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.value) {
    emailMissing.innerText = "Veuillez renseigner un email.";
    return false;
  } else if (email.value.match(validRegex)) {
    validEmail;
    return true;
  } else {
    emailMissing.innerText = "Veuillez renseigner un email valide.";
    return false;
  }
}

//birthdate validation

function validBirthdate() {
  if (!birthdate.value) {
    birthdateMissing.innerText = "Veuillez renseigner une date de naissance.";
    return false;
  } else {
    birthdate;
    return true;
  }
}

//quantity validation

function validQuantity() {
  if (!quantity.value) {
    quantityMissing.innerText = "Veuillez renseigner une donnée.";
    return false;
  } else {
    quantity;
    return true;
  }
}

//location validation

function validLocation() {
  // for (let i = 0; i < cities.length; i++) {
  //   if (cities[i].checked) {
  //     return true;
  //   } else {
  //     locationMissing.innerHTML = "Veuillez cocher une ville.";
  //     return false;
  //   }
  // }

  const radioChecked = document.querySelector('input[name="location"]:checked');
  if (radioChecked != null) {
    cities;
    return true;
  } else {
    locationMissing.innerText = "Veuillez sélectionner une ville.";
    return false;
  }
}

//checkbox validation

function validCheckbox() {
  if (checkBox.checked) {
    checkBox;
    return true;
  } else {
    checkboxMissing.innerText =
      "Veuillez accepter les conditions d'utilisation.";
    return false;
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}
//close modal event
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));
