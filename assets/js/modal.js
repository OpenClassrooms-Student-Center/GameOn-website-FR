/********************* NAV **********************/
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
const closeModalX = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// eventlistener
closeModalX.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal
function closeModal() {
  modalbg.style.display = "none";
  //form.style.opacity: Pr afficher la pop up successConfirmation
  form.style.opacity = "1";
  successConfirmation.style.display = "none";
}
