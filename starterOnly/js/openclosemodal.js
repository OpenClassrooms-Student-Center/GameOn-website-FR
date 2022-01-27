function editNav() {
  let x = document.getElementById("myTopnav");
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
const close = document.querySelector(".close"); //constant which retrieves the element corresponding to the cross
const btnClose = document.querySelector(".btn-close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form and reset data
function launchModal() {
  formulary.reset();
  modalbg.style.display = "block";
}

//waiting for a click on the close class and then launching the function closeModal
close.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);

//function allowing to close the modal when clicking on the cross
function closeModal(disabled) {
  modalbg.style.display = "none";
}