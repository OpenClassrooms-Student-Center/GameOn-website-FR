
/**
 * On point les inputs par leur id
 */
 const inputs = document.querySelectorAll(
  "#first, #last, #email, #birthdate, #quantity, input[name=location] , #checkbox1 "
);

/**
 * Fonction qui permet d'évoluer dans chacun des inputs
 * @param {*} e - object event
 * @param {*} e.target.value - value de l'input
 */
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "first":
        firstChecker(e.target.value,input);
        break;
      case "last":
        lastChecker(e.target.value,input);
        break;
      case "email":
        emailChecker(e.target.value,input);
        break;
      case "birthdate":
        birthdateChecker(e.target.value,input);
        break;
      case "quantity":
        quantityChecker(e.target.value,input);
        break;
        case "input[name=location]":
        locationChecker(e.target.value,input);
        break;
      case "checkbox1":
        checkboxChecker(e.target.value,input);
      default:
        null;
    }
  });
});


// prénom 
// (1) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.

function firstChecker (value,input) {

  if (value = regText = /[A-Za-z]/ && value.lenght > 2) {
    input.parentNode.dataset.errorVisible = false;
    return true
  } else {
       input.parentNode.dataset.error = "Le prénom doit avoir 2 caractères ou plus";
       input.parentNode.dataset.errorVisible = true;
       return false
  }
  }

// nom 
// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.

function lastChecker (value,input) {

  if (value = regText = /[A-Za-z]/ && value.lenght > 2) {
    input.parentNode.dataset.errorVisible = false;
    return true
  } else {
       input.parentNode.dataset.error = "Le nom doit avoir 2 caractères ou plus";
       input.parentNode.dataset.errorVisible = true;
       return false
  }
  }

  // email
// (3) L'adresse électronique est valide.

  function emailChecker (value,input) {
    const regEmail = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
      if (value == regEmail) {
        input.parentNode.dataset.errorVisible = false;
        return true
      } else {
           input.parentNode.dataset.error = "Veuillez entrer un mail valide";
           input.parentNode.dataset.errorVisible = true;
           return false
      }
      }
    
// birthdate
function birthdateChecker (value,input) {
    if (value == "") {
      input.parentNode.dataset.error = "Veuillez saisir votre date de naissance";
      input.parentNode.dataset.errorVisible = true;
      return false
    } else {
         input.parentNode.dataset.errorVisible = false;
      return true
    }
    }

// concours
// (4) Pour le nombre de concours, une valeur numérique est saisie.
function quantityChecker (value,input) {
  const regNumber = /^[0-9]+$/;
  if (value == regNumber) {
    input.parentNode.dataset.errorVisible = false;
    return true
  
  } else {
    input.parentNode.dataset.error = "Veuillez saisir un nombre";
    input.parentNode.dataset.errorVisible = true;
    return false
  }
  }

// radio
// (5) Un bouton radio est sélectionné.
function quantityChecker (value,input) {
  if (value >= 1) {
    input.parentNode.dataset.errorVisible = false;
    return true
  
  } else {
    input.parentNode.dataset.errorVisible = true;
    return false
  }
  }


// required
// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.

// return true
// else false + ajouter message

document.onload = function(){
  let btn = document.getElementById("submit_form")
  btn.addEventListener("click", formCheck);
};
function formCheck (event) {
  event.preventDefault ()
  console.log(event)
}






// DOM Elements

const modalBtn = document.querySelectorAll(".modal-btn");   //open modal button
const formData = document.querySelectorAll(".formData");  //all inputs
const modalbg = document.querySelector(".bground");         //modal
const closeBtn = document.querySelector(".close");        //close btn modal
const modalSubmit = document.querySelector(".btn-submit");  //modal submit button
const modalSuccess = document.getElementById("modalSuccess");//modal success


// ____________________FORM


// LAUNCH FORM

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// CLOSE FORM

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close modal event
closeBtn.addEventListener("click", closeModal);


// ____________________INPUTS

// datas validation initialisation
let firstName = false;
let lastName = false;
let email = false;
let birthdate = false;
let quantity = false;
let city = false;

//TEXTINPUTS

//fonction globale pour les textes

function checkTextInput(input, tailleMin, errorMessage){
  const regText = /[A-Za-z]/;
  let isOK = false;
  // pour les champs qui comportent A-Z/a-z dont la valeur = input ET plus de 2 en TailleMin alors le message error est false et le return is true
  if (regText.test(input.value) && input.value.length >= tailleMin) {
    // l'errorvisible dans les datas du parent de l'input est false = non affichage
    input.parentNode.dataset.errorVisible = false;
    isOk = true
    return isOK
    // Pour les autres champs, l'error est true et le return est false
  } else {
     // l'error dans les datas du parent est = errorMessage
    input.parentNode.dataset.error = errorMessage;
    // l'errorvisible dans les datas du parent de l'input est true = affichage
    input.parentNode.dataset.errorVisible = true;
    isOk = false
    return isOK
  }
}

