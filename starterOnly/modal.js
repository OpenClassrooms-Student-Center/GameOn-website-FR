function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.getElementById("bground");
const closeModalBtn = document.querySelector(".closeModal");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


/*FERMETURE MODAL*/

//close modal event
closeModalBtn.addEventListener("click", closeModal);

//close modal form
function closeModal() {
  modalbg.style.display = 'none';
  closeModalBtn.removeEventListener('click', closeModal)
}



//message erreur adr mail

let form = document.forms["reserve"]
let verifMail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit', function(e){

  //constantes
  const first = form.querySelector('input[name="first"]')
  const last = form.querySelector('input[name="last"]')
  const email = document.querySelector('email')
  const birthdate = form.querySelector('input[name="birthdate"]')
  const quantity = form.querySelector('input[name="quantity"]')

  const myError = document.getElementById('error');
  const myError1 = document.getElementById('error1');
  const myError2 = document.getElementById('error2');
  const myError3 = document.getElementById('error3');
  const myError4 = document.getElementById('error4');
  
  const conditions = document.getElementById('checkbox1');
  console.log(conditions.checked)


  const formErrors = 0;

  //label prenom doit avoir 2 caractere min et ne peut être vide
  if(!prenom.value.trim().match()) {
    alert('Veuillez entrer 2 caractères ou plus pour le champ du prénom')
    formError++;
  } else {
    hideFieldError(prenom);
  }


  if(!email.value.trim().match(verifMail))
  {
    alert('l\'adresse email n\'est pas valide')
    e.preventDefault()
    e.removeEventListener()
  }
})





/*
const getUsers = async function () {
  let data = await fetch()
  .then(response => response.json())
  console.log(data)
}

getUsers()

let email = document.querySelector('#email')
email.focus()

document.querySelector('form').addEventListener('submit', function(e){
    let mentions = document.querySelector('#mentions')
    if(!mentions.checked) {
        alert('Vous n\'avez pas accepté les CGU')
        e.preventDefault()
    }
})*/


for (let i=0; i<prenom.length; i++) {
  let p = prenom[i]


}







//ici commence l'excercise 

reserve = document.getElementById('reserve'); 
reserve.addEventListener('submit', function(e) {
   
//Variables
  e.preventDefault();
  
  const conditions = document.getElementById('checkbox1');
  console.log(conditions.checked)
  
 
  // Pattern des différents types 
  let textFormat = /^[a-zA-Z\é\è\-\^\']{2,30}$/; 
  let emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;  
  

  let compteur = 0;
  //prenom 
  if (first.value == "" || textFormat.test(first.value) == false) {  
    first.style.border = "1px red solid";
    error.textContent = "Veuillez remplir le champ avec min 2 lettres."
    myError.style.color = 'red';  
    myError.style.fontSize = '0.5em'    
   }
  else {  
    myError.innerHTML = ""; 
    first.style.border = "2px green solid";   
    compteur++ 
  }    
  // nom
  if (last.value == "" || textFormat.test(last.value) == false) {  
    last.style.border = "2px red solid";    
    error1.textContent = "Veuillez remplir le champ avec min 2 lettres."
    myError1.style.color = 'red';
    myError1.style.fontSize = '0.5em';    
  } 
  else {
    myError1.innerHTML = ""; 
    last.style.border = "2px green solid";
    compteur++
  }
  //email 
  if (email.value == "" || emailFormat.test(email.value) == false) {              
    email.style.border = "2px red solid";
    error2.textContent = "Veuillez entrer un email valide."
    myError2.style.color = 'red';
    myError2.style.fontSize = '0.5em';   
  }  
    else {
    myError2.innerHTML = ""; 
    email.style.border = "2px green solid";
    compteur++
    }
  //Date de naissance- birthdate
  if (birthdate.value == "")  { 
    birthdate.style.border = "2px red solid";           
    error3.textContent ="Veuillez entrer votre date de naissance."
    myError3.style.color = 'red'; 
    myError3.style.fontSize = '0.5em';
  } 
  else {
    myError3.innerHTML = "";
    birthdate.style.border = "2px green solid";
    compteur++ 
  }
  //Tournois -quantity     
  if (quantity.value == "") {   
    quantity.style.border = "2px red solid";    
    error4.textContent ="Vous devez saisir un nombre."
    myError4.style.color = 'red';    
    myError4.style.fontSize = '0.5em';
  }  
  else {
   myError4.innerHTML = ""; 
   quantity.style.border = "2px green solid";
    compteur++
  } //choix de la ville
    errorMsg.innerHTML = "";
  if(document.getElementById('location1').checked || document.getElementById('location2').checked || 
    document.getElementById('location3').checked ||document.getElementById('location4').checked||document.getElementById('location5').checked||document.getElementById('location6').checked) {
    compteur++
  } 
  else {   
    errorMsg.textContent ="Vous devez saisir une ville."
    errorMsg.style.color = 'red'; 
    errorMsg.style.fontSize = '0.5em';
  }   
 //Conditions et informations. 
 
 if(!document.getElementById('checkbox1').checked) {   
  errorFinal.textContent = "Veuillez cocher les conditions d'utilisation" 
  errorFinal.style.color = 'red'; 
  errorFinal.style.fontSize = '0.5em';
  }
 else { 
  errorFinal.innerHTML = ""; 
    compteur++    
  } 
  console.log(compteur)
  if (compteur === 7){
    reserve.innerHTML = "Votre reservation <br> a bien été reçue";
    btnClose.style.display = "block";   //se agrego
    reserve.style = "display: flex;  justify-content: center; margin-top: 280px";     
   
    document.getElementById("reserve").reset();
     delayedClose();
  } 
  
  function delayedClose() {
    window.setTimeout(reloadPage, 5000);    
   }
 
  function reloadPage() {
    location.reload();
  } 
  // reserve.addEventListener("click", () => { //msg reussite et fermeture 
  //   if (reserve.innerHTML === "Votre réservation a bien été reçue") {
  //      if(getComputedStyle(bground).display != "none"){
  //       bground.style.display = "none";
  //       e.preventDefault();      
  //      } 
  //  } }) 