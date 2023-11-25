
// Cette fonction permet que quelle que soit la classe attachée à l'Id "myTopnav" , on y ajoute la classe 
// "responsive" permettant ainsi de créer des sélecteurs spécifiques lorsqu'il s'agit de traiter le 
// menu de navigation dans des écrans inférieurs à 768px , en outre , elle permet que le nom de la classe
// attachée à myTopnav soit toujours égal à "topnav" . 

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements. Ici on récupère les informations du DOM (grace aux querySelector) sous forme de classe 
// et on en fait des constantes, que l'on ré-utilise dans les fonctions de lancement.

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.querySelectorAll(".btn-submit");
const closeBtn = document.querySelectorAll(".close");
const closeBtn2 = document.querySelectorAll(".close-reset");
const closeBtn3 = document.querySelectorAll(".btn-exit");
const modalbg2 = document.querySelector(".bground2");

// Ci-dessous, je déclare - sans attribuer de valeur quelconque - les variables booléennes qui vont 
// contenir les résultats des fonctions de vérification. Elles vont faire en sorte que la fonction renvoie
// "true" ou "false". 

let rightFirstName;
let rightLastName;
let rightMail;
let rightDate;
let rightNumber;
let rightRadio;
let rightCu;

// Fonctions de lancement et de fermeture déclenchées par un clic.
//Ici j'ai rajouté la fonction launchSubmit, qui doit être lancée "pour chaque" bouton Submit, 
//cette fonction est détaillée plus bas. J'ai aussi ajouté les deux dernières fonctions de fermeture.

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
submitBtn.forEach((btn) => btn.addEventListener("click", launchSubmit));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
closeBtn2.forEach((btn) => btn.addEventListener("click", function () {
  document.forms[0].reset();
  closeModal();
}));
closeBtn3.forEach((btn) => btn.addEventListener("click", function () {
  document.forms[0].reset();
  closeModal();
}));

// Fonctions de lancement et de fermeture pour ouvrir et fermer le bloc du formulaire.

function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
  modalbg2.style.display = "none";
}


// Fonctions conditionnelles

// Ici, la fonction vérifie si mon prénom comprend au moins deux caractères. L'autre condition est une regex 
// visant à vérifier si la chaîne de caractères saisie dans le champ comprend au moins une lettre. 
// En effet sans point d'exclamation, la regex ne doit inclure que des valeurs numériques. Le point
// d'exclamation devant "myFirstName" signale l'inverse donc "pas que des valeurs numériques" ce qui évite
// par exemple qu'une date soit saisie au lieu d'un véritable prénom.
// Si les deux conditions sont remplies, la fonction doit renvoyer "true", sinon, elle doit renvoyer "false"

// Pour toutes les fonctions conditionelles qui vont suivre : après que la variable de vérification a renvoyé
// true ou false, les attributs des input changent , notamment au niveau du statut des erreurs . Une réponse
// "false" aura un statut d'erreur "true" et "vice versa". Dans le cas d'une variable "true", on pourrait 
// ne rien changer au statut d'erreur par défaut (false). Mais si jamais on se trompe, puis que l'on se 
// corrige , il faut bien remettre à chaque fois le statut d'erreur à "false".

function isMyFirstNameTrue(myFirstName) {
  if ((myFirstName.length >= 2) && (!myFirstName.match(/^[\d]+$/))) {
    rightFirstName = true;
    document.getElementById("formData1").setAttribute("data-error", "false");
    document.getElementById("formData1").setAttribute("data-error-visible", "false");
  } else {
    rightFirstName = false;
    document.getElementById("formData1").setAttribute("data-error", "Veuillez saisir un prénom valide");
    document.getElementById("formData1").setAttribute("data-error-visible", "true");
  }

}

// Même principe avec le nom de famille que pour la fonction du prénom.

