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
const messageModal = document.querySelector(".message-modal");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
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

//Regular expressions
const firstRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆŠŽ∂ð'-]{2,}$/i;
const lastRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆŠŽ∂ð' -]{2,}$/i;
const emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/i;
const quantityRegex = /^([\d])+$/i;


// Launch modal form
function launchModal() {
    modalbg.style.display = "block";
}
function closeModal() {
    modalbg.style.display = "none";
}


function launchModalMessage() {
    messageModal.style.display = "block";
}
function closeModalMessage() {
    messageModal.style.display = "none";
}

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Closing modal event
closeBtn.forEach((cls) => cls.addEventListener("click",closeModal));

closeMessageBtn.forEach((cls) => cls.addEventListener("click",closeModalMessage));


//Validation Event
function validate(event) {
    const toValidate = Object.values(event.target);
    console.log(formData[6].firstElementChild);
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
        return launchModalMessage();
    }
}

// Message validation events
function onInputFirst(event) {
    if (event.target.value.length < 2) {
        if (event.target.value.length === 0) {
            formData[0].setAttribute("data-error","Le champ du prénom ne peut être vide");
            formData[0].setAttribute("data-error-visible","true");
        } else {
            formData[0].setAttribute("data-error","Le champ du prénom doit contenir 2 caractères ou plus");
            formData[0].setAttribute("data-error-visible","true");
        }
    } else if (!firstRegex.test(event.target.value)) {
        formData[0].setAttribute("data-error","Le champ du prénom doit contenir que des caractères alphabétiques");
        formData[0].setAttribute("data-error-visible","true");
    } else {
        formData[0].removeAttribute("data-error");
        formData[0].removeAttribute("data-error-visible");
    }
}

function onInputLast(event) {
    if (event.target.value.length < 2) {
        if (event.target.value.length === 0) {
            formData[1].setAttribute("data-error","Le champ du nom ne peut être vide");
            formData[1].setAttribute("data-error-visible","true");
        } else {
            formData[1].setAttribute("data-error","Le champ du nom doit contenir 2 caractères ou plus");
            formData[1].setAttribute("data-error-visible","true");
        }
    } else if (!lastRegex.test(event.target.value)) {
        formData[1].setAttribute("data-error","Le champ du nom doit contenir que des caractères alphabétiques");
        formData[1].setAttribute("data-error-visible","true");
    } else {
        formData[1].removeAttribute("data-error");
        formData[1].removeAttribute("data-error-visible");
    }
}

function onInputEmail(event) {
    if (event.target.value === "") {
        formData[2].setAttribute("data-error","Le champ e-mail ne peut pas être vide");
        formData[2].setAttribute("data-error-visible","true");
    } else if (!event.target.value.includes("@")) {
        formData[2].setAttribute("data-error","Le champ e-mail doit contenir un @");
        formData[2].setAttribute("data-error-visible","true");
    } else if (!emailRegex.test(event.target.value)) {
        formData[2].setAttribute("data-error","Le champ du courriel doit être conforme au format e-mail");
        formData[2].setAttribute("data-error-visible","true");
    } else {
        formData[2].removeAttribute("data-error");
        formData[2].removeAttribute("data-error-visible");
    }
}

function onInputBirth(event) {
    if (event.target.value === "") {
        formData[3].setAttribute("data-error","Le champ de la date de naissance ne peut pas être vide");
        formData[3].setAttribute("data-error-visible","true");
    } else {
        formData[3].removeAttribute("data-error");
        formData[3].removeAttribute("data-error-visible");
    }
}

function onInputQuant(event) {
    if (event.target.value === "") {
        formData[4].setAttribute("data-error","Le champ des participations doit contenir un nombre");
        formData[4].setAttribute("data-error-visible","true");
    } else {
        formData[4].removeAttribute("data-error");
        formData[4].removeAttribute("data-error-visible");
    }
}

// Check the case when user submitted the form and the validation avoid the submission because of a radio not checked.
// Listen on all the radio input and if one is checked, remove the validation message
checkbox.forEach((rad) => rad.addEventListener("input", function (event){
    if (event.target.checked){
        formData[5].removeAttribute("data-error");
        formData[5].removeAttribute("data-error-visible");
    }
}))

function onInputConditions(event){
    if (!event.target.checked) {
        formData[6].setAttribute("data-error","Vous devez accepter les conditions d'utilisations");
        formData[6].setAttribute("data-error-visible","true");
    } else {
        formData[6].removeAttribute("data-error");
        formData[6].removeAttribute("data-error-visible");
    }
}




