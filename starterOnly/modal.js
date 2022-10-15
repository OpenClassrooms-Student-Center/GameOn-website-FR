// Open & close responsive menu
function editNav() {
	const menu = document.getElementById('myTopnav');
	if (menu.className === 'topnav') {
		menu.className += ' responsive';
	} else {
		menu.className = 'topnav';
	}
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const contentForm = document.querySelector('.content');
const modalEnd = document.querySelector('.modal-end');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeBtn = document.querySelectorAll('.close');
const overlay = document.querySelector('.overlay');

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// Launch modal form
function launchModal() {
	modalbg.style.display = 'block';
	contentForm.style.display = 'block';
	modalEnd.style.visibility = 'hidden';
}

// Close modal form
function closeModal() {
	modalbg.style.display = 'none';
}

closeBtn.forEach((closer) => closer.addEventListener('click', closeModal));
overlay.addEventListener('click', closeModal);
