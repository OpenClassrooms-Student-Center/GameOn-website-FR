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
const modalCloseBtnList = document.querySelectorAll(".bground .close");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


/**
 * Close modal function
 */
const closeModal = () =>  {
  modalbg.style.display = "none";
};

/**
 * Add listner for
 * Cross button and Close Button (issue-4)
 */
modalCloseBtnList.forEach((btn) => btn.addEventListener("click", closeModal));