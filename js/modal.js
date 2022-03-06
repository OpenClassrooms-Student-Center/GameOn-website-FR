// DOM Elements

const topNav = document.getElementById("myTopnav");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalIcon = document.querySelector(".close");
const navIcon = document.querySelector(".nav-icon");
const modalForm = document.getElementById("modal-form");

// Menu burger
navIcon.addEventListener("click", editNav);
function editNav() {
	if (topNav.className === "topnav") {
		topNav.className += " responsive";
	} else {
		topNav.className = "topnav";
	}
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
	modalbg.style.display = "block";
}

// close modal event
closeModalIcon.addEventListener("click", function () {
	modalbg.style.display = "none";
});

// Form on submit event
modalForm.addEventListener("submit", function (e) {
	e.preventDefault();
	const firstname = document.getElementById("first").value;
	const lastname = document.getElementById("last").value;
	const email = document.getElementById("email").value;
	const birthdate = document.getElementById("birthdate").value;
	const quantityTournament = document.getElementById("quantity").value;
	const placeTournament = document.querySelector('input[name="location"]:checked').value;
	const checkboxConditions = document.getElementById("checkbox1").value;
	console.log(firstname);
	console.log(lastname);
	console.log(email);
	console.log(birthdate);
	console.log(quantityTournament);
	console.log(placeTournament);
	console.log(checkboxConditions);
	// return validate();
});
