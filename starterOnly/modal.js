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
let closeBtn = document.querySelectorAll('.close-btn')
const modalBody = document.querySelector('.modal-body')


// DOM Elements Form Input
const formDataFirst = document.getElementById("first")
const formDataLast = document.getElementById("last")
const formDataEmail = document.getElementById("email")
const formDataBirthdate = document.getElementById("birthdate")
const formDataQuantity = document.getElementById('quantity')
const formDataLocation = document.querySelectorAll('[name="location"]')
const formDataCGU = document.getElementById('checkbox1')
const formDataNewsletter = document.getElementById('checkbox2')


// **************  Lunch modal ***************
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";

}

// **************  Close modal ***************
//close modal event
closeBtn.forEach((btn) => btn.addEventListener('click', closeModal))

//Met à jour la liste des bouttons close
function updateCloseBtn() {
  closeBtn = document.querySelectorAll('.close-btn')
  closeBtn.forEach((btn) => btn.addEventListener('click', closeModal))
}
// close modal form
function closeModal() {
  //Vérifie si message remerciement
  const thanksContainer = document.querySelector('.thanks-container')
  if (thanksContainer) {
    thanksContainer.remove()
    const formBody = document.getElementById('form')
    formBody.style.display = "block";
  }
  //fait disparaitre le modal
  modalbg.style.display = "none"

}


// **************  Verify Input ***************

// verify value in input form
formDataFirst.addEventListener('change', verifyData)
formDataLast.addEventListener('change', verifyData)
formDataBirthdate.addEventListener('change', verifyData)
formDataEmail.addEventListener('change', verifyData)
formDataQuantity.addEventListener('change', verifyData)
formDataLocation.forEach((checkboxLocation) => checkboxLocation.addEventListener('change', verifyData))
formDataCGU.addEventListener('change', verifyData)

// function for control value
function verifyData(data) {
  //different REGEX for verify
  const alphabetRegex = new RegExp("^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$")
  const emailRegex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")
  const numberRegex = /^\d+$/
  // de 19 ou 20 avec 0-9 et 0-9 ensuite - 0-9 ou 10-12 ensuite - 01-09 ou 10-29 ou 30-31
  const dateRegex = /^(?:(?:19|20)\d\d)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

  //variable resultat si vraie ou faux (faux pas defaut)
  let resultat = false

  //Ce bloc vérifie si la vérification est vrai ou faux
  if (data.target.id === "first" || data.target.id === "last") {
    resultat = alphabetRegex.test(data.target.value)

  } else if (data.target.id === "email") {
    resultat = emailRegex.test(data.target.value)

  } else if (data.target.id === "quantity") {
    resultat = numberRegex.test(data.target.value)
 
  } else if (data.target.id === 'birthdate') {
    resultat = dateRegex.test(data.target.value)

  } else if (data.target.id === 'checkbox1') {
    resultat = data.target.checked

  } else if (data.target.name === 'location') {
    resultat = data.target.checked

  } else {
    console.error(`Il y a une erreur dans verifyData ${data.target.value}
    ne correspond à aucun champ de saisi.`)
  }

  //Ce bloc active ou désactive le message d'erreur
  if (resultat) {
    //Si OK je désactive l'erreur
    data.target.parentElement.setAttribute("data-error-visible", "false")
    // console.log(`La valeur ${data.target.value} est validé`)

  } else {
    //Si NOK j'active l'erreur
    data.target.parentElement.setAttribute("data-error-visible", "true")
    // console.error(`La valeur ${data.target.value} est refusé`)
  } 
}


// **************  Validate Form ***************

//validate form
function validate(event) {
  try {
    //******************* Controle si formulaire Ok ou Nok ************************/

    //désactive le rafraichissement de la page
    event.preventDefault()
    //initialise un tableau vide pour lister les erreurs
    let arrayDataError = []
    //lecture de  tout les input pour afficher les champs avec des erreurs
    //le bloc ajoute également les valeur au tableau
    formData.forEach((element) => {
      //obtient la valeur de data-error-visible
      let dataErrorVisible = element.getAttribute('data-error-visible')
      //ajoute dans le tableau la valeur "data-error-visible" du champ
      let addDataError = arrayDataError.push(dataErrorVisible)
      //si des champs n'ont pas été modifié ça affiche une erreur
      //car les champs erroné sont déjà marqué en erreur
      if (dataErrorVisible === null) {
        element.setAttribute("data-error-visible", "true")
      }
    })

    
    //"every" renvoie true si toute les valeurs du tableau sont égale à 'false'
    //C'est à dire aucune error
    const validData = arrayDataError.every(value => value === 'false')
    //******************* Si Ok ou Nok ************************/
    if (validData) {
      //stock dans arrayLocation la ville choisi
      let arrayLocation = []
      formDataLocation.forEach((element) => {
        if (element.checked) {
          arrayLocation.push(element.value) }
      })

      const responseForm = {
        firstName: formDataFirst.value,
        lastName: formDataLast.value,
        email: formDataEmail.value,
        birthdate: formDataBirthdate.value,
        numberGameOne: formDataQuantity.value,
        whatTournament: arrayLocation,
        cgu: formDataCGU.checked ? "Accepté" : "Refusé",
        newsletter: formDataNewsletter.checked ? "Accepté" : "Refusé"

      }

      console.log(responseForm)
      console.log("Formulaire envoyé.")

      //Désactive le formulaire
      const formBody = document.getElementById('form')
      formBody.style.display = "none"
      //Initialise le message
      const thanksMessage = `
      <div class="thanks-container">
      <p class="thanks-container-text">
        Merci pour votre inscription
      </p>
      <button class="thanks-container-btn close-btn">
        Fermer
      </button>
      </div>
      `
      //Ajoute au DOM le message remerciement
      // += pour par supprimer le contenu de modalBody
      modalBody.innerHTML += thanksMessage
      //Met à jour les boutton close
      updateCloseBtn()

    } else {
      console.log("Formulaire non envoyé.")
      
    }

  } catch (error) {
    console.error("Il y a une erreur lors de l'envoi " + error.message)
  }


}
