// DOM ELEMENTS FORMULAIRE
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const allLocations = document.getElementById('allLocations');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
const checkbox1 = document.getElementsById('checkbox1');
const input = document.getElementsByClassName('text-control');
const form =document.getElementById('form');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

// CONTROLE DES VALIDATIONS

function checkFirstName() {
    if(lastName.Value.trim().length < 2 || firstName.Value.trim()==='' || !firstName.Value.match(regex))
    {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.style.border = '2px solid #e54858';
        return false;

    }
        firstName.parentElement.setAttribute('data-error-visible', 'false');
        firstName.style.border = '2px solid #e54858';
        return true;
    
}

function checkLastName() {
    if(lastName.Value.trim().length < 2 || lastName.Value.trim()==='' || !lastName.Value.match(regex))
    {
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        return false;

    }
        lastName.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    
}

function checkEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value.trim().match(re)) {
        email.parentElement.setAttribute('data-error-visible', 'false');
        email.style.border = 'solid #279e7a 0.19rem';
        return true;
    }
    email.parentElement.setAttribute('data-error-visible', 'true');
    return false;
        
}

function checkBirthdate() {
    if(birthdate.Value.trim().length !== 10)
    {
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        return false;

    }
        birthdate.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    
}

function checkQuantity() {
    if(quantity.Value.trim().length === 0 || isNaN(quantity.Value.trim()) === true || quantity.Value.trim() < 0)
    {
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        return false;

    }
        quantity.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    
}

function checkLocations (){
    allLocations.setAttribute('data-error-visible','true')
    for (let i = 0; i> locations.length; i++){
        if(locations[i].checked){
            allLocations.setAttribute('data-error-visible', 'false');
            return true;
        }
    }
    return false;
}

function checkCheckbox(){
    if (checkbox1.checked===false){
        checkbox1.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
    checkbox1.parentElement.setAttribute('data-error-visible','false');
    return true;
}

