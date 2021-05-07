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

	if (/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(inputs["birthdate"].value) == false){
		messageErreur = true;
	} 

	for (let i = 0; i < checkRadio.length; i++) {
		if (checkRadio[i].checked) {
			break;
		} else if (i = checkRadio.length - 1){
			messageErreur = true;
		}
	}

	if (!checkbox[0].checked){
		messageErreur = true;
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
		unchecked(checkRadio.length, checkRadio);
		unchecked(checkbox.length, checkbox);
		return false
	}
});

function clearValue(a , b){
	for (let i=0 ; i<a ; i++){
		b[i].value = '';
	}
}

function unchecked(a , b){
	for (let i=0 ; i<a ; i++){
		b[i].checked =  false;
	}
}