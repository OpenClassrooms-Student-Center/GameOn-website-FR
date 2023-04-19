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
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener("click", closeModal);
// Ajoute un évenement au Click sur le bouton Close et appel la fonction closeModal

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// création des constantes pour la récupération des éléments
const form = document.getElementById("myForm");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox = document.getElementById("checkbox1");
const checkedCity = document.getElementById("checked");

form.addEventListener("submit", (event) => {
  // stop le comportement par défaut du navigateur
  event.preventDefault();
  // j'appel ma fonction de validation des données
  validateForm();
});


// je créer la function error qui prend deux paramètres: l'élement et le message
function error(element, message) {
  // je viens récupérer l'élément du parent "formData"
  const formData = element.parentElement;
  // je créer une constante pour cibler l'endroit ou sera afficher le message
  const displayError = formData.querySelector(".errorMessage");
  // j'affiche le message d'erreur dynamiquement avec innerHTML
  displayError.innerHTML = message;
  // j'ajoute la class "error" au parent "formData"
  formData.classList.add("error");
  // je supprime la class "success" au parent "formData" si elle existe
  formData.classList.remove("success");
}

// ici la fonction success est presque identique, je ne récupère pas le message
// je créer la function success qui prend le paramètre: élement
function success(element) {
  const formData = element.parentElement;
  const displayError = formData.querySelector(".errorMessage");
  // je déclare que le innerHTML est une chaine de caractères vide pour supprimer un message d'erreur s'il existe
  displayError.innerHTML = "";
  // j'ajoute la class "success" au parent
  formData.classList.add("success");
  // je supprime la class "error" au parent si elle existe
  formData.classList.remove("error");
}


// je creer une fonction anonyme validateForm
const validateForm = () => {
  // j'attribut false et 0 pour les variables valide et data
  var valide = false;
  var data = 0;
  // je récupère tous les éléments qui ont la class "formData"
  const formData = document.querySelectorAll(".formData");
  // je créer une boucle pour passer sur chacun des éléments
  for (let i = 0; i < formData.length; i++) {
    // si la class .success est présente, data est incrémenté de 1
    if (formData[i].classList.contains("success")) {
      data += 1;
    }
    // si data est égale à la longueur de formData
    if (formData.length == data) {
      // je passe la variable valide à True
      valide = true;
      // et j'appel ma nouvelle modal : modalSuccess()
      modalSuccess();
    }
    // sinon je renvois vers la fonction validate
    else {
      validate();
    }
  }
};
