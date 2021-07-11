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
const closeBtn = document.querySelector(".close");
const inputFirst = document.getElementById("first");
const inputEmail = document.getElementById("email");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Validate form
function validate() {

  let formIsOkay = true;
  const valueFirst = inputFirst.value;
  const valueEmail = inputEmail.value;
  // Check if first is empty and lengths
  if (valueFirst == "" || valueFirst.length < 2) {
    formIsOkay = false;
  }
  // Check email formatting
  // full regex definition here : https://datatracker.ietf.org/doc/html/rfc2822#section-3.4.1
  if (/^([a-z]\.?)+@([a-z]+\.)+[a-z]+$/.test(valueEmail) == false) {
    formIsOkay = false
  }

  return formIsOkay;
}
