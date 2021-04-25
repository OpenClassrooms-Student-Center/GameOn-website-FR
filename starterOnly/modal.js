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

// Ciblage du span avec class close
const btnCloseModal = document.querySelector("span.close");       

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fermeture de la modal 
const closeModal= () => modalbg.style.display = "none";

//Ajout d'un evenement clique sur le bouton pour appeler la fonction qui fermera la modal
btnCloseModal.addEventListener("click", closeModal);                        

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}






