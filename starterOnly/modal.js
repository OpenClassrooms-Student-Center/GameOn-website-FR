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
const modalBody = document.querySelectorAll(".modal-body");
const closeBtn = document.querySelectorAll(".close");
const formEl = document.getElementById("reserve");

function testNothing(value){
  return true;
}
const ageMinimum = 18;
const ageMaximum = 120;
const today = new Date();
const minYear = today.getFullYear() - ageMinimum;

const verifArray={
  'first': {
    'verif': testFirstAndLastName,
    'event': "input",
    'data-error': "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
  },
  'last' : {
    'verif' : testFirstAndLastName,
    'event' : "input",
    'data-error': "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  },
  'email': {
    'verif': testEmail,
    'event': "input",
    'data-error': "Veuillez entrer une adresse mail valide."
  },
  'birthdate': {
    'verif': testBirthDate,
    'event': "input",
    'data-error': "Vous devez entrer votre date de naissance."
  },
  'quantity': {
    'verif': testNothing,
    'event': onchange,
    'data-error': "Entre 0 et 99"
  },
  'location1': {
    'verif': testNothing,
    'event': onchange,
    'data-error': "Veuillez sélectionner une ville."
  },
  'checkbox1': {
    'verif': testChecked,
    'event': onchange,
    'data-error': "Vous devez vérifier que vous acceptez les termes et conditions."
  },
};


formData.forEach(function(f){
  let field = f.querySelector('input').getAttribute('id');
  f.querySelector('input').addEventListener(verifArray[field]['event'],verifField);
  f.setAttribute('data-error',verifArray[field]['data-error']);
  
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

function testFirstAndLastName(el){
  const verif = /.{2,}/;
  let ret = verif.test(el.value);
  console.log("test:"+el.value+" ret:"+ret);
  return ret;
}

// via input type="email". Regexp instead?
function testEmail(el){
  if(el.validity.typeMismatch){
    return false;
  }
  return true;
}
// regexp ou fonction?
function testBirthDate(el){
  let date = new Date(el.value);
  if (date.getTime() > today.getTime()){
    return false;
  }
  let diff = new Date(today.getTime() - date.getTime());
  let diffYear = diff.getFullYear() - 1970;
  if(diffYear<ageMinimum || diffYear>ageMaximum)
    return false;
  return true;
}

function testChecked(el){
  if(el.checked){
    return true;
  }
  return false;
}

function verifFieldElement(el){
  console.log(el.getAttribute('id'));

  if(verifArray[el.getAttribute('id')]['verif'](el)){
    el.parentNode.setAttribute('data-error-visible','false');
    return true;
  }
  el.parentNode.setAttribute('data-error-visible','true');
  return false;
}
function verifField(e){
  return verifFieldElement(e.target);
}

formEl.addEventListener("submit", function (event) {
  let ret = true;
  let retReturn = true;
  formData.forEach(function(f){
    let field = f.querySelector('input').getAttribute('id');
    ret = verifFieldElement(document.getElementById(field));
    console.log("field:"+field+" ret:"+ret);
    if(ret == false){
      retReturn = false;
    }
  });
  if(!retReturn){
    event.preventDefault();
    return false;   
  }
  return true;
}, false);

// function validate(){

//   return false;
// }