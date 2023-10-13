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
const closeModal = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close modal event
closeModal.addEventListener("click", closeModalHandler);

const closeValidation = document.getElementById("close-modal");
closeValidation.addEventListener("click", closeValidationHandler);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal form
function closeModalHandler() {
  modalbg.style.display = "none";
}
function closeValidationHandler() {
  modalbg.style.display = "none";
}
