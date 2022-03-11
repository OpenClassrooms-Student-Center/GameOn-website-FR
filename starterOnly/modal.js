// all unitary validaiton functions print or clear error message and return 0 if OK or 1 in, case of error
// numeric value used to have addition => form is valid if sum of validation function == 0

function firstnameValidation() {
    const errorMessageElement = document.querySelector(".--firstname");
    const element = document.getElementById("firstname");

    if (element.value.length < 2) {
        errorMessageElement.textContent = "Entrez au moins 2 caractères pour votre prénom";
    element.classList.add("--erroneous");
    return 1; // error found
  }
  errorMessageElement.textContent = "";
    element.classList.remove("--erroneous");
    return 0; // no error
}

function nameValidation() {
  let errorMessageElement = document.querySelector(".--name");
  let element = document.getElementById('name');
  
  if (element.value.length < 2 ) {
      errorMessageElement.textContent = "Entrez au moins 2 caractères pour votre nom";
      element.classList.add("--erroneous");
      return 1;
    }
    errorMessageElement.textContent = "";
    element.classList.remove("--erroneous");
    return 0;
}

function eMailValidation() {
  let errorMessageElement = document.querySelector(".--email");
  let element = document.getElementById('email');
  const eMailTemplate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if (!eMailTemplate.test(element.value)){
    errorMessageElement.textContent = "Entrez un email valide";
    element.classList.add("--erroneous");
    return 1;
  }
    errorMessageElement.textContent = "";
    element.classList.remove("--erroneous");
    return 0;
}



// check not only regex aceepting  only "/"" as separator, but as well nb of day per month
// be careful the date format of input type = date is YYYY-MM-DD

function isDateValid(date) {
  const dateTemplate = /(\d{4})[- \/](\d{1,2})[- \/](\d{1,2})/;
  const nbDayPerMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  let splitDate = date.match(dateTemplate);
  if (!splitDate) {
    return false;
  }
  let year = parseInt(splitDate[1], 10);
  let month = parseInt(splitDate[2], 10);
  let day = parseInt(splitDate[3], 10);
  if (month == 0 || month > 12) {
    return false;
  }
  if(day == 0 || day > nbDayPerMonth[month]) {
    return false;
  }
  // leap year (année bissextile) if year is multiple of 4, but not mutiple of 100 except if multiple of 400
  if ((month ==2 && day == 29) && ! (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))) {
    return false;
  }
  return true;
}
  
function dateOfBirthValidation() {
  let errorMessageElement = document.querySelector(".--date-of-birth");
  let element = document.getElementById('date-of-birth');
  if (!isDateValid(element.value)) {
    errorMessageElement.textContent = "Entrez une date valide";
    element.classList.add("--erroneous");
    return 1;
  }
  errorMessageElement.textContent = "";
  element.classList.remove("--erroneous");
  return 0;
}

function playedTournamentNumberValidation() {
  let errorMessageElement = document.querySelector(".--played-tournament-number");
  let element = document.getElementById('played-tournament-number');
  if (element.value === "") {
      errorMessageElement.textContent = "Entrez un nombre valide";
      element.classList.add("--erroneous");
      return 1;
    }
    else if (element.value <0 || element.value > 20) {
      errorMessageElement.textContent = "Entrez un nombre entre 0 et 20";
      element.classList.add("--erroneous");
      return 1;
    }
    errorMessageElement.textContent = "";
    element.classList.remove("--erroneous");
    return 0;
}

function locationValidation() {
  let errorMessageElement = document.querySelector(".--input-location");
  let locationButtonTable = document.getElementsByClassName('subscription_form_input-radio');
  for (var i = 0; i < locationButtonTable.length; i++) {
    if (locationButtonTable[i].checked) {
      errorMessageElement.textContent = "";
      return 0;
    }
  }
  errorMessageElement.textContent = "Veillez sélectionner une des villes";
      return 1;
}

function termOfUseValidation() {
  let errorMessageElement = document.querySelector(".--terms-of-use");
  let element = document.getElementById('terms-of-use');
  
  if (!element.checked) {
      errorMessageElement.textContent = "Veuillez lire et accepter les conditions d'utilisation";
      return 1;
    }
    errorMessageElement.textContent = "";
    return 0;
}

function subscriptionFormValidation(event) {
  event.preventDefault();
  let errorNumber=firstnameValidation() +
                  nameValidation() +
                  eMailValidation() +
                  dateOfBirthValidation()+
                  playedTournamentNumberValidation()+
                  locationValidation()+
                  termOfUseValidation();
  if (errorNumber == 0) {
    let modalSubscription = document.querySelector(".modal_subscription");
    modalSubscription.style.display ='none'; 
    let modalConfirmation = document.querySelector(".modal_confirmation");
    modalConfirmation.style.display ='block';  
  }
      
}

function modalQuit(event){
  let modalSubscription = document.querySelector(".modal_subscription");
    modalSubscription.style.display ='block';
  let modalConfirmation = document.querySelector(".modal_confirmation");
    modalConfirmation.style.display ='none';  
  let lightbox = document.querySelector(".lightbox");
    lightbox.style.visibility = 'hidden';
    lightbox.style.opacity = '0';
}

function subscriptionLaunch(event) {
  let lightbox = document.querySelector(".lightbox");
  lightbox.style.visibility = 'visible';
  lightbox.style.opacity = '1';
}
// identification of element on which events are listen 
const subcriptionLaunchButton = document.querySelector(".subscription-launch-button");
const subscriptionFormSubmit = document.querySelector("#subscription-form");
const modalHeaderModalQuitIcon = document.querySelector(".modal_header_modal-quit-icon");
const modalConfirmationCloseButton = document.querySelector(".modal_confirmation_close_button");

// Events to be listened
subcriptionLaunchButton.addEventListener('click', subscriptionLaunch);
subscriptionFormSubmit.addEventListener('submit', subscriptionFormValidation);
modalHeaderModalQuitIcon.addEventListener('click', modalQuit);
modalConfirmationCloseButton.addEventListener('click', modalQuit);



