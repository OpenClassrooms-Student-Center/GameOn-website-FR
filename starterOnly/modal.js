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
const modalConfirmation = document.querySelector(".bground-confirmation");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnClose = document.querySelectorAll('.close');
const closeConfirmation = document.querySelector('.close-confirmation');

// Forms modal DOM Elements
const inputFirstName = document.getElementById('first');
const inputLastName = document.getElementById('last');
const inputEmail = document.getElementById('email');
const inputDate = document.getElementById('birthdate');
const inputQuantity = document.getElementById('quantity');

let inputLocation = document.reserve.location;
const inputCondition = document.getElementById('checkbox1');


// regex 
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[A-Za-z_-]{2,30}$/;
const birthRegex = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
const tournoiRegex = /^[+]?\d+([.]\d+)?$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal,))
// Close modal event
btnClose.forEach((btnClose) => btnClose.addEventListener("click", closeModal))


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal(){
  modalbg.style.display = "none";
  modalConfirmation.style.display = "none";
}


function checkEntry(input, regex, errorId, errorMsg) {
  let errorTag = document.getElementById(errorId);
  // trim() permet d'éviter à l'utilisateur d'ajouter des espaces dans le input qui est considéré comme un charactère
  let value = input.value.trim();
  if(regex.test(value)){
    errorTag.textContent = "";
    input.style.borderColor = "green";
    input.style.borderWidth = "2px";
    return true;  
  } else {
    errorTag.textContent = errorMsg; 
    input.style.borderColor = "#FF4E60";
    input.style.borderWidth = "2px";
    errorTag.style.color = "#FF4E60";
    errorTag.style.fontSize = "12px";
    return false;
  }
 
}

function checkboxLocation(radio, errorId, errorMsg){
  let errorTag = document.getElementById(errorId);
  let valid = false;

    radio.forEach((btnRadio) => {
       if (btnRadio.checked){
         valid = true;
         return
       } 
    })
      if(valid){
       errorTag.textContent = "";
     } else {
       errorTag.textContent = errorMsg;
       errorTag.style.color = "#FF4E60";
       errorTag.style.fontSize = "12px";
     }
     return valid
}

function checkboxCondition(checkbox, errorId, errorMsg){
  let errorTag = document.getElementById(errorId)

  if (checkbox.getAttribute('type') === "checkbox"  && checkbox.checked == false){
    console.log("error")
    errorTag.textContent = errorMsg;
    errorTag.style.color = "#FF4E60";
    errorTag.style.fontSize = "12px";
    return false
  } else {
    errorTag.textContent = "";
    return true
  }
}

function launchConfirmationModal () {
    modalbg.style.display = "none";
    modalConfirmation.style.display = "block";
    modalConfirmation.style.fontSize = "16px";

    closeConfirmation.addEventListener('click', function (){
      modalConfirmation.style.display = "none";
    })
}

function validate (event){
  event.preventDefault();
  const isFirstNameValid = checkEntry(inputFirstName, nameRegex, 'prenom-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
  const isLastNameValid = checkEntry(inputLastName, nameRegex, 'nom-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
  const isEmailValid = checkEntry(inputEmail, emailRegex, 'email-error', " l'Email utiliser n'est pas valide.");
  const isBirthdayValid = checkEntry(inputDate, birthRegex, 'date-error', "Vous devez entrer votre date de naissance.");
  const isNumberTournamentValid = checkEntry(inputQuantity, tournoiRegex, 'quantity-error', "Vous devez indiquez un nombre entre 0 et 99.");
  const isLocationValid = checkboxLocation(inputLocation,'location-error', "Vous devez selectionnez une ville pour le tournoi.");
  const isConditionValid = checkboxCondition(inputCondition,'condition-error',"Vous devez vérifier que vous acceptez les termes et conditions.");

  if( isFirstNameValid && 
      isLastNameValid && 
      isEmailValid && 
      isBirthdayValid && 
      isNumberTournamentValid && 
      isLocationValid && 
      isConditionValid){
        launchConfirmationModal();
      }  
}
