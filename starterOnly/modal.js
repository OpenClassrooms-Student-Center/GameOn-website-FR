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
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function hideModal() {
  modalbg.style.display = "none";
}
function validate(event) {
  try {
    event.preventDefault();

    const fields = [
      { id: "first", name: "prénom" },
      { id: "last", name: "nom" },
      { id: "email", name: "e-mail" },
      { id: "birthdate", name: "date de naissance" },
      { id: "quantity", name: "quantité" },
    ];

    let isValid = true;

    fields.forEach((field) => {
      const baliseField = document.getElementById(field.id);
      const valeurField = baliseField.value.trim();

      if (valeurField === "") {
        console.log(`Le champ ${field.name} est vide`);
        isValid = false;
        throw new Error(`Le champ ${field.name} est vide`);
      }
    });

    if (isValid) {
      console.log("All fields are filled");

      // Additional validation logic can be added here

      // If all validations pass, you can submit the form
      form.submit();

      // Alternatively, you can hide the modal or perform any other desired action
      hideModal();
    }
  } catch (error) {
    console.error(error.message);
  }
}

// Rest of your code...

const form = document.querySelector("form");
form.addEventListener("submit", validate);
