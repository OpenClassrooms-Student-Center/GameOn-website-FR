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

// ===== lancement de la modal =====
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// ===== Fonction ouverture modal =====
function launchModal() {
  modalbg.style.display = "block";
}

// ===== Fermeture de la modal =====
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// ===== Fonction fermeture modal =====
function closeModal() {
  modalbg.style.display = "none";
  document.querySelector(".form").style.display = "block";
  document.querySelector(".modal-body-complete").classList.remove("modal-body-complete--visible");
  document.querySelector(".content").style.height = "unset";
}

const ajd = new Date();
const mounth = ajd.getMonth()+1;
const dateday = "0"+ajd.getDate();
const currentDate = ajd.getFullYear()+"-"+mounth+"-"+dateday;
document.querySelector("#birthdate").max = currentDate;
let check = document.querySelectorAll(".radio");
for (let i = 0; i < check.length; i++) {
  check[i].disabled = true;
}
document.querySelector("#quantity").addEventListener("keyup", function(){
  if (document.querySelector("#quantity").value >= 1) {
    for (let i = 0; i < check.length; i++) {
      check[i].disabled = false;
    }
  }else{
    for (let i = 0; i < check.length; i++) {
      check[i].checked = false;
      check[i].disabled = true;
    }
  }
});
function validate(event){
  event.preventDefault();

  // ===== Si l'input est érroné =====
  function invalidInputError(quote, queryErr, query) {
    document.querySelector(queryErr).innerHTML = quote;
    document.querySelector(query).classList.add("shakeInvalidInput");
    document.querySelector(query).classList.add("invalidInput");
    setTimeout(function(){ document.querySelector(query).classList.remove("shakeInvalidInput"); }, 1000);
  }

  // ===== Enlever l'affichage du messsage d'erreur et input invalid =====
  function clearInvalidInput(queryInput,queryTexte){
    document.querySelector(queryTexte).innerHTML = "";
    document.querySelector(queryInput).classList.remove("invalidInput");
  }

  // ===== Déclaration des variables pour vérifier si tout les champs sont remplis et correct =====
  let textVerified = 0;
  let emailVerified = 0;
  let dateVerified = 0;
  let nbVerified = 0;
  let cityVerified = 0;
  let checkboxVerified = 0;

  // ===== Fonction pour vérifier les champs =====
  function formValidation(input, msgError){
    switch (input.type) {
      case 'text':
        const validChar = /^[a-zA-Z]+$/;
        if (input.value.match(validChar)) {
          let textVerification = input.value.length >= 2 ? (textVerified += 1, clearInvalidInput("#"+input.id,"#"+input.id+"Error")) : invalidInputError(msgError, "#"+input.id+"Error","#"+input.id); 
        }else{
          invalidInputError(msgError, "#"+input.id+"Error","#"+input.id);
        }
        break;

      case 'email':
        const validEmail = /^[a-z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let emailVerification = input.value.toLowerCase().match(validEmail) ? (emailVerified += 1, clearInvalidInput("#"+input.id,"#"+input.id+"Error")) : invalidInputError(msgError, "#"+input.id+"Error","#"+input.id);
        break;

      case 'date':
        const ajd = new Date();
        const mounth = ajd.getMonth()+1;
        const currentDate = ajd.getDate()+"/"+mounth+"/"+ajd.getFullYear();
        let bdayVerification = input.value ? (dateVerified += 1, clearInvalidInput("#"+input.id,"#"+input.id+"Error")) : invalidInputError(msgError, "#"+input.id+"Error","#"+input.id);
        break;

      case 'number':
        const validNumbers = /^[0-9]+$/;
        let numberVerification = input.value.match(validNumbers) ? (nbVerified  += 1, clearInvalidInput("#"+input.id,"#"+input.id+"Error")) : invalidInputError(msgError, "#"+input.id+"Error", "#"+input.id);
        break;

      case 'checkbox':
        if(input.name == "location"){
          if (input.checked === true) {
            cityVerified += 1;
            document.querySelector("#checkbox-inputError").innerHTML = "";
          }
        }else{
          let checkboxVerification = input.checked === true ? (checkboxVerified += 1, document.querySelector("#checkbox1Error").innerHTML = "") : document.querySelector("#"+input.id+"Error").innerHTML = msgError;
        }
        break;
    
      default:
        break;
    }
    if (textVerified === 2 && emailVerified === 1 && dateVerified === 1 && nbVerified === 1 && cityVerified >= 1 && checkboxVerified === 1 || textVerified === 2 && emailVerified === 1 && dateVerified === 1 && nbVerified === 1 && checkboxVerified === 1) {
      form.reset();
      document.querySelector(".form").style.display = "none";
      document.querySelector(".modal-body-complete").classList.add("modal-body-complete--visible");
      document.querySelector(".content").style.height = "80%";
    }
  }

  // ===== selection des éléments du DOM =====
  const form = document.querySelector(".form");
  const first = document.querySelector("#first");
  const last = document.querySelector("#last");
  const email = document.querySelector("#email");
  const bday = document.querySelector("#birthdate");
  const nbTournament = document.querySelector("#quantity");
  const checkCity = document.querySelector("input[name=location]:checked");
  const checkTerms = document.querySelector("#checkbox1");

  // ===== Appel de la fonction pour vérifier les champs =====
  formValidation(first, "Veuillez entrer 2 charactères ou plus pour le champ nom.");
  formValidation(last, "Veuillez entrer 2 charactères ou plus pour le champ prenom.");
  formValidation(email, "Veuillez entrer une adresse email valide.");
  formValidation(bday, "Veuillez entrer votre date de naissance.");
  formValidation(nbTournament, "Veuillez entrer un nombre pour le nombre de tournois participé.");
  // §§ Si aucune ville n'a pas été sélectionné §§
  if (checkCity == undefined || checkCity == false || checkCity == null) {
    document.querySelector("#checkbox-inputError").innerHTML = "";
  }else{
    formValidation(checkCity, "Vous devez choisir une option."); 
  }
  formValidation(checkTerms, "Vous devez vérifier que vous acceptez les termes et conditions.");

  // ===== Quand l'utilisateur va clicker sur le bouton du message de confirmation =====
  document.querySelector(".btn-submited").addEventListener("click", function(){
    document.querySelector(".form").style.display = "block";
    document.querySelector(".modal-body-complete").classList.remove("modal-body-complete--visible");
    document.querySelector(".content").style.height = "unset";
  });
}