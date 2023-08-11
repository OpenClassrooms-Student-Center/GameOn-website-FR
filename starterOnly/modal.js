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
const formDataRadios = document.querySelector(".formData--radios");
const radios = formDataRadios.querySelectorAll("input");
const emailInput = document.getElementById("email");
const regexEmail = new RegExp("^[a-z0-9._-]+@[a-z0-9-_]+\\.[a-z]{2,}$");
const regexQuantity = new RegExp("^[0-9]+$");
const checkBoxRequired = document.getElementById("checkbox1");
const checkBoxNotRequired = document.getElementById("checkbox2");
const firstnameInput = document.getElementById("first");
const lastnameInput = document.getElementById("last");
const closeModalBtn = document.querySelector('.close');
const birthDateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");

// launches modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// submits modal event
function validate(){
  event.preventDefault();
  console.log("Prénom : "+firstnameInput.value+", Validité : "+validateFirstname());
  console.log("Nom : "+lastnameInput.value+", Validité : "+validateLastname());
  console.log("Email : "+emailInput.value+", Validité : "+validateEmail());
  console.log("Date de naissance : "+birthDateInput.value+", Validité : "+validateBirthDate());
  console.log("Nombre de participation à des tournois : "+quantityInput.value+", Validité : "+validateQuantity());
  console.log("Lieu de participation souhaité : "+radioChecked()+", Validité : "+validateRadioChecked());
  console.log("Conditions générales cochées : "+checkBoxRequired.checked+", Validité : "+checkBoxRequired.checked);
  console.log("Checkbox facultative cochée : "+checkBoxNotRequired.checked);
  if (validateFirstname() && validateLastname() && validateEmail() && validateBirthDate() && validateQuantity() && validateRadioChecked() && checkBoxRequired.checked){
    removeErrors();
    console.log("TOUT EST VALIDE");
  } else {

    removeErrors();

    if(!validateFirstname()){
      errorFirstname();
    }
    if(!validateLastname()){
      errorLastname();
    }
    if(!validateEmail()){
      errorEmail();
    }
    if(!validateBirthDate()){
      errorBirthDate();
    }
    if(!validateQuantity()){
      errorQuantity();
    }
    if(!validateRadioChecked()){
      errorRadio();
    }
    if(!checkBoxRequired.checked){
      console.log('?');
      errorCheckbox();
    }
    console.log("INVALIDE");
  }
}

// close modal event
closeModalBtn.addEventListener("click", ()=>{
  closeModal();
});

// launches modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Verifies that a radio has been checked
function validateRadioChecked(){
  for (radio of radios){
    if(radio.checked){
      return true;
    }
  }
  return false;
}

// Verifies that a radio has been checked
function radioChecked(){
  for (radio of radios){
    if(radio.checked){
      return radio.value;
    }
  }
  return "Aucun radio sélectionné";
}

// Verifies that there is a number inside the quantity input
function validateQuantity(){
  return regexQuantity.test(quantityInput.value);
}

// closes modal form
function closeModal(){
  modalbg.style.display = "none";
}

// Verifies that the firstname input has something and more than 2 characters
function validateFirstname(){
  let firstname=firstnameInput.value;
  return (firstname.length>=2);
}

// Verifies that the lastname input has something and more than 2 characters
function validateLastname(){
  let lastname=lastnameInput.value;
  return (lastname.length>=2);
}

// Verifies that there is a number inside the quantity input
function validateEmail(){
  return regexEmail.test(emailInput.value);
}

// Verifies that there is a birth date
function validateBirthDate(){
  return birthDateInput.value!="";
}

// Removes error messages
function removeErrors(){
  let errors=document.querySelectorAll(".modalErrorMsg");
  errors.forEach(error => {
    error.remove();
  });
}

// Adds an error message under the firstname input
function errorFirstname(){
  if(document.getElementById("errorFirstname")==null){
    let errorMsg=document.createElement("p");
    errorMsg.setAttribute("id","errorFirstname");
    errorMsg.classList.add("modalErrorMsg");
    errorMsg.innerText="Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
    firstnameInput.parentElement.appendChild(errorMsg);
  }
}

// Adds an error message under the lastname input
function errorLastname(){
  if(document.getElementById("errorLastname")==null){
    let errorMsg=document.createElement("p");
    errorMsg.setAttribute("id","errorLastname");
    errorMsg.classList.add("modalErrorMsg");
    errorMsg.innerText="Veuillez entrer 2 caractères ou plus pour le champ du Nom.";
    lastnameInput.parentElement.appendChild(errorMsg);
  }
}

// Adds an error message under the email input
function errorEmail(){
  if(document.getElementById("errorEmail")==null){
    let errorMsg=document.createElement("p");
    errorMsg.setAttribute("id","errorEmail");
    errorMsg.classList.add("modalErrorMsg");
    errorMsg.innerText="Votre adresse mail a un mauvais format.";
    emailInput.parentElement.appendChild(errorMsg);
  }
}

// Adds an error message under the birthDate input
function errorBirthDate(){
  if(document.getElementById("errorBirthDate")==null){
    let errorMsg=document.createElement("p");
    errorMsg.setAttribute("id","errorBirthDate");
    errorMsg.classList.add("modalErrorMsg");
    errorMsg.innerText="Vous devez indiquer votre date de naissance.";
    birthDateInput.parentElement.appendChild(errorMsg);
  }
}

// Adds an error message under the quantity input
function errorQuantity(){
  if(document.getElementById("errorQuantity")==null){
    let errorMsg=document.createElement("p");
    errorMsg.setAttribute("id","errorQuantity");
    errorMsg.classList.add("modalErrorMsg");
    errorMsg.innerText="Vous devez insérer un nombre dans ce champ.";
    quantityInput.parentElement.appendChild(errorMsg);
  }
}

// Adds an error message under the quantity input
function errorRadio(){
  if(document.getElementById("errorRadio")==null){
    let errorMsg=document.createElement("p");
    errorMsg.setAttribute("id","errorRadio");
    errorMsg.classList.add("modalErrorMsg");
    errorMsg.innerText="Vous devez sélectionner une localisation.";
    formDataRadios.before(errorMsg);
  }
}

// Adds an error message under the quantity input
function errorCheckbox(){
  if(document.getElementById("errorCheckbox")==null){
    let errorMsg=document.createElement("p");
    errorMsg.setAttribute("id","errorCheckbox");
    errorMsg.classList.add("modalErrorMsg");
    errorMsg.innerText="Vous devez vérifier que vous acceptez les termes et conditions.";
    checkBoxRequired.parentElement.appendChild(errorMsg);
  }
}