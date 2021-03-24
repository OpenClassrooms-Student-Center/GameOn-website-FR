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
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const nbOfCompetitions = document.getElementById("quantity");
const radios = document.querySelectorAll("input[type='radio']");
const checkbox = document.querySelectorAll("input[type='checkbox']");

// management modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeCross.addEventListener("click", closeModal);

// verification of entered data
firstName.addEventListener("blur", function (e) {
    minLength(e.target.value, 2);
    isEmpty(e.target.value);
})

lastName.addEventListener("blur", function (e) {
    minLength(e.target.value, 2);
    isEmpty(e.target.value);
})

email.addEventListener("blur", function (e) {
    isEmpty(e.target.value);
    emailValidity(e.target.value);
})

nbOfCompetitions.addEventListener("blur", function (e) {
    typeOfValue(e.target.value);
    interval(e.target.value, 0, 99);
})

isChecked(radios);

state(checkbox[0]);
state(checkbox[1]);

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}

// minimum character test
function minLength(data, nbOfCharacters) {
    if (data < nbOfCharacters) {
        console.log("Vous devez avoir un minimum de " + nbOfCharacters + " caractéres");
    } else {
        console.log("vous avez 2 caracteres");
    }
}

// test field not empty
function isEmpty(data) {
    if (data.length == 0) {
        console.log("le champ est vide");
    } else {
        console.log("le champ n'est pas vide");
    }
}

// test email adress
function emailValidity(data) {
    let emailReg = new RegExp(/([\w-\.]+@[\w\.]+\.{1}[\w]+)/);
    let result = emailReg.test(data);
    if (result) {
        console.log("L'email est valide");
    } else {
        console.log("L'email n'est pas valide");
    }
}

// test numeric value 
function typeOfValue(data) {
    let value = parseInt(data);
    if (typeof (value) === "number") {
        console.log("C'est un nombre");
    } else {
        console.log("Ce n'est pas un nombre");
    }
}

// test interval value
function interval(data, minValue, maxValue) {
    let value = parseInt(data);
    if (value > minValue && value < maxValue) {
        console.log("C'est un nombre compris entre " + minValue + " et " + maxValue);
    } else {
        console.log("Ce n'est pas un nombre compris entre 0 et 99");
    }
}

// check the selection of a radio button
function isChecked(data) {
    for (let i = 0; i < data.length; i++) {
        if (!data[i].checked) {
            console.log("aucune checkbox validé");
        } else {
            console.log("checkbox validé");
            console.log(data[i].value);
        }
    }
}

// check the state of the general conditions box, the other box is optional / can be left unchecked
function state(data) {
    if (data.checked) {
        console.log("checked");
    } else {
        console.log("not checked");
    }
}

// keep the form data when it does not pass validation

// adding validation or error messages 

// user confirmation message of successful submission

// user interface and functionality test
