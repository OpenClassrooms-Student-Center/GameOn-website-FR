

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}





// affichage du formulaire
// selection des class concernées pour l'affichage formulaire
const modalBackground = document.querySelector(".bground");
const modalButton = document.querySelectorAll(".modal-btn");

//fonction qui change le style css de la class bground en bloc
function launchModal() {
  modalBackground.style.display = "block";
}


//boucle modalButton qui demarre l'evenement avec un click
modalButton.forEach((btn) => btn.addEventListener("click", launchModal));

//fermeture du formulaire

// selection des class concernées pour la fermeture
const closeMod = document.querySelector(".close")

//fonction fermeture du formulaire
function closeModal(){
  modalBackground.style.display = "none";
}

//evenement qui ferme
closeMod.addEventListener("click", closeModal)

