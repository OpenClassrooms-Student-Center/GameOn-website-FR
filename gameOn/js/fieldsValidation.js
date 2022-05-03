const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
// const mailRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}+$/;
const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// validate firstName
function validateFirstName() {
    if (firstName.value.length < 2 || firstName.value === '' || !firstName.value.match(nameRegex)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true')
        firstName.style.border = '3px solid red';
        return false;
    }
    firstName.parentElement.setAttribute('data-error-visible', 'false')
    firstName.style.border = '3px solid green';
    return true;
}

// validate lastName
function validateLastName() {
    if (lastName.value.length < 2 || lastName.value === '' || !lastName.value.match(nameRegex)) {
        lastName.parentElement.setAttribute('data-error-visible', 'true')
        lastName.style.border = '3px solid red';
        return false;
    }
    lastName.parentElement.setAttribute('data-error-visible', 'false')
    lastName.style.border = '3px solid green';
    return true;
}

// validate email
function validateEmail() {
    if (!email.value.match(mailRegex)) {
        email.parentElement.setAttribute('data-error-visible', 'true')
        email.style.border = "3px solid red";
        return false;
    }
    email.parentElement.setAttribute('data-error-visible', 'false')
    email.style.border = "3px solid green";
    return true;
}

// validate birthDate
function validateBirthDate() {
    if (birthDate.value.length !==10) {
        birthDate.parentElement.setAttribute('data-error-visible', 'true')
        birthDate.style.border = "3px solid red";
        return false;
    }
    birthDate.parentElement.setAttribute('data-error-visible', 'false')
    birthDate.style.border = "3px solid green";
    return true;
}

// validate tournamentsNumber
function validateTournamentsNumber() {
    if (quantity.value.length ===0 || isNaN(quantity.value) === true || quantity.value < 0) {
        quantity.parentElement.setAttribute('data-error-visible', 'true')
        quantity.style.border = "3px solid red";
        return false;
    }
    quantity.parentElement.setAttribute('data-error-visible', 'false')
    quantity.style.border = "3px solid green";
    return true;
}


// events
firstName.addEventListener('focusout', validateFirstName)
lastName.addEventListener('focusout', validateLastName)
email.addEventListener('focusout', validateEmail)
birthDate.addEventListener('focusout', validateBirthDate)
quantity.addEventListener('focusout', validateTournamentsNumber)