function isMyLastNameTrue(myLastName) {
  if ((myLastName.length >= 2) && (!myLastName.match(/^[\d]+$/))) {
    rightLastName = true;
    document.getElementById("formData2").setAttribute("data-error", "false");
    document.getElementById("formData2").setAttribute("data-error-visible", "false");
  } else {
    rightLastName = false;
    document.getElementById("formData2").setAttribute("data-error", "Veuillez saisir un nom valide");
    document.getElementById("formData2").setAttribute("data-error-visible", "true");
  }

}

// Ici, une seule condition de vérification de l'adresse e-mail qui est une regex. Celle-ci est délimitée 
// par des parenthèses et des "slashs". Puis elle commence par "^" et se termine par "$" qui signale la 
// fin de la ligne. Cette regex se divise en trois blocs délimités par des crochets : ce qui se situe avant 
// l'arobase ("@"), ce qui se situe entre l'arobase et le point , et l'extension du nom de domaine après le
// point . Dans chacun des trois blocs, nous avons le panel des caractères autorisés (ex : a-z pour dire que 
// toutes les lettres sont autorisées de a à z). Juste après le crochet fermant, on exprime la quantité. Le 
// "+" signifie : "un caractère ou plus". Les points ayant une signification particulière en regex, ils sont 
// "échappés" par un "antislash".

function isMailTrue(myMail) {
  if (myMail.match(/^[a-zA-Z0-9_+\.]+@[a-zA-Z0-9]+\.[a-z]+$/)) {
    rightMail = true;
    document.getElementById("formData3").setAttribute("data-error", "false");
    document.getElementById("formData3").setAttribute("data-error-visible", "false");
  } else {
    rightMail = false;
    document.getElementById("formData3").setAttribute("data-error", "Veuillez saisir une adresse e-mail valide");
    document.getElementById("formData3").setAttribute("data-error-visible", "true");
  }

}

// Ici , on fait appel à une méthode (new Date ()) pour toujours obtenir la date d'aujourd'hui, qui sera 
// exprimée en timespan. Le type "date" de notre champ nous permet de saisir une date facilement. Mais cette 
// date ne s'exprime pas en timespan , nous devons donc la convertir avec la méthode Date.parse, en passant 
// myDate (date saisie par l'utilisateur), comme paramètre , cette variable devient myFinalDate . Finalement, 
// il suffit de comparer les deux dates obtenues pour que la fonction renvoie "true" seulement si la date 
// saisie est antérieure à la date d'aujourd'hui.

function isDateTrue(myDate) {

  const todaysDate = new Date();
  const myFinalDate = Date.parse(myDate);
  if (todaysDate > myFinalDate) {
    rightDate = true;
    document.getElementById("formData4").setAttribute("data-error", "false");
    document.getElementById("formData4").setAttribute("data-error-visible", "false");
  } else {
    rightDate = false;
    document.getElementById("formData4").setAttribute("data-error", "Veuillez saisir une date de naissance valide");
    document.getElementById("formData4").setAttribute("data-error-visible", "true");
  }


}

// Ici , le champ est particulier puisque si aucun nombre n'était saisi, la fonction renvoyait "true".
// Il a donc fallu rajouter une condition n'acceptant pas de champ vide. Le reste de la fonction est 
// plutôt simple , il s'agit de saisir un nombre entre 0 et 99 pour que la fonction renvoie "true". 
// L'objet "Number" précède (myNumber) pour être certain que la valeur saisie soit un "number" et non une 
// chaîne de caractères.

function isNumberTrue(myNumber) {
  if (myNumber === "") {
    rightNumber = false;
    document.getElementById("formData5").setAttribute("data-error", "Veuillez saisir un nombre correct");
    document.getElementById("formData5").setAttribute("data-error-visible", "true");
  } else {
    if (((Number(myNumber) > -1) && (Number(myNumber) < 100))) {
      rightNumber = true;
      document.getElementById("formData5").setAttribute("data-error", "false");
      document.getElementById("formData5").setAttribute("data-error-visible", "false");
    } else {
      rightNumber = false;
      document.getElementById("formData5").setAttribute("data-error", "Veuillez saisir un nombre correct");
      document.getElementById("formData5").setAttribute("data-error-visible", "true");
    }
  }

}

