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
//////////////////////////////
/////Fenêtre remerciement...
// Contenant de la Fenêtre de remerciements
const thankBg = document.querySelector(".bground-thanks");
//Le bouton submit
const thankBtn = document.querySelector(".btn-thank");
//Ajout du eventListener au bouton "c'est parti"
thankBtn.addEventListener('click', launchThanks);

// Ouverture de le Fenêtre de remerciements
function launchThanks() {
    thankBg.style.display = "block";
}