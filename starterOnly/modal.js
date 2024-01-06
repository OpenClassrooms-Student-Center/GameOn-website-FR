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

// bouton de fermeture
let BoutonX = document.querySelector(".close")
BoutonX.addEventListener('click', () => {
  modalbg.style.display = "none"
})

// lancement de l'évènement "submit" sur le formulaire
const form = document.querySelector('form')
form.addEventListener("submit", (event) => {

  event.preventDefault();
})

/////////////////////////////Les Fonctions de validation utlisées

// La fonction de la validation du nom et du prénom avec le message d'erreur
function validerNomEtPrenom(nom) {

  if (nom.trim().length < 2) {
    throw new Error("Veuillez entrer 2 caractères ou plus .")
  }
}

// La fonction de la validation de l'émail avec le message d'erreur
function validerEmail(email) {

  let emailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (!emailRegex.test(email.trim())) {
    throw new Error("Veuillez entrer un Email valide")
  }
}

// La fonction de la validation de l'anniversaire avec le message d'erreur
function validerChampBirthday(birthd) {
  let todayDate = new Date()
  let birthDRegEx = new RegExp("^(?!(\d{4}\s\d{2}\s\d{2}))$")
  if (birthDRegEx.test(birthd) || new Date(birthd) > todayDate) {
    throw new Error("Vous devez entrer votre date de naissance.")
  }
}

// La fonction de la validation du champ "quantity" avec le message d'erreur
function validerChampQuantity(quantity) {

  if (quantity === "" || parseInt(quantity) > 99) {
    throw new Error("Veuillez choisir un nombre")
  }
  // console.log(typeof quantity)
  // return !!quantity && !isNaN(quantity)
}

// La fonction de la validation du bouton radio avec le message d'erreur
function validerBoutonRadio(Var) {

  if (Var === "") {
    throw new Error("Vous devez choisir une option.")
  }
}

// La fonction de la validation du champ "checkbox" avec le message d'erreur
function validerCheckBox(btn) {

  if (!btn.checked) {
    throw new Error("Vous devez vérifier que vous acceptez les termes et conditions.")
  }
}

//////////////////////////////////Les fonction d'affichage utilisées 

// La fonction de l'affichage du message d'erreur pour les champs : nom/prenom/anniversaire/email/quantité

function afficherMessageErreur(message, element) {
  let SpanMessageErreur1 = document.getElementById(element.id + "_erreur")

  if (!SpanMessageErreur1) {
    SpanMessageErreur1 = document.createElement("span")
    element.after(SpanMessageErreur1)
    SpanMessageErreur1.id = element.id + "_erreur"
    // SpanMessageErreur1.style.cssText = "color: #FF4E60;font-family: Roboto;font-size: 10px;font-style: normal;font-weight: 400;line-height: 142.6%;"
    // element.style.cssText = "border-radius: 8px;border: 2px solid #FF4E60;"
    SpanMessageErreur1.classList.add("errorMessage")
    element.classList.add("errorInput")
  }
  SpanMessageErreur1.innerHTML = message
  element.addEventListener('input', () => {
    if (SpanMessageErreur1) {
      SpanMessageErreur1.remove()
      // element.style.cssText = ""
      element.classList.remove("errorInput")
    }
  })
}

// La fonction de l'affichage du message d'erreur pour le champ "radio" et le champ "checkbox"

function afficherMsgErreurChampChoix(message, element) {

  let SpanMessageErreur2 = document.getElementById(element.id + "_erreur")

  if (!SpanMessageErreur2) {
    let varr = element.parentNode
    SpanMessageErreur2 = document.createElement("div")
    SpanMessageErreur2.id = element.id + "_erreur"
    varr.append(SpanMessageErreur2)
    // SpanMessageErreur2.style.cssText = "color: #FF4E60;font-family: Roboto;font-size: 10px;font-style: normal;font-weight: 400;line-height: 142.6%;"
    SpanMessageErreur2.classList.add("errorMessage")
  }

  SpanMessageErreur2.innerHTML = message
  element.addEventListener('input', () => {
    if (SpanMessageErreur2) {
      SpanMessageErreur2.remove()
    }
  })
}

// Récupération des élements du formulaire 

let prenom = document.getElementById("first")
let nom = document.getElementById("last")
let email = document.getElementById("email")
let birthday = document.getElementById("birthdate")
let quantity = document.getElementById("quantity")
let baliseLocation = document.querySelectorAll('input[name="location"]')
let location1 = document.getElementById("location1")
let checkBox1 = document.getElementById("checkbox1")
 

/////////////// La fonction de validation principale du formulaire 


function validate() {
  let isValid = true
  try {
    validerNomEtPrenom(prenom.value)

  }
  catch (Error) {
    afficherMessageErreur(Error.message, prenom)
    isValid = false
  }

  try {
    validerNomEtPrenom(nom.value)
  } catch (Error) {
    afficherMessageErreur(Error.message, nom)
    isValid = false
  }

  try {
    validerEmail(email.value)
  } catch (Error) {
    afficherMessageErreur(Error.message, email)
    isValid = false
  }

  try {

 validerChampBirthday(birthday.value)
  } catch (Error) {
    afficherMessageErreur(Error.message, birthday)
    isValid = false
  }

  try {
    validerChampQuantity(quantity.value)
  } catch (Error) {
    afficherMessageErreur(Error.message, quantity)
    isValid = false
  }

  try {
    let location = ""
    for (let i = 0; i < baliseLocation.length; i++) {
      if (baliseLocation[i].checked) {
        location = baliseLocation[i].value
        break
      }
    }
    validerBoutonRadio(location)
  } catch (Error) {
    afficherMsgErreurChampChoix(Error.message, location1)
    isValid = false
  }

  try {

    validerCheckBox(checkBox1)
  } catch (Error) {
    afficherMsgErreurChampChoix(Error.message, checkBox1)
    isValid = false
  }

  if (isValid) {
    // Vider les champs
    const elements = document.getElementsByTagName("input")
    for (let i = 0; i < elements.length; i++) {
      elements[i].value = ""
    }

    const elementsToRemove = document.querySelectorAll(".formData, .text-label")
    elementsToRemove.forEach((element) => {
      element.remove()
    })

    const button = document.querySelector('input[type="submit"]')
    button.setAttribute("value", "Fermer")
    button.addEventListener("click", () => {
      modalbg.style.display = "none"
    })

    const successMessage = document.createElement("div")
    successMessage.textContent = "Merci pour votre inscription"
    successMessage.classList.add("success")
    button.parentElement.insertBefore(successMessage, button)
  }

  
  return true
}





