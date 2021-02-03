

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modal = document.getElementById('modal');

// Fonction pour ouvrir et fermer la modal
function modalDisplay(displayStyle) {
  modal.style.display = displayStyle 
}

// Fonction pour que lorsque l'utilisateur clique sur le 
// background la modal se ferme

window.onclick = function(event) {
  if (event.target == modal) {
     modal.style.display = 'none';
   }
 }

// Alerte lorsque l'utilisateur envoie les informations
function validate() {
  let errorFund = this.getErrors()
  if(errorFund) {
    return false
  }
  else {
    alert('Merci ! Votre réservation a été reçue.')
    return true
  }
}

// Fonction pour les champs de la modal

function getErrors() {
  let errorFund = false;
  let first = document.getElementById('first').value;
  let last = document.getElementById('last').value;
  let email = document.getElementById('email').value;
  let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  if (first.length < 2 ) {
    errorFund = true
    document.getElementById("firstErrorMsg").textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
  } 
  if (last.length < 2 ) {
    errorFund = true
    document.getElementById("lastErrorMsg").textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
  }
  if (email.value.match(mailFormat)) {
    errorFund = true
    document.getElementById("emailErrorMsg").textContent = 'Veuillez entrer un email valide';
  }
  return errorFund
}
