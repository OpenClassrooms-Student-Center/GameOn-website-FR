function editNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeCross = document.querySelector(".close");
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const nbOfCompetitions = document.getElementById('quantity');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}
closeCross.addEventListener("click", closeModal);

// verification of the first name and last name field has a minimum of 2 characters / is not empty
let data = [firstName, lastName, email];

function minLength(data) {
    for (let input of data) {
        input.addEventListener('blur', function (e) {
            if (e.target.value.length < 2) {
                console.log('Vous devez avoir un minimum de 2 caractéres');
            } else {
                console.log('vous avez 2 caracteres');
            }
        })
    }
}

function isEmpty(data) {
    for (let input of data) {
        input.addEventListener('blur', function (e) {
            if (e.target.value.length == 0) {
                console.log('le champ est vide');
            } else {
                console.log('le champ n\'est pas vide');
            }
        })
    }
}

minLength(data);
isEmpty(data);

// verification of the email address
email.addEventListener('blur', function (e) {
    let emailReg = new RegExp(/([\w-\.]+@[\w\.]+\.{1}[\w]+)/);
    let result = emailReg.test(e.target.value);
    if (result) {
        console.log('L\'email est valide');
    } else {
        console.log('L\'email n\'est pas valide');
    }
})

// verification of a numeric value for the number of competitions
nbOfCompetitions.addEventListener('blur', function (e) {
    let value = parseInt(e.target.value);
    if (typeof (value) === 'number' && value > 0 && value < 99) {
        console.log('C\'est un nombre');
    } else {
        console.log('Ce n\'est pas un nombre');
    }
    console.log(typeof (value));
})

// checking the selection of a radio button

// check the state of the general conditions box, the other box is optional / can be left unchecked

// keep the form data when it does not pass validation

// adding validation or error messages 

// user confirmation message of successful submission

// user interface and functionality test
