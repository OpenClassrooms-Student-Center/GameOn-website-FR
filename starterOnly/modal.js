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



//variable formulaire
let form = document.forms["reserve"]

//format text et mail
let verifMail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
let textFormat = /^[a-zA-Z\é\è\-\^\']{2,30}$/; 


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
  
  const formErrors = 0;

  //label prenom
  if(first.value == "" || textFormat.test(first.value) == false) {
    alert('Veuillez entrer 2 caractères ou plus pour le champ du prénom')
    error.style.color = 'red'
  } 
  else {
    error.innerHTML = ""; 
    formErrors++
  }

  //label nom 
  if (last.value == "" || textFormat.test(last.value) == false) {     
    alert('Veuillez remplir le champ avec min 2 lettres.') 
    error1.style.color = 'red'; 
  } 
  else {
    error1.innerHTML = ""; 
    formErrors++
  }

  //label mail
  if(!email.value.trim().match(verifMail)) {
    alert('l\'adresse email n\'est pas valide')
    e.preventDefault()
    e.removeEventListener()
  }

  //label birthday
  if (birthdate.value == "")  { 
             
    alert('Veuillez entrer votre date de naissance.')
    error3.style.color = 'red'; 
  } 
  else {
    error3.innerHTML = "";
    formErrors++
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
   } }) 