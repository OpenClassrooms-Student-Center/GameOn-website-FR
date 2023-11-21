const modal = document.querySelector(".bground");
const ageMinimum = 13;
let closeCross = document.querySelector(".close");
//let reserveForm = document.getElementById("reserveForm");
let reserveForm = document.querySelector("#reserveForm");
const modalBtn = document.querySelectorAll(".modal-btn");
let reservation = document.getElementById("reservation");
var errorTest = false;

window.addEventListener("load", (event) => {
    reserveForm.classList.remove("hide");
    reservation.classList.add("hide");
});

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none"
}

closeCross.addEventListener('click', closeModal);


let closeButton = document.querySelector(".btn-close");
closeButton.addEventListener('click', (event) => {
    closeModal();
    reserveForm.classList.remove("hide");
    reservation.classList.add("hide");
});

let btnClose = document.querySelector(".btn-close");
btnClose.addEventListener('click', closeModal);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//ajoute le message d'erreur
function addErrorMsg(spanError) {
    errorTest = true;
    if (Array.isArray(spanError) && spanError.length > 0) {
        let error = document.getElementById(spanError[0]);
        error.textContent = spanError[1]
        error.classList.remove('hide');

        if (spanError[0] !== 'locationError') {
            let inputId = spanError[0].replace('Error', '');
            let input = document.getElementById(inputId);
            input.classList.add('invalid');
        }
    }
}

//supprime le message d'erreur
function removeErrorMsg(spanId) {
    errorTest = false;
    if (spanId.trim().length !== 0) {
        let error = document.getElementById(spanId);
        error.textContent = ""
        error.classList.add('hide');
        let inputId = spanId.replace('Error', '');
        let input = document.getElementById(inputId);
        if (spanId !== 'locationError') {
            input.classList.remove('invalid');
        }
    }
}

// verifie le first name
let firstNameField = document.getElementById('first');

function checkFirstName() {
    let spanId = "firstError";
    removeErrorMsg(spanId);

    let firstNameValue = firstNameField.value
    if (firstNameValue.length >= 2) {
        return true; // keep form from submitting
    }

    let spanError = [spanId, "Le prénom est trop court"]
    addErrorMsg(spanError)

    return false;
}

firstNameField.addEventListener("blur", checkFirstName, true);

// verifie le lastname
let lastNameField = document.getElementById('last');

function checkLastName() {
    let spanId = "lastError";
    removeErrorMsg(spanId);
    let lastNameValue = lastNameField.value
    if (lastNameValue.length >= 2) {
        return true; // keep form from submitting
    }
    let spanError = [spanId, "Le nom est trop court"]
    addErrorMsg(spanError)
    return false;

}

lastNameField.addEventListener("blur", checkLastName, true);

// verifie l'email
let emailField = document.getElementById('email');

function checkEmail() {
    let spanId = "emailError";
    removeErrorMsg(spanId);
    let emailValue = emailField.value
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Supprimez l'élément span d'erreur existant, s'il existe
    let errorEmail = document.getElementById('errorEmail');
    if (emailRegex.test(emailValue)) {
        return true; // keep form from submitting
    }
    let spanError = [spanId, "L'email n'est pas valide"]
    addErrorMsg(spanError)
    return false;
}

emailField.addEventListener("blur", checkEmail, true);

// verifie l'age >= 13
function isMoreThan(birthdate) {
    let today = new Date();
    let todayMonth = today.getMonth() + 1;
    let age = today.getYear() - birthdate.getYear();
    if ((todayMonth > birthdate.getMonth() || ((todayMonth === birthdate.getMonth()) && (today.getDate() < birthdate.getDate())))) {
        age--;
    }
    return age >= ageMinimum;
}

let birthdateField = document.getElementById('birthdate');

function checkBirthdate() {
    let spanId = "birthdateError";
    removeErrorMsg(spanId);
    let birthdateValue = birthdateField.value
    let dateRegex = /^(19|20)\d{2}-(0[1-9]|1[1,2])-(0[1-9]|[12][0-9]|3[01])$/;
    let birthdate = new Date(birthdateValue);
    testDate = !isNaN(Date.parse(birthdate));
    if (dateRegex.test(birthdateValue) && testDate && isMoreThan(birthdate)) {
        return true
        // test date valide
    } else if (testDate === false) {
        let spanError = [spanId, "Vous devez saisir une date valide"]
        addErrorMsg(spanError)
        return false;

    } else if (!isMoreThan(birthdate)) {
        let spanError = [spanId, "Vous devez avoir plus de " + ageMinimum + " ans"]
        addErrorMsg(spanError)
        return false;

    }
}

birthdateField.addEventListener("blur", checkBirthdate, true);

// verifie la quantite
let quantityField = document.getElementById('quantity');

function checkQuantity() {
    let spanId = "quantityError";
    removeErrorMsg(spanId);
    let quantityValue = quantityField.value;

    if (isNaN(quantityValue) === false && quantityValue >= 0 && quantityValue < 100) {
        return true; // keep form from submitting
    }
    let spanError = [spanId, "Vous devez rentrer un chiffre"]
    addErrorMsg(spanError)

    return false;
}

quantityField.addEventListener("blur", checkQuantity, true);

// verifie les radio location
let locationRadios = document.querySelectorAll('input[name="location"]');

function checkLocation(initial = 1) {
    let spanId = "locationError";
    removeErrorMsg(spanId);
    let isChecked = Array.from(locationRadios).some(radio => radio.checked);
    if (isChecked) {
        return true;
    }
    if (initial !== 0) {
        let spanError = [spanId, "Vous devez choisir un tournoi"];
        addErrorMsg(spanError);
        return false;
    }

}

checkLocation(0);
locationRadios.forEach(locationRadio => locationRadio.addEventListener('change', checkLocation));


// verifie les checkbox cgu
let cguCheckbox = document.getElementById('cgu');

function checkCgu() {
    let spanId = "cguError";
    removeErrorMsg(spanId);
    if (cguCheckbox.checked) {
        return true; // keep form from submitting

    }
    let spanError = [spanId, "Vous devez accepter les conditions d'utilisations"]
    addErrorMsg(spanError)
    return false;

}

cguCheckbox.addEventListener('change', checkCgu);

// verifie l'inscription aux prochain evenement
let nextEvent = document.getElementById('nextEvent');

function checkNextEvent() {
    if (nextEvent.checked) {
        return true; 
    }
    return null;

}

nextEvent.addEventListener('change', checkCgu);

function removeForm() {
    let reserveForm2 = document.querySelector("#reserveForm");
    console.log(reservation);
    reserveForm2.classList.add("hide");
    reservation.classList.remove("hide");
   // reserveForm.reset();
}

document.getElementById("btn-submit").addEventListener("click", function (event) {
    event.preventDefault();
    //faire les tests
    checkFirstName();
    checkLastName();
    checkEmail();
    checkBirthdate();
    checkQuantity();
    checkLocation();
    checkCgu();
    if (errorTest === false) {
        removeForm();
    }
});


function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements

const formData = document.querySelectorAll(".formData");

// launch modal event


// launch modal form

