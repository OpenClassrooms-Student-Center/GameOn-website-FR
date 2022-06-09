function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM ELEMENTS
const modalBtn = document.querySelectorAll(".modal-btn");   //open modal button
const modalbg = document.querySelector(".bground");         //modal
const closeBtn = document.querySelector(".close");        //close btn modal


// LAUNCH FORM

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// CLOSE FORM

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close modal event
closeBtn.addEventListener("click", closeModal);


// INPUTS

// declaration /firstName
const firstName = document.querySelector("#first");

// function check /firstname
function checkFirstName (firstName) {
  const regText = /[a-zA-ZÀ-ÿ]{2,}/;
  console.log(firstName.value);
  if (regText.test(firstName.value)){
    firstName.parentNode.dataset.errorVisible = false;
    console.log('firstName OK')
    return true
  } else {
    firstName.parentNode.dataset.error = "Le prénom doit avoir 2 caractères ou plus";
    firstName.parentNode.dataset.errorVisible = true;
    console.log('firstName notOK')
    return false
  }
};

// call event /firstname
firstName.addEventListener('blur', function() {
  checkFirstName(firstName);
  });


// declaration /lastName
const lastName = document.querySelector("#last");

// function check /lastName
function checkLastName (lastName) {
  const regText = /[a-zA-ZÀ-ÿ]{2,}/;
  if (regText.test(lastName.value)) {
    lastName.parentNode.dataset.errorVisible = false;
    console.log('lastName OK')
    return true
  } else {
    lastName.parentNode.dataset.error = "Le nom doit avoir 2 caractères ou plus";
    lastName.parentNode.dataset.errorVisible = true;
    console.log('lastName notOK')
    return false
  }
};

// call event /lastname
lastName.addEventListener('blur', function() {
  console.log(lastName.value.length);
  checkLastName(lastName);
});


// declaration /email
const email = document.querySelector("#email");

// function check /email
function checkEmail (email) {
  const regEmail = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
  if (regEmail.test(email.value)) {
    email.parentNode.dataset.errorVisible = false;
    console.log('email OK')
    return true
  } else {
    email.parentNode.dataset.error = "Veuillez entrer un mail valide";
    email.parentNode.dataset.errorVisible = true;
    console.log('email notOK')
    return false
  }
};

// call event /email
email.addEventListener('blur', function() {
  console.log(email.value);
  checkEmail(email);
});

// declaration /birthDate
const birthDate = document.querySelector("#birthdate");


// function check /birthDate
function checkBirthDate (birthDate) {
  const regDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  if (regDate.test(birthDate.value)) {
    birthDate.parentNode.dataset.errorVisible = false;
    console.log('birthDate OK')
    return true
  } else {
    birthDate.parentNode.dataset.error = "Veuillez saisir votre date de naissance";
    birthDate.parentNode.dataset.errorVisible = true;
    console.log('birthDate notOK')
    return false
  }};

 // call event /birthDate
 birthDate.addEventListener('blur', function() {
  console.log(birthDate.value);
  checkBirthDate(birthDate);
 });


// declaration /quantity
// (4) Pour le nombre de concours, une valeur numérique est saisie.
const quantity = document.querySelector("#quantity");

// function check /quantity

function checkQuantity (quantity) {
  const regNumber = /^[0-9]$/;
  if (regNumber.test(quantity.value) && (quantity.value === "" || parseInt(quantity.value) <= 99)) {
    quantity.parentNode.dataset.errorVisible = false;
    console.log('quantity OK')
    return true
  } else {
    quantity.parentNode.dataset.error = "Veuillez saisir un nombre";
    quantity.parentNode.dataset.errorVisible = true;
    console.log('quantity notOK')
    return false 
  }};

// call event /quantity
  quantity.addEventListener('blur', function() {
    console.log(quantity.value);
    checkQuantity(quantity);
  });


// declaration /radio
// (5) Un bouton radio est sélectionné.
const radio = document.querySelectorAll("input[name='location']");

// function check /radio
function checkRadio () {
  for (let radioEntry of radio.entries()) {
    console.log(radioEntry[1])
    if (radioEntry[1].checked) {
      console.log(radioEntry[1].parentNode)
      radioEntry[1].parentNode.dataset.errorVisible = false;
      console.log(radioEntry[1])
      console.log('radio OK')
      return true 
    }
  }
  let firstRadio = document.querySelector("input[name='location']")
  firstRadio.parentNode.dataset.errorVisible = true;
  firstRadio.parentNode.dataset.error = "Veuillez sélectionner un choix.";
  console.log('radio notOK')
  return false
};
  
// declaration /checkbox
// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.

const checkbox1 = document.querySelector("#checkbox1");

// function check /checkbox
function checkCheckbox (){
  console.log(checkbox1);
  if (checkbox1.checked) {
    checkbox1.parentNode.dataset.errorVisible = false;
    console.log('checkbox1 OK')
    return true 
  } else {
    checkbox1.parentNode.dataset.errorVisible = true;
    checkbox1.parentNode.dataset.error = "Veuillez cocher la case des conditions d'utilisations";
    console.log('checkbox1 notOK')
    return false
 }
};

// VALIDATION

// declaration /submit
const modalSubmit = document.querySelector(".btn-submit");  //modal submit button
const modal = document.querySelector(".form");

// function check /submit

function validateModalSubmit () {
  if (checkFirstName(firstName) && checkLastName(lastName) && checkEmail(email) 
  && checkBirthDate(birthDate) && checkQuantity(quantity) && checkRadio() && checkCheckbox()) {
    console.log('formulaire validé')
    modal.style.display = "none";
    launchModalSuccess ()
  } else {
    console.log('formulaire invalidé')
    // afficher tous les else des fonctions en même temps
  }
};

// call event /submit
modalSubmit.addEventListener('click', function(e) {
  console.log(modalSubmit.value)
  e.preventDefault();
  validateModalSubmit();
});

// declaration /modal success
const modalSucces = document.querySelector(".content")

// function check /modal success
function launchModalSuccess () {
  // créer une nouvelle modale
  let newModal = document.createElement('p');
  newModal.style.fontSize = '18px';
  newModal.style.color = 'white';
  newModal.style.fontWeight = "bold";
  newModal.style.display = 'block'
  newModal.style.textAlign = 'center'
  newModal.style.padding = "20px 40px 80px 20px"
  modalSucces.appendChild(newModal)
  //ajouter le texte "Votre inscription a été prise en compte" en white et bold
  newModal.textContent = "Votre inscription a été prise en compte."
};