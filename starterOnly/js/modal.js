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
let myLocalisation = document.getElementsByName("location");
let myCheckbox = document.getElementById('checkbox1');

// Validation

let btnSubmit = document.querySelector('.btn-submit');

btnSubmit.addEventListener("click", function(event){
  event.preventDefault();
  checkName();
  checkLastName();
  checkEmail(myEmail);
  checkBirthdate();
  checkQuantity();
  checkLocation();
  checkCheckBox();
});

// Check Name
function checkName(){
  if (myFirstname.value == "" || myFirstname.value.length < 2 ){
    myFirstname.style.border = "2px solid red";
    return false;
  }
  else{
     myFirstname.style.border = "none";
     return true;
  }
}
// Check Last Name
function checkLastName(){
  if (myLastname.value == "" || myLastname.value.length < 2 ){
    myLastname.style.border = "2px solid red";
    return false;
  }
  else{
    myLastname.style.border = "none";
    return true;
  }
}

/* Email */
function checkEmail(myEmail) {
let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
  if(emailRegExp.test(myEmail.value)){
    myEmail.style.border = "none";
  }
  else{
    myEmail.style.border = "2px solid red";
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
    return false;
  }
    else{
      myBirthday.style.border = "none";
    }
  } 

  //quantity
  
  myQuantity
  function checkQuantity(){
    if(myQuantity.value ==""){
      myQuantity.style.border = "2px solid red";
      return false;
    }
    else{
      myQuantity.style.border = "none";
    }
  }

  //Localisation
  function checkLocation(){
    let valid = false;
    for(let i=0; i<myLocalisation.length;i++){
      if(myLocalisation[i].checked)
      {
        valid = true;
        break;
      }
    }
    if(valid == false){
      alert("Vous devez choisir une localisation");
    }
}

//Checkbox
function checkCheckBox(){
  let cbValid = false;

  if(myCheckbox.checked){
    cbValid = true;
  }

  if(cbValid == false){
    alert("Vous devez accepter les conditions d'utilisation !");
}
}