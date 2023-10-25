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


//////////////////Fermeture du formulaire///////////
const closeModalBtn = document.querySelector(".close");
closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

//Vérifier que le champ Prénom a un minimum de 2 caractères n'est pas vide.

//Fonction qui vérifie le prénom et le nom non vide et au moins 2 caractère

function checkIdentity(identity){
  if(identity.value.trim() === ""){
    throw new Error(`Vous devez mettre un ${identity.name}`)
  }
  if(identity.value.trim().length < 2){
    throw new Error(`Vous devez mettre un ${identity.name} d'au moins 2 caractères`)
  }
}
//Fonction qui vérifie le mail avec une regex

function checkEmail(email){
  const regex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$");
  if(email.value.trim() === ""){
    throw new Error(`Vous devez mettre un ${email.name}`);
  }
  if(!regex.test(email.value.trim())){
    throw new Error(`L'adresse e-mail est invalide`);
  }
}

//Fonction qui vérifie la date de naissance (année comprise entre 1900 et 2023)

//Fonction qui vérifie le nombre de tournoi

//Fonction qui vérifie si un tournoi est checké

//Fonction qui vérifie le check des conditions d'utilisation

//Une fois les fonctions mise en place, mettre en place le try/catch


const form = document.getElementById("main-form");
console.log(form);

form.addEventListener("submit", (event)=>{

try{
event.preventDefault()
const first = document.getElementById("first");
checkIdentity(first);

const last = document.getElementById("last");
checkIdentity(last);

const email = document.getElementById("email");
checkEmail(email);

}catch(error){
  console.log(error.message);
}
}
)




