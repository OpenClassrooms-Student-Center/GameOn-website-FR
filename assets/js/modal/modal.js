"use strict";

// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close, .btn-close");
const modalbg = document.querySelector(".bground");
const modalSuccessMessage = document.querySelector(".reservation-accepted");

// click : launch modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// click : close modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal() {
  modalbg.style.display = "none";
  modalSuccessMessage.style.display = "none";
}