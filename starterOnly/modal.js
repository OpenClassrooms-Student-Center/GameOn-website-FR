// DOM Elements
//let modal = null;

const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClosure = document.querySelector(".closeModal");
const modalContent = document.querySelector(".content");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

//Close modal with X button
// >function:
function closeModal() {
  modalBg.style.display = "none";
}
// >call of function:
modalClosure.addEventListener("click", closeModal);

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
