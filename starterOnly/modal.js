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

// Ciblage du span avec class close
const btnCloseModal = document.querySelector("span.close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fermeture de la modal
const closeModal = () => (modalbg.style.display = "none");

//Ajout d'un evenement clique sur le bouton pour appeler la fonction qui fermera la modal
btnCloseModal.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Ciblage des éléments du formulaire

const input = document.querySelectorAll("input");
const radio = document.querySelectorAll("input[type=radio]");
const checkbox = document.querySelector("input[type=checkbox]");

//Creation des regex pour valider les donnée qu'on souhaite

const regexName = new RegExp(/[a-z]{2,}/i);
const regexMail = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/i);
const regexCompetition = new RegExp(/^[0-9]{1,}/);






// creation d'un element paragraphe 
const para = document.createElement("p");

//Creation d'une fonction pour créer un message d'erreur  avec 2 paramatres (le tableau renvoyé par formDate et un message d erreur)

const editError = (formData, err) => {

// ajout de conteu dans le paragraphe crée precedement
  para.textContent= err;

// ajpout de la classe erreur crée en css (ligne 531)
  para.classList.add("erreur")

// ajout du paragraĥe comme dernier élément de l'element formdata
  formData.appendChild(para)
}






//Ciblage du formulaire

document.forms[0].addEventListener("submit", (e) => {

  // Cration d'une variable qui servira a stocké les messages d'erreurs
 
  let erreur;

  // si la valeur retourné est différent de la regex => informé l'utilisateur de l'erreur
  if (input[0].value != input[0].value.match(regexName)) {
    erreur = "Veuillez renseigner un prénom valide";

    //appel de la fonction pour créer un paragraphe en cas d'erreur
    editError(formData[0], erreur);

    //Permet de tester la validation de l'entrée sur la console
    console.log("Veuillez renseigner un prénom valide");

    // si la valeur retourné est différent de la regex => informé l'utilisateur de l'erreur
  } else if (input[1].value != input[1].value.match(regexName)) {
    erreur = "Veuillez renseigner un nom valide";
    editError(formData[1], erreur);

    //Permet de tester la validation de l'entrée sur la console
    console.log("Veuillre renseigner un nom valide");

    // si la valeur retourné est différent de la regex => informé l'utilisateur de l'erreur
  } else if (input[2].value != input[2].value.match(regexMail)) {
    erreur = "Veuillez renseigner un email valide";
    editError(formData[2], erreur);

    //Permet de tester la validation de l'entrée sur la console
    console.log("Veuillez renseigner une adresse mail valide");

  }else if(!input[3].value){
    erreur = "Veuillez renseigner votre date de naissance";
    editError(formData[3], erreur);

    // si la valeur retourné est différent de la regex => informé l'utilisateur de l'erreur
  } else if (input[4].value != input[4].value.match(regexCompetition)) {
    erreur =
      "Veuillez renseigner 0 ou le nombre de comptétion que vous avez fait";
      editError(formData[4], erreur);

    //Permet de tester la validation de l'entrée sur la console
    console.log("Veuillez renseigner un nombre de competition valide");

    // si aucune ville selectionné => informé l'utilisateur de l'erreur
  } else if (
    !radio[0].checked &&
    !radio[1].checked &&
    !radio[2].checked &&
    !radio[3].checked &&
    !radio[4].checked &&
    !radio[5].checked
  ) {
    erreur = "Veuillez selectionné une ville";
    editError(formData[5], erreur);

    //Permet de tester la validation de l'entrée sur la console
    console.log("Veuillez indiqué une ville");

    // si les CDG n'ont acceptés => informé l'utilisateur de l'erreur
  } else if (!checkbox.checked) {
    erreur = "Veuillez acceptez les conditions générales de vente";
    editError(formData[6], erreur);

    //Permet de tester la validation de l'entrée sur la console
    console.log("Il est obligé d'accepté les conditions de vente générales");
  }

  // Si toutes les entrées sont valide , envoi le formulaire

  if (
    input[0].value &&
    input[1].value &&
    input[2].value &&
    input[3].value &&
    input[4].value &&
    (radio[0].checked ||
    radio[1].checked ||
    radio[2].checked ||
    radio[3].checked ||
    radio[4].checked ||
    radio[5].checked) &&
    checkbox.checked === true
    ) {
      alert("FORMULAIRE ENVOYE AVEC SUCCES");

    // sinon n'envoi pas le formulaire via la demande de comportement par défault
  } else {
    e.preventDefault();
    formData.innerHTML = erreur;
    return 0;
  }
});
