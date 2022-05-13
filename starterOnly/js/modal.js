'use strict';
/** @type DOM Elements */
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const modalClose = document.querySelectorAll('.close');

/**
 * lauch modal event
*/
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));


/**
 * close modal event
*/
modalClose.forEach((span) => span.addEventListener('click', closeModal));

/**
 * Lauch modal
*/
export function launchModal() {
  modalbg.style.display = 'block';
}

/**
 * Close Modal
*/
export function closeModal() {
  modalbg.style.display = 'none';
}

/**
 *
 *
 *  {editNav}
 */
export function editNav() {
  const x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
/**
 * return @console
 */
export function hi() {
  console.log('Hi from module 1.');
}

/* window.onclick = function(event) {
  if (event.target == modalbg) {
    modalbg.style.display = "none";
  }
}*/


