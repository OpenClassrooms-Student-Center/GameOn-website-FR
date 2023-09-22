function editNav() {
  let x = document.getElementById("myTopnav");

  if (x?.className === "topnav") {
    x.className += " responsive";
  } else if (x) {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn?.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn?.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}
