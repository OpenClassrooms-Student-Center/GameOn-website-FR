function editNav() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

// DOM Elements
const contactForm = document.querySelector('.contactForm');
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const modalCloseBtn = document.querySelector('.close');
const firstNameCheck = document.querySelector('.firstNameCheck');
const lastNameCheck = document.querySelector('.lastNameCheck');
const userEmailCheck = document.querySelector('.userEmailCheck');
const birthdateCheck = document.querySelector('.birthdateCheck');
const quantityCheck = document.querySelector('.quantityCheck');
const locationCheck = document.querySelectorAll('.locationCheck');
const agreementCheck = document.querySelector('#checkbox1');
const mailingListCheck = document.querySelector('#checkbox2');

// launch modal form
modalBtn.forEach((btn) =>
	btn.addEventListener('click', () => (modalbg.style.display = 'block'))
);

// close modal form
modalCloseBtn.addEventListener('click', () => (modalbg.style.display = 'none'));

// firstNameCheck form validation
const fisrtNameValidation = () => {
	switch (true) {
		case /^$/.test(firstNameCheck.value.trim()): // Checking if input is not empty
			setErrorFor(firstNameCheck, 'Veuillez remplir votre prénom');
			break;

		case firstNameCheck.value.trim().length < 2: // Checking if input is too short
			setErrorFor(firstNameCheck, 'Votre prénom est trop court');
			break;

		case firstNameCheck.value.trim().length > 30: // Checking if input is too long
			setErrorFor(firstNameCheck, 'Votre prénom est trop long');
			break;

		case /([^-,A-Za-zÀ-ÿ. '])+/.test(firstNameCheck.value.trim()): // Checking if input as no special char
			setErrorFor(firstNameCheck, `N'utilisez pas de caractères spéciaux`);
			break;

		default:
			setSuccessFor(firstNameCheck);
	}
};
firstNameCheck.addEventListener('change', fisrtNameValidation); // Listening event to fire validation

//lastNameCheck form validation
const lastNameValidation = () => {
	switch (true) {
		case /^$/.test(lastNameCheck.value.trim()): // Checking if input is not empty
			setErrorFor(lastNameCheck, 'Veuillez remplir votre nom');
			break;

		case lastNameCheck.value.trim().length < 2: // Checking if input is too short
			setErrorFor(lastNameCheck, 'Votre nom est trop court');
			break;

		case lastNameCheck.value.trim().length > 30: // Checking if input is too long
			setErrorFor(lastNameCheck, 'Votre nom est trop long');
			break;

		case /([^-,A-Za-zÀ-ÿ. '])+/.test(lastNameCheck.value.trim()): // Checking if input as no special char
			setErrorFor(lastNameCheck, `N'utilisez pas de caractères spéciaux`);
			break;

		default:
			setSuccessFor(lastNameCheck);
	}
};
lastNameCheck.addEventListener('change', lastNameValidation); // Listening event to fire validation

// userEmailCheck form validation
const userEmailValidation = () => {
	switch (true) {
		case /^$/.test(userEmailCheck.value.trim()): // Checking if input is not empty
			setErrorFor(userEmailCheck, 'Adresse e-mail obligatoire');
			break;

		case /^[\w-\.À-ÿ]{2,40}@[\w-À-ÿ]{2,25}\.[a-zA-Z]{2,4}$/i.test(
			// Checking if the input is a email
			userEmailCheck.value.trim()
		):
			setSuccessFor(userEmailCheck);
			break;

		default:
			setErrorFor(
				userEmailCheck,
				'Veuillez renseigner une adresse email valide'
			);
	}
};
userEmailCheck.addEventListener('change', userEmailValidation); // Checking if input is not empty

// birthdateCheck form Validation
const birthdateValidation = () => {
	//changing variable type as Number
	const birthdateCheckAsNumber = new Date(birthdateCheck.value);

	switch (true) {
		case /^$/.test(birthdateCheck.value): // Checking if input is not empty
			setErrorFor(birthdateCheck, 'Date de naissance obligatoire');
			break;

		case isNaN(birthdateCheckAsNumber): // Checking if input is a Number
			setErrorFor(birthdateCheck, 'Veuillez renseigner uniquement des nombres');
			break;

		case /^\d{0,3}$/.test(birthdateCheckAsNumber.getFullYear()): // Checking if the year given is to old
			setErrorFor(
				birthdateCheck,
				'Votre année de naissance est bien trop ancienne !'
			);
			break;

		case /^\d{4}\d+$/.test(birthdateCheckAsNumber.getFullYear()): // Checking if the year given is in the futur
			setErrorFor(birthdateCheck, 'Vennez-vous du futur ?');
			break;

		case /^\d{4}$/.test(birthdateCheckAsNumber.getFullYear()): // checking if the Date of Birth is conceivable
			const currentYear = new Date();

			if (
				birthdateCheckAsNumber.getFullYear() >
					currentYear.getFullYear() - 140 &&
				birthdateCheckAsNumber.getFullYear() <= currentYear.getFullYear()
			) {
				setSuccessFor(birthdateCheck);
				break;
			}

		default:
			setErrorFor(
				birthdateCheck,
				'Veuillez renseigner votre réel date de naissance'
			);
	}
};
birthdateCheck.addEventListener('blur', birthdateValidation); // Listening event to fire validation

// quantityCheck form validation
const quantityValidation = () => {
	//	changing variable type as Number
	const quantityCheckAsNumber = parseInt(quantityCheck.value, 10);

	switch (true) {
		case /^$/.test(quantityCheck.value.trim()): // Checking if input is not empty
			setErrorFor(
				quantityCheck,
				'Nombre de participation aux tournois déjà passé requis'
			);
			break;

		case /^\d{0,3}$/i.test(quantityCheckAsNumber): // Checking if input is conceivable
			setSuccessFor(quantityCheck);
			break;

		default:
			setErrorFor(
				quantityCheck,
				'Veuillez renseigner un nombre de participation valide'
			);
	}
};
quantityCheck.addEventListener('change', quantityValidation); // Listening event to fire validation

//	Location form Validation
let userLocationIsChecked; // Initializing variable to prevent scope issues
const locationValidation = () => {
	let userLocationChecked = false;

	let locationArray = Array.from(locationCheck); // transforming nodelist into array

	userLocationIsChecked = locationArray.find(
		(element) => element.checked == true
	); //finding checked element

	if (userLocationIsChecked) {
		userLocationChecked = true; //Updating the with the result
	}

	switch (true) {
		case userLocationChecked: // Checking if location is checked
			locationCheck.forEach((location) => setSuccessFor(location));
			break;

		default:
			locationCheck.forEach((location) =>
				setErrorFor(location, 'Noubliez pas de vous inscrire à un tournoi !')
			);
	}
}; // Only listening on submit

// Agreement form Validation
const agreementValidation = () => {
	agreementCheck.checked
		? setSuccessFor(agreementCheck)
		: setErrorFor(agreementCheck, 'Votre accord est obligatoire');
}; // Only listening on submit

// error on input handling
const setErrorFor = (input, message) => {
	const parentElement = input.parentElement;
	const errorText = parentElement.querySelector('.formCheckMessage');

	// removing success class if present
	if (parentElement.classList.contains('inputSuccess')) {
		parentElement.classList.remove('inputSuccess');
	}
	// adding failed class and failed message
	parentElement.classList.add('inputFailed');
	errorText.textContent = message;
};

// success handling
const setSuccessFor = (input) => {
	const parentElement = input.parentElement;

	// removing success class if present
	if (parentElement.classList.contains('inputFailed')) {
		parentElement.classList.remove('inputFailed');
	}
	// adding success class and success message
	parentElement.classList.add('inputSuccess');
};

//listening to user sending button
contactForm.addEventListener('submit', async (e) => {
	e.preventDefault(); // preventing the form to sent data

	//Lauching validation on all input
	fisrtNameValidation();
	lastNameValidation();
	userEmailValidation();
	birthdateValidation();
	quantityValidation();
	locationValidation();
	agreementValidation();

	let formDataArray = Array.from(formData); // transforming nodelist into array

	// Failed input checking
	formData.forEach((data) => {
		if (!data.classList.contains('inputFailed')) {
			// capturing all user data before sending
			const userFormData = {
				userFirstName: firstNameCheck.value,
				userLastName: lastNameCheck.value,
				userEmail: userEmailCheck.value,
				userBirthDate: birthdateCheck.value,
				userQuantity: quantityCheck.value,
				userLocation: userLocationIsChecked.value,
				userMailingList: mailingListCheck.checked,
			};
			JSON.stringify(userFormData); // Transforming as JSON

			contactForm.innerHTML = // Changing html output
				'<p class="success-form" > Merci pour <br /> votre inscription </p><input class="btn-submit " type="button" value="Fermer"/>';

			// Adding closing to the button
			const closeFormSucceded = document.querySelector('.btn-submit');
			closeFormSucceded.addEventListener(
				'click',
				() => (modalbg.style.display = 'none')
			);
		}
	});
});
