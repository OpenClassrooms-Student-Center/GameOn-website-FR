function editNav() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeBtn = document.getElementById('close-btn');
const closeBtnpage = document.getElementById('close-button-confirmation-page');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = 'block';
}

// ******************* Ferme modal***************

// close modal event

closeBtn.addEventListener('click', closeModal);
closeBtnpage.addEventListener('click', closeModal);

// close Modal function

function closeModal() {
    modalbg.style.display = 'none';
    document.querySelector('.modal-body').style.display = 'block';
    document.querySelector('.confirm-validation').style.display = 'none';
    clearFrom();
}

// ***************** Implémenter entrées du formulaire*******************
const firstNameInputEl = document.getElementById('first');
const firstNameErrorMessageEl = document.getElementById('first-error');
const lastNameInputEl = document.getElementById('last');
const lastNameErrorMessageEl = document.getElementById('last-error');
const emailInputEl = document.getElementById('email');
const emailErrorMessageEl = document.getElementById('email-error');
const birthDateInputEl = document.getElementById('birthdate');
const birthDateErrorMessageEl = document.getElementById('birthdate-error');
const numberParticipateEl = document.getElementById('quantity');
const numberParticipateErrorMessageEl = document.getElementById('quantity-error');
const location1 = document.getElementById('location1');
const location2 = document.getElementById('location2');
const location3 = document.getElementById('location3');
const location4 = document.getElementById('location4');
const location5 = document.getElementById('location5');
const location6 = document.getElementById('location6');
const locationErrorMessageEl = document.getElementById('location-error');
const checkBox1 = document.getElementById('checkbox1');
const checkBoxErrorMessageEl = document.getElementById('checkbox-error');
const confirmationMessageEmail = document.getElementById('email-confirmation');
const confirmationMessageFirstName = document.getElementById('first-confirmation');
const confirmationMessageLastName = document.getElementById('last-confirmation');
//first name validation
const firstNameValidation = () => {
    const firstName = firstNameInputEl.value;
    firstNameInputEl.classList.remove('error-form');
    firstNameInputEl.classList.remove('valide-form');
    confirmationMessageFirstName.innerHTML = ' ';
    firstNameErrorMessageEl.innerHTML = '';

    //  set error message
    if (!Validation.isRequired(firstName)) {
        firstNameErrorMessageEl.innerHTML = 'Cette case ne peut pas être laissée vide.';
        firstNameInputEl.classList.add('error-form');
        return false;
    } else if (!Validation.minLength(firstName, 2)) {
        firstNameErrorMessageEl.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
        firstNameInputEl.classList.add('error-form');
        return false;
    } else {
        confirmationMessageFirstName.innerHTML = 'Prenom valide';
        firstNameInputEl.classList.add('valide-form');
        return true;
    }
};
// lastname validation
const lastNameValidation = () => {
    const lastName = lastNameInputEl.value;
    lastNameInputEl.classList.remove('error-form');
    lastNameInputEl.classList.remove('valide-form');
    confirmationMessageLastName.innerHTML = ' ';
    lastNameErrorMessageEl.innerHTML = '';
    // set error message
    if (!Validation.isRequired(lastName)) {
        lastNameErrorMessageEl.innerHTML = 'Cette case ne peut pas être laissée vide.';
        lastNameInputEl.classList.add('error-form');
        return false;
    } else if (!Validation.minLength(lastName, 2)) {
        lastNameErrorMessageEl.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
        lastNameInputEl.classList.add('error-form');
        return false;
    } else {
        confirmationMessageLastName.innerHTML = 'Nom valide';
        lastNameInputEl.classList.add('valide-form');
        return true;
    }
};
// email valiation
const emailValidation = () => {
    const email = emailInputEl.value;
    emailInputEl.classList.remove('error-form');
    emailInputEl.classList.remove('valide-form');
    confirmationMessageEmail.innerHTML = ' ';
    emailErrorMessageEl.innerHTML = '';

    if (!Validation.isRequired(email)) {
        emailErrorMessageEl.innerHTML = 'Cette case ne peut pas être laissée vide.';
        emailInputEl.classList.add('error-form');
        return false;
    } else if (!Validation.checkEmail(email)) {
        emailErrorMessageEl.innerHTML = 'Adresse e-mail invalide';
        emailInputEl.classList.add('error-form');
        return false;
    } else {
        confirmationMessageEmail.innerHTML = ' Adresse e-mail valide';
        emailInputEl.classList.add('valide-form');
        return true;
    }
};
//participate count validation
const numberParticipateValidation = () => {
    const numberParticipate = numberParticipateEl.value;
    if (!Validation.checkNumber(numberParticipate)) {
        numberParticipateErrorMessageEl.innerHTML = 'Vous devez entrer votre date de naissance';
        numberParticipateEl.classList.add('error-form');
        return false;
    } else {
        numberParticipateErrorMessageEl.innerHTML = '';
        numberParticipateEl.classList.remove('error-form');
        return true;
    }
};

