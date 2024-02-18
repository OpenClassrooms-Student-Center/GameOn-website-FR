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

// Form validation

class FormValidator {
  constructor(formId, fields) {
    this.form = document.getElementById(formId);
    this.fields = fields;
    this.fieldValues = {};

    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      this.validateFormFields();
      console.log(this.fieldValues);
      console.log(this.isFormValid());
      if (this.isFormValid()) {
      }
    });
  }

  validateFormFields() {
    let isValid = true;

    // Special case for location checkboxes

    // Get all checkboxes with the name 'location'
    const locationCheckBoxes = document.getElementsByName('location');
    let checkedValue = null;

    // Iterate over the checkboxes
    for (let i = 0; i < locationCheckBoxes.length; i++) {
      // If the checkbox is checked, store its value and break the loop
      if (locationCheckBoxes[i].checked) {
        checkedValue = locationCheckBoxes[i].value;
        break;
      }
    }

    // If no checkbox is checked, display an error message
    if (checkedValue === null) {
      isValid = false;
    } else {
      this.fieldValues['location'] = checkedValue;
    }

    // Get checkbox2
    const checkbox2 = document.getElementById('checkbox2');

    // Store its checked status and value
    this.fieldValues['checkbox2'] = checkbox2.checked;

    for (const fieldId in this.fields) {
      // Get the field element and its validation rules
      const field = document.getElementById(fieldId);
      const { test } = this.fields[fieldId];

      // For other fields, validate the field based on its type and validation rules
      if (!test(field.type === 'checkbox' ? field : field.value)) {
        isValid = false;
      } else {
        // Set the value of the field
        this.fieldValues[fieldId] =
          field.type === 'checkbox' ? field.checked : field.value;
      }
    }
    return isValid;
  }

  isFormValid() {
    return this.validateFormFields();
  }

  displayError(inputElement, message) {
    const formData = inputElement.parentElement;
    formData.setAttribute('data-error', message);
    formData.setAttribute('data-error-visible', 'true');
  }

  hideError(inputElement) {
    const formData = inputElement.parentElement;
    formData.removeAttribute('data-error');
    formData.removeAttribute('data-error-visible');
  }
}

// Form validation

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;

const formRules = {
  first: {
    test: (value) => value.length >= 2,
  },
  last: {
    test: (value) => value.length >= 2,
  },
  email: {
    test: (value) => emailRegex.test(value),
  },
  birthdate: {
    test: (value) =>
      value.trim() !== '' &&
      birthdayRegex.test(value) &&
      new Date(value) < new Date(),
  },
  quantity: {
    test: (value) => !isNaN(value) && value >= 0 && value !== '',
  },
  checkbox1: {
    test: (value) => value.checked,
  },
};

const formValidator = new FormValidator('reserveForm', formRules);
