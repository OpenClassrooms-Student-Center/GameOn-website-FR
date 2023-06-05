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
const closeModal = document.querySelector(".close");

//form elements
const loginForm = document.querySelector(".form");
//let quantityForm = document.getElementById("quantity");

// Définition de l'expression régulière pour l'email
const emailRegex = /^[a-z0-9-_]+@[a-z]+\.[a-z]+$/;
//const location = document.querySelector(".checkbox-input");
const conditionsCheckbox = document.querySelector(".checkbox2-label")

//définition regex pour nom et prénom
const regexLettres = /^[a-zA-Z]+$/; // Expression régulière pour n'accepter que des lettres

// ajout validation ou messages d'erreur
const borderBox = document.querySelector(".text-control")



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



//close modal event

closeModal.addEventListener("click", closeModalWindow)


// close modal form


function closeModalWindow() {
  modalbg.style.display = "none";
  const confirmCloseModal = document.querySelector('.container-confirmation');
  if(confirmCloseModal){
    confirmCloseModal.remove();
    loginForm.style.display = "block"
  }
}

 
//prevent submit event & name validator
loginForm.addEventListener('submit', (event)=> {
  event.preventDefault(); //empêche l'envoi du formulaire par défaut
  console.log(event.target.elements);
  const {first, last, email, quantity, birthdate, location, checkbox1} = event.target.elements; // permet de sélectionner tous les éléments qui concernent firstname et lastname, aucun autre, c'est la destructuration
  const errorOnFirstnameAlreadyExist = document.querySelector("#first_error"); // va permettre la non répétition du texte d'erreur
  let hasErrorOnForm = false; // condition générale qui permet que le formulaire ne s'envoie pas s'il y a un true quelque part
  if (!lengthValidator(first.value, 2)) { // "si la fonction lengthvalidator n'est pas true (donc si firstnameForm plus petit que 2)"
    hasErrorOnForm = true; 
    first.classList.add('text-control--red'); //ajoute la classe text-control--red à la balise, sans l'utilisation de style inline 
    //formData.insertAfter (pElement);
    if (!errorOnFirstnameAlreadyExist) { //s'il y a une erreur et pas encore de message d'erreur
      const errorMessage = createErrorElement(first.id, "Veuillez entrer 2 caractères ou plus pour le champ du prénom"); //création du message d'erreur
      const containerInputFirstname = document.querySelector("#first"); //on déclare là où sera le message d'erreur
      containerInputFirstname.parentElement.appendChild(errorMessage);
    }
    
  }
  else { //s'il n'y a aucune erreur
   if(errorOnFirstnameAlreadyExist) { //s'il y a déjà ou pas de message d'erreur...
    errorOnFirstnameAlreadyExist.remove(); //alors on retire et on s'arrête là
   }
   first.classList.remove('text-control--red'); //on enlève le style cadre rouge d'indication d'erreur
  }

  


  const errorOnLastNameAlreadyExist = document.querySelector('#last_error');

  if (!lengthValidator(last.value, 2)) {
    hasErrorOnForm = true; 
    last.classList.add('text-control--red');
    if (!errorOnLastNameAlreadyExist) {
      const errorMessage = createErrorElement(last.id, "Veuillez entrer 2 caractères ou plus pour le champ du nom");
      const containerInputLastname = document.querySelector("#last");
      containerInputLastname.parentElement.appendChild(errorMessage);
    }
  }
  else {
    if(errorOnLastNameAlreadyExist) {
      errorOnLastNameAlreadyExist.remove();
    }
    
    last.classList.remove('text-control--red');
  }



  const errorOnEmailAlreadyexist = document.querySelector('#email_error');
    if (!emailRegex.test(email.value)) {
      
      // Si l'email n'est pas valide, affichage d'un message d'erreur
      hasErrorOnForm = true;
      email.classList.add('text-control--red');
     if (!errorOnEmailAlreadyexist) {
      const errorMessage = createErrorElement(email.id, "L'adresse email est invalide"); //création du message d'erreur
      const containerInputEmail = document.querySelector("#email"); //on déclare là où sera le message d'erreur
      containerInputEmail.parentElement.appendChild(errorMessage);
     }
    }
    
    else {
      if(errorOnEmailAlreadyexist) {
        errorOnEmailAlreadyexist.remove();
      }
       
      email.classList.remove('text-control--red');
    }
    



    const errorOnQuantityAlreadyExist = document.querySelector('#quantity_error');
      if (!validateQuantity(quantity.value)) {
        hasErrorOnForm = true; 
        quantity.classList.add('text-control--red');
        if (!errorOnQuantityAlreadyExist) {
          const errorMessage = createErrorElement(quantity.id, "Veuillez saisir une valeur numérique");
          const containerInputQuantity = document.querySelector('#quantity');
          containerInputQuantity.parentElement.appendChild(errorMessage);
        }
      }
      
      else {
       
        if(errorOnQuantityAlreadyExist) {
          errorOnQuantityAlreadyExist.remove();
        }
        
        quantity.classList.remove('text-control--red');
      }
    

    const errorOnBirthdateAlreadyExist = document.querySelector('#birthdate_error')
    if (birthdate.value === '') {
      hasErrorOnForm = true;
      birthdate.classList.add('text-control--red');
      if (!errorOnBirthdateAlreadyExist) {
        const errorMessage = createErrorElement(birthdate.id, "Vous devez entrer votre date de naissance.");
        const containerInputBirthdate = document.querySelector('#birthdate');
        containerInputBirthdate.parentElement.appendChild(errorMessage);
      }
    }
    else {
      if(errorOnBirthdateAlreadyExist) {
        errorOnBirthdateAlreadyExist.remove();
      }
      
      birthdate.classList.remove('text-control--red');
    }
    

  let countOptionChecked = 0;
  for (let i = 0; i < location.length; i++){
    
    if (location[i].checked){
      countOptionChecked++;
    }
  }
  
  const errorRadioButtonAlreadyExist = document.querySelector('#location_error')
  if (countOptionChecked === 0){
    hasErrorOnForm = true;
    if (!errorRadioButtonAlreadyExist) {
      const errorMessage = createErrorElement('location', "Vous devez choisir une option.");
      const containerInputCheckbox = document.querySelector('#location1')
      containerInputCheckbox.parentElement.appendChild(errorMessage);
    } 
  }else {
    if(errorRadioButtonAlreadyExist) {
      errorRadioButtonAlreadyExist.remove();
    }
      
    
  }
    
  const errorRequiredButtonAlreadyExist = document.querySelector('#checkbox1_error')
  if (!checkbox1.checked) {
    hasErrorOnForm = true;
    if (!errorRequiredButtonAlreadyExist) {
      const errorMessage = createErrorElement('checkbox1', "Vous devez vérifier que vous acceptez les termes et conditions.");
      const containerInputRequiredCheckbox = document.querySelector('#checkbox1');
      containerInputRequiredCheckbox.parentElement.appendChild(errorMessage);
    }
  }else {
    
    if(errorRequiredButtonAlreadyExist) {
      errorRequiredButtonAlreadyExist.remove();
    }
  }






  if(!hasErrorOnForm) {
    
    loginForm.style.display = "none";
    const divConfirm = document.createElement("div");
    divConfirm.classList.add('container-confirmation');
    const confirmMessage = document.createElement("p");
    confirmMessage.innerText = 'Merci pour votre participation';
    const closeModalAfterConfirm = document.createElement("button");
    closeModalAfterConfirm.innerText = 'Fermer';
    closeModalAfterConfirm.classList.add('btn-submit');
    closeModalAfterConfirm.addEventListener("click", closeModalWindow)
    const modalBody = document.querySelector('.modal-body');
    divConfirm.appendChild(confirmMessage);
    divConfirm.appendChild(closeModalAfterConfirm);
    modalBody.appendChild(divConfirm);
    loginForm.reset();
  }

  


});

const lengthValidator = (string, length) => {
  return string.length > length;
}

const createErrorElement = (id, errorMessage) => { 
  const pElement = document.createElement("p");
  pElement.setAttribute("id",id + "_error");
  pElement.innerText = errorMessage;
  pElement.classList.add('red-text');

  return pElement;
}

//formData.insertAfter (pElement)




//fonction pour vérification de la saisie d'une valeur numérique

 
    const validateQuantity = (quantity) => {
      return parseInt(quantity) >= 0;
    }

    
  
  //vérification de la sélection d'un bouton radio 
 
  
  
 
  
const submitButton = document.querySelector(".btn-submit");
  //le formulaire est validée 
  /*function validForm() {
    if(hasErrorOnForm = false) {
      form.style.display = "none";
      const confirmMessage = document.createElement("p");
      confirmMessage.innerText('Merci pour votre participation');
      const closeModalAfterConfirm = document.createElement("button");
      closeModalAfterConfirm.innerText('Fermer');
      closeModalAfterConfirm.classList.add('.btn-submit');
    }
  }


submitButton.addEventListener("click", validForm);*/