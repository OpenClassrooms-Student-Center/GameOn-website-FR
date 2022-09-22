// DOM ELEMENTS
const form = document.getElementById('form')
const firstNameInput = document.querySelector('#firstname');
const lastNameInput = document.querySelector('#lastname');
const emailInput = document.querySelector('#email');
const birthDateInput = document.querySelector('#birthdate');
const quantityInput = document.querySelector('#quantity');
const locationPick = document.querySelector('.location-pick')
const locationInputs = Array.from(document.querySelectorAll('.location-input'));
const conditionsInput = document.querySelector('#checkbox1');
const newsletterInput = document.querySelector('#checkbox2');

const successMessage = document.querySelector('.success-message');
const successMessageCloseBtn = document.querySelector('.succes-close-button');

// REGEXP 
const nameRegExp = /^[a-zéèôöîïûùü' -]{2,50}$/i;
const emailRegExp = /^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,10}$/i;

// IMPUTS EVENT LISTENERS
firstNameInput.addEventListener('change', () => {
    checkInput(firstNameInput, nameRegExp);
});
lastNameInput.addEventListener('change', () => {
    checkInput(lastNameInput, nameRegExp);
});
emailInput.addEventListener('change', () => {
    checkInput(emailInput, emailRegExp);
});
birthDateInput.addEventListener('blur', () => {
    checkDateInput(birthDateInput);
})
quantityInput.addEventListener('change', () => {
    checkQuantity(quantityInput)
})

// FORM EVENT LISTENER
form.addEventListener('submit', (e) => {
    e.preventDefault()
    validate()
})

// FUNCTIONS 
function checkInput(input, regex){
    if(regex.test(input.value)){
        input.parentNode.removeAttribute('data-error-visible')
        return true;
    } 
    input.parentNode.setAttribute('data-error-visible', true)
    return false;
}

function checkDateInput(input){
    let currentDate = Date.parse(new Date());
    let datePicked = Date.parse(input.value);
    if(isNaN(datePicked) || datePicked > currentDate){
        input.parentNode.setAttribute('data-error-visible', true);
        return false;
    }
    input.parentNode.setAttribute('data-error-visible', false);
    return true;
}

function checkQuantity(input){
    if(input.value < 0 || input.value > 100){
        input.parentNode.setAttribute('data-error-visible', true);
        return false;
    } 
    input.parentNode.setAttribute('data-error-visible', false);
    return true;
}

function checkLocation(arrayOfInputs){
    let locationPicked = ''
    const locationPickedInput = arrayOfInputs.find(input => input.checked === true);
    if(!locationPickedInput){
        locationPick.setAttribute('data-error-visible', true);
        return false
    }
    locationPicked = locationPickedInput.value;
    locationPick.setAttribute('data-error-visible', false);
    return true
}

function checkConditions(){
    if(conditionsInput.checked === false){
        conditionsInput.parentNode.setAttribute('data-error-visible', true)
        return false;
    }
    conditionsInput.parentNode.setAttribute('data-error-visible', false)
    return true;
}

function checkNewsletter(){
    if(newsletterInput.checked === true){
        return true;
    }
    return false;
}

function validate(){
    checkInput(firstNameInput, nameRegExp)
    checkInput(lastNameInput, nameRegExp)
    checkInput(emailInput, emailRegExp)
    checkDateInput(birthDateInput)
    checkLocation(locationInputs)
    checkConditions()
    if(
        checkInput(firstNameInput, nameRegExp) &&
        checkInput(lastNameInput, nameRegExp) &&
        checkInput(emailInput, emailRegExp) &&
        checkDateInput(birthDateInput) &&
        checkLocation(locationInputs) &&
        checkConditions()
    ){
        // Creating an object to contain inputs values
        let submittedData = {
            firstname: firstNameInput.value,
            lastname: lastNameInput.value,
            email: emailInput.value,
            birthdate: birthDateInput.value,
            quantity: quantityInput.value,
            location: (locationInputs.find(input => input.checked === true)).value,
            newsletter: checkNewsletter()
        }
        console.log(submittedData);

        // Clearing inputs values
        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        birthDateInput.value = '';
        quantityInput.value = 0;
        (locationInputs.find(input => input.checked === true)).checked = false;
        newsletterInput.checked = false;

        form.style.opacity = "0";
        successMessage.style.display = "block";
        successMessageCloseBtn.style.display = "block";

    } else {
        console.log('formulaire non valide')
    }
}