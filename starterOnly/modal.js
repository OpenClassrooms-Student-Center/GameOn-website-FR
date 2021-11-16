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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() 
{
  modalBg.classList.add("visibleModal");
  hideHeroSection.classList.add("backModal");
  hideFooter.classList.add("backModal");
};
modalClose.addEventListener("click", closeModal); 

function closeModal() 
{
  modalBg.classList.remove("visibleModal");
  hideFooter.classList.remove("backModal");
  hideHeroSection.classList.remove("backModal");
};
//********* validation firstname ************
//getting field firstname
const textFirstname = document.getElementById("first");
//getting its parent 'formData'
const parentFirst = textFirstname.parentElement;
//listening to a change from the field firstname
textFirstname.addEventListener("input", function() {
  validateFirstname(this);
});
function validateFirstname(textFirstname) {
  //regex creation
  const regexFirstname = /^[a-zA-ZÀ-ÿ-]{2,}/g;
  //regex test on the field firstname
  const validFirstname = regexFirstname.test(textFirstname.value);
  if(textFirstname.value === "")
  {
    textFirstname.setAttribute("data-error-visible", true);
    parentFirst.removeAttribute("data-error-invalid-visible");
    parentFirst.setAttribute("data-error-empty", true);
    return false;
  }
  if(validFirstname === false) 
  {
    textFirstname.setAttribute("data-error-visible", true);
    parentFirst.setAttribute("data-error-invalid-visible", true);
    parentFirst.removeAttribute("data-error-empty");
    return false;
  }
  else
  {
    textFirstname.removeAttribute("data-error-visible");
    parentFirst.removeAttribute("data-error-invalid-visible");
    parentFirst.removeAttribute("data-error-empty");
    return true;
  }
};
//********* validation lastname ************
//getting field lastname
const textLastname = document.getElementById("last");
//getting its parent 'formData'
const parentLast = textLastname.parentElement;

//listening to a change from the field Lastname
textLastname.addEventListener("input", function() 
{
  validateLastname(this);
});
function validateLastname(textLastname) {
  //regex creation
  const regexLastname = /^[a-zA-ZÀ-ÿ-]{2,}/g;
  //regex test on the field Lastname
  const validLastname = regexLastname.test(textLastname.value);

  if(textLastname.value === "")
  {
    textLastname.setAttribute("data-error-visible", true);
    parentLast.removeAttribute("data-error-invalid-visible");
    parentLast.setAttribute("data-error-empty", true);
    return false;
  }
  if(validLastname === false) 
  {
    textLastname.setAttribute("data-error-visible", true);
    parentLast.removeAttribute("data-error-empty");
    parentLast.setAttribute("data-error-invalid-visible", true);
    return false;
  }else 
  {
    textLastname.removeAttribute("data-error-visible");
    parentLast.removeAttribute("data-error-empty");
    parentLast.removeAttribute("data-error-invalid-visible");
    return true;
  }
};
//********* validation email ************
//getting field email
const textEmail = document.getElementById("email");
//getting its parent 'formData'
const parentEmail = textEmail.parentElement;

//listening to a change from the field email
textEmail.addEventListener("input", function() {
  validateEmail(this);
});

function validateEmail(textEmail) {
  //regex creation
  const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/g;
  //regex test on the field email
  const validEmail = regexEmail.test(textEmail.value);

  if(textEmail.value === ""){
    textEmail.setAttribute("data-error-visible", true);
    parentEmail.removeAttribute("data-error-invalid-visible");
    parentEmail.setAttribute("data-error-empty", true);
    return false;
  }
  if(validEmail === false) 
  {
    textEmail.setAttribute("data-error-visible", true);
    parentEmail.setAttribute("data-error-invalid-visible", true);
    parentEmail.removeAttribute("data-error-empty");
    return false;
  }
  else
  {
    textEmail.removeAttribute("data-error-visible");
    parentEmail.removeAttribute("data-error-invalid-visible");
    parentEmail.removeAttribute("data-error-empty");
    return true;
  }
};
//********* validation birthdate ************
//getting field birthdate
const textBirthdates = document.getElementById("birthdate");
//getting its parent 'formData'
const parentBirthdates = textBirthdates.parentElement;
textBirthdates.addEventListener("input", function(){
  validateBirth(this);
});
function validateBirth (textBirthdates){
  let birthValue = textBirthdates.value;
  let birthYear = birthValue.split("-")[0];
  let now = new Date();
  let nowYear = now.getFullYear();
  let diffYear = Math.abs(nowYear - birthYear);
 
  if(birthValue === ""){
    textBirthdates.setAttribute("data-error-visible", true);
    parentBirthdates.removeAttribute("data-error-jeune-visible", true);
    parentBirthdates.removeAttribute("data-error-visible");
    parentBirthdates.setAttribute("data-error-empty", true);
    return false;
  }
  if (Number.isNaN(diffYear)) {//diffYear is Not A Number
    textBirthdates.removeAttribute("data-error-visible");
    parentBirthdates.removeAttribute("data-error-visible");
    parentBirthdates.removeAttribute("data-error-empty");
    parentBirthdates.removeAttribute("data-error-invalid-visible");
    parentBirthdates.removeAttribute("data-error-jeune-visible");
    return NaN;
  }
  if ((diffYear <= 120) && (diffYear > 5)){
    textBirthdates.removeAttribute("data-error-visible");
    parentBirthdates.removeAttribute("data-error-visible");
    parentBirthdates.removeAttribute("data-error-jeune-visible");
    parentBirthdates.removeAttribute("data-error-empty");
    parentBirthdates.removeAttribute("data-error-invalid-visible");
    return true;
  }
  else
  {
    if(diffYear < 5){
      textBirthdates.setAttribute("data-error-visible", true);
      parentBirthdates.setAttribute("data-error-jeune-visible", true);
      parentBirthdates.removeAttribute("data-error-empty");
      parentBirthdates.removeAttribute("data-error-invalid-visible");
      return false;
    }
    else
    {
      textBirthdates.setAttribute("data-error-visible", true);
      parentBirthdates.setAttribute("data-error-invalid-visible", true);
      parentBirthdates.removeAttribute("data-error-empty");
      parentBirthdates.removeAttribute("data-error-jeune-visible");
      return false;
    }
  };
};
//********* validation number of competitions ************
//getting field nombre de concours
const textConcours = document.getElementById("quantity");
//getting its parent 'formData'
const parentConcours = textConcours.parentElement;

