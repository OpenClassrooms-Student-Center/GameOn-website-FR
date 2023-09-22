// Edit Navigation
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
const formBody = document.querySelector(".formbody")
const formSuccess = document.querySelector(".form-success");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// hide modal form
function hideModal() {
  modalbg.style.display = "none";
}

 // Hide modal whith the button X
 xclose = document.querySelector(".close")
 xclose.addEventListener("click", resetModal);
 //xclose.addEventListener("click", resetModal);

//reset modal
function resetModal(){
  formBody.style.display = "block";
  formSuccess.style.display = 'none';
  modalbg.style.display = "none";
}

  // Hide modal whith the button close
  btnclose = document.querySelector(".form-success_close")
  //btnclose.addEventListener("click", hideModal);
  btnclose.addEventListener("click", resetModal);

// Hide modal whith click in background
modalbg.addEventListener("click", (event) => {
  if (event.target === modalbg) {
      hideModal()
  }
})



