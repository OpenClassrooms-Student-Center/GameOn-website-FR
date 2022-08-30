const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const locations = document.querySelectorAll('input[type="radio"]');
const checkbox = document.getElementById('checkbox1');

let valid = true;

const checkFirstName = () => {
    // if(firstName.value.length < 2 || firstName.value.length == "") {
    if(!isLettersOnly(firstName.value.trim())) {
        showError(firstName, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
        valid = false;
    } else clearError(firstName);
}

const checkLastName = () => {
    if(!isLettersOnly(lastName.value.trim())) {
        showError(lastName, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
        valid = false;
    } else clearError(lastName);
}

const checkEmail = () => {
    if(email.value.indexOf('@') == -1) {
        showError(email, 'Veuillez entrer une adresse mail valide.');
        valid = false;
    } else clearError(email);
}

const checkTournamentQuantity = () => {
    if(isNaN(quantity.value) || quantity.value === '') {
        showError(quantity, 'Veuillez induquer le nombre de tournois.');
        valid = false;
    } else clearError(quantity);
}

const checkLocation = () => {
    let checked = false;

    for(let location of locations) {
        if(location.checked) {
            checked = true;
            break;
        }
    }

    if(!checked) { 
        showError(locations[0], 'Vous devez choisir une option.'); 
        valid = false;
    } else clearError(locations[0]);
}

const checkTermsOfService = () => {
    if(!checkbox.checked) {
        showError(checkbox, 'Vous devez vérifier que vous acceptez les termes et conditions.');
        valid = false;
    } else clearError(checkbox);
}

const checkBirthdayDate = () => {
    let date = new Date(birthdate);
    if(!date instanceof Date || isNaN(date)) {
        console.log(birthdate.value.toString());
        console.log(date);
        showError(birthdate, 'Vous devez entrer votre date de naissance.');
        // valid = false;
    } /*else clearError(birthdate);*/
};

const isLettersOnly = (string) => {
    return /^[a-z][a-z]+$/i.test(string);
};

const validate = (event) => {
    valid = true;

    checkFirstName();
    checkLastName();
    checkEmail();
    checkTournamentQuantity();
    checkLocation();
    checkTermsOfService();

    console.log(`form is ${valid ? 'valid' : 'invalid'}`);

    if(valid) {
        showValidationMessage();
        showCloseButton();
    } /*else { event.preventDefault(); }*/

    // return false;
}