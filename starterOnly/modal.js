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
  // Récuperation des éléments du formulaire
  let first = document.getElementById("first");
  let last = document.getElementById("last");
  let mail =document.getElementById("email");
  let birth = document.getElementById("birthdate");
  let quantity = document.getElementById('quantity')
  let city = document.querySelectorAll("input[type=radio]");
  let choice = document.getElementById("checkbox1");
  

  // Récupération des messages d'erreur
  let lastErr = document.getElementById('lastErr');
  let firstErr = document.getElementById('firstErr');
  let emailErr = document.getElementById('emailErr');
  let birthErr = document.getElementById('birthErr');
  let quantityErr = document.getElementById('quantityErr');
  let cityErr = document.getElementById('cityErr');
  let choiceErr = document.getElementById('choiceErr');



  // Création variable qui récupère la date renseignée
  let birthDate = new Date(birth.value);
  // Création d'une variable qui récupère la date du jour
  let today = new Date(Date.now());
  // Création d'une variable de 90 ans
  let old = new Date(1931, 12, 31);

  // Création de variable regex pour le nom et le mail
  let regName = /^[a-zA-Z]{2}/;
  let regMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Condition pour la validation du formulaire

  if(!regName.test(first.value.trim())){
    firstErr.textContent = "Le champs Prénom est requis et il faut 2 lettres minimum";
    first.style.borderColor ='red';
    e.preventDefault();
  } else {
    document.getElementById("firstErr").innerHTML = "";
    first.style.borderColor = "black";
  }

  if(!regName.test(last.value.trim())){
    lastErr.textContent = "Le champs Nom est requis et il faut 2 lettres minimum";
    last.style.borderColor ='red';
    e.preventDefault();
  } else {
    document.getElementById("lastErr").innerHTML = "";
    last.style.borderColor = "black";
  }

  if(!regMail.test(mail.value.trim())){
    emailErr.textContent = "Le champs Mail est incorrect...";
    mail.style.borderColor ='red';
    e.preventDefault();

  } else {
    document.getElementById("emailErr").innerHTML = "";
    mail.style.borderColor = "black";
  }

  if(birth.value === "" || birthDate.getTime() > today.getTime() || birthDate.getTime() < old.getTime()){
    birthErr.textContent = "Vous devez entrer votre date de naissance";
    birth.style.borderColor ='red';
    e.preventDefault();
  }else{
    birthErr.textContent = "";
    birth.style.borderColor ='black';
  }

  if(quantity.value ==="" || quantity.value >= 100) {
    quantityErr.textContent = "Veuillez entrer un nombre entre 0 et 99";
    quantity.style.borderColor = 'red';
    e.preventDefault();
  }else {
    quantityErr.textContent = "";
    quantity.style.borderColor = 'black';
  }
  

})
