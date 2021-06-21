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
const formGlobal = document.getElementById("formGlobal");

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
  modalbg.style.display = "none";}



let erreur;
let first = document.getElementById('first');
let last = document.getElementById('last');

function test(input){
  if(input.length<2){
    return false
  }else{
    return true
  }
};

function setAtt(value){
  value.parentElement.setAttribute("data-error", erreur);
  value.parentElement.setAttribute("data-error-visible", "true");
}
function removeAtt(value){
  value.parentElement.removeAttribute("data-error");
  value.parentElement.removeAttribute("data-error-visible");
}
function testFirstName(){
  if(test(first.value)){
    removeAtt(first);
    return true
  }else{
    erreur = "veuillez entrer un prénom de 2 caractères minimum";
    setAtt(first)
    return false
  }
};
function testLastName(){
  if(test(last.value)){
    removeAtt(last);
    return true
  }else{
    erreur = "veuillez entrer un nom de 2 caractères minimum";
    setAtt(last)
    return false
  }
};



console.log(first.value)
formGlobal.addEventListener("submit", function (e) {  

  // if (first.value.length>2) {
  //   formData[0].removeAttribute("data-error");
  //   formData[0].removeAttribute("data-error-visible");
  // } else {
  //   erreur = "veuillez entrer un prénom de 2 caractères minimum";
  //   formData[0].setAttribute("data-error", erreur);
  //   formData[0].setAttribute("data-error-visible", "true");
  // }
  testFirstName();
  testLastName();
  if (testFirstName() && testLastName()) {
    alert('formulaire envoyé')
  } else {
    e.preventDefault()
  }
});
