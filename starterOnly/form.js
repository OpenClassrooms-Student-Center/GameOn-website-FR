//Global Form Validation
const form = document.querySelector("form");

// First name not null and at least 2 char
function firstValidation() {
	const inputValue = document.getElementById("first").value;
	if (inputValue !== null && inputValue.length >= 2) {
		const elt = document.getElementById("first-error");
		elt.style.display = "none";
		return true;
	} else {
		const elt = document.getElementById("first-error");
		elt.style.display = "block";
		return false;
	}
}

// Last name not null and at least 2 char
function lastValidation() {
	const inputValue = document.getElementById("last").value;
	if (inputValue !== null && inputValue.length >= 2) {
		const elt = document.getElementById("last-error");
		elt.style.display = "none";
		return true;
	} else {
		const elt = document.getElementById("last-error");
		elt.style.display = "block";
		return false;
	}
}

// Email in a valid format
function emailValidation() {
	let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	const inputValue = document.getElementById("email").value;
	if (regex.test(inputValue)) {
		const elt = document.getElementById("email-error");
		elt.style.display = "none";
		return true;
	} else {
		const elt = document.getElementById("email-error");
		elt.style.display = "block";
		return false;
	}
}

// Valid birthdate
function birthdateValidation() {
	const regex = /^(19|20)[0-9]{2}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
	const inputValue = document.getElementById("birthdate").value;
	bool = regex.test(inputValue);
	if (bool) {
		const elt = document.getElementById("birthdate-error");
		elt.style.display = "none";
		return true;
	} else {
		const elt = document.getElementById("birthdate-error");
		elt.style.display = "block";
		return false;
	}
}

// Valid number
function quantityValidation() {
	const regex = /^[0-9]+$/;
	const inputValue = document.getElementById("quantity").value;
	if (regex.test(inputValue)) {
		const elt = document.getElementById("quantity-error");
		elt.style.display = "none";
		return true;
	} else {
		const elt = document.getElementById("quantity-error");
		elt.style.display = "block";
		return false;
	}
}

// One radio button is selected
function locationValidation() {
	const radioButtons = document.querySelectorAll(".checkbox-input[type=radio]");
	for (let radio of radioButtons) {
		if (radio.checked === true) {
			const elt = document.getElementById("radio-error");
			elt.style.display = "none";
			return true;
		}
	}
	const elt = document.getElementById("radio-error");
	elt.style.display = "block";
	return false;
}

// Checkbox value returned
function checkboxValidation() {
	const inputValue = document.getElementById("checkbox1").checked;
	if (inputValue) {
		const elt = document.getElementById("check-error");
		elt.style.display = "none";
		return true;
	} else {
		const elt = document.getElementById("check-error");
		elt.style.display = "block";
		return false;
	}
}

document
	.getElementById("button")
	.addEventListener("click", function formValidation(event) {
		event.preventDefault();
		let isValid = true;
		isValid &= firstValidation();
		isValid &= lastValidation();
		isValid &= emailValidation();
		isValid &= birthdateValidation();
		isValid &= quantityValidation();
		isValid &= locationValidation();
		isValid &= checkboxValidation();
		if (isValid) {
			closeModal();
			thanks();
		}
	});
