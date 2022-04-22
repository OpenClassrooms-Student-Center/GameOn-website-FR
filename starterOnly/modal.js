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
modalBtn.forEach((btn) => btn.addEventListener("click", (event) => {
  // launch modal form
  modalbg.style.display = "block";
}));

// close modal event
closeBtn.addEventListener("click", (event) => {
  // delay before close modal
  window.setTimeout(function() {
      // close modal form
      modalbg.style.display = "none";
  }, 400)
});

