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
const modalContent = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  if (modalContent.classList.contains('close-anim')) {
    modalContent.classList.remove('close-anim')
  }
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalContent.classList.add('close-anim');
  setTimeout(() => {
    modalbg.style.display = "none";
    console.log('1');
  }, 500);
}


