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

//close modal event
closeModalBtn.addEventListener("click", closeModal);

//close modal form
function closeModal() {
  modalbg.style.display = 'none';
  closeModalBtn.removeEventListener('click', closeModal)
}



// //message erreur adr mail

let form = document.forms["reserve"]
let verifMail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit', function(e){
  
  let prenom = form.querySelector('input[name="first"]')
  let nom = form.querySelector('input[name="last"]')
  let email = document.querySelector('email')
  let dateDeNaissance = form.querySelector('input[name="birthdate"]')


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
