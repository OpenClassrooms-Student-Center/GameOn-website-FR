
//La fonction doit charger en meme temp que le DOM
function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//On écoute l'évenement du DOM chargé
document.addEventListener("DOMContentLoaded", () => {

  // DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const formData = document.querySelectorAll(".formData");
  //Ecoute pour la fermeture du modal
  const modalBtnClosed = document.querySelector(".close").addEventListener("click", closedModal)

  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  }

  // Fermeture modal
  function closedModal() {
    modalbg.style.display = "none";
  }
})

