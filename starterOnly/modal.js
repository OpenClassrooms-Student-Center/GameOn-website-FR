function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeX = document.querySelectorAll(".close");
const formDisplay = document.getElementById("validation_clear");
const validationText= document.getElementById("validation_text");
const validationButton= document.getElementById("validation--button");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const condition = document.getElementById("checkbox1");
const locationInput = document.getElementsByName("location");
const loc1 = document.getElementById ('location1');
const loc2 = document.getElementById ('location2');
const loc3 = document.getElementById ('location3');
const loc4 = document.getElementById ('location4');
const loc5 = document.getElementById ('location5');
const loc6 = document.getElementById ('location6');
const inputs = document.getElementsByTagName("input");
const form = document.getElementsByClassName("formData");

//Variables need to be true for modal validation
let FirstNameValid,LastNameValid, emailValid, birthdateValid, quantityValid,conditionValid = true, locationValid;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form 
function launchModal() {
  modalbg.style.display = "block"; 
}

// close modal event 
closeX.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form + validation message
function closeModal() {
  modalbg.style.display = "none";
  formDisplay.style.display = "block";
  validationText.style.display= "none";
  validationButton.style.display= "none";
}
  
// Close Validation message Button
validationButton.addEventListener("click", closeModal);

// Close modal and open validation message and clear modal fields
function validate(){
  formDisplay.style.display = "none";
  validationText.style.display= "block";
  validationButton.style.display= "block";
  if (inputs.length >0) {
    for (var i=0; i < inputs.length -1; i++){
    inputs[i].value = "";
    inputs[i].checked = false;
    }
  }
  if (form.length >0) {
    for (var h=0; h < form.length; h++) {
      form[h].setAttribute("data-error-visible", undefined)
    } 
  }
}

// Error messages function
function noError(e) {
  e.parentNode.setAttribute("data-error-visible", false);
  e.setCustomValidity("");
}

function error(e,texte,custom) {
  e.parentNode.setAttribute("data-error-visible", true);
  e.parentNode.setAttribute("data-error", texte);
  e.setCustomValidity(custom)
}


//Function wich check if the input is correct
function fieldValidation(e) {
  if (e.type === "text"){
        if (e.value.length <2) {
          error (e,"Nom trop court !","Votre nom doit contenir au moins 2 caractères")
        }else if (!e.value.match(/^[A-Za-z\é\è\ê\-]+$/)){ 
          error (e,"Pas de caractères spéciaux!","Votre nom ne doit pas contenir de caractères spéciaux")
        } else  {
          noError(e);
          FirstNameValid=true;
          LastNameValid=true;
        }
  } else if (e.type === "email") {
        if (e.value.match(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i)) {
          emailValid=true;
          noError(e);
        } else {
          emailValid=false;
          error(e,"Email non valide !","'"+emailInput.value+ "' n'est pas une adresse mail valide");
        }
  } else if (e.type ==="date") {
        if (e.value.match (/^[0-9]/)) {
          birthdateValid=true;
          noError(e);
        } else {
          birthdateValid=false;
          error(e,"Date anniversaire non correcte !","Veuillez entrer votre date de naissance");
        }
  } else if (e.type ==="number") {
        if (!e.value.match (/^[0-9]/) || e.value > 99) {
          error (e,"Erreur sur la quantité !","Veuillez entrer le nombre de participation à des tournois GameOn");
          quantityValid=false;
        } else {
          quantityValid=true;
          noError(e);
        }

  } else if (e.type ==="radio") {
    for (i=0;  locationInput[i].checked ==true; i++){
    locationValid= true;
          noError(e);
          console.log("ok");}
        /*if (loc1.checked || loc2.checked || loc3.checked || loc4.checked || loc5.checked || loc6.checked) {
          locationValid= true;
          noError(e)
        } else {
          locationValid= false;
          e.setCustomValidity("Veuillez choisir une ville");
        }*/
  } else if (e.type === "checkbox"){
          if (e.checked){
            noError(e);
            conditionValid=true;
        } else {
            conditionValid=false;
            error(e,"CGU non coché !","Veuillez lire et accepter les conditions d'utilisation")
        }
  }
}

// Checks every input
for (var i=0; i < inputs.length; i++){
    inputs[i].addEventListener("input",  function (){
      fieldValidation(this);
     })}

// Check if all the fields are correctly entered (==true) If it is, it launch the validation message
const isValidAllFieldValid = FirstNameValid == true && LastNameValid == true && emailValid == true && birthdateValid == true && quantityValid == true && conditionValid == true && locationValid==true
document.forms["reserve"].addEventListener("submit", function(e) {
  e.preventDefault();
  if (FirstNameValid == true && LastNameValid == true && emailValid == true && birthdateValid == true && quantityValid == true && conditionValid == true && locationValid==true) {
    validate(); 
  } 
});




