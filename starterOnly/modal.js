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
}

  // first name verification

let formGlobal = document.getElementById('formGlobal');

formGlobal.first.addEventListener('change', function(){
  validFirst(this);
});

const validFirst = (firstName) => {
  let testFirst = (/^[a-zA-Z]/.test(firstName.value) && firstName.value.length>=2);
  if(testFirst){
    document.getElementById('firstSpan').innerHTML = ""
  }
  else{
    document.getElementById('firstSpan').innerHTML = "veuillez renseigner un prénom valide de 2 caractères minimum"

  }
}

// last name validation
formGlobal.last.addEventListener('change', function(){
  validLast(this);
});

const validLast = (lastName) => {
  let testLast = (/^[a-zA-Z]/.test(lastName.value) && lastName.value.length>=2);
  if(testLast){
    document.getElementById('lastSpan').innerHTML = "";
  }
  else{
    document.getElementById('lastSpan').innerHTML = "veuillez renseigner un nom valide de 2 caractères minimum";

  }
}
