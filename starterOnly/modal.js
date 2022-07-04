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
let inputFirstName = document.getElementById('first');
const inputLastName = document.getElementById('last');
const inputEmail = document.getElementById('email');
const inputBirthdate = new Date (document.getElementById('birthdate').value);
const inputQuantity = document.getElementById('quantity');
const checkboxConditions = document.getElementById('checkbox1');
const spanClose = document.querySelector("span.close");

// Variables usefull
let chosenLocation = "";
const len = document.getElementsByName('location').length;
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let currentYear = new Date().getFullYear();


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() 
{
  modalbg.style.display = "none";
  document.getElementById('myForm').reset();
}

// Close Modal event
spanClose.addEventListener("click", closeModal);

//Prevent submit action

document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
})


function validate() 
{  
  
  // First name validation
    if (inputFirstName.value === "" || inputFirstName.value.length < 2)
    {
           
      
    } else {
      return false;
    }

  // Last name validation
    if (inputLastName.value === "" || inputLastName.length < 2)
    {
      
      
    } else {
      return false;
    }

  // Email Validation
    if (!inputEmail.value.match(validRegex))
    {
      
      
    } else {
      return false;
    }

  // Birthdate validation
    
    if (currentYear-120 > new Date (document.getElementById('birthdate').value).getFullYear() || document.getElementById('birthdate').value === '')
    {
        
      
    } else {
      return false;
    }
    
    if (currentYear-13 < new Date (document.getElementById('birthdate').value).getFullYear())
    {
      
      
    } else {
      return false;
    }
    
  // Quantity validation
    if (inputQuantity.value === "" || inputQuantity.value < 0 || inputQuantity.value > 10)
    {
      
      
    } else {
      return false;
    }



  // Localisation validation
    for (i = 0; i < len; i++) {
        if (document.getElementsByName('location')[i].checked) {
            chosenLocation = document.getElementsByName('location')[i].value
        }
    }
    if (chosenLocation == "") {
           
       
    } else {
      return false;
    }

  //Conditions validation
    if (checkboxConditions.checked === false)
    {
      
    } else {
       return false;
    }
    
  //VALIDATION OK
    
    return true;

}