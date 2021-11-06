function editNav() {
  var topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBody = document.querySelector(".modal-body");
const infoForm = document.getElementById("formReserve");
const thankYouModal = document.querySelector(".thankyou");
const closeModal = document.querySelector(".close");
const closebuttonModal = document.querySelector(".btn-close");
const submitBtn = document.querySelector(".btn-submit");
// submitBtn.disabled = true;

//form elements

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantityNbr = document.getElementById("quantity");
const radioBtns = document.getElementsByName("location");
const todayDateForm = document.getElementById("birthdate");
const conditionAccept = document.querySelector("#checkbox1");

//today day
const todayDate = new Date().toISOString().slice(0, 10);

// todayDateForm.value = todayDate;

//form error messages
const firstErrorMsg = document.querySelector(".first-error");
const lastErrorMsg = document.querySelector(".last-error");
const emailErrorMsg = document.querySelector(".email-error");
const locationErrorMsg = document.querySelector(".location-error");
const quantityErrorMsg = document.querySelector(".quantity-error");
const dateErrorMsg = document.querySelector(".date-error");
const conditionErrorMsg = document.querySelector(".conditions-error");
const submitErrorMsg = document.querySelector(".submit-error");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//hide all error messages
function hideMessages() {
  firstErrorMsg.style.display = "none";
  lastErrorMsg.style.display = "none";
  emailErrorMsg.style.display = "none";
  dateErrorMsg.style.display = "none";
  locationErrorMsg.style.display = "none";
  submitErrorMsg.style.display = "none";
  quantityErrorMsg.style.display = "none";
  conditionErrorMsg.style.display = "none";
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  infoForm.style.display = "inline"; //show form
  thankYouModal.style.display = "none"; //hide thank you

  hideMessages();

  fillForm();
}

// close modal window
closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
});
closebuttonModal.addEventListener("click", () => {
  modalbg.style.display = "none";
});

//confirm inputs

