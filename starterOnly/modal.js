function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

class ModalManager {
  constructor(modalId, closeButtonsIds) {
    //Select the Modal
    this.modal = document.querySelector(modalId);
    //Select the close buttons
    this.closeButtons = this.selectElements(closeButtonsIds);
  }

  // Method to select elements

  selectElements(elements) {
    return document.querySelectorAll(
      Array.isArray(elements) ? elements.join(',') : elements
    );
  }

  // Method to add event listeners to an array of buttons
  addEventListeners(buttons, action) {
    buttons.forEach((button) => {
      button.addEventListener('click', action);
    });
  }

  // Method to bind click events to open and close buttons
  buttonEvents() {
    this.addEventListeners(this.closeButtons, () => this.close());
  }

  // Method to open the modal
  close() {
    this.modal.style.display = 'none';
  }
}

// Create a new instance of the ModalManager class
const signUpModal = new ModalManager('.bground', '.close');

// Bind the click events to the open and close buttons
signUpModal.buttonEvents();
