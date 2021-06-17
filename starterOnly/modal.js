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
const close = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
close.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
};

let first = document.getElementById("first");
let firstParent = first.parentElement;

let formGlobal = document.getElementById("formGlobal");

console.log(formData)
console.log(formGlobal.location.value)


formGlobal.addEventListener('submit', function(e){ 
  let erreur;

  if(!formGlobal.location.value){      
    erreur = "selectionnez une ville";      
    formData[5].setAttribute("data-error-visible","true");
    formData[5].setAttribute("data-error",erreur);    
  }else{
    formData[5].removeAttribute("data-error-visible");
    formData[5].removeAttribute("data-error");    
  }

  if(erreur){    
    e.preventDefault();

  }else{
    
  }
})
console.log(formData[5]);

