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
 

form.addEventListener("submit", function(e) {

	let messageErreur;
 
	const inputs = this.getElementsByTagName('input');

	// Traitement générique
	if (!inputs["first"].value || inputs["first"].value.length < 2) {
		messageErreur = true ;
	}

	if (!inputs["last"].value || inputs["last"].value.length < 2) {
		messageErreur = true ;
	}

	if (!inputs["email"].value || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(inputs["email"].value) == false) {
		messageErreur = true ;
	}
 
	if (messageErreur) {
		e.preventDefault();
		document.getElementById("erreur").innerHTML = 'remplir tous les champs';
		return false;
	} else {
		e.preventDefault(true);
		document.getElementById("erreur").innerHTML = '';
		alert('Formulaire envoyé !');
		clearValue(5 ,inputs);
		return false
	}
});

function clearValue(a , b){
	for (let i=0 ; i<a ; i++){
		b[i].value = '';
	}
}