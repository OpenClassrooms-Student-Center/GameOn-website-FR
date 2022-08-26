const error = () => {
    let newError = document.createElement('small');
    newError.style.display = "block"
    newError.style.color = 'red';
    return newError;
};

const showError = (element, errorMessage) => {        
    if(element.parentElement.getElementsByTagName('small').length === 0) {
        element.parentElement.appendChild(error()).textContent = errorMessage;
    }
};