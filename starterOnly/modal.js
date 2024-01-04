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

let BoutonX = document.querySelector(".close")
console.log(BoutonX)
BoutonX.addEventListener('click', () => {
  console.log("on clique sur le bouton x")

  modalbg.style.display = "none"
})


const form = document.querySelector('form')
form.addEventListener("submit", (event) => {

  event.preventDefault();

})


function validerNomEtPrenom(nom) {

  if (nom.trim().length < 2) {
    throw new Error("Veuillez entrer 2 caractères ou plus .")
  }

}


function validerEmail(email) {
  let emailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (!emailRegex.test(email.trim())) {
    throw new Error("Veuillez entrer un Email valide")
  }
}

function validerChampQuantity(quantity) {
  // let quantityRegEx = new RegExp("^\d+$")
  // !quantityRegEx.test(quantity)
  if (quantity==="") {
    throw new Error("Veuillez choisir un nombre")
  }
  // console.log(typeof quantity)
  // return !!quantity && !isNaN(quantity)
}


function validerBoutonRadio(Var) {
  if (Var === "") {
    // cette fait la meme chose que li 9bal hh
    throw new Error("Vous devez choisir une option.")
  }

}
function validerCheckBox(btn) {
  if (!btn.checked){
    throw new Error("Vous devez vérifier que vous acceptez les termes et conditions.")
  } // better way to do the same as if (tatata) return true 


}

// function afficherMessageErreurPrenom(message){
//   let SpanMessageErreur = document.getElementById("erreurMessage1")
//   if(!SpanMessageErreur){

//   let formData = document.querySelector(".formData1")
//   SpanMessageErreur = document.createElement("span")
//   SpanMessageErreur.id = "erreurMessage1"
//   formData.append(SpanMessageErreur)
// }
// SpanMessageErreur.innerHTML = message
// }

function afficherMessageErreur(message, formDataSelector, erreurMessageSelector) {
  let SpanMessageErreur1 = document.getElementById(erreurMessageSelector);

  if (!SpanMessageErreur1) {
    let formData = document.querySelector(formDataSelector);
    SpanMessageErreur1 = document.createElement("div");
    SpanMessageErreur1.id = erreurMessageSelector;
    formData.append(SpanMessageErreur1);
  }

  SpanMessageErreur1.innerHTML = message;
}

function validate() {
  try {

    let prenom = document.getElementById("first").value
    console.log(prenom)
    console.log("validation Prenom", validerNomEtPrenom(prenom))
    // afficherMessageErreurPrenom("")
    afficherMessageErreur("", ".formData1", "#erreurMessage1")
  }
  catch (Error) {
    // afficherMessageErreurPrenom(Error.message)
    afficherMessageErreur(Error.message, ".formData1", "#erreurMessage1")

  }

  try {
    let nom = document.getElementById("last").value
    console.log(nom)
    console.log("validation nom", validerNomEtPrenom(nom))
    afficherMessageErreur("", ".formData2", "#erreurMessage2")
  } catch (Error) {

    afficherMessageErreur(Error.message, ".formData2", "#erreurMessage2")
  }

  try {
    let email = document.getElementById("email").value
    console.log(email)
    console.log("validation email", validerEmail(email))
    afficherMessageErreur("", ".formData3", "#erreurMessage3")
  } catch (Error) {
    afficherMessageErreur(Error.message, ".formData3", "#erreurMessage3")
  }

  let birthday = document.getElementById("birthdate").value
  console.log(birthday)

  try {
    let quantity = document.getElementById("quantity").value
    console.log(quantity)
    console.log("validation du champ quantity", validerChampQuantity(quantity))
    afficherMessageErreur("", ".formData5", "#erreurMessage5")
  } catch (Error) {
    afficherMessageErreur(Error.message, ".formData5", "#erreurMessage5")
  }

try {
  let baliseLocation = document.querySelectorAll('input[name="location"]')
  let location = ""
  for (let i = 0; i < baliseLocation.length; i++) {
    if (baliseLocation[i].checked) {
      location = baliseLocation[i].value
      break
    }
  }
  console.log(location)
  console.log("validation bouton radio", validerBoutonRadio(location))
  afficherMessageErreur("", ".formData6", "#erreurMessage6")
} catch (Error) {
  afficherMessageErreur(Error.message, ".formData6", "#erreurMessage6")
}
try {
  let checkBox = document.querySelectorAll('input[type="checkbox"]')
  for (let i = 0; i < checkBox.length; i++) {
    checkBoxChecked = checkBox[i].checked
    console.log(checkBoxChecked)
  }
  let checkBox1 = document.getElementById("checkbox1")
  console.log("validation checkbox1", validerCheckBox(checkBox1))
  afficherMessageErreur("", ".formData7", "#erreurMessage7")

} catch (Error) {
  afficherMessageErreur(Error.message, ".formData7", "#erreurMessage7")
}

  // code a netoyer , c-a-d supprimer les console log 
  // return validerNomEtPrenom(prenom) && validerNomEtPrenom(nom) && validerEmail(email)
  //   && validerChampQuantity(quantity) && validerBoutonRadio(location) && validerCheckBox(checkBox1)
  return true

}





