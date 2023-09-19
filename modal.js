const editNav = () => {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// TODO:
//  - Messages d'erreur Tournois et Condition d'utilisation,
//  - Success message, form submission
//  - Responsive

// DOM Elements
const modalbg = document.querySelector(".bground");
const modal = document.querySelector(".content");
const modalCloseBtn = modal.querySelector(".modal-close")
const modalBtn = document.querySelectorAll(".modal-btn");
const inputsWrapper = document.querySelectorAll('.formInput');
const form = document.querySelector('.modalForm');


// Animation const of the modal when the modal is oppended
const launchModal = () => {
    modalbg.style.display = "block";
    modal.animate({
        opacity: [0, 1], transform: ["translateY(150px)", "translateX(0)"]
    }, {
        // temporisation
        duration: 400, iterations: 1, easing: "cubic-bezier(.35,.43,.18,1.54)"
    },);
}

// Animation function of the modal when the modal is closed
const closeModal = () => {
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

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.addEventListener("click", closeModal)

form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
    }
})
let formData = {};
const getAllInputs = () => {
    formData = {
        first: form['first'],
        last: form['last'],
        email: form['email'],
        birthdate: form['birthdate'],
        quantity: form['quantity'],
        location: form['location'],
        termsOfUse: form['termsOfUse'],
        newsletter: form['newsletter']
    }
}
getAllInputs();
const validate = form => {
    for (const name in formData) {
        let input = formData[name];
        resetError(input);
        if (isRequired(input)) {
            handleErrorValidation(input, "Ce champs ne peut pas être vide.");
            continue;
        }
        validation(input)
    }
}

inputsWrapper.forEach(input => {
    input.addEventListener("input", (e) => {
        let input = formData[e.target.name];
        resetError(input);

        if (isRequired(input)) {
            handleErrorValidation(input, "Ce champs ne peut pas être vide.")
        }
        validation(input)
    })
})

const validation = input => {
    const name = getInputName(input);
    const value = getInputValue(input);
    if ((name === "first" || name === "last") && !isValidName(value)) {
        handleErrorValidation(input, "Nom invalide : minimum 2 caractères et caractères spéciaux non autorisés.")
    } else if (name === "email" && !isValidEmail(value)) {
        handleErrorValidation(input, "Adresse e-mail invalide. Veuillez entrer une adresse e-mail valide.")
    } else if (name === "birthdate" && !isValidBirthdate(value)) {
        handleErrorValidation(input, "Date de naissance invalide. Veuillez entrer une date de naissance valide.")
    } else if (name === "quantity" && !isPositiveInteger(value)) {
        handleErrorValidation(input, "Quantité invalide. Veuillez entrer un nombre entier positif.");
    } else if (name === "termsOfUse" && !value) {
        // CHECKBOX ERROR MESSAGE
    }
    let wrapper = getInputWrapper(input);
    if (!wrapper.hasAttribute("data-error")) {
        input.classList.add("success");
    }
}


const isValidEmail = value => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
}

