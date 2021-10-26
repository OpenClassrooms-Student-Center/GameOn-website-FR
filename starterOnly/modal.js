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

let erreur;
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
const checkbox2=document.getElementById('checkbox2'); //cg

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

    if(checkbox1.checked === false){

      erreur="vous devez accepter les conditions";
    }


    var checkCount = 0;
    if(location1.checked === true){
      checkCount++;
    }
    if(location2.checked === true){
      checkCount++;
    }

    if(location3.checked === true){
      checkCount++;
    }
    if(location4.checked === true){
      checkCount++;
    }
    if(location5.checked === true){
      checkCount++;
    }
    if(location6.checked === true){
      checkCount++;
    }

    if (checkCount>1){
      erreur = "vous ne pouvez pas selectionner plusieurs localisation";
    } else if (checkCount<1){
      erreur = "vous n'avez pas choisi de localisation";
    } else {
      erreur=" ";
    }

    if(!quantityTournament.value){
      erreur ="Merci de renseigner le nombre de vos participation aux tournois";
    } else if(quantityTournament.value>99){
      erreur ="Nous n'avons pas organisé autant de tournois";
    }




    var birdthdateValidity = false;
    if (!birthdate.value){  // on verifie que le champs est different de "" (n'est pas vide)
      erreur = "veuillez renseigner votre date de naissance";
    } else if (BirthdateRegex.test(birthdate.value) == false){
      erreur="une date de naissance ne peut contenir que des chiffres";
    } else if (birthdate.value.length != 10){
      erreur="une date de naissance contient 8 chiffres";
    } else{
      birdthdateValidity = true;
    }



    var emailValidity = false;
    if (!email.value){
      erreur = "veuillez renseigner une addresse mail";
    }
    else if(email.value.length > 41 || email.value.length <3 ){
      erreur ="un email doit contenir ENTRE 3 ET 40 CARACTERES caractères";
    }

    else if (EmailRegex.test(email.value) == false) { //on test la validité des caractère avec la regex
      erreur = "vous devez renseigné une addresse valide";
    }
    else{
      emailValidity = true;
    }



    var lastNameValidity = false;
    if (!lastName.value) {
      erreur = "veuillez renseigner votre nom";
    } else if (lastName.value.length < 2 || lastName.value.length > 40) {
      erreur = "un nom doit contenir entre 2 et 40 caractères";

    } else if (FirstLastRegex.test(lastName.value) == false) { //on test la validité des caractère avec la regex
      erreur = "un nom ne doit contenir que des lettres";
    } else{
      lastNameValidity = true;
    }



      var FirstNameValidity = false;
      if (!firstName.value) {
        firstName.closest('.formData').dataset.error = "sss"; // on definit la propriété error de l'objet cutomisable dataset
        firstName.closest('.formData').dataset.errorVisible = 'true';

        erreur = "veuillez renseigner votre prénom";
      } else if (firstName.value.length < 2 || firstName.value.length > 40) {
        erreur = "un prénom doit contenir entre 2 et 40 caractères";

      } else if (FirstLastRegex.test(firstName.value) == false) { //on test la validité des caractère avec la regex
        erreur = "un prenom ne doit contenir que des lettres";
      } else{
        FirstNameValidity = true;
      }



    if (erreur) {
      e.preventDefault();
      document.getElementById("erreur").innerHTML = erreur;  // on ecrit le contenu de l'erreur dans le paragraphe qui a pour id "erreur"
    }


  });








