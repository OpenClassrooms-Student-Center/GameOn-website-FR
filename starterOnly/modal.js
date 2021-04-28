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
const closeX = document.querySelectorAll(".close");
const formDisplay = document.getElementById("validation_clear");
const validationText= document.getElementById("validation_text");
const validationButton= document.getElementById("validation--button");
const inputs = document.getElementsByTagName("input");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form 
function launchModal() {
  modalbg.style.display = "block"; 
}

// close modal event 
closeX.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form + validation message
function closeModal(e) {
  modalbg.style.display = "none";
  formDisplay.style.display = "block";
  validationText.style.display= "none";
  validationButton.style.display= "none";
 
}
//close modal when click outside 
var content = document.querySelector(".content")
modalbg.addEventListener("click", function (e) {
  if (e.target != modalbg) {
  }
  else {
    closeModal()
  }
  })
  
// Close Validation message Button
validationButton.addEventListener("click", closeModal);

// Close modal and open validation message and clear modal fields
function validate(){
  formDisplay.style.display = "none";
  validationText.style.display= "block";
  validationButton.style.display= "block";
    for (var i=0; i < inputs.length -1; i++){
    inputs[i].value = "";
    inputs[i].checked = false;
    }
    for (var h=0; h < formData.length; h++) {
      formData[h].setAttribute("data-error-visible", undefined)
    } 
}

// Error messages function
function noError(e) {
  inputValid=true;
  e.parentNode.setAttribute("data-error-visible", false);
  e.setCustomValidity("");
}

function error(e,texte,custom) {
  inputValid= false;
  e.parentNode.setAttribute("data-error-visible", true);
  e.parentNode.setAttribute("data-error", texte);
  e.setCustomValidity(custom)
}


//Function which check if the input is correct
function fieldValidation(e) {
  const minLength =2
  if (e.type === "text"){
        if (e.value.length < minLength) {
          error (e,"Nom trop court !","Votre nom doit contenir au moins 2 caractères")
        }else if (!e.value.match(/^[A-Za-z\é\è\ê\-]+$/)){ 
          error (e,"Pas de caractères spéciaux!","Votre nom ne doit pas contenir de caractères spéciaux")
          } else  {
          noError(e); 
        }
  } else if (e.type === "email") {
        if (e.value.match(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i)) {
          noError(e);
        } else {
          error(e,"Email non valide !","'"+e.value+ "' n'est pas une adresse mail valide");
        }
  } else if (e.type ==="date") {
        if (e.value.match (/^[0-9]/)) {
          noError(e);
        } else {
          error(e,"Date anniversaire non correcte !","Veuillez entrer votre date de naissance");
        }
  } else if (e.type ==="number") {
        if (!e.value.match (/^[0-9]/) || e.value > 99) {
          error (e,"Erreur sur la quantité !","Veuillez entrer le nombre de participation à des tournois GameOn");
        } else {
          noError(e);
        }
  } else if (e.type ==="radio") {
          if (e.checked) {
            inputValid= true;
        }
  } else if (e.type === "checkbox"){
          if (e.checked){
            noError(e);
        } else {
            error(e,"CGU non coché !","Veuillez lire et accepter les conditions d'utilisation")
        }
  }
}

// Checks every input
for (var i=0; i < inputs.length; i++){
    inputs[i].addEventListener("input",  function (){
      fieldValidation(this);
     })}

// Check if all the fields are correctly entered (==true) If it is, it launch the validation message
document.forms["reserve"].addEventListener("submit", function(e) {
  e.preventDefault();
  if (inputValid) {
    validate(); 
  } 
});




