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
const modalClose= document.querySelector("span.close");

//----Gestion de l'affichage de la modale-----//

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block"; //permet de 'rendre visible' la modale"
}

// close modal
modalClose.addEventListener("click",closeModal);
function closeModal() {
  modalbg.style.display = "none"; //permet de ne pas 'rendre visible' la modale"
};
