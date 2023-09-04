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
let formData = document.querySelectorAll(".formData");
const form = document.getElementById("myForm");

console.log(form.first);
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Ecouter la modification du prénom
form.first.addEventListener('change',function() {
  valideFirst(this);
});

//Fonction vérifier via la RegExp que le prénom est conforme
const valideFirst = function(inputFirst) {
  let firstRegExp = new RegExp('^[a-zA-Z-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s\']+$', 'g');

let testFirst = firstRegExp.test(inputFirst.value)
console.log(testFirst);
};

//Ecouter la modification du nom
form.last.addEventListener('change',function() {
  valideLast(this);
});
//Fonction vérifier via la RegExp que le nom est conforme
const valideLast = function(inputLast) {
  let lastRegExp = new RegExp(/^[a-zA-Z-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+([ \-']?[a-zA-Z-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+[ \-']?[a-zA-Z-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+[ \-']?)[a-zA-Z-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+$/, 'g');

let testLast = lastRegExp.test(inputLast.value)
console.log(testLast);
};


//Ecouter la modification de l'email
form.email.addEventListener('change',function() {
  valideEmail(this);
});

//Fonction vérifier via la RegExp que l'email est conforme'
const valideEmail = function(inputEmail) {
  let emailRegExp = new RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$', 'gm');

let testEmail = emailRegExp.test(inputEmail.value)
console.log(testEmail);
};
