// Déclaration des variables 
// DOM ELEMENTS SUBMITTED CONFIRMATION

const modalbg = document.querySelector(".bground");
const modalSubmit = document.getElementsByClassName('container-confirmation-submit');

// SUBMITTED CONFIRMATION
function displayModalSubmit() {
    modalbg.style.display = 'none';
    modalSubmit[0].style.display ='block';

}

// Déclaration des variables (éléments du formulaire)

const modalSubmit1 = document.getElementsByClassName('container-confirmation-submit');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');

// fonction qui change l'affichage des élélents du formulaire (css)
// CLOSE SUBMIT
function closeSubmit() {
    modalSubmit1[0].style.display = 'none';
    first.style.border = 'none';
    last.style.border = 'none';
    email.style.border = 'none';
    birthdate.style.border = 'none';
    quantity.style.border = 'none';
}


// Déclaration des variables 
const closeModalSubmit = document.getElementsByClassName('close-modal-submit');
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');

// EVENT CLOSE MODAL SUBMIT
closeModalSubmit[0].addEventListener('click', closeSubmit);
closeBtnConfirmation.addEventListener('click',closeSubmit);