function editNav() {
  var x = document.getElementById("headerSection");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".hero-section-bg");
const modalBtn = document.querySelectorAll(".modal-btn");
const formGroup = document.querySelectorAll(".form-group");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


