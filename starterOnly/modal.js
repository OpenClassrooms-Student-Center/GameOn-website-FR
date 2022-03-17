function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
let params = (new URL(document.location)).searchParams;
let pbirthdate = params.get("birthdate");
console.log("param birthdate :"+pbirthdate);

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalbg1 = document.querySelector(".bground1");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtn1 = document.querySelectorAll(".modal-btn1");
const formData = document.querySelectorAll(".formData");
const modalBody = document.querySelectorAll(".modal-body");
const closeBtn = document.querySelectorAll(".close");
const formEl = document.getElementById("reserve");
const confirmEl = document.querySelectorAll(".bground");

function testNothing(value){
  return true;
}
const ageMinimum = 18;
const ageMaximum = 120;
const today = new Date();
const minYear = today.getFullYear() - ageMinimum;

const verifArray={
  'first': {
    'init' : clearInputContent,
    'verif': testFirstAndLastName,
    'event': "input",
    'data-error': "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
    'last-value': ""
  },
  'last' : {
    'init' : clearInputContent,
    'verif' : testFirstAndLastName,
    'event' : "input",
    'data-error': "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
    'last-value': ""
  },
  'email': {
    'init' : clearInputContent,
    'verif': testEmail,
    'event': "input",
    'data-error': "Veuillez entrer une adresse mail valide.",
    'last-value': ""
  },
  'birthdate': {
    'init' : clearInputContent,
    'verif': testBirthDate,
    'event': "input",
    'data-error': "Vous devez entrer votre date de naissance.",
    'last-value': ""
  },
  'quantity': {
    'init' : clearInputContent,
    'verif': testNumber,
    'event': "input",
    'data-error': "Veuillez entrer le nombre de tournois auxquels vous avez déjà participé.",
    'last-value': ""
  },
  'location1': {
    'init' : defaultLocation,
    'verif': testNothing,
    'event': onchange,
    'data-error': "Veuillez sélectionner une ville.",
    'last-value': ""
  },
  'checkbox1': {
    'init' : clearInputContent,
    'verif': testChecked,
    'event': onchange,
    'data-error': "Vous devez vérifier que vous acceptez les termes et conditions.",
    'last-value': ""
  },
  'checkbox2': {
    'init' : clearInputContent,
    'verif': testNothing,
    'event': onchange,
    'data-error': "",
    'last-value': ""
  },
};


formData.forEach(function(f){
  let field = f.querySelector('input').getAttribute('id');
  f.querySelector('input').addEventListener(verifArray[field]['event'],verifField);
  f.setAttribute('data-error',verifArray[field]['data-error']);
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal event
modalBtn1.forEach((btn) => btn.addEventListener("click", closeModal1));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  formData.forEach(function(f){
    let field = f.querySelector('input').getAttribute('id');
    initFieldElement(document.getElementById(field));
  });
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close modal form
function closeModal1() {
  modalbg1.style.display = "none";
}

function testFirstAndLastName(el){
  const verif = /.{2,}/;
  let ret = verif.test(el.value);
//  console.log("test:"+el.value+" ret:"+ret);
  return ret;
}
function testNumber(el){
  const verif = /\d{1,}/; /* equivalent à /[0,9]{1,}/ */
  return(verif.test(el.value));
}
// via input type="email". Regexp instead?
function testEmail(el){
  if(!el.value.length)
    return false;
  if(el.validity.typeMismatch){
    return false;
  }
  return true;
}

// regexp ou fonction?
function testBirthDate(el){
//  console.log("birthdate:"+el.value);
  if(!el.value.length)
    return false;
  let date = new Date(el.value);
  if (date.getTime() > today.getTime()){
    return false;
  }
  let diff = new Date(today.getTime() - date.getTime());
  let diffYear = diff.getFullYear() - 1970;
  if(diffYear<ageMinimum || diffYear>ageMaximum)
    return false;
  // console.log("birthdate true:"+el.value);
  return true;
}

function testChecked(el){
  if(el.checked){
    return true;
  }
  return false;
}

function clearInputContent(el){
  el.value = "";
}

function defaultLocation(el){

}

function clearCheckBox(el){

}

function initFieldElement(el){
  verifArray[el.getAttribute('id')]['init'](el);
}

function verifFieldElement(el){
//  console.log(el.getAttribute('id'));

  if(verifArray[el.getAttribute('id')]['verif'](el)){
    el.parentNode.setAttribute('data-error-visible','false');
    verifArray[el.getAttribute('id')]['last-value'] = el.value;
    return true;
  }
  el.parentNode.setAttribute('data-error-visible','true');
  return false;
}
function verifField(e){
  return verifFieldElement(e.target);
}

function radioButtonsChecked(){
  let location = document.querySelectorAll('[name="location"]');
  let checked = false;
  let town = "";

  location.forEach(function(loc){
    // console.log("Location:"+loc.value+" checked:"+loc.checked);
    if(loc.checked){
      checked = true;
      town = loc.value;
    }
  });
  if(checked){
    location[0].parentNode.setAttribute('data-error-visible','false');
    verifArray['location1']['last-value'] = town;
  //  console.log("TOWN:"+town);
    return true;
  }
  location[0].parentNode.setAttribute('data-error-visible','true');
  return false;
}

// traitement des validités avant envoi
formEl.addEventListener("submit", function (event) {
  let ret = true;
  let retReturn = true;
  formData.forEach(function(f){
    let field = f.querySelector('input').getAttribute('id');
    ret = verifFieldElement(document.getElementById(field));
    if(ret == false){
      retReturn = false;
    }
  });
  // // traitement special pour les radio-boutons
  if(!radioButtonsChecked()){
    retReturn = false;
  }
  
  // de toute facon nous devons controler la marche des evenements
  // ...ou pas, si on veut que le submit se fasse automatiquement
  event.preventDefault();

  if(!retReturn){
    // pas la peine si il a déjà été appelé, sinon oui
    // event.preventDefault();
    return false;
  }
  // Alors on peut faire le fetch
  // Dans ce cas il faut faire le event.preventDefault
  // voilà la string originale envoyée automatiquement par le submit:
  // first=dd&last=dd&email=dd%40d.org&birthdate=2000-02-18&quantity=1&location=Portland
  // console.log("window.location.href:" + window.location.href);
  var url = new URL(window.location.href);
  Object.keys(verifArray).forEach(function(k){
    if(k==='location1')
      url.searchParams.append('location',verifArray[k]['last-value']);
    else url.searchParams.append(k,verifArray[k]['last-value']);
  });
  // Et voici celle que j'envoie
  // http://localhost/GP4/?
  // first=dd&last=dd&email=dd%40d.org&birthdate=2001-02-03&quantity=2&location=San+Francisco&checkbox1=&checkbox2=
  fetch(url, {
    method: "GET"})
    .then((response) => console.log("fetch ok?"+response.ok+response.status))
    .catch(e => console.log("something went wrong: " + e))
  
  // on affiche la fenetre d'inscription effectuée si reponse serveur ok (bon ici il n'y a pas vraiment de serveur)
  modalbg1.style.display = "block"; 
  modalbg.style.display = "none";

  return true;
}, false);
