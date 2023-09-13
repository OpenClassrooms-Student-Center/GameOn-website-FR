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
const closeForm = document.querySelector(".close");
const modalBgContent = document.querySelector(".content");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeForm.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalBgContent.classList.remove("closed");
}


// close modal form
function closeModal() {

  modalBgContent.classList.add("closed");

  setTimeout(() => {
  modalbg.style.display = "none";
  }, 800);

}


// Formulaire

// Input du formulaire
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");


// Créer un message d'erreur pour les inputs du formulaire

// first erreur
let errorFirst = document.createElement('span');
errorFirst.classList.add("error");

// last erreur
let errorLast = document.createElement('span');
errorLast.classList.add("error");

//
first.addEventListener('input', function(event){  
  let firstValue = event.target.value;   

    if(firstValue.length < 2) {  
      first.parentElement.appendChild(errorFirst)    
      errorFirst.innerHTML = "Le prénom doit contenir un minimum de 2 caractères.";
    }
})

//
last.addEventListener('input', function(event){  
  let firstValue = event.target.value;   

    if(firstValue.length < 2) {  
      last.parentElement.appendChild(errorLast)    
      errorLast.innerHTML = "Le nom doit contenir un minimum de 2 caractères.";
    }
})