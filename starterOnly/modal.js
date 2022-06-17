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
const spanClose = document.querySelector("span.close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
spanClose.addEventListener("click", closeModal);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
});

// validate modal form
function validate() {
  var inputFirstName = document.getElementById('first');
  var inputLastName = document.getElementById('last');
  var inputEmail = document.getElementById('email');
  var inputBirthdate = document.getElementById('birthdate');
  var inputQuantity = document.getElementById('quantity');
  var inputQuantityz = document.getElementById('quantityz');
  
  return alert("Inscription réussie !")
}

// helper function to set attributes
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

// add attributes on modal form fields
document.getElementById('first').setAttribute('required', 'required');
setAttributes(document.getElementById('last'), {"required": "required", "minlength": "2"});
document.getElementById('email').setAttribute('required', 'required');
document.getElementById('location1').setAttribute('checked', 'checked');
document.getElementById('checkbox1').setAttribute('required', 'required');

 


