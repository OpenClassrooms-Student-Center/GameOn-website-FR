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
const closeModal = document.querySelector(".close");

//form elements
let firstNameForm = document.getElementById("first");
let lastNameForm = document.getElementById("last");
let emailForm = document.getElementById("email");
const loginForm = document.querySelector(".formData");
let quantityForm = document.getElementById("quantity");
// Définition de l'expression régulière pour l'email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const radioButtons = document.querySelector(".checkbox-input");
const conditionsCheckbox = document.querySelector(".checkbox2-label")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



//close modal event

closeModal.addEventListener("click", closeModalWindow)


// close modal form


function closeModalWindow() {
  modalbg.style.display = "none";
}


//prevent submit event
loginForm.addEventListener('submit', (event)=> {
  event.preventDefault(); //empêche l'envoi du formulaire par défaut
  console.log("le formulaire n'a pas été envoyé")
});


// sert à valider le prénom
function validateFirstName (firstNameForm) {
  if (firstNameForm.length < 2) {
    alert('Erreur : nombre de caractères inférieur à 2');
    console.log ('erreur');
  }
  else {
    alert('je valide');
    console.log('bien joué');

    
  }
}

// sert à valider le nom de famille
function validateLastName (lastNameForm) {
  if (lastNameForm.length < 2) {
    alert('erreur : nombre de caractères inférieur à 2');
    console.log('erreur');
  }
  else {
    alert('validé par la rue');
    console.log('bravissimo');
  }
}



// Vérification de la validité de l'email
function validateEmail (email) {
if (!emailRegex.test(email)) {
  // Si l'email n'est pas valide, affichage d'un message d'erreur
  alert("L'email saisi n'est pas valide");
}

else {
  alert('validé');
  console.log('parfait !')
}
}


//vérification de la saisie d'une valeur numérique
function validateQuantity (quantity) {
if (isNaN(quantityForm)) {
  alert('La valeur entrée ne correspond pas à un nombre');
}

else {
  console.log('la valeur renvoyée est bien un nombre');
}
}

//vérification de la sélection d'un bouton radio 

for (let i = 0; i < radioButtons.length; i++){
  if (radioButtons[i].checked){
    console.log("un bouton radio a été sélectionné")
    break
  }
}


//vérification de la sélection du checkbox conditions générales

function isConditionsChecked (conditionsCheckbox){
  if(!conditionsCheckbox.checked){
    alert('Veuillez accepter les conditions d\'utilisation');
    console.log('Veuillez accepter les conditions d\'utilisation');
  }
  else {
    console.log('conditions d\'utilisation accepté');
  }
}

// empêcher l'effacement des données quand la validation ne se fait pas 
loginForm.onsubmit = () => {

}