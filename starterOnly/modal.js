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
// Targeting the close button
const closeModalBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//Close modal event
closeModalBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Cll the function to close the modal
function closeModal() {
  modalbg.style.display = "none";
}

// CONSIGNES et TODO LIST
// 2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :

// Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
//Mettre en place une fonction qui vérifiera un par un les champs du formulaire.
//Ils devront tous être conforme et bien remplis, sinon = echec

// Les données doivent être saisies correctement :
// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
//Faire une condition vérifié si longueur prénom >=2 && not null
// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
//Idem, faire une condition vérifié si longueur nom >=2 && not null
// (3) L'adresse électronique est valide.
//Voir si il existe une fonction native pour les email, sinon créer une REGEX
// (4) Pour le nombre de concours, une valeur numérique est saisie.
//Condition, vérifier si le nombre est composé de chiffres
// (5) Un bouton radio est sélectionné.
//condition, vérifier tout les boutons, si il y en a un checké
// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
//Consigne peu claire, demander au tuteur, je laisse comme ça?
// Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.