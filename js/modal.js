/**
 * Get HTMLElement with selector and return lot of utils to manipulate DOM.
 * returning the context allows us to chain the method.
 * @param {string} selector A string that identifies an element to select
 * @return {$} Current Object
 * @example
 *  $(".class").text('Hello World !').style("color: red");
 */
const $ = function (selector) {
  /**
   * Select element with selector
   *  @type {HTMLELement}
   */
  let elm = document.querySelector(selector);
  return {
    /**
     * Add text into selected element
     * @param {string} text A string added in elemen
     * @return {$} Current Object
     * @example $(selector).text("Write some text")
     */
    text(text){
      elm.innerText = text;
      return this;
    },
    /**
     * Add Html into selected element
     * @param {string} template A string that structures the html element that will be added
     * @return {$} Current Object
     * @example 
     * $(selector).html('<p>Hello world!</p>');
     * $(selector).html(`
     * <section class="element">
     *   <h2>Title</h2>
     *   <p>Some Text !</p>
     * </section>
     * `);
     */
    html(template){
      elm.innerHTML = template;
      return this;
    },
    /**
     * Add some style into selected element
     * @param {string} style A string that structures the style element that will be added
     * @return {$} Current Object
     * @example $(selector).style("display: none"); 
     */
    style(style) {
      elm.style = style;
      return this;
    },
    /**
     * Add some class into selected element
     * @param {string} className A string defines the classes that will be added
     * @return {$} Current Object
     * @example $(selector).addClass("container"); 
     */
    addClass(className) {
      elm.className += ` ${className}`;
      return this;
    },
    /**
     * Remove some class into selected element
     * @param {string} className A string defines the classes that will be deleted
     * @return {$} Current Object
     * @example $(selector).removeClass("container"); 
     */
    removeClass(className) {
      elm.className = elm.className.split(' ').filter(c => c !== className).join(" ")
      return this;
    },
    /**
     * Append new HTMLElement to the end selected element to the end
     * @param { HTMLElement } element The HTML element that will be added to the end of the parent
     * @return {$} Current Object
     * @example $(selector).append(newElement); 
     */
    append(element) {
      elm.append(element);
      return this;
    },
    /**
     * Prepend new HTMLElement at the start selected element
     * @param { HTMLElement } element The HTML element that will be added at the start of the parent
     * @return {$} Current Object
     * @example $(selector).prepend(newElement); 
     */
    prepend(element) {
      elm.prepend(element);
      return this;
    },
    /**
     * Add event click into selected element
     * @param {string} cb Function executed after the triggering event
     * @return {$} Current Object
     * @example $(selector).click(() => alert('Clicked!')); 
     */
    click(cb) {
      elm.addEventListener("click",cb);
      return this;
    },
    /**
     * Add event submit into form selected
     * @param {function} cb Function executed after the triggering event
     * @return {$} Current Object
     * @example $(selector).submit(() => alert('Submited!')); 
     */
    submit(cb) {
      elm.addEventListener("submit", cb);
      return this;
    },
    /**
     * Create and add new HTMLElement into selected element,
     * Add new class if you specified
     * @todo do same to add id.
     * @param {string} element A string defines an element that will be created and appended to the end of the parent
     * @return {$} Current Object Current Object
     * @example 
     * $(selector).add("p"); 
     * $(selector).add("div.class"); 
     */
    add(element) {
      let splitTagAndClassElement = element.split('.');
      let newElm = createElement(splitTagAndClassElement[0]);
      let classList = splitTagAndClassElement.splice(1, splitTagAndClassElement.length).join(" ")
      newElm.className += classList;
      elm.append(newElm);
      return this;
    },
    /**
     * Insert a new HTMLElement before the current element.
     *
     * @param {HTMLElement | string} element A string defines an element that will be created and appended before the parent
     * @return {$} Current Object Current Object
     * @example
     * $(selector).before(element);
     */
    before(element) {
      elm.before(element);
      return this;
    },
    /**
     * Insert a new HTML element after the current element
     *
     * @param {HTMLElement | string} element A string defines an element that will be created and appended after the parent
     * @return {$} Current Object Current Object
     * @example
     * $(selector).after(element);
     */
    after(element) {
      elm.after(element);
      return this;
    },
    /**
     * Remove selected element
     * @return {$} Current Object 
     */
    remove() {
      elm.remove();
      return this;
    },
    /**
     * List all class element contain.
     * @return {string[]} Array of strings of the classes contained in the element
     */
    classList() {
      return elm.className.split(" ");
    },
    /**
     * Get parent element
     * @return {Node & ParentNode} Parent of the selected element
     */
    parent() {
      return elm.parentNode;
    },
    /**
     * Returns the current element
     * @return {HTMLElement} Current HTMLElement
     */
    getElm() {
      return elm;
    },
    /**
     * Check if the input checkbox is checked
     * @return {boolean} 
     */
    checked() {
      return elm.checked;
    }

  }
}
const createElement = (elm) => document.createElement(elm);

function editNav() {
  if (!$("#myTopnav").classList().includes("responsive")) {
    $("#myTopnav").addClass("responsive");
  } else {
    $("#myTopnav").removeClass("responsive");
  }
}

// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/**
 * Launch form modal
 */
function launchModal() {
  if ($('.success-message').getElm() !== null) {
    $('.success-message').remove();
    $('.content .modal-body').style('display:block');
  }
  $(".bground").style("display: block;");
}

