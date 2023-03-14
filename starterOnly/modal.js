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
const closeModal = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//console.log(btn)
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  
}
modalbg.addEventListener("click", closeForm);

function closeForm() {
  modalbg.style.display= "none";
}

