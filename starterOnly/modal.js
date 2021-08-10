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
const buttonClose = document.querySelector(".close");
const firstName = document.getElementById("first");
const errorFirstName = document.getElementById("error_firstName");
const lastName = document.getElementById("last");
const errorLastName = document.getElementById("error_lastName");
const email = document.getElementById("email");
const errorEmail = document.getElementById("error_email");
const birthdate = document.getElementById("birthdate");
const errorBirthdate = document.getElementById("error_birthdate");
const numberTournaments = document.getElementById("quantity");
const errorNumberTournaments = document.getElementById("error_quantity");
const nyCity = document.getElementById("location1");
const sfCity = document.getElementById("location2");
const seattleCity = document.getElementById("location3");
const chicagoCity = document.getElementById("location4");
const bostonCity = document.getElementById("location5");
const portlandCity = document.getElementById("location6");
const errorCity = document.getElementById("error_cities");
const focuscgu1 = document.getElementById("checkbox1");
const focuscgu2 = document.getElementById("checkbox2");
const errorCheck = document.getElementById("error_check");
const submitButon = document.getElementById("submitButon");
const form = document.getElementById("form");
const containerForm = document.querySelector('.modal-body');
const boutonClose = document.querySelector('.btn-close')

//Regex
const regexLettres = /^[a-zA-Z-\s]+$/;
const regexMessagerie = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexbirthdate = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// listener closing form when clicking on the cross
buttonClose.addEventListener("click", closeModal);

//Form closing function when clicking on the cross
function closeModal() {
  modalbg.style.display = "none";
};


