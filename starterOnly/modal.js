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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = 'block';
}

// ******************* Ferme modal***************

// close modal event

closeBtn.addEventListener('click', closeModal);

// close Modal function

function closeModal() {
    modalbg.style.display = 'none';
}

// ***************** Implémenter entrées du formulaire*******************
const firstNameInputEl = document.getElementById('first');
const lastNameInputEl = document.getElementById('last');
const emailInputEl = document.getElementById('email');
const birthDateInputEl = document.getElementById('birthdate');
const numberParticipateEl = document.getElementById('quantity');
const location1 = document.getElementById('location1');
const location2 = document.getElementById('location2');
const location3 = document.getElementById('location3');
const location4 = document.getElementById('location4');
const location5 = document.getElementById('location5');
const location6 = document.getElementById('location6');
const checkBox1 = document.getElementById('checkbox1');

const validate = () => {
    let isFormValid = true;

    //first name validation
    const firstName = firstNameInputEl.value;
    const isFirstNameValid = Validation.minLength(firstName, 2) && Validation.isRequired(firstName);
    isFormValid = isFormValid && isFirstNameValid;

    //last name validation
    const lastName = lastNameInputEl.value;
    const isLastNameValid = Validation.minLength(lastName, 2) && Validation.isRequired(lastName);
    isFormValid = isFormValid && isLastNameValid;

    //email validation
    const email = emailInputEl.value;
    const isEmailValid = Validation.checkEmail(email);
    isFormValid = isFormValid && isEmailValid;

    //birthdate validation
    const birthDate = birthDateInputEl.value;
    const isBirthDateValid = Validation.checkBirthDate(birthDate);
    isFormValid = isFormValid && isBirthDateValid;

    //participate count validation
    const numberParticipate = numberParticipateEl.value;
    const isNumberParticipateValid = Validation.checkNumber(numberParticipate);
    isFormValid = isFormValid && isNumberParticipateValid;

    //location validation
    const locationValues = [
        location1.checked,
        location2.checked,
        location3.checked,
        location4.checked,
        location5.checked,
        location6.checked,
    ];
    const isLocationValid = Validation.isAnyChecked(locationValues);
    isFormValid = isFormValid && isLocationValid;

    //is condition accept
    const checkBoxValid = checkBox1.checked;
    isFormValid = isFormValid && checkBoxValid;

    return isFormValid;
};