// birthdate validation
const birthDateValidation = () => {
    const birthDate = birthDateInputEl.value;
    // set error message
    if (!Validation.checkBirthDate(birthDate)) {
        birthDateErrorMessageEl.innerHTML = 'Vous devez entrer votre date de naissance';
        birthDateInputEl.classList.add('error-form');
        return false;
    } else {
        birthDateErrorMessageEl.innerHTML = '';
        birthDateInputEl.classList.remove('error-form');
        return true;
    }
};
// location valiation
const locationValidation = () => {
    const locationValues = [
        location1.checked,
        location2.checked,
        location3.checked,
        location4.checked,
        location5.checked,
        location6.checked,
    ];
    // set error message
    if (!Validation.isAnyChecked(locationValues)) {
        locationErrorMessageEl.innerHTML = 'Vous devez choisir une option';
        return false;
    } else {
        locationErrorMessageEl.innerHTML = '';
        return true;
    }
};

// checkbox validation
const checkboxValidation = () => {
    const checkBoxValid = checkBox1.checked;
    if (!checkBoxValid) {
        checkBoxErrorMessageEl.innerHTML = 'Vous devez vérifier que vous acceptez les termes et conditions.';
        return false;
    } else {
        checkBoxErrorMessageEl.innerHTML = '';
        return true;
    }
};

// add function for onchange emanil input
emailInputEl.addEventListener('keyup', emailValidation);

const validate = () => {
    let isFormValid = true;
    // first name validation
    const isFirstNameValid = firstNameValidation();
    isFormValid = isFormValid && isFirstNameValid;

    // lastname validation
    const isLastNameValid = lastNameValidation();
    isFormValid = isFormValid && isLastNameValid;

    //email validation
    const isEmailValid = emailValidation();
    isFormValid = isFormValid && isEmailValid;

    //participate count validation
    const isNumberParticipateValid = numberParticipateValidation();
    isFormValid = isFormValid && isNumberParticipateValid;

    //birthdate validation
    const isBirthDateValid = birthDateValidation();
    isFormValid = isFormValid && isBirthDateValid;

    //location validation
    const isLocationValid = locationValidation();
    isFormValid = isFormValid && isLocationValid;

    //is condition accept
    const isCheckBoxValid = checkboxValidation();
    isFormValid = isFormValid && isCheckBoxValid;

    if (isFormValid) {
        document.querySelector('.modal-body').style.display = 'none';
        document.querySelector('.confirm-validation').style.display = 'block';
    }

    return false;
};

//clear form values and validation messages
const clearFrom = () => {
    // clear validation class
    const allInputValue = document.querySelectorAll('div.formData input');
    allInputValue.forEach((inputEl) => {
        inputEl.classList.remove('error-form');
        inputEl.classList.remove('valide-form');
    });

    //clear form values
    const form = document.querySelector('form');
    form.reset();

    //clear error messages
    const errorMessageElements = document.querySelectorAll('form div.error');
    errorMessageElements.forEach((element) => (element.innerHTML = ''));
    // clear email validation message
    const confirmValidationMessage = document.querySelectorAll('form div.confirmation');
    confirmValidationMessage.forEach((element) => (element.innerHTML = ''));
};
