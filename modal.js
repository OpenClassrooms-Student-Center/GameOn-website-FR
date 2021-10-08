function editNav() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeFormCross = document.querySelectorAll('.close');
const btnSubmit = document.querySelectorAll('.btn-submit');
const textControls = document.querySelectorAll('.text-control');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// close modal event
closeFormCross.forEach((cross) => cross.addEventListener('click', closeModal));

// modal form submit event
btnSubmit.forEach((btnSubmit) => btnSubmit.addEventListener('click', (event) => handleFormSubmit(event)));

// launch modal form
function launchModal() {
	modalbg.style.display = 'block';
}

// close modal form
function closeModal() {
	modalbg.style.display = 'none';
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
function handleErrorMessage(element, condition, errorMessage) {
	const error = document.getElementById(element.id + '-error-message');

	switch (true) {
		case condition && element.parentElement.contains(error):
			error.remove();

			break;
		case !condition:
			isEverythingGood = false;

			//display only one error message
			if (!element.parentElement.contains(error)) {
				const errorBlock = document.createElement('p');
				const errorMessageNode = document.createTextNode(errorMessage);

				errorBlock.style.cssText = 'color:red; font-size:15px;';
				errorBlock.setAttribute('id', element.id + '-error-message');
				errorBlock.appendChild(errorMessageNode);

				element.parentElement.appendChild(errorBlock);
			}
			break;

		default:
			// console.log('everything is good (y)');
			break;
	}
}
let isEverythingGood = true; //initiated outside handleFormSubmit() so handleErrorMessage() can use it

//handle modal form submit
function handleFormSubmit(event) {
	isEverythingGood = true;
	//prevent form from submitting (we want to check inputs first)
	event.preventDefault();

	const textControls = document.querySelectorAll('.text-control');

	textControls.forEach((textControl) => {
		let inputValue = textControl.value;
		let elementId = textControl.id;

		// check text control inputs' format validation if true
		switch (elementId) {
			case 'first':
				const firstCondition = inputValue && inputValue.length >= 2;
				const firstErrorMessage = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';

				handleErrorMessage(textControl, firstCondition, firstErrorMessage);

				break;
			case 'last':
				const lastCondition = inputValue && inputValue.length >= 2;
				const lastErrorMessage = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';

				handleErrorMessage(textControl, lastCondition, lastErrorMessage);

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

	//check if one location checkbox is checked
	let isOneOfThemChecked = false;
	for (let i = 1; i <= 6; i++) {
		let checkboxId = 'location' + i;

		if (document.getElementById(checkboxId).checked) {
			isOneOfThemChecked = true;
		}
	}
	const location1Checkbox = document.getElementById('location1');
	const locationsCheckboxesCondition = isOneOfThemChecked;
	const locationsCheckboxesErrorMessage = 'Vous devez choisir une ville.';

	handleErrorMessage(location1Checkbox, locationsCheckboxesCondition, locationsCheckboxesErrorMessage);

	//check if TOS checkbox is checked
	const termsOfServiceCheckbox = document.getElementById('checkbox1');
	const termsOfServiceCondition = termsOfServiceCheckbox.checked;
	const termsOfServiceErrorMessage = 'Vous devez vérifier que vous acceptez les termes et conditions.';

	handleErrorMessage(termsOfServiceCheckbox, termsOfServiceCondition, termsOfServiceErrorMessage);

	// 2-trigger submit if everything is good
	if (isEverythingGood) {
		//display sucess submit message for 3s before submitting form
		const main = document.getElementsByTagName('main')[0];

		const sucessSubmitBlock = document.createElement('div');
		const sucessSubmitText = document.createTextNode('Merci ! Votre réservation a été reçue.');

		sucessSubmitBlock.style.cssText =
			'width: 100%;color:green;background:rgba(200, 255, 203, 0.9);font-size:30px;position: fixed;top:50%; right:50%; transform: translateX(50%);text-align:center;z-index: 10;padding: 20px';
		sucessSubmitBlock.appendChild(sucessSubmitText);

		main.appendChild(sucessSubmitBlock);

		setTimeout(function() {
			const myForm = document.querySelector('.modal-body form');
			myForm.submit();
		}, 3000);
	}
}

//UI corrections
const topNavIcon = document.querySelector('.topnav .icon');
const myTopNav = document.getElementById('myTopnav');
const mainNavbarLinkArray = document.querySelectorAll('.main-navbar a');

myTopNav.style.cssText = 'display: flex; flex-direction: column;position: relative;';
topNavIcon.style.cssText = 'position: absolute; top:0; right:0; margin-top: 0px;';

for (let index = 0; index < mainNavbarLinkArray.length - 1; index++) {
	mainNavbarLinkArray[index].style.cssText = 'font-size: 18px';
}

function fixTheResponsive() {
	// Create a media condition that targets viewports
	const mediaQuery1000pxMax = window.matchMedia('(max-width: 1000px)');
	const mediaQuery1001pxMin = window.matchMedia('(min-width: 1001px)');
	const mediaQuery540px = window.matchMedia('(min-width: 540px)');

	//element that we change the style
	const heroHeadlinearray = document.getElementsByClassName('hero-headline');
	const heroTextarray = document.getElementsByClassName('hero-text');
	const heroContentarray = document.getElementsByClassName('hero-content');
	const heroSectionarray = document.getElementsByClassName('hero-section');
	const btnSignUpArray = document.getElementsByClassName('btn-signup');
	const mainArray = document.getElementsByTagName('main');

	if (mediaQuery1000pxMax.matches) {
		heroHeadlinearray[0].style.cssText = 'font-size:200%;text-align:center;';
		heroTextarray[0].style.cssText = 'width: auto; text-align: center;';
		heroContentarray[0].style.cssText = 'min-width: initial;';
		heroSectionarray[0].style.cssText = 'display: block;';
		btnSignUpArray[0].style.cssText = 'margin: 20px auto auto auto';
		mainArray[0].style.cssText = 'padding:0; margin: auto;';
	}

	if (mediaQuery1001pxMin.matches) {
		heroHeadlinearray[0].style.cssText = '';
		heroTextarray[0].style.cssText = '';
		heroContentarray[0].style.cssText = '';
		heroSectionarray[0].style.cssText = '';
		btnSignUpArray[0].style.cssText = '';
		mainArray[0].style.cssText = '';
	}
}

//apply the change
fixTheResponsive();

// Check if the screen is being resized otherwide the css changes are not applied
window.addEventListener('resize', fixTheResponsive);
