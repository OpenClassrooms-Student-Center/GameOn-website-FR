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

// Validation

// Validation du formulaire
const formValid = document.getElementById("submit");

// Validation du champ Prénom
// le champ n'est pas vide
// le champ n'est pas remplis de " "
// le champ contient 2 caractères minimum
// le champ accepte des mots composés séparés par "-" ; " ")
// le champ n'accepte pas 2 éléments de séparation consécutifs
// casse indifférente
const firstNameValid = /^[\w\sàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+[-\s\w\sàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{2,}$,i/;
function strUcFirst(a){return (a+"").charAt(0).toUpperCase()+a.substr(1);}
const missFirstName = document.getElementById("missFirst")

// Validation du champ Nom
// le champ n'est pas vide
// le champ n'est pas remplis de " "
// le champ contient 2 caractères minimum
// le champ accepte des mots composés séparés par "'" ; "-" ; " ")
// le champ n'accepte pas 2 éléments de séparation consécutifs
// casse indifférente
const lastNameValid = /^[\w\sàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+[-'\s\w\sàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{2,}$,i/;
function strUcFirst(a){return (a+"").charAt(0).toUpperCase()+a.substr(1);}

// Validation du champ email (from W3C)
// le champ n'est pas vide
// le champ n'est pas remplis de " "
// tout caractère ASCII accepté
// espaces et points non acceptés en début ou fin de saisie et si répétés côte à côte
// le champs contient strictement 1 "@" et 1 "."
// le nom de domanaine accepte
// casse indifférente
const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@{1}[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Validation de la date de naissance
// format jj/mm/aaaa
const birthdateValid = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

// Validation du nombre de participations
// quantité comprise entre 0 et 99
const quantityValid = /^[0-9]$|^[1-9][0-9]$|^(99)$/;

// Validation de la sélection d'une ville (bouton radio)
const missLocation = document.getElementById("missLocation")
function locationValid() {
	const n = location.length;
 	for (const i=0;i<n;i++) {

		if (location[i].checked) {
      return false;
		}
	}
  return true;
}

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