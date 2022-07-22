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
// Found closeBtn by ID since ID should be unique we avoid some problem like a other element which would have the same class
const closeBtn = document.getElementById("close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Lauch close modal event
closeBtn.addEventListener("click", closeModal, false); 

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Function validate form 
function validate() {
  event.preventDefault() // Disable default behavior of form 
  alert("Merci! Votre réservation a été reçue."); // Alert to show réservation is done 
  closeModal(); // Close the form 
}

