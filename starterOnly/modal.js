function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// DOM Elements
const closeBtn = document.querySelector(".close");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.querySelector(".form");
const submitButton = document.querySelector(".btn-submit");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailAddressInput = document.getElementById("email");
const birthDateInput = document.getElementById("birthdate");
const locationCheckbox = document.querySelectorAll("input[name=location]");
const checkCondition = document.getElementById("checkbox1");

const closeModal = function(){
  modalbg.style.display="none";
};
function launchModal() {
  modalbg.style.display = "block";
}
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal)


const nameValidation = function(){
if(firstNameInput.value.length<2){
  errorFirstName.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
}else{
  errorFirstName.innerHTML = "";
  return true;
}
if(lastNameInput.value.length<2){
  errorLastName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom de famille";
}else{
  errorLastName.innerHTML = "";
  return true;
}
}

const emailValidation = function(){
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(emailAddressInput.value.match(mailFormat)){
    errorEmailAddress.innerHTML="";
    return true;
  }
  else{
    errorEmailAddress.innerHTML = "Veuillez fournir une adresse email valide";
  }
}

const birthdayValidation = function(){
  let dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
  if(birthDateInput.value !="" && !birthDateInput.value.match(dateFormat)){   
    errorBirthDate.innerHTML="";
    return true;
  }
  else{
    errorBirthDate.innerHTML = "Vous devez entrer votre date de naissance.";
  }
}

const locationChecked = function(){
  for(let i=0;i<locationCheckbox.length;i++){
    if(locationCheckbox[i].checked){ 
      ErrorOption.innerHTML="";
      return true;
    }else{
      ErrorOption.innerHTML="Vous devez choisir une ville."
}
  }
}

const termsChecked = function(){
   if(checkCondition.checked){
     ErrorCondition.innerHTML="";
     return true;
   }else{
     ErrorCondition.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions."
   }
 }
 

const onSubmit = function(){
  nameValidation()
  emailValidation()
  birthdayValidation()
  locationChecked()
  termsChecked()
}



 


 /*
birthday: 
regular expression to match required date format: regular = /^\d{1,2}\/\d{1,2}\/\d{4}$/  or /^\d{2}\/\d{2}\/\d{4}$/;
email address: 
regular expression to match required email address format: regular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
*/