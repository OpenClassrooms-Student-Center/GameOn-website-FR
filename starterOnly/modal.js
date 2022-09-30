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
const form = document.getElementById("form-modal-data");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const subimtBtn = document.getElementById(".btn-submit");
const inputs = document.getElementsByTagName("input");
let firstNameRegex = /^[a-zA-Z]+$/;
let lastNameRegex = /^[a-zA-Z]+$/;

//DOM errors


const errorFirstName = document.getElementById("error-first");
const errorLastName = document.getElementById("error-last");
const errorEmail = document.getElementById("error-email");
const errorBirthdate = document.getElementById("error-birthdate");
const errorQuantity = document.getElementById("error-quantity");
const checkIcon = document.querySelector(".checkbox-input");    
const errorCity = document.getElementById("errorCity");
const errorConditionUser = document.getElementById("errorConditionUser");
let error = O;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// click to leave modal form
document.querySelector(".close").addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
