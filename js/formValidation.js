// Form fields
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const birthdate = document.getElementById('birthdate');
const allLocations = document.getElementById('allLocations');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
const checkbox1 = document.getElementById('checkbox1');
const input = document.getElementsByClassName('text-control');
const form = document.getElementById('form');

// Regex
const stringRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const birthdateRegex = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
const mailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const integerRegex = /^\+?(0|[1-9]\d*)$/;

// Utils
function isStringMatchRegexFormat(string, strFormat) {
    return strFormat.test(string);
}

function isLongEnough(currentLength, minimumLength) {
    return currentLength >= minimumLength;
}


// firstname check
function checkFirstName() {
    if(isLongEnough(firstName.value.length, 2) && firstName.value.trim() !== '' && firstName.value.match(stringRegex)) {
        first.parentElement.setAttribute('data-error-visible', 'false');
        first.style.border = 'solid #279e7a 2px';
        return true;
    }

    firstName.parentElement.setAttribute('data-error-visible', 'true');
    firstName.style.border = '2px solid #e54858';
    return false;
}

// lastname check
function checkLastName() {
    if(isLongEnough(lastName.value.length, 2) && lastName.value.trim() !== '' && lastName.value.match(stringRegex)) {
        last.parentElement.setAttribute('data-error-visible', 'false');
        last.style.border = 'solid #279e7a 2px';
        return true;
    }

    lastName.parentElement.setAttribute('data-error-visible', 'true');
    lastName.style.border = 'solid #e54858 2px';
    return false;
}

// email check
function checkEmail() {
    if(isStringMatchRegexFormat(birthdate.value, birthdateRegex)) {
        email.parentElement.setAttribute('data-error-visible', 'false');
        email.style.border = 'solid #279e7a 2px';
        return true;
    }

    email.parentElement.setAttribute('data-error-visible', 'true');
    email.style.border = 'solid #e54858 2px';
    return false;
}

// birthday check
function checkBirthdate() {
    if (isStringMatchRegexFormat(birthdate.value, birthdateRegex)) {
        birthdate.parentElement.setAttribute('data-error-visible', 'false');
        birthdate.style.border = 'solid #279e7a 2px';
        return true;
    }
    
    birthdate.parentElement.setAttribute('data-error-visible', 'true');
    birthdate.style.border = 'solid #e54858 2px';
    return false;
}

// quantity check
function checkQuantity() {
    if(isStringMatchRegexFormat(quantity.value, integerRegex)) {
        quantity.parentElement.setAttribute('data-error-visible', 'false');
        quantity.style.border = 'solid #279e7a 2px';
        return true;
    }
    
    quantity.parentElement.setAttribute('data-error-visible', 'true');
    quantity.style.border = 'solid #e54858 2px';
    return false;
}

// terms of use check
function checkCheckBox() {
    if(checkbox1.checked === true) {
        checkbox1.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    }

    checkbox1.parentElement.setAttribute('data-error-visible', 'true');
    return false;
}

// locations check
function checkLocations() {
    allLocations.setAttribute('data-error-visible', 'true');
    /* Loop into all locations */
    for (let i = 0; i < locations.length; i++) {
        /* if there is a location who's checked the, we return true */
        if (locations[i].checked) {
            allLocations.setAttribute('data-error-visible', 'false');
            return true;
        }
    }
    return false;
}


// Form fields validation
function formFieldsValidation(element, method, event) {
    element.addEventListener(event, method);
}
formFieldsValidation(firstName, checkFirstName, 'focusout');
formFieldsValidation(lastName, checkLastName, 'focusout');
formFieldsValidation(email, checkEmail, 'focusout');
formFieldsValidation(birthdate, checkBirthdate, 'focusout');
formFieldsValidation(quantity, checkQuantity, 'focusout');
formFieldsValidation(allLocations, checkLocations, 'change');
formFieldsValidation(checkbox1, checkCheckBox, 'change');

// Fields validation check
function forAllFieldsValidation() {
    checkFirstName();
    checkLastName();
    checkEmail();
    checkBirthdate();
    checkQuantity();
    checkLocations();
    checkCheckBox();
}

// form validation check
function formValidation() {
    if (checkFirstName() === true && checkLastName() === true && checkEmail() === true && checkBirthdate() === true &&
        checkQuantity() === true && checkLocations() === true && checkCheckBox() === true) {
        return true;
    }
    return false;
}

// submit form
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (formValidation() == true) {
        displayPopupSubmit();
        document.querySelector('form').reset();
    } else {
        forAllFieldsValidation();
    }
});