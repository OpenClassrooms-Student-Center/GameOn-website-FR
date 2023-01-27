// an object of error messages depends on the value entered by the user
const errorMessages = {
    firstName:{
        error1:'Veuillez entrer votre prénom',
        error2:'"Veuillez ne pas entrer de caractères spéciaux ou de nombres"',
        error3:'Veuillez entrer au moins 2 caractères '
    } ,
   lastName:{
        error1:'Veuillez entrer votre nom',
        error2:'"Veuillez ne pas entrer de caractères spéciaux ou de nombres"',
        error3:'Veuillez entrer au moins 2 caractères '
    },
    email:{
        error1:'Veuillez entrer votre email',
        error2:'Veuillez entrer un  email valide',
    },
    birthdate: {
        error1:'Veuillez entrer votre date de naissance',
        error2: 'vous devez avoir entre 16 et 65 ans',
    },
    quantity: {
        error1:'Veuillez entrer un nombre',
        error2:'veuillez entrer un nombre entre 0 et 99',
    },
    allLocations: 'veuillez choisir une option',
    termsAcceptBtn:'veuillez accepter les terms et condition',
}

// a function  that add an attribute data-error with a specified message-error to an element 
const setErrorMessage = (element, message) => {
    if (element === allLocations) {
        element.setAttribute('data-error', message);
    }   
        element.parentElement.setAttribute('data-error', message);
}

// a function that makes the attribute data-error visible or  non-visible
//depends on validation rules 
const setError = (element, etatError) => { 
    if (element === allLocations) {
        element.setAttribute('data-error-visible', etatError);
    }
        element.parentElement.setAttribute('data-error-visible', etatError);
}


// a function that removes the attribute from an element
const removeError = (element) => {
    if (element === allLocations) {
        element.removeAttribute('data-error');
    }
        element.parentElement.removeAttribute('data-error') ; 
}


