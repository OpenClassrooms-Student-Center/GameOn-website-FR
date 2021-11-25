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
const quantityInput = document.getElementById("quantity");
const locationCheckbox = document.querySelectorAll("input[name=location]");
const checkCondition = document.getElementById("checkbox1");
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
let i=0;


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
  
}
if(lastNameInput.value.length<2){
  errorLastName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom de famille";
}else{
  errorLastName.innerHTML = "";
  
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
  for(i=0;i<locationCheckbox.length;i++){
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

 const validation = function () {
  firstNameInput.value;
  lastNameInput.value;
  emailAddressInput.value;
  birthDateInput.value;
  quantityInput.value;
  locationCheckbox.value;
  checkCondition.value;
  
  if(firstNameInput.value.length>=2 
    && lastNameInput.value.length >=2 
    && emailAddressInput.value.match(mailFormat) 
    && birthDateInput.value !="" 
    && !birthDateInput.value.match(dateFormat) 
    && checkCondition.checked === true
    && checkCondition.checked === true){
    console.log("Sending test")
    alert("Informations envoyées avec succès！")
  }else{
    alert("Les informations saisies sont incorrectes.")
  }

 }

 const onSubmit = function(){
  nameValidation()
  emailValidation()
  birthdayValidation()
  locationChecked()
  termsChecked()  
}

submitButton.addEventListener("click",(e)=>{
e.preventDefault();
onSubmit();
validation();
//console.log("Send Form")
});






//form.addEventListener("submit",sendForm);
  
/*
 function onSubmit(e){
 e.preventDefault();
 console.log("formSending");
 const dataForm = new DataForm(formSending);
 const first = dataForm.get('first');
 const last = dataForm.get('last');
 const email = dataForm.get('email');
 const birthdate = dataForm.get('birthdate');
 const quantity = dataForm.get('quantity');
 const location = dataForm.get('location');
 const check = dataForm.get('check');
 console.log('Form',{first, last, email, birthdate, quantity, location, check});
 
 }
 */


 /*
birthday: 
regular expression to match required date format: regular = /^\d{1,2}\/\d{1,2}\/\d{4}$/  or /^\d{2}\/\d{2}\/\d{4}$/;
email address: 
regular expression to match required email address format: regular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
*/