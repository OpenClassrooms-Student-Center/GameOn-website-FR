function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*--------- DOM ELEMENTS ---------*/

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll("#close");
// inputs
var first = document.getElementById("first");
var last = document.getElementById("last");
var email = document.getElementById("email");
var birthday = document.getElementById("birthdate");
var quantity = document.getElementById("quantity");

/*--------- EVENTS ---------*/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// modal validation event
document.getElementById("reserve").addEventListener("submit" , function(e) {
  e.preventDefault();
  alert('formulaire envoyé');
});

// close modal event
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

/*--------- FUNCTIONS ---------*/

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


