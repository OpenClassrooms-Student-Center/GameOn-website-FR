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
const myForm = document.getElementById('form'); // est-ce-que c'est le bon choix ou utiliser plus tot une const ? 

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

//function pour ajouter l'atribut a fromData je ne sais pas si c'est la bonne manière ??
//je dois trouver un moyen de sélectionner mon array et de lui appliquer a chaque paramètre faux la fonctions 'error' ?
formData.addEventListener("click", error));

function error() {
  if (error) {
    document
      .getElementsByClassName(".fromData")
      .setAttribute("data-error-visible", true);
  } else {
    document
      .getElementsByClassName(".fromData")
      .removeAttribute("data-error-visible");
  }
}

// Dans l'idée ça serai de créer une fonction qui modifie le comportement de data en data-error, de récupérer cette fonction et de l'utiliser dans les différent inputs et aprés d'y rajouter un texte en HTML

// first name : il y a déjà un minimum de caractère sur l'HTML (peut être le récupérer pour la validation final ?) donc juste vérifier que ce n'est pas un champ vide
// lien vidéo YouTube : https://www.youtube.com/watch?v=JmbZBZhOtl8
myForm.addEventListener("submit" function (e) {

  let inputFirst = document.getElementById('first');
  let myregex = /^[a-zA-Z\s]+$/;

  // Boucle pour le comportement de l'input en cas d'erreur ou de validation 
  inputFirst.addEventListener("input", function (e) {
    if (inputFirst.value.trim() == "") {
      let myError = document.getElementById('error'); // ce qui me fais créer un span avec comme ID error (pas la meilleur solution), il me manque un truc ici comment faire pour recuperer la fonctions de fromDataError ??!
      myError.innerHTML = "le champ prénom est requis";
      e.preventDefault();
    }
    else if (myregex.test(inputFirst.value) == false) {
      let myError = document.getElementById('error');
      myError.innerHTML = "le nom doit comporter minimum 2 caractères";
      e.preventDefault();
    }
  });


  // last name : pas de minimum de caractère dans l'HTML, vérifier que ce n'est pas un champ vide

  // email : adresse électronique valide

  // birthdate : une valeur numérique est saisie et verifier la comparaison des date en JavaScript (voir l'objet "date")

  // location : récupérer tous les éléments dans un tableau et créer une boucle qui vérifie qu'un bouton radio est bien sélectionné

  // la case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée (vérifier la première case est coché en JavaScript)

  // quand réponse fausse chercher "data error" & "data error visible = true" ! penser a ajouter un message d'erreur quand réponse fausse (voir p.3 du doc google)


  /*form.addEventListener("submit", function (e) {
    e.preventDefault();*/

  // validation du formulaire (idée : créer un tableau qui récupérer tous les validations et faire une boucle avec si if ok si erreur else afficher l'erreur), ajouter confirmation quand envoie (voir p.4 du doc google)
  let erreur;
  let first = document.getElementById('first');
  let last = document.getElementById('last');
  let email = document.getElementById('email');
  let birthdate = document.getElementById('birthdate');
  let quantity = document.getElementById('quantity');
  let location = document.getElementsByName('location'); // Je dois créer un tableau je pense pour gérer tous les boutons de type radio "locations"
  let checkbox1 = document.getElementById('checkbox1'); // Peux être qu'un tableau la aussi serai une bonne idée si je décide de rajouter "checkbox 2"

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
  }
});

// trouver un moyen de conserver les données du formulaire !
