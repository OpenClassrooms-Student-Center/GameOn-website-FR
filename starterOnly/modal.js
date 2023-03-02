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
const closeModalBtn = document.querySelector(".close")
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Handle close modal 



const closeModal = () => {
  modalbg.style.display = "none";
}

// click out of the box

const clickTarget = (e) => {
  if(e.target.getAttribute("class") == "bground" && modalbg.style.display == "block"){
    closeModal()
  }
}

// click on cross

closeModalBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
  clickTarget(e)})



