function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// DOM Elements
const closeBtn = document.querySelector(".close");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelector(".formData");
const submitButton = document.querySelector(".btn-submit");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailAddressInput = document.getElementById("email");
const birthDateInput = document.getElementById("birthdate");
const checkBoxInput = document.querySelectorAll(".checkbox-label");
const checkCondition = document.querySelector(".checkbox1-label > .checkbox-icon")

const closeModal = function(){
  modalbg.style.display="none";
};
function launchModal() {
  modalbg.style.display = "block";
}
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal)

//(4) Pour le nombre de concours, une valeur numérique est saisie.
//(5) Un bouton radio est sélectionné.
//(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
//Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

const onSubmit = function(){
  //first name: 
  if(firstNameInput.value.length<2){
    errorFirstName.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
  }else{
    errorFirstName.innerHTML = "";
    return true;
  }

  //last name:
  if(lastNameInput.value.length<2){
    errorLastName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom de famille";
  }else{
    errorLastName.innerHTML = "";
    return true;
  }

  //email address: 
  //regular expression to match required email address format: regular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(emailAddressInput.value.match(mailFormat)){
    errorEmailAddress.innerHTML="";
    return true;
  }
  else{
    errorEmailAddress.innerHTML = "Veuillez fournir une adresse email valide";
  }

  //birthday: 
  //regular expression to match required date format: regular = /^\d{1,2}\/\d{1,2}\/\d{4}$/  or /^\d{2}\/\d{2}\/\d{4}$/;
  let dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
  if(birthDateInput.value !="" && !birthDateInput.value.match(dateFormat)){   
    errorBirthDate.innerHTML="";
    return true;
  }
  else{
    errorBirthDate.innerHTML = "Vous devez entrer votre date de naissance.";
  }
}

 //city option:
 function isChecked(){
  let newYork = querySelector('location1').checked;
  let sanFrancisco = querySelector('location2').checked;
  let seattle = querySelector('location3').checked;
  let chicago = querySelector('location4').checked;
  let boston = querySelector('location5').checked;
  let portland = querySelector('location6').checked;
if(newYork==false && sanFrancisco==false && seattle==false && chicago==false && boston==false && portland==false){
ErrorOption.innerHTML="Vous devez choisir une ville.";
}else{
ErrorOption.innerHTML=""
return true;
} 
}

//Terms and conditions:
if(checkCondition.checked){ 
  ErrorCondition.innerHTML="Vous devez vérifier que vous acceptez les termes et conditions."
}else{
  ErrorCondition.innerHTML="";
  //alert('Merci ! Votre réservation a été reçue.');
}

formData.addEventListener("submit", onSubmit);
firstNameInput.addEventListener("submit", onSubmit);
lastNameInput.addEventListener("submit", onSubmit);
emailAddressInput.addEventListener("submit", onSubmit);
birthDateInput.addEventListener("submit", onSubmit);
submitButton.addEventListener("click", onSubmit); 
//checkCondition.addEventListener("submit", onSubmit);=> not work 
//isChecked.addEventListener("submit", onSubmit);











//草稿：
//for(let i=0;i<checkBoxInput.length;i++){
//if(!checkBoxInput[i].checked || checkBoxInput[i]<1){ // if(checkBoxInput[i].checked && i>=1),  ErrorOption.innerHTML="" ?
//ErrorOption.innerHTML="Vous devez choisir une ville.";
//  }else{
//  ErrorOption.innerHTML=""
// }