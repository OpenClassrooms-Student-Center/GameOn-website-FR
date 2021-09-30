function editNav() {
  let x = document.getElementById("myTopnav");
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
const closeModalBtn = document.querySelectorAll(".close");  // LA CONSTANTE POINTE VERS l'element avec la class .close

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));
// Pour chaque "element" pointé dans: closeModalBtn à l'interieur du DOM
// => au clique sur cet élement, utilise la function closeModal()

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
    //lorceque closeModal() est appellé, on modifie la propriété display
    // de la classe(.bground) associé à la constante (modalbg) dans le DOM en 'none'




