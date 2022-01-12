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

// exemple pour des messages personnalisés
/*const nameInput = document.querySelector('input');

nameInput.addEventListener('input', () => {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () => {
  if (nameInput.value === '') {
    nameInput.setCustomValidity("Veuillez saisir votre nom d'utilisateur !");
  } else {
    nameInput.setCustomValidity("Un nom d'utilisateur ne peut contenir que des lettres minuscules et majuscules, veuillez réessayer");
  }
});*/

let displayError = true;
let inputName = document.getElementsById("");

function displayError(inputName, errorMessage) { // exemple: displayError('first', 'Le prénom n'est pas conforme')
  if (displayError) {
    document.getElementsById(inputName);// REP: le problème ici c'est que tu vas tjs récupérer le 1er élément avec class="formData" — hors ce que tu veux c'est récupérer celui où il y a effectivement une erreur
    document.setAttribute("data-error-visible", true);
    document.setAttribute("data-error", errorMessage);
  } else {
    document.getElementsById(inputName);
    document.removeAttribute("data-error-visible", true);
    document.removeAttribute("data-error", errorMessage);
  }
}
// REP: il te faudra un 2nd attribut “data-error“ avec comme valeur le texte de l'erreur
// Dans l'idée ça serai de créer une fonction qui modifie le comportement de data en data-error, de récupérer cette fonction et de l'utiliser dans les différent inputs et aprés d'y rajouter un texte en HTML

// first name : il y a déjà un minimum de caractère sur l'HTML (peut être le récupérer pour la validation final ?) donc juste vérifier que ce n'est pas un champ vide
// lien vidéo YouTube : https://www.youtube.com/watch?v=JmbZBZhOtl8
// REP: l'attribut minlength en HTML c'est bien mais cela ne te permet pas de styliser l'erreur, c'est pour ça qu'ici on te demande de le faire en js
let myregex = /^[a-zA-Z\s]+$/;

// evenement pour le comportement de l'input en cas d'erreur ou de validation
first.addEventListener("input", function () {
  if (first.value.trim() >= 2) {
    Element.setAttribute("data-error", false);
  }
  else {
    displayError("first", "le nom doit comporter minimum 2 caractères");
    e.preventDefault();
  }
});

/*input.addEventListener("input", function () {
  // test si mon input est valide

  // Si oui on ne fait rien


  // Si c'est faux on affiche une erreur
  displayError(inputName, errorMessage)
})*/

// last name : pas de minimum de caractère dans l'HTML, vérifier que ce n'est pas un champ vide

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
