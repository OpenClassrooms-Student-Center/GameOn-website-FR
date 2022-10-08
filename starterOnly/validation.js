const form = document.getElementById('form');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const geoloc = document.querySelector('checkbox-input');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	validate();

	console.log('Validé !');
});

const validate = function () {
	console.log('test');
};
