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
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// Launch modal form
function launchModal() {
	modalbg.style.display = 'block';
}
