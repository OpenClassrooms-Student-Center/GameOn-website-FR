//Global Form Validation
const form = document.querySelector("form");

// First name not null and at least 2 char
function firstValidation() {
	let inputValue = document.getElementById("first").value;
	if (inputValue !== null && inputValue.length >= 2)
	{
		let elt = document.getElementById("first-error");
		elt.style.display = "none";
		return true;
	}
	else
	{
		let elt = document.getElementById("first-error");
		elt.style.display = "block";
		return false;
		}
}

// Last name not null and at least 2 char
function lastValidation() {
	let inputValue = document.getElementById("last").value;
	if (inputValue !== null && inputValue.length >= 2)
	{
		let elt = document.getElementById("last-error");
		elt.style.display = "none";
		return true;
	}
	else
	{
		let elt = document.getElementById("last-error");
		elt.style.display = "block";
		return false;
		}
}

// Email in a valid format
function emailValidation() {
		let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
	let inputValue = document.getElementById("email").value;
		if (regex.test(inputValue))
			{
			let elt = document.getElementById("email-error");
			elt.style.display = "none";
			return true;
			}
			else
			{
				let elt = document.getElementById("email-error");
				elt.style.display = "block";
				return false;
			}
}

// Valid birthdate
function birthdateValidation() {
	let regex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
    let inputValue = document.getElementById("birthdate").value;
    if (console.log(regex.test(inputValue.value)))
			{
			let elt = document.getElementById("birthdate-error");
			elt.style.display = "none";
			return true;
			}
			else
			{
				let elt = document.getElementById("birthdate-error");
				elt.style.display = "block";
				return false;
			}
}

// Valid number
function quantityValidation() {
    let regex = /^[0-9]+$/;
    let inputValue = document.getElementById("quantity").value;
    if (regex.test(inputValue))
			{
			let elt = document.getElementById("quantity-error");
			elt.style.display = "none";
			return true;
			}
			else
			{
				let elt = document.getElementById("quantity-error");
				elt.style.display = "block";
				return false;
			}
}

// One radio button is selected
function locationValidation() {
	let radioButtons = document.querySelectorAll(".checkbox-input[type=radio]");
	for (let radio of radioButtons) {
		if (radio.checked === true) {
			let elt = document.getElementById("radio-error");
			elt.style.display = "none";
			return true;
		}
	}
	let elt = document.getElementById("radio-error");
	elt.style.display = "block";
	return false;
}

// Checkbox value returned
function checkboxValidation() {
    let inputValue = document.getElementById("checkbox1").checked;
	if (inputValue)
		{
		let elt = document.getElementById("check-error");
		elt.style.display = "none";
		return true;
		}
		else
		{
			let elt = document.getElementById("check-error");
			elt.style.display = "block";
			return false;
		}
}

document
	.getElementById("button")
	.addEventListener("click", function formValidation(event) {
		let isValid = 0;
		if (firstValidation())
			isValid++;
		if (lastValidation())
			isValid++;
		if (emailValidation())
			isValid++;
		if (birthdateValidation())
			isValid++;
		if (quantityValidation())
			isValid++;
		if (locationValidation())
			isValid++;
		if (checkboxValidation())
			isValid++;
		if (isValid != 7)
			event.preventDefault();
		else {
			console.log("Valid");
			form.submit();
		}
	});