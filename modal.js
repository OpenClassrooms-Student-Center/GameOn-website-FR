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
const closemodalbg = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event (on x)
closemodalbg.addEventListener("click", closeModalButton);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModalButton() {
  modalbg.style.display = "none";
}
