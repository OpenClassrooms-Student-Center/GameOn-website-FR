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
const crossCloseModalBtn = document.querySelector(".close");
const endModalBtn = document.querySelector(".btn-close");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.querySelector(".btn-submit");
const form = document.querySelector("form");
const errorMessage = document.querySelectorAll(".error");
const validate = document.querySelector(".validate");
const navBar = document.querySelector(".main-navbar");
const menuIcon = document.querySelector(".icon");
let isModalOpen = false;
let heroSection = document.querySelector(".hero-section");
let header = document.querySelector("header");
let footer = document.querySelector("footer");

// Regex

const emailRegex = new RegExp(
  "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
);

////////////////////////////////////////////

// open menu on display mobile

menuIcon.addEventListener("click", () => {
  navBar.classList.toggle("open");
});

// remove mobile nav style if screen is resize

window.addEventListener("resize", (e) => {
  if (isModalOpen) {
    if (e.currentTarget.innerWidth > 1000) {
      navBar.classList.remove("open");
      header.setAttribute("class", "select-hide");
    } else if (e.currentTarget.innerWidth < 1000) {
      header.setAttribute("class", "");
    }
  }
});

////////////////////////////////////////////

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  form.style.display = "block";
  validate.style.display = "none";
  isModalOpen = true;
  handleListernerOnClick(isModalOpen);
  heroSection.setAttribute("class", "select-hide");
  footer.setAttribute("class", "select-hide");

  if (window.innerWidth > 1000) {
    header.setAttribute("class", "select-hide");
  }
}

////////////////////////////////////////////

// Handle close modal

const closeModal = () => {
  modalbg.style.display = "none";
  validate.style.display = "none";
  isModalOpen = false;
  handleListernerOnClick(isModalOpen);
  heroSection.setAttribute("class", "hero-section");
  header.setAttribute("class", "");
  footer.setAttribute("class", "");
};

// click out of the box

const clickTarget = (e) => {
  if (e.target.getAttribute("class") == "bground") {
    closeModal();
  }
};

const handleListernerOnClick = (isModalOpen) => {
  if (isModalOpen) {
    window.addEventListener("click", clickTarget);
  } else if (!isModalOpen) {
    window.removeEventListener("click", clickTarget);
  }
};

// click on cross

crossCloseModalBtn.addEventListener("click", closeModal);

// click on end button

endModalBtn.addEventListener("click", closeModal);

////////////////////////////////////////////

//Handle submit form

const handleData = (e) => {
  e.preventDefault();

  // Collect forms values
  let first = document.forms["reserve"]["first"];
  let last = document.forms["reserve"]["last"];
  let email = document.forms["reserve"]["email"];
  let birthdate = document.forms["reserve"]["birthdate"];
  let numberTournament = document.forms["reserve"]["quantity"];
  let selectedTournament = isChecked("radio", "reserve", "location");
  let isTermsCheck = document.forms["reserve"]["terms"].checked;

  checkValidity(
    first,
    last,
    email,
    birthdate,
    numberTournament,
    selectedTournament,
    isTermsCheck
  );
};

// Check which radio is checked

const isChecked = (type, form, input) => {
  if (type === "radio") {
    let radios = document.forms[form][input];
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        return radios[i].value;
      }
    }
  }
};

// Control all form values to display or not the error message

const checkValidity = (
  first,
  last,
  email,
  birthdate,
  numberTournament,
  selectedTournament,
  isTermsCheck
) => {
  let checkPass = true;

  // Check 2 or more character on first and last name

  if (!first.validity.valid) {
    checkPass = false;

    formData[0].setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
    formData[0].setAttribute("data-error-visible", true);
  } else {
    formData[0].setAttribute("data-error", "");
    formData[0].setAttribute("data-error-visible", false);
  }
  if (!last.validity.valid) {
    checkPass = false;
    formData[1].setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    formData[1].setAttribute("data-error-visible", true);
  } else {
    formData[1].setAttribute("data-error", "");
    formData[1].setAttribute("data-error-visible", false);
  }

  // Check email can exist

  if (!emailRegex.test(email) && !email.validity.valid) {
    checkPass = false;
    formData[2].setAttribute(
      "data-error",
      "Veuillez entrer une adresse electronique valide exemple@exemple.com"
    );
    formData[2].setAttribute("data-error-visible", true);
  } else {
    formData[2].setAttribute("data-error", "");
    formData[2].setAttribute("data-error-visible", false);
  }

  // Check birthdate exist and is between 1900 and 2023

  if (
    parseInt(birthdate.value.split("-")[0]) < 1900 ||
    parseInt(birthdate.value.split("-")[0]) > 2023 ||
    !birthdate.validity.valid
  ) {
    checkPass = false;
    formData[3].setAttribute(
      "data-error",
      "Vous devez entrer une date de naissance valide."
    );
    formData[3].setAttribute("data-error-visible", true);
  } else {
    formData[3].setAttribute("data-error", "");
    formData[3].setAttribute("data-error-visible", false);
  }

  // Check if numberTournament is a number

  if (!numberTournament.validity.valid) {
    checkPass = false;
    formData[4].setAttribute(
      "data-error",
      "Veuillez entrer un nombre entre 0 et 99."
    );
    formData[4].setAttribute("data-error-visible", true);
  } else {
    formData[4].setAttribute("data-error", "");
    formData[4].setAttribute("data-error-visible", false);
  }
  // Check selectedTournament exist

  if (!selectedTournament) {
    checkPass = false;
    formData[5].setAttribute("data-error", "Veuillez choisir une option");
    formData[5].setAttribute("data-error-visible", true);
  } else {
    formData[5].setAttribute("data-error", "");
    formData[5].setAttribute("data-error-visible", false);
  }

  // Check if terms is checked
  if (!isTermsCheck) {
    checkPass = false;
    formData[6].setAttribute(
      "data-error",
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
    formData[6].setAttribute("data-error-visible", true);
  } else {
    formData[6].setAttribute("data-error", "");
    formData[6].setAttribute("data-error-visible", false);
  }

  validation(checkPass);
};

// if valid send form and display thanks on modal

const validation = (checkPass) => {
  if (!checkPass) {
    return;
  }

  form.style.display = "none";
  validate.style.display = "block";
};

form.addEventListener("submit", (e) => {
  handleData(e);
});

///////////////////////////////////////////
