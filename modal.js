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
    let style_error = 'input_error'

    if(validate && element.classList.contains(style_error)) {
        element.classList.remove(style_error);
    }
    else if(!validate && !element.classList.contains(style_error)) {
        element.classList.add(style_error);
    }
}

/** cleanStyleInput
 * Clean the style of an input
 * @param {Element to clean style} element 
 */
function cleanInput(element) {
    if(element.classList.contains('input_valid')) {
        element.classList.remove('input_valid');
    }
    if(element.classList.contains('input_error')) {
        element.classList.remove('input_error');
    }

    if(element.oninput) {element.oninput = null;}
    hideErrorMessage(element);
}

/** printErrorMessage
 * Print an error message under the not validate input
 * @param {Element not validate} element 
 * @param {Text to print} texte 
 */
function printErrorMessage(element, texte) {
    const parentElement = element.parentNode;
    let errorMessage = parentElement.querySelector('.error_message');

    if(errorMessage) {
        errorMessage.style.display = 'block';
        errorMessage.innerText = texte;
    } else {
        let pError = document.createElement('p');
        pError.innerText = texte;
        pError.classList.add('error_message');
        parentElement.appendChild(pError);
    }
}

/** hideErrorMessage
 * Hide the Error message under an input
 * @param {Element valid under which the text must be hide} element 
 */
function hideErrorMessage(element) {
    const parentElement = element.parentNode;
    let errorMessage = parentElement.querySelector('.error_message');

    if(errorMessage) {
        errorMessage.style.display = 'none';
    }
}

// Add listener to prevent default action
form.addEventListener("submit", (event) => {event.preventDefault();});
firstName.addEventListener("invalid", (event) => {event.preventDefault();});
lastName.addEventListener("invalid", (event) => {event.preventDefault();});
eMail.addEventListener("invalid", (event) => {event.preventDefault();});
birthdate.addEventListener("invalid", (event) => {event.preventDefault();});
nbTournament.addEventListener("invalid", (event) => {event.preventDefault();});
loc_form.addEventListener("invalid", (event) => {event.preventDefault();});
checkBoxTOS.addEventListener("invalid", (event) => {event.preventDefault();});

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
    if(!evt.target.checked 
        && !evt.target.nextElementSibling.children[0].classList.contains('error_checkbox')) {
        evt.target.nextElementSibling.children[0].classList.add('error_checkbox');
    }
    else if(evt.target.checked 
        && evt.target.nextElementSibling.children[0].classList.contains('error_checkbox')) {
        evt.target.nextElementSibling.children[0].classList.remove('error_checkbox');
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
    divInput.style.borderRadius = "8px";

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
        if(!element.nextElementSibling.children[0].classList.contains('error_checkbox')) {
            element.nextElementSibling.children[0].classList.add('error_checkbox');
        }
        printErrorMessage(element, "Vous devez vérifier que vous acceptez les termes et conditions.");
        retValue = false;
    } else {
        if(element.nextElementSibling.children[0].classList.contains('error_checkbox')) {
            element.nextElementSibling.children[0].classList.remove('error_checkbox');
        }
        hideErrorMessage(element);
        retValue = true;
    }

    return retValue;
}

/** resetModal
 * Reset the modal to autorize inscription of a new person
 */
function resetModal() {
    const parentElement = form.parentNode;
    let validMessage = parentElement.querySelector('.valid_mess');
    let validLink = parentElement.querySelector('.valid_link');
    let validButton = parentElement.querySelector('.valid_button');

    if(validMessage) {
        validMessage.style.display = "none";
    }
    if(validLink) {
        validLink.style.display = "none";
    }
    if(validButton) {
        validButton.style.display = "none";
    }
    form.style.display = "inline-block";
    form.reset();
}

/** modalValidMessage
 * Mask the form and print a valid message
 */
function modalValidMessage() {
    form.style.display = "none";

    const parentElement = form.parentNode;
    let validMessage = parentElement.querySelector('.valid_mess');
    let validLink = parentElement.querySelector('.valid_link');
    let validButton = parentElement.querySelector('.valid_button');

    if(validMessage) {
        validMessage.style.display = 'inline-block';
    } else {
        let message = document.createElement("div");
        message.classList.add('message_form_valid');
        message.innerHTML = "Merci pour votre inscription";

        message.classList.add('valid_mess');
        parentElement.appendChild(message);
    }

    if(validLink) {
        validLink.style.display = "inline-block";
    } else {
        let resetLink = document.createElement("p");
        resetLink.classList.add('link_new_form')
        resetLink.innerHTML = "Voulez-vous inscrire une autre personne ?";
        resetLink.classList.add('valid_link');
        parentElement.appendChild(resetLink);

        resetLink.addEventListener("click", resetModal);
    }

    if(validButton) {
        validButton.style.display = 'inline-block';
    } else {
        let closeButton = document.createElement("p");
        closeButton.classList.add('valid_form_button')
        closeButton.innerHTML = "Fermer";
        closeButton.classList.add('valid_button');
        parentElement.appendChild(closeButton);

        closeButton.addEventListener("click", closeModal);
    }
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
        modalValidMessage();
        cleanInput(firstName);
        cleanInput(lastName);
        cleanInput(eMail);
        cleanInput(birthdate);
        cleanInput(nbTournament);
        cleanInput(loc_form);
    } else {
        // Add Event listener on inputs
        if(!firstName.oninput) {firstName.oninput = function(event) {checkName(firstName);}};
        if(!lastName.oninput) {lastName.oninput = function(event) {checkName(lastName);}};
        if(!eMail.oninput) {eMail.oninput = function(event) {checkEmail(eMail);}};
        if(!birthdate.oninput) {birthdate.oninput = function(event) {checkDate(birthdate, minAge, maxAge);}};
        if(!nbTournament.oninput) {nbTournament.oninput = function(event) {checkNumber(nbTournament);}};
        if(!loc_form.oninput) {loc_form.oninput = function(event) {checkSelectionList(loc_form);}};
        if(!checkBoxTOS.oninput) {checkBoxTOS.oninput = function(event) {checkTOS(checkBoxTOS);}};
    }
    return formValid;
}