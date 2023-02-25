const InputValidity = {
  checkPrenom: false,
  checkNom: false,
  checkEmail: false,
  checkDate: false,
  checkQuantite: false,
  checkOption: false,
  checkConditions: true
  // checkboxSelect
}

// -------------------------------


const inputValidation = document.querySelector('form');

const formulaire = document.querySelector('form');
formulaire.addEventListener("submit", checkValidationsForm)


// msg erreur affiché pour chaque input
const msgUtilisateur = document.querySelectorAll('.message-alert');
  // test console.log des input
  const listInput = document.querySelectorAll('form input');
  console.log (listInput);

  var conditionsSelectaff = document.querySelector('#Conditions  #checkbox1');
  console.log("Select.checkedconditions", conditionsSelectaff.checked);

  // -------------------------------


 // launch modal form
 function launchModal() {
  modalbg.style.display = "block";
  // inputValidation.addEventListener('submit', validSaisie)
  inputValidation.addEventListener('submit', checkValidationsForm)

}


// -------------------------------


// fonction de validation des input
// renvoie msg d'erreurs pour les input non renseignés

  function checkValidationsForm(e) {
    e.preventDefault()
     //retourne un tableau de propriétés
    const keys = Object.keys(InputValidity)
  
    // failedInputs contient input de InputValidity
    // qui ont échoué au test de validité , c'est à dire qui sont à false
    const failedInputs = keys.filter(key => !InputValidity[key]) 
    console.log("!!!! failedInputs", failedInputs)


      if (failedInputs.length)
       {
        
          failedInputs.forEach(input => {
          const index = keys.indexOf(input)
          showValidated({index: index, validation: false})
          })
      }
      else
        {
          console.log("Données envoyées avec succès")

          e.preventDefault();
      
var SaisieIncomplete1 =  document.querySelector('.formData:nth-child(1)'); 
SaisieIncomplete1.style.opacity = 0;
var SaisieIncomplete2 =  document.querySelector('.formData:nth-child(2)'); 
SaisieIncomplete2.style.opacity = 0;
var SaisieIncomplete3 =  document.querySelector('.formData:nth-child(3)'); 
SaisieIncomplete3.style.opacity = 0;
var SaisieIncomplete4 =  document.querySelector('.formData:nth-child(4)'); 
SaisieIncomplete4.style.opacity = 0;
var SaisieIncomplete5 =  document.querySelector('#myQuantity'); 
SaisieIncomplete5.style.opacity = 0;

var SaisieIncomplete6 =  document.querySelector('#myOption'); 
SaisieIncomplete6.style.opacity = 0;  
var SaisieIncomplete7 =  document.querySelector('#Conditions'); 
SaisieIncomplete7.style.opacity = 0;


          var effTextLabel =  document.querySelector('.text-label'); 
          effTextLabel.style.opacity = 0;  
          
          
          // Affichage Merci et fermeture de la modal
          
          // var  affichageMerciInscription = document.querySelector('#affMercii'); 
          affichageMerciInscription.innerHTML = "Merci pour votre inscription ";
          // affichageMerciInscription.style.text-align = center;
          affichageMerciInscription.style.textAlign = "center";
          
          // affichageMerciInscription.setAttribute ("text-align",  center)
          affichageMerciInscription.style.display = "";
          
          // const inputValidation = document.querySelector('form');
          const btnFermer =  document.querySelector('.btn-submit');
          
          btnFermer.value = "Fermer";
          //   inputFermerApresMerci.removeEventListener('submit', fermerModal); 
          
          // --------------------------------------------------
          // event  fermer activer ou non modale aprés message merci ----------------------------
          
          
          inputValidation.addEventListener('submit', fermerModal);
          
          // reset du formulaire
          document.reserve.reset();


          //-----------------------
        }
  }
  
  


  function showValidated ({index, validation}) {
    if (validation===true) {
          msgUtilisateur[index].style.display = "inline"
          msgUtilisateur[index].style.display = "none"
      }
    else { 
      msgUtilisateur[index].style.display = "inline"
      msgUtilisateur[index].style.display = "block"
      console.log(msgUtilisateur[index])
  }
}
 

// -------------------------------


const validationTexts = document.querySelectorAll(".error-msg");
const inputPrenom = document.querySelector('.formData:nth-child(1) input'); 

inputPrenom.addEventListener("blur", boolPrenom)
inputPrenom.addEventListener("input", boolPrenom)

