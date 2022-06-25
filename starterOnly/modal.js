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
  if (firstName === "" || firstName.length < 2 || !(/^[A-Z]{2,25}/gi.test(firstName))){
    errorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ Prénom";
    errorFirst.style.display = "block";
    errorFirst.style.color = "red";
  }else{
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
  }else{
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
  }else{
    errorEmail.style.display ="none";
  }
}
email.addEventListener("input", function(e){
  validateEmail(e.target.value)
})

// create a function to validate the email

function validateQuantity(valQ){
  if (valQ === "" || !(/^[0-9]{1,3}/.test(valQ))){
    errorQuantity.innerHTML = "Veuillez un nombre valide";
    errorQuantity.style.display = "block";
    errorQuantity.style.color = "red"
  }else{
    errorQuantity.style.display = "none"
  }
}
quantity.addEventListener("input",function(e){
  validateQuantity(e.target.value)
})

// create a function to validation radio buttons

//function checkradio(){
  //var ischecked = fasle;
    //for (var i = 0; i < radios.length; i++) {
      //if(radios[i].checked){
        //ischecked = true;
        //errLoc.style.display = "none"
        //break;
        //}
      //}
   //}
   //if (!ischecked) {
    //errLoc.innerHTML = "Veuillez choisir un lieu"
    //errLoc.style.display = "block";
    //errLoc.style.color = "red"
   //}


//preventDefault


