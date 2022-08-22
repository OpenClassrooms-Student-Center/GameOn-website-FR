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
const modalClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModalForm);

// launch modal form
/* The function `launchModal()` displays the modal background and sets the display property of the modal background to block */
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

// close modal form
function closeModalForm() {
  modalbg.style.display = "none";
  document.getElementById("modal-body").style.display = "block";
   document.getElementById("modal-body2").style.display = "none";
}
