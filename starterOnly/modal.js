function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const bground = document.querySelector(".bground");
const closeModalBtn = document.querySelector(".close");

// html labels links
const formValid = document.getElementById("submit");
const input = document.getElementsByTagName("input");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locationChecked = document.getElementsByName("location");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeModalBtn.addEventListener("click", function(event) {
  event.preventDefault ();
  closeModal();
  });

// close modal form
function closeModal() {
  bground.style.display = "none";
}

// validation du formulaire
formValid.addEventListener("click", validation)
function validation(event) {
  event.preventDefault();
}

// Récupération de la valeur des champs à chaque modification
// Uncaught TypeError: input.addEventListener is not a function
// const L.18 utile ?
/*input.addEventListener("input", function(e) {
  output.innerHTML = e.target.value;
});*/

// Validité du champ Prénom
// le champ n'est pas vide
// le champ n'est pas remplis de " "
// le champ contient 2 caractères minimum
// le champ accepte des mots composés séparés par "-" ; " ")
// le champ n'accepte pas 2 éléments de séparation consécutifs
// casse indifférente
function strUcFirst(a){return (a+"").charAt(0).toUpperCase()+a.substr(1);}
function firstNameValid(value) {
  return /^[\A-Za-z\sàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+[-\s\A-Za-z\sàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{2,}$,i/.test(value);
}

// Validité du champ Nom
// le champ n'est pas vide
// le champ n'est pas remplis de " "
// le champ contient 2 caractères minimum
// le champ accepte des mots composés séparés par "'" ; "-" ; " ")
// le champ n'accepte pas 2 éléments de séparation consécutifs
// casse indifférente
function strUcFirst(a){return (a+"").charAt(0).toUpperCase()+a.substr(1);}
function lastNameValid(value) {
  return /^[\A-Za-z\sàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+[-'\s\A-Za-z\sàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{2,}$,i/.test(value);
}

// Validité du champ email (from W3C)
// le champ n'est pas vide
// le champ n'est pas remplis de " "
// tout caractère ASCII accepté
// espaces et points non acceptés en début ou fin de saisie et si répétés côte à côte
// le champs contient strictement 1 "@"
// le nom de domanaine accepte
// casse indifférente
function emailValid(value) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@{1}[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
}

// Validité de la date de naissance
// format jj/mm/aaaa
// année comprise entre 19.. et 20..
function birthdateValid(date) {
  return /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(date);
}

// Validité du nombre de participations
// quantité comprise entre 0 et 99
function quantityValid(value) {
  return /^[0-9]$|^[1-9][0-9]$|^(99)$/.test(value);
}

// Validité de la sélection d'une ville (bouton radio)
function locationValid() {
	const n = location.length;
 	for (const i=0;i<n;i++) {

		if (location[i].checked) {
      return false;
		}
	}
  return true;
}

// Message d'erreur
const errorFirstName = document.querySelector(".errorFirst");
const errorLastName = document.querySelector(".errorLast");
const errorEmail = document.querySelector(".errorEmail");
const errorBirthdate = document.querySelector(".errorBirthdate");
const errorQuantity = document.querySelector(".errorQuantity");
const errorLocation = document.querySelector(".errorLocation");

// Traitement des erreurs
document.forms["reserve"].addEventListener("submit", function(e) {

var error;
var inputs = this;

// Traitement générique des erreurs
for (var i = 0; i < inputs.length; i++) {
  console.log(inputs[i]);
  if (!inputs[i].value) {
    error = "Veuillez renseigner tous les champs";
    break;
  }
}

if (error) {
  e.preventDefault();
  document.getElementById("error").innerHTML = error;
  return false;
  } else {
  alert("Merci pour votre réservation !");
  }
});

// Traitement au cas par cas des erreurs
// Traitement des erreurs du champ "firstName"
// Solution 3
if (firstNameValid.test == false) {
  e.preventDefault();
  first.focus();
  errorFirstName.textContent = "Veuillez saisir au moins 2 lettres";
}

// Traitement des erreurs du champ "lastName"
if (lastNameValid.test == false) {
  e.preventDefault();
  first.focus();
  errorlastName.textContent = "Veuillez saisir au moins 2 lettres";
}

// Traitement des erreurs du champ "email"
if (emailValid.test == false) {
  e.preventDefault();
  first.focus();
  errorEmail.textContent = "Format incorrect";
}

// Traitement des erreurs du champ "birthDate"
// Le joueur doit avoir 13 ans minimum
const today = new Date();
const todayYear = today.getFullYear();
const cutOff13 = todayYear - 13;
if (birthdateValid.test == false) {
  e.preventDefault();
  first.focus();
  errorBirthdate.textContent = "Format incorrect";
} else if (birthdate >= cutOff13) {
  birthdateErrMsg.innerHTML = "Vous devez avoir au moins 13 ans pour participer";
}

// Traitement des erreurs du champ "quantity"
if (quantityValid.test == false) {
  e.preventDefault();
  first.focus();
  errorQuantity.textContent = "Veuillez saisir un nombre compris entre 0 et 99";
}

// Traitement des erreurs des champs "location"
if (locationValid == false) {
  e.preventDefault();
  first.focus();
  errorLocation.textContent = "Veuillez cocher une ville";
}

// Traitement de la case des conditions générales "checkbox1"
function checkCheckBox1(reserve) {
if (reserve.checkbox1.checked == false) {
  e.preventDefault();
  alert("Veuillez accepter les conditions");
    return false;
  }
}

// Solution 2
/*firstName.addEventListener('input', () => {
  firstName.setCustomValidity('');
  firstName.checkValidity();
});

firstName.addEventListener('invalid', () => {
  if(firstName.value.trim().length === 0) {
    firstName.setCustomValidity("Veuillez saisir votre nom");
  } else {
    firstName.setCustomValidity("Votre nom ne peut contenir que des lettres. Il peut être composé");
  }
});

// Solution 3

email.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ e-mail.
  if (email.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    error.innerHTML = ""; // On réinitialise le contenu
    error.className = "error"; // On réinitialise l'état visuel du message
  }
}, false);

form.addEventListener("submit", function (event) {
  // Chaque fois que l'utilisateur tente d'envoyer les données
  // on vérifie que le champ email est valide.
  if (!email.validity.valid) {

    // S'il est invalide, on affiche un message d'erreur personnalisé
    error.innerHTML = "J'attends une adresse e-mail correcte, mon cher !";
    error.className = "error active";
    // Et on empêche l'envoi des données du formulaire
    event.preventDefault();
  }
}, false);*/