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
modalForm.addEventListener("submit", function () {
	return validate();
});
