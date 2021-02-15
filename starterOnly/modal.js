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

// Validation du champ Prénom
// le champ n'est pas vide
// le champ n'est pas remplis de " "
// le champ contient 2 caractères minimum
// le champ accepte des mots composés séparés par "-" ; " ")
// le champ n'accepte pas 2 éléments de séparation consécutifs
// casse indifférente
function strUcFirst(a){return (a+"").charAt(0).toUpperCase()+a.substr(1);}
function firstNameValid(value) {
  return /^[\w\sàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+[-\s\w\sàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{2,}$,i/.test(value);
}

// Récupérer la valeur des champs à chaque modification
input.addEventListener('input', function(event) {
  output.innerHTML = event.target.value;
});

// Validation du champ Nom
// le champ n'est pas vide
// le champ n'est pas remplis de " "
// le champ contient 2 caractères minimum
// le champ accepte des mots composés séparés par "'" ; "-" ; " ")
// le champ n'accepte pas 2 éléments de séparation consécutifs
// casse indifférente
function strUcFirst(a){return (a+"").charAt(0).toUpperCase()+a.substr(1);}
function lastNameValid(value) {
  return /^[\w\sàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+[-'\s\w\sàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{2,}$,i/.test(value);
}

// Validation du champ email (from W3C)
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

// Validation de la date de naissance
// format jj/mm/aaaa
function birthdateValid(date) {
  return /^(0[1-9]|[1-2]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(date);
}

// Validation du nombre de participations
// quantité comprise entre 0 et 99
function quantityValid(value) {
  return /^[0-9]$|^[1-9][0-9]$|^(99)$/.test(value);
}

// Validation de la sélection d'une ville (bouton radio)
function locationValid() {
	const n = location.length;
 	for (const i=0;i<n;i++) {

		if (location[i].checked) {
      return false;
		}
	}
  return true;
}

// Validation du formulaire
// solution 1
/*const formValid = document.getElementById("submit");
formValid.addEventListener("click", validation)
function validation(event) {
  event.preventDefault();
}*/

// solution 2
document.getElementsByName("reserve").addEventListener("submit"), function(e)
 {
   e.preventDefault
 }
