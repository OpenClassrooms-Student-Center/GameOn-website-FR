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
  document.querySelector(".form-isnotvalid").style.display = "block";
  document.querySelector(".form-confirmation").style.display = "none";
}



// #1: Issue 1 => TODO close modal on click event

// select DOM element (x)
const closeButton = document.querySelector('.close')
// close modal form (mouve out the modal from layout using display: none)
const closeModal = () => modalbg.style.display = "none"
// close modal event (adding event listeners to the selected element for close modal event)
closeButton.addEventListener("click", closeModal)


// #2 issue 2 and 3 => Vérifie que les données entrées dans le formulaire soient valide 

// select DOM element
const firstname = document.getElementById('first');
const lastname = document.getElementById('last');
const mail = document.getElementById('email');
const birthday = document.getElementById('birthdate');
const numberOfContest= document.getElementById('quantity');
const locationContest = document.querySelectorAll(".location");
const checkboxRequired = document.getElementById("checkbox1");
const form = document.getElementById("reserve");
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexNumber =  /^[0-9]+$/;

// les messages d'erreurs à afficher a l'utilisateur pour lui indiquer son erreur de saisie
const errorMessage = {
  name:"Votre nom/prénom doit comporter au moins 2 characters",
  mail:"Le format du mail n'est pas valide",
  birthday:" Vous devez avoir au moin 13 ans pour partciciper au concours",
  location : "Veuillez sélectionner au moins une competition",
  count : "Veuillez enter un nombre entier",
  contest : "Veuillez choisir une des prochaines conmpétitions",
  checkboxRequired : "Vous devez vérifier que vous accepter les conditions générales d'utilisations",
};



/****
 * ************************************************************************************************
 * FONCTION DE CHECK DES DONNEES SAISIE
 * ************************************************************************************************
 */

//Check si la string est supérieur ou égale à 2 charactère
//Si string.length est supérieur ou egale à 2 charactère return true
//Sinon return false
const validName = (string) => {
  if ((string.length >=2) && (string.length)){
    return true
  } else false
};

//Vérifie l'age de l'utilisateur
// Si son age est supérieur ou égale à 13 ans la fonction renvoi true
//si il est plus jeune la fonction renvoi false. 
const checkBirthday = (date) => {
  let currentDate = new Date(); // date et heure à laquelle la fonction est appellé
  let userBirth = new Date(date.value);// date de naissance de l'utilisateur
  let diff = currentDate - userBirth; // on calcule la différence entre les 2 dates
  const test = new Date(diff);
  let year = test.getFullYear();

  let userAge = Math.abs(year - 1970);
  if(userAge >= 13){
    return true
  } else {
    return false
  }
}

// check si le user à selectionné au moins une des prochaines compéitions. 
const checkSelectedContest = () =>{
  for( radio of locationContest){
    if (radio.checked) {
      document.querySelector('.error-location').innerHTML = "";
      return true
    }else{
      document.querySelector('.error-location').innerHTML = errorMessage.location;
    }
  }
}

// check si le user à accepter les CGU by en cochant la checkbox prévut à cet effet
const checkboxIsChecked = () =>{
  if (checkboxRequired.checked) {
    document.querySelector('.error-condition').innerHTML = "";
  } else{

    document.querySelector('.error-condition').innerHTML = errorMessage.checkboxRequired;
  }
}

const handleFirstnameInput = (event) =>{
  if (!validName(event.target.value)){
    firstname.style.border = '3px solid #fe142f';
    document.querySelector('.error-firstname').innerHTML = errorMessage.name;
    console.log('false')
  }else {
    firstname.style.border = 'none';
    document.querySelector('.error-firstname').innerHTML = "";
  }
}

const handleLastnameInput = (event) =>{ 
  if (!validName(event.target.value)) {
    lastname.style.border = '3px solid #fe142f';
    document.querySelector('.error-lastname').innerHTML = errorMessage.name;
    console.log('false')
  } else {
    lastname.style.border = 'none';
    document.querySelector('.error-lastname').innerHTML = "";
  }
}

const handleMailInput = (event) => {
  if (!regexEmail.test(event.target.value)) {
    mail.style.border = '3px solid #fe142f';
    document.querySelector('.error-mail').innerHTML = errorMessage.mail;
  } else {
    mail.style.border = 'none';
    document.querySelector('.error-mail').innerHTML = "";
  };

}

