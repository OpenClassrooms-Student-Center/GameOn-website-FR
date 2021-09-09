// DOM Elements
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const cities = document.querySelectorAll("input[type=radio]");
const tou = document.getElementById("checkbox1");
const validationBtn = document.getElementById("validationBtn");

//MESSAGES D'ERREUR
const firstnameErrorMessage = document.getElementById("firstnameErrorMessage");
const lastnameErrorMessage = document.getElementById("lastnameErrorMessage");
const emailErrorMessage = document.getElementById("emailErrorMessage");
const birthdateErrorMessage = document.getElementById("birthdateErrorMessage");
const quantityErrorMessage = document.getElementById("quantityErrorMessage");
const citiesErrorMessage = document.getElementById("citiesErrorMessage");
const touErrorMessage = document.getElementById("touErrorMessage");

//CACHER LES MESSAGES D'ERREUR PAR DEFAUT
firstnameErrorMessage.style.display = "none";
lastnameErrorMessage.style.display = "none";
emailErrorMessage.style.display = "none";
birthdateErrorMessage.style.display = "none";
quantityErrorMessage.style.display = "none";
citiesErrorMessage.style.display = "none";
touErrorMessage.style.display = "none";

//ACTIVER OU DESACTIVER LES BOUTONS RADIO
function radioDisable() {
	for (let radio of cities) {
		radio.disabled = true;
		radio.checked = false;
	}
}
//radioDisable();

function radioEnable() {
	for (let radio of cities) {
		radio.disabled = false;
	}
}

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
// BOUCLE POUR VERIFIER LES BOUTONS RADIO BIEN COCHES
function citiesCheck(cityArray) {
	let counter;
	for (let city of cityArray) {
		if (city.checked) {
			counter++;
		}
	}
	if (counter !== 0) {
		return true;
	} else {
		return false;
	}
}
// citiesCheck(cities);

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

function errorDisplay(event) {
	let value = event.target.value;
	let element;
	switch (activeInput) {

		//input type=text
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

		//adresse email
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

		//input type=number
		case "number":
			if (valueIsNumber(value) == true) {
				radioEnable();
				this.parentElement.removeAttribute("data-error-visible");
				quantityErrorMessage.style.display = "none";
				inputNumber = true;
				inputRadio = false;
				if (quantityErrorMessage.value > 0) {
					citiesErrorMessage.style.display = "block";
					inputRadio = false;
					radioDisable();
				} else {
					citiesErrorMessage.style.display = "none";
					inputRadio = true;
					radioEnable();
				}
			} else {
				this.parentElement.setAttribute("data-error-visible", true);
				quantityErrorMessage.style.display = "block";
				inputNumber = false;
			}
			break;

		//boutons radio
		case "radio":
			if (citiesCheck(cities)) {
				citiesErrorMessage.style.display = "none";
				inputRadio = true;
			} else {
				citiesErrorMessage.style.display = "block";
				inputRadio = false;
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

		default:
			alert("Une erreur est survenue.");
			break;
	}
}

// CHAMPS NON VALIDES PAR DEFAUT
let inputFirstName = false;
let inputLastName = false;
let inputEmail = false;
let inputBirthDate = false;
let inputNumber = false;
let inputRadio = true;
let inputCheckBox = true;

// ON REGARDE QUEL CHAMPS EST FOCUS PAR L'UTILISATEUR
firstname.addEventListener("focus", showAttribute);
lastname.addEventListener("focus", showAttribute);
firstname.addEventListener("focus", showId);
lastname.addEventListener("focus", showId);
email.addEventListener("focus", showAttribute);
birthdate.addEventListener("focus", showAttribute);
quantity.addEventListener("focus", showAttribute);

cities.forEach((btn) =>
	btn.addEventListener("click", showAttribute)
);

tou.addEventListener("click", showAttribute);

// AFFICHE LES MESSAGES D'ERREUR AU BESOIN
firstname.addEventListener("input", errorDisplay);
lastname.addEventListener("input", errorDisplay);
email.addEventListener("input", errorDisplay);
birthdate.addEventListener("input", errorDisplay);
quantity.addEventListener("input", errorDisplay);
cities.forEach((btn) => btn.addEventListener("click", errorDisplay));
tou.addEventListener("click", errorDisplay);

// VALIDATION DU FORMULAIRE ET AFFICHAGE DE MESSAGE DE CONFIRMATION
const formBody = document.querySelector("form");
const modal = document.getElementById("modal");

validationBtn.addEventListener("click", (e) => {
	if (
		inputFirstName == true &&
		inputLastName == true &&
		inputEmail == true &&
		inputBirthDate == true &&
		inputNumber == true &&
		inputRadio == true &&
		inputCheckBox == true
	) {
		e.preventDefault();
		formBody.style.display = "none";
		const validationMessage = document.createElement("p");
		validationMessage.innerHTML = "Merci pour votre inscription";
		modal.appendChild(validationMessage);
	} 
});