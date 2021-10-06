function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById('form');


const date = document.getElementById('birthdate');




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

function closeForm() {
    form.style.display = "none";
    console.log('fermé')
}

function checkFirstAndLastName(input) {
    const regex = /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/;
    const input_value = input.value;
    const test = regex.test(input_value);
    if (test) {
        input.parentElement.setAttribute('valid', true);
        input.parentElement.removeAttribute('data-error');
        input.parentElement.removeAttribute('data-error-visible');
    } else {
        input.parentElement.removeAttribute('valid');
        input.parentElement.setAttribute('data-error', 'erreur');
        input.parentElement.setAttribute('data-error-visible', true);
    }
}



async function checkEmail() {
    const email = document.getElementById('email').value;
    const length = document.getElementById('email').value.length;
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(email.search(regex));
    if (length !== 0) {
        if (email.search(regex) == -1) {
            erreur_email.style.display = "initial";
            erreur_email.style.color = "red";
            erreur_email.style.fontSize = "12px";
        } else {
            erreur_email.style.display = "none";
        }
    } else {
        erreur_email.style.display = "none";
    }
}

async function checkBirthdate() {
    const date = document.getElementById('birthdate');
    console.log("date : " + date.value);
    if (date.value == '' || date.value == null || date.value == undefined) {
        erreur_date.style.display = "initial";
        erreur_date.style.color = "red";
        erreur_date.style.fontSize = "12px";
    } else {
        erreur_date.style.display = "none";
    }
}