function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.getElementById("submitBtn");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

var validation = "";
// form constiables

const form  = document.getElementById("reserve");

// input constiables
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radioContainer = document.getElementById("radio");
const locationName = document.getElementsByName("location");
const conditionsAgreement = document.getElementById("checkbox1");
const eventsInfo = document.getElementById("checkbox2");
const submitForm = document.getElementById("submitBtn");

// const d = new Date(); // now
// const birthdateMax = d.getFullYear() + "-" + (d.getMonth()+1).toLocaleString('fr-FR', {minimumIntegerDigits: 2,useGrouping: false}) + "-" + d.getDate().toLocaleString('fr-FR', {minimumIntegerDigits: 2,useGrouping: false});  // formating today date 
// // set max date for Birthdays
// birthdate.addEventListener('focus', function(){
//     birthdate.setAttribute("max",birthdateMax);
// });

const errorAlert = document.getElementById("alert");
const alertBase = errorAlert.innerHTML;

// error messages

const firstNameMsg1 = "Vous devez entrer votre prénom.";
const firstNameMsg2 = "Le prénom doit comporter au minimum 2 caractères et uniquement des lettres";

const lastNameMsg1 = "vous devez entrer votre nom";
const lastNameMsg2 = "Le nom doit comporter au minimum 2 caractères et uniquement des lettres";

const emailMsg1 = "Vous devez entrer votre email."; // field not required for the moment
const emailMsg2 = "L'email n'est pas valide";

const birthdateMsg1 = "Vous devez entrer votre date de naissance."; // field not required for the moment
const birthdateMsg2 = "La date de naissance n'est pas valide.";

const quantityMsg1 = "Vous devez enter un nombre."; // field not required for the moment
const quantityMsg2 = "le nombre doit être compris entre 0 et 99";

const locationMsg = "vous devez selectionner un tournoi";

// input validity test
function inputValidation (e, msg1, msg2){
    if(e.value == ""){
        if(e.required == true){
            e.parentElement.setAttribute("data-error-visible","true");
            e.parentElement.setAttribute("data-error",msg1);
           validation = false;
        }
        else{
            e.parentElement.removeAttribute("data-error-visible");
            e.parentElement.removeAttribute("data-error");
        }
    }
    else if(e.validity.valid !== true){
        e.parentElement.setAttribute("data-error-visible","true");
        e.parentElement.setAttribute("data-error",msg2);
        validation = false;
    }
    else{
        e.parentElement.removeAttribute("data-error-visible");
        e.parentElement.removeAttribute("data-error");
    }
};

// first name validation on change
firstName.addEventListener('change', function(){
    inputValidation(firstName, firstNameMsg1, firstNameMsg2);
});

// last name validation on change
lastName.addEventListener('change', function(){
    inputValidation(lastName, lastNameMsg1, lastNameMsg2);
});

// email validation on change
email.addEventListener('change', function(){
    inputValidation(email, emailMsg1, emailMsg2);
});

// birthdate validation on change
birthdate.addEventListener('change', function(){
    inputValidation(birthdate, birthdateMsg1, birthdateMsg2);
});

// number name validation on change
quantity.addEventListener('change', function(){
    if(this.value == ""){ // reset input value if return null (ex. "-2+" or "+2" or "2+" ...)
        this.value = ""
    }
    inputValidation(quantity, quantityMsg1, quantityMsg2);
});

// location name validation
function radioChecked (){
    let radio = "";
    for (let i = 0, length = locationName.length; i < length; i++) {
        if (locationName[i].checked) {
          // set radio states to checked
          radio = "checked";
        }
      }
    if(radio !== "checked"){
        radioContainer.setAttribute("data-error-visible","true");
        radioContainer.setAttribute("data-error","vous devez selectionner un tournoi");
        validation = false;
    }
    else{
        radioContainer.removeAttribute("data-error-visible");
        radioContainer.removeAttribute("data-error");
    }
};

// form validation
function validate(e){

    validation = true;
    
    // check fields
    radioChecked();
    inputValidation(firstName, firstNameMsg1, firstNameMsg2);
    inputValidation(lastName, lastNameMsg1, lastNameMsg2);
    inputValidation(email, emailMsg1, emailMsg2);
    inputValidation(birthdate, birthdateMsg1, birthdateMsg2);
    inputValidation(quantity, quantityMsg1, quantityMsg2); 

    // errors control
    if(validation == false){
        errorAlert.innerHTML = "tous les champs doivent être valides";
        errorAlert.classList.add("alert-show");
        return false;
    }
    else{
        // form submit
        form.style.display= "none";
        document.getElementById("confirmation").style.display = "flex";
        e.preventDefault();
        console.log(form);
    }
  };

// suppress & reset error alert
form.addEventListener('click', function(){
    errorAlert.classList.remove("alert-show");
    errorAlert.innerHTML = alertBase;
});

submitBtn.addEventListener('click', validate);







