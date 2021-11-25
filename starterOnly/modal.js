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
const closeBtn = document.getElementsByClassName('close')[0];
const submitBtn = document.getElementsByClassName('btn-submit')[0];
const termsOfUse = document.getElementById('terms-of-use');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener('click', () => closeModal())

// validate form
submitBtn.addEventListener('click', (submission) => {
  if (!cityIsChecked || !termsAreAgreed) {
    submission.preventDefault;
  }
})

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// check "city" input completion 
function cityIsChecked() {
  for (let i = 1; i < 7; i++) {
    if (document.getElementById(`location${i}`).checked) {
      return true
    }    
  }
}

// check agreement to terms of use
function termsAreAgreed() {
  return termsOfUse.checked
}
