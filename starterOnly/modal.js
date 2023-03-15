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
  event.preventDefault();
    console.log("toto");
};
      // valider le first name //
    function validateFirstName(){
      var firstName = document.querySelector("#first");
      const messageErrorFirstName = document.querySelector("#errorFirstName");
      firstName.addEventListener("input", function(){
        if(firstName.value === "" || firstName.value.length < 2){
          messageErrorFirstName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
          messageErrorFirstName.style.color ="red";
          return false;
        } else {
        messageErrorFirstName.innerText = "";
        return true;
        }
      });  
    };
    validateFirstName();

    // valider le name //

    function validateName(){
      var name = document.querySelector("#last");
      const messageErrorName = document.querySelector("#errorName");
      name.addEventListener("input", function(){
        if(name.value === "" || name.value.length < 2){
          messageErrorName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
          messageErrorName.style.color ="red";
          return false;
        } else {
        messageErrorName.innerText = "";
        return true;
        }
      });  
    };
    validateName();

    // valider l'email //

    function validateEmail(){
      var email = document.querySelector("#email");
      const messageErrorEmail = document.querySelector("#errorEmail");
      email.addEventListener("input", function(){
        if(!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) || email.value === ""){
          messageErrorEmail.innerText = "Veuillez entrer un email valide.";
          messageErrorEmail.style.color ="red";
          return false;
        } else {
        messageErrorEmail.innerText = "";
        return true;
        }
      });  
    };
    validateEmail();

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
    validateCheckbox();

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
    validateCheckboxTerms();







  
