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
const mainForm = document.getElementById("main-form");

mainForm.addEventListener("submit", (event) => {
  // console.log("click");
})


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//Fermeture du formulaire
const closeModalBtn = document.querySelector(".close");
closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
  form.reset(); //reset du formulaire à la fermeture
}



// //Fonction qui vérifie que le prénom et le nom ne soient pas vide et aient au moins 2 caractère

// function checkIdentity(identity) {
//   if (identity.value.trim() === "") {
//     throw new Error(`Vous devez mettre un ${identity.name}`);

//   }
//   if (identity.value.trim().length < 2) {
//     throw new Error(`Vous devez mettre un ${identity.name} d'au moins 2 caractères`)
//   }
// }
// //Fonction qui vérifie le mail avec une regex

// function checkEmail(email) {
//   const regex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$");
//   if (email.value.trim() === "") {
//     throw new Error(`Vous devez mettre un email`);
//   }
//   if (!regex.test(email.value.trim())) {
//     throw new Error(`L'adresse e-mail est invalide`);
//   }
// }

// //Fonction qui vérifie la date de naissance (année comprise entre 1900 et 2023)

// function checkBirthdate(birthdate) {
//   const currentYear = new Date().getFullYear();
//   const regex = new RegExp("^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/(19[0-9]{2}|20[0-" + (currentYear - 2000) + "]{2})$");

//   if (birthdate.value.trim() === "") {
//     throw new Error(`Vous devez entrer une date de naissance`);
//   }
//   if (!regex.test(birthdate.value.trim())) {
//     throw new Error(`La date de naissance est invalide`);
//   }
// }


// //Fonction qui vérifie le nombre de tournoi

// function checkTournamentNumber(numberTournament) {
//   if (numberTournament.value.trim() === "") {
//     throw new Error(`Vous devez mettre un nombre de tournois`);
//   }

//   const intValue = parseInt(numberTournament.value.trim(), 10);

//   if (intValue.toString() !== numberTournament.value.trim()) {
//     throw new Error(`Veuillez entrer uniquement un nombre entier`);
//   }

//   if (intValue < 0 || intValue > 99) {
//     throw new Error(`Vous devez mettre un nombre de tournois entre 0 et 99`);
//   }
// }
// //Fonction qui vérifie si un tournoi est checké

// function tournamentChecked(inputLocation) {
//   let place = "";
//   for (let i = 0; i < inputLocation.length; i++) {
//     if (inputLocation[i].checked) {
//       place = inputLocation[i].value;
//       break;
//     }
//   }

//   if (place === "") {
//     throw new Error("Aucune option n'a été cochée !");
//   }
//   console.log(place);
// }

// //Fonction qui vérifie le check des conditions d'utilisation

// function conditionAccepted(value) {
//   let accepted = value.checked;
//   console.log(accepted);
//   if (accepted === false) {
//     throw new Error("Vous devez accepter les conditions!");
//   }
// }
// //Fonction qui vérifie le check de la newsletter facultative

// function newsLetterCheck(value) {
//   let accepted = value.checked;
//   console.log(accepted);

//   if (accepted === true) {
//     console.log("Test newsletter acceptée");
//   }

// }

// //Fonction pour afficher les erreurs dans le HTML

// function displayError(error, idElement){
//   const divError = document.createElement("div");
//   divError.classList.add("error-div");
//   const paraError = document.createElement("p");
//   paraError.textContent = error.message;
//   divError.appendChild(paraError);
//   idElement.appendChild(divError);
// }


// //Traitement du formulaire en try/catch event en submit

// const form = document.getElementById("main-form");
// console.log(form);

// form.addEventListener("submit", (event) => {

//   try {
//     event.preventDefault()
//     const first = document.getElementById("first");
//     checkIdentity(first);

//     const last = document.getElementById("last");
//     checkIdentity(last);

//     const email = document.getElementById("email");
//     checkEmail(email);

//     const birthdate = document.getElementById("birthdate");
//     checkBirthdate(birthdate);

//     const tournamentNumber = document.getElementById("quantity");
//     checkTournamentNumber(tournamentNumber);

//     const tournamentPlace = document.querySelectorAll('input[name="location"]');
//     tournamentChecked(tournamentPlace);

//     const conditions = document.getElementById("checkbox1");
//     conditionAccepted(conditions);

//     const newsletter = document.getElementById("checkbox2");
//     newsLetterCheck(newsletter);

//   } catch (error) {
//     console.log(error.message);

//   }
// }
// )





//Fonction pour supprimer les erreurs dans le HTML

function deleteDivError(idValue){
  let existingError = idValue.parentNode.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

}
//Fonction pour afficher les erreurs dans le HTML
function createDivError (idValue, messageError){
  

deleteDivError(idValue)

let divError = document.createElement("div");
divError.classList.add("error-message");
let paraError = document.createElement("p");
divError.appendChild(paraError);
// let textError = `Le champ ${idValue.name} ne doit pas être vide`;
// textError = errorMessage;
paraError.textContent = messageError;
idValue.parentNode.insertBefore(divError, idValue.nextSibling);
}




//Création de fonctions pour les élémens redondants 

//Fonction qui vérifie que le champs n'est pas vide
function isEmpty(idValue, messageError) {
  // let messageError;
  if (idValue.value.trim() === "") {
    messageError =`Le champ ${idValue.name} ne doit pas être vide`;
    createDivError (idValue, messageError)
    return true;

  } 
  else {

    deleteDivError(idValue)
  }
  return false;
}

//Fonction qui vérifie que le champs comprend au moins 2 caractères
function checkLength(idValue, messageError){
 
  if(idValue.value.trim().length < 2){
    messageError =`Le champ ${idValue.name} doit contenir au moins 2 caractères`;
    createDivError (idValue, messageError)
    // console.log(`Champs ${idValue.name} trop petit`);
    
  
  }
}

function checkFirst(first){

  if(!isEmpty(first)){
  checkLength(first)}
}

function checkLast(last){

  if(!isEmpty(last)){
  checkLength(last)}
}

const form =document.querySelector('form');

form.addEventListener("submit", (event)=>{
event.preventDefault();

const first = document.getElementById("first");
checkFirst(first);


const last = document.getElementById("last");
checkLast(last);
})