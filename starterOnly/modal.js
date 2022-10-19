// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close");
const modalForm = document.getElementById("bookingForm");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const participation = document.querySelector("#quantity");
const locations = document.querySelectorAll("#locations > input");
const terms = document.querySelector("#checkbox1");

// regex
const regText = new RegExp(/^[^\s][a-zA-ZÀ-ȕ\s]{1,}$/);
const regMail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const regNum = new RegExp(/^[0-9]{1,4}$/);

function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } 
    else {
        x.className = "topnav";
    }
}

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal function
function closeModal() {
    modalbg.style.display = "none";
    cleanWarning();
}

// validate form
// storing results in an object
// submit form if all true else show an error
function validate(e) {
    e.preventDefault();
    cleanWarning();

    let res = {
        firstName: checkText(firstName),
        lastName: checkText(lastName),
        email: checkMail(email),
        birthDate: checkDate(birthDate),
        participation: checkNum(participation),
        locations: checkLocation(locations),
        terms: checkTerms(terms)
    }

    if (Object.values(res).every((e) => e == true)) {
        (async() => {
            closeModal();
            validationMessage();
            await waiting(2500);
            modalForm.submit();
        })();
    }
    else {
        Object.values(res).map((e) => {
            if (e.hasOwnProperty("errMsg")) {
                onErrorShow(e.errMsg, e.target);
            }
        })
    }
}

// ckeck if text input is valid.
function checkText(input) {
    let errorMsg = "Veuillez saisir un nom/prénom valide.";

    return (regText.test(input.value)) ? true : { target: input.parentNode, errMsg: errorMsg };
}

// ckeck if mail input is valid.
function checkMail(input) {
    let errorMsg = "Veuillez saisir une adresse électronique valide.";

    return (regMail.test(input.value)) ? true : { target: input.parentNode, errMsg: errorMsg };
}

// ckeck if date input is valid.
// if input date is valid we compare the year to today's year (min: 3, max: 256)
function checkDate(input) {
    let date = new Date(input.value);
    let dateYear = date.getFullYear();
    let todayYear = new Date().getFullYear();
    let errorMsg = "Veuillez saisir une date valide.";

    return (date.toString() !== "Invalid Date" && dateYear <= todayYear - 3 && dateYear >= todayYear - 256) ? true : { target: input.parentNode, errMsg: errorMsg };
}

// ckeck if number input is valid.
function checkNum(input) {
    let errorMsg = "Veuillez saisir une valeur numérique valide.";

    return (regNum.test(input.value)) ? true : { target: input.parentNode, errMsg: errorMsg };
}

// check if a radio button is checked or not.
// getting all input in #locations, making an array from the nodelist to filter checked radio btn. 
// if the array length is greater than 0 we return true else we return an error message.
function checkLocation(inputs) {
    let errorMsg = "Veuillez cocher un tournoi.";
    
    return (Array.from(inputs).filter((e) => e.checked).length > 0) ? true : { target: inputs[0].parentNode, errMsg: errorMsg };
}

// ckeck if terms checkbox is checked or not.
function checkTerms(input) {
    let errorMsg = "Veuillez lire et accepté les conditions d'utilisation.";

    return (input.checked) ? true : { target: input.parentNode, errMsg: errorMsg };
}

// show an error message.
function onErrorShow(errMsg, target) {
    let te = document.createElement("p");
        te.innerText = errMsg;
        te.classList.add("warning-text");
        
    target.appendChild(te);
}

// getting all DOM elements with the warning class and remove them from the DOM.
function cleanWarning() {
    let allWarning = document.querySelectorAll(".warning-text");

    Array.from(allWarning).map((e) => e.remove());
}

function validationMessage() {
    let validMsg = document.createElement("div");
        validMsg.innerText = "Merci ! Votre réservation a été reçue.";
        validMsg.classList.add("validation-message");

    document.querySelector("main").appendChild(validMsg);
    
    setTimeout(() => {
        validMsg.style.opacity = "100%";
    }, 0);
}

function waiting(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

// Event listener.
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.forEach((e) => e.addEventListener("click", closeModal));
modalForm.addEventListener("submit", validate);