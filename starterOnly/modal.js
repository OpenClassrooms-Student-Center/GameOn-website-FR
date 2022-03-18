
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const navBtn = document.querySelectorAll(".nav-btn");
const navMenu = document.getElementById("nav-responsive");

// Listener for closing the modal
const closeBtn = document.querySelector(".close");
const bgModal = document.querySelector(".bground");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
navBtn.forEach((btn) => btn.addEventListener("click", navModal));

// Boolean to show or not the Nav menu
let bool = 1;

function navModal() {
  console.log("test");
  if (bool) {
    navMenu.style.display = "block";
    let element = document.getElementById("top-menu-id");
    element.classList.add("top-menu");
    bool = 0;
  } else {
    navMenu.style.display = "none";
    let element = document.getElementById("top-menu-id");
    element.classList.remove("top-menu");
    bool = 1;
  }
}

// Close modal event
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
export function closeModal() {
  bgModal.style.display = "none";
}

// Validation Modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
export function thanks() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}