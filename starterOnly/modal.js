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
const myForm = document.querySelector("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
//const location = document.getElementsByName("location"); // Je dois créer un tableau je pense pour gérer tous les boutons de type radio "locations"
const checkbox1 = document.getElementById("checkbox1"); // Peux être qu'un tableau la aussi serai une bonne idée si je décide de rajouter "checkbox 2"


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); //les fonctions => n'ont pas de noms

// launch modal form
function launchModal() { //
  modalbg.style.display = "block";
}
// Close modal
closeBtn.addEventListener("click", closeModal)
function closeModal() {
  modalbg.style.display = "none";
}

//Fonction génèral pour l'ajout d'attribue
function displayError(input, errorMessage) {
  input.setAttribute("data-error-visible", true);
  input.setAttribute("data-error", errorMessage);

}
function removeError(input) {
  input.setAttribute("data-error-visible", false);
}

//let myregex = /^[a-zA-Z\s]+$/;

// Evenement pour le Prenom
first.addEventListener("input", function (e) {
  if (first.value.trim() >= 2) {
    removeError(e.target.parentNode);
  }
  else {
    displayError(e.target.parentNode, "le nom doit comporter minimum 2 caractères");
  }
});

// Evenement pour le Nom
last.addEventListener("input", function (e) {
  if (last.value.trim() >= 2) {
    e.target.parentNode.setAttribute("data-error-visible", false);
  }
  else {
    e.target.parentNode.setAttribute("data-error-visible", true);
    e.target.parentNode.setAttribute("data-error", 'le nom doit comporter minimum 2 caractères');
  }
});

//Evenement pour le Nombre de tournois
quantity.addEventListener("input", function (e) {
  if (quantity.value >= 0) {
    e.target.parentNode.setAttribute("data-error-visible", false);
  }
  else {
    e.target.parentNode.setAttribute("data-error-visible", true);
    e.target.parentNode.setAttribute("data-error", 'le nom doit comporter minimum 2 caractères');
  }
});


// email : adresse électronique valide

// birthdate : une valeur numérique est saisie et verifier la comparaison des date en JavaScript (voir l'objet "date")

// location : récupérer tous les éléments dans un tableau et créer une boucle qui vérifie qu'un bouton radio est bien sélectionné

// la case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée (vérifier la première case est coché en JavaScript)

// quand réponse fausse chercher "data error" & "data error visible = true" ! penser a ajouter un message d'erreur quand réponse fausse (voir p.3 du doc google)


/*form.addEventListener("submit", function (e) {
  e.preventDefault();

// validation du formulaire (idée : créer un tableau qui récupérer tous les validations et faire une boucle avec si if ok si erreur else afficher l'erreur), ajouter confirmation quand envoie (voir p.4 du doc google)

if (!first.value) {
  erreur = "Veuillez rentrer un prénom de plus de 2 caractères";
}

if (!last.value) {
  erreur = "Veuillez rentrer un nom de plus de 2 caractères";
}

if (!email.value) {
  erreur = "Veuillez rentrer une adresse valide";
}

if (!birthdate.value) {
  erreur = "Veuillez rentrer votre date de naissance";
}

if (!quantity.value) {
  erreur = "Veuillez sélectionner une ville ";
}

if (!location.value) {
  erreur = "Veuillez sélectionner une ville "; //pas a jour, comment faire pour récupérer le tableau ?
}

if (!checkbox1.value) {
  erreur = "Veuillez acceptez les termes des conditions";
}

if (erreur) {
  e.preventDefault();
  //aller chercher la const formData pour lui indiqué erreur et lui changé sa (classe/input ???)
  return false;
}

else {
  alert('Merci, votre inscription est bien prise en compte !');
}*/


// trouver un moyen de conserver les données du formulaire !
