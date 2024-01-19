import { checkInputValue, checkIfConditionsAccepted, checkIfCitySelected, checkIfUserIsYoungerThan18 } from "./functions.js";

// Je récupère la modale de succès + nav hamburger
const formWrapper = document.querySelector(".form_wrapper");
const modalSuccess = document.querySelector(".modal_success");
const btnSignup = document.querySelectorAll(".btn_signup");
const modalClose = document.querySelector(".btn-close");
const btnNav = document.querySelector("#btn_hamb");

// Je récupère les éléments de mon formulaire
const form = document.querySelector("form");
const firstnameField = document.querySelector("#first");
const lastnameField = document.querySelector("#last");
const emailField = document.querySelector("#email");
const birthdateField = document.querySelector("#birthdate");
const quantityField = document.querySelector("#quantity");
const conditionsCheckbox = document.querySelector("#checkbox1");
const allBtnRadio = document.querySelectorAll("input[name='location']");

// Toggle navbar
btnNav.addEventListener("click", () => document.querySelector(".list").classList.toggle("menu_toggle"));

// Ouvrir / Fermer le forumaire
btnSignup.forEach(btn => {
    btn.addEventListener("click", () => (formWrapper.style.display = "flex"));
});
modalClose.addEventListener("click", () => (formWrapper.style.display = "none"));

// Message d'erreur
const message = {
    name: "Min 2 caractères, max 15 caractères. Les chiffres et caractères spéciaux différents de - ne sont pas autorisés",
    email: "Veuillez renseigner une adresse mail valide.",
    birthdate: "Vous devez avoir plus de 18 ans pour participer",
    quantity: "Veuillez renseigner un nombre entre 0 et 99",
    city: "Veuillez sélectionner une ville",
    conditions: `Vous devez accepter les conditions d'utilisation`
};

// RegExp
const regexName = /^([A-Za-z|\s]{2,15})?([-]{0,1})?([A-Za-z|\s]{2,15})$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexQuantity = /^([0-9]{1,2})$/;

// Je check mes inputs à l'aide d'addEventListener
firstnameField.addEventListener("input", () => checkInputValue(regexName, firstnameField, message.name));
lastnameField.addEventListener("input", () => checkInputValue(regexName, lastnameField, message.name));
emailField.addEventListener("input", () => checkInputValue(regexEmail, emailField, message.email));
birthdateField.addEventListener("input", () => checkIfUserIsYoungerThan18(birthdateField, message.birthdate));
quantityField.addEventListener("input", () => checkInputValue(regexQuantity, quantityField, message.quantity));
conditionsCheckbox.addEventListener("input", () => checkIfConditionsAccepted(conditionsCheckbox, message.conditions));
allBtnRadio.forEach(radio => radio.addEventListener("change", () => checkIfCitySelected(allBtnRadio, message.city)));

// Fonction pour valider l'ensemble du formulaire
function validate(e) {
    // J'annule l'envoi du formulaire
    e.preventDefault();

    // Je vérifie si toutes les conditions sont vraies
    const isConditionsAccepted = checkIfConditionsAccepted(conditionsCheckbox, message.conditions);
    const isCitySelected = checkIfCitySelected(allBtnRadio, message.city);
    const isUserAgeValid = checkIfUserIsYoungerThan18(birthdateField, message.birthdate);
    const isQuantityValid = checkInputValue(regexQuantity, quantityField, message.quantity);
    const isEmailValid = checkInputValue(regexEmail, emailField, message.email);
    const isLastNameValid = checkInputValue(regexName, lastnameField, message.name);
    const isFirstNameValid = checkInputValue(regexName, firstnameField, message.name);

    if (
        isConditionsAccepted &&
        isCitySelected &&
        isUserAgeValid &&
        isQuantityValid &&
        isEmailValid &&
        isLastNameValid &&
        isFirstNameValid
    ) {
        // Si tout est vrai, j'enlève le formulaire
        formWrapper.style.display = "none";
        // Je fais pop la modale de succès
        modalSuccess.style.display = "flex";
        // Je reset tous les champs du form
        form.reset();
    }
}

// Envoie du formulaire
form.addEventListener("submit", e => validate(e));

// Fermer la modale de succès
document.querySelector(".modal_content button").addEventListener("click", () => (modalSuccess.style.display = "none"));
