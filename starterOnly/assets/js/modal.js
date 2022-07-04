"use strict"

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("form");
const thanks = document.getElementById("thanks");
const btnCloseThanks = document.querySelector(".btn-close"); 
const firstName = document.forms["reserve"]["first"];
const lastName = document.forms["reserve"]["last"];
const birthdate = document.forms["reserve"]["birthdate"];
const email = document.forms["reserve"]["email"];
const quantity = document.forms["reserve"]["quantity"];
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";

  // display form
  form.style.display = "block";

  // hidden thanks msg
  thanks.style.display = "none";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", function() {
  form.reset()
  launchModal()
}));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close modal event
closeBtn.addEventListener("click", closeModal);

// pull down the burger menu
function editNav() {
  let x = document.getElementById("myTopnav");
  if(x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// validate firstName
function validateFirstName() {
  return !(firstName.value == "" || firstName.value.length < 2);
}

// validate lastName
function validateLastName() {
  return !(lastName.value == "" || lastName.value.length < 2);
}

// validate birthdate
function validateBirthdate() {
  const birth = new Date(birthdate.value)
  const ageDate = new Date(Date.now() - birth.getTime());
  const age = ageDate.getUTCFullYear() - 1970;

  return !(birthdate.value == "" || age < 18);
}

// validate email
function validateEmail() {
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  return(regexEmail.test(email.value)); // test email
}

// validate quantity
function validateQuantity() {
  return !(quantity.value == "" || quantity.value > 99 || quantity.value < 0);
} 

// validate radio
function validateRadioBtn() {
  return location1.checked || location2.checked || location3.checked ||
      location4.checked || location5.checked || location6.checked;
}

// validate checkbox
function validateCheckbox() {
  if(!checkbox1.checked && checkbox2.checked) {
    return false;
  } else if (!checkbox1.checked && !checkbox2.checked) {
    return false;
  } else {
    return true;
  }
}

// event form
form.addEventListener("submit", validate);

// validate form
function validate(e){

  e.preventDefault();

  let isValid = true;
  
  if(!validateFirstName()) {
    formData[0].dataset.errorVisible = "true";
    isValid = false;
  } else {
    formData[0].dataset.errorVisible = "false";
  }

  if(!validateLastName()) {
    formData[1].dataset.errorVisible = "true";
    isValid = false;
  } else {
    formData[1].dataset.errorVisible = "false";
  }

  if(!validateEmail()) {
    formData[2].dataset.errorVisible = "true";
    isValid = false;
  } else {
    formData[2].dataset.errorVisible = "false";
  }

  if(!validateBirthdate()) {
    formData[3].dataset.errorVisible = "true";
    isValid = false;
  } else {
    formData[3].dataset.errorVisible = "false";
  }

  if(!validateQuantity()) {
    formData[4].dataset.errorVisible = "true";
    isValid = false;
  } else {
    formData[4].dataset.errorVisible = "false";
  }

  if(!validateRadioBtn()) {
    formData[5].dataset.errorVisible = "true";
    isValid = false;
  } else {
    formData[5].dataset.errorVisible = "false";
  }

  if(!validateCheckbox()) {
    formData[6].dataset.errorVisible = "true";
    isValid = false;
  } else {
    formData[6].dataset.errorVisible = "false";
  }
  
  if (isValid) {
    // Hidden form
    form.style.display = "none";

    // display thanks msg
    thanks.style.display = "block";

    // close thanks msg
    btnCloseThanks.addEventListener("click", closeModal);
  }
}
