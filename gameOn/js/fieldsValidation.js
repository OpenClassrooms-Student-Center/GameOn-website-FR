const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const cities = document.getElementById('cities');
const locations = document.getElementsByName('location');
const checkbox = document.getElementById('checkbox1');
const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const mailRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ0-9.!#$%&'*+/=?^_`{|}~-])+@([a-zA-Z0-9-])+\.([a-zA-Z0-9-]{2,})+$/;

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

    /**
     * Validate lastname according to regex
     * @param {string} lastName - The lastname to be validated
     * Returns true if lastName is valid, and false otherwise.
     */
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
    if (birthDate.value.length ==10) {
        let today = new Date();
        let vbirthDate = birthDate.value;
        let birthDay = new Date(vbirthDate);
        let age = today.getFullYear() - birthDay.getFullYear();
        let m = today.getMonth() - birthDay.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDay.getDate())) {
            age--;
        }
        if (age < 16) {
            birthDate.parentElement.setAttribute('data-error-visible', 'true')
            birthDate.style.border = "3px solid red";
            return false;
        }
        birthDate.parentElement.setAttribute('data-error-visible', 'false')
        birthDate.style.border = "3px solid green";
        return true;
    }
    birthDate.parentElement.setAttribute('data-error-visible', 'true')
    birthDate.style.border = "3px solid red";
    return false;
}

// validate participationsNumber
function validateParticipationsNumber() {
    if (quantity.value.length ===0 || isNaN(quantity.value) === true || quantity.value < 0) {
        quantity.parentElement.setAttribute('data-error-visible', 'true')
        quantity.style.border = "3px solid red";
        return false;
    }
    quantity.parentElement.setAttribute('data-error-visible', 'false')
    quantity.style.border = "3px solid green";
    return true;
}

// validate location
function validateLocation() {
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            cities.setAttribute('data-error-visible', 'false')
            return true;
        }
    }
cities.setAttribute('data-error-visible', 'true')
return false;
}

// validate terms
function validateTerms() {
    if (checkbox.checked) {
        checkbox.parentElement.setAttribute('data-error-visible', 'false')
        return true;
    }
    checkbox.parentElement.setAttribute('data-error-visible', 'true')
    return false;
}


// events
firstName.addEventListener('focusout', validateFirstName);
lastName.addEventListener('focusout', validateLastName);
email.addEventListener('focusout', validateEmail);
birthDate.addEventListener('focusout', validateBirthDate);
quantity.addEventListener('focusout', validateParticipationsNumber);
cities.addEventListener('change', validateLocation);
checkbox.addEventListener('change', validateTerms);


// validate form
function validateForm() {
    if (validateFirstName() &&
    validateLastName() &&
    validateEmail() &&
    validateBirthDate() &&
    validateParticipationsNumber() &&
    validateLocation() &&
    validateTerms()) {
        return true;
    }
    return false;
}

// check all fields
function checkAllFields() {
    validateFirstName()
    validateLastName()
    validateEmail()
    validateBirthDate()
    validateParticipationsNumber()
    validateLocation()
    validateTerms()
}

