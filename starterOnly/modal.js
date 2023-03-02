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
const checkBoxTOS = document.getElementById('checkbox1');

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

/** function colorValidInput
 * Change the background color and the border of an input if
 * it's valid or not
 * @param {Element valid or invalid} element 
 * @param {Status of the input, true for valid, else false} validate 
 */
function colorValidInput(element, validate) {
    if(validate) { // Validate green
        element.style.backgroundColor = '#a7daa7';
        element.style.border = '5px solid #0b520b';
    } else { // Not Validate red
        element.style.backgroundColor = '#ffdddd';
        element.style.border = '5px solid #7c1717';
    }
}

/** printErrorMessage
 * Print an error message under the not validate input
 * @param {Element not validate} element 
 * @param {Text to print} texte 
 */
function printErrorMessage(element, texte) {
    const parentElement = element.parentNode;
    let errorMessage = parentElement.querySelector('.error');

    if(errorMessage) {
        errorMessage.style.display = 'inline-block';
        errorMessage.innerText = texte;
    } else {
        let pError = document.createElement("p");

        pError.style.color = "red";
        pError.style.display = "inline-block";
        pError.style.padding = "0 0 2px 12px";
        pError.style.fontSize = ".6em";

        pError.innerText = texte;

        pError.classList.add('error');
        parentElement.appendChild(pError);
    }
}

/** hideErrorMessage
 * Hide the Error message under an input
 * @param {Element valid under which the text must be hide} element 
 */
function hideErrorMessage(element) {
    const parentElement = element.parentNode;
    let errorMessage = parentElement.querySelector('.error');

    if(errorMessage) {
        errorMessage.style.display = 'none';
    }
}

// Add listener to prevent default action
form.addEventListener("submit", (event) => {event.preventDefault();});
eMail.addEventListener("invalid", (event) => {event.preventDefault();});

// Add listener to color birthdate if invalid and prevent default
birthdate.addEventListener("invalid", (event) => {
    colorValidInput(event.target, false);
    printErrorMessage(event.target, "Vous devez entrer une date valide.");
    event.preventDefault();
});

// Add listener to check the input of nbTournament
// Give rules to be sure to have only a number between 0 and 99
nbTournament.addEventListener('keydown', (evt) => {
    valueNb = Number(evt.target.value);

    if(evt.key === "ArrowLeft" || evt.key === "ArrowRight" || evt.key === "Backspace" || evt.key === "Delete")
    {
        // Always autorize use Left / Right, Backspace, Delete keys
    }
    else if(/^[0-9]*$/.test(evt.key) == 1)
    {
        if(valueNb >= 10)
        {
            evt.target.value = 99;
            evt.preventDefault();
        }
    } else {
        evt.preventDefault();
    }
});

// Add listener to change the color of TOS checkbox if it's checked or not
checkBoxTOS.addEventListener("change", (evt) => {
    if(!evt.target.checked) {
        evt.target.nextElementSibling.children[0].style.backgroundColor = "#c4c4c4";
    } else {
        evt.target.nextElementSibling.children[0].style.backgroundColor = "#279e7a";
    }
});

/** checkName
 * Check a string with a regex
 * @param {string input} element 
 * @param {regex to check string} regex 
 * @param {true to check if the string is empty} checkEmpty 
 * @returns true if the string is correct, else false
 */
