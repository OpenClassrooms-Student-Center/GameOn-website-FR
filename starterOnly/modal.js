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
const closes = document.querySelectorAll(".closes, .exit");

// launch modal event  FUNCTION
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form 
function launchModal() {
  modalbg.style.display = "block";
  console.log("test")
}

//launch switch modal to bye
closes.addEventListener("click",(e) => closeModal(e));


// switch modal form to bye

function closeModal(e) {
  console.log(e)
  e.target.parentElement.parentElement.style.display = "none";
  console.log("exit modal")


}

