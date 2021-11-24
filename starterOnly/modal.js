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
const closeModalBtn = document.querySelectorAll(".close");
const form = document.querySelectorAll(".form");

// Fields
const bday = document.querySelector("#birthdate").value;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
function validate(event){
  event.preventDefault();
  function invalidInputError(quote, queryErr, query) {
    document.querySelector(queryErr).innerHTML = quote;
    document.querySelector(query).classList.add("shakeInvalidInput");
    document.querySelector(query).classList.add("invalidInput");
    setTimeout(function(){ document.querySelector(query).classList.remove("shakeInvalidInput"); }, 1000);
  }
  /*function clearInvalidInput(query){
    document.querySelector(query).innerHTML = "";
    document.querySelector(query).classList.remove("invalidInput");
  }*/

  function clearInvalidInput(queryInput,queryTexte){
    document.querySelector(queryTexte).innerHTML = "";
    document.querySelector(queryInput).classList.remove("invalidInput");
  }

  let textVerified = 0;
  let emailVerified = 0;
  let dateVerified = 0;
  let nbVerified = 0;
  let radioVerified = 0;
  let checkboxVerified = 0;
  function formValidation(input, msgError){
    switch (input.type) {
      case 'text':
        let textVerification = input.value.length >= 2 ? (textVerified += 1, clearInvalidInput("#"+input.id,"#"+input.id+"Error")) : invalidInputError(msgError, "#"+input.id+"Error","#"+input.id);
        break;

      case 'email':
        const validEmail = /^[a-z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let emailVerification = input.value.toLowerCase().match(validEmail) ? (emailVerified += 1, clearInvalidInput("#"+input.id,"#"+input.id+"Error")) : invalidInputError(msgError, "#"+input.id+"Error","#"+input.id);
        break;

      case 'date':
        let bdayVerification = input.value ? (dateVerified += 1, clearInvalidInput("#"+input.id,"#"+input.id+"Error")) : invalidInputError(msgError, "#"+input.id+"Error","#"+input.id);
        break;

      case 'number':
        const validNumbers = /^[0-9]+$/;
        let numberVerification = input.value.match(validNumbers) ? (nbVerified  += 1, clearInvalidInput("#"+input.id,"#"+input.id+"Error")/*, document.querySelector("#"+input.id+"Error").innerHTML = "", document.querySelector("#"+input.id).classList.remove("invalidInput")*/) : invalidInputError(msgError, "#"+input.id+"Error", "#"+input.id);
        break;
      
      case 'radio':
        let radioVerification = input.checked === true ? (radioVerified += 1, document.querySelector("#checkbox-inputError").innerHTML = "") : document.querySelector("#checkbox-inputError").innerHTML = msgError;
        break;

      case 'checkbox':
        let checkboxVerification = input.checked === true ? (checkboxVerified += 1, document.querySelector("#checkbox1Error").innerHTML = "") : document.querySelector("#"+input.id+"Error").innerHTML = msgError;
        break;
    
      default:
        break;
    }
    if (textVerified === 2 && emailVerified === 1 && dateVerified === 1 && nbVerified === 1 && radioVerified === 1 && checkboxVerified === 1) {
      form.reset();
      document.querySelector(".form").style.display = "none";
      document.querySelector(".modal-body-complete").classList.add("modal-body-complete--visible");
      document.querySelector(".content").style.height = "80%";
    }
  }

  // ===== DOM selection =====
  const form = document.querySelector(".form");
  const first = document.querySelector("#first");
  const last = document.querySelector("#last");
  const email = document.querySelector("#email");
  const bday = document.querySelector("#birthdate");
  const nbTournament = document.querySelector("#quantity");
  const checkCity = document.querySelector("input[name=location]:checked");
  const checkTerms = document.querySelector("#checkbox1");

  // ===== Function call =====
  formValidation(first, "Veuillez entrer 2 charactères ou plus pour le champ nom.");
  formValidation(last, "Veuillez entrer 2 charactères ou plus pour le champ prenom.");
  formValidation(email, "Veuillez entrer une adresse email valide.");
  formValidation(bday, "Veuillez entrer votre date de naissance.");
  formValidation(nbTournament, "Veuillez entrer un nombre pour le nombre de tournois participé.");
  if (checkCity == undefined || checkCity == false || checkCity == null) {
    document.querySelector("#checkbox-inputError").innerHTML = "Vous devez choisir une option.";
  }else{
    formValidation(checkCity, "Vous devez choisir une option."); 
  }
  formValidation(checkTerms, "Vous devez vérifier que vous acceptez les termes et conditions.");

  document.querySelector(".btn-submited").addEventListener("click", function(){
    document.querySelector(".form").style.display = "block";
    document.querySelector(".modal-body-complete").classList.remove("modal-body-complete--visible");
    document.querySelector(".content").style.height = "unset";
  });
}