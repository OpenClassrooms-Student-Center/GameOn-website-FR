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

const modalCross = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close modal event
modalCross.addEventListener("click", closeModal);

// validate email form
function validate(input) {
  let mailRegex = "[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}";
  if(input.value.match(mailRegex)) {
  alert("Valid email address!");
  document.getElementById("email").focus();
  return true;
  } else {
  alert("You have entered an invalid email address!");
  document.getElementById("email").focus();
  return false;
  }
}

