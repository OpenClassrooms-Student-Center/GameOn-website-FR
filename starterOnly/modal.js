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
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener("click", closeModal);

// close modal
function closeModal() {
  modalbg.style.display = "none";
}

// inputs validation
function validate()
{

  function removeSpan(span) {
    setTimeout(() => {
      span.style.display = "none";
    }, 
    4000);
  }

  function createSpan(errorMessage, formData) {
    const error = document.createElement("span");
    error.textContent = errorMessage;
    error.style.color = "#cc0000";
    error.style.fontSize = "1rem";
    const span = formData.appendChild(error);

    removeSpan(span);
  }

  // first input validation
  let first = document.getElementById("first").value;

  if (!first.match(/^[a-z]{2,}$/i)) {

    let errorMessage = "Le prénom doit contenir que des lettres et en avoir au moins 2";
    const formData = document.querySelector(".modal-body .formData:nth-child(1)");

    createSpan(errorMessage, formData);

    return false;
  }

  // last input validation
  let last = document.getElementById("last").value;

  if (!last.match(/^[a-z]{2,}$/i)) {
    let errorMessage = "Le nom doit contenir que des lettres et en avoir au moins 2";
    const formData = document.querySelector(".modal-body .formData:nth-child(2)");

    createSpan(errorMessage, formData);

    return false;
  }

  // email validation
  let email = document.getElementById("email").value;

  if (!email.match(/^[\w\-.]{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,4}$/)) {
    let errorMessage = "Veuillez saisir une adresse email valide";
    const formData = document.querySelector(".modal-body .formData:nth-child(3)");

    createSpan(errorMessage, formData);

    return false;
  }

  // birthDate validation
  let birthDate = document.getElementById("birthdate").value;

  if (!birthDate.match(/^[\d]{2}\/[\d]{2}\/[\d]{4}$/)) {
    let errorMessage = "Veuillez renseigner votre date de naissance au format : jj/mm/aaaa";
    const formData = document.querySelector(".modal-body .formData:nth-child(4)");

    createSpan(errorMessage, formData);

    return false;
  }

}
                                                               