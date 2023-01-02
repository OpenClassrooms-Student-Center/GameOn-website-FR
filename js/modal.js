// Je récupère les évents du DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.getElementsByClassName("close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalbg.style.add(".active");
}

// Fonction qui ferme la modale
// Je sélectionne le background de ma modale et lui applique un display none pour le masquer
function closeModal() {
  modalbg.style.display = "none";
};

// Je récupère mon élément et je déclenche la fonction closeModal au click
// La croix est formée d'un before/after, je sélectionne le premier élement de mon tableau (before)
modalCross[0].addEventListener ("click", closeModal);