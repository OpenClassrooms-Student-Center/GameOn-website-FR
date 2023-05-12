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
const modalClose = document.querySelector(".close");
const modalSubmit = document.querySelector(".btn-submit");
const modalBody = document.querySelector(".modal-body");
const modalCloseThanks = document.querySelector(".btn-close");
const formulaire = document.querySelector("form");
const contentForm = document.querySelector(".content");
const thanksMessageWindow = document.querySelector(".thanks_message");
const boutonFermer = document.querySelector(".btn-close");
console.log(formulaire);

// messages d'erreur //
const errorMessageFirstName = document.querySelector("#errorFirstName");
const errorMessageName = document.querySelector("#errorName");
const errorMessageEmail = document.querySelector("#errorEmail");
const errorMessageCheckbox = document.querySelector("#errorCheckbox");
const errorMessageTerms = document.querySelector("#errorCheckboxTerms");
const errorMessageBirthdate = document.querySelector("#errorBirthdate");
const errorMessageNumber = document.querySelector("#errorTournamentNumber");

// declarer les variables des inputs
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const numberTournament = document.querySelector("#quantity");
const boxChecked = document.querySelectorAll('input[name="location"]');
const radioButtons = document.querySelector('#checkbox1');
const birthDate = document.querySelector("#birthdate");

// OUVERTURE - FERMETURE DE LA MODAL
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal(event) {
  modalbg.style.display = "block";
  thanksMessageWindow.style.display = "none";


  event.preventDefault();
}

// close modal 
modalClose.onclick = function(){
  modalbg.style.display = "none";  
}

// fonction fermeture et reinitialisation depuis la modal remerciement  

// function closeMessage (){
//   modalbg.style.display = "none"; 
//   formulaire.style.display ="block";
//   formulaire.reset();
//   }



// page de remerciement 
function thanksMessage(){

  thanksMessageWindow.style.display = "block";

  boutonFermer.addEventListener('click', function(){
    modalbg.style.display = "none"; 
    formulaire.style.display ="block";
    formulaire.reset();
  });
  
}

// valider le prénom  //
firstName.addEventListener('blur', function(){
  validateFirstName();
})
function validateFirstName(){
    if (firstName.value === "" || firstName.validity.patternMismatch){
      errorMessageFirstName.innerHTML = " Le champ Prénom a un minimum de 2 caractères";
      errorMessageFirstName.style.color= "red";
      return false;
  }else{
    errorMessageFirstName.innerHTML = "";
    return true;
  }
}

// valider le nom  //

lastName.addEventListener('blur', function(){
  validateName();
})
function validateName(){
  if (lastName.value === "" || lastName.validity.patternMismatch){
    errorMessageName.innerHTML = " Le champ Nom a un minimum de 2 caractères";
    errorMessageName.style.color= "red";
    return false;
}else{
  errorMessageName.innerHTML = "";
  return true;
}
}

// valider Email//
email.addEventListener('blur', function(){
  validateEmail();
})
function validateEmail(){
  const email = document.getElementById("email");
    if(email.value === "" || email.validity.patternMismatch){
      errorMessageEmail.innerHTML = "L'adresse mail doit être valide";
      errorMessageEmail.style.color= "red";
      return false;
    }else{
      errorMessageEmail.innerHTML = "";
      return true;
    }
}

// valider une option //

function validateCheckbox(){

  // recuperer le span pour afficher le message
  const messageErrorCheckbox = document.getElementById('errorCheckbox');
  // initialiser la variable isChecked
  let isChecked = false;
  // faire une boucle pour traverser tous les boutons afin de savoir si 1 est coché
  for(i=0; i<boxChecked.length; i++){
    if(boxChecked[i].checked){
      isChecked = true; // mettre la variable à true si au moins une case est cochée
      break; // sortir de la boucle car au moins une case est cochée
    }
  }
  if(isChecked){
    messageErrorCheckbox.innerHTML = "";
    return true;
  }else{
    messageErrorCheckbox.innerHTML = "Vous devez choisir une option.";
    messageErrorCheckbox.style.color= "red";
    return false;
  }
};

birthDate.addEventListener('blur', function(){
  validateBirthdate();
}) 
function validateBirthdate(){
  if(birthDate.value === "" || birthDate.validity.patternMismatch){
    errorMessageBirthdate.innerHTML = "Veuillez entrer une date";
    errorMessageBirthdate.style.color= "red";
    return false;
  }else{
    errorMessageBirthdate.innerHTML = "";
    return true;
  }
}

numberTournament.addEventListener('blur', function(){
  validateNbrTournament();
}) 
function validateNbrTournament(){
  if(numberTournament.value === "" || numberTournament.validity.patternMismatch){
    errorMessageNumber.innerHTML = "Veuillez entrer un nombre";
    errorMessageNumber.style.color= "red";
    return false;
  }else{
    errorMessageNumber.innerHTML = "";
    return true;
  }
}

// valider les conditions //
radioButtons.addEventListener('blur', function(){
  validateCheckboxTerms();
})
function validateCheckboxTerms(){
  const radioButtons = document.querySelector('#checkbox1');
    if (!radioButtons.checked) {
      const messageErrorTerms = document.querySelector('#errorCheckboxTerms')
      messageErrorTerms.innerText = "Vous devez vérifier que vous acceptez les termes et conditions.";
      messageErrorTerms.style.color = "red";
      return false;
    }else{
      document.querySelector('#errorCheckboxTerms').innerText = "";
      return true;
    }
};      


// VALIDATION DU FORMULAIRE //

function validate(event){
  event.preventDefault();

  // condition de validation du formulaire si tout est true 
    const isValideFirstName = validateFirstName();
    const isValideName = validateName();
    const isValideEmail = validateEmail();
    const isValideCheckbox = validateCheckbox();
    const isValideCheckboxTerms = validateCheckboxTerms();
    const isValideBirthDate = validateBirthdate();
    const isValideNumberTournament = validateNbrTournament()
    if(isValideFirstName && isValideName && isValideEmail && isValideCheckbox && isValideCheckboxTerms && isValideBirthDate && isValideNumberTournament){
      thanksMessage();
      formulaire.style.display ="none";
    }
  }

  console.log(firstName.validity.patternMismatch)


  