function boolPrenom (e) {
  const errorPrenom = document.querySelector('.formData:nth-child(1)'); 
  if(e.target.value.length >= 2) {

    msgUtilisateur[0].style.display = "inline"
    msgUtilisateur[0].style.display = "none"
    // -----------------------------
    // errorPrenom.setAttribute ("data-error",  "")
    // errorPrenom.setAttribute ("data-error-visible",  false)
    InputValidity.checkPrenom = true
    checkPrenom = 1;
  }
  else { 


    msgUtilisateur[0].style.display = "inline"
    msgUtilisateur[0].style.display = "block"
    checkPrenom = 0
    InputValidity.checkPrenom = false
  }

}



// -------------------------------

const inputNom = document.querySelector('.formData:nth-child(2) input'); 

inputNom.addEventListener("blur", boolNom)
inputNom.addEventListener('input', boolNom)


function boolNom (e) {
  const errorNom = document.querySelector('.formData:nth-child(2)'); 
  var  inputPrenomDiv = document.querySelector('.formData:nth-child(2) div'); 
  if(e.target.value.length >= 2) {

    msgUtilisateur[1].style.display = "inline"
    msgUtilisateur[1].style.display = "none"

    // errorNom.setAttribute ("data-error",  "")
    // errorNom.setAttribute ("data-error-visible",  false)
    InputValidity.checkNom = true

    checkNom = 1;
  }
  else { 

    msgUtilisateur[1].style.display = "inline"
    msgUtilisateur[1].style.display = "block"

    // errorNom.setAttribute ("data-error",  "Veuillez entrer 2 caractères ou plus pour le Nom ")
    // errorNom.setAttribute ("data-error-visible",  true)
    InputValidity.checkNom = false
    checkNom = 0;
  }

}


// -------------------------------

const inputEmail = document.querySelector('.formData:nth-child(3) input');

inputEmail.addEventListener("blur", boolEmail)
inputEmail.addEventListener('input', boolEmail)

function boolEmail (e) {
  var  inputEmail = document.querySelector('.formData:nth-child(3)'); 
  // \S+ tous les caractères différents des espaces
  const regexEmail = /\S+@\S+\.\S+/;

  if (e.target.value.search(regexEmail) === 0) {
  
    msgUtilisateur[2].style.display = "inline"
    msgUtilisateur[2].style.display = "none"
  InputValidity.checkEmail = true
  checkEmail = 1;
  }

  else if (e.target.value.search(regexEmail) === -1){
    msgUtilisateur[2].style.display = "inline"
    msgUtilisateur[2].style.display = "block"
    InputValidity.checkEmail = false
    checkEmail = 0;
  }  
}


// -------------------------------


const inputDate = document.querySelector('.formData:nth-child(4) input');


inputDate.addEventListener('blur', boolDate)
inputDate.addEventListener('input', boolDate)

  

function boolDate (e) {
  var  inputDateDiv = document.querySelector('.formData:nth-child(4)'); 
  var  date = document.querySelector('.formData:nth-child(4) input ');

//  const regexDate = /\d{2}+\d{2}+\d{4}/ ;

 const regexDate =  /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
 


  if (e.target.value.search(regexDate) === 0) {
    msgUtilisateur[3].style.display = "inline"
 msgUtilisateur[3].style.display = "none"
    InputValidity.checkDate = true
  checkDate = 1;

  }  
 
    else if (e.target.value.search(regexDate) === -1){

      msgUtilisateur[3].style.display = "inline"
      msgUtilisateur[3].style.display = "block"
    InputValidity.checkDate = false
  
    checkDate = 0;

  }
} 

// ---------------------------------------------------------------




const inputQuantite = document.querySelector('#myQuantity input'); 

inputQuantite.addEventListener('blur', boolQuantite) 
inputQuantite.addEventListener('change', boolQuantite) 

function boolQuantite (e){

  var  inputQuantite = document.querySelector('#myQuantity'); 


  if (e.target.value  === "")
  {  
    msgUtilisateur[4].style.display = "inline"
    msgUtilisateur[4].style.display = "block"
   InputValidity.checkQuantite = false;
  checkQuantite = 0;
  }

  else
  {  
    msgUtilisateur[4].style.display = "inline"
    msgUtilisateur[4].style.display = "none"
     InputValidity.checkQuantite = true;
    checkQuantite = 1;
  }

  }


// ---------------------------------------------------------------

const surveilleOption = document.getElementById('myOption');

surveilleOption.addEventListener('change', boolOption);

