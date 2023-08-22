// Edit navigation
// used for responsive navigation
function editNav() {
  const nav = document.getElementById("myTopnav")
  nav.className = nav.className === "topnav" ? "topnav responsive" : "topnav"
}

// DOM elements
const modalContainer = document.querySelector(".modal")
const modalOpenBtns = document.querySelectorAll(".modal-btn")
const modalCloseBtns = document.querySelectorAll(".modal-close")

const form = document.querySelector("form")
const formGroupElements = document.querySelectorAll(".input-group")

// Open modal
function openModal() {
  modalContainer.style.display = "block"
  document.querySelector("input").focus()
}

// Close modal
function closeModal() {
  modalContainer.removeAttribute("style")
  resetForm()
}

// Reset form function
// used when the user closes the modal or after a successful form submission
function resetForm() {
  form.reset()
  formGroupElements.forEach((element) => {
    clearError(element)
  })
}

// Add some event listeners to modal
function addModalEventListeners() {
  modalOpenBtns.forEach((btn) => btn.addEventListener("click", openModal))
  modalCloseBtns.forEach((btn) => btn.addEventListener("click", closeModal))

  window.addEventListener("click", (event) => {
    if (event.target === modalContainer) {
      closeModal()
    }
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal()
    }
  })
}

// Field validation rules factory
// used to check the inputs when the user submits the form or corrects the input
function fieldValidationRulesFactory(fieldName, value) {
  switch (fieldName) {
    case "firstName":
    case "lastName":
      return value.trim().length >= 2
    case "email":
      return /^[\w-\.]+@([\w-]+\.)+[\w]+$/.test(value)
    case "birthDate":
    case "quantity":
      return value.trim() !== ""
    case "location":
      return [...document.querySelectorAll('input[name="location"]')].some(
        (radio) => radio.checked
      )
    case "acceptTerms":
      return document.querySelector('input[name="acceptTerms"]').checked
    default:
      return true // Default to valid if no validation defined
  }
}

// Check inputs and display error message if needed
function checkInputs() {
  formGroupElements.forEach((element) => {
    const input = element.querySelector("input")
    const fieldName = input.name
    const value = input.value.trim()
    const isValid = fieldValidationRulesFactory(fieldName, value)

    if (!isValid) {
      displayError(element, getErrorMessage(fieldName))
    } else {
      clearError(element)
    }
  })
}

// Add event listener to each input
function addInputEventListener() {
  formGroupElements.forEach((element) => {
    const input = element.querySelector("input")
    // Listen to change event
    input.addEventListener("change", () => {
      const fieldName = input.name
      const value = input.value.trim()
      // Check if input is valid with fieldValidationRulesFactory
      const isValid = fieldValidationRulesFactory(fieldName, value)

      if (!isValid) {
        displayError(element, getErrorMessage(fieldName))
      } else {
        clearError(element)
      }
    })
  })
}

// Display error message for each field
function displayError(element, errorMessage) {
  const errorVisibleAttribute = "data-error-visible"
  const errorAttribute = "data-error"
  element.setAttribute(errorVisibleAttribute, true)
  element.setAttribute(errorAttribute, errorMessage)
}

// Clear error message for each field
// used when the user corrects the input without reloading the page
function clearError(element) {
  const errorVisibleAttribute = "data-error-visible"
  const errorAttribute = "data-error"
  element.removeAttribute(errorVisibleAttribute)
  element.removeAttribute(errorAttribute)
}

// Get error message for each field by name
function getErrorMessage(fieldName) {
  switch (fieldName) {
    case "firstName":
      return "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    case "lastName":
      return "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    case "email":
      return "Veuillez entrer une adresse email valide."
    case "birthDate":
      return "Vous devez entrer votre date de naissance."
    case "quantity":
      return "Vous devez entrer un nombre."
    case "location":
      return "Vous devez choisir un tournoi."
    case "acceptTerms":
      return "Vous devez vérifier que vous acceptez les termes et conditions."
    default:
      return ""
  }
}

// Initialize
// ============================================================

// modale event listeners
addModalEventListeners()

// live check inputs
addInputEventListener()

// form event listeners
form.addEventListener("submit", (event) => {
  event.preventDefault()
  checkInputs()
  if (!document.querySelector("[data-error-visible]")) {
    form.remove()
    document.querySelector(".modal-body").innerHTML = `
      <div class="confirmation">
        <h2>Merci !</h2>
        <p>Votre réservation a été reçue.</p>
        <button class="modal-close">Fermer</button>
      </div>
    `
  }
})
