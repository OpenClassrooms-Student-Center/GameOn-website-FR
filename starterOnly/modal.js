function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Variables DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.getElementById('form-modal');
const closeModal = document.querySelectorAll(".close-modal");


// Evènements
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModal.forEach((btn) => btn.addEventListener("click", () => modalbg.style.display = "none"));


// AFfichage du modal
function launchModal() {
  modalbg.style.display = "flex";
}

formData.onsubmit = async (e) => { // Function Asynchrone
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let nameRegex = /^[A-Za-z]+$/g;
  let numberRegex = /^[0-9]*$/g
  // Annuler la redirection par défaut
  e.preventDefault();
  // Nettoyer toutes les erreurs du formulaire
  clearErrorForm(e);
  // Tableau des erreurs
  let errors = [];

  // Récupère moi la valeur du formulaire à l'aide de son nom ou la checkbox
  const getValue = (name) => e.target[name].value; 
  const getCheckbox = (name) => e.target[name].checked;

  

  if(!getValue('first').length > 2 || getValue('first').match(nameRegex) === null) {
    errors.push('first');
  }  

  if(!getValue('last').length > 2 || getValue('last').match(nameRegex) === null) {
    errors.push('last');
  }

  if(getValue('email') === "" || getValue('email').match(emailRegex) === null) {
    errors.push('email');
  }

  if(getValue('birthdate') === "") {
    errors.push('birthdate');
  }
  if(getValue('quantity') === "" || getValue('quantity').match(numberRegex) === null) {
    errors.push('quantity');
  }
  if(getValue('location') === "") {
    errors.push('location');
  }

  if(!getCheckbox('checkbox1')) {
    errors.push('checkbox1');
  }

  for await (let i of errors) {

    if(NodeList.prototype.isPrototypeOf(e.target[i])) {
      e.target[i][0].parentNode.setAttribute('data-error', getErrorText(i));
      continue;
    }

    e.target[i].parentNode.setAttribute('data-error', getErrorText(i))
  }

  if(errors.length === 0) {
    formData.setAttribute('hide', "true");
    document.getElementById('conf-modal').removeAttribute('hide');
  }
}

const clearErrorForm = (e) => {
  let list = e.target.querySelectorAll('[data-error]');

  if(list.length > 0) {
    for (let i of list) {
      i.removeAttribute('data-error');
    }
  }

}
const getErrorText = (name) => {
  switch(name) {
    case 'first': return 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom (alphabet uniquement)';
    case 'last': return 'Veuillez entrer 2 caractères ou plus pour le champ du Nom (alphabet uniquement)';
    case 'email': return 'Veuillez entrer une adresse mail';
    case 'birthdate': return 'Vous devez entrer votre date de naissance';
    case 'location': return 'Vous devez choisir une option';
    case 'quantity': return 'Veuillez entrer une valeur numérique';
    case 'checkbox1': return 'Vous devez vérifier que vous acceptez les termes et conditions';
  }
}
