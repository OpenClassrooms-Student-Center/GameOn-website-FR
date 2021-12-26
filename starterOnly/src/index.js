import { editNav, capitalize } from "./utils.js";
import * as validator from "./validators.js";

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("signup");

// TEXT FORMATTING
capitalize(document.querySelector(".btn-signup.modal-btn"));

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.addEventListener("click", closeModal);

//HANDLERS
// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

const formEl = document.forms.signup;
const formDataEl = new formData(formEl);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(formDataEl);
});
