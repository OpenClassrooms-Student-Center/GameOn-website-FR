function editNav() {
  var x = document.getElementById("myTopnav");
  var y = document.querySelector(".header-logo");

  if (x.className === "topnav") {
    x.className += " responsive fixnavbar";
    y.style.display = "none";
  } else {
    x.className = "topnav";
    y.style.display = "block";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Found button by ID
const closeBtn = document.getElementById("close");
const btnSubmit = document.getElementById("btn-submit");

// DOM Elements for FORM Check
const inputFirst = document.getElementById("first");
const inputLast = document.getElementById("last");
const inputEmail = document.getElementById("email");
const inputBirthdate = document.getElementById("birhtdate");
const checkBox1 = document.getElementById("checkbox1");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Check if i can enable the button submit by checking if "checkbox" is checked
function stateCheckBox() {
  if (checkBox1.checked) {
    btnSubmit.classList.remove("btn-disabled");
    return true;
  } else {
    btnSubmit.classList.add("btn-disabled");
    return false;
  }
}

// Set custom error message
function customMessageInput(elementID,Message) {

  elementID.addEventListener('input', () => {
    elementID.setCustomValidity('');
    elementID.checkValidity();
  });

  elementID.addEventListener('invalid', () => {
    elementID.setCustomValidity(Message);
  });
  

}
// Function validate form
function validate() {
  event.preventDefault(); // Avoid default behavior of form

  // We check only State of checkbox since default behavior of HTML required and minlength do the job and prevent from sending form
  if (stateCheckBox() == true) {
    alert("Merci! Votre réservation a été reçue."); // Alert to show réservation is done
    closeModal(); // Close the form
  }
  else {
    alert("Vous devez accepter les conditions d'utilisation pour valider le formulaire !");
  }
}

function Main() {
  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  // Lauch close modal event
  closeBtn.addEventListener("click", closeModal);

  // Lauch CheckBox Check each time we click on the Checkbox1 (T.O.S)
  checkBox1.addEventListener("click", stateCheckBox);

  // Custom message for input 
  customMessageInput(inputFirst,"Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  customMessageInput(inputLast, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  customMessageInput(inputEmail, "Veuillez entrer un email au bon format.");
  customMessageInput(inputBirthdate, "Vous devez entrer votre date de naissance.");

}


Main();
