function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//#1 Fermer la modale
//Ajouter la fonctionnalité au bouton (x): 
// DOM Elements
const closeBtn = document.querySelector(".close");
const closeModal = function(){
  modalbg.style.display="none";
};
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal)

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//问题： 另一个方法为什么不可以？ 
//const closeBtn = document.getElementsByClassName(".close");为什么不可以？
// closeBtn.onclick = function(){//  当点击X时，表格关闭；=>为什么不可以；
//  modalbg.style.display="none";}

//#2 Implémenter entrées du formulaire: 
//(1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. 
//Corriger le code HTML quand nécessaire.使用现有代码中的“for”和“id”属性将标签链接到 HTML 中的条目。必要时更正 HTML 代码。



//(2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire : Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
//Les données doivent être saisies correctement :
//(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
//(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
//(3) L'adresse électronique est valide.
//(4) Pour le nombre de concours, une valeur numérique est saisie.
//(5) Un bouton radio est sélectionné.
//(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
//Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.