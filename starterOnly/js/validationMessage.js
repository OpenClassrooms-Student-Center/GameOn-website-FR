const showValidationMessage = () => {

    disableCheckboxTransition();

    const validationMessage = document.createElement('div');
    validationMessage.classList.add('validation-message');
    validationMessage.innerHTML = "Merci pour votre inscription";
    document.querySelector('form').style.visibility = 'hidden';
    document.querySelector('.modal-body').appendChild(validationMessage);
};

const disableCheckboxTransition = () => {
    document.querySelectorAll('span.checkbox-icon')
            .forEach((element) => element.style.transitionDuration = "0s");
};

const showCloseButton = () => {
    const closeValidationButton = document.createElement('button');
    closeValidationButton.textContent = "Fermer";
    closeValidationButton.classList.add('btn-submit');
    closeValidationButton.addEventListener("click", () => modalbg.style.display = "none");
    document.querySelector('.modal-body').appendChild(closeValidationButton);
};