function boolOption  (){
  var  inputOption = document.querySelector('#myOption ');
  var boutonSelect = document.querySelectorAll('#myOption  input');
  var  boolSelect = false; 


  for (var i = 0; i < boutonSelect.length; i++) {
    if ( boutonSelect[i].checked === true ) {
      
      msgUtilisateur[5].style.display = "inline"
  msgUtilisateur[5].style.display = "none"
      
      inputOption.setAttribute ("data-error",  "")
      inputOption.setAttribute ("data-error-visible", false)
   //   console.log("Option sélectionnée");
      console.log(boutonSelect[i].checked);
      InputValidity.checkOption = true;

      checkOption = 1;

      // boolSelect = true;
      break;
    } 
  }

  if(InputValidity.checkOption === false) {
    
    msgUtilisateur[5].style.display = "inline"
    msgUtilisateur[5].style.display = "block"
    InputValidity.checkOption = false;
    // checkOption = 0;
    // console.log("Options non sélectionnées");
    
  }

}


// ---------------------------------------------------------------



const surveilleConditions =  document.getElementById('Conditions');

  surveilleConditions.addEventListener('change', boolConditions);

  function boolConditions  (){
    var  inputConditions = document.querySelector('#Conditions ');
    var conditionsSelect = document.querySelector('#Conditions  #checkbox1');
    var  boolSelect = false; 

    
      if ( conditionsSelect.checked === true ) {    
        msgUtilisateur[6].style.display = "inline"
        msgUtilisateur[6].style.display = "none"
        InputValidity.checkConditions = true;
       console.log("Conditions sélectionnées");
        checkConditions = 1;
        console.log(conditionsSelect.checked);
      } 
    
else
    {

      msgUtilisateur[6].style.display = "inline"
      msgUtilisateur[6].style.display = "block"
      InputValidity.checkConditions = false;
      checkConditions = 0;
      console.log("Conditions non sélectionnées");
      
    }
  
  }



// ---------------------------------------------------------------

var  affichageMerciInscription = document.querySelector('#affMercii'); 

const inputLocation = document.querySelector('input[name=location]').checked; 



const allSpan = document.querySelectorAll('span'); 
// const surveilleOption = document.querySelectorAll('.formData:nth-child(7) input');



 var checkQuantite = 0;
 var checkboxSelect = 0;
 var checkOption = 0;
 var checkEmail = 0;
 var checkPrenom = 0;
 var checkNom = 0;
 var checkDate = 0;
 var checkConditions = 1;



// ---------------------------------------------------------------




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
 
 
  function closeModal() {
      document.reserve.reset();
     // fermerModal();
      modalbg.style.display = "none";
    }



  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  

    // fermer modal form
    function fermerModal(e) {

  //    let SaisieIncomplete1 =  document.querySelector(`.formData:nth-child(${index})`); 

    var SaisieIncomplete1 =  document.querySelector('.formData:nth-child(1)');
      SaisieIncomplete1.style.opacity = 1;
      var SaisieIncomplete2 =  document.querySelector('.formData:nth-child(2)'); 
      SaisieIncomplete2.style.opacity = 1;
      var SaisieIncomplete3 =  document.querySelector('.formData:nth-child(3)'); 
      SaisieIncomplete3.style.opacity = 1;
      var SaisieIncomplete4 =  document.querySelector('.formData:nth-child(4)'); 
      SaisieIncomplete4.style.opacity = 1;
      var SaisieIncomplete5 =  document.querySelector('#myQuantity'); 
      SaisieIncomplete5.style.opacity = 1;


      var SaisieIncomplete6 =  document.querySelector('#myOption'); 
      SaisieIncomplete6.style.opacity = 1;  
      var SaisieIncomplete7 =  document.querySelector('#Conditions'); 
      SaisieIncomplete7.style.opacity = 1; 

      const btnFermer =  document.querySelector('.btn-submit');
      const inputCloseButton = document.querySelector('form');
      btnFermer.value = "C'est parti";

        InputValidity.checkPrenom =  false,
        InputValidity.checkNom = false,
        InputValidity.checkEmail = false,
        InputValidity.checkDate = false,
        InputValidity.checkQuantite = false,
        InputValidity.checkOption = false,
        InputValidity.checkConditions = true
      document.reserve.reset();
      affichageMerciInscription.innerHTML = "";
      affichageMerciInscription.style.display =  "none";
      inputValidation.removeEventListener('submit', fermerModal);
      modalbg.style.display = "none";
    }

