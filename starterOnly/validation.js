const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const turnaments = document.getElementById('turnaments');
const conditions = document.getElementById('conditions-checkbox');

const isEmail = (email) => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
};

const checkFirstName = () => {
	const firstNameValue = firstName.value.trim();

	if (firstNameValue === '') {
		console.log('Le prénom ne doit pas être vide !');
		return false;
	} else if (firstNameValue.length < 2) {
		console.log('Le prénom doit contenir au moins 2 caractères !');
		return false;
	} else {
		console.log('Prénom Validé');
		return true;
	}
};

const checkLastName = () => {
	const lastNameValue = lastName.value.trim();

	if (lastNameValue === '') {
		console.log('Le nom ne doit pas être vide !');
		return false;
	} else if (lastNameValue.length < 2) {
		console.log('Le nom doit contenir au moins 2 caractères');
		return false;
	} else {
		console.log('Nom validé !');
		return true;
	}
};

const checkEmail = () => {
	const emailValue = email.value.trim();

	if (emailValue === '') {
		console.log("L'adresse e-mail ne doit pas être vide !");
		return false;
	} else if (!isEmail(emailValue)) {
		console.log("L'adresse e-mail n'est pas valide !");
		return false;
	} else {
		console.log('E-mail validé !');
		return true;
	}
};

const checkBirthdate = () => {
	const birthdateValue = birthdate.value.trim();

	if (birthdateValue === '') {
		console.log('La date de naissance ne doit pas être vide !');
		return false;
	} else {
		console.log('Date de naissance validé !');
		return true;
	}
};

const checkTurnaments = () => {
	const turnamentsValue = turnaments.value.trim();

	if (turnamentsValue === '') {
		console.log('Le nombre de tournois doit être précisé !');
		return false;
	} else {
		console.log('Nombre de tournois validé !');
		return true;
	}
};

const checkLocation = () => {
	const locations = document.getElementsByName('location');

	let i = 0;

	while (i < locations.length) {
		if (locations[i].checked) {
			i++;
			console.log('Option validé !');
			return true;
		} else {
			console.log('Il faut choisir une option !');
			return false;
		}
	}
};

function checkConditions() {
	if (!conditions.checked) {
		console.log('Il faut valider les conditions !');
		return false;
	} else {
		console.log(`Merci d'avoir validé les conditions !`);
		return true;
	}
}

const validate = () => {
	checkFirstName();
	checkLastName();
	checkEmail();
	checkBirthdate();
	checkTurnaments();
	checkLocation();
	checkConditions();
};

form.addEventListener('submit', (e) => {
	if (
		checkFirstName() == false ||
		checkLastName() == false ||
		checkEmail() == false ||
		checkBirthdate() == false ||
		checkTurnaments() == false ||
		checkLocation() == false ||
		checkConditions() == false
	) {
		e.preventDefault();
	}
});
