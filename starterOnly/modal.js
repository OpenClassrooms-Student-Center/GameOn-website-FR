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
  const regText = /[a-zA-ZÀ-ÿ]/;
  console.log(firstName.value);
  if (regText.test(firstName.value) && firstName.value.length >= 2){
    firstName.parentNode.dataset.errorVisible = false;
    console.log('true')
    return true
  } else {
    firstName.parentNode.dataset.error = "Le prénom doit avoir 2 caractères ou plus";
    firstName.parentNode.dataset.errorVisible = true;
    console.log('false')
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
  const regText = /[a-zA-ZÀ-ÿ]/;
  if (regText.test(lastName.value) && lastName.value.length >= 2) {
    lastName.parentNode.dataset.errorVisible = false;
    return true
  } else {
    lastName.parentNode.dataset.error = "Le nom doit avoir 2 caractères ou plus";
    lastName.parentNode.dataset.errorVisible = true;
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
    return true
  } else {
    email.parentNode.dataset.error = "Veuillez entrer un mail valide";
    email.parentNode.dataset.errorVisible = true;
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
  if (birthDate.value == "") {
    birthDate.parentNode.dataset.error = "Veuillez saisir votre date de naissance";
    birthDate.parentNode.dataset.errorVisible = true;
    return false 
  } else {
    birthDate.parentNode.dataset.errorVisible = false;
    return true
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
  if (regNumber.test(quantity.value) && (quantity.value === "" || parseInt(quantity.value) <= 20)) {
    quantity.parentNode.dataset.errorVisible = false;
    return true
  } else {
    quantity.parentNode.dataset.error = "Veuillez saisir un nombre";
    quantity.parentNode.dataset.errorVisible = true;
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
function checkRadio (radio) {
  console.log('coucou');
  for (i = 0; i < radio.length; i++) {
  if (radio[i].checked) {
    radio.parentNode.dataset.errorVisible = false;
    return true
  } else {
    radio.parentNode.dataset.error = "Veuillez cocher une ville";
    radio.parentNode.dataset.errorVisible = true;
    return false 
  }
}};

// call event /radio
// radio.addEventListener('click', function() {
//   
//   checkRadio(radio);
// });

// declaration /checkbox
// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.

const checkbox = document.querySelector("checkbox1");

// function check /checkbox
function checkCheckbox (checkbox) {
  if (checkbox.checked) {
    checkbox.parentNode.dataset.errorVisible = true;
    return false 
  } else {
    checkbox.parentNode.dataset.error = "Veuillez cocher la case des conditions d'utilisations";
    checkbox.parentNode.dataset.errorVisible = false;
    return true
  }
};

// call event /checkbox
// checkbox.addEventListener('click', function() {
//   console.log(checkbox.value);
//   checkCheckbox(checkbox);
//  });


// VALIDATION

// declaration /submit
const modalSubmit = document.querySelector(".btn-submit");  //modal submit button

// function check /submit
function validateModalSubmit () {
  console.log('test1')
  if (checkFirstName(firstName) && checkLastName(lastName) 
  && checkEmail(email) && checkBirthDate(birthDate) 
  && checkQuantity(quantity) && checkRadio(radio) && checkCheckbox(checkbox)) {
    console.log('validé')
  modalSuccess ()
  } else {
    // afficher error visible des inputs qui sont false
    modalSuccess (supprModal)
  }
};

// call event /submit
modalSubmit.addEventListener('click', function(e) {
  console.log('coucou bouton')
  e.preventDefault();
  validateModalSubmit();
});

// declaration /modal success
const supprModal = document.querySelector("modal-body");

// function check /modal success
function modalSuccess (supprModal) {
  supprModal.removeChild(child);
  //ajouter le texte "Votre inscription a été prise en compte" en white et bold
  // réduire la hauteur de la modale
  // garder le bouton submit et changer le texte "c'est parti" par "fermer"
};

// call event / modal success

