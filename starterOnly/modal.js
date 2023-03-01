function editNav() {
    var x = document.getElementById("myTopnav");
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
const closeModalBtn = document.querySelectorAll(".close");

const form = document.getElementsByName('reserve')[0];
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const eMail = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const nbTournament = document.getElementById('quantity');

const loc_form = document.querySelectorAll('.text-label + .formData')[0];
const loc1 = document.getElementById('location1');
const loc2 = document.getElementById('location2');
const loc3 = document.getElementById('location3');
const loc4 = document.getElementById('location4');
const loc5 = document.getElementById('location5');
const loc6 = document.getElementById('location6');

const checkBoxTOS = document.getElementById('checkbox1');
const checkBoxIcon = document.querySelector(".checkbox2-label .checkbox-icon");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}

// Give coloration of the input in depences of validation
// Parameter validate = true if input validate, false else
function colorValidInput(element, validate) {
    if(validate) { // Validate green
        element.style.backgroundColor = '#a7daa7';
        element.style.border = '5px solid #0b520b';
    } else { // Not Validate red
        element.style.backgroundColor = '#ffdddd';
        element.style.border = '5px solid #7c1717';
    }
}

/* Prevent form to act by its own */
form.addEventListener("submit", (event) => {event.preventDefault();});
eMail.addEventListener("invalid", (event) => {event.preventDefault();});

/* Create event listener when input birthdate is invalid */
birthdate.addEventListener("invalid", (event) => {
    colorValidInput(birthdate, false);
    event.preventDefault();
});

/* Create event listener when input number value for number of tournaments */
nbTournament.addEventListener('keydown', (evt) => {
    valueNb = Number(nbTournament.value);

    if(evt.key === "ArrowLeft" || evt.key === "ArrowRight" || evt.key === "Backspace" || evt.key === "Delete")
    {
        // Always autorize use Left / Right, Backspace, Delete keys
    }
    else if(/^[0-9]*$/.test(evt.key) == 1)
    {
        if(valueNb >= 10)
        {
            nbTournament.value = 99;
            evt.preventDefault();
        }
    } else {
        evt.preventDefault();
    }
});

/* Add event to check change on TOS checkbox */
checkBoxTOS.addEventListener("change", function() {
    if(!checkBoxTOS.checked) {
        checkBoxIcon.style.backgroundColor = "#c4c4c4";
    } else {
        checkBoxIcon.style.backgroundColor = "#279e7a";
    }
});

/* Function of check */
function checkTextElement(string, regex, checkEmpty = true) {
    if(checkEmpty) {
        if(string.trim() == "" || !string || string.length < 2
        || !regex.test(string))
        {
            return false; // Error in sentence
        } else {
            return true; // No error in sentence
        }
    } else {
        if(!regex.test(string))
        {
            return false; // Error in sentence
        } else {
            return true; // No error in sentence
        }
    }
}

function checkInputText(element, contentCheck, checkEmpty) {
    let retValue = true;

    if(checkTextElement(element.value, contentCheck, checkEmpty)) 
    {
        colorValidInput(element, true);
        retValue = true;
    } else {
        colorValidInput(element, false);
        retValue = false;
    }

    return retValue;
}

/* Form validation function */
function validate() {
    let formValid = true;

    let regexName = /^[a-zA-Z -]+$/;
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let minAge = 10;
    let maxAge = 150;

    formValid |= checkInputText(firstName, regexName);
    formValid |= checkInputText(lastName, regexName);
    formValid |= checkInputText(eMail, regexEmail, false);

    // birthdate
    if(!birthdate.value || birthdate.value === '') {
        colorValidInput(birthdate, false);
        formValid = false;
    } else {
        const birthdateYear = Number(birthdate.value.split('-')[0]);
        const currentYear = new Date().getFullYear();

        // Trop jeune ou trop vieux
        // Permet aussi d'éviter les gens qui mettent une date pas encore arrivée
        if((currentYear - birthdateYear) > 150 
            || (currentYear - birthdateYear) < 10 ) {
            colorValidInput(birthdate, false);
            formValid = false;
        } else {
            colorValidInput(birthdate, true);
        }
    }

    // nbTournament
    if(nbTournament.value == "")
    {
        formValid = false;
        colorValidInput(nbTournament, false);
    } else {
        colorValidInput(nbTournament, true);
    }

    // loc_form
    if(!loc1.checked && !loc2.checked && !loc3.checked 
        && !loc4.checked && !loc5.checked && !loc6.checked)
    {
        formValid = false;
        colorValidInput(loc_form, false);
    } else {
        colorValidInput(loc_form, true);
    }
    // Adapt the style of the div
    loc_form.style.borderRadius = "15px";
    for(const elm of document.querySelectorAll('.text-label + .formData > .checkbox-label'))
    {
        elm.style.color = "black";
    }

    /* Verify if checkbox is checked */
    if(!checkBoxTOS.checked) {
        checkBoxIcon.style.backgroundColor = "#b61a1a";
        formValid = false;
    }

    if(formValid) {
        console.log('Formulaire complet');
        // closeModal();
    }
    return formValid;
}