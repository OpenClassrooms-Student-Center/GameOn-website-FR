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
const form = document.querySelector("form[name='reserve']");
const formData = document.querySelectorAll(".formData");
const modalCloseBtnList = document.querySelectorAll(".bground .close");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


/**
 * Close modal function & reset form
 */
const closeModal = () => {
  form.reset()
  modalbg.style.display = "none"
  const confirmMessage = document.querySelector(".modal-body .confirm-message");
  if (confirmMessage) {
    confirmMessage.remove();
    form.style.display = "block";
  }

};

/**
 * Add listner for Close Button
 */
modalCloseBtnList.forEach((btn) => btn.addEventListener("click", closeModal));

/**
 * Check if element is not Empty or null

 * @return string  : error message
 */
const isEmpty = (element) => {
  if (element === '' || element === null) return 'Ne dois pas etre vide';
};

/**
 * Check if element is too short

 * @return string  : error message
 */
const asLenght = (element, min = 1) => {
  const elementLength = element.length;
  if (elementLength < min && elementLength != 0) return `Veuillez entrer ${min} caractères ou plus pour le champ du nom.`;
};

/**
 * Check if element is valid with regex

 * @return string  : error message
 */
const validRegex = (element, regToMatch) => {
  const regex = new RegExp(regToMatch);
  const test = regex.test(element.value.trim());
  if (!test) return `${element.name} n'est pas valide.`;
};

/**
 * Check if element is a integer

 * @return string  : error message
 */
const isInteger = (element) => {
  if (!Number.isInteger(parseInt(element))) return "Doit etre un entier.";
};

/**
 * Check if element group is checked

 * @return string  : error message
 */
const isChecked= (element) => {
  let checked = false;
  for (let i = 0; i < element.length; i++) {
    const input = element[i];
    if (input.name === 'cgu' && !input.checked) return "Vous devez vérifier que vous acceptez les termes et conditions.";
    if (input.checked) checked = true;
  }

  if (!checked) return "Vous devez choisir une option."
}

/**
 * Check if form is valid or add error messages
 */
const validateForm = (element) => {
  const input = element.querySelectorAll('input');

  let error = isEmpty(input[0].value.trim());
  switch ( input[0].name ) {
    case "first":
    case "last":
      error = (!error)? asLenght(input[0].value.trim(), 2): error;
      break;
    case "email":
      error = (!error)? validRegex(input[0], /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/): error;
      break;
    case "birthdate":
      error = (!error)? validRegex(input[0], /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/): error;
      break;
    case "quantity":
      error = (!error)? isInteger(input[0].value.trim()): error;
      break;
    case "location":
      error = isChecked(input);
      break;
    case "cgu":
      error = isChecked(input);
    default:
      break;
  }

  if (error != null) {
    element.dataset.error = error;
    element.dataset.errorVisible = true;
    return true;

  } else {
    element.removeAttribute('data-error');
    element.dataset.errorVisible = false;
    return false;
  }
};

/**
 * Create comfirm message
 * after validation
 */
const confimMessage = (message) => {
  form.style.display = "none";
  const messageElement = document.createElement("p");
  messageElement.classList.add('confirm-message');
  messageElement.innerHTML = message;
  document.querySelector(".modal-body").append(messageElement);
}

/**
 * Add listner for form submit 
 */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formDataElements = e.target.querySelectorAll(".formData");
  let error;
  for (let i = 0; i < formDataElements.length; i++) {
    error = validateForm(formDataElements[i]);
  }
  if (!error) confimMessage("Merci !<br> Votre réservation a été reçue.");
});

/**
 * Add listner for focusout
 */
 form.addEventListener("focusout", (e) => {
  e.preventDefault();
  validateForm(e.target.parentNode);
});