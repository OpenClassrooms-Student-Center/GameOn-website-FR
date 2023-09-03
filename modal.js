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
const modalCloseBtn = document.querySelector(".modal-close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

modalCloseBtn.addEventListener("click", closeModal)

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

function closeModal(e) {
    let modalBG = e.target.parentNode.parentNode
    if (modalBG.style.display === "block") {
        modalBG.style.display = "none"
    }
}