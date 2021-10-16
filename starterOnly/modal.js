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


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//TODO #1 Fermer la modale
const modalCloseBtn = document.querySelectorAll(".close");

// close modal event
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));
// close modal form
function closeModal(){
  modalbg.style.display = 'none';
}
