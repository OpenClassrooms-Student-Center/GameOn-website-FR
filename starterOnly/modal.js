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
const erreur_prenom = document.querySelector(".erreur_prenom");
const erreur_nom = document.querySelector(".erreur_nom");
const erreur_email = document.querySelector(".erreur_email");
const date = document.getElementById('birthdate');
const erreur_date = document.querySelector('.erreur_date');


erreur_prenom.style.display = "none";
erreur_nom.style.display = "none";
erreur_email.style.display = "none";

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

async function checkFirstName() {
    const firstName = document.getElementById('first').value;
    const length = document.getElementById('first').value.length;
    const erreur_prenom = document.querySelector(".erreur_prenom");
    if (length !== 0) {
        if (length < 2) {
            console.log("invalide");
            erreur_prenom.style.display = "initial";
            erreur_prenom.style.color = "red";
            erreur_prenom.style.fontSize = "12px";
        } else {
            console.log("valide");
            erreur_prenom.style.display = "none";
        }
    } else {
        erreur_prenom.style.display = "none";
    }
}

async function checkLastName() {
    const lastName = document.getElementById('last').value;
    const length = document.getElementById('last').value.length;
    const erreur_nom = document.querySelector(".erreur_nom");
    if (length !== 0) {
        if (length < 2) {
            console.log("invalide");
            erreur_nom.style.display = "initial";
            erreur_nom.style.color = "red";
            erreur_nom.style.fontSize = "12px";
        } else {
            console.log("valide");
            erreur_nom.style.display = "none";
        }
    } else {
        erreur_nom.style.display = "none";
    }
}

async function checkEmail() {
    const email = document.getElementById('email').value;
    const length = document.getElementById('email').value.length;
    var regex = /[@]/g;
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