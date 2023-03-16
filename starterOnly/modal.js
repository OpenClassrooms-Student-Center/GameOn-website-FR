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
const modalClose = document.querySelector(".close");
const modalSubmit = document.querySelector(".btn-submit");
const modalBody = document.querySelector(".modal-body");
const modalCloseThanks = document.querySelector(".btn-close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal(event) {
  modalbg.style.display = "block";
  event.preventDefault();
}

// close modal 
modalClose.onclick = function(){
  modalbg.style.display = "none";  
}

// page de remerciement 
function thanksMessage(){
  // recupération du corps du formulaire
  const contentForm = document.querySelector(".modal-body");
  contentForm.innerHTML = "";

  // création de la div contenant le message
  const thanksMessageWindow = document.createElement("div");
  thanksMessageWindow.classList.add("content");

  // création du message
  const thanksMessage = document.createElement("p");
  thanksMessage.innerHTML = "merci pour votre inscription";
  thanksMessage.style.fontSize = "30px";

  // création du bouton
  const boutonFermer = document.createElement("button");
  boutonFermer.innerText = "fermer";
  boutonFermer.classList.add("btn-submit");
  boutonFermer.onclick = function(){
    modalbg.style.display = "none";
  }

  // rattacher les elements à l'element parent (modal-body pour la fenetre)
  // (modal-body parent de la fenetre)
  // (fenetre parente du bouton et du message)
  contentForm.appendChild(thanksMessageWindow);
  thanksMessageWindow.appendChild(thanksMessage);
  thanksMessageWindow.appendChild(boutonFermer);
}

// valider le formulaire //

function validate(event){
  /*try{
    event.preventDefault();
    console.log("toto");
  }catch(er){
    console.log(er);
  }*/

  // declaration des fonctions de validation 
  validateFirstName();
  validateName();
  validateEmail();
  validateCheckbox();
  validateCheckboxTerms();

  // condition de validation du formulaire si tout est true 
  if(  validateFirstName() == true && validateName() == true && validateEmail() == true && validateCheckbox() == true && validateCheckboxTerms() == true){
    thanksMessage();
  }else{
    event.preventDefault();
    return false;
  }
}


// messages d'erreur //

const errorMessageFirstName = document.querySelector("#errorFirstName");
const errorMessageName = document.querySelector("#errorName");
const errorMessageEmail = document.querySelector("#errorEmail");
const errorMessageCheckbox = document.querySelector("#errorCheckbox");
const errorMessageTerms = document.querySelector("#errorCheckboxTerms");

// valider le first name //

function validateFirstName(){
  const firstName = document.getElementById("first");
    if (!firstName.checkValidity()) {
      errorMessageFirstName.innerHTML = " Le champ Prénom a un minimum de 2 caractères";
      errorMessageFirstName.style.color= "red";
      return false;
    }else{
      errorMessageFirstName.innerHTML = "";
      return true;
    }
}

    // valider le nom  //

function validateName(){
  const Name = document.getElementById("last");
    if (!Name.checkValidity()) {
      errorMessageName.innerHTML = " Le champ Prénom a un minimum de 2 caractères";
      errorMessageName.style.color= "red";
      return false;
    }else{
      errorMessageName.innerHTML = "";
      return true;
    }
}

    // valider Email//

function validateEmail(){
  const email = document.getElementById("email");
    if (!email.validity.patternMismatch) {
      errorMessageEmail.innerHTML = "";
      return true;
    }else{
      errorMessageEmail.innerHTML = "L'adresse mail doit être valide";
      errorMessageEmail.style.color= "red";
      return false;
    }
}


  // valider une option //

function validateCheckbox(){
  // recucperer les name des checkbox
  const boxChecked = document.getElementsByName('location');
  // recuperer le span pour afficher le message
  const messageErrorCheckbox = document.getElementById('errorCheckbox');
  // initialiser la variable isChecked
  let isChecked = false;
  // faire une boucle pour traverser tous les boutons afin de savoir si 1 est coché
  for(i=0; i<boxChecked.length; i++){
    if(boxChecked[i].checked){
      isChecked = true; // mettre la variable à true si au moins une case est cochée
      break; // sortir de la boucle car au moins une case est cochée
    }
  }
  if(isChecked){
    messageErrorCheckbox.innerHTML = "";
    return true;
  }else{
    messageErrorCheckbox.innerHTML = "Vous devez choisir une option.";
    messageErrorCheckbox.style.color= "red";
    return false;
  }
};

  // valider les conditions //

function validateCheckboxTerms(){
  const radioButtons = document.querySelector('#checkbox1');
    if (!radioButtons.checked) {
      const messageErrorTerms = document.querySelector('#errorCheckboxTerms')
      messageErrorTerms.innerText = "Vous devez vérifier que vous acceptez les termes et conditions.";
      messageErrorTerms.style.color = "red";
      return false;
    }else{
      document.querySelector('#errorCheckboxTerms').innerText = "";
      return true;
    }
};      








  
