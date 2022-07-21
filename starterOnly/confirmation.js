// DOM ELEMENTS SUBMITTED CONFIRMATION
const modalSubmit = document.getElementsByClassName('container-confirmation-submit');
const closeModalSubmit = document.getElementsByClassName('close-modal-submit');
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');

// SUBMITTED CONFIRMATION
function displayModalSubmit() {
    modalbg.style.display = 'none';
    modalSubmit[0].style.display ='block';

}

// CLOSE SUBMIT
function closeSubmit() {
    modalSubmit[0].style.display = 'none';
    first.style.border = 'none';
    last.style.border = 'none';
    email.style.border = 'none';
    birthdate.style.border = 'none';
    quantity.style.border = 'none';
}

// EVENT CLOSE MODAL SUBMIT
closeModalSubmit[0].addEventListener('click', closeSubmit);
closeBtnConfirmation.addEventListener('click',closeSubmit);