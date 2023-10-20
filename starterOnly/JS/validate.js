//init validation modal
const modalBody = document.querySelector(".modal-body");
const modalValidate = document.querySelector(".modal-validate");
modalValidate.style.display = "none";
//function that will display validation message
function displayValidationMessage() {
  modalBody.style.display = "none";
  modalValidate.style.display = "flex";
  // reset form
  document.getElementById("reserve").reset();
}

//handle errors messages
function validateField(field, checkIfValidate) {
  checkIfValidate()
    ? field.parentElement.removeAttribute("data-error-visible")
    : field.parentElement.setAttribute("data-error-visible", "true");

  /*
  try {
    validateFunction();
    field.parentElement.removeAttribute("data-error-visible");
  } catch (error) {
    field.parentElement.setAttribute("data-error-visible", "true");
  }
  */
}

//function that checks inputs values

function validate(event) {
  //prevent form from closing in case of error
  event.preventDefault();
  const firstname = document.getElementById("first");
  const lastname = document.getElementById("last");
  const email = document.getElementById("email");
  const integer = document.getElementById("quantity");
  const termsCheckbox = document.getElementById("checkbox1");
  const location = document.getElementsByName("location");

  // firstname and lastname must be >= 2

  validateField(firstname, () => {
    /*
   if (firstname.value.length < 2) return false;
   return true
  */
    return !(firstname.value.length < 2);
  });
  validateField(lastname, () => {
    if (lastname.value.length < 2) {
      console.log("==>", error);
      return error;
    }
  });
  //checks email pattern

  validateField(email, () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
      return error;
    }
  });
  //checks if it is a number

  validateField(integer, () => {
    if (integer.value.trim() === "" || isNaN(integer.value)) {
      return error;
    }
  });
  //checks all inputs with the name location to see if at least one has been checked
  let radioSelected = false;
  for (const radio of location) {
    if (radio.checked) {
      radioSelected = true;
      break;
    }
  }
  validateField(location[0], () => {
    if (!radioSelected) {
      return error;
    }
  });
  //checks that the terms and condition has been checked
  validateField(termsCheckbox, () => {
    if (!termsCheckbox.checked) {
      return error;
    }
  });
  // if no errors, display the validation message
  if (!document.querySelector(".formData[data-error-visible=true]")) {
    displayValidationMessage();
  }
}

const submit = document.getElementById("button-submit");

submit.addEventListener("click", validate);
