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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal(event) {
  modalbg.style.display = "block";
  event.preventDefault();
}

// close modal 
modalClose.onclick = function(){
  modalbg.style.display = "none";  
}

// valider le formulaire //

function validate(event){
  /*try{
    event.preventDefault();
    console.log("toto");
  }catch(er){
    console.log(er);
  }*/
  event.preventDefault();
  validateFirstName();
  validateName();
  validateEmail();
}
// 

// messages d'erreur //

const errorMessageFirstName = document.querySelector("#errorFirstName");
const errorMessageName = document.querySelector("#errorName");
const errorMessageEmail = document.querySelector("#errorEmail");
const errorMessageCheckbox = document.querySelector("#errorCheckbox");
const errorMessageTerms = document.querySelector("#errorCheckboxTerms");
// valider le first name //

function validateFirstName(){
  const firstName = document.getElementById("first");
    if (!firstName.checkValidity()) {
      errorMessageFirstName.innerHTML = " Le champ Prénom a un minimum de 2 caractères";
      errorMessageFirstName.style.color= "red";
    }else{
      errorMessageFirstName.innerHTML = "";
    }
}

function validateName(){
  const Name = document.getElementById("last");
    if (!Name.checkValidity()) {
      errorMessageName.innerHTML = " Le champ Prénom a un minimum de 2 caractères";
      errorMessageName.style.color= "red";
    }else{
      errorMessageName.innerHTML = "";
    }
}

function validateEmail(){
  const email = document.getElementById("email");
    if (!email.validity.patternMismatch) {
      errorMessageEmail.innerHTML = "";
    }else{
      errorMessageEmail.innerHTML = "L'adresse mail doit être valide";
      errorMessageEmail.style.color= "red";
    }
}


    // valider une option //
    function validateCheckbox(){
      const radioButtons = document.querySelectorAll('input[name="location"]');
      for(const radioButton of radioButtons){
        radioButton.addEventListener('change', showSelected);
      }        
            
      function showSelected() {
        if (!this.checked) {
          document.querySelector('#errorCheckbox').innerText = "Vous devez choisir une option.";
          return false;
        }else{
          return true;
        }
      }
    };
    

    function validateCheckboxTerms(){
      const radioButtons = document.querySelector('#checkbox1');
        radioButtons.addEventListener('change', function(){
          if (!this.checked) {
            const messageErrorTerms = document.querySelector('#errorCheckboxTerms')
            messageErrorTerms.innerText = "Vous devez vérifier que vous acceptez les termes et conditions.";
            messageErrorTerms.style.color = "red";
            return false;
          }else{
            document.querySelector('#errorCheckboxTerms').innerText = "";
            return true;
          }

        }); 
      };      
    







  
