function editNav() {
	var $x = document.getElementById("myTopnav");
	if ($x.className === "topnav") {
		$x.className += " responsive";
	} else {
		$x.className = "topnav";
	}
}

// DOM Elements
const $modalBg = document.querySelector(".bground");
const $modalBtn = document.querySelectorAll(".modal-btn");
const $formData = document.querySelectorAll(".formData");
const $closeBtns = document.querySelectorAll("[data-action='close']");
const $form = document.querySelector('[name="reserve"]');
const $firstname = document.getElementById("first");
const $lastname = document.getElementById("last");
const $email = document.getElementById("email");
const $birthdate = document.getElementById("birthdate");
const $quantity = document.getElementById("quantity");
const $locations = document.querySelectorAll(".checkbox-input[type='radio']");
const $conditions = document.getElementById("checkbox1");

// launch modal event
$modalBtn.forEach(($btn) => $btn.addEventListener("click", launchModal));

// remove the data-error and data-error-visible attributes
$formData.forEach(($inputBlock) => {
	// get the input elements from its parent
	const inputs = $inputBlock.querySelectorAll("input");

	inputs.forEach((input) => {
		// remove the data-error and data-error-visible attributes from
		// the parent element when the input is clicked
		input.addEventListener("click", () => {
			$inputBlock.removeAttribute("data-error");
			$inputBlock.removeAttribute("data-error-visible");
		});
	});
});

// close modal $form on click
$closeBtns.forEach(($btn) => {
	$btn.addEventListener("click", () => closeModal($btn));
});

// listen for submit event
$form.addEventListener("submit", validateform);

/**
 * @description
 * This function is used to launch the modal $form
 */
function launchModal() {
	$modalBg.style.display = "block";
	toggleBodyOverflow();
	$formData.forEach(($input) => {
		$input.removeAttribute("data-error");
		$input.removeAttribute("data-error-visible");
	});
}

/**
 * @description
 * This function is used to validate an $email
 * @param {string} email
 * @returns boolean
 */
function validateemail(email) {
	const re = /\S+@\S+\.\S+/;
	return re.test(email);
}

/**
 * @description
 * This function is used to close the modal $form
 */
function closeModal($btn) {
	const $parentModal = $btn.closest("[data-container='modal']");
	$parentModal.style.display = "none";
	toggleBodyOverflow();
}

/**
 * @description
 * This function is used to show an error message
 * @param {HTMLInputElement} $input
 * @param {string} message
 */
function showError($input, message) {
	const $formControl = $input.parentElement;

	// add the data-error attribute to the parent element
	$formControl.setAttribute("data-error", message);
	$formControl.setAttribute("data-error-visible", true);
}

/**
 * @description
 * This function is used to validate the $form
 * @param {SubmitEvent} e
 */
function validateform(e) {
	e.preventDefault();
	let isValid = true;
	// check if $firstname is empty
	if ($firstname.value.trim().length < 2) {
		showError($firstname, "First name is required");
		isValid = false;
	}
	// check if $lastname is empty
	if ($lastname.value.trim().length < 2) {
		showError($lastname, "Last name is required");
		isValid = false;
	}
	// check if $email is empty or invalid
	if ($email.value.trim().length < 2 || !validateemail($email.value)) {
		showError($email, "A correct email is required");
		isValid = false;
	}
	// check if $birthdate is empty
	if ($birthdate.value.trim() === "" || !birthdateValidation($birthdate.value)) {
		showError($birthdate, "birthdate is required");
		isValid = false;
	}
	// check if $quantity is empty
	if ($quantity.value.trim() === "" || isNaN($quantity.value)) {
		showError($quantity, "quantity is required");
		isValid = false;
	}
	// check if at least one location is checked
	let locationChecked = Array.from($locations).some((location) => location.checked);

	if (!locationChecked) {
		showError($locations[0], "Location is required");
		isValid = false;
	}

	// check if $conditions is checked
	if (!$conditions.checked) {
		showError($conditions, "conditions is required");
		isValid = false;
	}

	if (isValid) {
		closeModal(e.target);
		openThankYouModal();
	}
}

function openThankYouModal() {
	toggleBodyOverflow();
	const $thankYouModal = document.querySelector("#thanks-modal");
	$thankYouModal.style.display = "block";
}

/**
 *
 * @param {number} birhtdate
 * @returns boolean
 */
function birthdateValidation(birth) {
	const today = new Date();
	const birthdate = new Date(birth);
	return birthdate < today;
}

function toggleBodyOverflow() {
	document.body.style.overflow = document.body.style.overflow === "hidden" ? "auto" : "hidden";
}