const handleContestInput = (event) => {
  if (!regexNumber.test(event.target.value)){
    numberOfContest.style.border = '3px solid #fe142f';
    document.querySelector('.error-number').innerHTML = errorMessage.count;
  } else {
    numberOfContest.style.border = 'none';
    document.querySelector('.error-number').innerHTML = "";
  }
}

/************************************************************************************************
 * ECOUETEUR D'EVENEMENT SUR LES INPUTS DU FORMULAIRE
 * ************************************************************************************************
 */
// on ecoute sur la valuer de l'input firstname => si il fait moins de deux characters,
// on modifie le style de l'input pour le passer en rouger et on affiche un message      
// d'erreur sous l'input
// Si jamais la valeur devient valide on suprimme les changement de css utilisé pour affiché les erreurs.. 
firstname.addEventListener("change", handleFirstnameInput);

// on ecoute sur la value de l'input lastname => si il fait moins de deux characters,
// on modifie le style de l'input pour le passer en rouger et on affiche un message      
// d'erreur sous l'input
// Si jamais la valeur devient valide on suprimme les changement de css utilisé pour affiché les erreurs.. 
lastname.addEventListener("change", handleLastnameInput);

// on ecoute sur la value de l'input mail => si il n'est pas conforme à la regex,
// on modifie le style de l'input pour le passer en rouger et on affiche un message      
// d'erreur sous l'input
// Si jamais la valeur devient valide on suprimme les changement de css utilisé pour affiché les erreurs..
mail.addEventListener("change", handleMailInput);

// on ecoute sur la value de l'input numberOfContest => si il ne trouve pas de checkbox cochée,
// on modifie le style de l'input pour le passer en rouger et on affiche un message      
// d'erreur sous l'input
// Si jamais une checkbox es cochée, on suprimme les changement de css utilisé pour affiché les erreurs.
numberOfContest.addEventListener("change", handleContestInput);


/*** 
 * ************************************************************************************************
 * FOCNTION UTLTISER A LA SOUMISSION DU FORMULAIRE. 
 * ************************************************************************************************
 */
// fonction qui empêche la validation du formulaire si un des champs ne correspond pas a ce qui est attendu
const validForm = (e) => {
  e.preventDefault(); // on empêche le rechargement de la page afin de garder les données saisie
  checkboxIsChecked();
  checkSelectedContest();
  
  // si une toutes les conditions sont respectées ca passe
  if ((validName(firstname.value)) && 
      (validName(lastname.value)) &&   
      (regexEmail.test(mail.value))&&
      (regexNumber.test(numberOfContest.value))&&
      (checkBirthday(birthday))
      ){
        birthday.style.border = 'none';
        document.querySelector('.error-birthday').innerHTML = "";
        document.querySelector(".form-isnotvalid").style.display = "none";
        document.querySelector(".form-confirmation").style.display = "flex";

    } else {//les verifications sont fausses, on affiche les erreurs
      // si le user n'est pas agé d'au moins 13 ans on affiche une erreur sous l'input birthday
      if (!checkBirthday(birthday)) {
        birthday.style.border = '3px solid #fe142f';
        document.querySelector('.error-birthday').innerHTML = errorMessage.birthday;
      }

      if (!validName(firstname.value)){
        firstname.style.border = '3px solid #fe142f';
        document.querySelector('.error-firstname').innerHTML = errorMessage.name;
      }

      if (!validName(lastname.value)){
        lastname.style.border = '3px solid #fe142f';
        document.querySelector('.error-lastname').innerHTML = errorMessage.name;
      }
      if (!regexNumber.test(numberOfContest.value)){
        numberOfContest.style.border = '3px solid #fe142f';
        document.querySelector('.error-number').innerHTML = errorMessage.count;
      }

      if (!regexEmail.test(mail.value)) {
        mail.style.border = '3px solid #fe142f';
        document.querySelector('.error-mail').innerHTML = errorMessage.mail;
      } 
  }
}
document.querySelector(".form-signup").
 addEventListener("submit", validForm);

 document.querySelector(".back-btn").
 addEventListener("click", closeModal);
