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
const close = document.querySelector(".close");
const formGlobal = document.getElementById("formGlobal");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
close.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";}

/*******************************DECLARATION DES VARIABLES POUR LA VALIDATION **********************/

let erreur;
let first = document.getElementById('first');
let last = document.getElementById('last');
let mail = document.getElementById('email');


//TEST DE LA LONGUEUR DU CHAMP NOM ET PRENOM
function testFirstAndLast(input){
  if(input.length<2){
    return false
  }else{
    return true
  }
};

//TEST DE LA VALIDITE DE L EMAIL
function testMail(input){
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value)
};

// INJECTION DES ATTRIBUTS EN CAS DE PROBLEME
function setAtt(value){
  value.parentElement.setAttribute("data-error", erreur);
  value.parentElement.setAttribute("data-error-visible", "true");
}

// SUPRESSION DES ATTRIBUTS EN CAS DE PROBLEME
function removeAtt(value){
  value.parentElement.removeAttribute("data-error");
  value.parentElement.removeAttribute("data-error-visible");
}

// FONCTION DE TEST DU PRENOM
function testFirstName(){
  if(testFirstAndLast(first.value)){
    removeAtt(first);
    return true
  }else{
    erreur = "veuillez entrer un prénom de 2 caractères minimum";
    setAtt(first)
    return false
  }
};

//FONCTION DE TEST DU NOM
function testLastName(){
  if(testFirstAndLast(last.value)){
    removeAtt(last);
    return true
  }else{
    erreur = "veuillez entrer un nom de 2 caractères minimum";
    setAtt(last)
    return false
  }
};

// FONCTION DE TEST DU MAIL
function email(){
  if(testMail(mail)){
    removeAtt(mail);
    return true
  }else{
    erreur = "veuillez entrer un email valide"
    setAtt(mail);
    return false;
  }
}

// VALIDATION DU FORMULAIRE
formGlobal.addEventListener("submit", function (e) {  
  
  testFirstName();
  testLastName();
  email();
  if (testFirstName() && testLastName() && email()) {
    alert('formulaire envoyé')
  } else {
    e.preventDefault()
  }
});
