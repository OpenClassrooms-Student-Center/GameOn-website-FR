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
  let emailReg = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/
  let nameReg = /^[a-zA-Z\s,.'-]+([-'\s][a-zA-Z\s,.'-])?/

  //remise a vide du form
  let majForm = (val) => {
    document.getElementById(val).textContent = ''
  }

  //Fonction de message d'erreur
  const errorMsg = (name, txt, color) => {
    document.getElementById(name).textContent = txt
    document.getElementById(name).style.color = color
  }

  //Vérification du champ prénom
  const validationFirstName = () => {
    if (firstName.value === "") {
      errorMsg('firstNameErrorMsg', 'Champ requis !', 'red')
      return false
    }
    else if (firstName.value.length < 2) {  // si value envoi est vide et <2
      errorMsg('firstNameErrorMsg', 'Merci de entrer 2 caractères minimum !', 'red')
      return false
    }
    else if (nameReg.test(firstName.value) == false) {   // et si methode test de regex renvoie false
      errorMsg('firstNameErrorMsg', 'Format invalide !', 'purple')
      return false
    } else {
      majForm('firstNameErrorMsg')
      return true
    }
  }

  firstName.addEventListener('input', function () {
    validationFirstName()
  })


  //Vérification du champ nom
  const validationLastName = () => {
    if (lastName.value === "") {
      errorMsg('lastNameErrorMsg', 'Champ requis !', 'red')
      return false
    }
    else if (lastName.value.length < 2) {
      errorMsg('lastNameErrorMsg', 'Merci de entrer 2 caractères minimum !', 'red')
      return false
    }
    else if (nameReg.test(lastName.value) == false) {   // et si methode test de regex renvoie false
      errorMsg('lastNameErrorMsg', 'Format invalide !', 'purple')
      return false
    } else {
      majForm('lastNameErrorMsg')
      return true
    }
  }

  lastName.addEventListener('input', function () {
    validationLastName()
  })

  /*
  //-----------------------------------//
  // fonction validation prenom et nom
  const nameValidation = (name, errorName) => {
    name.addEventListener('input', function () {
      if (name.value === "") {
        errorMsg(errorName, 'Champ requis !', 'red')
        error = true
      }
      else if (name.value.length < 2) {  // si value envoi est vide et <2
        errorMsg(errorName, 'Merci de entrer 2 caractères minimum !', 'red')
        error = true
      }
      else if (nameReg.test(name.value) == false) {   // et si methode test de regex renvoie false
        errorMsg(errorName, 'Format invalide !', 'purple')
        error = true
      } else {
        majForm(errorName)
        error = false
      }
    })
  }
  nameValidation(firstName, 'firstNameErrorMsg')
  nameValidation(lastName, 'lastNameErrorMsg')

  */

  //----------------------------//
  // Vérification de l'email
  const emailValidation = () => {
    if (emailReg.test(mail.value) == false) {
      errorMsg("emailErrorMsg", 'Merci de renseigner une adresse mail valide !', 'purple')
      return false
    } else {
      majForm("emailErrorMsg")
      return true
    }

  }

  mail.addEventListener('input', function () {
    emailValidation()
  })



  //-----------------------------//
  // Vérification de la date
  const birthValidation = () => {
    let birthdate = new Date(dateOfBirth.value)

    if (dateOfBirth.value === '') {
      errorMsg("birthErrorMsg", 'Champ requis !', 'red')
    }
    // Vérification d'une date futur
    else if (birthdate > dateActu) {
      console.log('date superieur');
      errorMsg("birthErrorMsg", 'Merci de renseigner une date valide !', 'purple')
      return false
    } else {
      majForm("birthErrorMsg")
      return true
    }

  }

  dateOfBirth.addEventListener('input', function () { birthValidation() })


  //------------------------------------//
  // Vérification du nombre de tournoi
  const quantityValidation = () => {
    if (quantity.value === "") {
      errorMsg("quantityErrorMsg", 'Champ requis', 'red')
      return false
    } else {
      majForm("quantityErrorMsg")
      return true
    }

  }
  // Ecoute quantity
  quantity.addEventListener('change', function () { quantityValidation() })

  /*
  //-----------------------------------//
  // Vérification du tournoi souhaité
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
    } else {
      majForm("tournamentErrorMsg")
    }
  }


  */

  //-------------------------------------------------------------------------------//
  //Récupérer et analyser les données saisies par l’utilisateur dans le formulaire
  let formListener = () => {
    document.querySelector(".btn-submit").addEventListener("click", (e) => {
      e.preventDefault() //stop l envoi du formulaire
      console.log('click');

      // HTML cllection
      let form = e.target.closest('form').elements
      console.log(form);
      console.log(form['last'].nextElementSibling);  // VOIR en enlevant les <br 

      // creation objet contact
      let orderContact = {
        prénom: firstName.value,
        nom: lastName.value,
        email: mail.value,
        dateDeNaissance: dateOfBirth.value

      }
      console.log(orderContact);
      //console.log(error);


      if (validationFirstName() && validationLastName() && emailValidation() && birthValidation() && quantityValidation()) {

        console.log('ok pour submit');
        console.table(orderContact)

        //formSubmit(orderContact) 
        console.log('Bonne chance' + ' ' + orderContact.prénom);
      } else {
        console.log('error formulaire');
      }

    })

  }

  formListener()


})


