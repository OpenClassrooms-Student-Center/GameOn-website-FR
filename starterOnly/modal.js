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

//fermer modal

document.getElementById("btn-close-modale").addEventListener("click",function(){
  modalbg.style.display = "none";
});


// valider le formulaire
// variable
const prenom = document.getElementById("first");
const nom = document.getElementById("last").innerText;
const envoyerFormulaire = document.getElementById("envoyer-formulaire");


//fonction
function miniDeuxCaracteres (e) {
  return /[\s\S]{2,}/.test(e);
};

prenom.addEventListener("change", function(a) {
  if (miniDeuxCaracteres(a.target.value) == false){
    alert("le prénom doit contenir au moins 2 caractere");
  }else if (miniDeuxCaracteres(a.target.value) == ""){
    alert("veuillez remplir le champ prenom");
  }else {
    alert("le prénom rentré est valide");
  };
});




// test
console.log("prénom = " + prenom.innerText);
console.log("2 caractere = " + miniDeuxCaracteres.value);