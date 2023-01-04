// 1# Lancement et fermeture de la modale

// Je récupère les éléments de la modale dans le DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.getElementsByClassName("close");

// Je récupère mon élément et je déclenche la fonction launchModal au click
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fonction qui lance la modale
// Je sélectionne le background de ma modale et lui applique un display block pour l'afficher
function launchModal() {
  modalbg.style.display = "block";
}

// Je récupère mon élément et je déclenche la fonction closeModal au click
// La croix est formée d'un before/after, je sélectionne le premier élement de mon tableau (before)
modalCross[0].addEventListener ("click", closeModal);

// Fonction qui ferme la modale
// Je sélectionne le background de ma modale et lui applique un display none pour le masquer
function closeModal() {
  modalbg.style.display = "none";
};

// 2# Vérification des données du formulaire

// Je récupère les éléments du formulaire dans le DOM
const form = document.getElementById ('form');
const firstname = document.getElementById ('first');
const lastname = document.getElementById ('last');
const email = document.getElementById ('email');
const birthdate = document.getElementById ('birthdate');
const quantity = document.getElementById ('quantity');
const location1 = document.getElementById ('location1');
const location2 = document.getElementById ('location2');
const location3 = document.getElementById ('location3');
const location4 = document.getElementById ('location4');
const location5 = document.getElementById ('location5');
const location6 = document.getElementById ('location6');

const dateFormat = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
const numbers = /^[0-9]+$/;

// Validation du formulaire

const validate = document.getElementById ('checkbox1')
const errorFirst = document.getElementById ('error-first');
const errorLast = document.getElementById ('error-last');
const errorMail = document.getElementById ('error-mail');
const errorBirth = document.getElementById ('error-birth');
const errorQuantity = document.getElementById ('error-quantity');
const errorCity = document.getElementById ('error-city');
const errorValidation = document.getElementById ('error-validation');

//  Confirmation du formulaire

const confirmation = document.getElementById ('confirmation');
const confirmationButtonClose = document.getElementsByClassName('btn-close');