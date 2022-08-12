

function editNav() {
  var x = document.querySelector("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg   = document.querySelector(".bground");
const modalBtn  = document.querySelectorAll(".modal-btn");
const formData  = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//fermeture du formulaire

// selection des class concernées pour la fermeture
const closeMod = document.querySelector(".close")

//fonction fermeture du formulaire
function closeModal(){
  modalbg.style.display = "none";
}

//evenement qui ferme le modal
closeMod.addEventListener("click", closeModal)


//IMPUT création des variables pour lier l'html

let firstName      = document.querySelector('#first');
let lastName       = document.querySelector('#last');
let email          = document.querySelector('#email');
let birthdate      = document.querySelector('#birthdate');
let quantity       = document.querySelector('#quantity');
let avertissements = document.querySelectorAll('.avertissement');


avertissements.forEach(function (avertissement){ 
  avertissement.style.display = "none";
}) 

firstName.addEventListener('change', function(e) {
  const value = e.target.value;
  const avert  = firstName.closest('.formData').querySelector('.avertissement');
  const avertform  = firstName.closest('.formData').querySelector('.text-control');
  const regexFirst = /^[a-zA-Z ]{2,30}$/;
  if (!regexFirst.test(value))
  {
    avert.style.display = 'block'
    avert.style.color = 'red'
    avertform.style.border = '3px solid #FF3012';
    avertform.style.backgroundColor = '#ff0202bd'
    }else
  {
    avert.style.display ='none';
    avertform.style.border = '3px solid #13FA39';
    avertform.style.backgroundColor = '#D6F4DC';
  }
})

lastName.addEventListener('change', function(e) {
  const value = e.target.value;
  const avert  = lastName.closest('.formData').querySelector('.avertissement');
  const avertform  = lastName.closest('.formData').querySelector('.text-control');
  const regexFirst = /^[a-zA-Z ]{2,30}$/;
  if (!regexFirst.test(value))
  {
    avert.style.display = 'block'
    avert.style.color = 'red'
    avertform.style.border = '3px solid #FF3012';
    avertform.style.backgroundColor = '#ff0202bd'; 
  
    }else
  {
    avert.style.display ='none';
    avertform.style.border = '3px solid #13FA39';
    avertform.style.backgroundColor = '#D6F4DC';
  }
})




  email.addEventListener('change', function(e)
  {
    const value = e.target.value;
    const avert  = email.closest('.formData').querySelector('.avertissement');
    const avertform  = email.closest('.formData').querySelector('.text-control');
    const regexmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regexmail.test(value))
    {
    avert.style.display = 'block'
    avert.style.color = 'red'
    avertform.style.border = '3px solid #FF3012';
    avertform.style.backgroundColor = '#ff0202bd'; 
      
      }else
      {
        avert.style.display ='none';
        avertform.style.border = '3px solid #13FA39';
        avertform.style.backgroundColor = '#D6F4DC';
      }
  })

  birthdate.addEventListener('change', function(e)
  {
    const value = e.target.value;
    const avert  = birthdate.closest('.formData').querySelector('.avertissement');
    const avertform  = birthdate.closest('.formData').querySelector('.text-control');
    const regexbirthdate = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/;
    if(regexbirthdate.test(value))
    {
    avert.style.display = 'block'
    avert.style.color = 'red'
    avertform.style.border = '3px solid #FF3012';
    avertform.style.backgroundColor = '#ff0202bd'; 
      
      }else
      {
        avert.style.display ='none';
        avertform.style.border = '3px solid #13FA39';
        avertform.style.backgroundColor = '#D6F4DC';
      }
  })

  quantity.addEventListener('change', function(e)
  {
    const value = e.target.value;
    const avert  = quantity.closest('.formData').querySelector('.avertissement');
    const avertform  =  quantity.closest('.formData').querySelector('.text-control');
    const regexquantity = /^[0-99][0-9]?$/;
    if(!regexquantity.test(value))
    {
    avert.style.display = 'block'
    avert.style.color = 'red'
    avertform.style.border = '3px solid #FF3012';
    avertform.style.backgroundColor = '#ff0202bd'; 

      }else
      {
        avert.style.display ='none';
        avertform.style.border = '3px solid #13FA39';
        avertform.style.backgroundColor = '#D6F4DC';
      }
  })

  