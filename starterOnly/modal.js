function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// DOM Elements
const closeBtn = document.querySelector(".close");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelector(".formData");
const submitButton = document.querySelector(".btn-submit");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailAddressInput = document.getElementById("email");
const birthDateInput = document.getElementById("birthdate");
const checkBoxInput = document.forms[0].location;
const checkCondition = document.getElementById("checkbox1");

const closeModal = function(){
  modalbg.style.display="none";
};
function launchModal() {
  modalbg.style.display = "block";
}
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal)

const onSubmit = function(){
  //first name: 
  if(firstNameInput.value.length<2){
    errorFirstName.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
  }else{
    errorFirstName.innerHTML = "";
    return true;
  }

  //last name:
  if(lastNameInput.value.length<2){
    errorLastName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom de famille";
  }else{
    errorLastName.innerHTML = "";
    return true;
  }

  //email address: 
  //regular expression to match required email address format: regular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(emailAddressInput.value.match(mailFormat)){
    errorEmailAddress.innerHTML="";
    return true;
  }
  else{
    errorEmailAddress.innerHTML = "Veuillez fournir une adresse email valide";
  }

  //birthday: 
  //regular expression to match required date format: regular = /^\d{1,2}\/\d{1,2}\/\d{4}$/  or /^\d{2}\/\d{2}\/\d{4}$/;
  let dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
  if(birthDateInput.value !="" && !birthDateInput.value.match(dateFormat)){   
    errorBirthDate.innerHTML="";
    return true;
  }
  else{
    errorBirthDate.innerHTML = "Vous devez entrer votre date de naissance.";
  }
}

 //city option:
 function isChecked(){
  for(let i=0;i<checkBoxInput.length;i++){
    if(checkBoxInput[i].checked){ 
      ErrorOption.innerHTML="";
      return true;
    }else{
      ErrorOption.innerHTML="Vous devez choisir une ville."
}
  }
 //terms & condition option: 
  if(checkCondition.checked){
    ErrorCondition.innerHTML="";
    return true;
  }else{
    ErrorCondition.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions."
  }
}


formData.addEventListener("submit", onSubmit);
firstNameInput.addEventListener("submit", onSubmit);
lastNameInput.addEventListener("submit", onSubmit);
emailAddressInput.addEventListener("submit", onSubmit);
birthDateInput.addEventListener("submit", onSubmit);
submitButton.addEventListener("click", onSubmit); 