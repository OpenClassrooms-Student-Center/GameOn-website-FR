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
const modalClose = document.querySelectorAll(".close");
const modalBtnSubmit = document.querySelector(".btn-submit");
const formModal = document.querySelector(".formModal");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal event
modalClose.forEach((span) => span.addEventListener("click", closeModal));

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//submit modal form
function submitModal(event) {
  event.preventDefault();
  //if form valid
  if(validateForm()) {
    //hide form
    for (let i = 0 ; i < formData.length; i++) {
      formData[i].style.display = "none";
    }
    //thank message
    let thanks = document.querySelector(".validMessage");
    thanks.style.display = "flex";
    //if click second time close modal and reload
    modalBtnSubmit.removeEventListener('click', submitModal);
    modalBtnSubmit.addEventListener('click', function() {
      closeModal();
      location.reload();
    });
  }
}

//check if form valide
function validateForm() {
  const formInputs = document.querySelectorAll(".formData input");
  console.log(formInputs);
  /*let isValid = true;

  formInputs.forEach(input => {
    if (!input.checkValidity()) {
      console.log("je suis la!");
      isValid = false;
    }
  });
  console.log(isValid);
  return isValid;*/

  for (let i = 0; i < formInputs.length; i++) {
    if (!formInputs[i].checkValidity()) {
      console.log("je suis la!");
      return false;
    }
  }
  return true;
}