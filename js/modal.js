// Edit navigation
// used for responsive navigation
function editNav() {
  const nav = document.getElementById("myTopnav")
  nav.className = nav.className === "topnav" ? "topnav responsive" : "topnav"
}

// DOM elements
const modal = document.querySelector(".modal")
const modalBackdrop = modal.querySelector(".modal-backdrop")
const openModalHandlers = document.querySelectorAll(".open-modal")
const closeModalHandlers = document.querySelectorAll(".close-modal")

const registerForm = document.querySelector("form")
const formGroupElements = document.querySelectorAll(".input-group")

// Open modal
function openModal() {
  modal.removeAttribute("hidden")
  modal.classList.add("visible")
}

// Close modal
function closeModal() {
  const successMessage = document.querySelector(".form-success")
  modal.classList.remove("visible")

  // setTimeout to wait for the animation to finish
  setTimeout(() => {
    // reset form
    resetForm(registerForm)
    // hide success message
    successMessage.classList.remove("visible")
    successMessage.setAttribute("hidden", true)
    // show form
    registerForm.removeAttribute("hidden")
  }, 1000)
}

// Reset form function
// used when the user closes the modal or after a successful form submission
function resetForm(form) {
  form.reset()
  formGroupElements.forEach((element) => {
    clearError(element)
  })
}

// Check if the input is not empty
function notEmpty(element) {
  const isValid = element.value.length >= 2
  const message = "Veuillez entrer 2 caractères ou plus."

  return isValid ? null : message
}

// Check if is a valid email address
function isEmail(element) {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(element.value)
  const message = "Veuillez entrer une adresse mail valide."

  return isValid ? null : message
}

// check if the value is a number
function isNumber(element) {
  const isValid = /^\d+$/.test(element.value)
  const message = "Veuillez entrer un nombre."

  return isValid ? null : message
}

// check if one of the radio button with same name is checked
function isRadioChecked(element) {
  const radioButtons = document.querySelectorAll(
    `input[name=${element.name}]:checked`
  )
  const isValid = radioButtons.length > 0
  const message = "Veuillez choisir une option."

  return isValid ? null : message
}

// check if accept terms is checked
function isCheckboxChecked(element) {
  const isValid = element.checked
  const message = "Veuillez accepter les conditions d'utilisation."

  return isValid ? null : message
}

// Check if the input is not empty
function isBirthDate(element) {
  // is valid if date is in the past and is correct format
  const today = new Date()
  const isValid = new Date(element.value) < today
  const message = "Veuillez entrer votre date de naissance."

  return isValid ? null : message
}

// Get error message for each validation
function getError(element) {
  const validate = element.dataset.validate
  return window[validate] ? window[validate](element) : null
}

// Display or clear error message for each field
function setError(element, errorMessage) {
  const errorVisibleAttribute = "data-error-visible"
  const errorAttribute = "data-error"
  if (errorMessage) {
    element.setAttribute(errorVisibleAttribute, true)
    element.setAttribute(errorAttribute, errorMessage)
  } else {
    element.removeAttribute(errorVisibleAttribute)
    element.removeAttribute(errorAttribute)
  }
}

// Input validation
// ============================================================
// Check inputs and display error message if needed
function validateInput(field) {
  const parentElement = field.parentElement
  const errorMessage = getError(field)

  // if there is an error, display it
  setError(parentElement, errorMessage)
}

// Group modal event listeners in one function
function addModalEventListeners() {
  // open modal on click on open modal button
  openModalHandlers.forEach((handler) => {
    handler.addEventListener("click", openModal)
  })
  // close modal on close button click
  closeModalHandlers.forEach((handler) => {
    handler.addEventListener("click", closeModal)
  })

  // close modal when clicking outside modal-content
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal()
    }
  })
}

// Add event listener to each input
function addInputEventListener() {
  formGroupElements.forEach((element) => {
    const input = element.querySelector("input")

    // validate input on change
    input.addEventListener("change", () => {
      validateInput(input)
    })
  })
}

// Add event listener to the form
function addFormEventListeners(form) {
  form.addEventListener("submit", (event) => {
    // prevent form submission
    event.preventDefault()

    // On form submission, validate each input
    const fields = event.target.querySelectorAll("input")
    fields.forEach((field) => {
      validateInput(field)
    })

    // early return if there is an error
    const checkError = document.querySelector("[data-error-visible]")
    if (checkError) {
      return
    }

    // TODO: maybe make an other modal for the success message
    form.setAttribute("hidden", true)
    const successMessage = document.querySelector(".form-success")
    successMessage.removeAttribute("hidden")
    successMessage.classList.add("visible")
  })
}

// Initialize
// ============================================================

// modale event listeners
if (modal) {
  addModalEventListeners()
}

// form event listeners
if (registerForm) {
  addFormEventListeners(registerForm)
  addInputEventListener()
}
