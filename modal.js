function editNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modal = modalbg.querySelector(".content");
const modalCloseBtn = modal.querySelector(".modal-close")
const modalBtn = document.querySelectorAll(".modal-btn");

const myForm = modal.querySelector("#modal-form")


// launch/close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.addEventListener("click", closeModal)

// Animation function of the modal when the modal is oppended
function launchModal() {
    modalbg.style.display = "block";
    modal.animate({
        opacity: [0, 1], transform: ["translateY(150px)", "translateX(0)"]
    }, {
        // temporisation
        duration: 400, iterations: 1, easing: "cubic-bezier(.35,.43,.18,1.54)"
    },);

}

// Animation function of the modal when the modal is closed
function closeModal() {
    setTimeout(() => {
        modalbg.style.display = "none"
    }, 390)
    modal.animate(// étapes/keyframes
        {
            opacity: [1, 0], transform: ["translateY(0)", "translateY(-150px)"]
        }, {
            // temporisation
            duration: 400, iterations: 1, easing: "cubic-bezier(.35,.43,.18,1.54)"
        });

}

// Prevent the page from reloading when the form is submitted
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
})

// Handle the validation of the form when the form is submitted
function validate(form) {
    let inputs = {
        firstname: {
            value: form['first'].value.trim(), required: true, validation : {
                validate: value => { return isName(value)},
                message: "Veuillez entrer 2 caractères valides ou plus."
            }
        }, lastname: {
            value: form['last'].value.trim(), required: true, validation : {
                validate: value => { return isName(value)},
                message: "Veuillez entrer 2 caractères valides ou plus."
            }
        }, email: {
            value: form['email'].value.trim(), required: true, validation : {
                validate: value => { return isEmail(value)},
                message: "Veuillez entrer un adresse email valide."
            }
        }, birthday: {
            value: form['birthdate'].value.trim(), required: true, validation : {
                validate: value => { return isValidBirthdate(value)},
                message: "Vous devez entrer votre date de naissance."
            }
        }, tournament: {
            value: form['quantity'].value.trim(), required: true, validation : {
                validate: value => { return isPositiveInteger(value)},
                message: "Veuillez entrer un chiffre valide."
            }
        }, location: {
            value: form['location'].value.trim(), required: true
        }, termsOfUse: {
            value: form['termsOfUse'].checked, required: true
        }, newsletter: {
            value: form['newsletter'].checked
        }
    }
    for (const [key, input] of Object.entries(inputs)) {
        if (isRequired(input)) {
            console.error(`Please complete the form for ${key}`);
        }

        if (input.hasOwnProperty("validation")) {
            console.log(key, input.validation.validate(input.value));
            handleErrorValidation(input);
        }
    }
    form.submit();
}

function handleErrorValidation(input) {
    let error = input.validation.message ? input.validation.message : "Une erreur est survenue"
    console.log(error)
}
function isRequired(input) {
    return (input.required && (!input.value))
}

function isEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function isName(name) {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ-' ]+$/;
    return nameRegex.test(name);
}

function isValidBirthdate(birthDate) {
    return new Date(birthDate) < new Date();
}

function isPositiveInteger(value) {
    const number = Number(value);
    return Number.isInteger(number) && number >= 0
}
