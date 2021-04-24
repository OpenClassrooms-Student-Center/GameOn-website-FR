function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".background_modal");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const coches = document.getElementsByClassName("checkbox-label");
const agree = document.getElementsByClassName("checkbox2-label");    
const cases = document.querySelectorAll(".checkbox-icon");;            
const aggreCoche = document.querySelectorAll(".agree-icon");  
        
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display= "block";
  modalbg.style.position="absolute";
  modalbg.style.zIndex="1000000";
}


// remplissage personnalisé des coches lors de la selection utilisateur

for( let i = 0; i < coches.length; i++){
  coches[i].addEventListener("click", () => { 
    cases[i].classList.toggle("fillCoche");
  } )}
  
  for( let i = 0; i < agree.length; i++){
    agree[i].addEventListener("click", () => { 
      aggreCoche[i].classList.toggle("fillCoche2");
    } )}


    const closeModal = document.querySelector(".close_modal");  // Je recupere le bouton permettant de fermer la modal

    closeModal.addEventListener("click", () => {    // j'ecoute l'evenement click sur le bouton pour apppliquer la fonction de fermeture de la fenetre 
      modalbg.style.display= "none";
    })
    
