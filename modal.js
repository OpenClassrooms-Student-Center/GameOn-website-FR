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
const closeForm = document.querySelector(".close");
const modalBgContent = document.querySelector(".content");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeForm.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalBgContent.classList.remove("closed")
}


// close modal form
function closeModal() {

  modalBgContent.classList.add("closed")

  setTimeout(() => {
  modalbg.style.display = "none";
  }, 800);

}