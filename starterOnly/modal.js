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





// valider les données du prénom

//variable
const prenomFormulaire = document.getElementById("first");
const affichageValiditePrenom = document.getElementById("validite-prenom");


// ecoute
prenomFormulaire.addEventListener("input", function(valeur){
    function isValidNumber(e){
      return /\D/.test(e);
    };
    let caractereSaisie = valeur.target.value;
    isValidNumber(caractereSaisie);

    
   switch(isValidNumber){
      case "true" : affichageValiditePrenom.textContent = "je suis vrai";
      break;
      case "false" : affichageValiditePrenom.textContent = "je suis faut";
      break;
   };
    
   
    
    console.log("isvalidnumber : " + isValidNumber(caractereSaisie));
    console.log("saisie : " + caractereSaisie);
    console.log("validite prenom :" + affichageValiditePrenom.innerText);
  }
);


