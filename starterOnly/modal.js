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
const modalSubmissionOk = document.querySelector(".confirm-submission")
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");
const btnsubmit = document.querySelector(".btn-submit");

// launch modal eventListener
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  
}

//Close modal eventListener
closeModal.addEventListener("click", closeForm);

//Close modal form
function closeForm() {
  modalbg.style.display= "none";
}

//Submit btn Listener
btnsubmit .addEventListener("submit", submitData);

//Submit data function
//  async function submitData(){

//Function de validation des données des champs input



