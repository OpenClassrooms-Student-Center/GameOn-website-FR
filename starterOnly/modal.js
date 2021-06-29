/**
 * @type {Element} - Dom elements
 */
const modalBg = document.querySelector(".bground");
const messageModal = document.querySelector(".message-modal");
const content = document.querySelector(".content");
const form = document.getElementById("form");
const formData = document.querySelectorAll(".formData");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close");
const closeMessageBtn = document.querySelectorAll(".btn-message");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birth = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox = document.querySelectorAll("#location1,#location2,#location3,#location4,#location5,#location6");
const conditions = document.getElementById("checkbox1");
const submitButton = document.getElementsByClassName("btn-submit");
const error = document.getElementsByClassName("error-message");

/**
 * @type {RegExp} - Regular expressions that allow to check the consistency of the data input
 */
const firstRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆŠŽ∂ð'-]{2,}$/i;
const lastRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆŠŽ∂ð' -]{2,}$/i;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const quantityRegex = /^([\d])+$/i;

/**
 * Function that allow to the navigation menu to be responsive
 */
function editNav() {
    let topNav = document.getElementById("myTopnav");
    if (topNav.className === "topnav") {
        topNav.className += " responsive";
    } else {
        topNav.className = "topnav";
    }
}

/**
 * Functions that allow to open the form and message modal.
 */
function openModal() {
    modalBg.style.display = "block";
    modalBg.style.animation = "modalopen 0.8s";
}
function openModalMessage() {
    messageModal.style.display = "block";
    modalBg.style.display = "none";
}

/**
 * Functions that allow to close the form and message modal.
 */
function closeModal() {
    modalBg.style.animation = "modalclose 3s forwards";
}
function closeModalMessage() {
    messageModal.style.display = "none";
    form.submit();
}

/**
 * Event that listen the opening events of the form modal.
 */
modalBtn.forEach((btn) => btn.addEventListener("click", openModal));

/**
 * Event that listen the closing of the form and message modals
 */
closeBtn.forEach((cls) => cls.addEventListener("click",closeModal));
closeMessageBtn.forEach((cls) => cls.addEventListener("click",closeModalMessage));

/**
 * This function is call when the form is submitted. It's role is to prevent the submission in the cases where the data
 * aren't consistent with what's expected.
*/
function validate(event) {
    const toValidate = Object.values(event.target);
    function isChecked() {
        let acc = 0;
        for (let i = 5; i < 11; i+=1) {
            acc+=toValidate[i].checked;
        }
        return acc;
    }
    if (!firstRegex.test(toValidate[0].value)) {
        event.preventDefault();
        // Check the case where the form is submitted by letting all inputs blank
        if (toValidate[0].value===""){
            formData[0].setAttribute("data-error","Le champ du prénom ne peut pas être vide");
            formData[0].setAttribute("data-error-visible","true");
        }
    } else if (!lastRegex.test(toValidate[1].value)) {
        event.preventDefault();
        // Check the case where the form is submitted by letting all inputs blank
        if (toValidate[1].value===""){
            formData[1].setAttribute("data-error","Le champ du nom ne peut pas être vide");
            formData[1].setAttribute("data-error-visible","true");
        }
    } else if (!emailRegex.test(toValidate[2].value)) {
        event.preventDefault();
        // Check the case where the form is submitted by letting all inputs blank
        if (toValidate[2].value===""){
            formData[2].setAttribute("data-error","Le champ e-mail ne peut pas être vide");
            formData[2].setAttribute("data-error-visible","true");
        }
    } else if (toValidate[3].value==="") {
        event.preventDefault();
        // Check the case where the form is submitted by letting all inputs blank
        formData[3].setAttribute("data-error","Le champ de la date de naissance ne peut pas être vide");
        formData[3].setAttribute("data-error-visible","true");
    } else if (!quantityRegex.test(toValidate[4].value)) {
        event.preventDefault();
        // Check the case where the form is submitted by letting all inputs blank
        formData[4].setAttribute("data-error","Le champ des participations ne peut pas être vide");
        formData[4].setAttribute("data-error-visible","true");
    } else if (isChecked()===0){
        event.preventDefault();
        // Check the case where the form is submitted by letting all inputs blank
        formData[5].setAttribute("data-error","Vous devez cochez une option");
        formData[5].setAttribute("data-error-visible","true");

    } else if (!formData[6].firstElementChild.checked) {
        event.preventDefault();
        formData[6].setAttribute("data-error","Vous devez accepter les conditions d'utilisations");
        formData[6].setAttribute("data-error-visible","true");
    } else {
        event.preventDefault();
        openModalMessage();
    }
}

