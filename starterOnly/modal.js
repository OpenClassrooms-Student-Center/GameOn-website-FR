function editNav() {
	const x = document.getElementById("headerSection");
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

// ------------------- Form Inputs ----------------------------
const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthDate");
const quantity = document.getElementById("quantity");

const locations = document.getElementsByName("location");
// const termOfUses = document.getElementById("termOfUse");
// console.log(lastName)
// const lcoation = document.querySelector('input[name="place"]:checked');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});


// Checks form input values
function checkInputs() {

	let place = null;

	for (let i = 0; i < locations.length; i++) {
		if (locations[i].checked) {
			place = locations[i];
			break;
		}
	}

	//get the values from the inputs
	const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
	const emailValue = email.value.trim();
	const birthDateValue = birthDate.value.trim();
	const quantityValue = quantity.value.trim();

    let locationValue = place !== null ? place.value : null;
    // const termOfUseValues = termOfUse.value.trim();


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

    if (locationValue === "" || locationValue === null) {
		setErrorFor(locations.item(1), "Sélectionnez le lieu de tournoi !");
	} else {
		setSuccessFor(locations.item(1));
	}

    // if (termOfUseValues === "") {
	// 	setErrorFor(termOfUses, "Vous devez accepter les termes et conditions");
	// } else {
	// 	setSuccessFor(termOfUses);
	// }
}

function setErrorFor(input, message) {
	const formGroup = input.parentElement; //form-group
	const small = formGroup.querySelector("small");

	small.innerText = message; 	// add error message

	if(formGroup.classList.contains('form-group')) formGroup.className = "form-group error";

	else if(formGroup.classList.contains('form-groups')) formGroup.className = "form-groups error";
	

	
		console.log(formGroup)
}

function setSuccessFor(input) {
	const formGroup = input.parentElement;

	if(formGroup.classList.contains('form-group')) {
		formGroup.className = "form-group success";
	} else if(formGroup.classList.contains('form-groups')) formGroup.className = "form-groups success";
}

function isLetters(letter) {
	return /[a-zA-Z-âãäåæçèéêëìíîïðñòóôõøùúûüýþÿ]/.test(letter);
}

function isEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}