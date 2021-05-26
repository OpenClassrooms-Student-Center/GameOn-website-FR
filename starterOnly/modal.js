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

// VALIDER FORMULAIRE

// déclaration variable
formulaire = document.getElementById("formulaire");
prenom = document.getElementById("first");
nom = document.getElementById("last");
mail = document.getElementById("email");
nombreTournoi = document.getElementById("quantity");
choixVille = document.getElementsByName("location");


// boite à outil
function nePasSubmit(typeEvenement){
  typeEvenement.preventDefault();
};

function validerNomPrenom(text){
  if (text.value != "" && text.value.length >= 2) {
    return 1;
  } else {
    alert(text.value + " : est INVALIDE : doit avoir au moins 2 caractères");
    return 0;
  };
};

function validerMail(mailAValider){
  let testResult = /[\s\S]{1,}@([a-zA-Z0-9-_]{1,}[.])+[a-zA-Z]{2,3}$/.test(mailAValider.value);
  //^([a-zA-Z0-9_-])+([.]?[a-zA-Z0-9_-]{1,})*@([a-zA-Z0-9-_]{2,}[.])+[a-zA-Z]{2,3}$
  if (testResult == true) {
    return 1;
  } else {
    alert("Test : le mail est invalide forme attendue xx@xx.xx");
    return 0;
  };
};

function validerTournoi(qt){
  let testResult = /^(?!\-)[0-9]{1,}$/.test(qt.value);
  if (testResult == true && qt.value < 99){
    alert("Test : qt tournoi valide");
    return 1;
  } else {
    alert("Le nombre de tournoi doit être un nombre compris entre 0 et 99")
    return 0;
  };  
};

function validerSiUneVilleChoisie(villePossible){
  let chercherVilleNonChoisie = 0;
  for (let ville of villePossible){
    if(ville.checked == false){
      chercherVilleNonChoisie++;
    };
  };
  if(chercherVilleNonChoisie == villePossible.length){
      alert("aucune ville choisie");
      return 0;
    } else {
      alert("une ville est sélectionnée")
      return 1;
  };
};


// déclencheur
formulaire.addEventListener("submit",function (evenement){
  nePasSubmit(evenement);
  validerNomPrenom(prenom);
  validerNomPrenom(nom);
  validerMail(mail);
  validerTournoi(nombreTournoi);
  validerSiUneVilleChoisie(choixVille);
});









/*
function validerEnvoyer (typeEvenement){
  if (validerNomPrenom = 1) {
    alert("test : le formulaire est valide")
  } else {
    alert("test : le formulaire est non valide")
  }
};
*/