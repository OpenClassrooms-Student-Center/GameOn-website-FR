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

// DOM Elements for modal
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close");
const navEdit = document.querySelectorAll(".icon");
const formData = document.querySelectorAll(".formData");
const showForm = document.getElementById("showForm");
const confirmbg = document.querySelector(".bgroundConfirm");
const btnConfirm = document.getElementById("btnConfirm");
const showConfirm = document.getElementById("showConfirm");
const submitBtn = document.getElementById("submitBtn");

// DOM Elements for input firstname
const firstName = document.getElementById("first");
const errorFirstName = document.getElementById("errorFirstName");

// DOM Elements for input lastname
const lastName = document.getElementById("last");
const errorLastName = document.getElementById("errorLastName");

// DOM Elements for input mail
const email = document.getElementById("email");
const errorMail = document.getElementById("errorMail");

// DOM Elements for input birthDate
const birthdate = document.getElementById("birthdate");
const errorBirthdate = document.getElementById("errorBirthdate");

// DOM Elements for input quantity
const quantity = document.getElementById("quantity");
const errorQuantity = document.getElementById("errorQuantity");

// DOM Elements for cityLocation
const cityLocation = document.getElementsByName("location");
const errorLocation = document.getElementById("errorLocation");

// DOM Elements for cgu
const errorCGU = document.getElementById("errorCGU");
const checkbox1 = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btnClose) => btnClose.addEventListener("click", closeModal));

// close modal on X
function closeModal() {
  modalbg.style.display = "none";
}

// call onclick editnav
navEdit.forEach((nav) => nav.addEventListener("click", editNav));

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
  let locationCheckedIsOk = locationChecked();

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value || !locationCheckedIsOk) {
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
quantity.addEventListener("input", function () {
  if (this.value === "" || this.value == NaN || this.value >= 100) {
    errorQuantity.innerHTML =
      "veuillez choisir un nombre de participation valide";
    quantity.style.border = "4px solid #e54858";
    return false;
  } else {
    errorQuantity.innerHTML = "";
    quantity.style.border = "";
    return true;
  }
});

// validate location and appearring red string when detect error
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
checkbox1.addEventListener("input", function () {
  if (checkbox1.checked) {
    errorCGU.innerHTML = "";
    return true;
  } else {
    errorCGU.innerHTML = "Veuillez accepter les termes et conditions";
    return false;
  }
});