function fillForm() {
  //first radio button checked
  if (!radioBtns[0].checked) {
    radioBtns[0].checked = true;
  }

  //first name
  firstName.addEventListener("focus", (e) => {
    submitErrorMsg.style.display = "none";
    locationErrorMsg.style.display = "none";
  });

  firstName.addEventListener("input", (e) => {
    if (e.target.value.length < 2) {
      e.target.style.border = "3px solid red";
      firstErrorMsg.style.display = "inline";
      submitBtn.setAttribute("disabled");
    } else {
      e.target.style.border = "3px solid #51d115";
      firstErrorMsg.style.display = "none";
      submitBtn.removeAttribute("disabled");
    }
  });

  //last name

  lastName.addEventListener("focus", (e) => {
    submitErrorMsg.style.display = "none";
    locationErrorMsg.style.display = "none";
  });

  lastName.addEventListener("input", (e) => {
    if (e.target.value.length < 2) {
      e.target.style.border = "3px solid red";
      lastErrorMsg.style.display = "inline";
      submitBtn.setAttribute("disabled");
    } else {
      e.target.style.border = "3px solid #51d115";
      lastErrorMsg.style.display = "none";
      submitBtn.removeAttribute("disabled");
    }
  });

  //email

  email.addEventListener("focus", (e) => {
    submitErrorMsg.style.display = "none";
    locationErrorMsg.style.display = "none";
  });

  email.addEventListener("input", (e) => {
    if (e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      e.target.style.border = "3px solid #51d115";
      emailErrorMsg.style.display = "none";
      submitBtn.removeAttribute("disabled");
    } else {
      e.target.style.border = "3px solid red";
      emailErrorMsg.style.display = "inline";
      submitBtn.setAttribute("disabled");
    }
  });

  //verifying birth date
  todayDateForm.addEventListener("focus", (e) => {
    submitErrorMsg.style.display = "none";
    locationErrorMsg.style.display = "none";
    dateErrorMsg.style.display = "none";
  });

  todayDateForm.addEventListener("input", (e) => {
    if (e.value === null) {
      dateErrorMsg.style.display = "inline";
      e.target.style.border = "3px solid red";
      submitBtn.setAttribute("disabled");
    } else if (e.target.value === todayDate) {
      e.target.style.border = "3px solid red";
      dateErrorMsg.style.display = "inline";
      submitBtn.setAttribute("disabled");
    } else {
      dateErrorMsg.style.display = "none";
      e.target.style.border = "3px solid #51d115";
      submitBtn.removeAttribute("disabled");
    }
  });

  //city of tournement
  quantityNbr.addEventListener("focus", (e) => {
    submitErrorMsg.style.display = "none";
    locationErrorMsg.style.display = "none";
  });

  quantityNbr.addEventListener("change", (e) => {
    locationErrorMsg.style.display = "none";
    submitBtn.removeAttribute("disabled");
    // if (quantityNbr.value > 0) {
    //   let j = 0;
    //   for (i = 0; i < radioBtns.length; i++) {
    //     if (!radioBtns[i].checked) {
    //       j++;
    //       if (j < radioBtns.length) {
    //         quantityErrorMsg.style.display = "none";
    //         locationErrorMsg.style.display = "inline";
    //         submitBtn.setAttribute("disabled");
    //       } else {
    //         locationErrorMsg.style.display = "none";
    //         quantityErrorMsg.style.display = "none";
    //         submitBtn.removeAttribute("disabled");
    //       }
    //     }

    //     if (radioBtns[i].checked) {
    //       j++;
    //       if (j < radioBtns.length) {
    //         quantityErrorMsg.style.display = "none";
    //         locationErrorMsg.style.display = "none";
    //         submitBtn.removeAttribute("disabled");
    //       } else {
    //         locationErrorMsg.style.display = "none";
    //         quantityErrorMsg.style.display = "none";
    //         submitBtn.removeAttribute("disabled");
    //       }
    //     }
    //   }
    // } else if (quantityNbr.value == 0) {
    //   for (i = 0; i < radioBtns.length; i++) {
    //     if (radioBtns[i].checked) {
    //       radioBtns[i].checked = false;
    //     }
    //   }
    // } else {
    //   locationErrorMsg.style.display = "none";
    //   submitBtn.removeAttribute("disabled");
    // }
  });

  // for (var i = 0; i < radioBtns.length; i++) {
  //   radioBtns[i].addEventListener("change", displayCheck);
  // }

  // function displayCheck(e) {
  //   if (e.target.checked) {
  //     if (quantityNbr.value > 0) {
  //       quantityErrorMsg.style.display = "none";
  //       locationErrorMsg.style.display = "none";
  //       submitBtn.setAttribute("disabled");
  //     } else {
  //       quantityErrorMsg.style.display = "inline";
  //       locationErrorMsg.style.display = "none";
  //       submitBtn.removeAttribute("disabled");
  //     }
  //   } else {
  //     if (quantityNbr.value === 0) {
  //       quantityErrorMsg.style.display = "none";
  //       locationErrorMsg.style.display = "inline";
  //       submitBtn.setAttribute("disabled");
  //     } else {
  //       quantityErrorMsg.style.display = "none";
  //       locationErrorMsg.style.display = "none";
  //       submitBtn.removeAttribute("disabled");
  //     }
  //   }
  // }

  //checking conditions
  conditionAccept.addEventListener("change", (e) => {
    if (!e.target.checked) {
      conditionErrorMsg.style.display = "block";
      submitBtn.disabled = true;
    } else {
      conditionErrorMsg.style.display = "none";
      submitBtn.disabled = false;
    }
  });

  //submit event
  submitBtn.addEventListener("click", ($event) => {
    if (
      firstName.value === "" ||
      lastName.value === "" ||
      email.value === "" ||
      todayDateForm.value === "" ||
      todayDateForm.value === todayDate ||
      !conditionAccept.checked
    ) {
      submitErrorMsg.style.display = "inline";
      submitBtn.disabled = true;
    } else {
      $event.preventDefault();

      hideMessages();

      //reset borders inputs
      firstName.style.border = "0px solid #fff";
      lastName.style.border = "0px solid #fff";
      email.style.border = "0px solid #fff";
      todayDateForm.style.border = "0px solid #fff";

      infoForm.reset();
      thankYouModal.style.display = "inline";
      infoForm.style.display = "none";
    }
  });
}
