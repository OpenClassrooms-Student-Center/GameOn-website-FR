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

// Validation

let btnSubmit = document.querySelector('.btn-submit');

btnSubmit.addEventListener("click", function(event){
  event.preventDefault();
  checkName();

});
function checkName(){
  if (myFirstname.value == "" || myFirstname.value.length < 2 ){
    myFirstname.style.border = "2px solid red";
    return false;
  }
  if (myLastname.value == "" || myLastname.value.length < 2 ){
    myLastname.style.border = "2px solid red";
    return false;
  }
}
/*
function validate(){
  if(myFirstname==""){
    alert("Entrez un prenom");
    return false;
  }
  else{
    return true;
  }
}
/*
function not_validate(){

}
*/