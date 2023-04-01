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
  //get DOM element
  const formInputs = document.querySelectorAll(".formData input");
  const checkBox1 = document.getElementById("checkbox1");
  console.log(formInputs);

  let isValid = true;
  let cityChecked = false;      //for input type radio
  //check if each input are correct
  formInputs.forEach((input) => {
    switch (input.type) {
      //first name and last name
      case 'text':
        if (input.value.trim() === '') {
          isValid = false;
        }
        break;
      //email
      case 'email':
        if (!input.value.includes('@')) {
          isValid = false;
        }
        break;
      //date of birth
      case 'date':
        if (input.value === '') {
          isValid = false;
        }
        break;
      //how many GameON event did you participeted
      case 'number':
        if (input.value === '' || isNaN(input.value)) {
          isValid = false;
        }
        break;
      //in which city's event do you wish to participate 
      case 'radio':
        if (input.checked) {
          cityChecked = true;
        }
        break
      // term of use agreament checked
      case 'checkbox':
        if (input === checkBox1 && !input.checked) {
          isValid = false;
        }
        break;
    }
  });

  if (!cityChecked) {
    isValid = false;
  }

  console.log(isValid);
  return isValid;
}