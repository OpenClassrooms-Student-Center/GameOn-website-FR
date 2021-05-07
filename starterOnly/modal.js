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
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
 
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
// #2 TO DO: implement form entries
 
 // DOM elements
//  const form = document.forms["reserve"];
const form = document.getElementById("reserve");
//  const firstName = document.getElementById("first");
//  const lastName = document.getElementById("last");
//  const eMail = document.getElementById("email");
//  const birthDate = document.getElementById("birthdate");
//  const quantity = document.getElementById("quantity");
//  const listLocation = document.querySelectorAll('input[type="radio"]');
 const btnSubmit = document.getElementById('btnSubmit');
 const checkRadio = document.querySelectorAll('input[type="radio"]');
 const checkbox = document.querySelectorAll('input[type="checkbox"]');
 const inputs = form.getElementsByTagName('input');

// valide si prenom n'est pas vide et au mini 2 caractères
function validateFirst(){
	return (inputs["first"].value !== '' && inputs["first"].value.length >= 2);
}

// valide si nom n'est pas vide et au mini 2 caractères
function validateLast(){
	return (inputs["last"].value !== '' && inputs["last"].value.length >= 2);
}

// valide syntaxe dans champ email
function validateEmail(){
	return (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(inputs["email"].value));
}

// valide syntaxe dans champ date de naissance
function validateDate(){
	return (/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(inputs["birthdate"].value));
} 

// valide si ville cochée
function validateRadio(){
	for (radio of checkRadio){
		if(radio.checked)
			return true;
			break;
	}
}

// valide si conditions d'utilisations cochée
function validateCheckbox1(){
	return (checkbox[0].checked);
}

// vérification des contraintes lors de la validation du formulaire
form.addEventListener("submit", function() {
	//cré un tableau des contraintes valides et non valides	
	const inputsItems = [validateFirst(),validateLast(),validateEmail(),validateDate(),validateRadio(),validateCheckbox1()];

	let isValid = true;

	//parcours du tableau des contrainte, sort de la boucle à la premiere valeur false et passe isValid à false
	for (item of inputsItems){
		if(item = false)
			isValid = false;
			break;
	}

	console.log(isValid);

});