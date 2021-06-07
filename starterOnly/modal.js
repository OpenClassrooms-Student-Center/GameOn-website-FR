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
const modalClose = document.querySelectorAll(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("inscription");

/* Expressions Régulières*/

let emailRegex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/ ;
let nameRegex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
let numberRegex = /^[0-9 \-]+$/;

/* boléen */
let isValid = true;

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

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
/* close modal form */
function closeModal() {
  modalbg.style.display = "none";
}

/* generate message */
generateErrorMessage();

/* Générer les messages d'erreurs */
function generateErrorMessage(){
  for (i = 0; i < 7; i++) {
    formData[i].dataset.error = errorMessage[i]; 
 }
}

/* verify form validity */
function validate(e) {
  textValid()
  citiesValid();
  isConditionSelected();

  if (check() == false) {
    e.preventDefault();
  }
  else {
    closeModal();
    alert("super!");
  }
}

/* fonctions éléments formulaire */
function textValid() {
  
  for (i = 0; i < 5; i++) {
    if (regexList[i].exec(form.elements[i].value) == null) {
      form.elements[i].dataset.error = form.elements[i].value; 
      formData[i].dataset.errorVisible = "true";
      form.elements[i].dataset.errorVisible = "true";
    }
    else {
      formData[i].dataset.errorVisible = "false";
      form.elements[i].dataset.errorVisible = "false";
    } 
 }
}

function citiesValid(){
  if (isCheckboxSelected() == false){
    formData[5].dataset.errorVisible = "true";
    return false;
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
    return false;
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
    if (formData[i].dataset.errorVisible = "true"){
      return false
    }
  }
}


