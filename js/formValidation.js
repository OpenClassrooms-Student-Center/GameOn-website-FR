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


function checkForm() {

    let isFirstNameOk = checkLenght(firstName, 2)
    let isLastNameOk = checkLenght(lastName, 2)

}

function checkLenght (element,lenght){
    if (element.value.lenght < lenght){
        firstName.style.border = '2px solid #e54858';
        
        return false;
        
    }
    first.style.border = 'solid #279e7a 0.19rem';
    return true;
}

form.addEventListener('submit', checkForm);


