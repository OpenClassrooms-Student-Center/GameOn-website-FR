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

// MODAL
// --------------------------------------------------------------

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

// FORM
// --------------------------------------------------------------

// DOM Elements
const form = document.querySelector("form")
const formData = document.querySelectorAll(".formData")

// Reset form function
function resetForm() {
  // reset form fields by removing value attribute
  document.querySelector("form").reset()
}

// Check inputs validity function
function checkInputs() {
  const firstName = document.querySelector("#first")
  const lastName = document.querySelector("#last")
  const email = document.querySelector("#email")
  const birthDate = document.querySelector("#birthDate")
  const quantity = document.querySelector("#quantity")
  const location = document.querySelector("#location1")
  const locationOptions = document.querySelectorAll('input[name="location"]')
  const checkbox1 = document.querySelector("#checkbox1")

  // check first name
  checkFieldValidity(
    firstName,
    firstName.value.length < 2,
    "Veuillez entrer 2 caractères ou plus pour le champ prénom."
  )

  // check last name
  checkFieldValidity(
    lastName,
    lastName.value.length < 2,
    "Veuillez entrer 2 caractères ou plus pour le champ nom."
  )
  // check email
  checkFieldValidity(
    email,
    // regex from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value) && email.value == "",
    "Veuillez entrer une adresse email valide."
  )
  // check birth date
  checkFieldValidity(
    birthDate,
    // must set
    birthDate.value == "",
    "Veuillez indiquer votre date de naissance."
  )
  // check quantity
  checkFieldValidity(
    quantity,
    quantity.value == "",
    "Veuillez entrer un nombre entre 0 et 99."
  )

  checkFieldValidity(
    location,
    ![...locationOptions].some((radio) => radio.checked),
    "Veuillez sélectionner une option pour l'emplacement."
  )

  // check checkbox
  checkFieldValidity(
    checkbox1,
    !checkbox1.checked,
    "Veuillez accepter les conditions d'utilisation."
  )
}

// check field validity function
function checkFieldValidity(input, conditions, errorMessage) {
  conditions ? setErrorFor(input, errorMessage) : setSuccessFor(input)
}

// Set error function
function setErrorFor(input, message) {
  const formControl = input.parentElement
  // set data-error-visible attribute to true
  formControl.setAttribute("data-error-visible", true)
  // add set data-error attribute with error message
  formControl.setAttribute("data-error", message)
}

// Set success function
function setSuccessFor(input) {
  const formControl = input.parentElement
  // set data-error-visible attribute to false
  formControl.removeAttribute("data-error-visible")
  // and remove data-error attribute
  formControl.removeAttribute("data-error")
}

// when an input is focused check its validity on change
formData.forEach((element) => {
  const input = element.querySelector("input")
  input.addEventListener("input", () => {
    checkInputs(input)
  })
})

// on form submit
form.addEventListener("submit", (event) => {
  // prevent form from submitting
  event.preventDefault()

  // check inputs validity
  checkInputs()

  // if no error
  if (!document.querySelector("[data-error-visible]")) {
    // Remove form
    form.remove()
    // Display confirmation message
    document.querySelector(".modal-body").innerHTML = `
      <div class="confirmation">
        <h2>Merci !</h2>
        <p>Votre réservation a été reçue.</p>
        <button class="btn-submit" id="btn-submit" type="submit">Fermer</button>
      </div>
    `
  }
})
