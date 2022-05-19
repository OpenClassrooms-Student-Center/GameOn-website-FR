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
const closeModal = document.querySelector('.close');
const submitBtn = document.querySelector(".btn-submit");
const modalThanks = document.querySelector(".merci")

  closeModal.addEventListener("click", ()=> modalbg.style.display = "none")

 submitBtn.addEventListener("click", ()=>{
    console.log('submit-btn clicked ')

  })


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// launch modal form
function launchModalThanks() {
  modalThanks.style.display = "block";
}


