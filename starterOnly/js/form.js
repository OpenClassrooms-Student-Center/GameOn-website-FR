// DOM Elements
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const tou = document.getElementById("checkbox1");
const validationBtn = document.getElementById("validationBtn");

//MESSAGES D'ERREUR
const firstnameErrorMessage = document.getElementById("firstnameErrorMessage");
const lastnameErrorMessage = document.getElementById("lastnameErrorMessage");
const emailErrorMessage = document.getElementById("emailErrorMessage");
const birthdateErrorMessage = document.getElementById("birthdateErrorMessage");
const quantityErrorMessage = document.getElementById("quantityErrorMessage");
const touErrorMessage = document.getElementById("touErrorMessage");

// VERIFIER LES INFOS DANS CHAQUES CHAMPS DU FORMULAIRE
//AU MOINS 2 CARACTERES DANS LE CHAMPS
function minTwoChar(value) {
	if (/^.{2,}$/.test(value)) {
		return true;
	} else {
		return false;
	}
}

// ADRESSE MAIL VALIDE
function emailValid(value) {
	if (/.+\@.+\..+/.test(value)) {
		return true;
	} else {
		return false;
	}
}

// FORCEMENT UN NOMBRE DANS LE CHAMP
function valueIsNumber(value) {
	if (/[0-9]/.test(value)) {
		return true;
	} else {
		return false;
	}
}

// DATE DE NAISSANCE OBLIGATOIRE
function dateNotEmpty(value) {
	if (value == "") {
		return false;
	} else {
		return true;
	}
}

// CONDITIONS D'UTILISATION BIEN COCHE
function touChecked() {
	if (tou.checked == true) {
		return true;
	} else {
		return false;
	}
}

// FONCTIONS SUR LES INPUTS
let activeInput = ""; // stock le type de l'input courant

// renvoi l'attribut dfe l'élément
function showAttribute(event) {
	let inputType = event.currentTarget.getAttributeNames();
	let value = event.target.value;
	for (let name of inputType) {
		value = event.currentTarget.getAttribute(name);
		if (name == "type") {
			activeInput = value;
			return value;
		}
	}
}

let idTextInput = ""; // stock l'ID de l'input courant 

//renvoi l'ID de l'élément
function showId(event) {
	let inputType = event.currentTarget.getAttributeNames();
	let value = event.target.value;
	for (let name of inputType) {
		value = event.currentTarget.getAttribute(name);
		if (name == "id") {
			idTextInput = value;
			return value;
		}
	}
}

// CHAMPS NON VALIDES PAR DEFAUT
let inputFirstName = false;
let inputLastName = false;
let inputEmail = false;
let inputBirthDate = false;
let inputNumber = false;
let inputCheckBox = false;

function errorDisplay(event) {
	let value = event.target.value;
	let element;
	switch (activeInput) {

		//Nom et Prénom de l'utilisateur qui ont bien 2 caractères minimum
		case "text":
			if (idTextInput == "first") {
				element = firstnameErrorMessage;
			} else if (idTextInput == "last") {
				element = lastnameErrorMessage;
			}

			minTwoChar(value);
			if (minTwoChar(value) == true) {
				this.parentElement.removeAttribute("data-error-visible");
				element.style.display = "none";
				if (element == firstnameErrorMessage) {
					inputFirstName = true;
				} else if (element == lastnameErrorMessage) {
					inputLastName = true;
				}
			} else {
				this.parentElement.setAttribute("data-error-visible", true);
				element.style.display = "block";
				if (element == firstnameErrorMessage) {
					inputFirstName = false;
				} else if (element == lastnameErrorMessage) {
					inputLastName = false;
				}
			}
			break;

		//adresse email valide
		case "email":
			if (emailValid(value) == true) {
				this.parentElement.removeAttribute("data-error-visible");
				emailErrorMessage.style.display = "none";
				inputEmail = true;
			} else {
				this.parentElement.setAttribute("data-error-visible", true);
				emailErrorMessage.style.display = "block";
				inputEmail = false;
			}
			break;

		//date de naissance
		case "date":
			if (dateNotEmpty(value) == true) {
				this.parentElement.removeAttribute("data-error-visible");
				birthdateErrorMessage.style.display = "none";
				inputBirthDate = true;
			} else {
				this.parentElement.setAttribute("data-error-visible", true);
				birthdateErrorMessage.style.display = "block";
				inputBirthDate = false;
			}
			break;

		//nombre de participation
		case "number":
			if (valueIsNumber(value) == true) {
				this.parentElement.removeAttribute("data-error-visible");
				quantityErrorMessage.style.display = "none";
				inputNumber = true;
			} else {
				this.parentElement.setAttribute("data-error-visible", true);
				quantityErrorMessage.style.display = "block";
				inputNumber = false;
			}
			break;

		// conditions d'utilisation
		case "checkbox":
			if (touChecked() == true) {
				touErrorMessage.style.display = "none";
				inputCheckBox = true;
			} else {
				touErrorMessage.style.display = "block";
				inputCheckBox = false;
			}
			break;
	}
}

// ON REGARDE QUEL CHAMPS EST FOCUS PAR L'UTILISATEUR
firstname.addEventListener("focus", showAttribute);
lastname.addEventListener("focus", showAttribute);
firstname.addEventListener("focus", showId);
lastname.addEventListener("focus", showId);
email.addEventListener("focus", showAttribute);
birthdate.addEventListener("focus", showAttribute);
quantity.addEventListener("focus", showAttribute);
tou.addEventListener("click", showAttribute);

// AFFICHE LES MESSAGES D'ERREUR AU BESOIN
firstname.addEventListener("input", errorDisplay);
lastname.addEventListener("input", errorDisplay);
email.addEventListener("input", errorDisplay);
birthdate.addEventListener("input", errorDisplay);
quantity.addEventListener("input", errorDisplay);
tou.addEventListener("click", errorDisplay);

// VALIDATION DU FORMULAIRE ET AFFICHAGE DE MESSAGE DE CONFIRMATION
const form = document.querySelector("form");
const modal = document.getElementById("modal");

validationBtn.addEventListener("click", (e) => {
	//recerifie chaque champs individuellement et affiche un message d'erreur au besoin
 
	if(inputFirstName == false){
		e.preventDefault();
		firstnameErrorMessage.style.display = "block";
	}
	if(inputLastName == false){
		e.preventDefault();
		lastnameErrorMessage.style.display = "block";
	}
	if(inputEmail == false){
		e.preventDefault();
		emailErrorMessage.style.display = "block";
	}
	if(inputBirthDate == false){
		e.preventDefault();
		birthdateErrorMessage.style.display = "block";
	}
	if(inputNumber == false){
		e.preventDefault();
		quantityErrorMessage.style.display = "block";
	}
	if(inputCheckBox == false){
		e.preventDefault();
		touErrorMessage.style.display = "block";
	}
	if (
		//si tous les champs sont remplis correctement
		inputFirstName == true &&
		inputLastName == true &&
		inputEmail == true &&
		inputBirthDate == true &&
		inputNumber == true &&
		inputCheckBox == true
	) {
		//cache le formulaire et le remplace par le message de validation et un bouton
		// pour fermer la modal
		e.preventDefault();
		form.style.display = "none";
		let validationMessage = document.createElement("div");
		validationMessage.innerHTML = "Merci pour votre inscription";
		let btnFermer = document.createElement("button");
		btnFermer.classList.add("btn-submit");
		btnFermer.classList.add("btn-fermer");
		btnFermer.innerHTML = "Fermer";
		modal.appendChild(validationMessage);
		modal.appendChild(btnFermer);
	}
});