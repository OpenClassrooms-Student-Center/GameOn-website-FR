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
const modalBtnClose = document.querySelectorAll(".close"); // creation d'un dom element sur l'element tout les element de la classe "close"
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalBtnClose.forEach((btnClose) => btnClose.addEventListener("click", closeModal)); // creation d'un event pour fermer le modal

// close modal form
function closeModal(){ // fonction qui arrete l'affichage du modal
  modalbg.style.display ="none"; 
}



// Formulaire

// Element
let myFirstname = document.getElementById('first');
let myLastname = document.getElementById('last');
let myEmail = document.getElementById('email');
let myBirthday = document.getElementById('birthdate');
let myQuantity = document.getElementById('quantity');
let myLocalisation = document.querySelectorAll(".checkbox-input");
let myCheckbox = document.getElementById('checkbox1');

//Element Error message
let myFirstnameError = document.getElementById('error__message__first');
let myLastnameError = document.getElementById('error__message__last');
let myEmailError = document.getElementById('error__message__email');
let myBirthdayError = document.getElementById('error__message__birthday');
let myQuantityError = document.getElementById('error__message__quantity');
let myLocalisationError = document.getElementById('error__message__localisation');
let myCheckboxError = document.getElementById('error__message__checkbox');



// Validation
let btnSubmit = document.querySelector('.btn-submit');


 
btnSubmit.addEventListener("click", function(event){
  event.preventDefault();
  let name =  checkName();
  let lastname = checkLastName();
  let email = checkEmail(myEmail);
  let birthday  = checkBirthdate();
  let quantity = checkQuantity();
  let localisation = checkLocation();
  let checkbox = checkCheckBox();
  if(
    name == false || 
    lastname == false ||
    email == false ||
    birthday == false ||
    quantity == false ||
    localisation == false ||
    checkbox == false 
  ){
    
  }
  else{
    modalbg.style.display = "none";
    modalConfirmation.style.display = "block";
  }
});

// validator


// Check first Name
function checkName(){
   if (myFirstname.value == "" || myFirstname.value.length < 2 ){
    myFirstname.style.border = "2px solid red";
    myFirstnameError.classList.remove("error");
    return false;
  }
  else{
     myFirstname.style.border = "none";
      myFirstnameError.classList.add("error");
     return true;
  }
  console.log(errors);
}
// Check Last Name
function checkLastName(){
  if (myLastname.value == "" || myLastname.value.length < 2 ){
    myLastname.style.border = "2px solid red";
    myLastnameError.classList.remove("error");
    errors = 1;
    return false;
  }
  else{
    myLastname.style.border = "none";
    myLastnameError.classList.add("error");
    errors = 0;
    return true;
  }
}

/* Email */
function checkEmail(myEmail) {
let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
  if(emailRegExp.test(myEmail.value)){
    myEmail.style.border = "none";
    myEmailError.classList.add("error");
    return true;
  }
  else{
    myEmail.style.border = "2px solid red";
    myEmailError.classList.remove("error");
    return false;
  }
}  // date 

function checkBirthdate(){
  // take current date and user birthday
  const birthdate = new Date(myBirthday.value);
  const currentDay = new Date();
  
  // calculs
  const currentYear = currentDay.getFullYear();
  const userYear = birthdate.getFullYear();


  if(currentYear < userYear){
    myBirthday.style.border = "2px solid red";
    myBirthdayError.classList.remove("error");
    return false;
  }
  else{
      myBirthday.style.border = "none";
      myBirthdayError.classList.add("error");
      return true;
    }
  } 

  //quantity
  
  myQuantity
  function checkQuantity(){
    if(myQuantity.value ==""){
      myQuantity.style.border = "2px solid red";
      myQuantityError.classList.remove("error");
      return false;
    }
    else{
      myQuantity.style.border = "none";
      myQuantityError.classList.add("error");
      return true;
    }
  }

  //Localisation
  function checkLocation(){
    let valid = false;
    for(let i=0; i<myLocalisation.length;i++){
      if(myLocalisation[i].checked)
      {
        valid = true;
        myLocalisationError.classList.add("error");
        return true;
      }
    }
    if(valid == false){
      myLocalisationError.classList.remove("error");
      return false;
    }
}

//Checkbox
function checkCheckBox(){
  let cbValid = false;
  if(myCheckbox.checked){
    myCheckboxError.classList.add("error");
    cbValid = true;
    return true;
  }
  if(cbValid == false){
    myCheckboxError.classList.remove("error");
    return false;
  }
}

//  CONFIRMATION
const modalConfirmation = document.querySelector(".confirmation");
const modalConfirmationCrossClose = document.querySelectorAll(".close");
const modalConfirmationBtnClose = document.querySelectorAll("#confirmation__close");

// close modal event
modalConfirmationCrossClose.forEach((btnClose) => btnClose.addEventListener("click", closeConfirmation)); // creation d'un event pour fermer le modal
modalConfirmationBtnClose.forEach((btnClose2) => btnClose2.addEventListener("click", closeConfirmation)); // creation d'un event pour fermer le modal

// close modal form
function closeConfirmation(){ // fonction qui arrete l'affichage du modal
  modalConfirmation.style.display ="none"; 
}
