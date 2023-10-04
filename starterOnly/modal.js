// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnClose = document.querySelector(".close");
const icon = document.querySelector(".icon");
const  mainNavbarResponsive = document.querySelector(" #myTopnav .main-navbar").firstElementChild;


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// add margin-top on menu responsive
icon.addEventListener("click", () =>{
  mainNavbarResponsive.classList.add("main-navbarResponsive");
});



//Closing modal
btnClose.addEventListener("click", () =>{
  modalbg.style.display = "none";
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}