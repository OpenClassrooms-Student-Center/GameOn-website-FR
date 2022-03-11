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
const submit = document.querySelectorAll("submit");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const tournamentParticipation = document.getElementById('quantity');
//const tournamentSelection = document.querySelectorAll('checkbox-input');
const conditionCheckBox = document.getElementById('checkbox1');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


// validate form input
// input regex
const nameReg = /^[a-zàâçéèêëîïôûùüÿñæœ .'-]+$/i; // /i = insensitive, accept lowercase and uppercase
const emailReg = /^\S+@\S+\.\S+$/;
const birthdateReg = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/; //a ameliorer? - 31/02/3000 est valide
const numberReg = /^[0-9]+$/;

//listen input on change
firstName.addEventListener("change", () => checkFirstName());
lastName.addEventListener("change", () => checkLastName());
email.addEventListener("change", () => checkEmail());
birthdate.addEventListener("change", () => checkBirthdate());
tournamentParticipation.addEventListener("change", () => checkTournamentParticipation());
//tournamentSelection.addEventListener("change", () =>checkTournamentSelection());
conditionCheckBox.addEventListener("change", () =>checkconditionCheckBox());

//checking input 
function checkFirstName(){
  if (firstName.value.length == 0){
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Veuillez renseigner ce champ");
    return false;
  }
  else if (firstName.value.match(nameReg) && firstName.value.length >= 2){
    formData[0].setAttribute("data-error-visible", "false");
    return true;
  }
  else{
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Veuillez entrer un prénom valide.");
    return false;
    
  }
}
function checkLastName(){
  if (lastName.value.length == 0){
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Veuillez renseigner ce champ");
    return false;
  }
  else if (lastName.value.match(nameReg) && lastName.value.length >= 2){
    formData[1].setAttribute("data-error-visible", "false");
    return true;
  }
  else{
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Veuillez entrer un nom valide.");
    return false;
  }
}
function checkEmail(){
  if (email.value.length == 0){
    formData[2].setAttribute("data-error-visible", "true");
    formData[2].setAttribute("data-error", "Veuillez renseigner ce champ");
    return false;
  }
  else if (email.value.match(emailReg)){
    formData[2].setAttribute("data-error-visible", "false");
    return true;
  }
  else{
    formData[2].setAttribute("data-error-visible", "true");
    formData[2].setAttribute("data-error", "Veuillez entrer une adresse email valide.");
    return false;
  }
}
function checkBirthdate(){
  if(birthdate.value == 0){
    console.log('date vide')
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Veuillez renseigner ce champ");
    return false;
  }
  else if (birthdate.value.match(birthdateReg)){
    console.log('true')
    formData[3].setAttribute("data-error-visible", "false");
    return true;
  }
  else{
    console.log('date incorrect')
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Veuillez entrer une date de naissance valide.");
    return false;
  }
}
function checkTournamentParticipation(){
  console.log(tournamentParticipation.value);
  if(tournamentParticipation.value === ''){
    console.log('empty')
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Veuillez renseigner ce champ");
    return false;
  }
  else if (tournamentParticipation.value.match(numberReg)){
    console.log('true')
    formData[4].setAttribute("data-error-visible", "false");
    return true;
  }
  else{
    console.log('false') //ne retourne jamais false, retourne empty 
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Veuillez entrer un nombre valide.");
    return false;
  }
}
/*function checkTournamentSelection(){
  if (tournamentSelection.checked != null){
    console.log('true')
    formData[5].setAttribute("data-error-visible", "false");
    return true;
  }
  else{
    console.log('false')
    formData[5].setAttribute("data-error", "Veuillez choisir un tournoi.");
    return false;

  }
}
*/
function checkconditionCheckBox(){
  if(conditionCheckBox.checked === true){
    console.log('checked')
    return true;
  }
  else{
    console.log('not checked');
    formData[6].setAttribute("data-error", "Veuillez accepter les conditions d'utilisations"); 
    return false;
  }
}
//(5) Un bouton radio est sélectionné.
//(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
//Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
//form validation
function validate(){
  if(
    checkFirstName() &&
    checkLastName() &&
    checkEmail() &&
    checkBirthdate() &&
    checkTournamentParticipation() &&
 //   checkTournamentSelection() &&
    checkconditionCheckBox()
    ){
      console.log("formulaire rempli correctement");
    return true;

  }
  else{
    console.log("formulaire mal rempli");
    return false;
  }
}