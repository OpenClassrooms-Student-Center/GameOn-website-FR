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
const closeBtn = document.getElementById('close');
const modalBodyForm = document.querySelector(".modal-body__form")
const confirmation = document.querySelector(".confirmation")

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event

closeBtn.addEventListener('click', closeModal);

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
  window.scrollTo(0, 0);
}
 
// close modal form

function closeModal() {
  modalbg.style.display = "none";
  confirmation.style.display = "none";
}


// Validation des données 

let myform = document.getElementById("inscription");




myform.addEventListener('submit', function(e){
  // recuperation des éléments du formulaire
  let first = document.getElementById("first");
  let last = document.getElementById("last");
  let mail =document.getElementById("email");
  let birth = document.getElementById("birthdate");
  let quantity = document.getElementById('quantity')
  let city = document.querySelectorAll("input[type=radio]");
  let choice = document.getElementById("checkbox1");
  
  let regName = /^[a-zA-Z]{2}/;
  let regMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(!regName.test(first.value.trim())){
    let firstErr = document.getElementById('firstErr');
    firstErr.textContent = "Le champs Prénom est requis...";
    first.style.borderColor ='red';
    e.preventDefault();
  } else {
    document.getElementById("firstErr").innerHTML = "";
    first.style.borderColor = "black";
  }

  if(!regName.test(last.value.trim())){
    let lastErr = document.getElementById('lastErr');
    lastErr.textContent = "Le champs Nom est requis...";
    last.style.borderColor ='red';
    e.preventDefault();
  } else {
    document.getElementById("lastErr").innerHTML = "";
    last.style.borderColor = "black";
  }

  if(!regMail.test(mail.value.trim())){
    let emailErr = document.getElementById('emailErr');
    emailErr.textContent = "Le champs Mail est incorrect...";
    mail.style.borderColor ='red';
    e.preventDefault();

  } else {
    document.getElementById("emailErr").innerHTML = "";
    mail.style.borderColor = "black";
  }



})
