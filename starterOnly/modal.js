// DOM Elements
const burgerNav = document.querySelector("#myTopnav");
const modalbg = document.querySelector(".bground");
const formDisplay = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelectorAll(".close");
const menuBtn = document.querySelector('.menu-btn');
const modalBody = document.querySelector(".modal-body");
const body = document.querySelector("body")

// responsive navigation menu
function editNav() {
  if (burgerNav.className === "topnav") {
    burgerNav.className += " responsive";
  } else {
    burgerNav.className = "topnav";
  }
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.classList.add("show");
  formDisplay.classList.add("visible"); 
  body.classList.add("hiddenScrollbar"); 
}

// close modal event
modalCloseBtn.forEach((closeBtn) => closeBtn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.classList.remove("show");
  formDisplay.classList.remove("visible");
  body.classList.remove("hiddenScrollbar"); 
  setTimeout(() => {
    formSelection.reset();
    resetFormAttr();
  }, 1000);
  if (modalBody.className === "modal-body hidden") {
    setTimeout(() => {
      formDisplayAndValue();
    }, 1000);
  }
}

// close modal when click outside
modalbg.addEventListener('click', (e) => {
  if(e.target.closest(".content")) return
  else{
    closeModal();
  }
})

// burger button animation
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});