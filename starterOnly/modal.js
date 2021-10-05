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

erreur_prenom.style.display = "none";
erreur_nom.style.display = "none";

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
    if (length < 2) {
        console.log("invalide");
        erreur_prenom.style.display = "initial";
        erreur_prenom.style.color = "red";
        erreur_prenom.style.fontSize = "12px";
    } else {
        console.log("valide");
        erreur_prenom.style.display = "none";
    }
}

async function checkLastName() {
    const lastName = document.getElementById('last').value;
    const length = document.getElementById('last').value.length;
    const erreur_nom = document.querySelector(".erreur_nom");
    if (length < 2) {
        console.log("invalide");
        erreur_nom.style.display = "initial";
        erreur_nom.style.color = "red";
        erreur_nom.style.fontSize = "12px";
    } else {
        console.log("valide");
        erreur_nom.style.display = "none";
    }
}

async function checkEmail() {
    const email = document.getElementById('email').value;
    const length = document.getElementById('last').value.length;
    for (let i = 0; i < length; i++) {
        if (email[i] !== '@') {
            console.log("email invalide");
        } else {
            console.log("email valide");
        }
    }
}