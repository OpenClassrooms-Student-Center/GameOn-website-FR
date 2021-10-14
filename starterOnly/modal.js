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
const formsData = document.querySelectorAll(".formData");

const validate = document.querySelector(".btn-submit");
const form = document.querySelector("form");
const closer = document.querySelectorAll(".closing");

let stringsNumber = document.querySelectorAll(".text-control");
let formInputs = document.querySelectorAll("input");
let inputLocation=document.querySelectorAll('[name = location]');


const regexLetter = /[0-9]/;
const regexMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regexDate = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;


let dataPrenom=null;
let dataNom=null;
let dataMail=null;
let dataDate=null;
let dataTournament=null;
let dataCity=null;
let dataCheck=null;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

closer.forEach(closer=>closer.addEventListener('click',closeModal));
//ISSUE 1 Fermer la modal
function closeModal() {
  modalbg.style.display = "none";
}


// Validation formulaire
validate.addEventListener('click',(e)=>{
   e.preventDefault();
   displayError();
   liveUpdate();

   data = {dataPrenom,dataNom,dataMail,dataDate,dataTournament,dataCity,dataCheck};

   if(dataPrenom && dataNom && dataMail && dataDate && dataTournament && dataCity && dataCheck){
    success()
   }
   console.log(data);

  });

//Verification sur la saisie
function liveUpdate(){
  formInputs.forEach(input=>{ 
    input.addEventListener('keyup', displayError);
    input.addEventListener('click', displayError);
  });

}

// Contôle de saisies utilisateurs
function displayError(){
  formInputs.forEach(input=>{
      let inputName = input.name;
      let inputValue = input.value;

      switch (inputName) {
        case 'first':
          if(inputValue.length < 3 || regexLetter.test(inputValue)){
            setError(input,"Le prénom doit comporter au minimum 2 lettres.");
          }else{
            removeError(input);
            dataPrenom = inputValue;
          }
          break;

        case 'last':
          if(inputValue.length < 3 || regexLetter.test(inputValue)){
            setError(input,"Le nom doit comporter au minimum 2 lettres.");
          }else{
            removeError(input);
            dataNom=inputValue;
          }
          break;

        case 'email':
          if(!regexMail.test(inputValue)){
            setError(input,"L'adresse email n'est pas valide.");
          }else{
            removeError(input);
            dataMail=inputValue;
          }
          break;

        case 'birthdate':
          if(!regexDate.test(inputValue)){
            setError(input,"Le format de date de naissance n'est pas valide.");
          }else{
            removeError(input);
            dataDate=inputValue;
          }
          break;

        case 'quantity':
          if(!regexLetter.test(inputValue) || (inputValue<0) || (inputValue>6)){
            setError(input,"Vous devez saisir au moins un chiffre.");
          }else{
            removeError(input);
            dataTournament=inputValue;
          }
          break;

        case 'location':
            let radioCheck = 0;
            inputLocation.forEach(location=>{
             if(location.checked){
              radioCheck++
             };
            });      
            if(radioCheck === 0){
              setError(input,"Vous devez choisir votre ville.");
            }else{
              removeError(input);
              dataCity=input.value;
            }
          break;

        case 'checkbox1':
          if(!input.checked){
            setError(input,"Vous devez vérifier que vous acceptez les termes et conditions.");
          }else{
            removeError(input);
            dataCheck=input.value;
          }
          break;
      
        default:
          break;
      }  
  })
};


//Attribuer erreur aux champs
function setError(input, message){
  let container = input.parentNode;
  container.setAttribute('data-error-visible', 'true');
  container.setAttribute('data-error', message);
};

//Supprimer erreur champs
function removeError(input){
  let container = input.parentNode;
  container.removeAttribute('data-error-visible');
  container.removeAttribute('data-error');
}

function success(){
  form.innerHTML=`
        <div class="success">
       <h4>Merci ! Votre réservation a été reçue.</h4>
        <input class="btn-submit closing" type="submit" class="button" value="Fermer">
        </div>
      `;
};


