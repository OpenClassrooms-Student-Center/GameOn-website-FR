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
const formData = document.getElementById('form-modal');
const closeModal = document.querySelectorAll(".close-modal");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModal.forEach((btn) => btn.addEventListener("click", () => modalbg.style.display = "none"));


// launch modal form
function launchModal() {
  modalbg.style.display = "flex";
}

formData.onsubmit = async (e) => { // Function Asynchrone
  // Annuler la redirection par défaut
  e.preventDefault();
  // Nettoyer toutes les erreurs du formulaire
  clearErrorForm(e);
  // Tableau des erreurs
  const errors = [];

  // Récupère moi la valeur du formulaire à l'aide de son nom ou la checkbox
  const getValue = (name) => e.target[name].value; 
  const getCheckbox = (name) => e.target[name].checked;


  if(String(getValue('first')).trim().length < 2) {
    errors.push('first');
  }  
 
  if(String(getValue('last')).trim().length < 2) {
    errors.push('last');
  }

  if(getValue('email') === "") {
    errors.push('email');
  }

  if(getValue('birthdate') === "") {
    errors.push('birthdate');
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
    case 'first': return 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom';
    case 'last': return 'Veuillez entrer 2 caractères ou plus pour le champ du Nom';
    case 'email': return 'Veuillez entrer une adresse mail';
    case 'birthdate': return 'Vous devez entrer votre date de naissance';
    case 'location': return 'Vous devez choisir une option';
    case 'checkbox1': return 'Vous devez vérifier que vous acceptez les termes et conditions';
  }
}
