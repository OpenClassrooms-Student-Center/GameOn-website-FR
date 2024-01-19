// Afficher message d'erreur
export const setErrorMessage = (element, message) => {
    element.parentElement.setAttribute('data-error-visible', 'true');
    element.parentElement.setAttribute('data-error', message);
};

// Cacher message d'erreur
export const hideErrorMessage = element => {
    element.parentElement.removeAttribute('data-error-visible');
    element.parentElement.removeAttribute('data-error');
};

// Fonction générique pour checker un input
export function checkInputValue(regex, element, message) {
    if (!regex.test(element.value)) {
        setErrorMessage(element, message);
        return false;
    } 
    hideErrorMessage(element);
    return true; 
};

// Je regarde si les conditions d'utilisation sont checked
export function checkIfConditionsAccepted(element, message) {
    if(!element.checked) {
        setErrorMessage(element, message);
        return false;
    } 
    hideErrorMessage(element);
    return true;  
};

// Je vérifie que l'un des btn radio soit checked
export function checkIfCitySelected(cities, message) {
    const isChecked = Array.from(cities).some(radio => radio.checked);
    if (!isChecked) {
        setErrorMessage(cities[0], message);
        return false;
    };
    hideErrorMessage(cities[0]);
    return true;
};

// Je vérifie si l'user est majeur
export function checkIfUserIsYoungerThan18(element, message) {
    const birthdate = new Date(element.value);
    let difference = Date.now() - birthdate.getTime();
    difference = new Date(difference);
    const userAge = difference.getFullYear() - 1970;

    const currentYear = new Date().getFullYear();
    const birthYear = birthdate.getFullYear();
    
    if (birthYear < currentYear - 100 || birthYear.toString().length !== 4 || userAge < 18) {
        setErrorMessage(element, message);
        return false;
    } 
    hideErrorMessage(element);
    return true;
};