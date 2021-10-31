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
const closeForm = document.querySelector(".close")
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}
// close modal 
closeForm.addEventListener("click", function(e){
    modalbg.style.display = "none";
});
// --- validation of form ---
// DOM elements for form 
const mainForm = document.getElementById("main-form");
const submitBtn = document.getElementById('submit-btn');
// stop prevent default on form sending 
submitBtn.addEventListener("click", function(e){
  e.preventDefault();
});
// Tests inputs results 
var firstNameTest;
var lastNameTest; 
var emailTest;
var ageTest; 
var numberOfTournamentTest; 
var citiesTest;
var cgvTest; 

// --- > || FORM VALIDATION functions ||
// checking function for ||FIRSTNAME INPUT && LASTNAME INPUT||
const nameValidator = inputName => {
  if (inputName.value != "" && inputName.value.length > 2 && inputName.value != null) {
    return true; 
  }   
      return false;
};
// check the value of --> || FIRSTNAME INPUT||
mainForm.first.addEventListener('change', function() {
  let testResult = nameValidator(this);
  if (!testResult) {
    firstNameTest = false;
    let errorFirstMessage = document.getElementById("errorNameMessage");
    errorFirstMessage.style.display = "flex";
  } else {
    firstNameTest = true;
    let errorFirstMessage = document.getElementById("errorNameMessage");
    errorFirstMessage.style.display = "none";
  };
});
// check the value of --> || LASTNAME INPUT||
mainForm.last.addEventListener('change', function() {
  let testResult = nameValidator(this);
  if (!testResult) {
    lastNameTest = false;
    let errorLastMessage = document.getElementById("errorLastNameMessage");
    errorLastMessage.style.display = "flex";
  } else {
    lastNameTest = true;
    let errorLastMessage = document.getElementById("errorLastNameMessage");
    errorLastMessage.style.display = "none";
  };
});
// checking function for || E-MAIL INPUT ||
const isEmailAdress = inputEmail => {
  const regExpEmail = /[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]/;
  if (regExpEmail.test(inputEmail.value)) {
    return true;
  } return false;
};
// check the value of --> || E-MAIL INPUT ||
mainForm.email.addEventListener('change', function() {
  let testResult = isEmailAdress(this);
  if (!testResult) {
    emailTest = false;
    let errorEmailMessage = document.getElementById("errorEmailMessage");
    errorEmailMessage.style.display = "flex ";
  } else {
    emailTest = true;
    let errorEmailMessage = document.getElementById("errorEmailMessage");
    errorEmailMessage.style.display = "none";
  }
});
// checking function for || BIRTHDAY INPUT || under 18 years old --> rejected 
const legalAge = () => {
  let yearOfBirth = document.getElementById('birthdate').value.split('-')[0];
  let monthOfBirth = document.getElementById('birthdate').value.split('-')[1];
  let dayOfBirth = document.getElementById('birthdate').value.split('-')[2];
  let age = 18;
  let dateToTest = new Date();
  dateToTest.setFullYear(yearOfBirth, monthOfBirth - 1, dayOfBirth);

  var currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - age);
  if ((currentDate - dateToTest) < 0 || document.getElementById('birthdate').value == "" ) {
    return true; 
  } return false;
};
// check the value of --> || BIRTHDAY INPUT ||
mainForm.birthdate.addEventListener('change', function () {
  let testResult = legalAge();
  legalAge();
  if (testResult) {
    ageTest = true; 
    let errorAgeMessage = document.getElementById('errorAgeMessage');
    errorAgeMessage.style.display = 'flex';
  } else {
    ageTest= false;
    let errorAgeMessage = document.getElementById('errorAgeMessage');
    errorAgeMessage.style.display = 'none';
  }
});
// function to check the value of || NUMBER of TOURNAMENT INPUT ||
mainForm.quantity.addEventListener('change', function() {
  let quantityOfTournament = this.value;
  if (isNaN(quantityOfTournament) || quantityOfTournament < 0 || quantityOfTournament > 99 || quantityOfTournament == "") {
    numberOfTournamentTest= false;
    let errorNbTournament = document.getElementById('errorNbOfTournamentMessage');
    errorNbTournament.style.display = 'flex';
  } else {
    numberOfTournamentTest= true;
    let errorNbTournament = document.getElementById('errorNbOfTournamentMessage');
    errorNbTournament.style.display = 'none';
  }
});
// function to check if one checkbox is checked in the value of || CITIES INPUT ||&&||CVG INPUT||
// at list on radio button is checked 
function atLeastOneCheck(input) {
  for (var i = 0; i < input.length ; i++){
    if (input[i].checked){
      return true;
    }
  } return false;  
}
// verify is on citie at least is checked 
var isCheckedArray = document.getElementsByName('location');
  let testResult = atLeastOneCheck(isCheckedArray);
if (!testResult) {
  citiesTest = false;
  let errorCitiesMessage = document.getElementById('errorCitiesMessage');
  errorCitiesMessage.style.display = 'flex';
} else {
  citiesTest = true;
  let errorCitiesMessage = document.getElementById('errorCitiesMessage');
  errorCitiesMessage.style.display = 'none';
}
// function to check in input is check
function isChecked(cvgInput) {
  if (cvgInput.checked){
    return true;
  } return false;
}
// function to validate if CVG are OK for the user
const cvgBtn = document.getElementById('checkbox1');

cvgBtn.addEventListener('change', function() {
  let testResult = isChecked(cvgBtn);
  if (!testResult) {
    cgvTest = false;
    let errorCvgMessage = document.getElementById('errorCvgMessage');
    errorCvgMessage.style.display = 'flex';
  } else {
    cgvTest = true;
    let errorCvgMessage = document.getElementById('errorCvgMessage');
    errorCvgMessage.style.display = 'none';
  }
})

