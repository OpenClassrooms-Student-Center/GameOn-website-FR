//-----------------------------------------------//
//------ FORMULAIRE ECOUTE ET VALIDATION ------//


//On écoute l'évenement du DOM chargé
document.addEventListener("DOMContentLoaded", () => {

  //Récupération des éléments du dom
const firstName = document.getElementById('first')
const lastName = document.getElementById('last')
const mail = document.getElementById('email')
const dateOfBirth = document.getElementById('birthdate')
const checkboxTab = document.getElementsByClassName('checkbox-input')

console.log(checkboxTab);

//Regex----expression réguliere
let emailReg = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/
let nameReg = /^[a-zA-Z\s,.'-]+([-'\s][a-zA-Z\s,.'-])?/

//erreur
let error = true

//remise a vide du form
let majForm = (val) => {
  document.getElementById(val).textContent = ''
  error = true
}


// validation test prénom 
firstName.addEventListener('input', function () {
  console.log(firstName.value);
  if(firstName.value === '' || firstName.value.length < 2) {  // si value envoi est vide et <2
    document.getElementById("firstNameErrorMsg").textContent = 'Prénom invalide !'
    document.getElementById("firstNameErrorMsg").style.color = 'red'
    error = true
  }else if (nameReg.test(firstName.value) == false){   // et si methode test de regex renvoie false
    document.getElementById("firstNameErrorMsg").textContent = 'Format invalide !'
    document.getElementById("firstNameErrorMsg").style.color = 'purple'
    error = true
  }else{
    majForm("firstNameErrorMsg")
    error = false
  }
})


// validation test nom
lastName.addEventListener('input', function() {
  if(lastName.value === '' || lastName.value.length < 2) {
    document.getElementById("lastNameErrorMsg").textContent = 'Nom invalide !'
    document.getElementById("lastNameErrorMsg").style.color = 'red'
    error = true
  }else if (nameReg.test(lastName.value) == false){
    document.getElementById("lastNameErrorMsg").textContent = 'Format invalide !'
    document.getElementById("lastNameErrorMsg").style.color = 'purple'
    error = true
  }else{
    majForm("lastNameErrorMsg")
    error = false
  }
})


// validation test mail
mail.addEventListener('input', function() {
  if(mail.value === '') {
    document.getElementById("emailErrorMsg").textContent = 'Adresse mail invalide !'
    document.getElementById("emailErrorMsg").style.color = 'red'
    error = true
  }else if (emailReg.test(mail.value) == false){
    document.getElementById("emailErrorMsg").textContent = 'Merci de renseigner une adresse mail valide !'
    document.getElementById("emailErrorMsg").style.color = 'purple'
    error = true
  }else{
    majForm("emailErrorMsg")
    error = false
  }
})


// validation date de naissance
dateOfBirth.addEventListener('input', function() {
  if(dateOfBirth.value === '') {
    document.getElementById("birthErrorMsg").textContent = 'Date de naissance invalide !'
    document.getElementById("birthErrorMsg").style.color = 'red'
    error = true
  }else{
    majForm("birthErrorMsg")
    error = false
  }
})

// vérification de checkbox


//Récupérer et analyser les données saisies par l’utilisateur dans le formulaire
let orderListener = () => {
  document.querySelector(".btn-submit").addEventListener("click", (e) => {
    e.preventDefault() //stop l envoi du formulaire
    console.log('click');

    // creation objet contact
    let orderContact = {
      prénom: firstName.value,
      nom: lastName.value,
      email: mail.value,
      dateDeNaissance: dateOfBirth.value

    }

    if(!error) {
      console.log('ok pour submit');
      console.table(orderContact)

      //orderValidation(orderContact) 
      console.log('Bonne chance' +' '+ orderContact.prénom);
      
    }else{
      console.log('error');
    }
  })

}

orderListener()

let orderValidation = () => {
 
}
  
})




