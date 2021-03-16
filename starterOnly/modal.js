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

// close modal form

// validation of the form by clicking on submit

// verificcation of the first name and last name field has a minimum of 2 characters / is not empty

// verification of the email address

// verification of a numeric value for the number of competitions

// checking the selection of a radio button

// check the state of the general conditions box, the other box is optional / can be left unchecked

// keep the form data when it does not pass validation

// adding validation or error messages 

// user confirmation message of successful submission

// user interface and functionality test
