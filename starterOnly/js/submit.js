'use strict';
import 'form.js';

const form = document.getElementById('form');
/**
 * {*}
 */
form.addEventListener('submit', function(e) {
  /**
   * @objet
   */
  e.preventDefault();

  // submit to the server if the form is valid
  if (validate()) {
    window.redirect('index.html');
  }
});

