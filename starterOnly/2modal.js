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
  
  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  // launch modal form 
  function launchModal() {
    modalbg.style.display = "block";
  }
  
  // close modal event
  closeX.forEach((btn) => btn.addEventListener("click", closeModal));
  
  // close modal form
  function closeModal() {
    modalbg.style.display = "none";
  };
  
  // Variable
  const firstNameInput = document.getElementById("first");
  const lastNameInput = document.getElementById("last");
  const emailInput = document.getElementById("email");
  const birthdateInput = document.getElementById("birthdate");
  const quantityInput = document.getElementById("quantity");
  const condition = document.getElementById("checkbox1");
  const loc1 = document.getElementById ('location1');
  const loc2 = document.getElementById ('location2');
  const loc3 = document.getElementById ('location3');
  const loc4 = document.getElementById ('location4');
  const loc5 = document.getElementById ('location5');
  const loc6 = document.getElementById ('location6');
  
  
  // Ces variables devront être true pour valider le formulaire
  // Cela dépend si les formulaires sont bien remplies. Ex: Si lastNameInput est bien remplie FirstNameValid devient true
  let FirstNameValid ;
  let LastNameValid ;
  let emailValid ;
  let birthdateValid ;
  let quantityValid ;
  let conditionValid = true;
  let cityValid ;
  
  // Fonctions
  function firstNameMessage() { firstNameInput.setCustomValidity("Votre nom doit contenir au moins 2 caractères")};
  function lastNameMessage() {lastNameInput.setCustomValidity("Votre nom doit contenir au moins 2 caractères")};
  function emailMessage() {emailInput.setCustomValidity("Veuillez entrer une adresse mail valide")};
  function birthdateMessage () {birthdateInput.setCustomValidity("Veuillez entrer votre date de naissance")};
  function quantityMessage () { quantityInput.setCustomValidity("Veuillez entrer le nombre de participation à des tournois GameOn")};
  function  conditionMessage() {condition.setCustomValidity("Veuillez lire et accepter les conditions d'utilisation")};
  function locMessage () {loc1.setCustomValidity("Veuillez choisir une ville");
                          loc2.setCustomValidity("Veuillez choisir une ville");
                          loc3.setCustomValidity("Veuillez choisir une ville");
                          loc4.setCustomValidity("Veuillez choisir une ville");
                          loc5.setCustomValidity("Veuillez choisir une ville");
                          loc6.setCustomValidity("Veuillez choisir une ville");
                          }
  function noMessage (element) { element.setCustomValidity("")}
  
  
  function validation() {
  
    if (!firstNameInput.value.match(/^[A-Za-z\é\è\ê\-][A-Za-z\é\è\ê\-]+$/) || firstNameInput.value == ' ' || firstNameInput.value == null || firstNameInput.value.length < 2) { 
      firstNameMessage();
    } else  {
      noMessage(this);
      console.log("Ok!");
      FirstNameValid = true;
      
    };
  
    if (!lastNameInput.value.match(/^[A-Za-z\é\è\ê\-][A-Za-z\é\è\ê\-]+$/) || lastNameInput.value == ' ' || lastNameInput.value == null || lastNameInput.value.length < 2) { 
      lastNameMessage();
    } else {
      noMessage(this);
      LastNameValid= true;
    }; 
  
    if (emailInput.value.match(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i)) {
      emailValid=true;
      noMessage(this);
     } else {
      emailMessage();
     };
  
     if (birthdateInput.value.match (/^[0-9]/)) {
      birthdateValid=true;
      noMessage(this);
    } else {
      birthdateMessage();
    };
  
    if (!quantityInput.value.match (/^[0-9]/)) {
      quantityMessage();
    } else {
      quantityValid=true;
      noMessage(this);
    };
  
    if (loc1.checked || loc2.checked || loc3.checked || loc4.checked || loc5.checked || loc6.checked) {
        noMessage(this);
        cityValid= true;
    } else {
        locMessage ();
    };
  
    if (condition.checked) {
      conditionValid=true;
      noMessage(this);
    } else {
      conditionValid=false;
      conditionMessage();
    };
  
    if (FirstNameValid == true && LastNameValid == true && emailValid == true && birthdateValid == true && quantityValid == true && conditionValid == true && cityValid == true) {
  Validation = true;
  
    } else {
     Validation = false;
    };
   
    document.forms["reserve"].addEventListener("submit", function(e) {
  
        if (validation.value == true) {
          e.preventDefault();
          console.log(" ok!")
        } else {
          e.preventDefault();
          console.log("Non ok!")
        }
      })
  }
  validation();
  
 