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
const modal = document.querySelector(".content");
const modalCloseBtn = modal.querySelector(".modal-close")
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll('.formInput');
const form = modal.querySelector("form")
formData.forEach(form => {
    let input = form.querySelector("input");
    input.addEventListener("change", () => {
        if (form.hasAttribute("data-error")) {
            delete form.dataset.error;
        }
    })
})

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
form.addEventListener("submit", (e) => {
    e.preventDefault();
})

// Handle the validation of the form when the form is submitted
function validate(form) {

    let hasErrors = false;

    formData.forEach(element => {
        delete element.dataset.error;
    })
    let inputs = {
        firstname: {
            value: form['first'].value.trim(), domElement: form['first'], required: true, validation: {
                validate: value => {
                    return isName(value)
                }, message: "Veuillez entrer un prénom valide contenant au moins 2 caractères alphabétiques."
            }
        }, lastname: {
            value: form['last'].value.trim(), domElement: form['last'], required: true, validation: {
                validate: value => {
                    return isName(value)
                }, message: "Veuillez entrer un nom de famille valide contenant au moins 2 caractères alphabétiques."
            }
        }, email: {
            value: form['email'].value.trim(), domElement: form['email'], required: true, validation: {
                validate: value => {
                    return isEmail(value)
                }, message: "Veuillez entrer une adresse email valide."
            }
        }, birthday: {
            value: form['birthdate'].value.trim(), domElement: form['birthdate'], required: true, validation: {
                validate: value => {
                    return isValidBirthdate(value)
                }, message: "Veuillez entrer une date de naissance valide."
            }
        }, tournament: {
            value: form['quantity'].value.trim(), domElement: form['quantity'], required: true, validation: {
                validate: value => {
                    return isPositiveInteger(value)
                }, message: "Veuillez entrer un nombre entier positif pour le nombre de tournois."
            }
        }, location: {
            value: form['location'].value.trim(), domElement: form['location'], required: true
        }, termsOfUse: {
            value: form['termsOfUse'].checked, domElement: form['termsOfUse'], required: true
        }, newsletter: {
            value: form['newsletter'].checked, domElement: form['newsletter']
        }
    }


    for (const key in inputs) {
        const input = inputs[key];
        let formInput;
        const isNodeList = NodeList.prototype.isPrototypeOf(input.domElement);
        if (isNodeList) {
            formInput = input.domElement[0].closest('.formInput')
        } else {
            formInput = input.domElement.closest('.formInput')
        }

        console.log(formInput)

        if (isRequired(input)) {
            handleErrorValidation(formInput, "Ce champ ne peut pas être vide.")
            hasErrors = true;
            continue; // next iteration
        }

        if (input.hasOwnProperty("validation")) {
            if (!input.validation.validate(input.value)) {
                handleErrorValidation(formInput, input.validation.message);
                hasErrors = true;
            }
        }
    }
    if (hasErrors) {
        modal.classList.add("shake");
        setTimeout(() => {
            modal.classList.remove("shake");
        }, 1000)
        return false;
    } else {
        closeModal()
        setTimeout(() => {
            form.submit();
        }, 1000)
    }
}

function handleErrorValidation(input, message) {
    const errorElement = input.querySelector('.validation-error');
    input.dataset.error = "true";
    errorElement ? errorElement.innerText = String(message) : null;

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
