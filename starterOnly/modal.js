// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName('close');
const form = document.getElementById('form');
const inputs = Array.from(document.forms.reserve.querySelectorAll('input'));

//modal functionalities (launch, close)

// 1-- launch modal inscription form
modalBtn.forEach((btn) => btn.addEventListener('click', function(){
        modalbg.style.display = 'block';
}));

// 2-- close modal form
closeBtn[0].addEventListener('click', function(){
         modalbg.style.display = 'none';
});



// nav editing responsive 
function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}


// function that validate  user  input 'firstName' ===> return true if valid or false if invalid "
const firstNameValidation = () => {
    const firstName = document.getElementById('first');

    if  (firstName.value.trim() === '' ) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.parentElement.setAttribute("data-error", "Veuillez entrer votre prénom ");
        return false;
    }
    if (!firstName.value.match(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/)){
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.parentElement.setAttribute("data-error", "Veuillez ne pas entrer de caractères spéciaux ou nombres");
        return false;
    }
    if (firstName.value.trim().length < 2 ){
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.parentElement.setAttribute("data-error", "Veuillez entrer au moins 2 caractères pour le champ du prénom.");
        return false;
    } 
        first.parentElement.setAttribute('data-error-visible', 'false');
        return true;
}

// function that validate  user  input 'lastName' ===> return true if valid or false if invalid "
const  lastNameValidation = () => {
    const lastName = document.getElementById('last');

    if  (lastName.value.trim() === '' ) {
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.parentElement.setAttribute("data-error", "Veuillez entrer votre nom ");
        return false;
    }
    if (!lastName.value.match(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/)){
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.parentElement.setAttribute("data-error", "Veuillez ne pas entrer de caractères spéciaux ou nombres");
        return false;
    }
    if (lastName.value.trim().length < 2 ) {
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.parentElement.setAttribute("data-error", "Veuillez entrer au moins 2 caractères  pour le champ du nom.");
        return false;
    } 
        lastName.parentElement.setAttribute('data-error-visible', 'false');
        return true;
}

// function that validate  user  input 'email' ===> return true if valid or false if invalid "
const  emailValidation= () => {
    const email = document.getElementById('email');
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if  (email.value.trim() === '' ) {
        email.parentElement.setAttribute('data-error-visible', 'true');
        email.parentElement.setAttribute("data-error", "Veuillez entrer votre email");
        return false;
    }
    if (!email.value.trim().match(emailRegex)) {
        email.parentElement.setAttribute('data-error-visible', 'true');
        email.parentElement.setAttribute("data-error", "Veuillez entrer un  email valide");
        return false;
    }
        email.parentElement.setAttribute('data-error-visible', 'false');
        return true;
}

// function that validate  user  input 'email' ===> return true if valid or false if invalid "
const birthdateValidation = () => {
    const birthdate = document.getElementById('birthdate');

            //isValidBirthdate is a function that evaluate the age of user 
                const isValidBirthdate = (birthdate) => {
                    const date = new Date(birthdate);
                    if (!(date instanceof Date) || isNaN(date)) {
                    return false;
                    }
                    const now = Date.now();
                    const convertYear = 365.25 * 24 * 60 * 60 * 1000;//convert year to mille second
                    const age = Math.trunc((now - date) / convertYear);
                    return age >= 16;
                };
              
    if (birthdate.value.trim().length === 0  ){
           birthdate.parentElement.setAttribute('data-error-visible', 'true');
           birthdate.parentElement.setAttribute("data-error", "Veuillez entrer votre date de naissance");
           return false;
  }
    if (!isValidBirthdate(birthdate.value)){
           birthdate.parentElement.setAttribute('data-error-visible', 'true');
           birthdate.parentElement.setAttribute("data-error", "vous devez avoir au moins 16 ans ");
           return false;
    }
           birthdate.parentElement.setAttribute('data-error-visible', 'false');
           return true;
}


// function that validate  user  input 'quantity of participation' ===> return true if valid or false if invalid "
const quantityValidation = () => {
    const quantity = document.getElementById('quantity');

    if ((quantity.value.trim().length === 0 )|| (isNaN(quantity.value.trim() === true)) ){
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.parentElement.setAttribute("data-error", "Veuillez entrer un nombre");
        return false;
    }
    if (quantity.value.trim() < 0 || quantity.value.trim() >= 99){
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.parentElement.setAttribute("data-error", "veuillez entrer un nombre entre 0 et 99");
        return false;
    }
        quantity.parentElement.setAttribute('data-error-visible', 'false');
        return true;
}

// function that validate  user  type radio to select a 'location' ===> return true if checked or false if not checked"
 const locationsValidation = () => { 
    const allLocations = document.getElementById('allLocations'); 
    const getSelectedValue = document.querySelector( 'input[name="location"]:checked');   

    if(getSelectedValue != null) {   
           allLocations.setAttribute('data-error-visible', 'false');
           return true;
    }  
           allLocations.setAttribute('data-error-visible', 'true');
           allLocations.setAttribute("data-error", "Vous devez choisir une option."
           );
           return false;
}


// function that validate  user  checkbox 'terms and conditions' ===> return true if valid or false if invalid "
const termsValidation = () => {
    const termsAcceptBtn = document.getElementById('checkbox1');

    if (termsAcceptBtn.checked) {
        termsAcceptBtn.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    }
        termsAcceptBtn.parentElement.setAttribute('data-error-visible', 'true');
        termsAcceptBtn.parentElement.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
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
        displayModalSubmit();//function to display  submitted modal
        form.reset();//reset the form 
    } else {
        // excute functions that check the validation of input fields
        firstNameValidation() 
        lastNameValidation() 
        emailValidation() 
        birthdateValidation() 
        quantityValidation()
        locationsValidation() 
        termsValidation();
    }
});