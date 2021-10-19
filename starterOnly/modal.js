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

//TODO #2 Implémenter entrées du formulaire
const firstName = document.getElementById("first");
const errorFirstName = document.getElementById("errorFirstName");
const lastName = document.getElementById("last");
const errorLastName = document.getElementById("errorLastName");
const email = document.getElementById("email");
const errorEmail = document.getElementById("errorEmail");
const birthdate = document.getElementById("birthdate");
const errorBirthdate = document.getElementById("errorBirthdate");
const quantityTournamenent = document.getElementById("quantity");
const errorQuantity = document.getElementById("errorQuantity");
const location = document.querySelector('input[name="location"]');
const errorLocation = document.getElementById("errorLocations");
const policy = document.getElementById("checkbox1");
const errorPolicy = document.getElementById("errorPolicy");

