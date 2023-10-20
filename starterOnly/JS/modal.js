function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.getElementById("bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.getElementById("close");
const closeValidation = document.getElementById("close-modal");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close modal event
closeModal.addEventListener("click", closeModalHandler);

//close validation modal
closeValidation.addEventListener("click", function () {
  modalValidate.style.display = "none"; // Masque la modal de remerciement
  modalbg.style.display = "none";
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalBody.style.display = "flex";
}

//close modal form
function closeModalHandler() {
  modalbg.style.display = "none";
}
