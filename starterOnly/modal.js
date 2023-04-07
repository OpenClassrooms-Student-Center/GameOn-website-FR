function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn"); //boutton je m'inscrit
const essayer = document.getElementById('essayer');//boutton c'est partie
const myform = document.getElementById('myform');// ma form qui contient tout les champs
const btnFermer = document.getElementById('fermer');// boutton fermer
const msgConfirmation = document.getElementById('msgConfirmation');//message de confirmation apres envoi du formulaire
const msgErr = document.querySelectorAll('.msgErr')//le span message d'erreur
const TextControl = document.querySelectorAll('.text-control')
const close = document.querySelector(".close");// la croix pour fermer la fenetre
const content = document.querySelector(".content");

//recuperation des inputs
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const CheckCondition = document.getElementById('checkbox1');

//variable de verification si données saisie sont valide
let firstIsValid = false;
let lastIsValid = false;
let mailIsValid = false;
let birthdateIsvalid = false;
let quantityIsvalid = false;
let TestCheked = false;
let conditionIsvalis = false;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  //initialiser l'affichage des bouttons et la form
  myform.style.display="block";
  essayer.style.display = "block";
  btnFermer.style.display = 'none';
  msgConfirmation.style.display = 'none';
  
  myform.reset();//initialisation des champs a null
  for(let i=0; i<7; i++){// pour ne pas pas laisser le msg erreur affiché
     msgErr[i].innerHTML="";
    }
  for(let i=0; i<5; i++){// remettre la couleur de la bordure des inputs a none
      TextControl[i].style.border="none"; 
     }
}
//close modal event
close.addEventListener("click",closeModal);
btnFermer.addEventListener("click",closeModal);

// close modal form
function closeModal(){
  content.style.animation = "modalclose 0.8s ease forwards";
  setTimeout(()=>{
    modalbg.style.display = "none";
    content.style.animation = "";
  },700)
}

//***************** */
//verification de chaque champ saisie en temps reel
firstName.addEventListener('input',validateFirstName);
lastName.addEventListener('input',validateLastName);
email.addEventListener('input',validateMail);
birthdate.addEventListener('change',validateBirthdate);
quantity.addEventListener('input',validateNbrConcours);

// lorsque je clique sur le boutton "c'est parti" je verifie encore la validité des données saisie
essayer.addEventListener('click',validate);
// fonction validate 
function validate(){
  validateFirstName();
  validateLastName();
  validateMail();
  validateBirthdate();
  validateNbrConcours();
  validateLocation();
  validateCondition();
 
  if(firstIsValid && lastIsValid && mailIsValid && birthdateIsvalid && quantityIsvalid && TestCheked && conditionIsvalis)
  {
    myform.style.display = "none";
    essayer.style.display = "none";
    btnFermer.style.display = 'block';
    msgConfirmation.style.display = 'flex';
  }
}

// fonction de verification du champ prenom
function validateFirstName(){
  const msgErrFirstname = document.getElementById("msgErr-firstname");
  const patternName = /^[a-zA-Z]+(?:[- ]?[a-zA-Z]+)*\s*$/;

  if(firstName.value.trim() ==""){ // le champ ne dois pas etre vide
    firstName.style.border = '2px solid #e54858';
    msgErrFirstname.innerHTML="le Prenom est requis !";
    firstIsValid = false;
  }
  else if (firstName.value.trim().length < 2){//Le champ a un minimum de 2 caractères
    firstName.style.border = '2px solid #e54858';
    msgErrFirstname.innerHTML="Le prénom doit contenir au moins 2 caractères !";
    firstIsValid = false;
  }
  else if(firstName.value.match(patternName)){ 
    firstName.style.border = "none";
    msgErrFirstname.innerHTML = "";
    firstIsValid = true;
  }
  else{//pas de chiffres ni caracteres speciaux
    firstName.style.border = '2px solid #e54858';
    msgErrFirstname.innerHTML="veuillez sasir un prénom valide !";
    firstIsValid = false;
  }
}
// fonction de verification du champ nom
function validateLastName(){
  const msgErrLastname = document.getElementById("msgErr-lastname");//le span pour afficher le message d'erreur
  const patternName = /^[a-zA-Z]+(?:[- ]?[a-zA-Z]+)*\s*$/;

  if(lastName.value.trim() ==""){ // le champ ne dois pas etre vide
    lastName.style.border = '2px solid #e54858';
    msgErrLastname.innerHTML="le nom est requis !";

    lastIsValid = false;
  }
  else if (lastName.value.trim().length < 2){//Le champ a un minimum de 2 caractères
    lastName.style.border = '2px solid #e54858';
    msgErrLastname.innerHTML="Le nom doit contenir au moins 2 caractères !";
    lastIsValid = false;
  }
  else if(lastName.value.match(patternName)){ 
    lastName.style.border = "none";
    msgErrLastname.innerHTML = "";
    lastIsValid = true;
  }
  else{//pas de chiffres et caracteres speciaux
    lastName.style.border = '2px solid #e54858';
    msgErrLastname.innerHTML="veuillez sasir un nom valide !";
    lastIsValid = false;
  }
}
// fonction de verification d'adresse mail
function validateMail(){
  const msgErrEmail = document.getElementById("msgErr-email");//span message d'erreur
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 
  if(email.value.match(pattern)){
      email.style.border = 'none';
      msgErrEmail.innerHTML = "";
      mailIsValid = true;
    }
  else {
    email.style.border = '2px solid #e54858';
    msgErrEmail.innerHTML="veuillez saisir une adresse mail valide !"; 
    mailIsValid = false;
  }
}
// fonction de verification de date de naissance
function validateBirthdate(){
  const msgErrBirthdate = document.getElementById('msgErr-birthdate');

  if (birthdate.value == ""){
    birthdate.style.border = '2px solid #e54858';
    msgErrBirthdate.innerHTML="Vous devez entrer votre date de naissance !";
    birthdateIsvalid = false;
  }
  else{
    birthdate.style.border = 'none';
    msgErrBirthdate.innerHTML="";
    birthdateIsvalid = true;
  }
}
// verification que au mois un concours est saisie
function validateNbrConcours(){
  const msgErrQuantity = document.getElementById('msgErr-quantity');

  if (quantity.value == ""){
    quantity.style.border = '2px solid #e54858';
    msgErrQuantity.innerHTML="veuillez saisir un chiffre !";
    quantityIsvalid = false;
  }
  else{
    quantity.style.border = 'none';
    msgErrQuantity.innerHTML="";
    quantityIsvalid = true;
  }
}
// verifier que au moin une location est choisie
function validateLocation(){
  const Location = document.querySelectorAll('input[type=radio]');
  const msgErrLocation = document.getElementById('msgErr-location');
  for (const el of Location) {
    if(el.checked){
      TestCheked = true;
    }
  }
  if( TestCheked ){
    msgErrLocation.innerHTML="";
  }
  else{
    msgErrLocation.innerHTML="Vous devez selectionner un tournois !";
    TestCheked = false;
  }
}
// verifier que les conditions d'utilisations sont acceptés
function validateCondition(){
  const msgErrCondition = document.getElementById('msgErr-condition');

  if(CheckCondition.checked){
    msgErrCondition.innerHTML="";
    conditionIsvalis = true;
  }
  else{
    msgErrCondition.innerHTML="Vous devez acceptez les conditions d'utilisation";
    conditionIsvalis = false;
  } 
}