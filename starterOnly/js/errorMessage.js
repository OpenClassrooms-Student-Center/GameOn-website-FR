const error = () => {
    let newError = document.createElement('small');
    newError.style.display = "block"
    newError.style.color = 'red';
    newError.style.fontSize = '14px';
    return newError;
};

const showError = (element, errorMessage) => {        
    if(element.parentElement.getElementsByTagName('small').length === 0) {
        element.parentElement.insertBefore(error(), element.nextSibling).textContent = errorMessage;
    }
};

const clearError = (element) => {       
    try {
        element.parentElement.removeChild(element.nextSibling);
    } catch (error) {
        console.error(error);
    } 
};