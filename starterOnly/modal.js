

/*---- DOM Elements----*/

const modalForm = document.querySelector("#modalForm"); 
const modalbg = document.querySelector(".bground"); 
const modalOpen = document.querySelectorAll(".modalOpen");/*button "je m'inscris*/

const modalCloseX = document.querySelector(".close");/*"icone" X*/
const modalCloseBtnClose = document.querySelector(".closeModalBtn"); /*button "Close"*/
const modalSubmitBtn = document.querySelector(".form__button--submit");/*button "GO"*/
const modalThanks = document.querySelector(".thanks"); /* */

//FORM
const formData = document.querySelectorAll(".formData");
//form part1 : Info
const firstName = document.querySelector("#first");
const formDataFirst = document.querySelector(".infoFirst");

const lastName = document.querySelector("#last");
const formDataLast = document.querySelector(".infoName");

const emailAddress = document.querySelector("#email");
const formDataEmail = document.querySelector(".infoEmail");

const birth = document.querySelector("#birthdate");
const formDataBirthdate = document.querySelector(".infoBirthdate");

const qty = document.querySelector("#quantity");
const formDataQuantity = document.querySelector(".infoQuantity");

//form part 2 et 3 :location et rights
const place = document.querySelector(".location");
const formDataTown = document.querySelector(".locations");
const check = document.querySelector("#checkbox1");
const formDataCheckboxes = document.querySelector(".rights");




//Nav bar-version mobile
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " mobile";
  } 
  else {
    x.className = "topnav";
  }
}

/*----MODALE----*/
// Open modal event
modalOpen.forEach((btn) => btn.addEventListener("click", launchModal));

// Open modal form
function launchModal() {
  modalbg.style.display = "block";
}



// Close modal event

/* Detect (method:addEventListener) Event ("click")*/
/* on Element ("icon" X (=modalCloseX)); action: closing the modal windows (fonction:closeModal)*/
modalCloseX.addEventListener("click", closeModal);

/* Detect (method:addEventListener) Event ("click")*/
/* on Element (button"close" (=modalCloseBtnClose)); action: closing the modal windows (fonction:closeModal)*/
modalCloseBtnClose.addEventListener("click", closeModal);

// Close modal form


function closeModal() {
  modalbg.style.display = "none";
}


// Button "Go": validation
modalSubmitBtn.addEventListener("click", (e) => {
  first();
  last();
  email();
  birthdate();
  quantity();
  location();
  rights();
  e.preventDefault();
  if (nbrFirst + nbrLast + nbrEmail + nbrBirthdate + nbrQuantity + nbrLocations + nbrRights == 0) {
        modalForm.style.display = "none";
        modalThanks.style.display = "flex";
  }
});