// Voici encore une fonction simple , il s'agit simplement de vérifier qu'une ville a 
// été cochée, donc que l'une des 6 locations soit checked. Voilà pourquoi l'opérateur logique entre 
// chaque location est || ("ou").

function isRadioChecked() {
  if ((location1.checked) || (location2.checked) || (location3.checked) || (location4.checked) ||
    (location5.checked) || (location6.checked)) {
    rightRadio = true;
    document.getElementById("formData6").setAttribute("data-error", "false");
    document.getElementById("formData6").setAttribute("data-error-visible", "false");
  } else {
    rightRadio = false;
    document.getElementById("formData6").setAttribute("data-error", "Veuillez choisir une ville");
    document.getElementById("formData6").setAttribute("data-error-visible", "true");
  }

}

// Voici la dernière fonction. Elle concerne la checkbox1 (la checkbox2 étant facultative, acune condition
// n'y a été rattachée). Il s'agit simplement de vérifier si la case des conditions d'utilisation a été 
// cochée. 

function isCuChecked() {
  if (checkbox1.checked) {
    rightCu = true;
    document.getElementById("formData7").setAttribute("data-error", "false");
    document.getElementById("formData7").setAttribute("data-error-visible", "false");
  } else {
    rightCu = false;
    document.getElementById("formData7").setAttribute("data-error", "Veuillez lire et accepter les conditions d'utilisation");
    document.getElementById("formData7").setAttribute("data-error-visible", "true");
  }

}

// Fonction principale au clic du bouton Submit ("C'est parti", après le formulaire). 

// Cette grande fonction en appelle d'autres plus petites. Cela se fait en deux temps : 1) On déclare une 
// variable qui va récupérer la valeur d'un élément du DOM après un querySelector 
// ((".firstname").value correspond à la valeur que tout utilisateur rentrera dans le champ 
// "Prénom" du formulaire). 2) On appelle une fonction conditionnelle (comme isMyFirstNameTrue), dans 
//laquelle on passe comme paramètre la variable déclarée juste au dessus.
// Ce procédé en deux étapes se répète pour toutes les fonctions conditionnelles qui correspondent chacune à
// un champ du formulaire.
// Il s'agit de vérifier si toutes les fonctions renvoient "true" avant de pouvoir envoyer le bloc de 
// confirmation de l'inscription sur GameOn.
// Le e.preventDefault() empêche que le bouton "submit" se comporte comme d'habitude, à savoir fermer 
// la pop-up puisque tout est valide , et revenir à la page d'accueil par défaut. 
// Alors que nous voulons qu'une pop-up de confirmation soit ouverte

function launchSubmit(e) {
  e.preventDefault();
  const firstNameData = document.querySelector(".firstname").value;
  isMyFirstNameTrue(firstNameData);
  const lastNameData = document.querySelector(".lastname").value;
  isMyLastNameTrue(lastNameData);
  const mailData = document.querySelector(".mailadress").value;
  isMailTrue(mailData);
  const dateData = document.querySelector(".dateofbirth").value;
  isDateTrue(dateData);
  const numberData = document.querySelector(".t-number").value;
  isNumberTrue(numberData);
  const checkData1 = document.querySelectorAll(".checkbox-input").value;
  isRadioChecked();
  const checkData2 = document.querySelectorAll(".checkbox-input").value;
  isCuChecked()

  // La dernière étape de la fonction ci-dessous vérifie que toutes les conditions plus haut ont été validées
  // si toutes les variables sont vraies alors on passe du formulaire au message de confirmation.
  // Pour cela , on fait disparaître le premier bloc "modalbg", pour faire apparaître le deuxième blog
  // "modalbg2".

  if ((rightFirstName) && (rightLastName) && (rightMail) &&
    (rightDate) && (rightNumber) && (rightRadio) && (rightCu)) {
    modalbg.style.display = "none";
    modalbg2.style.display = "block";
  }

}

