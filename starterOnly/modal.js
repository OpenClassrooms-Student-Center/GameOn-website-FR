function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const closeBtn = document.querySelector(".close");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelector(".formData");


//#1 Fermer la modale: ajouter la fonctionnalité au bouton (x): 
// close modal form:
const closeModal = function(){
  modalbg.style.display="none";
};
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal)

//问题： 另一个方法为什么不可以？ 
//const closeBtn = document.getElementsByClassName(".close");为什么不可以？
// closeBtn.onclick = function(){//  为什么不可以?
//  modalbg.style.display="none";}

//#2 Implémenter entrées du formulaire: 
//(1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. 
//Corriger le code HTML quand nécessaire.使用现有代码中的“for”和“id”属性将标签链接到 HTML 中的条目。必要时更正 HTML 代码。
//(2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire: Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
//const submitButton = document.getElementById("#submitButton"); //===> "null"
//const submitButton = document.getElementsByClassName(".btn-submit"); ===> "Uncaught SyntaxError: Invalid or unexpected token", 为什么retour不一样？ 

//Les données doivent être saisies correctement :
//(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
const submitButton = document.querySelector(".btn-submit");
const firstNameInput = document.getElementById("#first");
const onSubmit = function(){
  //console.log("firstNameInput.value");
  if(firstNameInput.value.length<2){
    console.log('no valided name');
  }else{
    console.log('OK');
  }
}
formData.addEventListener("submit", onSubmit);//Uncaught TypeError: formData.addEventListener is not a function
submitButton.addEventListener("click", onSubmit); 

//(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
//(3) L'adresse électronique est valide.
//(4) Pour le nombre de concours, une valeur numérique est saisie.
//(5) Un bouton radio est sélectionné.
//(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
//Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.