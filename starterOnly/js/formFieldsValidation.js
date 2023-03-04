// DOM ELEMENTS FORM FIELDS VALIDATION
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');

const checkbox = document.getElementById('checkbox1');

const radio = document.querySelectorAll('.checkbox-input[type="radio"]');
console.log(radio);

const reserve = document.querySelector('form')

// REGEX
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\-\' ]{2,}$/;
const regex2 = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//Regex2 has been made using the RFC 3696 syntax  = https://fr.wikipedia.org/wiki/Adresse_%C3%A9lectronique#Syntaxe_exacte
const regex3 = /^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/g;

const form = document.querySelector('form');

// FIRST AND LAST NAME

function checkFirstName() {
    console.log(firstName.value)
    if (firstName.value.trim().length < 2 || firstName.value.trim() === '' || !firstName.value.match(regex)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
        firstName.style.border = '2px solid #e54858';
        return false;
    }
    firstName.parentElement.setAttribute('data-error-visible', 'false');
    firstName.style.border = 'none';
    return true;
}

function checkLastName() {
    console.log(lastName.value)
    if (lastName.value.trim().length < 2 || lastName.value.trim() === "" || !lastName.value.match(regex)) {
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
        lastName.style.border = '2px solid #e54858';
        return false;
    }
    lastName.parentElement.setAttribute('data-error-visible', 'false');
    lastName.style.border = 'none';
    return true;
}

// MAIL

function checkEmail() {
    console.log(email.value)
    if (email.value.trim().length < 2 || email.value.trim() === "" || !email.value.match(regex2)) {
        email.parentElement.setAttribute('data-error-visible', 'true');
        email.parentElement.setAttribute('data-error', 'Veuillez entrer une adresse mail valide');
        email.style.border = '2px solid #e54858';
        return false;
    }
    email.parentElement.setAttribute('data-error-visible', 'false');
    email.style.border = 'none';
    return true;
}

// BIRTH (impossible dinterdire -18)

function checkBirthdate() {
    console.log(birthdate.value)
    if (birthdate.value.trim().length < 2 || birthdate.value.trim() === "" || !birthdate.value.match(regex3)) {
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        birthdate.parentElement.setAttribute('data-error', 'Veuillez entrer une adresse date de naissance valide. Vous devez etre majeur');
        birthdate.style.border = '2px solid #e54858';
        return false;
    }
    birthdate.parentElement.setAttribute('data-error-visible', 'false');
    birthdate.style.border = 'none';
    return true;
}

// QUANTITY

function checkQuantity() {
    console.log(quantity.value)
    if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() > 100) {
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.parentElement.setAttribute('data-error', 'Veuillez entrer une valeur numerique valide');
        quantity.style.border = '2px solid #e54858';
        return false;
    }
    quantity.parentElement.setAttribute('data-error-visible', 'false');
    quantity.style.border = 'none';
    return true;
}

// CHECKBOX

function checkCheckbox() {
    console.log(checkbox1.checked)
    if (checkbox1.checked === false) {
        checkbox1.parentElement.setAttribute('data-error-visible', 'true');
        checkbox1.parentElement.setAttribute('data-error', 'Veuillez sélectionner les conditions d\'utilisation.');
        checkbox1.style.border = '2px solid #e54858';
        return false;
    }
    checkbox1.parentElement.setAttribute('data-error-visible', 'false');
    checkbox1.style.border = 'none';
    return true;
}


// RADIO BUTTONS
function validLocation() {
    let radioButton = document.querySelector('input[name = "location"]:checked');

    if (radioButton == null) {
        const radioError = document.getElementById('location1');
        radioError.parentElement.setAttribute('data-error-visible', 'true');
        radioError.parentElement.setAttribute('data-error', 'Veuillez sélectionner une ville');
        radioError.style.border = '2px solid #e54858';
        return false;
    }
    radioButton.parentElement.setAttribute('data-error-visible', 'false');
    radioButton.style.border = 'none';
    return true;
}

// FORM FIELDS EVENTS
function formFieldsValidation(element, method, event) {
    element.addEventListener(event, method);
}
formFieldsValidation(firstName, checkFirstName, 'focusout');
formFieldsValidation(lastName, checkLastName, 'focusout');
formFieldsValidation(email, checkEmail, 'focusout');
formFieldsValidation(birthdate, checkBirthdate, 'focusout');
formFieldsValidation(quantity, checkQuantity, 'focusout');
formFieldsValidation(checkbox1, checkCheckbox, 'click');
radio.forEach(element => {
    formFieldsValidation(element, validLocation, 'change');
});


function validate(event) {
    event.preventDefault();
    let formIsValid = true;
    if (checkFirstName() === false) {
        formIsValid = false;
    }
    if (checkLastName() === false) {
        formIsValid = false;
    }
    if (checkEmail() === false) {
        formIsValid = false;
    }
    if (checkBirthdate() === false) {
        formIsValid = false;
    }
    if (checkQuantity() === false) {
        formIsValid = false;
    }
    if (checkCheckbox() === false) {
        formIsValid = false;
    }
    if (validLocation() === false) {
        formIsValid = false;
    }
    return formIsValid;
}

reserve.addEventListener('submit', (e) => {
    e.preventDefault();

 const isvalid = validate(e);

    if (isvalid === true) {
        sendForm();
    }
})

function sendForm() {
    const modal = document.querySelector('.modal-body');
    modal.innerHTML = "<h1 class='succes'>Merci pour votre inscritpion</h1>"
}