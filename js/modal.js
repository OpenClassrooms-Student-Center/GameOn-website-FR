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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/**
 * Get DOM element by className, id, tag...
 * @example: $("#id") || $(".class") || $("tag")
 * @param {string} elm
 */
 const $ = (elm) => document.querySelector(elm);
 /**
  * Create new element with tag.
  * @example: createElement('div');
  * @param {string} elm
  */
const createElement = (elm) => document.createElement(elm);

/**
 * Trigger Event click on .close element.
 * Run closeModal Method.
 * @event: click
 */
$('.content > .close').addEventListener("click", closeModal);

/**
 * Close Modal
 */
function closeModal() {
  modalbg.style.display = "none";
}

/**
 * Trigger event submit for form.
 * Run getFormData method.
 * @event: submit
 */
$(".modal-body > form").addEventListener("submit", getFormData);

/** 
 * Contain all error message.
 * @type {[key: string]: string}
 */
const validationMesages = {
  "first": "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  "last": "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  "email": "Veuillez entrer un e-mail valide.",
  "location": "Vous devez choisir une option.",
  "birthdate": "Vous devez entrer votre date de naissance.",
  "quantity": "Veuillez préciser le nombre de tournois.",
  "checkbox1": "Vous devez vérifier que vous acceptez les termes et conditions."
};
/**
 * Contain all validator methods.
 * @type {[key:string]: (input:string, value:string): void | ""}
 */
const validator = {
  "first": (input, value) => value.length < 2 && value.trim() === "" ? errorMessage(input) : "",
  "last": (input, value) => value.length < 2 && value.trim() === "" ? errorMessage(input) : "",
  "email": (input, value) => value.trim() === "" && !new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value) ? errorMessage(input) : "",
  "birthdate": (input, value) => value.trim() === "" ? errorMessage(input) : "",
  "quantity": (input, value) => value <= 0 ? errorMessage(input) : "",
  "location": (input, value) => !value ? errorMessage(input) : "",
  "checkbox1": (input) => errorMessage(input)
};

/**
 * Get data in form and run validator.
 * @param {Event} event
 */
function getFormData(event) {
  event.preventDefault();
  if (document.querySelectorAll('.error')) errorReset();
  let data = new FormData(event.target);
  for (const [name, value] of data) {
    validator[name](name, value);
  }
  if (!data.has('location')) {
    validator['location']('location', false)
  };
}

/**
 * Check if CGU checkbox as checked
 */
function validateCGU() {
  if (!$('#checkbox1').checked) {
    validator['checkbox1']("checkbox1");
  }
}

/**
 * Create error message and display at top of input
 * @param {string} name
 */
function errorMessage(name) {
  const field = $(`input[name="${name}"]`) === null ? $(`#${name}`) : $(`input[name="${name}"]`);
  field.style = "border-color: red; border-width: 4px;"

  const wrapper = createErrorElement(name);

  field.parentNode.prepend(wrapper);
}
/**
 *Create Error Element with apropriate error message
 * @param {string} name
 * @return {HTMLElement} 
 */
function createErrorElement(name) {
  const wrapper = createElement('div');
  wrapper.className = "error";

  const errorElm = createElement('span');
  errorElm.innerHTML = validationMesages[name];
  errorElm.style = "color: red; font-size: 12px";

  wrapper.append(errorElm);

  return wrapper;
}

/**
 * Delete all error message.
 */
function errorReset() {
  document.querySelectorAll('.error').forEach(elm => elm.remove());
}
