function editNav() {
	var x = document.getElementById("headerSection");
	if (x.className === "header") {
		x.className += " responsive";
	} else {
		x.className = "header";
	}
}

// DOM Elements
const modalbg = document.querySelector(".hero-section-bg");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelector("#closeModalBtn");
// const formGroup = document.querySelectorAll(".form-group");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", openModal));
closeModalBtn.addEventListener("click", closeModal);

// open modal form
function openModal() {
	modalbg.style.display = "block";
}
// close modal form
function closeModal() {
	modalbg.style.display = "none";
}

// ------------------- Form Validations ----------------------------
const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthDate");
const quantity = document.getElementById("quantity");

form.addEventListener("input", (e) => {
    e.preventDefault();

    checkInputs();
    sitTimeout(() => {
        getInputFromTextBox();
    }, 1000);
});

function checkInputs() {
	//get the values from the inputs
	var firstNameValue = firstName.value.trim();
    var lastNameValue = lastName.value.trim();
	var emailValue = email.value.trim();
	var birthDateValue = birthDate.value.trim();
	var quantityValue = quantity.value.trim();

     // First name validation
	if (firstNameValue === "") {
		// show error & add error class
		setErrorFor(firstName, "Nom est requis !");
	} else if (!isLetters(firstNameValue)) {
		setErrorFor(firstName, 'Prénom doit contenir uniquement des lettres !');
	} else if (firstNameValue.length < 3) {
		setErrorFor(firstName, 'Prénom doit contenir au moins 3 lettres !');
	} else {
		setSuccessFor(firstName);
	}

     // Last name validation
    if (lastNameValue === "") {
		setErrorFor(lastName, "Nom est requis !");
	} else if (!isLetters(lastNameValue)) {
		setErrorFor(lastName,'Nom doit contenir uniquement des lettres !');
	} else if (lastNameValue.length < 3) {
		setErrorFor(lastName, 'Nom doit contenir au moins 3 lettres !');
	} else {
		setSuccessFor(lastName);
	}

     // Email validation
	if (emailValue === "") {
		setErrorFor(email, "E-mail est requis !");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "E-mail n'est pas valide !");
	} else {
		setSuccessFor(email);
	}

     // Birth date validation
	if (birthDateValue === "") {
		setErrorFor(birthDate, "Date de naissance est requis !");
	} else {
		setSuccessFor(birthDate);
	}

    // Quantité validation
    if (quantityValue === '') {
		setErrorFor(quantity, "Quantité est requis !");
	} else {
		setSuccessFor(quantity);
	}
}

function setErrorFor(input, message) {
	const formGroup = input.parentElement; //form-group
	const small = formGroup.querySelector("small");

	// add error message inside small
	small.innerText = message;

	// add error message
	formGroup.className = "form-group error";
}

function setSuccessFor(input) {
	const formGroup = input.parentElement;
	formGroup.className = "form-group success";
}

function isLetters(letter) {
	return /[a-zA-Z-âãäåæçèéêëìíîïðñòóôõøùúûüýþÿ]/.test(letter);
}

function isEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

