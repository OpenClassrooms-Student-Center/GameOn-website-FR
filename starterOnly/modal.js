function editNav() {
  let x = document.getElementById("myTopnav");
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
const closeModalBtn = document.querySelectorAll(".close");  // LA CONSTANTE POINTE VERS l'element avec la class .close
const submitForm = document.querySelectorAll(".submit");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));
// Pour chaque "element" pointé dans: closeModalBtn à l'interieur du DOM
// => au clique sur cet élement, utilise la function closeModal()

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
    //lorceque closeModal() est appellé, on modifie la propriété display
    // de la classe(.bground) associé à la constante (modalbg) dans le DOM en 'none'

//Form entries implementation

// on recupère les id


const firstName=document.getElementById('first');
const lastName=document.getElementById('last');
const email=document.getElementById('email');
const birthdate=document.getElementById('birthdate');
let quantityTournament =document.getElementById('quantity');
const location1=document.getElementById('location1');
const location2=document.getElementById('location2');
const location3=document.getElementById('location3');
const location4=document.getElementById('location4');
const location5=document.getElementById('location5');
const location6=document.getElementById('location6');
const checkbox1=document.getElementById('checkbox1');
const checkbox2=document.getElementById('checkbox2');

const modalForm=document.getElementById('form');

// Validate - Function


// submit
  document.getElementById('submit').addEventListener("submit", function(e){



//regex (expression reguliere)
    let FirstLastRegex = new RegExp(
        /^[a-z ,.'-]+$/i
    );

    let BirthdateRegex = new RegExp(
      /[0-9]/
    );

    let EmailRegex = new RegExp(
        /^(.+)@(.+)$/
    );



// erreur

    let erreurFirstName = [
      "veuillez renseigner votre prénom",
      "un prénom doit contenir entre 2 et 40 caractères",
      "un prenom ne doit contenir que des lettres"
    ];
    let erreurLastName = [
      "veuillez renseigner votre nom",
      "un nom doit contenir entre 2 et 40 caractères",
      "un prenom ne doit contenir que des lettres"
    ];
    let erreurEmail = [
      "veuillez renseigner une addresse mail",
      "un email doit contenir ENTRE 3 ET 40 CARACTERES caractères",
      "vous devez renseigné une addresse valide"
    ];
    let erreurBirthdate = [
      "veuillez renseigner votre date de naissance",
      "une date de naissance ne peut contenir que des chiffres",
      "une date de naissance contient 8 chiffres"
    ];
    let erreurTournament = [
      "Merci de renseigner le nombre de vos participation aux tournois",
      "Nous n'avons pas organisé autant de tournois"

    ];
    let erreurLocation = [
      "vous ne pouvez pas selectionner plusieurs localisation",
      "vous n'avez pas choisi de localisation"
    ];
    let erreurCgd = [
        "vous devez accepter les conditions"
    ];

    let erreurDefault = [
        ""
    ];




    if(checkbox1.checked === false){

      errorCgd=erreurCgd[0];
    }
    else {
      errorCgd=erreurDefault[0];
    }

    let locations = [location1, location2, location3, location4, location5, location6];

    var checkCount = 0;

    for (let location of locations){
      if (location.checked === true){
        checkCount++;
      }
    }


    if (checkCount>1){
      errorLocation = erreurLocation[0];
    } else if (checkCount<1){
      errorLocation = erreurLocation[1];
    } else{
      errorLocation = erreurDefault[0];
    }




    if(!quantityTournament.value){
      errorTournament =erreurTournament[0];
    } else if(quantityTournament.value>99){
      errorTournament =erreurTournament[1];
    }else{
      errorTournament=erreurDefault[0];
    }





    if (!birthdate.value){  // on verifie que le champs est different de "" (n'est pas vide)
      errorBirthdate = erreurBirthdate[0];
    } else if (BirthdateRegex.test(birthdate.value) == false){
      errorBirthdate=erreurBirthdate[1];
    } else if (birthdate.value.length != 10){
      errorBirthdate=erreurBirthdate[2];
    }else {
      errorBirthdate =erreurDefault[0];
    }




    if (!email.value){
      errorEmail = erreurEmail[0];
    }
    else if(email.value.length > 41 || email.value.length <3 ){
      errorEmail = erreurEmail[1];
    }

    else if (EmailRegex.test(email.value) == false) { //on test la validité des caractère avec la regex
      errorEmail = erreurEmail[2];
    }
    else {
      errorEmail = erreurDefault[0];
    }





    if (!lastName.value) {
      errorLastName = erreurLastName[0];
    } else if (lastName.value.length < 2 || lastName.value.length > 40) {
      errorLastName = erreurLastName[1];

    } else if (FirstLastRegex.test(lastName.value) == false) { //on test la validité des caractère avec la regex
      errorLastName = erreurLastName[2];
    } else{
      errorLastName = erreurDefault[0];
    }




      if (!firstName.value) {
        firstName.closest('.formData').dataset.error = "sss"; // on definit la propriété error de l'objet cutomisable dataset
        firstName.closest('.formData').dataset.errorVisible = 'true';

        errorFirstName = erreurFirstName[0];
      } else if (firstName.value.length < 2 || firstName.value.length > 40) {
        errorFirstName = erreurFirstName[1];

      } else if (FirstLastRegex.test(firstName.value) == false) { //on test la validité des caractère avec la regex
        errorFirstName = erreurFirstName[2];
      } else{
        errorFirstName = erreurDefault[0];
      }



    if (errorFirstName) {
      e.preventDefault();
      document.getElementById("errorFirstName").innerHTML = errorFirstName;  // on ecrit le contenu de l'erreur dans le paragraphe
    }
    if (errorLastName) {
      e.preventDefault();
      document.getElementById("errorLastName").innerHTML = errorLastName;
    }
    if (errorEmail) {
      e.preventDefault();
      document.getElementById("errorEmail").innerHTML = errorEmail;
    }
    if (errorBirthdate) {
      e.preventDefault();
      document.getElementById("errorBirthdate").innerHTML = errorBirthdate;
    }
    if (errorTournament) {
      e.preventDefault();
      document.getElementById("errorTournament").innerHTML = errorTournament;
    }
    if (errorLocation) {
      e.preventDefault();
      document.getElementById("errorLocation").innerHTML = errorLocation;
    }
    if (errorCgd) {
      e.preventDefault();
      document.getElementById("errorCgd").innerHTML = errorCgd;
    }

  });








