function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// regex
const mailRegex = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
const dateRegex = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const showForm = document.getElementById("showForm");
const confirmbg = document.querySelector(".bgroundConfirm");
const btnConfirm = document.getElementById("btnConfirm");
const showConfirm = document.getElementById("showConfirm");
const submitBtn = document.getElementById("submitBtn");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal on X
function closeModal() {
  modalbg.style.display = "none";
}

// function open modal validate
function modalValidate() {
  modalbg.style.display = "none";
  confirmbg.style.display = "block";
  btnConfirm.addEventListener("click", closeConfirm);
}

// function close confirm modal
function closeConfirm() {
  confirmbg.style.display = "none";
  window.location.reload(true);
}

// validat form submit
document.forms["reserve"].addEventListener("submit", function (submitElement) {
  let error;
  let inputs = this;

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      submitElement.preventDefault();
      error = "veuillez renseigner tous les champs";
      break;
    }
  }

  if (error) {
    document.getElementById("error").innerHTML = error;
    document.getElementById("error").style.color = "red";
  } else {
    submitElement.preventDefault();
    modalValidate();
  }
});

// Validate first Name and appearring red string when detect error
let firstName = document.getElementById("first");
let errorFirstName = document.getElementById("errorFirstName");

firstName.addEventListener("input", function () {
  if (
    this.value !== "" &&
    this.value.length >= 2 &&
    nameRegex.test(this.value)
  ) {
    errorFirstName.innerHTML = "";
    firstName.style.border = "";
    return true;
  } else {
    errorFirstName.innerHTML =
      "votre prénom doit contenir au moins deux lettres";
    firstName.style.border = "4px solid #e54858";
    return false;
  }
});

// Validate lastName and appearring red string when detect error
let lastName = document.getElementById("last");
let errorLastName = document.getElementById("errorLastName");

lastName.addEventListener("input", function () {
  if (
    this.value !== "" &&
    this.value.length >= 2 &&
    nameRegex.test(this.value)
  ) {
    errorLastName.innerHTML = "";
    lastName.style.border = "";
    return true;
  } else {
    errorLastName.innerHTML =
      "c'est pareil pour votre nom Minimum 2 lettres !! ";
    lastName.style.border = "4px solid #e54858";
    return false;
  }
});

// Validate Email and appearring red string when detect error
let email = document.getElementById("email");
let errorMail = document.getElementById("errorMail");

email.addEventListener("input", function () {
  if (mailRegex.test(this.value)) {
    errorMail.innerHTML = "";
    email.style.border = "";
    return true;
  } else {
    errorMail.innerHTML = "Veuillez entrer une adresse mail valide";
    email.style.border = "4px solid #e54858";
    return false;
  }
});

// validate birthdate and appearring red string when detect error
let birthdate = document.getElementById("birthdate");
let errorBirthdate = document.getElementById("errorBirthdate");

birthdate.addEventListener("input", function () {
  if (dateRegex.test(this.value)) {
    errorBirthdate.innerHTML = "";
    birthdate.style.border = "";
    return true;
  } else {
    errorBirthdate.innerHTML = "Veuillez entrer une date de naissance valide";
    birthdate.style.border = "4px solid #e54858";
    return false;
  }
});

// validate participation quantity and appearring red string when detect error
let quantity = document.getElementById("quantity");
let errorQuantity = document.getElementById("errorQuantity");

quantity.addEventListener("input", function () {
  if (this.value === "" || this.value == NaN) {
    errorQuantity.innerHTML = "veuillez renseigner ce champs";
    quantity.style.border = "4px solid #e54858";
    return false;
  } else {
    errorQuantity.innerHTML = "";
    quantity.style.border = "";
    return true;
  }
});

// validate location and appearring red string when detect error
let cityLocation = document.getElementsByName("location");
let errorLocation = document.getElementById("errorLocation");

function locationChecked() {
  if (
    cityLocation[0].checked ||
    cityLocation[1].checked ||
    cityLocation[2].checked ||
    cityLocation[3].checked ||
    cityLocation[4].checked ||
    cityLocation[5].checked ||
    cityLocation[6].checked
  ) {
    errorLocation.innerHTML = "";
    return true;
  } else {
    errorLocation.innerHTML = "Veuillez choisir une option";
    return false;
  }
}

// Validate CGU and appearring red string when detect error
let errorCGU = document.getElementById("errorCGU");
let checkbox1 = document.getElementById("checkbox1");

checkbox1.addEventListener("input", function () {
  if (checkbox1.checked) {
    errorCGU.innerHTML = "";
    return true;
  } else {
    errorCGU.innerHTML = "Veuillez accepter les termes et conditions";
    return false;
  }
});
