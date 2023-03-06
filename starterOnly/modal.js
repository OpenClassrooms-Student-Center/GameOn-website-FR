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
const modalSubmit = document.querySelector(".btn-submit");
const modalBody = document.querySelector(".modal-body");
const modalThanks = document.querySelector(".thanks-page");
const modalCloseThanks = document.querySelector(".btn-close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal(event) {
  modalbg.style.display = "block";
  event.preventDefault();
}

// close modal 
modalClose.onclick = function(){
  modalbg.style.display = "none";  
}

// submit form
modalSubmit.onclick = function (event){
  modalBody.style.display = "none";
  modalThanks.style.display = "flex";
  event.preventDefault();
}

// close thanks page 

modalCloseThanks.onclick = function (){
  modalThanks.style.display = "none";
  modalBody.style.display = "block";
}
