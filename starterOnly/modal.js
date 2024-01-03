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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

let BoutonX = document.querySelector(".close")
console.log(BoutonX)
BoutonX.addEventListener('click', () => {
  console.log("on clique sur le bouton x")

  modalbg.style.display = "none"
})


const form = document.querySelector('form')
form.addEventListener("submit", (event) => {

  event.preventDefault();

})
function validerNomEtPrenom(nom) {

  if (nom.trim().length >= 2) {
    return true
  }
  return false

}
function validerChampQuantity (quantity){
  let quantityRegEx = new RegExp("^\d+$")
  if ( quantityRegEx.test(quantity)){
    return true
  }
return false
// console.log(typeof quantity)
  // return !!quantity && !isNaN(quantity)
}

function validerEmail(email){
  let emailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if(emailRegex.test(email.trim())){
    return true
  }
  return false
}
function validerBoutonRadio(Var){
if(Var === ""){
  return false
}
else{
  return true 
}
}
function validerCheckBox(btn){
  return (btn.checked) // better way to do the sae as if (tatata) return true 

}

function validate() {
  console.log("Il n’y a pas eu de rechargement de page");
  let prenom = document.getElementById("first").value
  let nom = document.getElementById("last").value
  let email = document.getElementById("email").value
  let birthday = document.getElementById("birthdate").value
  let quantity = document.getElementById("quantity").value
  let baliseLocation = document.querySelectorAll('input[name="location"]')
  let location = ""
  for (let i = 0; i < baliseLocation.length; i++) {
    if (baliseLocation[i].checked) {
      location = baliseLocation[i].value
      break
    }
  }
  let checkBox = document.querySelectorAll('input[type="checkbox"]')
  for (let i = 0; i < checkBox.length; i++) {
    checkBoxChecked = checkBox[i].checked
    console.log(checkBoxChecked)
  }
  let checkBox1 = document.getElementById("checkbox1")
  console.log(prenom)
  console.log(nom)
  console.log("validation Prenom",  validerNomEtPrenom(prenom))
  console.log("validation nom",  validerNomEtPrenom(nom))
  console.log(email)
  console.log("validation email" , validerEmail(email))
  console.log(birthday)
  console.log(quantity)
  console.log( "validation du champ quantity" , validerChampQuantity(quantity))
  console.log(location)
  console.log("validation bouton radio", validerBoutonRadio(location))
  console.log( "validation checkbox1", validerCheckBox(checkBox1))

  return true
}