//firtname input definition
// l'événement type blur de selecteur #first est = checkTextInput(input, tailleMin, errorMessage)

document.querySelector('#first').addEventListener("blur", (e) =>
{firstName = checkTextInput(e.target, 2, "Le prenom doit avoir 2 caractères ou plus")})

//lastname input definition
// l'événement type blur de selecteur #last est = checkTextInput(input, tailleMin, errorMessage)

document.querySelector('#last').addEventListener("blur", (e) =>
{lastName = checkTextInput(e.target, 2, "Le nom doit avoir 2 caractères ou plus")})

//EMAILINPUT

function checkEmailInput(input, errorMessage){
  const regEmail = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
  let isOk = regEmail.test(input.value);
  // si isOK est falsa OU la valeur du champ est vide
  if (!isOk || input.value == "") {
        // affichage de error message car errorvisible= true
    input.parentNode.dataset.error = errorMessage;
    input.parentNode.dataset.errorVisible = true;
// sinon errorvisible = false = non affichage
  } else {
    input.parentNode.dataset.errorVisible = false;
  }
  return isOk;
}

//email input definition

document.querySelector('#email').addEventListener("blur", (e) =>
{email = checkEmailInput(e.target, "Veuillez entrer un mail valide")})


//BIRTHDAYINPUT


function checkBirthInput(input, errorMessage){
  //Date.parse analyse la représentation textuelle d'une date, et renvoie le nombre de millisecondes depuis le 1er janvier 1970, 00:00:00 UTC jusqu'à cette date ou NaN si la chaîne n'est pas reconnue ou décrit une date invalide
  let date = Date.parse(input.value)
  // La fonction isNaN() permet de déterminer si une valeur est NaN
  let isOk = !isNaN(date);
  // si isOK est falsa OU la valeur du champ est vide
  if (!isOk || input.value == "") {
    // affichage de error message car errorvisible= true
    input.parentNode.dataset.error = errorMessage;
    input.parentNode.dataset.errorVisible = true;
  } else {
    // sinon errorvisible = false = non affichage
    input.parentNode.dataset.errorVisible = false;
  }
  return isOk;
}

//birthday input definition
document.querySelector('#birthdate').addEventListener("blur", (e) =>
{birthday = checkBirthInput(e.target, "Veuillez saisir votre date de naissance")})

//QUANTITYINPUT

function checkQuantityInput(input, errorMessage){
  //L' expression RegExp [0-9] est utilisée pour rechercher n'importe quel chiffre entre les crochets
  const regNumber = /^[0-9]+$/;
  let isOk = regNumber.test(input.value);
    // si isOK est falsa OU la valeur du champ est vide
  if (!isOk || input.value == "") {
    // affichage de error message car errorvisible= true
    input.parentNode.dataset.error = errorMessage;
    input.parentNode.dataset.errorVisible = true;
  } else {
    // sinon errorvisible = false = non affichag
    input.parentNode.dataset.errorVisible = false;
  }
  return isOk;
}

//quantity input definition
document.querySelector('#quantity').addEventListener("blur", (e) =>
{quantity = checkQuantityInput(e.target, "Veuillez saisir un nombre")})

//CITYINPUT

function checkCityInput(inputName, errorMessage){
  // création d'un tableau qui prend tous les inputs dont name = location
  let inputs = Array.from(document.querySelectorAll("input[name='location']"))
    // boucle = si index = 0, que la longueur est moins que l'index 0, ajouter +1 à l'index
  for (let index = 0; index < inputs.length ; index ++){
    // input = tous les index dans le tableau Inputs
    const input = inputs[index];
    // Si un input est coché alors return = true
    if(input.checked) {
    return true;
    }
  }
  // sinon affichage error car errorvisible = true / return = false
  inputName.dataset.error = errorMessage;
  inputName.dataset.errorVisible = true;
  return false;
}


//REQUIREDINPUT
function checkRequiredInput(inputName, errorMessage){
  // création d'un tableau lié aux inputs dont name = checkbox
  let inputs = Array.from(document.querySelectorAll("input[name='checkbox']"))
   // boucle = si index = 0, que la longueur est moins que l'index 0, ajouter +1 à l'index pour éviter de tourner en boucle
  for (let index = 0; index < inputs.length ; index ++){
    const input = inputs[index];
    // Si un input est coché alors changement de l'errorcheck css + return = true
    if(input.checked) {
    let errorCheck = document.querySelector('.errorCheck')
    errorCheck.style.color = 'inherit';
    return true;
    }
  }
  // sinon errorcheck est en couleur rouge + alert + return = false
  let errorCheck = document.querySelector('.errorCheck')
  errorCheck.style.color = 'red';
  alert("Veuillez cocher la case des conditions d'utilisations")
  return false;
}

// ____________________VALIDATION

