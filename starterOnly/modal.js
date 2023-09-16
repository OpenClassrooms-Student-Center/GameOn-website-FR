function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

 /* FERMETURE DE LA MODALE AU CLIC SUR LA CROIX */

const modalBg = document.querySelector(".bground");
const closeModalBtn = document.querySelector(".close")

closeModalBtn.addEventListener("click", ()=> {
  modalBg.style.display = "none" 
  console.log("la fermeture de la modale est ok")
})

/* PRENOM - On crée une var bool si les conditions de validation du prénom sont remplies */
/* On execute formValidation */

  let firstNameOk = false
  let firstName = document.getElementById("first-name")

  firstName.addEventListener("input", () => {

    let regexFirstName = new RegExp ("[a-zA-Z-]+")
    let regexFirstNameOk = regexFirstName.test(firstName.value)

    if (firstName.value != "" && firstName.value.length >= 2 && regexFirstNameOk === true) {

      firstNameOk = true
     console.log("prénom valide")
    }
    else {
      firstNameOk = false
      console.log("prénom invalide")
    }
    formValidation ()
  })

/* NOM - On crée une var bool si les conditions de validation du nom sont remplies */
/* On execute formValidation */

    let lastNameOk = false
    let lastName = document.getElementById("last-name")

    lastName.addEventListener("input", () => {

    let regexLastName = new RegExp("[a-zA-Z-]+")
    let regexLastNameOk = regexLastName.test(lastName.value)

    if (lastName.value != "" && lastName.value.length >= 2 && regexLastNameOk === true) {

    lastNameOk = true
    console.log("nom valide")
  }
  else {
    lastNameOk = false
    console.log("nom invalide")
  }
  formValidation ()
})

/* EMAIL - On crée une var bool depuis le regex de validation en récupérant la valeur du test */
/* On execute formValidation */

let emailUserOk = false
let emailUser = document.getElementById("email")
emailUser.addEventListener("input", () => {

  let regexEmail = new RegExp("[a-z1-9-_.]+@[a-z1-9-_.]+\\.[a-z1-9-_.]+")
  let regexEmailUserOk = regexEmail.test(emailUser.value)

  if (emailUser.value != "" && regexEmailUserOk == true) {
    emailUserOk = true
    console.log("email valide")
  }
  else {
    emailUserOk = false
    console.log("email invalide")
  }

  console.log(emailUserOk)
  formValidation ()
})

/* AGE - On crée une var bool => != entre année actuelle et les 4 1ers caractères de la date de naissance */
/* On execute formValidation */

let birthDateOk = false
let birthDate = document.getElementById("birth-date")
birthDate.addEventListener("input", () => {
  
  let birthDateValue = birthDate.value
  let birthDateYear = birthDateValue.substring(0,4)

  let currentYear = new Date().getFullYear()

  if (currentYear - birthDateYear <= 100 && currentYear - birthDateYear >= 7) {

     birthDateOk = true
    console.log("date de naissance valide")
  }
  else {
    birthDateOk = false
    console.log("date de naissance invalide")
  }
  formValidation ()
})

/* NBRE DE TOURNOIS - On crée une var bool si les conditions de validation sont remplies  */
/* On execute formValidation */

let nberTournamentsOk = false
let nberTournaments = document.getElementById("quantity")
nberTournaments.addEventListener("input", () => {

  if (nberTournaments.value != "" && nberTournaments.value <= 50 ) {

    nberTournamentsOk = true
    console.log("nombre de tournois valide")
  }
  else {
    nberTournamentsOk = false
    console.log("nombre de tournois invalide")
  }
  formValidation ()
})

/* CHOIX DU TOURNOI - On crée une boucle for pour écouter chaque élement à la suite */
/* On execute formValidation */

let locationListOk = false
let locationList = document.querySelectorAll("input[name=location]")
for (let i=0; i < locationList.length; i++) {
  locationList[i].addEventListener ("input", () => {
    
    if(locationList[i] != "") {

      locationListOk = true
      console.log("emplacement valide")
    }
    else {
      locationListOk = false
      console.log("emplacement invalide")
    }
    formValidation ()
  })
}

/* CONDITIONS D'UTILISATION -  On crée un bool avec la condition checked pour les radios */
/* On execute formValidation */


let termsAndConditionsOk = false
let termsAndConditions = document.getElementById("checkbox1")
termsAndConditions.addEventListener("input", () => {
  let termsAndConditionsChecked = termsAndConditions.checked
  if (termsAndConditionsChecked == true) {

    termsAndConditionsOk = true
    console.log("Merci d'avoir accepté les conditions")
  }
  else {
    termsAndConditionsOk = false
    console.log("merci d'accepter les conditions")
  }
  formValidation()
})

/* formValidation () : pour chaque bool, on boucle avec forEach sur l'array allResults */

function formValidation () {

  let elementValidated = 0
  let allResults = [firstNameOk, lastNameOk, emailUserOk, birthDateOk, nberTournamentsOk, locationListOk, termsAndConditionsOk]
  console.log(allResults)

  allResults.forEach(element => {

    if (element == true) {
      elementValidated++
    }
    
  })


let submitBtn = document.querySelector(".btn-submit")
let result = allResults.length == elementValidated // si la taille de l'array a la même valeur que le nbre d'elements valides
submitBtn.disabled = !result // inverse du resultat pour désactiver le bouton SUBMIT

}

/*  */

//   for (let j=0; j < allResults.length; j++) {

//     submitBtn.addEventListener("click", () => {

//       console.log(allResults) // transformez les 0 ou les 1 en true ou false


//       if (allResults[j] == true) {

//         console.log("le formulaire est bien rempli" + allResults[j])
//       }
//       else {
//         console.log("le formulaire est mal rempli" + allResults[j])
//       }
//     })
//   }


/* ///////////////////////////////////////////////////// */


// const form = document.querySelector("form")
// form.addEventListener("submit",  (event) => {
//     event.preventDefault()
//   console.log("soumission")
// } )


// prevoir une span avec le meme style . recup l'element 
// changer couleur quand le champ est faux 