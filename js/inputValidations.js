// grap elements 
const form = document.getElementById('form');
const inputs = Array.from(document.forms.reserve.querySelectorAll('input'));
// an object to keep the  values of input as key:value
const inputValues = {};

// function that validate  user  input 'firstName' ===> return true if valid or false if invalid "
const firstNameValidation = () => {
    const firstName = document.getElementById('first');
    
    if  (firstName.value.trim() === '' ) {
        setError(firstName, true);
        setErrorMessage(firstName, errorMessages.firstName.error1);
        return false;
    }
    if (!firstName.value.match(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/)){
        setError(firstName, true);
        setErrorMessage(firstName, errorMessages.firstName.error2);
        return false;
    }
    if (firstName.value.trim().length < 2 ){
        setError(firstName, true);
        setErrorMessage(firstName, errorMessages.firstName.error3);
        return false;
    }
        setError(firstName, false);
        removeError(firstName);
        inputValues['firstName']= firstName.value;
        return true;
}

// function that validate  user  input 'lastName' ===> return true if valid or false if invalid "
const  lastNameValidation = () => {
    const lastName = document.getElementById('last');
   
    if  (lastName.value.trim() === '' ) {
        setError(lastName, true);
        setErrorMessage(lastName, errorMessages.lastName.error1);
        return false;
    }
    if (!lastName.value.match(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/)){
        setError(lastName, true);
        setErrorMessage(lastName, errorMessages.lastName.error2);
        return false;
    }
    if (lastName.value.trim().length < 2 ) {
        setError(lastName, true);
        setErrorMessage(lastName, errorMessages.lastName.error3);
        return false;
    }
        setError(lastName, false);
        removeError(lastName);
        inputValues['lastName']= lastName.value;
        return true;
}

// function that validate  user  input 'email' ===> return true if valid or false if invalid "
const  emailValidation= () => {
    const email = document.getElementById('email');
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if  (email.value.trim() === '' ) {
        setError(email, true);
        setErrorMessage(email, errorMessages.email.error1);
        return false;
    }
    if (!email.value.trim().match(emailRegex)) {
        setError(email, true);
        setErrorMessage(email, errorMessages.email.error2);
        return false;
    }
        setError(email, false);
        removeError(email);
        inputValues['email']= email.value;
        return true;
}

// function that validate  user  input 'email' ===> return true if valid or false if invalid "
const birthdateValidation = () => {
    const birthdate = document.getElementById('birthdate');

   if (birthdate.value.trim().length === 0  ){
       setError(birthdate, true);
       setErrorMessage(birthdate, errorMessages.birthdate.error1);
       return false;
 }
   if (!isValidBirthdate(birthdate.value)){
       setError(birthdate, true);
       setErrorMessage(birthdate, errorMessages.birthdate.error2);
       return false;
   }
       setError(birthdate, false);
       removeError(birthdate);
       inputValues['birthdate']= birthdate.value;
       return true;
}

// function that validate  user  input 'quantity of participation' ===> return true if valid or false if invalid "
const quantityValidation = () => {
    const quantity = document.getElementById('quantity');

   if ((quantity.value.trim().length === 0 )|| (isNaN(quantity.value.trim() === true)) ){
       setError(quantity, true);
       setErrorMessage(quantity, errorMessages.quantity.error1);
       return false;
   }
   if (quantity.value.trim() < 0 || quantity.value.trim() >= 99){
       setError(quantity, true);
       setErrorMessage(quantity, errorMessages.quantity.error2);
       return false;
   }
       setError(quantity, false);
       removeError(quantity);
       inputValues['quantity']= quantity.value;
       return true;
}

// function that validate  user  type radio to select a 'location' ===> return true if checked or false if not checked"
const locationsValidation = () => {
    const allLocations = document.getElementById('allLocations');
    const getSelectedValue = document.querySelector( 'input[name="location"]:checked');
   
   if(getSelectedValue != null) {
       setError(allLocations, false);
       removeError(allLocations);
       inputValues['getSelectedValue']= getSelectedValue.value;
       return true;
   }
       setError(allLocations, true);
       setErrorMessage(allLocations, errorMessages.allLocations);
       return false;
}


// function that validate  user  checkbox 'terms and conditions' ===> return true if valid or false if invalid "
const termsValidation = () => {
    const termsAcceptBtn = document.getElementById('checkbox1');

   if (termsAcceptBtn.checked) {
       setError(termsAcceptBtn, false);
       removeError(termsAcceptBtn);
       inputValues['termsAcceptBtn']= termsAcceptBtn.value;
       return true;
   }
       setError(termsAcceptBtn, true);
       setErrorMessage(termsAcceptBtn, errorMessages.termsAcceptBtn);
       return false;
}

// track the events of input fields when the user clicks on them 
inputs.forEach((field) => {
    field.addEventListener("input", (e) => {
      switch (e.target.id) {
              case "first":
              firstNameValidation();
              break;
              case "last":
              lastNameValidation();
              break;
              case "email":
              emailValidation();
              break;
              case "birthdate":
              birthdateValidation();
              break;
              case "quantity":
              quantityValidation();
              break;
              default:
                  null;
  }
      });
      allLocations.addEventListener('change',locationsValidation);
      checkbox1.addEventListener('change',termsValidation);
  });
 

 // function to ensure that all fields  of input are "valid" in order to submit the form 
const formValidation= () => (firstNameValidation() && lastNameValidation() && emailValidation() && birthdateValidation()
                            && quantityValidation() &&  locationsValidation()  && termsValidation ()) 
                            ? true : false;


// submit form valid 
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (formValidation()) {
        console.log(inputValues);
        displayModalSubmit();//function to display  submitted modal
        form.reset();//reset the form 
    } else {
        //invalid input error message
        console.error("Le formulaire n'est pas valide. Veuillez vérifier les données saisies.");
        // excute functions that check the validation of input fields
        executeValidationFun();
    }
});