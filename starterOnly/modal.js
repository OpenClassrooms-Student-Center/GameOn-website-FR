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
const closeBtnModal = document.querySelector(".btn-close");
const modalBtn = document.querySelectorAll(".modal-btn");

const form = document.querySelector("form");
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const qtyParticipation = document.getElementById("quantity");
const locationParticipation = document.querySelectorAll(".location");
const [terms, newletter] = document.querySelectorAll(".terms");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
	modalbg.style.display = "block";
}

// close modale event
closeBtnModal.addEventListener("click", closeModal);

// close modal form
function closeModal() {
	modalbg.style.display = "none";
}

const formData = new FormData();

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const isValid = validate();

	if (isValid) {
		const message = document.createElement("h2");
		message.textContent = "Merci ! Votre réservation a été reçue.";
		message.classList.add("success");
		form.replaceWith(message);

		for (const pair of formData.entries()) {
			console.log(pair);
		}
	}
});

/**
 * @param {string} value 
 * @returns {boolean}
 */
const isEmpty = (value) => !value.length;

/**
 * @param {string} value 
 * @returns {boolean}
 */
const isEmail = (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);

function checkFirstname() {
	const firstnameValue = firstname.value.trim();
	if (isEmpty(firstnameValue)) {
		setError(firstname, "Veuillez renseigner votre prénom");
		return false;
	} else if (firstnameValue.length < 2) {
		setError(firstname, "Le prénom doit contenir au minimum 2 caractères");
		return false;
	} else {
		formData.append("firstname", firstnameValue),
		setSuccess(firstname);
		return true;
	}
}

function checkLastname() {
	const lastnameValue = lastname.value.trim();
	if (isEmpty(lastnameValue)) {
		setError(lastname, "Veuillez renseigner votre nom");
		return false;
	} else if (lastnameValue.length < 2) {
		setError(lastname, "Le nom doit contenir au minimum 2 caractères");
		return false;
	} else {
		setSuccess(lastname);
		formData.append("lastname", lastnameValue);
		return true;
	}
}

function checkEmail() {
	const emailValue = email.value.trim();
	if (isEmpty(emailValue)) {
		setError(email, "Veuillez renseigner votre adresse email");
		return false;
	} else if (!isEmail(emailValue)) {
		setError(email, "Adresse email invalide");
		return false;
	} else {
		setSuccess(email);
		formData.append("email", emailValue);
		return true;
	}
}

function checkBirthdate() {
	const birthdateValue = birthdate.value;
	if (isEmpty(birthdateValue)) {
		setError(birthdate, "Veuillez renseigner votre date de naissance");
		return false;
	} else {
		setSuccess(birthdate);
		formData.append("birthdate", birthdateValue);
		return true;
	}
}

function checkParticipation() {
	const qtyParticipationValue = qtyParticipation.value;
	if (isNaN(qtyParticipationValue)) {
		setError(qtyParticipation, "La valeur indiquée n'est pas un nombre valide")
		return false;
	} else if (!(parseInt(qtyParticipationValue) >= 0 && parseInt(qtyParticipationValue) <= 100)) {
		setError(qtyParticipation, "Entrer une valeur comprise entre 0 et 100");
		return false;
	} else {
		setSuccess(qtyParticipation);
		formData.append("participation", qtyParticipationValue);
		return true;
	}
}

function checkLocation() {
	const { isChecked, elementRadio } = checkRadio([...locationParticipation]);
	if (!isChecked) {
		setError(locationParticipation[0], "Choisissez le lieu du tournoi");
		return false;
	} else {
		setSuccess(elementRadio);
		formData.append("location", elementRadio.value);
		return true;
	}
}

function checkTerms() {
	if (!terms.checked) {
		setError(terms, "Veuillez accepter les conditions d'utilisation");
		return false;
	} else {
		setSuccess(terms);
		const obj = { term: true, newletter: newletter.checked };
		Object.keys(obj).forEach((key) => formData.append(key, obj[key]));
		return true;
	}
}

/**
 * @param {NodeListOf<HTMLInputElement>} elements
 * @return {{isChecked: boolean, elementRadio: HTMLInputElement | null}
 */
function checkRadio(elements) {
	for (const radio of elements) {
		if (radio.checked) return { isChecked: true, elementRadio: radio };
	}

	return { isChecked: false, elementRadio: null };
}

/**
 * 
 * @returns {boolean}
 */
function validate() {
	const results = [
		checkFirstname(),
		checkLastname(),
		checkEmail(),
		checkBirthdate(),
		checkParticipation(),
		checkLocation(),
		checkTerms()
	];

	for (const res of results) {
		if (!res) return false;
	}

	return true;
}

/**
 * @param {HTMLInputElement} element 
 * @param {string} message 
 */
function setError(element, message) {
	const formControl = element.parentElement;
	formControl.setAttribute("data-error", message);
	element.setAttribute("data-error-visible", true);
}

/**
 * @param {HTMLInputElement} element
 */
function setSuccess(element) {
	const formControl = element.parentElement;

	if (formControl.hasAttribute("data-error")) {
		formControl.setAttribute("data-error", ""); // or removeAttribute()
		element.setAttribute("data-error-visible", false);
	}
}