function checkName(element) {
    let retValue = true;
    let regex = /^[a-zA-Z -]+$/;
    inputText = element.value;

    if(inputText.trim() == "" || !inputText || inputText.length < 2) {
            retValue =  false; // Sentence empty
            colorValidInput(element, false);
            printErrorMessage(element, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    } else if(!regex.test(inputText)) {
            retValue = false; // Error in sentence
            colorValidInput(element, false);
            printErrorMessage(element, "Votre nom ne doit pas contenir de caractère spécial");
    } else {
        retValue = true; // No error in sentence
        colorValidInput(element, true);
        hideErrorMessage(element);
    }

    return retValue;
}

/** checkEmail
 * Check if the email is correct
 * @param {Element to check} element 
 * @returns true if element is valid, else false
 */
function checkEmail(element) {
    let retValue = true;
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    inputText = element.value;

    if(!regex.test(inputText)) {
            colorValidInput(element, false);
            printErrorMessage(element, "Votre adresse mail doit être valide");
            retValue = false; // Error in sentence
    } else {
        colorValidInput(element, true);
        hideErrorMessage(element);
        retValue = true; // No error in sentence
    }

    return retValue;
}

/** checkDate
 * Check if the date is valid, between 2 defined age
 * Check also if the person give a past date or not
 * @param {Date element to check} element 
 * @param {Min age to have} min 
 * @param {Max age to have} max 
 * @returns true if element is valid, else false
 */
function checkDate(element, min, max) {
    let retValue = true;

    if(!element.value || element.value === '') {
        colorValidInput(element, false);
        printErrorMessage(element, "Vous devez entrer votre date de naissance.");
        retValue = false;
    } else {
        let dateYear = Number(element.value.split('-')[0]);
        let currentYear = new Date().getFullYear();

        // Trop jeune ou trop vieux
        // Permet aussi d'éviter les gens qui mettent une date pas encore arrivée
        if((currentYear - dateYear) < 0) {
            colorValidInput(element, false);
            printErrorMessage(element, "Vous n'êtes pas encore né ?!");
            retValue = false;
        } else if((currentYear - dateYear) < min) {
            colorValidInput(element, false);
            printErrorMessage(element, "Vous devez avoir au moins "+ min +"ans.");
            retValue = false;
        } else if ((currentYear - dateYear) > max) {
            colorValidInput(element, false);
            printErrorMessage(element, "Vous semblez un peu vieux.");
            retValue = false;
        } else {
            colorValidInput(element, true);
            hideErrorMessage(element);
            retValue = true;
        }
    }

    return retValue;
}

/** checkNumber
 * Check if the number is valid, not null
 * The event listener check if the value is between the defined limits
 * @param {Number element to check} element 
 * @returns true if element is valid, else false
 */
function checkNumber(element) {
    let retValue = true;
    if(element.value == "")
    {
        colorValidInput(element, false);
        printErrorMessage(element, "Veuillez saisir une valeur numérique.");
        retValue = false;
    } else {
        colorValidInput(element, true);
        hideErrorMessage(element);
        retValue = true;
    }
    return retValue;
}

/** checkSelectionList
 * Check if there is at least one checkbox checked
 * @param {Div with checkbox inside} divInput 
 * @returns true if element is valid, else false
 */
function checkSelectionList(divInput) {
    let retValue = true;

    array = Array.from(divInput.getElementsByTagName('input'));
    if(array.every(elem => {
        return !elem.checked;
    })) {
        colorValidInput(divInput, false);
        printErrorMessage(divInput, "Vous devez choisir une option.");
        retValue = false;
    }
    else {
        colorValidInput(divInput, true);
        hideErrorMessage(divInput);
        retValue = true;
    }
    // Adapt the style of the div
    divInput.style.borderRadius = "15px";
    for(const elm of divInput.getElementsByTagName('label'))
    {
        elm.style.color = "black";
    }

    return retValue;
}

/** checkTOS
 * Check if the Terms of Service are checked
 * @param {Checkbox TOS} element 
 * @returns true if element is valid, else false
 */
function checkTOS(element) {
    let retValue = true;

    if(!element.checked) {
        element.nextElementSibling.children[0].style.backgroundColor = "#b61a1a";
        printErrorMessage(element, "Vous devez vérifier que vous acceptez les termes et conditions.");
        retValue = false;
    } else {
        hideErrorMessage(element);
        retValue = true;
    }

    return retValue;
}

/**
 * 
 */
function modalValidMessage() {
    form.style.display = "none";

    const parentElement = form.parentNode;
    let validMessage = parentElement.querySelector('.valid');

    if(validMessage) {
        validMessage.style.display = 'inline-block';
    } else {
        let validMessage = document.createElement("div");

        validMessage.style.color = "green";
        validMessage.style.display = "inline-block";
        validMessage.style.padding = "12px 2px 2px 12px";
        validMessage.style.fontSize = "1.2em";
        validMessage.style.backgroundColor = '#a7daa7';
        validMessage.style.border = '5px solid #0b520b';

        validMessage.innerHTML = "<p>Formulaire validé</p>";

        pError.classList.add('valid');
        parentElement.appendChild(pError);
    }
}

/**
 * 
 */
function resetModal() {
    
}

/** validate
 * Validation of the form
 * @returns true if the form is validate, else false
 */
function validate() {
    let formValid = true;

    let minAge = 10;
    let maxAge = 150;
    
    formValid &= checkName(firstName);
    formValid &= checkName(lastName);
    formValid &= checkEmail(eMail);
    formValid &= checkDate(birthdate, minAge, maxAge);
    formValid &= checkNumber(nbTournament);
    formValid &= checkSelectionList(loc_form);
    formValid &= checkTOS(checkBoxTOS);

    if(formValid) {
        console.log('Formulaire complet');
        // closeModal();
    }
    return formValid;
}