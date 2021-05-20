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
const submitBtn = document.querySelector(".btn-submit");
const form={                                                //objet contenant les champs du formulaire
  first: document.getElementById("first"),
  last: document.getElementById("last"),
  email: document.getElementById("email"),
  birthdate: document.getElementById("birthdate"),
  quantity: document.getElementById("quantity"),
  city: document.querySelectorAll("input[type=radio]"),
  terms: document.getElementById("checkbox1")
};
const regex ={
  mail: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  name: /^[a-zA-Z-]{1,}[^\d.+*/$%µ!§:;,?={}²&~"#()`@]$/, 
  quantity: /^\d{1,}$/
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// fermer la modale
const closeModalBtn = document.querySelector(".close");

closeModalBtn.addEventListener("click", function(){
  modalbg.style.display = "none";
});


// validation d'un champ de texte
function validText(entry, regex){
  if(entry.match(regex)){
    return true
  } else{
    return false
  }
}

// validation de la date de naissance
function isDateValid(){
  let date = new Date(form.birthdate.value).getTime();
  let year = form.birthdate.value.substring(0,2);
  if (parseInt(year) < 19 || isNaN(date) || Date.now() < date){
    return false;
  } else {
    return true;
  }
}

// validation de la selection de la ville
function isCityValid(){
  for (let i=0; i< form.city.length; i++){
    if (form.city[i].checked){
      return true;
    }
  }
  return false;
}

// validation des conditions d'utilisation
function isTermsValid(){
  if (form.terms.checked){
    return true;
  } else {
    return false;
  }
}

// ecoute du bouton submit
submitBtn.addEventListener("click", function(event){
    if( validText(form.first.value, regex.name) &&
    validText(form.last.value, regex.name) &&
    validText(form.email.value, regex.mail) &&
    validText(form.quantity.value, regex.quantity) &&
    isDateValid() && isCityValid() && isTermsValid()){
      console.log("ok");
    } else{
      event.preventDefault();
    }
});
