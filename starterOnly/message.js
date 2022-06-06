/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
/*  */
/**
 * Exporting a function called setError that takes two parameters, el and msg. It then sets the parent element's data-error-visible attribute to true and the data-error attribute to msg.
 *
 * @param   {HTMLInputElement}  el   [el description]
 * @param   {String}  msg  [msg description]
 */
export const setErrMsg = (el, msg) => {
  el.parentElement.dataset.errorVisible = 'true';
  el.parentElement.dataset.error = msg;
};

/**
 * It takes an element as an argument, and sets the value of the data-error-visible attribute of the
 * element's parent to false
 * @param {HTMLInputElement} el - the element that has the error message
 */
export const delErrMsg = (el) => {
  el.parentElement.dataset.errorVisible = 'false';
  el.parentElement.dataset.error = '';
};
