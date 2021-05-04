function editNav() {
  let x = document.getElementById("myTopnav");
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
const modalBodyForm = document.querySelector(".form");
const succesMessage = document.getElementById('message_confirmation');
const modalBox = document.querySelector(".bground");

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
}


// Récuperation des éléments du formulaire

const myform = document.getElementById("inscription");
const first = document.getElementById("first");
const last = document.getElementById("last");
const mail =document.getElementById("email");
const birth = document.getElementById("birthdate");
const quantity = document.getElementById('quantity')
const city = document.querySelectorAll("input[type=radio]");
const choice = document.getElementById("checkbox1");


// Récupération des messages d'erreur
const lastErr = document.getElementById('lastErr');
const firstErr = document.getElementById('firstErr');
const emailErr = document.getElementById('emailErr');
const birthErr = document.getElementById('birthErr');
const quantityErr = document.getElementById('quantityErr');
const cityErr = document.getElementById('cityErr');
const choiceErr = document.getElementById('choiceErr');



// Création variable qui récupère la date renseignée
const birthDate = new Date(birth.value);
// Création d'une variable qui récupère la date du jour
const today = new Date(Date.now());
// Création d'une variable de 90 ans
const old = new Date(1931, 12, 31);

// Création de variable regex pour le nom et le mail
const regName = /^[a-zA-Z]{2}/;
const regMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Condition pour la validation du formulaire
myform.addEventListener('submit', (e) => {
  
  e.preventDefault();
  if( firstN() && lastN() && email() && birthday() && quantityy() && cities() && choices() ) {
    //Close ModalBox and OPEN SuccesBox
      modalBox.style.display = "none";
      succesMessage.style.display = "block";  
      //Close succesBox
      document.querySelectorAll('.close_confirmation').forEach(button =>{
      button.addEventListener('click', button => {
      if (succesMessage.style.display === "block"){
          succesMessage.style.display = 'none';
      }})});
      //Reset the form  
      myform.reset();
    } 
    return true;
  })

// conditions pour le prénom avec une regex qui n'accepte que les consttres 
function firstN(){
  if(!regName.test(first.value.trim())){
    firstErr.textContent = "Le champs Prénom est requis et il faut 2 lettres minimum";
    first.style.borderColor ='red';
    return false;
  } else {
    document.getElementById("firstErr").innerHTML = "";
    first.style.borderColor = "black";
    return true;
  }
}

  // conditions pour le nom avec une regex qui n'accepte que les consttres
function lastN(){
  if(!regName.test(last.value.trim())){
    lastErr.textContent = "Le champs Nom est requis et il faut 2 lettres minimum";
    last.style.borderColor ='red';
    return false;
  } else {
    document.getElementById("lastErr").innerHTML = "";
    last.style.borderColor = "black";
    return true;
  }
}

  // conditions pour le mail avec une regex qui demande un vrai mail
function email(){
  if(!regMail.test(mail.value.trim())){
    emailErr.textContent = "Le champs Mail est incorrect...";
    mail.style.borderColor ='red';
    return false;
  } else {
    document.getElementById("emailErr").innerHTML = "";
    mail.style.borderColor = "black";
    return true;
  }
}

  // conditions pour la date de naissance, qu'elle ne soit ni trop ancienne ni dans le futur
function birthday(){
  if(birth.value === "" || birthDate.getTime() > today.getTime() || birthDate.getTime() < old.getTime()){
    birthErr.textContent = "Vous devez entrer votre date de naissance";
    birth.style.borderColor ='red';
    return false;
  }else{
    birthErr.textContent = "";
    birth.style.borderColor ='black';
    return true;
  }
}

  // conditions pour le nombre de participation (entre 0 et 99)
function quantityy(){
  if(quantity.value ==="" || quantity.value >= 100) {
    quantityErr.textContent = "Veuillez entrer un nombre entre 0 et 99";
    quantity.style.borderColor = 'red';
    return false;
  }else {
    quantityErr.textContent = "";
    quantity.style.borderColor = 'black';
    return true;
  }
}

  // conditions pour voir si une ville à bien était sélectionner
function cities() { 
  let i =0;
  let isChecked = false;
  while ( i < city.length) {
    if (city[i].checked) {
      isChecked=true;
      break;
    } else {
      i++
    }
  }
  if(!isChecked) {
    cityErr.textContent ='Veuillez choisir une ville'
    return false;
    } else {
      cityErr.textContent='';
      return true;
    }
}
    // conditions pour verifier que les conditions sont acceptées
function choices() {
  if(!choice.checked) {
    choiceErr.textContent ='Veuillez accepter les conditions'
    return false;
  }else {
    choiceErr.textContent ='';
    return true;
  }
}

