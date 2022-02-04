function editNav() {
  let x = document.getElementById("myTopnav");
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
const close = document.querySelector(".close"); //constant which retrieves the element corresponding to the cross
const btnClose = document.querySelector(".btn-close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form and reset data
function launchModal() {
  formulary.reset();
  formulary.style.display = "block"; // to be sure that the formulary is displayed in any cases
  dataSent.style.display = "none"; // to remove data sent message if we want to do another registration
  for (let step = 0; step < 5; step++) {
    formularyData[step].removeAttribute("data-error-visible");
  } // to remove borders by default instead of red or blue
  modalbg.style.display = "block";
}

//waiting for a click on the close class and then launching the function closeModal
close.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);

//function allowing to close the modal when clicking on the cross
function closeModal(disabled) {
  modalbg.style.display = "none";
}