/**
 * Trigger Event click on .close element.
 * Run closeModal.
 */
 $('.content > .close').click(closeModal);

 /**
  * Close Modal
  */
 function closeModal() {
  $(".bground").style("display: none;");
 }
 

/**
 * Trigger event submit for form.
 * Run formValidation.
 */
$(".modal-body > form").submit(formValidation);


/**
 * Contain all validator rules for each input.
 * @type {{ [key:string]: (value:string) => boolean }}
 */
 const validator = {
  "first": (value) => rules(value, "REQUIRED") && rules(value, "STRING") && rules(value, "MIN", 2),
  "last": (value) => rules(value, "REQUIRED") && rules(value, "STRING") && rules(value, "MIN", 2),
  "email": (value) =>  rules(value, "REQUIRED") && rules(value, "STRING") && rules(value, "EMAIL"),
  "birthdate": (value) => rules(value, "REQUIRED"),
  "quantity": (value) => rules(value, "REQUIRED") && rules(value, "MIN", 0),
  "location": (value) => rules(value, "REQUIRED")
 };

/** 
 * Contain all error messages.
 * @type {{ [key: string]: string }}
 */
 const errorMessages = {
  "first": "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  "last": "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  "email": "Veuillez entrer un e-mail valide.",
  "location": "Vous devez choisir une option.",
  "birthdate": "Vous devez entrer votre date de naissance.",
  "quantity": "Veuillez préciser le nombre de tournois.",
  "cgu": "Vous devez vérifier que vous acceptez les termes et conditions."
};

/**
 * Get data in form.
 * @param { FormElement } form
 * @return { FormData } return all entries in form
 */
const getFormData = (form) => new FormData(form);

/**
 * Run form validator
 * check if the data entered is correct and launch formValidated().
 * If the data is incorrect it launch displayError().
 * @param { Event } event All Events will be triggered by form
 * @return {void} void
 */
function formValidation(event) {
  event.preventDefault();
  
  const data = getFormData(event.target);
  const errors = [];
  
  if (document.querySelectorAll(".error")) errorReset();

  data.forEach((value, name) => {
    if (!validator[name](value)) {
      errors.push({
        name,
        message: errorMessages[name]
      });
    }
  });
  if (!data.has("location")) {
    errors.push({
      name: "location",
      message: errorMessages["location"]
    });
  }
  if (!$("#checkbox1").checked()) {
    errors.push({
      name: "checkbox1",
      message: errorMessages["cgu"]
    });
  }
  if (errors.length) {
    displayError(errors);
    return;
  }

  formValidated();
}
/**
 * Deifined rules for form validator
 * @param {string | number } value Enter value
 * @param {"REQUIRED | STRING | NUMBER | MIN | MAX | EMAIL"} flag Choosed rules for validations
 * @param {string | number } compareValue Value to be compare with enter value
 * @return { boolean }
 * @example 
 *    rules("text", "REQUIRED");
 *    rules("text", "MIN", 8);
 *    rules("text", "MAX", 12);
 */
const rules = (value, flag, compareValue) => {
  switch (flag) {
    case "REQUIRED": {
      return value.trim().length > 0;
    }
    case "STRING": {
      return typeof value === "string";
    }
    case "NUMBER": {
      return typeof value === "number";
    }
    case "MIN": {
      return value.length > compareValue;
    }
    case "MAX": {
      return value.length < compareValue;
    }
    case "EMAIL": {
      return new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
    }
    default:
      break;
  }
}

/**
 * Display validation message, hide .modal-body 
 * and reset all input in form.
 * @return {void} void
 */
function formValidated() {
  $('.content .modal-body').style('display:none');

  $('.content').add('div.success-message');

  $('.success-message').style('text-align: center; margin: 15px').html(`
    <p>
      Merci ! Votre réservation a été reçue.
    </p>
    <button class="btn-submit" onclick="closeModal();">Fermer</button>
  `);

  resetInput();
}

/**
 * Display error
 * @param {{ name: string, message: string }[]} data Object array of all error catches by validator
 * @return {void} void
 */
const displayError = (data) => data.forEach(({ name, message }) => errorMessage(name, message));

/**
 * Create elements for error message and display at top of input
 * @param {string} name A string defined input name
 * @param {string} message A message defined by a string that will be displayed
 * @return {void} void
 */
function errorMessage(name, message) {
  const field = $(`input[name="${name}"]`).getElm() === null ? $(`#${name}`) : $(`input[name="${name}"]`);
  field.parent().setAttribute('data-error', '')
  field.parent().setAttribute('data-error-visible', true);
  
  const wrapper = createElement('div');
  wrapper.className = "error";
  
  const errorElm = createElement('span');
  errorElm.innerHTML = message;
  errorElm.style = "color: red; font-size: 12px";

  wrapper.append(errorElm);
  field.before(wrapper);
}

/**
 * Delete all error message and reset input style.
 * @return {void} void
 */
function errorReset() {
  document.querySelectorAll('.error').forEach(elm => elm.remove());
  document.querySelectorAll('input').forEach(input => {
    let parent = input.parentNode;
    parent.removeAttribute('data-error-visible');
    parent.removeAttribute('data-error');
  });
}

/**
 * Reset all input value to void.
 * @return {void} void
 */
function resetInput() {
  document.querySelectorAll('.formData > input').forEach(input => {
    input.value = "";
    if(input.checked) input.checked = false;
  });
}
