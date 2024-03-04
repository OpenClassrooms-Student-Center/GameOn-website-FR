function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// REGEX
const regexName = new RegExp("^[a-zA-Z]+$");
const regexEmail = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$");
const regexQuantity = new RegExp("^[0-9]{1,2}$");

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const first = document.getElementById('first');
const last = document.getElementById('last');
const mail = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const locations = document.querySelectorAll('input[name="location"]');
const checkbox1 = document.getElementById('checkbox1');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal event
modalClose.addEventListener("click", () => {
  modalbg.style.display = "none";
});

const form = document.querySelector('form');

// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();
    // On fait la vérification des champs
    const firstValue = first.value;
    const lastValue = last.value;
    const mailValue = mail.value;
    const quantityValue = quantity.value;
    const birthDateValue = birthDate.value;

    if (
      firstIsValid(firstValue) 
      && lastIsValid(lastValue) 
      && mailIsValid(mailValue) 
      && birthDateIsValid(birthDateValue)
      && quantityIsValid(quantityValue) 
      && radioBtnIsSelected() 
      && conditionsIsChecked()
      ) {
      console.log("Merci pour votre inscription !");
    } else {
      console.log("Le formulaire est invalide");
      return;
    }  
    
});

//fonction pour valider le prénom
const firstIsValid = (firstValue) => {
  removeErrorMessage(first);
  if (firstValue.trim().length < 2) {
    console.log('Le prénom doit contenir au moins deux caractères');
    setErrorMessage(first, 'Le prénom doit contenir au moins deux caractères');
    return false;
  } else {
    const result = regexName.test(firstValue);
     if (result) {
      removeErrorMessage(first);
      return true;
     }
     else {
      console.log('Le prénom doit contenir que des lettres');
      setErrorMessage(first, 'Le prénom doit contenir que des lettres');
      return false;
     }
  }
}
 
//fonction pour valider le nom
const lastIsValid = (lastValue) => {
  removeErrorMessage(last);
  if (lastValue.trim().length < 2) {
    console.log('Le nom doit contenir au moins deux caractères');
    setErrorMessage(last, 'Le nom doit contenir au moins deux caractères');
    return false;
  } else {
    const result = regexName.test(lastValue);
     if (result) {
      removeErrorMessage(last);
      return true;
     }
     else {
      console.log('Le nom doit contenir que des lettres');
      setErrorMessage(last, 'Le nom doit contenir que des lettres');
      return false;
     }
  }
}
// fonction de validation de mail
 const mailIsValid = (mailValue) => {
  const result = regexEmail.test(mailValue);
  if (result) {
    removeErrorMessage(mail);
    return true ;
  }
  else{
    console.log('Veuillez entrer une adresse mail valide');
    setErrorMessage(mail, 'Veuillez entrer une adresse mail valide');
    return false;
  }
 }
 // vérification de date de naissance 
 const birthDateIsValid = (birthDateValue) => {
   if( birthDateValue === "") {
    console.log('veuillez entrer votre date de naissance');
    setErrorMessage(birthDate, 'veuillez entrer votre date de naissance');
    return false;
   }
   else {
    removeErrorMessage(birthDate);
    return true ;
   }

 }

 // vérification nombre de concours
 const quantityIsValid = (quantityValue) => {
  if (regexQuantity.test(quantityValue)) {
    removeErrorMessage(quantity);
    return true;
  }
   else {
    console.log('Veuillez choisir un nombre de concours entre 0 et 99');
    setErrorMessage(quantity, 'Veuillez choisir un nombre de concours entre 0 et 99');
    return false;
   }
 }

 // vérification du button radio
 const radioBtnIsSelected = () => {
  for (let i = 0; i < locations.length; i++) {
      if (locations[i].checked) {
        removeErrorMessage(locations[locations.length - 1]);
        return true; 
        break; 
      }
  }
  console.log('Veuillez séléctionner un tournoi');
  setErrorMessage(locations[locations.length - 1], 'Veuillez séléctionner un tournoi');
  return false; 
}

// vérification de chekbox
const conditionsIsChecked =() => {
   if (checkbox1.checked){
    removeErrorMessage(checkbox1);
    return  true;
   }
   else {
    console.log('veuillez accepter les conditions générales');
    setErrorMessage(checkbox1, 'veuillez accepter les conditions générales');
    return false;
   }
}

//fonction pour ajouter des messages d'erreurs
const setErrorMessage = (element, message) => {
  element.parentElement.setAttribute('data-error-visible', 'true');
  element.parentElement.setAttribute('data-error', message);
}
//fonction pour enlever les messages d'erreurs
const removeErrorMessage = (element) => {
  element.parentElement.removeAttribute('data-error-visible');
  element.parentElement.removeAttribute('data-error');
}