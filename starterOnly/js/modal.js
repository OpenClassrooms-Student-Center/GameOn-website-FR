'use strict';
/** @type DOM Elements */
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const modalClose = document.querySelectorAll('.close');
const modalSucess = document.getElementById('sucess');

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
function launchModal() {
  modalbg.style.display = 'block';
}

/**
 * Close Modal
*/
function closeModal() {
  modalbg.style.display = 'none';
}

/**
 *
 *
 *  {editNav}
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
 * Modal Sucesss
*/
function displaySucess() {
  modalSucess.style.display = 'flex';
  form.style.display= 'none';
};

/* window.onclick = function(event) {
  if (event.target == modalbg) {
    modalbg.style.display = "none";
  }
}*/


