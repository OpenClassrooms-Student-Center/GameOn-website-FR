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


// DOM elements for closing the modal form 

let closeModalBtn = document.querySelector(".close")
let entireModal = document.querySelector(".bground")

// listening to the event of click 

closeModalBtn.addEventListener("click", closeModal)

// function for closing the modal form 

function closeModal () {
  entireModal.style.display = "none" 

}

