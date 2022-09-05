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
    else if (firstName.value.length < 2) {  // si value envoi est vide et <2
      errorMsg('firstNameErrorMsg', 'Merci de entrer 2 caractères minimum !', 'red')
      firstName.style.border = '2px solid red'
      return false
    }
    else if (nameReg.test(firstName.value) == false) {   // et si methode test de regex renvoie false
      errorMsg('firstNameErrorMsg', 'Format invalide !', 'purple')
      firstName.style.border = '2px solid purple'
      return false
    } else {
      majForm('firstNameErrorMsg')
      // commenter pour choisir bordure verte ou rien
      firstName.style.border = '2px solid #00FF00'
      //firstName.style.border = 'none'
      return true
    }
  }
  // Ecoute
  firstName.addEventListener('input', function () { validationFirstName() })


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
    else if (nameReg.test(lastName.value) == false) {   // et si methode test de regex renvoie false
      errorMsg('lastNameErrorMsg', 'Format invalide !', 'purple')
      lastName.style.border = '2px solid purple'
      return false
    } else {
      majForm('lastNameErrorMsg')
      lastName.style.border = '2px solid #00FF00'
      return true
    }
  }
  // Ecoute
  lastName.addEventListener('input', function () { validationLastName() })

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
      errorMsg("emailErrorMsg", 'Merci de renseigner une adresse mail valide !', 'purple')
      mail.style.border = '2px solid purple'
      return false
    } else {
      majForm("emailErrorMsg")
      mail.style.border = '2px solid #00FF00'
      return true
    }

  }
  // Ecoute
  mail.addEventListener('input', function () { emailValidation() })

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
    // Vérification d'une date futur
    else if (birthdate > dateActu) {
      console.log('date superieur');
      errorMsg("birthErrorMsg", 'Merci de renseigner une date valide !', 'purple')
      dateOfBirth.style.border = '2px solid purple'
      return false
    } else {
      majForm("birthErrorMsg")
      dateOfBirth.style.border = '2px solid #00FF00'
      return true
    }

  }
  // Ecoute
  dateOfBirth.addEventListener('input', function () { birthValidation() })

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
      // commenter pour choisir bordure verte ou rien
      quantity.style.border = '2px solid #00FF00'  //choix 1
      //quantity.style.border = 'none'              //choix 2
      return true
    }

  }
  // Ecoute quantity
  quantity.addEventListener('change', function () { quantityValidation() })

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

  // Ecoute
  for (let i = 0; i < tournament.length; i++) {
    tournament[i].addEventListener('change', function () { tournamentValidation() })
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

  // Ecoute
  document.getElementById('checkbox1').addEventListener('change', function () { conditionValidation() })


  /**
   * Vérification et Envoi du formulaire si l utilisateur a passer la validation
   */
  let formListener = () => {
    document.querySelector(".btn-submit").addEventListener("click", (e) => {
      e.preventDefault() //stop l envoi du formulaire

      /*// HTML cllection
      let form = e.target.closest('form').elements
      console.log(form);
      console.log(form['last'].nextElementSibling);  // VOIR en enlevant les <br */

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

  // Récupération de tout les éléments du modal
  const display = document.getElementById('val')

  /**
   * Affichage du message de confirmation
   */
  const formSubmit = () => {
    //éfface l'intérieur du modal
    display.style.display = 'none'
    //insert bloc html
    display.insertAdjacentHTML('beforebegin',
      // Bloc confirmation maquette
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

      /*// Bloc confirmation personnalisé
      `
    <div id='display-confirm'>
      <h2>Félicitation ${firstName.value}</h2>
      <p>Ton inscription est validée !</p>
      <br />
      <p>Prochaine étape ....</p>
      <br />
      <img id="logo-confirm" src="Logo.png" alt="img" />
      <br />
    </div>
    <input
      class="btn-submit"
      type="submit"
      name="button"
      value="Fermer"
      onclick="window.location.reload();"
    />
    `*/

    )

  }

})
