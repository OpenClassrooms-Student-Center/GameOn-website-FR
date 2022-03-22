// DOM elements -- representation objet des données qui composent la structure et le contenu d'un document sur le web
const modalForm = document.querySelector(".bground");
const modalContent = document.querySelector(".content");
const modalConfirmBtn = document.querySelector(".confirm-modal-btn");
const modalConfirmClose = document.querySelector(".confirm-close");
const form = document.querySelector("form");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationInput = document.querySelectorAll(".checkbox-input[type=radio]");
const checkboxInput = document.getElementById("checkbox1");
const detailsModal = document.querySelector(".confirm_modal");

// constante messages d'erreurs -- la valeur d'une constante ne peut pas être modifiée
const errorMessages = {
	lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
	firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
	email: "Veuillez entrer une adresse email valide.",
	birthdate: "Veuillez entrer une date de naissance valide.",
	quantity: "Veuillez entrer un nombre valide.",
	location: "Veuillez choisir une ville.",
	checkbox: "Veuillez accepter les conditions d'utilisations.",
};
//invalid alert
function isInvalid(element, message) {
	// parentNode renvoie le parent du nœud spécifié
	let target = element.parentNode;
    
    // Ajoute un nouvel attribut ou change la valeur d'un attribut existant pour l'élément spécifié.
	target.setAttribute("data-error-visible", true);
	target.setAttribute("data-error", message);
	//start function invalidAnimation
	invalidAnimation();
}
// animation quand le formulaire est invalide
function invalidAnimation() {
	//ajout de la class content_animated_invalid
	modalContent.classList.add('content_animated_invalid');
}
// function formulaire valide
function isValid() {
	// Appel la function getConfirm() 
	getConfirm();
	// Modal disparait
	modalForm.style.display = "none";
}

// Function getConfirm
function getConfirm() {
	// déclaration variables = recuperation de données saisie dans les inputs
	let firstName = firstNameInput.value;
	let lastName = lastNameInput.value;
	let email = emailInput.value;
	let birthdate = birthdateInput.value;
	let quantity = quantityInput.value;
	let city = locationInput.value;
	// modal avec resumer des saisies
	detailsModal.style.display ="block";
	// récuperation du contenu des inputs afficher dans la modal
	document.getElementById("data_firstName").innerHTML = "Nom : " + firstName;
	document.getElementById("data_lastName").innerHTML = "Prénom : " + lastName;
	document.getElementById("data_email").innerHTML = "email : " + email;
	document.getElementById("data_birth").innerHTML = "date de naissance : " + birthdate;
	document.getElementById("data_qty").innerHTML = "Nombre de tournois auquel vous avez participer :" + quantity;
	document.getElementById("data_city"). innerHTML = "Ville dans la quelle vous souhaiter participer : " + city;
}
// toast formulaire envoyer.
function launch_toast() {
    let x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
	detailsModal.style.display = "none";
}
//supprimer les alerts
function removeAlerts() {
	let invalidFields = document.querySelectorAll(
		'.formData[data-error-visible="true"]'
	);
	for (let field of invalidFields) {
		field.setAttribute("data-error-visible", false);
		field.setAttribute("data-error", "");
	}
}

// verification prenom
function firstValidation() {
	let inputValue = firstNameInput.value;
	if (inputValue !== null && inputValue.length >= 2) return true;
	else return false;
}

// verification nom de famille
function lastValidation() {
	let inputValue = lastNameInput.value;
	if (inputValue !== null && inputValue.length >= 2) return true;
	else return false;
}

//verification email
function emailValidation() {
	let regex = /^\S+@\S+\.\S+$/;
	return regex.test(emailInput.value);
}

//verification naissance
function birthdateValidation() {
	let birthdate = new Date(birthdateInput.value);
	let today = new Date();
	if (birthdate.toString() !== "Invalid Date") {
		if (
			birthdate.getDate() >= today.getDate() &&
			birthdate.getMonth() == today.getMonth() &&
			birthdate.getFullYear() == today.getFullYear()
		) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}

// verification nombre
function quantityValidation() {
	let regex = /^[0-9]+$/;
	return regex.test(quantityInput.value);
}

// verification localisation
function locationValidation() {
	for (let radio of locationInput) {
		if (radio.checked === true) return true;
	}
	return false;
}

//verification checkbox
function checkboxValidation() {
	return checkboxInput.checked;
}

// verification globale
function validate(event) {
	event.preventDefault();
	let isValidInput = true;
	removeAlerts();
	if (!firstValidation()) {
		isValidInput = false;
		isInvalid(firstNameInput, errorMessages.firstName);
	}
	if (!lastValidation()) {
		isValidInput = false;
		isInvalid(lastNameInput, errorMessages.lastName);
	}
	if (!emailValidation()) {
		isValidInput = false;
		isInvalid(emailInput, errorMessages.email);
	}
	if (!birthdateValidation()) {
		isValidInput = false;
		isInvalid(birthdateInput, errorMessages.birthdate);
	}
	if (!quantityValidation()) {
		isValidInput = false;
		isInvalid(quantityInput, errorMessages.quantity);
	}
	if (!locationValidation()) {
		isValidInput = false;
		isInvalid(locationInput, errorMessages.location);
	}
	if (!checkboxValidation()) {
		isValidInput = false;
		isInvalid(checkboxInput, errorMessages.checkbox);
	}
	if (isValidInput) {
		isValid();
	}
}