// DOM ELEMENTS FORM FIELDS VALIDATION
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\-\' ]{2,}$/;
const regex2 = /^[\w-_\.]+@([\w-]+\.)+[\w-]$/;

// ------ FORM FIELDS VALIDATION ------ //
// FIRST NAME AND LAST NAME

function checkFirstName() {
    console.log(firstName.value)
    if (firstName.value.trim().length < 2 || firstName.value.trim() === '' || !firstName.value.match(regex)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.')
        firstName.style.textAlign = 'left';
        firstName.style.border = '2px solid #e54858';
        return false;
    }
    firstName.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}

function checkLastName() {
    if (lastName.value.trim().length < 2 || lastName.value.trim() === "" || !lastName.value.match(regex)) {
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.')
        lastName.style.border = '2px solid #e54858';
        return false;
    }
    lastName.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}

// MAIL

function checkMail() {
    console.log(mail.value)
    if (firstName.value.trim().length < 2 || firstName.value.trim() === '' || !firstName.value.match(regex)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.parentElement.setAttribute('data-error', 'erorr')
        firstName.style.border = '2px solid #e54858';
        return false;
    }
    firstName.parentElement.setAttribute('data-error-visible', 'false');
    firstName.style.border = 'solid #279e7a 0.19rem';
    return true;
}

// FORM FIELDS EVENTS
function formFieldsValidation(element, method, event) {
    element.addEventListener(event, method);
}
formFieldsValidation(firstName, checkFirstName, 'focusout');
formFieldsValidation(lastName, checkLastName, 'focusout');



function formValidation() {
    if (checkFirstName() === true &&
        checkLastName() === true) {
        return true;
    }
    return false;
}