const isValidName = value => {
    const regex = /^[a-zA-Z ,.'-]{2,}$/;
    return regex.test(value);
}

const isValidBirthdate = value => {
    const birthdate = new Date(value);
    return !(birthdate > new Date() || birthdate.getFullYear() < 1900);
}

const isPositiveInteger = value => {
    const number = Number(value);
    return Number.isInteger(number) && number >= 0
}
const resetError = input => {
    const wrapper = getInputWrapper(input);
    if (wrapper.hasAttribute("data-error")) {
        wrapper.dataset.error = "false";
    }
}


const getInputValue = input => {
    return input.type === "checkbox" ? input.checked : input.value;
}

const getInputName = input => {
    const isNodeList = NodeList.prototype.isPrototypeOf(input);
    if (isNodeList) {
        return input[0].name
    } else {
        return input.name;
    }
}
const isRequired = input => {
    return input.required && !getInputValue(input);
}
const getInputWrapper = input => {
    let formInput;
    const isNodeList = NodeList.prototype.isPrototypeOf(input);
    if (isNodeList) {
        formInput = input[0].closest('.formInput')
    } else {
        formInput = input.closest('.formInput')
    }

    return formInput;
}
const handleErrorValidation = (input, message) => {
    const inputWrapper = getInputWrapper(input);
    const errorElement = inputWrapper.querySelector('.validation-error');
    inputWrapper.dataset.error = "true";
    errorElement ? errorElement.innerText = String(message) : null;
}

// const getInputFieldValues = (name, isRequired = false, validate = null) => {
//     const value = form[name].value.trim();
//     const domElement = form[name];
//     let validation = null;
//
//     if (typeof validate === 'function') {
//         validation = {validate};
//     } else if (typeof validate === 'object' && validate !== null && typeof validate.function === 'function') {
//         validation = {validate: validate.function, message: validate.message};
//     }
//
//     return {value, domElement, required: isRequired, validation};
// }
//
//
// // Handle the validation of the form when the form is submitted
// const validate = form => {
//     resetErrorMessage();
//     let hasErrors = false;
//     let inputs = {
//         firstname: getInputFieldValues("first", true, {
//             function: isName, message: "Veuillez entrer un prénom valide."
//         }),
//         lastname: getInputFieldValues("last", true, {
//             function: isName, message: "Veuillez entrer un nom de famille valide."
//         }),
//         email: getInputFieldValues("email", true, {
//             function: isEmail, message: "Veuillez entrer une adresse e-mail valide."
//         }),
//         birthday: getInputFieldValues("birthdate", true, {
//             function: isValidBirthdate, message: "Veuillez entrer une date de naissance valide."
//         }),
//         tournament: getInputFieldValues("quantity", true, {
//             function: isPositiveInteger, message: "Veuillez entrer une valeur numérique positive."
//         }),
//         location: getInputFieldValues("location", true),
//         termsOfUse: getInputFieldValues("termsOfUse", true),
//         newsletter: getInputFieldValues("newsletter"),
//     }
//
//     // For each inputs, handle required and validation
//     for (const name in inputs) {
//         const input = inputs[name];
//         let formInput;
//         const isNodeList = NodeList.prototype.isPrototypeOf(input.domElement);
//         if (isNodeList) {
//             formInput = input.domElement[0].closest('.formInput')
//         } else {
//             formInput = input.domElement.closest('.formInput')
//         }
//
//         if (isRequired(input)) {
//             console.log(input)
//             handleErrorValidation(formInput, "Ce champ ne peut pas être vide.")
//             hasErrors = true;
//             continue;
//         }
//
//         if (input.validation) {
//             if (!input.validation.validate(input.value)) {
//                 let errorMessage = input.validation.message ? input.validation.message : "La valeur saisie est incorrecte. Veuillez vérifier et corriger.";
//                 handleErrorValidation(formInput, errorMessage)
//                 hasErrors = true;
//             }
//         }
//     }
//
//     checkFormValidity(hasErrors);
//     inlineValidation();
//
// }
//
// const handleErrorValidation = (input, message) => {
//     const errorElement = input.querySelector('.validation-error');
//     input.dataset.error = "true";
//     errorElement ? errorElement.innerText = String(message) : null;
// }
//
// const resetErrorMessage = () => {
//     formData.forEach(form => {
//         if (form.hasAttribute("data-error")) {
//             delete form.dataset.error;
//         }
//
//     })
// }
//
// const inlineValidation = () => {
//     formData.forEach(input => {
//         input.addEventListener("input", (input) => {
//             const name = input.target.name;
//             console.log(getInputFieldValues(name, true, {
//                 function: isEmail, message: "Veuillez entrer une adresse e-mail valide."
//             }))
//         })
//     })
// }
//
// const isRequired = input => {
//     return (input.required && (!input.value))
// }
//
// const isEmail = email => {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }
//
// const isName = name => {
//     const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ-' ]+$/;
//     return nameRegex.test(name);
// }
//
// const isValidBirthdate = birthDate => {
//     return new Date(birthDate) < new Date();
// }
//

//
// const checkFormValidity = (errors) => {
//     if (errors) {
//         modal.classList.add("shake");
//         setTimeout(() => {
//             modal.classList.remove("shake");
//         }, 1000)
//         return false;
//     } else {
//         closeModal()
//         setTimeout(() => {
//             form.submit();
//         }, 1000)
//     }
// }