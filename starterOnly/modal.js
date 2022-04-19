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
const closeBtn = document.querySelectorAll(".close");
const btnCloseModal = document.getElementById("btn-close-modal");

// launch modal event - open
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form - open
function launchModal() {
  modalbg.style.display = "block";
}

// close Modal form
const closeModal = () => {
  modalbg.style.display = "none";
};

// open modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // changer nom

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
btnCloseModal.addEventListener("click", closeModal);
