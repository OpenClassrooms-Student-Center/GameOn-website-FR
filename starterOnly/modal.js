//Pour gérer le responive de la nav-bar
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
//le formulaire en entier
const modalbg = document.querySelector(".bground");
//les boutons "Je m'inscris"
const modalBtn = document.querySelectorAll(".modal-btn");
// éléments de classe formData
const formData = document.querySelectorAll(".formData");

// launch modal event
//Ajout des EventListener aux boutons
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
//pour lancer le formulaire
function launchModal() {
    modalbg.style.display = "block";
}