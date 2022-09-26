function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// ÉLÉMENTS DOM

// Sélectionner l'élément "modale"
const modalbg = document.querySelector(".bground");
// Sélectionner l'élément "bouton" qui ouvre la modale
const modalBtn = document.querySelectorAll(".modal-btn");
// Sélectionner l'élément "formulaire"
const formData = document.querySelectorAll(".formData");
// Sélectionner l'élément "bouton" qui ferme la modale
const closeModalBtn = document.querySelector(".close");

// Lorsque l'utilisateur clique sur le bouton, ouvre la modale
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fonction d'ouverture de la modale
function launchModal() {
  modalbg.style.display = "block";
}

// Lorsque l'utilisateur clique sur le bouton, ferme la modale
closeModalBtn.addEventListener("click", closeModal);

// Fonction de fermeture de la modale
function closeModal() {
  modalbg.setAttribute("closing", "");
  
  modalbg.addEventListener("animationend", () => {
    modalbg.removeAttribute("closing");
    modalbg.style.display= "none";
  }, {once: true})
}
