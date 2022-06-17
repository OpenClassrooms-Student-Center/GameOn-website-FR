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

// function /launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// event /launch modal 
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// function /close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// event /close modal
closeBtn.addEventListener("click", closeModal);


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
  console.log(firstName.value);
  if (regText.test(firstName.value)) {
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

// event /firstname
firstName.addEventListener('blur', function () {
  console.log(firstName.value);
  checkFirstName(firstName);
});


// function /lastName
function checkLastName(lastName) {
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

// event /lastname
lastName.addEventListener('blur', function () {
  console.log(lastName.value);
  checkLastName(lastName);
});


// function /email
function checkEmail(email) {
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

// event /email
email.addEventListener('blur', function () {
  console.log(email.value);
  checkEmail(email);
});


// function /birthDate
function checkBirthDate(birthDate) {
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
  }
};

// event /birthDate
birthDate.addEventListener('blur', function () {
  console.log(birthDate.value);
  checkBirthDate(birthDate);
});


// function /quantity

function checkQuantity(quantity) {
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
  }
};

// event /quantity
quantity.addEventListener('blur', function () {
  console.log(quantity.value);
  checkQuantity(quantity);
});


// function /radio 
for (let radioEntry of radio.entries()) {
  // check a stactic nodelist(by queryselectorALL) for checking all radio button in FOR loop
  function checkRadio() {
    console.log(radioEntry[1])
    if (radioEntry[1].checked) {
      console.log(radioEntry[1].parentNode)
      radioEntry[1].parentNode.dataset.errorVisible = false;
      console.log(radioEntry[1])
      console.log('radio OK')
      return true
    }
  }
  // new variable to show the error message if no button are selected
  let firstRadio = document.querySelector("input[name='location']")
  firstRadio.parentNode.dataset.errorVisible = true;
  firstRadio.parentNode.dataset.error = "Veuillez sélectionner un choix.";
  console.log('radio notOK')
  return false
};



// function /checkbox
function checkCheckbox() {
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

// function /submit

function validateModalSubmit() {
  // check of each function input of the form
  if (checkFirstName(firstName) && checkLastName(lastName) && checkEmail(email) &&
    checkBirthDate(birthDate) && checkQuantity(quantity) && checkRadio() && checkCheckbox()) {
    console.log('formulaire validé')
    // display none the modal
    modal.style.display = "none";
    // launch new modal
    launchModalSuccess()
  } else {
    console.log('formulaire invalidé')
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
  console.log(modalSubmit.value)
  e.preventDefault();
  validateModalSubmit();
});

// function /new modal
function launchModalSuccess() {
  // create a new modal in a variable
  let newModal = document.createElement('p');
  newModal.style.fontSize = '18px';
  newModal.style.color = 'white';
  newModal.style.fontWeight = "bold";
  newModal.style.display = 'block'
  newModal.style.textAlign = 'center'
  newModal.style.padding = "20px 40px 80px 20px"
  // show the new modal
  modalSucces.appendChild(newModal)
  newModal.textContent = "Votre inscription a été prise en compte."
};