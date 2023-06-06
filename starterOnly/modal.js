function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/**
 * DOM elements
 */
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

/**
 * #2:Un bouton radio est sélectionné.
 */
const modalradio = document.getElementById("location1")
modalradio.checked = true

/**
 * launch modal open
 */
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalInit()
  modalbg.style.display = "block";  //Onclick
}

/**
 * init all modal's field
 */
function modalInit(){
  let baliseNom = document.forms.reserve.last
  baliseNom.value = ""
  let balisePrenom = document.getElementById("first")
  balisePrenom.value = ""
  let baliseEmail = document.getElementById("email")
  baliseEmail.value = ""
  let baliseQuantity = document.getElementById("quantity")
  baliseQuantity.value = "" 
}

/**
 * issue #1: fermeture de la modale via Btn(X)
 */
modalClose.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";  //Onclick
}


//issue #2: implemented validation form

/**
 * Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
 * @param {*} nom 
 * @returns 
 */
function validerNom(nom) {
  let valid = false
  nom = nom.trim()
  if ((nom.length < 2) || (nom.value === "")) {
    throw new Error("Le nom est trop court.")
  }else{
    valid = true
  }
  return valid
}

/**
 * Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
 * @param {*} prenom 
 * @returns 
 */
function validerPrenom(prenom) {
  let valid = false
  prenom = prenom.trim()
  if ((prenom.length < 2) || (prenom.value === " ")) {
    throw new Error("Le prenom est trop court.")
  }else{
    valid = true
  }
  return valid
}

/**
 * L'adresse électronique dois etre valide.
 * @param {*} email 
 * @returns 
 */
function validerEmail(email) {
  let valid = false
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (!emailRegExp.test(email)) {
    throw new Error("L'email n'est pas valide.")
  }else{
     valid = true
  }
  return valid
}

/**
 * Pour le nombre de concours, une valeur numérique dois etre saisie.
 * @param {*} quantity 
 * @returns 
 */
function validerQuantity(quantity) {
  let valid = false
  if (quantity === "") {
    throw new Error("Vous devez répondre à la question : À combien de tournois GameOn avez-vous déjà participé ?")
  }else {
    valid = true
  }
  return valid
}

/**
 * cette fonction permet de valider l'envoie du formulaire lorsque tous les champs sont
 * remplis sans erreur.
 * 
 */
let form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  //avoid re-load web page
    event.preventDefault()

    try {
      let baliseNom = document.forms.reserve.last
      let nom = baliseNom.value
      let validName = validerNom(nom)
     
      let balisePrenom = document.getElementById("first")
      let prenom = balisePrenom.value
      let validPrenom = validerPrenom(prenom)
  
      let baliseEmail = document.getElementById("email")
      let email = baliseEmail.value
      let validEmail = validerEmail(email)
  
      let baliseQuantity = document.getElementById("quantity")
      let quantity = baliseQuantity.value
      let validQuantity = validerQuantity(quantity)
  
      let formValid = validName && validPrenom && validEmail && validQuantity
  
      if (formValid){
        //all field are correct
        modalbg.style.display = "none";
      }
    } catch (erreur) {
        console.log(erreur.message) 
        afficherMessageError(erreur.message)
    }
})

/** 
 * cette fonction affiche le message d'erreur passé en paramètre.
 * si le span existe déjà, alors il est réutilisé pour ne pas les multiplier 
 * @param {string} message
*/
function afficherMessageError(message) {
  let spanEreurMessage = document.getElementById("erreurMessage")

  if (!spanEreurMessage) {
    let modalBody = document.querySelector(".modal-body")
    spanEreurMessage = document.createElement("span")
    spanEreurMessage.id = "erreurMessage"
    modalBody.append(spanEreurMessage)
  }

  spanEreurMessage.innerText = message
}

function validate(){

}










