// DOM Elements
/**
 *
 *
 * @const {HTMLElement}  .bground  [.bground description]
 *
 */
const modalbg = document.querySelector('.bground');
/**
 *
 * @const {HTMLButtonElement}  .modal-btn  [.modal-btn description]
 *
 */
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');

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
