const error = () => {
    let newError = document.createElement('small');
    newError.classList.add('error');
    return newError;
};

const showError = (element, errorMessage) => {    
    if(element.parentElement.getElementsByClassName('error').length == 0) {
        element.parentElement.appendChild(error()).textContent = errorMessage;
    }
};

const clearError = (element) => {   
    if(element.parentElement.getElementsByClassName('error').length > 0) {
        element.parentElement.querySelector('.error').remove();
    }

    // let errorElement = element.parentElement;
    // console.log(errorElement);
    // console.log(errorElement?.classList.contains('error'));

    // if(errorElement?.classList.contains('error')) {
    //     element.parentElement.removeChild(errorElement);            
    // }
};