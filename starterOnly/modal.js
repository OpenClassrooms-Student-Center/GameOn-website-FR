function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
console.log(modalBtn);
const formData = document.querySelectorAll(".formData");
//Modal close
const close = document.querySelector(".close");
// console.log(close);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

// close modal
function closeModal() {
  modalBg.style.display = "none";
}
close.addEventListener("click", closeModal);
