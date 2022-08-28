const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const locations = document.querySelectorAll('input[type="radio"]');
const checkbox = document.getElementById('checkbox1');

console.log(document.getElementsByClassName('modal-body'));

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
        showError(firstName, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
        valid = false;
    }
}

const checkLastName = () => {
    if(lastName.value.length < 2 || lastName.value.length == "") {
        showError(lastName, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
        valid = false;
    }
}

const checkEmail = () => {
    if(email.value.indexOf('@') == -1) {
        showError(email, 'Veuillez entrer une adresse mail valide.');
        valid = false;
    }
}

const checkTournamentQuantity = () => {
    if(isNaN(quantity.value) || quantity.value === '') {
        showError(quantity, 'Veuillez induquer le nombre de tournois.');
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
        showError(locations[0], 'Vous devez choisir une option.'); 
        valid = false;
    }
}

const checkTermsOfService = () => {
    if(!checkbox.checked) {
        showError(checkbox, 'Vous devez vérifier que vous acceptez les termes et conditions.');
        valid = false;
    }
}

const checkBirthdayDate = () => {
    let date = new Date(birthdate);
    if(!date instanceof Date || isNaN(date)) {
        console.log(birthdate.value.toString());
        console.log(date);
        showError(birthdate, 'Vous devez entrer votre date de naissance.');
        // valid = false;
    }
};

function validate() {
    event.preventDefault();
    let valid = true;

    checkFirstName();
    checkLastName();
    checkEmail();
    checkTournamentQuantity();
    checkLocation();
    checkTermsOfService();

    if(valid) {
        showValidationMessage();
        showCloseButton();
    }

    return valid;
}