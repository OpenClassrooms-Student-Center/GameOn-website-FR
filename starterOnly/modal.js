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
const modalClose = document.querySelectorAll(".close");
const modalBtnSubmit = document.querySelectorAll(".btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal event
modalClose.forEach((span) => span.addEventListener("click", closeModal));

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//submit modal event
//modalBtnSubmit.forEach((input) => input.addEventListener("click", submitModal));

//submit modal form
function submitModal(event) {
  event.preventDefault();
  for (let i = 0 ; i < formData.length; i++) {
    formData[i].style.display = "none";
  }
  let thanks = document.querySelector(".validMessage");
  thanks.style.display = "flex";
}
