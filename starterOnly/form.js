//Global Form Validation

// First name not null and at least 2 char
function firstValidation() {
	let inputValue = document.getElementById("first").value;
	if (inputValue !== null && inputValue.length >= 2)
		return true;
	else
		return false;
}

// Last name not null and at least 2 char
function lastValidation() {
	let inputValue = document.getElementById("last").value;
	if (inputValue !== null && inputValue.length >= 2)
		return true;
	else
		return false;
}

// Email in a valid format
function emailValidation() {
    let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
    let inputValue = document.getElementById("email").value;
    return regex.test(inputValue);
}

// Valid number
function quantityValidation() {
    let regex = /^[0-9]+$/;
    let inputValue = document.getElementById("quantity").value;
    return regex.test(inputValue);
}

// One radio button is selected
function locationValidation() {
    let radioButtons = document.querySelectorAll(".checkbox-input[type=radio]");
    for(let radio of radioButtons){
			if (radio.checked === true)
				return true;
    }
    return false;
}

// Checkbox value returned
function checkboxValidation() {
    let inputValue = document.getElementById("checkbox1").checked;
    return inputValue;
}

document
	.getElementById("button")
	.addEventListener("click", function formValidation(event) {
		if (!(firstValidation() &&
			lastValidation() &&
			emailValidation() &&
			quantityValidation() &&
			locationValidation() &&
			checkboxValidation()))
			event.preventDefault();
		else
			console.log("Valid");
	});