//listening to a change from the field nombre de concours
textConcours.addEventListener("input", function() 
{
  validateCompetitions(this);
});

function validateCompetitions(textConcours) 
{
  //regex creation
  const regexConcours = /[0-9]/g;
  //regex test on the field nombre de concours
  const validConcours = regexConcours.test(textConcours.value);

  if(validConcours === false) 
  {
    textConcours.setAttribute("data-error-visible", true);
    parentConcours.setAttribute("data-error-invalid-visible", true);
    parentConcours.removeAttribute("data-error-empty");
    return false;
  }
  else
  {
    //transform a negative number into a positive
    const absConcours = Math.abs(textConcours.value);
    textConcours.value = absConcours;
    validateRadioChecked();
    textConcours.removeAttribute("data-error-visible");
    parentConcours.removeAttribute("data-error-invalid-visible");
    parentConcours.removeAttribute("data-error-empty");
    return true;
  };
};
  
//********* validation bouton radio ************
//getting field location => Array locations
const locations = document.querySelectorAll(".location");
//getting field invalid text
const validCheckVille = document.querySelector(".validation_checkbox_ville");
function validateRadioChecked(){
  //transform the string in an integer
  let resConcours = parseInt(textConcours.value, 10);
  //resConcours is Not A Number
  if (Number.isNaN(resConcours)) 
  {
    textConcours.setAttribute("data-error-visible", true);
    parentConcours.removeAttribute("data-error-invalid-visible");
    parentConcours.setAttribute("data-error-empty", true);
    return NaN;
  }
  else
  {
    if(resConcours === 0){ //resConcours = 0 so no need to check a radio
      textConcours.removeAttribute("data-error-visible"); 
      parentConcours.removeAttribute("data-error-invalid-visible");
      parentConcours.removeAttribute("data-error-empty", true);
      document.getElementById("location1").parentElement.removeAttribute("data-error-invalid-visible");
      return true;
    }
    else
    {
      document.getElementById("location1").parentElement.setAttribute("data-error-invalid-visible", true);
      //listening to a change from the radio button
      for(let i = 0; i < locations.length; i++)
      {
        if(locations[i].checked === true)
        {
          document.getElementById("location1").parentElement.removeAttribute("data-error-invalid-visible");
          return true;
        }
      }
      for(let i = 0; i < locations.length; i++)
      {
        locations[i].addEventListener("input", function() 
        {
          if(locations[i].checked === true)
          {
            document.getElementById("location1").parentElement.removeAttribute("data-error-invalid-visible");
            return true;
          }else{
            return false;
          };
        });
      };
    };  
  };
};
//********* validation terms of use ************
//getting field checkbox1
const conditions = document.getElementById("checkbox1");
//listening to a change from the button conditions d'utilisation
conditions.addEventListener("click", function(){
  selectConditions(this);
});
function selectConditions(inputconditions)
{
  if(conditions.checked === true)
  {
    document.getElementById("checkbox1").parentElement.removeAttribute("data-error-invalid-visible");
    return true;
  }
  else
  { 
    document.getElementById("checkbox1").parentElement.setAttribute("data-error-invalid-visible", true);
    return false;
  }
};
//********* validation formulaire ************
//getting field to validate the form
const formSubmit = document.querySelector(".btn-submit");
const form = document.querySelector("form");
//getting field to open thanks modal
const validText = document.querySelector(".submit_merci");
//getting field to close thanks modal
const submitClose = document.querySelector(".submited");
const submitCloseButton = document.querySelector(".merci");
// listening to a change from the validation button in the form modal
formSubmit.addEventListener("click", function(e){
  e.preventDefault();
  validate(this);
});
// listening to a change from the close button or cross in thanks modal
submitClose.addEventListener("click", function() {
  closeMerci(this);
}); 
submitCloseButton.addEventListener("click", function() 
{
  closeMerci(this);
});  

function closeMerci() 
{
  validText.classList.remove("visibleModal");
  hideFooter.classList.remove("backModal");
  hideHeroSection.classList.remove("backModal");
};
function validate(){
  const isFirstValid = validateFirstname (textFirstname);
  const isLastValid = validateLastname (textLastname);
  const isEmailValid = validateEmail(textEmail);
  const isBirthValid = validateBirth (textBirthdates);
  const isConcoursValid = validateCompetitions (textConcours);
  const isLocationValid = validateRadioChecked (locations);
  const isConditionsValid = selectConditions (conditions);
 
  if((isFirstValid) && (isLastValid) && (isEmailValid) && (isBirthValid) && (isConcoursValid) && (isLocationValid) && (isConditionsValid)){ 
    closeModal();
    form.reset();
    validText.classList.add("visibleModal");
    hideHeroSection.classList.add("backModal");
    hideFooter.classList.add("backModal");
  }else{return false;}
};



