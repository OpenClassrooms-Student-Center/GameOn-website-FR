const showValidationMessage = () => {
    const validationMessage = document.createElement('div');
    validationMessage.style.position = 'absolute';
    validationMessage.style.top = '50%';
    validationMessage.innerHTML = "Merci ! Votre réservation a été reçue.";
    document.querySelector('form').style.visibility = 'hidden';
    document.querySelector('.modal-body').appendChild(validationMessage);
};


const showCloseButton = () => {
    const closeValidationButton = document.createElement('button');
    closeValidationButton.textContent = "Fermer";
    closeValidationButton.classList.add('btn-submit');
    closeValidationButton.addEventListener("click", () => modalbg.style.display = "none");
    document.querySelector('.modal-body').appendChild(closeValidationButton);
};