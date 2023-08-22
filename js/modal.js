function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// DOM Elements
const modalContainer = document.querySelector(".bground")
const modalOpenBtn = document.querySelectorAll(".modal-btn")
const modalCloseBtn = document.querySelectorAll(".close")
const formData = document.querySelectorAll(".formData")

// MODAL events
// --------------------------------------------------------------

// launch modal event
modalOpenBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// close modal event
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal))

// close modal when click outside form
window.onclick = function (event) {
  if (event.target == modalContainer) {
    closeModal()
  }
}

// close modal when click escape key a11y recommendation
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal()
  }
})

// FORM functions
// --------------------------------------------------------------

// Reset form function
function resetForm() {
  // reset form fields by removing value attribute
  document.querySelector("form").reset()
}

// launch modal form
function launchModal() {
  // display modal by adding style attribute with display: block property
  modalContainer.style.display = "block"
  // focus first input field when modal open
  document.querySelector("#first").focus()
}

// close modal form
function closeModal() {
  // hide modal by removing style attribute added by launchModal()
  modalContainer.removeAttribute("style")
  // reset form
  resetForm()
}
