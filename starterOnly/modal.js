// gestion du comportement responsive

function editNav() {
  var myTopnav = document.getElementById("myTopnav")
  if (myTopnav.className === "topnav") {
    myTopnav.className += " responsive"
  } else {
    myTopnav.className = "topnav"
  }
}
/* on crée la classe Form avec ses attributs et ses méthodes */
class Form {
  constructor(formId, modalBtnId, closeBtnId, submitBtnId, modalId) {
    this.formRequest = document.getElementById(formId)
    this.openBtn = document.querySelectorAll(modalBtnId)
    this.closeBtn = document.getElementById(closeBtnId)
    this.submitBtn = document.querySelector(submitBtnId)
    this.modalBg = document.getElementById(modalId)
    this.validationMessage = document.getElementById("validation-message")
    this.closeValidationBtn = document.getElementById("close-validation-message")
  }
  // méthode pour ouvrir la modale
  openForm() {
    this.openBtn.forEach((btn) => btn.addEventListener("click", () => {
      this.modalBg.style.display = "block";
    }));
  }
  // méthode pour fermer la modale
  closeForm() {
    this.closeBtn.addEventListener("click", () => {
      this.modalBg.style.display = "none";
    });
  }
  // méthode pour la gestion des erreurs
  showError(fieldId, isOk, element) {
    const errorMessage = document.getElementById(`error-${fieldId}`);
    if (errorMessage) {
      if (isOk) {
        errorMessage.style.display = "none";
        element.style.border ="none"
      } else {
        errorMessage.style.display = "block";
        element.style.border ="2px solid red"
      }
    } 
  }
  // méthodes de validation en fonction du type de champ
  validateText(value, fieldId, element) {
    const isOk = /^[a-zA-Z-]{2,}$/.test(value); // on teste la valeur du champ avec une regex
    this.showError(fieldId, isOk, element);
    return isOk;
  }

  validateEmail(value, fieldId, element) {
    const isOk = /^[a-z1-9-_.]+@[a-z1-9-_.]+\.[a-z1-9-_.]+$/.test(value);
    this.showError(fieldId, isOk, element);
    return isOk;
  }

  validateDate(value, fieldId, element) {
    const currentYear = new Date().getFullYear();
    const isOk = currentYear - parseInt(value) <= 120 && currentYear - parseInt(value) >= 7; // parseInt() pour convertir string en integer
    this.showError(fieldId, isOk, element);
    return isOk;
  }

  validateNumber(value, fieldId, element) {
    const isOk = value <= 99 && value !== '';
    this.showError(fieldId, isOk, element);
    return isOk;
  }

  validateRadio(name, fieldId, element) {
    const radioBtns = document.getElementsByName(name); // on boucle sur les radios pour récupérer une radio ckecked 
    let isOk = false;
    for (let i = 0; i < radioBtns.length; i++) {
      if (radioBtns[i].checked) {
        isOk = true;
        break; // break pour casser la boucle quand une valeur true est trouvée
      }
    }
    this.showError("location", isOk, element);
    return isOk;
  }

  validateCheckbox(value, fieldId, element) {
    const isOk = value;
    this.showError(fieldId, isOk, element);
    return isOk;
  }
  // méthode pour la validation du formulaire avec l'écoute de l'event submit
  formValidation() {
    this.formRequest.addEventListener("submit", (event) => {
      let formIsValid = true; // on initialise la variable à true et on boucle sur tous les champs du formulaire sauf checkbox2 et submitBtn

      for (let i = 0; i < this.formRequest.elements.length; i++) {
        const element = this.formRequest.elements[i];
        const formFieldType = element.type;
        const fieldId = element.id;
        let isValid = false;

        if (formFieldType === 'text') {
          isValid = this.validateText(element.value, fieldId, element);
        } else if (formFieldType === 'email') {
          isValid = this.validateEmail(element.value, fieldId, element);
        } else if (formFieldType === 'date') {
          isValid = this.validateDate(element.value, fieldId, element);
        } else if (formFieldType === 'number') {
          isValid = this.validateNumber(element.value, fieldId, element);
        } else if (formFieldType === 'radio') {
          isValid = this.validateRadio(element.name, fieldId, element);
        } else if (formFieldType === 'checkbox' && fieldId === 'checkbox1') {
          isValid = this.validateCheckbox(element.checked, fieldId, element);
        } else if (fieldId === 'checkbox2' || formFieldType === 'submit') {
          continue
        }

        if (!isValid) {
          formIsValid = false;
        }
      }

      if (formIsValid) {
        this.modalBg.style.display = "none"
        this.validationMessage.style.display = "flex";
        event.preventDefault()
      } else {
        event.preventDefault()
      }
    });
  }
  // méthode pour la validation des champs en temps réel (écoute de l'évenement input)
  realTimeValidation() {
    for (let j = 0; j < this.formRequest.elements.length; j++) {
      const element = this.formRequest.elements[j];
      const formFieldType = element.type;
      const fieldId = element.id;

      element.addEventListener("input", () => {
        let isOk = false;
        let errorField = fieldId
        if (formFieldType === 'text') {

          isOk = this.validateText(element.value, fieldId, element);
        } else if (formFieldType === 'email') {
          isOk = this.validateEmail(element.value, fieldId, element);
        } else if (formFieldType === 'date') {
          isOk = this.validateDate(element.value, fieldId, element);
        } else if (formFieldType === 'number') {
          isOk = this.validateNumber(element.value, fieldId, element);
        } else if (formFieldType === 'radio') {
          isOk = this.validateRadio(element.name, fieldId, element);
          errorField = "location" // "location pour la gestion des erreurs sur les radios"
        } else if (formFieldType === 'checkbox' && fieldId === 'checkbox1') {
          isOk = this.validateCheckbox(element.checked, fieldId, element);
        }
        this.showError(errorField, isOk, element);
      });
    }
  }

  // méthode pour la fermeture du message de validation
  closeValidationMessage() {
    this.closeValidationBtn.addEventListener("click", () => {
      this.validationMessage.style.display = "none";
    });
  }

  // méthode init() pour regrouper toutes les méthodes et les exécuter
  init() {
    this.openForm();
    this.closeForm();
    this.realTimeValidation();
    this.formValidation();
    this.closeValidationMessage()
  }
}

// instanciation de la classe avec newForm, application des méthodes via init()
const newForm = new Form('form', '.modal-btn', 'close-modal-btn', '.btn-submit', 'modal');
newForm.init();
