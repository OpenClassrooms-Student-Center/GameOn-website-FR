/* eslint-disable import/extensions */
import { delErrMsg } from './message.js';
import { valid, validate } from './validation.js';
/**
 * @const  {HTMLFormElement}  reserve  inscription form
 */
const reserve = document.querySelector('#reserve');
/**
 * @const {HTMLButtonElement}  .modal-btn  modal buttons
 */
const modalBtn = document.querySelectorAll('.modal-btn');

let modal = null;
let previousActiveElement = null;
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
function closeModal() {
  modal.removeAttribute('style');
  modal.setAttribute('aria-hidden', 'true');
  modal.removeAttribute('aria-modal');
  modal.removeEventListener('click', closeModal);
  modal
    .querySelector('span[data-dismiss="dialog"]')
    .removeEventListener('click', closeModal);
  modal.lastElementChild.removeEventListener('click', closeModal);
  // restoring focus
  previousActiveElement.focus();
  modal = null;
}
function setToOpenModal(el) {
  el.setAttribute('style', 'display: block');
  el.removeAttribute('aria-hidden');
  el.setAttribute('aria-modal', 'true');
  el.querySelectorAll('[data-dismiss="dialog"]').forEach((elt) =>
    elt.addEventListener('click', closeModal)
  );
  modal = el;
}
/**
 * When the user clicks the button, the modal background is displayed
 */
function launchModal(ev) {
  /**
   * @const btn
   * @type {EventTarget}
   */
  const btn = ev.target;
  // @ts-ignore
  const el = document.getElementById(btn.getAttribute('aria-haspopup'));
  if (!modal) {
    previousActiveElement = document.activeElement;
    setToOpenModal(el);
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

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
 * It creates a modal window with a success message and displays it
 * @param   {String} firstname - the first name of the user
 * @param   {String} lastname - the last name of the user
 */
function displaySuccessModal(firstname, lastname) {
  /**
   * @const
   * @type {HTMLElement}
   */
  const div = document.createElement('div');
  div.setAttribute('id', 'successModal');
  div.setAttribute('class', 'modal successModal');
  div.setAttribute('role', 'dialog');
  div.innerHTML = `
    <div class="modal-content" role="document">
      <span
        tabindex="0"
        role="button"
        id="dismissSuccessModal"
        class="modal-close"
        aria-label="Fermer la fenêtre modale"
        title="Fermer la fenêtre modale"
        data-dismiss="dialog"
      ></span>
      <div class="modal-body">
        <h3><span>${firstname} ${lastname}</span> Merci pour votre inscription ! </h3>
        <button class="button btn-submit" data-dismiss="dialog">Fermer</button>
      </div>
    </div>
  `;
  document.querySelector('main').appendChild(div);
  /**
   * @const
   * @type  {HTMLElement}
   */
  const successModal = document.querySelector('#successModal');
  setToOpenModal(successModal);
}
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
  displaySuccessModal(data.first, data.last);
  // @ts-ignore
  reserve.reset();
  document.querySelectorAll('input[form="reserve"]').forEach((el) => {
    // @ts-ignore
    delErrMsg(el);
  });
});
