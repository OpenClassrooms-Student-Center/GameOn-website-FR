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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form 
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeX.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
};

// Variable
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const condition = document.getElementById("checkbox1");
const loc1 = document.getElementById ('location1');
const loc2 = document.getElementById ('location2');
const loc3 = document.getElementById ('location3');
const loc4 = document.getElementById ('location4');
const loc5 = document.getElementById ('location5');
const loc6 = document.getElementById ('location6');
let FirstNameValid ;
let LastNameValid ;
let emailValid ;
let birthdateValid ;
let quantityValid ;
let conditionValid = true ;
let cityValid ;


// Fonctions
function firstNameMessage() { firstNameInput.setCustomValidity("Votre nom doit contenir au moins 2 caractères")};
function lastNameMessage() {lastNameInput.setCustomValidity("Votre nom doit contenir au moins 2 caractères")};
function emailMessage() {emailInput.setCustomValidity("'"+emailInput.value+ "' n'est pas une adresse mail valide")};
function birthdateMessage () {birthdateInput.setCustomValidity("Veuillez entrer votre date de naissance")};
function quantityMessage () { quantityInput.setCustomValidity("Veuillez entrer le nombre de participation à des tournois GameOn")};
function  conditionMessage() {condition.setCustomValidity("Veuillez lire et accepter les conditions d'utilisation")};
function locMessage () {loc1.setCustomValidity("Veuillez choisir une ville");
                       /* loc2.setCustomValidity("Veuillez choisir une ville");
                        loc3.setCustomValidity("Veuillez choisir une ville");
                        loc4.setCustomValidity("Veuillez choisir une ville");
                        loc5.setCustomValidity("Veuillez choisir une ville");
                        loc6.setCustomValidity("Veuillez choisir une ville");*/
                        }
function noMessage (element) { element.setCustomValidity("")};
function missingMessage (element){ element.setCustomeValidity("Veuillez remplir tout les champs")};

// Evènement qui détermine si les inputs sont bien remplies. Si ce n'est pas le cas un message d'erreur apparaît

firstNameInput.addEventListener("change", function (event){
  
  if (!event.target.value.match(/^[A-Za-z\é\è\ê\-][A-Za-z\é\è\ê\-]+$/) || event.target.value == ' ' || event.target.value == null || event.target.value.length < 2) { 
    firstNameMessage();
    FirstNameValid = false;
  } else  {
    FirstNameValid = true;
    noMessage(this);
  } 
});

lastNameInput.addEventListener("change", function (event){
  if (!event.target.value.match(/^[A-Za-z\é\è\ê\-][A-Za-z\é\è\ê\-]+$/) || event.target.value == ' ' || event.target.value == null || event.target.value.length < 2) { 
    lastNameMessage();
    LastNameValid=false;
  } else {
    noMessage(this);
    LastNameValid= true;
  }
});

emailInput.addEventListener("input", function (event){
   if (emailInput.value.match(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i)) {
    emailValid=true;
    noMessage(this);
   } else {
    emailValid=false;
    emailMessage();
   }
});

birthdateInput.addEventListener("change", function (event){
  if (birthdateInput.value.match (/^[0-9]/)) {
    birthdateValid=true;
    noMessage(this);
  } else {
    birthdateValid=false;
    birthdateMessage();
  }
});

quantityInput.addEventListener("change", function (event){
  if (!quantityInput.value.match (/^[0-9]/)) {
    quantityMessage();
    return false;
  } else {
    quantityValid=true;
    noMessage(this);
  }
});
// Si l'une des villes est choisie alors l'input est true et respecte les conditions
function locValid(){  
  if (loc1.checked || loc2.checked || loc3.checked || loc4.checked || loc5.checked || loc6.checked) {
    noMessage(this);
    console.log("test6")
    return true;
  } else {
    locMessage ();
    return false;
  }
};


condition.addEventListener("change", function (event){
  if (condition.checked) {
    conditionValid=true;
    noMessage(this);
  } else {
    conditionValid= false;
    conditionMessage();
  }
});


// Vérifie lors du submit si tout les champs sont trues (bien respectés selon le type d'input)
document.forms["reserve"].addEventListener("submit", function(e) {
  
  if (FirstNameValid == true && LastNameValid == true && emailValid == true && birthdateValid == true && quantityValid == true && conditionValid == true ) {
    e.preventDefault();
    console.log("Ok !")
  } else {
    e.preventDefault();
    console.log("Pas bon !");
    missingMessage(lastNameInput);
  }
});









