const firstName = document.getElementById('first');
console.log(firstName);
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const locations = document.querySelectorAll('input[type="radio"]');
const checkbox = document.getElementById('checkbox1');

const showError = (element, errorMessage) => {        
    if(element.parentElement.getElementsByTagName('small').length === 0) {
        const error = document.createElement('small');
        error.style.display = "block";
        error.style.color = 'red';
        element.parentElement.appendChild(error).textContent = errorMessage;
    }
};

function validate() {
    event.preventDefault();
    let valid = true;
    // alert(firstName.value.length);

    if(firstName.value.length >= 2 && firstName.value.length != "") {
    } else {
        showError(firstName, 'fname must be longer than 1');
        valid = false;
    }

    if(lastName.value.length >= 2 && lastName.value.length != "") {
    } else {
        showError(lastName, 'lname must be longer than 1');
        valid = false;
    }

    if(email.value.indexOf('@') != -1) {
    } else {
        showError(email, 'email must be valid');
        valid = false;
    }

    if(!isNaN(quantity.value)) {
    } else {
        showError(quantity, 'quantity must be a number');
        valid = false;
    }

    let checked = false;
    for(let location of locations) {
        if(location.checked) {
            checked = true;
        }
    }
    if(!checked) { showError(locations[0], 'Must choose location'); }

    if(checkbox.checked) {
    } else {
        showError(checkbox, 'Must approve checkbox');
        valid = false;
    }

    let date = new Date(birthdate);
    if(date instanceof Date && !isNaN(date)) {
    } else {
        console.log(birthdate.value.toString());
        console.log(date);
        showError(birthdate, 'birthday must be a date');
        // valid = false;
    }

    if(valid) {
        console.log('Form is valid');
    } else console.log('Form is invalid'); 

}
