// Form
    const form = document.querySelector('form');
    const firstnameField = document.getElementById('first');
    const lastnameField = document.getElementById('last');
    const emailField = document.getElementById('email');
    const birthdateField = document.getElementById('birthdate');
    const quantityField = document.getElementById('quantity');
    const conditionsCheckbox = document.getElementById('checkbox1');
    const locations = document.querySelectorAll("input[name='location']");

// Messages errors
    const errorMessages = {
        name: "Il doit être composé de deux lettres minimum et cinquantes lettres maximum.",
        email: "L'adresse e-mail est incorrecte. Elle doit être au format : utilisateur@service.com.",
        quantity: 'Le nombre de tournois doit être compris entre 0 et 99.',
        birthdate: 'Vous devez avoir entre 18 et 100 ans.',
        city: 'Vous devez choisir une ville pour vous inscrire.',
        conditions: "Vous devez accepter les conditions d'utilisation.",
    }

// Regular Expressions
    const regExpName = new RegExp(`^[a-zA-Z]{2,50}$`);
    const regExpEmail = new RegExp(`^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$`);
    const RegExpQuantity = new RegExp(`^(?:[0-9]|[1-9][0-9])$`);

// Hamburger menu
    const btnHamburger = document.getElementById('hamburger-menu');
    btnHamburger.addEventListener('click', () => {
        document.querySelector('.menu').classList.toggle('menu_toggle')
    })

// Modal
    function editNav() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }

// DOM Elements
    const modalbg = document.querySelector(".bground");
    const validedModal = document.querySelector(".valided-modal");
    const validedModalContent = document.querySelector(".valided-modal-content");
    const modalBtn = document.querySelectorAll(".btn");
    const formData = document.querySelectorAll(".formData");

// launch modal event
    modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
    function launchModal() {
      modalbg.style.display = "block";
}

// close modal event
    let close = document.querySelector(".close");
    close.addEventListener("click", () =>{
      closeModal();
    })

// close modal form
    function closeModal() {
      modalbg.style.display = 'none';
      validedModal.style.display = 'none';
    }

// display error messages
  function errorMessageVisible(input, message) {
    let existingErrorField = input.parentNode.querySelector('.error-field');
    if (existingErrorField) {
      existingErrorField.textContent = message; // Update the existing error message
    } else {
      let errorField = document.createElement('div');
      errorField.className = 'error-field'
      errorField.textContent = message
      input.parentNode.appendChild(errorField)
      input.style.border = 'solid 2px red'
    }
  }

// Remove error messages
    function removeErrorMessage(input) {
      const existingErrorField = input.parentNode.querySelector('.error-field');
      if (existingErrorField) {
        existingErrorField.remove();
      }
    }

//Functions

    // Check input values
      function checkInputValue(regex, input, errorMessage ) {
        if (!regex.test(input.value)) {
          errorMessageVisible(input, errorMessage)
          return false;
        }
        removeErrorMessage(input)
        return true;
      }

      // Check birthdate value
      function checkBirthdateValue(input, errorMessage) {
        let birthdate = new Date(input.value);
        let currentDate = new Date();
        console.log(currentDate)

        // Difference is in milliseconds
        let difference = currentDate - birthdate;
        console.log(difference)

        // Convert the difference into years
        let userAge = Math.floor(difference / (365.25 * 24 * 60 * 60 * 1000));
        console.log(userAge);
        if (userAge < 18 || userAge > 100 || isNaN(birthdate.getTime())) {
            errorMessageVisible(input, errorMessage);
            return false;
        }
        removeErrorMessage(input);
        return true;
    }

    // Check selection of the tournament's city
    function checkLocations(locations, errorMessage) {
        let anyChecked = false;

        for (let location of locations) {
            if (location.checked) {
                anyChecked = true;
                break; // Exit the loop if a checkbox is checked
            }
        }
        // If no checkboxes are checked, display the error message
            if (!anyChecked) {
                errorMessageVisible(locations[0], errorMessage);
                return false;
            }
        // If at least one checkbox is checked, remove the error message
            removeErrorMessage(locations[0]);
            return true;
    }

    // Check checkbox conditions
        function checkConditions(input, errorMessage) {
            if (!input.checked) {
                errorMessageVisible(input, errorMessage)
                return false;
            }
            return true;
        }

    // Display and close confirmation's modal
        function confirmationModal() {
            let closeModal = document.querySelector('.content')
            closeModal.style.display = 'none';
            validedModal.style.display = "flex";
            let closeButton = document.querySelector('.btn-close')
            let closeCross = document.querySelector('.close-modal')

            // This part allows you to hide the "sign up" button for a computer or tablet by clicking the "close" button.
            closeButton.addEventListener('click', function() {
            validedModal.style.display = 'none';
            modalbg.style.display = 'none';
            });

            // This part allows you to hide the "sign up" button for a computer or tablet by clicking the cross.
            closeCross.addEventListener('click', function() {
              validedModal.style.display = 'none';
              modalbg.style.display = 'none';
              });
        }

// Form validation
  function validateForm() {

      let firstnameValid = checkInputValue(regExpName, firstnameField, errorMessages.name)
      let lastnameValid = checkInputValue(regExpName, lastnameField, errorMessages.name)
      let emailValid = checkInputValue(regExpEmail, emailField, errorMessages.email)
      let birthdateValid = checkBirthdateValue(birthdateField, errorMessages.birthdate )
      let quantityValid = checkInputValue(RegExpQuantity, quantityField, errorMessages.quantity)
      let locationvalid = checkLocations(locations, errorMessages.city)
      let conditionsChecked = checkConditions(conditionsCheckbox, errorMessages.conditions)

      return firstnameValid && lastnameValid && emailValid && birthdateValid && quantityValid && locationvalid && conditionsChecked
  }

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
          confirmationModal()
        }
    });
