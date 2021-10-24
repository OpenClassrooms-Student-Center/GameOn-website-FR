function editNav() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

// DOM Elements
//modal related elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const modalBody = document.querySelector('.modal-body');
const formData = document.querySelectorAll('.formData');
const closeFormCross = document.querySelectorAll('.close');
const btnSubmit = document.querySelectorAll('.btn-submit');
const textControls = document.querySelectorAll('.text-control');
const successSubmitMessage = document.querySelector('.successMessageOnSubmit');


//others
const myTopNav = document.getElementById('myTopnav');
const mainNavBar = document.querySelector('.main-navbar');
const body = document.querySelector('body');
const main = document.querySelector('main');
const content = document.querySelector('content');

let isEverythingGood = true;



// open modal event
modalBtn.forEach((btn) => btn.addEventListener('click', openModal));

// close modal event
closeFormCross.forEach((cross) => cross.addEventListener('click', closeModal));

// modal form submit event
btnSubmit.forEach((btnSubmit) => btnSubmit.addEventListener('click', (event) => handleFormSubmit(event)));

// open modal form
function openModal() {
	//few css changes so everything look clean
	body.style.overflow = "hidden";
	main.style.fontSize="initial";
	myTopNav.style.cssText = "display: flex; flex-direction: column;position: fixed;z-index: 5;background: white;padding: 3.5%;width: 100%;margin: initial;";

	modalbg.style.display = `flex`;

	//allow to see header on tablet/mobile when modal opened
	if (window.matchMedia("(max-width: 1000px)").matches) {
		modalbg.style.height = `calc(100vh - ${myTopNav.offsetHeight}px + ${mainNavBar.offsetHeight}px`;
		console.log(mainNavBar.offsetHeight);
	}else{
		modalbg.style.height = `100%`
	}
	
	
}

// close modal form
function closeModal() {

	//remove css we added at the opening
	body.style.overflow = "initial";
	main.style.fontSize="130%";
	myTopNav.style.cssText = 'display: flex; flex-direction: column;position: relative;';
	
	//make modal disappear
	modalbg.style.display = 'none';

	//make success submit message disappear
	successSubmitMessage.style.display = 'none';
	
	


}

// Validates that the input string is a valid date formatted as "mm-dd-yyyy"
function isValidDate(dateString) {
	// First check for the pattern
	if (!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(dateString)) return false;

	// Parse the date parts to integers
	const parts = dateString.split('-');
	const day = parseInt(parts[2], 10);
	const month = parseInt(parts[1], 10);
	const year = parseInt(parts[0], 10);

	// Check the ranges of month and year
	if (year < 1900 || year > 3000 || month == 0 || month > 12) return false;

	//check if birthday date is before today
	if (Date.now() < Date.parse(dateString)) return false;

	let monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

	// Adjust for leap years
	if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;

	console.log(day > 0 && day <= monthLength[month - 1]);

	// Check the range of the day
	return day > 0 && day <= monthLength[month - 1];
}

//add and remove error messages
function handleErrorMessage(input, condition) {
	const error = document.getElementById(input.id + '-error-message');

	if (condition) {
		input.parentElement.setAttribute('data-error-visible', "false")
	}else{
			//display error message
			input.parentElement.setAttribute('data-error-visible', "true")

			isEverythingGood = false;
	}
}

//handle modal form submit
function handleFormSubmit(event) {
	isEverythingGood = true;
	//prevent form from submitting (we want to check inputs first)
	event.preventDefault();

	textControls.forEach((textControl) => {
		let inputValue = textControl.value;
		let elementId = textControl.id;

		// check text control inputs' format validation if true
		switch (elementId) {
			case 'first':
			case 'last':
				const condition = inputValue && inputValue.length >= 2;
				const errorMessage = 'Veuillez entrer 2 caractères ou plus.';

				handleErrorMessage(textControl, condition, errorMessage);

				break;
			case 'email':
				const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				const emailCondition = inputValue && regexEmail.test(String(inputValue).toLowerCase());
				const emailErrorMessage = 'Vous devez entrer un email valide.';

				handleErrorMessage(textControl, emailCondition, emailErrorMessage);

				break;
			case 'birthdate':
				const birthdateCondition = inputValue && isValidDate(inputValue);
				const birthdateErrorMessage = 'Vous devez entrer votre date de naissance.';

				handleErrorMessage(textControl, birthdateCondition, birthdateErrorMessage);

				break;
			case 'quantity':
				const quantityCondition = inputValue && Number.isInteger(Number(inputValue)) && Number(inputValue) >= 0;
				const quantityErrorMessage = 'Vous devez entrer un caractère numérique.';

				handleErrorMessage(textControl, quantityCondition, quantityErrorMessage);

				break;

			default:
				console.log(elementId + ' DEFAULT error');

				break;
		}
	});

	//make sure at least one location checkbox is checked
	let isOneOfThemChecked = false;
	for (let i = 1; i <= 6; i++) {
		let checkboxId = 'location' + i;

		if (document.getElementById(checkboxId).checked) {
			isOneOfThemChecked = true;
		}
	}

	//display error messages if not
	const location1Checkbox = document.getElementById('location1');
	const locationsCheckboxesCondition = isOneOfThemChecked;
	const locationsCheckboxesErrorMessage = 'Vous devez choisir une ville.';

	handleErrorMessage(location1Checkbox, locationsCheckboxesCondition, locationsCheckboxesErrorMessage);

	//check if TOS checkbox is checked and call handleErrorMessage
	const termsOfServiceCheckbox = document.getElementById('checkbox1');
	const termsOfServiceCondition = termsOfServiceCheckbox.checked;
	const termsOfServiceErrorMessage = 'Vous devez vérifier que vous acceptez les termes et conditions.';

	handleErrorMessage(termsOfServiceCheckbox, termsOfServiceCondition, termsOfServiceErrorMessage);

	// 2-trigger submit if everything is good
	if (isEverythingGood) {
		//display success submit message 
		successSubmitMessage.style.display= "flex";

	}
}




