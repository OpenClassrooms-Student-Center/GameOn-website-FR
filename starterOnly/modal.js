

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
//je cible le bouton de fermeture de la modale
const modalBtnClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Ajout d'un évènement au click sur le bouton close et appel de la fonction closeModal
modalBtnClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

const form = document.getElementById('myForm');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const mail = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const btnRadio = document.querySelectorAll('input[type=radio]');
const checked = document.getElementById('Checked');

const mailValid = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
const quantityValid = /^[1-9]$/;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  validate();
});

const setError = (element, message) => {
  const formData = element.parentElement;
  const errorDisplay = formData.querySelector('.erreur');

  errorDisplay.innerHTML = message;
  formData.classList.add('erreurMessage');
  formData.classList.remove('success');
}
const setSuccess = element => {
  const formData = element.parentElement;
  const errorDisplay = formData.querySelector('.erreur');

  errorDisplay.innerText = "";
  formData.classList.add('success');
  formData.classList.remove('erreurMessage');
}



const validate = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const mailValue = mail.value.trim();
  const birthdateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();
  const btnRadioValue = btnRadio.value;
  


  if(firstNameValue == "") {
    setError(firstName, 'Le prénom est requis');
  } else if (firstNameValue.length < 2) {
    setError(firstName, "Le prénom doit contenir au moins 2 caractères.");
  } else {
    setSuccess(firstName);
  }
  if(lastNameValue == "") {
    setError(lastName, 'Le nom est requis');
  } else if (lastNameValue.length < 2) {
    setError(lastName, "Le nom doit contenir au moins 2 caractères.");
  } else {
    setSuccess(lastName);
  }
  if(mailValue == "") {
    setError(mail, 'L\'adresse email est requise');
  } else if (mailValid.test(mailValue) == false) {
    setError(mail, "Votre adresse mail n\'a pas le bon format.")
  } else {
    setSuccess(mail);
  }
  if(birthdateValue == "") {
    setError(birthdate, 'Veuillez renseigner ce champ.');
  } else {
    setSuccess(birthdate);
  }
  if(quantityValue == "") {
    setError(quantity, 'Veuillez saisir un chiffre');
  } else {
    setSuccess(quantity);
  }
  checkedTrue();
}

const checkedTrue = () => {
  const btnRadio = document.querySelectorAll('input[type=radio]');
  let isFormValid = false;

  for(let i = 0; i < btnRadio.length; i++) {
    if(btnRadio[i].checked) {
      isFormValid = true;
      break;
    }
  }

  if(isFormValid) {
    setSuccess(checked);
  } else {
    setError(checked, "Veuillez sélectionner au moins 1 évènement")
  }
}
