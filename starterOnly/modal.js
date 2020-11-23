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
function launchModal() {
  modalbg.style.display = "block";
}


/****************** error for prénom ***************/

let myForme = document.getElementById ('formData'); 


myForme.addEventListener('submit' , function(e){  
  
  let prenom = document.getElementById ('first'); 
  if (prenom.value.trim() == ""){
   

  let myError = document.getElementById ('error') ;
  myError.innerHTML = "Veuillez entrer votre prénom.";
  myError.style.color = 'red';
  e.preventDefault();

  }
});
/****************************************************/

/****************** error for nom ***************/
let myForme2 = document.getElementById ('formData');


myForme2.addEventListener('submit' , function(e){
  
  let nom = document.getElementById ('last');
  if (nom.value.trim() == ""){
   

  let myError = document.getElementById ('error2') ;
  myError.innerHTML = "Veuillez entrer votre nom.";
  myError.style.color = 'red';
  e.preventDefault();

  }
});