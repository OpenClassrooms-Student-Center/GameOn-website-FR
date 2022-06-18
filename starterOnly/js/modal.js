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
const modalbgEnd = document.querySelector('#close');

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
  let localisation = checkQuantity();
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
    modalbgEnd.style.display = "block";
  }
});

// validator


// Check first Name
function checkName(){
   if (myFirstname.value == "" || myFirstname.value.length < 2 ){
    myFirstname.style.border = "2px solid red";
    myFirstnameError.classList.remove("oui");
    return false;
  }
  else{
     myFirstname.style.border = "none";
      myFirstnameError.classList.add("oui");
     return true;
  }
  console.log(errors);
}
// Check Last Name
function checkLastName(){
  if (myLastname.value == "" || myLastname.value.length < 2 ){
    myLastname.style.border = "2px solid red";
    myLastnameError.style.visibility = "visible";
    errors = 1;
    return false;
  }
  else{
    myLastname.style.border = "none";
    myLastnameError.style.visibility = "hidden";
    errors = 0;
    return true;
  }
}

/* Email */
function checkEmail(myEmail) {
let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
  if(emailRegExp.test(myEmail.value)){
    myEmail.style.border = "none";
    myEmailError.style.visibility = "hidden";
    return true;
  }
  else{
    myEmail.style.border = "2px solid red";
    myEmailError.style.visibility = "visible";
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
    myBirthdayError.style.visibility = "visible";
    return false;
  }
  else{
      myBirthday.style.border = "none";
      myBirthdayError.style.visibility = "none";
      return true;
    }
  } 

  //quantity
  
  myQuantity
  function checkQuantity(){
    if(myQuantity.value ==""){
      myQuantity.style.border = "2px solid red";
      myQuantityError.style.visibility = "visible";
      return false;
    }
    else{
      myQuantity.style.border = "none";
      myQuantityError.style.visibility = "none";
      return true;
    }
  }

  //Localisation
  function checkLocation(){
    console.log("sdfsd");
    let valid = false;
    for(let i=0; i<myLocalisation.length;i++){
      if(myLocalisation[i].checked)
      {
        valid = true;
        myLocalisationError.classList.add("oui");
        console.log("salut");
        return true;
      }
    }
    if(valid == false){
      myLocalisationError.classList.remove("oui");
      console.log("s");
      return false;
    }
          console.log("sdfsd");

}

//Checkbox
function checkCheckBox(){
  let cbValid = false;
  if(myCheckbox.checked){
    myCheckboxError.style.visibility = "none";
    cbValid = true;
    return true;
  }
  if(cbValid == false){
    myCheckboxError.style.visibility = "visible";
    return false;
  }
}
