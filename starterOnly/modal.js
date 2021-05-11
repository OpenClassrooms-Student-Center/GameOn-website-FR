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
const formData = document.querySelectorAll(".formData");
const content = document.querySelectorAll(".content")[0];

// EVENTS LISTENERS

document.addEventListener("click", (e) => {
  if (e.target.matches(".modal-btn")) {
    //Case if user click on any element with classes .modal-btn
    launchModal();
  } else if (
    e.target.matches(".close") ||
    e.target.closest(".content") === null
  ) {
    //Case if user click either on close element or any element outside the content div.
    closeModal();
  }
});

// launch modal form
function launchModal() {
  // adding specific classes to bgground et content to display them
  modalbg.classList.add("bground--show");
  content.classList.add("content--show");
}

function closeModal() {
  // removing specific classes to bgground et content to display them
  content.classList.remove("content--show");
  modalbg.classList.remove("bground--show");
}
