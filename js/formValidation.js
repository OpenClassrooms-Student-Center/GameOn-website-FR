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
// This regex is usefull to check a string
const stringRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
// This regex is usefull to check birthdate format
const birthdateRegex = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
// This regex is usefull to check email format
const mailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
// This regex is usefull to check an integer format
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
    /* We will check if the fistname length is at least 2 or more + remove spaces and check it's different than empty + the firstname value match 
    is our function */
    if(isLongEnough(firstName.value.length, 2) && firstName.value.trim() !== '' && firstName.value.match(stringRegex)) {
        // if this is valid, set the data attribute to false
        first.parentElement.setAttribute('data-error-visible', 'false');
        // then add the border green
        first.classList.remove('border-red');
        first.classList.add('border-green');
        return true;
    }

    // if it's not valid, set the data attribute to true
    firstName.parentElement.setAttribute('data-error-visible', 'true');
    // then add the border red
    firstName.classList.remove('border-green');
    firstName.classList.add('border-red');
    return false;
}

// lastname check
function checkLastName() {
    /* We will check if the lastname length is at least 2 or more + remove spaces and check it's different than empty + the firstname value match 
    is our function */
    if(isLongEnough(lastName.value.length, 2) && lastName.value.trim() !== '' && lastName.value.match(stringRegex)) {
        // if this is valid, set the data attribute to false
        last.parentElement.setAttribute('data-error-visible', 'false');
        // then add the border green
        last.classList.remove('border-red');
        last.classList.add('border-green');
        return true;
    }

    // if it's not valid, set the data attribute to true
    lastName.parentElement.setAttribute('data-error-visible', 'true');
    // then add the border red
    lastName.classList.remove('border-green');
    lastName.classList.add('border-red');
    return false;
}

// email check
function checkEmail() {
    // We will check if the email is valid compared to the regex
    if(isStringMatchRegexFormat(email.value, mailRegex)) {
        // if this is valid, set the data attribute to false
        email.parentElement.setAttribute('data-error-visible', 'false');
        // then add the border green
        email.classList.remove('border-red');
        email.classList.add('border-green');
        return true;
    }

    // if it's not valid, set the data attribute to true
    email.parentElement.setAttribute('data-error-visible', 'true');
    // then add the border red
    email.classList.remove('border-green');
    email.classList.add('border-red');
    return false;
}

// birthday check
function checkBirthdate() {
    // We will check if the birthdate is valid compared to the regex
    if (isStringMatchRegexFormat(birthdate.value, birthdateRegex)) {
        // if this is valid, set the data attribute to false
        birthdate.parentElement.setAttribute('data-error-visible', 'false');
        // then add the border green
        birthdate.classList.remove('border-red');
        birthdate.classList.add('border-green');
        return true;
    }
    
    // if it's not valid, set the data attribute to true
    birthdate.parentElement.setAttribute('data-error-visible', 'true');
    // then add the border red
    birthdate.classList.remove('border-green');
    birthdate.classList.add('border-red');
    return false;
}

// quantity check
function checkQuantity() {
    // We will check if the quantiy is valid compared to the regex
    if(isStringMatchRegexFormat(quantity.value, integerRegex)) {
        // if this is valid, set the data attribute to false
        quantity.parentElement.setAttribute('data-error-visible', 'false');
        // then add the border green
        quantity.classList.remove('border-red');
        quantity.classList.add('border-green');
        
        return true;
    }
    
    // if it's not valid, set the data attribute to true
    quantity.parentElement.setAttribute('data-error-visible', 'true');
    // then add the border red
    quantity.classList.remove('border-green');
    quantity.classList.add('border-red');
    return false;
}

// terms of use check
function checkCheckBox() {
    // We will check if the checkbox is checked
    if(checkbox1.checked === true) {
        // if this is valid, set the data attribute to false
        checkbox1.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    }

    // if it's not valid, set the data attribute to true
    checkbox1.parentElement.setAttribute('data-error-visible', 'true');
    return false;
}

// locations check
function checkLocations() {
    // By default we set the data error visible to false
    allLocations.setAttribute('data-error-visible', 'true');
    /* Loop into all locations */
    for (let i = 0; i < locations.length; i++) {
        /* if there is a location who's checked, we return true */
        if (locations[i].checked) {
            // Then we set the data error visible to true
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
// Add an event on the defocus (usefull for classic inputs)
formFieldsValidation(firstName, checkFirstName, 'focusout');
formFieldsValidation(lastName, checkLastName, 'focusout');
formFieldsValidation(email, checkEmail, 'focusout');
formFieldsValidation(birthdate, checkBirthdate, 'focusout');
formFieldsValidation(quantity, checkQuantity, 'focusout');
// Add an event on the change (usefull on checkbox or radio buttons)
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
function validate() {
    // We take every fields check and return true if all fields are ok
    if (checkFirstName() === true && checkLastName() === true && checkEmail() === true && checkBirthdate() === true &&
        checkQuantity() === true && checkLocations() === true && checkCheckBox() === true) {
        
        console.log("The form has been validated!");
        
        return true;
    }
    return false;
}

// submit form
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validate() == true) {
        /* If the form validation is ok we display the popup success and reset the form */
        displayPopupSubmit();
        form.reset();
    } else {
        // Re check of all fields
        forAllFieldsValidation();
    }
});