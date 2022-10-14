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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// Getting all close btn in the DOM
let closeModalBtn = document.querySelectorAll(".close");

// Adding an event on each btn to close
closeModalBtn.forEach((e) => e.addEventListener("click", closeModal));

// close modal function
function closeModal() {
    modalbg.style.display = "none";
}