/**
 * Theses functions listen all the inputs and send a validation message in the case where the input data aren't
 * consistent
 * @param event - Form submission event
 */
function onInputFirst(event) {
    if (event.target.value.length < 2) {
        if (event.target.value.length === 0) {
            event.target.parentElement.setAttribute("data-error","Le champ du prénom ne peut être vide");
            event.target.parentElement.setAttribute("data-error-visible","true");
        } else {
            event.target.parentElement.setAttribute("data-error","Le champ du prénom doit contenir 2 caractères ou plus");
            event.target.parentElement.setAttribute("data-error-visible","true");
        }
    } else if (!firstRegex.test(event.target.value)) {
        event.target.parentElement.setAttribute("data-error","Le champ du prénom doit contenir que des caractères alphabétiques");
        event.target.parentElement.setAttribute("data-error-visible","true");
    } else {
        event.target.parentElement.removeAttribute("data-error");
        event.target.parentElement.removeAttribute("data-error-visible");
    }
}
function onInputLast(event) {
    if (event.target.value.length < 2) {
        if (event.target.value.length === 0) {
            event.target.parentElement.setAttribute("data-error","Le champ du nom ne peut être vide");
            event.target.parentElement.setAttribute("data-error-visible","true");
        } else {
            event.target.parentElement.setAttribute("data-error","Le champ du nom doit contenir 2 caractères ou plus");
            event.target.parentElement.setAttribute("data-error-visible","true");
        }
    } else if (!lastRegex.test(event.target.value)) {
        event.target.parentElement.setAttribute("data-error","Le champ du nom doit contenir que des caractères alphabétiques");
        event.target.parentElement.setAttribute("data-error-visible","true");
    } else {
        event.target.parentElement.removeAttribute("data-error");
        event.target.parentElement.removeAttribute("data-error-visible");
    }
}
function onInputEmail(event) {
    if (event.target.value === "") {
        event.target.parentElement.setAttribute("data-error","Le champ e-mail ne peut pas être vide");
        event.target.parentElement.setAttribute("data-error-visible","true");
    } else if (!event.target.value.includes("@")) {
        event.target.parentElement.setAttribute("data-error","Le champ e-mail doit contenir un @");
        event.target.parentElement.setAttribute("data-error-visible","true");
    } else if (!emailRegex.test(event.target.value)) {
        event.target.parentElement.setAttribute("data-error","Le champ du courriel doit être conforme au format e-mail");
        event.target.parentElement.setAttribute("data-error-visible","true");
    } else {
        event.target.parentElement.removeAttribute("data-error");
        event.target.parentElement.removeAttribute("data-error-visible");
    }
}
function onInputBirth(event) {
    if (event.target.value === "") {
        event.target.parentElement.setAttribute("data-error","Le champ de la date de naissance ne peut pas être vide");
        event.target.parentElement.setAttribute("data-error-visible","true");
    } else {
        event.target.parentElement.removeAttribute("data-error");
        event.target.parentElement.removeAttribute("data-error-visible");
    }
}
function onInputQuant(event) {
    if (event.target.value === "") {
        event.target.parentElement.setAttribute("data-error","Le champ des participations doit contenir un nombre");
        event.target.parentElement.setAttribute("data-error-visible","true");
    } else {
        event.target.parentElement.removeAttribute("data-error");
        event.target.parentElement.removeAttribute("data-error-visible");
    }
}
function onInputConditions(event){
    if (!event.target.checked) {
        event.target.parentElement.setAttribute("data-error","Vous devez accepter les conditions d'utilisations");
        event.target.parentElement.setAttribute("data-error-visible","true");
    } else {
        event.target.parentElement.removeAttribute("data-error");
        event.target.parentElement.removeAttribute("data-error-visible");
    }
}

/**
 * When the user submitted the form, check the case where the validation avoid the submission because
 * of a radio not checked. Listen on all the radio input and if one is checked, remove the validation message.
 * A event listener is use rather than a function to avoid of listening every radio input.
 */
checkbox.forEach((rad) => rad.addEventListener("input", function (event){
    if (event.target.checked){
        event.target.parentElement.removeAttribute("data-error");
        event.target.parentElement.removeAttribute("data-error-visible");
    }
}))




