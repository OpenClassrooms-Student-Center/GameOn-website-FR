const firstName = document.getElementById('first');
console.log(firstName);
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const locations = document.querySelectorAll('input[type="radio"]');
const checkbox = document.getElementById('checkbox1');

function validate() {
    event.preventDefault();
    // const valid = true;
    // alert(firstName.value.length);

    if(firstName.value.length >= 2 && firstName.value.length != "") {
    } else {
        console.error('fname must be longer than 1');
    }

    if(lastName.value.length >= 2 && lastName.value.length != "") {
    } else {
        console.error('lname must be longer than 1');
    }

    if(email.value.indexOf('@') != -1) {
    } else {
        console.error('email must be valid');
    }

    if(!isNaN(quantity)) {
    } else {
        console.error('quantity must be a number');
    }

    let checked = false;
    for(let location of locations) {
        if(location.checked) {
            checked = true;
        }
    }
    if(!checked) { console.error('Must choose location'); }

    if(checkbox.checked) {
    } else {
        console.error('Must approve checkbox');
    }

    let date = new Date(birthdate);
    if(date instanceof Date && !isNaN(date)) {
    } else {
        console.log(birthdate.value.toString());
        console.log(date);
        console.error('birthday must be a date');
    }

}
