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
const confirmModal = document.getElementById("confirm-modal");
const modalConfirm = document.querySelector(".confirm-modal");
const modalConfirmBtn = document.querySelector(".confirm-modal-btn");
const modalConfirmClose = document.querySelector(".confirm-close");
const forms = document.querySelectorAll(".formData");
const form = document.querySelector("form");
const modalBtnClose = document.querySelectorAll(".close"); // Ajout d'un sélecteur sur tous les élements de la classe "close"
const btnSubmit = document.getElementById("btn-submit");
const first = document.getElementById("first");
const errorFirst = document.getElementById("errorFirst");
const last = document.getElementById("last");
const errorLast = document.getElementById("errorLast");
const email = document.getElementById("email");
const errorEmail = document.getElementById("errorEmail");
const quantity = document.getElementById("quantity");
const errorQuantity = document.getElementById("errorQuantity");
const location1 = document.getElementById("location1")
const location2 = document.getElementById("location2")
const location3 = document.getElementById("location3")
const location4 = document.getElementById("location4")
const location5 = document.getElementById("location5")
const location6 = document.getElementById("location6")
const radios = document.getElementsByName("location")
const errLoc = document.getElementById("errorLocation")
const condition1 = document.getElementById("checkbox1")
const errconditions = document.getElementById("errorAcceptedPolicy")
const birthDate = document.getElementById("birthdate")
const errBirth = document.getElementById("errorBirthdate")
let checkedLoc = false
let checkedName = false
let checkedLast = false
let checkedMail = false
let checkedBirth = false
let checkedQ = false
let checkedCond = false
let fieldname = ""
let fieldfamily = ""
let fieldmail = ""
let fieldbirth = ""
let fieldQ = ""
let fieldCond = ""
let fieldLoc = ""

//TODO 1 !!!
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//ajout évenement sur la classe close
modalBtnClose.forEach((btnClose) => btnClose.addEventListener("click", closeModal))

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}


//TODO2 !!!

//first part is to checked all labels in html to link all id and for
//second part below

// create  functions to validate the first name
function validateName(firstName){
 
    if (firstName === null || firstName.length < 2 || !(/^[A-Z]{2,25}/gi.test(firstName))){
      errorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ Prénom";
      errorFirst.style.display = "block";
      errorFirst.style.color = "red";
      errorFirst.style.fontSize = "12px"
      first.style.borderColor = "red"
      checkedName = false;
    }else{
      checkedName = true
      fieldname = firstName;
      first.style.border = "none";
      errorFirst.style.display = "none";
    }
}
first.addEventListener("input", function(e){
  validateName(e.target.value);
})

// create a function to validate the last name

function validateLast(lastName){
  if (lastName === null || lastName.length < 2 || !(/^[A-Z]{2,25}/gi.test(lastName))){
    errorLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ Nom";
    errorLast.style.display = "block";
    errorLast.style.color = "red";
    errorLast.style.fontSize = "12px"
    last.style.borderColor = "red"
    checkedLast = false;
  }else{
    checkedLast = true;
    fieldfamily = lastName;
    last.style.border = "none"
    errorLast.style.display ="none";

  }
}
last.addEventListener("input", function(e){
  validateLast(e.target.value);
})

// create a function to validate the email

function validateEmail(valEmail){
  if (valEmail === null || !(/^[A-Z0-9._-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gi.test(valEmail))){
    errorEmail.innerHTML = "Veuillez entrer une adresse e-mail valide";
    errorEmail.style.display = "block";
    errorEmail.style.color = "red";
    errorEmail.style.fontSize = "12px"
    email.style.border = "red"
    checkedMail = false;
  }else{
    checkedMail = true;
    fieldmail = valEmail;
    errorEmail.style.display ="none";
    email.style.border = "none"
  }
}
email.addEventListener("input", function(e){
  validateEmail(e.target.value)
})

// create a function to validation the birthdate

function validateBirth(valBirth){
  let birth = document.getElementById("birthdate").value;
  var now = new Date();
        var month = now.getMonth()+1;
        var day = now.getDate();
        var year = now.getFullYear();
  var date = year+"-"+month+"-"+day;
  
  if (birth > date){
    errBirth.innerHTML="Veuillez saisir une date de naissance valide"
    errBirth.style.display = "block"
    errBirth.style.color = "red"
    errBirth.style.fontSize = "12px"
    birthDate.style.borderColor = "red"
    checkedBirth = false;
  }else{
    fieldbirth = valBirth;
    birthDate.style.border = "none"
    errBirth.style.display= "none";
    checkedBirth = true
  }
}

birthDate.addEventListener("input",function(e){
  validateBirth(e.target.value);
})



// create a function to validate the email

function validateQuantity(valQ){
  if (valQ === "" || !(/^[0-9]{0,3}/.test(valQ))){
    errorQuantity.innerHTML = "Veuillez un nombre valide";
    errorQuantity.style.display = "block";
    errorQuantity.style.color = "red";
    errorQuantity.style.fontSize = "12px"
    quantity.style.borderColor = "red"
    checkedQ = false;
  }else{
    fieldQ = valQ;
    checkedQ =true;
    errorQuantity.style.display = "none";
    quantity.style.border = "none"
  }
}
quantity.addEventListener("input",function(e){
  validateQuantity(e.target.value)
})

// create a function to validation radio buttons

function validationLocation(e){
  console.log(e)
  if(e != ""){
    errLoc.style.display="none";
    checkedLoc = true
    fieldLoc = e

    }else{
    checkedLoc = false
     errLoc.innerHTML="Veuillez sélectionner un lieu";
    errLoc.style.display="block";
    errLoc.style.color="red";
    errLoc.style.fontSize = "12px"
    
  }
}

radios.forEach(radio =>{
  radio.addEventListener("input",function(e){
    console.log("test",e.target.checked)
    checkedLoc=true
    validationLocation(e.target.value);
  })
})

//creat a function to validate general condition

function validateCondition(valC){
  if(condition1.checked){
    checkedCond = true
    errconditions.style.display="none";
  }else{
    fieldCond = valC
    checkedCond = false    
    errconditions.innerHTML="Veuillez accepter les conditions d'utilisation";
    errconditions.style.display="block";
    errconditions.style.color="red"
    errconditions.style.fontSize = "12px"}}
  

condition1.addEventListener("input",function(e){
  validateCondition(e.target.value)
})


//fonctionnement du bouton d'envoi

function validate(event) {
	event.preventDefault();
  btnSubmit.addEventListener("click",function(e){
  // à mettre apres chaque if e.preventDefault();
  if(checkedName && checkedLast && checkedMail && checkedBirth && checkedQ && checkedLoc && checkedCond){
    modalbg.style.display = "none"
    modalConfirm.style.display = "block"
  }else{
    validateName(fieldname);
    validateLast(fieldfamily);
    validateEmail(fieldmail);
    validateBirth(fieldbirth);
    validateQuantity(fieldQ);
    validationLocation(fieldLoc);
    validateCondition(fieldCond);
    
  }})}

  document.getElementById("second-btn").addEventListener("click", function(){
    modalConfirm.style.display = "none";
  })

  
  
  
  