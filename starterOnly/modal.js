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

const content = document.querySelectorAll(".content")[0];

const closeModalIcon = document.querySelector(".close");

console.log(closeModalIcon);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

closeModalIcon.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.classList.add("bground--show");
  content.classList.add("content--show");
}

function closeModal() {
  content.classList.remove("content--show");
  modalbg.classList.remove("bground--show");
}
