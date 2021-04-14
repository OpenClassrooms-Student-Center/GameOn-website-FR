
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

const form = document.getElementsByName('reserve')[0];
const firstName = form[0];
const lastName = form[1];
const email = form[2];
const birthdate = form[3];
const quantity = form[4];



// EVENTS
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModal);
form.addEventListener("submit", validate);


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

function validate(event) {
    let valide = true;
    console.log(validate)
    const regexName = /^[a-zA-Z '\-éèêëçäàï]{5,}$/;
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexNumber = /^[0-9]$/;

    document.getElementById('error-first').innerHTML = 'Leazeeazeaze';

    if (!firstName.value.match(regexName)) {
        valide = false;
        document.getElementById('error-first').innerHTML = 'Le nom doit contenir entre 2 et 50 caractères';
    }
    if (!lastName.value.match(regexName)) {
        valide = false;
        
    }
    if (!email.value.match(regexEmail)) {
        valide = false;
       
    }
    if (valide) {
        return true;
    } else {
        event.preventDefault();
    }
}