function editNav() {
  const myTopNav = document.getElementById("myTopnav");
  if (myTopNav.className === "topnav") {
    myTopNav.className += " responsive";
    document.getElementById("hero").style.marginTop = "280px";
  } else {
    myTopNav.className = "topnav";
    document.getElementById("hero").style.marginTop = "0";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName('close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = 'none';
}
// Get the closeBtn variable and get the first element to add an listener
closeBtn[0].addEventListener('click', closeModal);


