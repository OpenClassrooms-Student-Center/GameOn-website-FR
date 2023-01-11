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
const modalCloseBtn = document.querySelector('.close')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close the modal when the cross is clicked
modalCloseBtn.addEventListener('click', () => modalbg.style.display = 'none');

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


