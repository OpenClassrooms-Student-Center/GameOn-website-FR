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
const errorMessages = {
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
const validatorRules = {
  "first": (value) => value.trim() !== "" && value.length > 2 ,
  "last": (value) => value.length > 2 && value.trim() !== "",
  "email": (value) => value.trim() !== "" && new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value),
  "birthdate": (value) => value.trim() !== "",
  "quantity": (value) => parseInt(value) >= 0,
  "location": (value) => value,
  "checkbox1": (value) => value
};

/**
 * Get data in form and run validator.
 * @param {Event} event
 */
function getFormData(event) {
  event.preventDefault();
  
  let data = new FormData(event.target);
  const inputState = [];

  if (document.querySelectorAll('.error')) errorReset();
  
  for (const [name, value] of data) {
    if (!validatorRules[name](value)) {
      inputState.push({ name: name, message: errorMessages[name]  });
    }
  }
  if (!data.has('location')) {
    validatorRules['location'](false)
    inputState.push({ name: 'location', message: errorMessages["location"] });
  };
  if (!$('#checkbox1').checked) {
    validatorRules['checkbox1'](false);
    inputState.push({ name: "checkbox1", message: errorMessages["checkbox1"]});
  }

  if (inputState.length) {
    validator(inputState);
    return;
  }

  validateParticipation(data);
}

function validateParticipation(data) {
  // const contestants = []
  // data.forEach((value, name) => contestants.push({ name, value }));
  // localStorage.setItem('contestants', JSON.stringify(contestants));
  $(".content").style = "max-width: 550px";
  $('.modal-body').innerHTML = `
  <p>
    Merci ! Votre réservation a été reçue
  </p>
  <button class="btn-submit" onclick="closeModal()">Fermer</button>
  `;
}

function validator(data) {
  data.forEach(({ name, message }) => {
    errorMessage(name, message);
  });
}
/**
 * Create error message and display at top of input
 * @param {string} name
 * @param {string} message
 */
function errorMessage(name, message) {
  console.log(name)
  const field = $(`input[name="${name}"]`) === null ? $(`#${name}`) : $(`input[name="${name}"]`);
  field.style = "border-color: red; border-width: 4px;"

  const wrapper = createErrorElement(message);

  field.parentNode.prepend(wrapper);
}
/**
 *Create Error Element with apropriate error message
 * @param {string} name
 * @return {HTMLElement} 
 */
function createErrorElement(message) {
  const wrapper = createElement('div');
  wrapper.className = "error";

  const errorElm = createElement('span');
  errorElm.innerHTML = message;
  errorElm.style = "color: red; font-size: 12px";

  wrapper.append(errorElm);

  return wrapper;
}

/**
 * Delete all error message.
 */
function errorReset() {
  document.querySelectorAll('.error').forEach(elm => elm.remove());
  document.querySelectorAll('input').forEach(input => input.style = "");

}
