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
const forms = document.querySelectorAll(".formData");
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
const condition1 = document.getElementById("checkbox2")
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

//TODO 1 !!!
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  document.getElementById("valid-form").style.display = "none";
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
  if (firstName === "" || firstName.length < 2 || !(/^[A-Z]{2,25}/gi.test(firstName))){
    errorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ Prénom";
    errorFirst.style.display = "block";
    errorFirst.style.color = "red";
    errorFirst.style.fontSize = "12px"
    first.style.borderColor = "red"
    checkedName = false;
  }else{
    checkedName = true
    errorFirst.style.display = "none";
  }
}
first.addEventListener("input", function(e){
  validateName(e.target.value);
})

// create a function to validate the last name

function validateLast(lastName){
  if (lastName === "" || lastName.length < 2 || !(/^[A-Z]{2,25}/gi.test(lastName))){
    errorLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ Nom";
    errorLast.style.display = "block";
    errorLast.style.color = "red";
    errorLast.style.fontSize = "12px"
    last.style.borderColor = "red"
    checkedLast = false;
  }else{
    checkedLast = true;
    errorLast.style.display ="none";

  }
}
last.addEventListener("input", function(e){
  validateLast(e.target.value);
})

// create a function to validate the email

function validateEmail(valEmail){
  if (valEmail === "" || !(/^[A-Z0-9._-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gi.test(valEmail))){
    errorEmail.innerHTML = "Veuillez entrer une adresse e-mail valide";
    errorEmail.style.display = "block";
    errorEmail.style.color = "red";
    errorEmail.style.fontSize = "12px"
    email.style.borderColor = "red"
    checkedMail = false;
  }else{
    checkedMail = true;
    errorEmail.style.display ="none";
    email.style.border = "none"
  }
}
email.addEventListener("input", function(e){
  validateEmail(e.target.value)
})

// create a function to validation the birthdate

function validateBirth(){
  let birth = document.getElementById("birthdate").value;
  var now = new Date();
        var month = now.getMonth();
        var day = now.getDate();
        var year = now.getFullYear();
  var date = year+"-"+month+"-"+day;
  console.log(birth)
  console.log(month)
  console.log(day)
  console.log(year)
  console.log(now)
  
  if (birth > date){
    errBirth.innerHTML="Veuillez saisir une date de naissance valide"
    errBirth.style.display = "block"
    errBirth.style.color = "red"
    errBirth.style.fontSize = "12px"
    birth.style.borderColor = "red"
    checkedBirth = false;
  }else{
    errBirth.style.display="none";
    checkedBirth = true
    birth.style.border = "none"
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
    checkedQ =true;
    errorQuantity.style.display = "none";
  }
}
quantity.addEventListener("input",function(e){
  validateQuantity(e.target.value)
})

// create a function to validation radio buttons

function validationLocation(e){
  if(e.target.checked){
    errLoc.style.display="none";
  }else{
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
    validationLocation(e);
  })
})

//creat a function to validate general condition

function validateCondition(valC){
  if(valC.target.checked){
    errconditions.style.display="none";
    checkedCond = false
  }else{
    checkedCond = true
    errconditions.innerHTML="Veuillez accepter les conditions d'utilisation";
    errconditions.style.display="block";
    errconditions.style.color="red"
    errconditions.style.fontSize = "12px"
  }
}

condition1.addEventListener("input",function(e){
  validateCondition(e.target.value)
})


//fonctionnement du bouton d'envoi



btnSubmit.addEventListener("click",function(e){
  // à mettre apres chaque if e.preventDefault();
  if(!checkedName){
    e.preventDefault();
    validateName(e)
  }
  if(!checkedLast){
    e.preventDefault();
    validateLast(e)
  }
  if(!checkedMail){
    e.preventDefault();
    validateEmail(e)
  }
  if(!checkedBirth){
    e.preventDefault();
    validateBirth(e)
  }
  if(!checkedQ){
    e.preventDefault();
    validateQuantity(e)
  }
  if(!checkedLoc){
    e.preventDefault();
    validationLocation(e)
  }
  if(checkedCond){
    e.preventDefault();
    validateCondition(e)
  }
  if(checkedName && checkedLast&& checkedMail && checkedBirth && checkedQ && checkedLoc && checkedCond && !clicked){
    document.getElementById("valid-form").style.display = "block"

}})





