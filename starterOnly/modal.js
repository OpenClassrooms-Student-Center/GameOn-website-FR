// VARIABLES
const modalForm = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeButton = document.querySelector(".close");






// ouverture de la modale au clic sur le bouton
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// function pour ouvrir la modale avec ajout d'une class "opened-modal"
function launchModal() {
  modalForm.classList.add("opened-modal")
}

//fermeture de la modale au clic sur la croix

closeButton.addEventListener("click", closeModal)

// function pour fermer la modale
function closeModal() {
  modalForm.classList.remove("opened-modal")
}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}