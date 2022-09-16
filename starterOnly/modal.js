function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const modalCloseButton = document.querySelector(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = "block"
}

// Close modal event
modalCloseButton.addEventListener("click", closeModal)

// Close modal form
function closeModal() {
  modalbg.style.display = "none"
}

// Modal Form validation status
let firstNameIsValid = null
let lastNameIsValid = null
let emailIsValid = null
let tournamentQuantityIsValid = null
let tournamentLocationIsValid = null
let TOSAcceptedIsValid = true

