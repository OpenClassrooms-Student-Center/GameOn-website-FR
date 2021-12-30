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
const btnClose = document.querySelectorAll('.close');

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

    for (var i = 0 ; i < radio.length ; i++){
      if (radio[i].type === 'radio' && radio[i].checked){
        valid = true;
        break; 
       }
    }
    if(valid){
      errorTag.textContent = "";
      value = radio[i].value;
      console.log(value)
    } else {
      errorTag.textContent = errorMsg;
      errorTag.style.color = "#FF4E60";
      errorTag.style.fontSize = "12px";
    }

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

function validate (event){
  event.preventDefault();
  checkEntry(inputFirstName, nameRegex, 'prenom-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
  checkEntry(inputLastName, nameRegex, 'nom-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
  checkEntry(inputEmail, emailRegex, 'email-error', " l'Email utiliser n'est pas valide.");
  checkEntry(inputDate, birthRegex, 'date-error', "Vous devez entrer votre date de naissance.");
  checkEntry(inputQuantity, tournoiRegex, 'quantity-error', "Vous devez indiquez un nombre entre 0 et 99.");
  checkboxLocation(inputLocation,'location-error', "Vous devez selectionnez une ville pour le tournoi.");
  checkboxCondition(inputCondition,'condition-error',"Vous devez vérifier que vous acceptez les termes et conditions.");
 
}