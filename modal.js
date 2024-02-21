function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*
    DOM Elements can't change -----------------------------------------------------------
*/
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
let closeBtn = document.querySelectorAll('.close-btn')
const modalBody = document.querySelector('.modal-body')

/*
    DOM Elements can change  ----------------------------------------------------------
*/
let formDataFirst = document.getElementById("first")
let formDataLast = document.getElementById("last")
let formDataEmail = document.getElementById("email")
let formDataBirthdate = document.getElementById("birthdate")
let formDataQuantity = document.getElementById('quantity')
let formDataLocation = document.querySelectorAll('[name="location"]')
let formDataCGU = document.getElementById('checkbox1')
let formDataNewsletter = document.getElementById('checkbox2')
let thanksContainer = document.querySelector('.thanks-container')
let formBody = document.getElementById('form')
let formData = document.querySelectorAll(".formData")



/* 
    Update Get DOM ------------------------------------------------------------------
*/
function updateInputForm() {
  formDataFirst = document.getElementById("first")
  formDataLast = document.getElementById("last")
  formDataEmail = document.getElementById("email")
  formDataBirthdate = document.getElementById("birthdate")
  formDataQuantity = document.getElementById('quantity')
  formDataLocation = document.querySelectorAll('[name="location"]')
  formDataCGU = document.getElementById('checkbox1')
  formDataNewsletter = document.getElementById('checkbox2')

  thanksContainer = document.querySelector('.thanks-container')
  formBody = document.getElementById('form')
  formData = document.querySelectorAll(".formData")
  closeBtn = document.querySelectorAll('.close-btn')
  updateListener()
}

/* 
    Update addEventListener -----------------------------------------------------------
*/
updateListener()                              //Première initialisation
function updateListener() {
  formDataFirst.addEventListener('change', verifyData)
  formDataLast.addEventListener('change', verifyData)
  formDataBirthdate.addEventListener('change', verifyData)
  formDataEmail.addEventListener('change', verifyData)
  formDataQuantity.addEventListener('change', verifyData)
  formDataLocation.forEach((checkboxLocation) => checkboxLocation.addEventListener('change', verifyData))
  formDataCGU.addEventListener('change', verifyData)

  closeBtn.forEach((btn) => btn.addEventListener('click', closeModal))
}



/*
    Lunch modal ---------------------------------------------------------------------
*/
modalBtn.forEach((btn) =>                       // launch modal event
  btn.addEventListener("click", launchModal)); 


function launchModal() {                        // launch modal form
  modalbg.style.display = "block";

}

/*
    Close modal ------------------------------------------------------------------
*/
closeBtn.forEach((btn) =>                       // close modal event
  btn.addEventListener('click', closeModal))

function closeModal() {
  if (thanksContainer) {                        // SI message remerciement
    thanksContainer.remove()                    // Enlever remerciement
    formBody.style.display = "block";           // Afficher Formulaire DOM
  }

  modalbg.style.display = "none"                // Fermer la modale
}


/*
    Verify Input ------------------------------------------------------------------
*/
function verifyData(data) {
  /*
      Regex Restriction ----------------------------------
   */
  const alphabetRegex = new RegExp("^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$")
  const emailRegex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")
  const numberRegex = /^\d+$/
  // de 19 ou 20 avec 0-9 et 0-9 ensuite - 0-9 ou 10-12 ensuite - 01-09 ou 10-29 ou 30-31
  const dateRegex = /^(?:(?:19|20)\d\d)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

  
  /*
      Regex Control ----------------------------------
   */
  let resultat = false                            // Resultat Regex - Vrai ou Faux
  // console.log(data.target.value)
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

  /*
      Active OR Disable -> Message Error --------------------------------------
   */
  if (resultat) {  //---------------------------- Si OK je désactive l'erreur
                                                  
    data.target.parentElement.setAttribute("data-error-visible", "false")
    // console.log(`La valeur ${data.target.value} est validé`)

  } else {  //----------------------------------- Si NOK j'active l'erreur

    data.target.parentElement.setAttribute("data-error-visible", "true")
    // console.error(`La valeur ${data.target.value} est refusé`)
  } 
}


/*
    Validate Form ------------------------------------------------------------------
*/
function validate(event) { // ------------------------------ Control if Form Ok - Nok
  try {
    
    event.preventDefault()                      //désactive le rafraichissement de la page

    /*
      Data-Error Control ----------------------------------
   */    
    let arrayDataError = []                     //initialise un tableau vide pour lister les erreurs

    formData.forEach((element) => {
      let dataErrorVisible =                    //obtient la valeur de data-error-visible
        element.getAttribute('data-error-visible')
      
      arrayDataError.push(dataErrorVisible)     //ajoute dans le tableau la valeur "data-error-visible"
      
      
      if (dataErrorVisible === null) {          //si des champs n'ont pas été modifié ça affiche une erreur
                                                //car les champs erroné sont déjà marqué en erreur
        element.setAttribute("data-error-visible", "true")
      }
    })

    //"every" renvoie true si toute les valeurs du tableau sont égale à 'false'
    //C'est à dire aucune error
    const validData = arrayDataError.every(value => value === 'false')
    
    /*
      Validate form if no errors  ----------------------------------
   */
    if (validData) {
      /*
        Stock location  ----------------------------------
      */
      let arrayLocation = []
      formDataLocation.forEach((element) => {
        if (element.checked) {
          arrayLocation.push(element.value) }
      })
      /*
        Saving form  ----------------------------------
      */
      const responseForm = {
        firstName: formDataFirst.value,
        lastName: formDataLast.value,
        email: formDataEmail.value,
        birthdate: formDataBirthdate.value,
        numberGameOne: formDataQuantity.value,
        whatTournament: arrayLocation,                // Location
        cgu: formDataCGU.checked ? "Accepté" : "Refusé",
        newsletter: formDataNewsletter.checked ? "Accepté" : "Refusé"
      }

      formBody.style.display = "none"                 // Désactive le formulaire
      
      const thanksMessage =                           // Initialise le message
      `
        <div class="thanks-container">
        <p class="thanks-container-text">
          Merci pour votre inscription
        </p>
        <button class="thanks-container-btn close-btn">
          Fermer
        </button>
        </div>
      `
      formBody.reset()                                // Supprime contenu des input
      
      formData.forEach((element) => {                 // Enlève le controle des erreur
        element.removeAttribute("data-error-visible")
      })
      //                                            /!\  Change la structure du DOM
      modalBody.innerHTML += thanksMessage  //           Ajoute au DOM le message remerciement
      //                                                 += pour par supprimer le contenu de modalBody

      console.log("Formulaire envoyé :")
      console.table(responseForm)
      updateInputForm()                               // Mise à jour du DOM

    /*
      Not validate form if errors  ----------------------------------
   */
    } else {
      console.log("Formulaire non envoyé.")
    }

  } catch (error) {
    console.error("Il y a une erreur lors de l'envoi " + error.message)
  }
}




