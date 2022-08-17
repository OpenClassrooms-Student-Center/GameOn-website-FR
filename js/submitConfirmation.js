const popupSubmit = document.getElementsByClassName('container-popup-confirmation');
const closePopupSubmit = document.getElementsByClassName('close-popup');
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');

// Display popup on submit
function displayPopupSubmit() {
    // Hiding the modal
    modalbg.style.display = 'none';
    // Display the success popup
    popupSubmit[0].style.display = 'block';
}

// Close popup
function closeSubmit() {
    popupSubmit[0].style.display = 'none';
    first.style.border = 'none';
    last.style.border = 'none';
    email.style.border = 'none';
    birthdate.style.border = 'none';
    quantity.style.border = 'none';
}

// Buttons to close the popup
closePopupSubmit[0].addEventListener('click', closeSubmit);
closeBtnConfirmation.addEventListener('click', closeSubmit);