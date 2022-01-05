

// DOM Elements

const modalForm = document.querySelector("#modalForm");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

const modalThanks = document.querySelector(".thanks"); /* Close modal*/
const formData = document.querySelectorAll(".formData");





function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



// Close modal event
modalCloseBtn.addEventListener("click", closeModal);
modalCloseBtnBottom.addEventListener("click", closeModal);

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}


