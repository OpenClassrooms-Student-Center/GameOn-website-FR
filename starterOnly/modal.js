function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM ELEMENTS
const modalBtn = document.querySelectorAll(".modal-btn"); //open modal button
const modalbg = document.querySelector(".bground"); //modal background
const closeBtn = document.querySelector(".close"); //close btn modal
const firstName = document.querySelector("#first"); //input firstname
const lastName = document.querySelector("#last"); //input lastname
const email = document.querySelector("#email"); //input email
const birthDate = document.querySelector("#birthdate"); //input birthdate
const quantity = document.querySelector("#quantity"); //input quantity
const radio = document.querySelectorAll("input[name='location']"); //radio button
const checkbox1 = document.querySelector("#checkbox1"); //checkbox button
const modalSucces = document.querySelector(".content") //new modal 
const modalSubmit = document.querySelector(".btn-submit"); //modal submit button
const modal = document.querySelector(".form"); //modal form

// MODAL EVENTS

// event /launch modal 
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// function /launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// event /close modal
closeBtn.addEventListener("click", closeModal);

// function /close modal form
function closeModal() {
  modalbg.style.display = "none";
}


// INPUTS CHECKINS

// EXAMPLE JS LOGICAL BUILDING
// ------------FUNCTION
// function checkInput (input variable choosing above) {
// const regEx = min 2 letters or max 99 choices, ...
// console.log(variable.value) > show the value of variable
// IF (regEx.text of value of variable is OK) {
// don't show the "errorVisible" defined in css (=false)
// console.log(variable is OK) > show that variable is OK
// send true for the return and close the function
// } ELSE { show the "errorVisible" css and add the red error text
// console.log(variable is not OK) - show that variable is not OK
// send false for the return and close the function }

// ------------EVENT ON FUNCTION
// variable.addEventListener('blur', function () {
// console.log(variable.value);
// function checkInput(input variable choosing above)});


// function /firstname
function checkFirstName(firstName) {
  const regText = /[a-zA-ZÀ-ÿ]{2,}/;
  if (regText.test(firstName.value)) {
    firstName.parentNode.dataset.errorVisible = false;
    return true
  } else {
    firstName.parentNode.dataset.error = "Le prénom doit avoir 2 caractères ou plus";
    firstName.parentNode.dataset.errorVisible = true;
    return false
  }
};

// event /firstname
firstName.addEventListener('blur', function () {
  checkFirstName(firstName);
});


// function /lastName
function checkLastName(lastName) {
  const regText = /[a-zA-ZÀ-ÿ]{2,}/;
  if (regText.test(lastName.value)) {
    lastName.parentNode.dataset.errorVisible = false;
    return true
  } else {
    lastName.parentNode.dataset.error = "Le nom doit avoir 2 caractères ou plus";
    lastName.parentNode.dataset.errorVisible = true;
    return false
  }
};

// event /lastname
lastName.addEventListener('blur', function () {
  checkLastName(lastName);
});


// function /email
function checkEmail(email) {
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

// event /email
email.addEventListener('blur', function () {
  checkEmail(email);
});


// function /birthDate
function checkBirthDate(birthDate) {
  const regDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  if (regDate.test(birthDate.value)) {
    birthDate.parentNode.dataset.errorVisible = false;
    return true
  } else {
    birthDate.parentNode.dataset.error = "Veuillez saisir votre date de naissance";
    birthDate.parentNode.dataset.errorVisible = true;
    return false
  }
};

// event /birthDate
birthDate.addEventListener('blur', function () {
  checkBirthDate(birthDate);
});


// function /quantity
function checkQuantity(quantity) {
  const regNumber = /^[0-9]$/;
  if (regNumber.test(quantity.value) && (quantity.value === "" || parseInt(quantity.value) <= 99)) {
    quantity.parentNode.dataset.errorVisible = false;
    return true
  } else {
    quantity.parentNode.dataset.error = "Veuillez saisir un nombre";
    quantity.parentNode.dataset.errorVisible = true;
    return false
  }
};

// event /quantity
quantity.addEventListener('blur', function () {
  checkQuantity(quantity);
});


// function /radio 
// check a stactic nodelist(by queryselectorALL) for checking all radio button in FOR loop
function checkRadio() {
  for (let radioEntry of radio.entries()) {
    if (radioEntry[1].checked) {
      radioEntry[1].parentNode.dataset.errorVisible = false;
      return true
    }
  }
  let firstRadio = document.querySelector("input[name='location']")
  // new variable to show the error message if no button are selected
  firstRadio.parentNode.dataset.errorVisible = true;
  firstRadio.parentNode.dataset.error = "Veuillez sélectionner un choix";
  return false
};


// function /checkbox
function checkCheckbox() {
  if (checkbox1.checked) {
    // let errorCheck = document.querySelector('.errorCheck')
    // errorCheck.parentNode.dataset.errorVisible = false;
    return true
  } else {
    // errorCheck.parentNode.dataset.errorVisible = true;
    // errorCheck.parentNode.dataset.error = "Veuillez cocher la case des conditions d'utilisations";

    let errorCheck = document.querySelector(".errorCheck")
    errorCheck.textContent = "Veuillez cocher la case des conditions d'utilisations";
    errorCheck.style.color = '#e54858';
    errorCheck.style.fontSize = '0.4em';
    errorCheck.style.textAlign = 'left';
    errorCheck.style.display = 'block';
    errorCheck.style.marginBottom = '-20px';
    return false
  }
};

// VALIDATION

// function /submit
function validateModalSubmit() {
  // check of each function input of the form
  if (checkFirstName(firstName) && checkLastName(lastName) && checkEmail(email) &&
    checkBirthDate(birthDate) && checkQuantity(quantity) && checkRadio() && checkCheckbox()) {
    // display none the modal
    modal.style.display = "none";
    // launch new modal
    launchModalSuccess()
  } else {
    // else show all errorVisible of each else functions
    checkFirstName(firstName);
    checkLastName(lastName);
    checkEmail(email);
    checkBirthDate(birthDate);
    checkQuantity(quantity);
    checkRadio();
    checkCheckbox();
  }
};

// event /submit
modalSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  validateModalSubmit();
});

// function /new modal
function launchModalSuccess() {
  // create a new modal in a variable
  let newModal = document.createElement('p');
  newModal.style.height = '600px';
  newModal.style.fontSize = '30px';
  newModal.style.color = 'white';
  newModal.style.fontWeight = "100";
  newModal.style.display = 'block';
  newModal.style.textAlign = 'center';
  newModal.style.padding = "250px 136px 0 136px";
  // show the new modal
  modalSucces.appendChild(newModal)
  newModal.textContent = "Merci pour votre inscription"
  // button 
  let buttonBack = document.createElement('div');
  buttonBack.className = 'button btn-submit';
  buttonBack.textContent = "Fermer";
  buttonBack.style.width = "40%";
  buttonBack.style.fontWeight = "100";
  buttonBack.style.marginBottom = "20px";
  modalSucces.appendChild(buttonBack)
  buttonBack.addEventListener("click", function () {
    modalbg.style.display = "none";
  })
};