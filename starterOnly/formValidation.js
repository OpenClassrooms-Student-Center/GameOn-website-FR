//-----------------------------------------------//
//------ FORMULAIRE ECOUTE ET VALIDATION ------//

//On écoute l'évenement du DOM chargé
document.addEventListener("DOMContentLoaded", () => {

  //Récupération des éléments du dom
  const firstName = document.getElementById('first')
  const lastName = document.getElementById('last')
  const mail = document.getElementById('email')
  const dateOfBirth = document.getElementById('birthdate')
  const quantity = document.getElementById('quantity')
  const tournament = document.querySelectorAll('input[name = "location"]')

  //Récupération date Actuel
  let dateActu = new Date()

  //Regex----expression réguliere
  let emailReg = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,3}$/
  let nameReg = /^[a-zA-Z,.'-]+([-'\s][a-zA-Z\s,.'-])?/


  /**
   * remise a vide du form
   * @param {id} val 
   */
  let majForm = (val) => {
    document.getElementById(val).textContent = ''
  }


  /**
   * Fonction de message d'erreur
   * @param {string} name 
   * @param {string} txt 
   * @param {*} color 
   */
  const errorMsg = (name, txt, color) => {
    document.getElementById(name).textContent = txt
    document.getElementById(name).style.color = color
  }

  /**
   * Vérification du champ prénom
   * @returns boolean
   * 
   */
  const validationFirstName = () => {
    if (firstName.value === "") {
      errorMsg('firstNameErrorMsg', 'Champ requis !', 'red')
      firstName.style.border = '2px solid red'
      return false
    }
    else if (firstName.value.length < 2) {
      errorMsg('firstNameErrorMsg', 'Merci de entrer 2 caractères minimum !', 'red')
      firstName.style.border = '2px solid red'
      return false
    }
    else if (nameReg.test(firstName.value) == false) {
      errorMsg('firstNameErrorMsg', 'Format invalide !', 'red')
      firstName.style.border = '2px solid red'
      return false
    } else {
      majForm('firstNameErrorMsg')
      firstName.style.border = '2px solid #00FF00'
      //firstName.style.border = 'none'
      return true
    }
  }

  /**
   * Vérification du champ nom
   * @returns boolean
   */
  const validationLastName = () => {
    if (lastName.value === "") {
      errorMsg('lastNameErrorMsg', 'Champ requis !', 'red')
      lastName.style.border = '2px solid red'
      return false
    }
    else if (lastName.value.length < 2) {
      errorMsg('lastNameErrorMsg', 'Merci de entrer 2 caractères minimum !', 'red')
      lastName.style.border = '2px solid red'
      return false
    }
    else if (nameReg.test(lastName.value) == false) {
      errorMsg('lastNameErrorMsg', 'Format invalide !', 'red')
      lastName.style.border = '2px solid purple'
      return false
    } else {
      majForm('lastNameErrorMsg')
      lastName.style.border = '2px solid #00FF00'
      return true
    }
  }

  /**
   * Vérification de l'email
   * @returns boolean
   */
  const emailValidation = () => {
    if (mail.value === '') {
      errorMsg("emailErrorMsg", 'Champ requis !', 'red')
      mail.style.border = '2px solid red'
      return false
    }
    else if (emailReg.test(mail.value) == false) {
      errorMsg("emailErrorMsg", 'Merci de renseigner une adresse mail valide !', 'red')
      mail.style.border = '2px solid red'
      return false
    } else {
      majForm("emailErrorMsg")
      mail.style.border = '2px solid #00FF00'
      return true
    }

  }

  /**
   * Vérification de la date
   * @returns boolean
   */
  const birthValidation = () => {
    let birthdate = new Date(dateOfBirth.value)

    if (dateOfBirth.value === '') {
      errorMsg("birthErrorMsg", 'Champ requis !', 'red')
      dateOfBirth.style.border = '2px solid red'
    }
    else if (birthdate > dateActu) {
      console.log('date superieur');
      errorMsg("birthErrorMsg", 'Merci de renseigner une date valide !', 'red')
      dateOfBirth.style.border = '2px solid red'
      return false
    } else {
      majForm("birthErrorMsg")
      dateOfBirth.style.border = '2px solid #00FF00'
      return true
    }

  }

  /**
   * Vérification du nombre de tournoi
   * @returns boolean
   */
  const quantityValidation = () => {
    if (quantity.value === "") {
      errorMsg("quantityErrorMsg", 'Champ requis !', 'red')
      quantity.style.border = '2px solid red'
      return false
    } else {
      majForm("quantityErrorMsg")
      quantity.style.border = '2px solid #00FF00'
      //quantity.style.border = 'none'              
      return true
    }

  }

  /**
   * Vérification checkbox choix du tournoi
   * @returns boolean
   */
  const tournamentValidation = () => {
    // Boucle sur toute les checkbox
    let checked = false
    for (let i = 0; i < tournament.length; i++) {
      if (tournament[i].checked) {
        checked = true
        break
      } else {
        checked = false
      }
    }
    // Vérification si checked
    if (!checked) {
      errorMsg("tournamentErrorMsg", 'Veuillez choisir un tournoi', 'red')
      return false
    } else {
      majForm("tournamentErrorMsg")
      return true
    }
  }


  /**
   * Vérification checkbox condition general
   * @returns boolean
   */
  const conditionValidation = () => {
    if (checkbox1.checked) {
      majForm("checkedCGErrorMsg")
      return true
    } else {
      errorMsg("checkedCGErrorMsg", `Merci d'accepter les conditions générales !`, 'red')
    }
  }
  //-------------------------------------//
  // Ecoute réactive de tout les champs
  firstName.addEventListener('input', function () { validationFirstName() })
  lastName.addEventListener('input', function () { validationLastName() })
  mail.addEventListener('input', function () { emailValidation() })
  dateOfBirth.addEventListener('input', function () { birthValidation() })
  quantity.addEventListener('change', function () { quantityValidation() })
  for (let i = 0; i < tournament.length; i++) {
    tournament[i].addEventListener('change', function () { tournamentValidation() })
  }
  document.getElementById('checkbox1').addEventListener('change', function () { conditionValidation() })


  /**
   * Vérification et Envoi du formulaire si l utilisateur a passer la validation
   */
  let formListener = () => {
    document.querySelector(".btn-submit").addEventListener("click", (e) => {
      e.preventDefault()

      // creation objet contact
      let orderContact = {
        prénom: firstName.value,
        nom: lastName.value,
        email: mail.value,
        dateDeNaissance: dateOfBirth.value

      }

      // Vérification des champs au clic
      validationFirstName()
      validationLastName()
      emailValidation()
      birthValidation()
      quantityValidation()
      tournamentValidation()
      conditionValidation()


      if (validationFirstName() && validationLastName() && emailValidation() && birthValidation() && quantityValidation() && tournamentValidation() && conditionValidation()) {
        formSubmit()
      } else {
        console.log('error formulaire');
      }
    })

  }

  formListener()

  /**
   * Affichage du message de confirmation
   */
  const formSubmit = () => {
    const display = document.getElementById('val')
    display.style.display = 'none'
    display.insertAdjacentHTML('beforebegin',
      `
    <div id='display-confirm'>
      <h2>Merci pour <br/> votre inscriprtion</h2>
    </div>
    <input
      class="btn-submit"
      type="submit"
      name="button"
      value="Fermer"
      onclick="window.location.reload();"
    />
    `
    )

  }

})
