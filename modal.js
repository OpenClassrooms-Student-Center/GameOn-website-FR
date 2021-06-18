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
const modalbg2 = document.querySelector(".bground2");
const modalClose = document.querySelectorAll(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("inscription");
const form2 = document.getElementById("congratulations");

/* Expressions Régulières*/

let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let nameRegex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
let numberRegex = /^[0-9 \-]+$/;

/* listes */
let errorMessage = ["Entrez un prénom valide!",
"Entrez un nom valide!","Entrez un email valide!","veuillez insérer une date",
"veuillez insérer un chiffre!","selectionnez au moins une ville!",
"Veuillez accepter les conditions!"];
let regexList = [nameRegex,nameRegex,emailRegex,numberRegex,numberRegex];

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
/* close modal event */
modalClose.forEach((close) => close.addEventListener("click", closeModal));

/* submit form event */
form.addEventListener("submit", validate);

/* close modal2 form */
form2.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function launchModal2() {
  modalbg2.style.display = "block";
}
/* close modal form */
function closeModal() {
  modalbg.style.display = "none";
  modalbg2.style.display = "none";
}
/* verify form validity */
function validate(e) {
  generateErrorMessage();
  textValid();
  citiesValid();
  isConditionSelected();
  if(check() == false) {
    e.preventDefault();
  }
  else{
    e.preventDefault();
    modalbg.style.display = "none";
    launchModal2();
  }
}
/* Générer les messages d'erreurs */
function generateErrorMessage(){
  for (i = 0; i < 7; i++) {
    formData[i].dataset.error = errorMessage[i]; 
 }
}
/* fonctions éléments formulaire */
function textValid() {
  for (i = 0; i < 5; i++) {
    if (regexList[i].exec(form.elements[i].value.trim()) == null) {
      formData[i].dataset.errorVisible = "true";
    }
    else {
      formData[i].dataset.errorVisible = "false";
    } 
 }
}
/* vrify cities selected */
function citiesValid(){
  if (isCheckboxSelected() == false){
    formData[5].dataset.errorVisible = "true";
  }
  else {
    formData[5].dataset.errorVisible = "false";
  }
}

/* verify condition box selected */
function isConditionSelected(){
  if (document.getElementById('checkbox1').checked){
    formData[6].dataset.errorVisible = "false";
  }
  else {
    formData[6].dataset.errorVisible = "true";
  }
}

/* verify checkbox checked */

function isCheckboxSelected(){
  for (i=1; i<7; i++){
    if(document.getElementById('location'+i).checked) {
      return true;
    }
  }
return false
}
function check () {
  for ( i = 0 ; i<7; i++){
    if (formData[i].dataset.errorVisible == "true"){
      return false
    }
  }
}


