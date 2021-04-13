
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const firstName = document.getElementsByName("first");
const lastName = document.getElementsByName("last");
const email = document.getElementsByName("email");
const birthdate = document.getElementsByName("birthdate");
const quantity = document.getElementsByName("quantity");


// EVENTS
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModal);



// FUNCTIONS
function launchModal() {
    modalbg.style.display = "block";
}

function closeModal() {
    modalbg.style.display = "none";
}

function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function validate() {
    let valide = true;

    const regexName = /^[a-zA-Z '\-éèêëçäàï]{5,}$/;
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexNumber = /^[0-9]$/;

    if (!firstName.value.match(regexName)) {
        valide = false;
        firstName.setCustomValidity("");
    }
    if (!lastName.value.match(regexName)) {
        valide = false;
        lastName.setCustomValidity("Le nom doit contenir au minimum 2 caractères");
    }
    if (!email.value.match(regexEmail)) {
        valide = false;
        email.setCustomValidity("L'adresse électronique n'est pas valide");
    }
    if (valide) {
        return valide;
    } else {
        event.preventDefault();
    }
}