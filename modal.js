// DOM elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close")[0];
const form = document.querySelectorAll("form")[0];
const body = document.querySelectorAll("body")[0];

// change to responsive navbar
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  mainModal.style.display = "block";
  body.style.overflow = "hidden";
  window.scrollTo(0, 0);
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  body.style.overflow = "auto";
}

// close modal event
closeBtn.addEventListener("click", closeModal);
