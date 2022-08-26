const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const locations = document.querySelectorAll('input[type="radio"]');
const checkbox = document.getElementById('checkbox1');

// const formArray = {
//     firstName: document.getElementById('first'),
//     lastName: document.getElementById('last'),
//     email: document.getElementById('email'),
//     birthdate: document.getElementById('birthdate'),
//     quantity: document.getElementById('quantity'),
//     location: document.querySelectorAll('input[type="radio"]'),
//     termsOfService: document.getElementById('checkbox1')
// };

const checkFirstName = () => {
    if(firstName.value.length < 2 || firstName.value.length == "") {
        showError(firstName, 'fname must be longer than 1');
        valid = false;
    }
}

const checkLastName = () => {
    if(lastName.value.length < 2 || lastName.value.length == "") {
        showError(lastName, 'lname must be longer than 1');
        valid = false;
    }
}

const checkEmail = () => {
    if(email.value.indexOf('@') == -1) {
        showError(email, 'email must be valid');
        valid = false;
    }
}

const checkTournamentQuantity = () => {
    if(isNaN(quantity.value) || quantity.value === '') {
        showError(quantity, 'quantity must be a number');
        valid = false;
    }
}

const checkLocation = () => {
    let checked = false;

    for(let location of locations) {
        if(location.checked) {
            checked = true;
        }
    }

    if(!checked) { 
        showError(locations[0], 'Must choose location'); 
        valid = false;
    }
}

const checkTermsOfService = () => {
    if(!checkbox.checked) {
        showError(checkbox, 'Must approve checkbox');
        valid = false;
    }
}

function validate() {
    event.preventDefault();
    let valid = true;

    let date = new Date(birthdate);
    if(!date instanceof Date || isNaN(date)) {
        console.log(birthdate.value.toString());
        console.log(date);
        showError(birthdate, 'birthday must be a date');
        // valid = false;
    }

    checkFirstName();
    checkLastName();
    checkEmail();
    checkTournamentQuantity();
    checkLocation();
    checkTermsOfService();

    if(valid) {
        console.log('Form is valid');
    } else console.log('Form is invalid'); 

    return valid;
}