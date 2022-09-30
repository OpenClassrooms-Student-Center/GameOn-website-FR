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
const closeBtn = document.querySelector(".close");
const form = document.querySelector('[name="reserve"]');
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locations = document.querySelectorAll(".checkbox-input[type='radio']");
const conditions = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// remove the data-error and data-error-visible attributes
formData.forEach((inputBlock) => {
	// get the input elements from its parent
	const inputs = inputBlock.querySelectorAll("input");

	inputs.forEach((input) => {
		// remove the data-error and data-error-visible attributes from
		// the parent element when the input is clicked
		input.addEventListener("click", () => {
			inputBlock.removeAttribute("data-error");
			inputBlock.removeAttribute("data-error-visible");
		});
	});
});

// close modal form on click
closeBtn.addEventListener("click", closeModal);

// listen for submit event
form.addEventListener("submit", validateForm);

/**
 * @description
 * This function is used to launch the modal form
 */
function launchModal() {
	modalbg.style.display = "block";
	formData.forEach((input) => {
		input.removeAttribute("data-error");
		input.removeAttribute("data-error-visible");
	});
}

/**
 * @description
 * This function is used to validate an email
 * @param {string} email
 * @returns boolean
 */
function validateEmail(email) {
	const re = /\S+@\S+\.\S+/;
	return re.test(email);
}

/**
 * @description
 * This function is used to close the modal form
 */
function closeModal() {
	modalbg.style.display = "none";
}

/**
 * @description
 * This function is used to show an error message
 * @param {HTMLInputElement} input
 * @param {string} message
 */
function showError(input, message) {
	const formControl = input.parentElement;

	// add the data-error attribute to the parent element
	formControl.setAttribute("data-error", message);
	formControl.setAttribute("data-error-visible", true);
}

/**
 * @description
 * This function is used to validate the form
 * @param {SubmitEvent} e
 */
function validateForm(e) {
	e.preventDefault();
	let isValid = true;
	// check if firstname is empty
	if (firstname.value.trim().length < 2) {
		showError(firstname, "First name is required");
		isValid = false;
	}
	// check if lastname is empty
	if (lastname.value.trim().length < 2) {
		showError(lastname, "Last name is required");
		isValid = false;
	}
	// check if email is empty or invalid
	if (email.value.trim().length < 2 || !validateEmail(email.value)) {
		showError(email, "A correct email is required");
		isValid = false;
	}
	// check if birthdate is empty
	if (birthdate.value.trim() === "" || !birthdateValidation(birthdate.value)) {
		showError(birthdate, "Birthdate is required");
		isValid = false;
	}
	// check if quantity is empty
	if (quantity.value.trim() === "" || isNaN(quantity.value)) {
		showError(quantity, "Quantity is required");
		isValid = false;
	}
	// check if at least one location is checked
	let locationChecked = Array.from(locations).some((location) => location.checked);

	if (!locationChecked) {
		showError(locations[0], "Location is required");
		isValid = false;
	}

	// check if conditions is checked
	if (!conditions.checked) {
		showError(conditions, "Conditions is required");
		isValid = false;
	}

	if (isValid) {
		toaster("success", "Your reservation has been sent");
		closeModal();
	}
}

/**
 * @description
 * This function is used to show a toaster message
 * @param {string} type
 * @param {string} message
 */
function toaster(type, message) {
	const toaster = document.getElementById("toaster");
	toaster.querySelector("p").innerHTML = message;
	toaster.className = `show ${type}`;
	setTimeout(() => {
		toaster.className = toaster.className.replace("show", "");
	}, 5000);
}

/**
 *
 * @param {number} birhtdate
 * @returns boolean
 */
function birthdateValidation(birhtdate) {
	const today = new Date();
	const birthDate = new Date(birhtdate);
	return birhtdate < today;
}
