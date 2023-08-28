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
//modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// hide modal form
function hideModal() {
  modalbg.style.display = "none";
}

 // Hide modal whith the button close
 btnclose = document.querySelector(".close")
 btnclose.addEventListener("click", hideModal);

// Hide modal whith click in background
modalbg.addEventListener("click", (event) => {
  if (event.target === modalbg) {
      hideModal()
  }
})