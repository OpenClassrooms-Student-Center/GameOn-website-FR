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

// Gestion des erreurs du formulaire

const checkBox = document.getElementById ('checkbox1')
const firstError = document.getElementById ('first-error');
const lastError = document.getElementById ('last-error');
const emailError = document.getElementById ('email-error');
const birthdateError = document.getElementById ('birthdate-error');
const quantityError = document.getElementById ('quantity-error');
const locationError = document.getElementById ('location-error');
const validationError = document.getElementById ('validation-error');

//  Traitement du formulaire

function validate () {

  // Vérification du prénom
  let firstValidate;

  if (!firstname.value.match(/^[a-z ,.'-]+$/i) || firstname.value == ' ' || firstname.value == null || firstname.value.length < 2) {
    firstError.innerText = 'Veuillez renseigner 2 caractères ou plus pour le champ du Prénom.';
    firstError.style.color = 'red';
    firstError.style.fontSize = '0.8rem';
    firstError.style.marginTop = '10px';
    firstError.style.border = 'solid red 2px';
  } else {
    firstError.style.display = 'none';
    firstError.style.border = 'none';
    firstValidate = true;
  };

  // Vérification du nom
  let lastValidate;

  if (!lastname.value.match(/^[a-z ,.'-]+$/i) || lastname.value == ' ' || lastname.value == null || lastname.value.length < 2) {
    lastError.innerText = 'Veuillez renseigner 2 caractères ou plus pour votre nom de famille.';
    lastError.style.color = 'red';
    lastError.style.fontSize = '0.8rem';
    lastError.style.marginTop = '10px';
    lastError.style.border = 'solid red 2px';
  } else {
    lastError.style.display = 'none';
    lastError.style.border = 'none';
    lastValidate = true;
  };


};