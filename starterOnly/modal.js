/* eslint-disable import/extensions */
import { delErrMsg } from './message.js';
import { valid, validate } from './validation.js';
/**
 * @const  {HTMLFormElement}  reserve  inscription form
 */
const reserve = document.querySelector('#reserve');
/**
 * @const {HTMLElement}  .bground  modal background
 */
const modalbg = document.querySelector('.bground');
/**
 * @const {HTMLButtonElement}  .modal-btn  modal buttons
 */
const modalBtn = document.querySelectorAll('.modal-btn');

/**
 * If the class name of the element with the id of 'myTopnav' is equal to 'topnav', then add
 * 'responsive' to the class name. Otherwise, set the class name to 'topnav'
 */

function editNav() {
  const x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

/**
 * When the user clicks the button, the modal background is displayed
 */
function launchModal() {
  modalbg.setAttribute('style', 'display: block');
}

function closeModal() {
  modalbg.setAttribute('style', 'display: none');
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
document
  .querySelectorAll('[data-dismiss="dialog"]')
  .forEach((btn) => btn.addEventListener('click', closeModal));

/* Adding an event listener to each input element with the form attribute of "reserve" and calling the
valid function on each change. */
/**
 *
 * @param   {HTMLInputElement}  el
 *
 */
document.querySelectorAll('input[form="reserve"]').forEach((el) => {
  // NodeList is an Array-like object
  // @ts-ignore
  el.addEventListener('blur', () => valid(el));
});
/* The above code is adding an event listener to each of the radio buttons. When the user presses the
enter or space key, the radio button is checked. */
[...document.querySelectorAll('span[role="radio"]')].forEach((element) => {
  // [].slice.call() works in old browsers including IE6+
  element.addEventListener('keydown', (ev) => {
    // @ts-ignore
    if (ev.code === 'Enter' || ev.code === 'Space') {
      document.querySelector(
        `input[value="${document.activeElement.getAttribute('aria-label')}"]`
        // @ts-ignore
      ).checked = true;
      document
        .querySelector(
          `input[value="${document.activeElement.getAttribute('aria-label')}"]`
        )
        .nextElementSibling.firstElementChild.setAttribute(
          'aria-checked',
          'true'
        );
    }
  });
});
/* The above code is adding an event listener to each span element with the role of checkbox. The event
listener is listening for the enter or space key to be pressed. If the enter or space key is
pressed, the code will check the checkbox that is associated with the span element. */
Array.from(document.querySelectorAll('span[role="checkbox"]')).forEach(
  // ES6 the spread operator only works in newer browsers
  (element) => {
    // eslint-disable-next-line func-names
    element.addEventListener('keydown', function (ev) {
      // @ts-ignore
      if (ev.code === 'Enter' || ev.code === 'Space') {
        const selected = this.parentElement.previousElementSibling;
        /**
         * @const
         * @type  {HTMLInputElement}
         */
        // @ts-ignore
        const elt = document.getElementById(`${selected.id}`);
        elt.checked = !elt.checked;
        this.setAttribute('aria-checked', String(!selected));
      }
    });
  }
);
/**
 * The above code is listening for a submit event on the form. If the form is valid, it will send the
form data to the console. If the form is not valid, it will prevent the form from submitting.
 *
 * @param   {String}  submit  listener type
 * @param   {SubmitEvent}  ev  submit event
 *
 */
reserve.addEventListener('submit', (ev) => {
  ev.preventDefault();
  if (!validate()) {
    return;
  }
  // @ts-ignore
  const data = Object.fromEntries(new FormData(ev.target));
  // eslint-disable-next-line no-console
  console.table(data);
  // new Response(new FormData(reserve)).text().then(console.log);
  // send form by Ajax
  closeModal();
  // @ts-ignore
  reserve.reset();
  document.querySelectorAll('input[form="reserve"]').forEach((el) => {
    // @ts-ignore
    delErrMsg(el);
  });
});
