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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Fonction de validation d'email simple
function validateEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validate() {
  var firstName = document.getElementById('first').value;
  var lastName = document.getElementById('last').value;
  var email = document.getElementById('email').value;
  var birthdate = document.getElementById('birthdate').value;
  var quantity = document.getElementById('quantity').value;
  
  var locationRadios = document.getElementsByName('location');
  var selectedLocation = '';
  for (var i = 0; i < locationRadios.length; i++) {
    if (locationRadios[i].checked) {
      selectedLocation = locationRadios[i].value;
      break;
    }
  }

  var checkbox1 = document.getElementById('checkbox1');
  var checkbox2 = document.getElementById('checkbox2');

  // Validation des champs de saisie

  var errorMessages = {
    'first-error': firstName.length < 2 ? 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.' : '',
    'last-error': lastName.length < 2 ? 'Veuillez entrer 2 caractères ou plus pour le champ du nom.' : '',
    'email-error': !validateEmail(email) ? 'Veuillez saisir une adresse e-mail valide.' : '',
    'birthdate-error': birthdate === '' ? 'Vous devez entrer votre date de naissance.' : '',
    'quantity-error': isNaN(quantity) ? 'Veuillez saisir une valeur numérique pour le nombre de tournois.' : '',
  };

  // Afficher ou masquer les messages d'erreur
  for (var errorId in errorMessages) {
    var errorElement = document.getElementById(errorId);
    errorElement.textContent = errorMessages[errorId];
  }

  // Le formulaire est valide si tous les messages d'erreur sont vides
  var isValid = Object.values(errorMessages).every(function(message) {
    return message === '';
  });

  if (!isValid) {
    return false;
  }

  // Confirmation de la soumission réussie
  alert('Merci ! Votre réservation a été reçue.');

  // Créer un objet avec les données collectées
  var collectedData = {
    'First Name': firstName,
    'Last Name': lastName,
    'Email': email,
    'Birthdate': birthdate,
    'Quantity': quantity,
    'Location': selectedLocation,
    'Accept Conditions': checkbox1.checked,
    'Notify Events': checkbox2.checked,
  };

  // Afficher l'objet JSON dans la console
  console.log(JSON.stringify(collectedData));

  return true;
}








