

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
let submitButton   = document.querySelector('.btn-submit');
let cities         = document.querySelectorAll(`input[name="location"]`);



// boucle pour faire disparaitre les messages d'avertissement

avertissements.forEach(function (avertissement){ 
	avertissement.style.display = "none";
}) 

// vérification regex

function isFirstNameValid()
	{
		const regexFirst = /^[a-zA-Z ]{2,30}$/;

		if (!regexFirst.test(firstName.value))
		{
			return false;
		}

		return true;
	}

function isLastNameValid()
	{
		const regexLast = /^[a-zA-Z ]{2,30}$/;

		if (!regexLast.test(lastName.value))
		{
			return false;
		}

		return true;
	}

function isEmailValid()
	{
		const regexmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!regexmail.test(email.value))
		{
			return false;
		}

		return true;
	}

function isBirthdateValid()
{
	const regexbirthdate = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/;

	if (!regexbirthdate.test(birthdate.value))
	{
		return false;
	}

	return true;
}

function isQantityValid()
{
	const regexquantity = /^[0-99][0-9]?$/;
	if(!regexquantity.test(quantity.value))
	{
		return false;
	}
	return true;
}

function isCityValid()
	{
		let isValid = false;
		cities.forEach(city =>
			{
				if (city.checked)
				{
					isValid = true
				}
			})
			return isValid
	}

// fonction permet de revenir à l'élément parent puis retrouver la class concernée

function findAvertissement(el)
  {
	  return el.closest('.formData').querySelector('.avertissement');
  }

	function fAvertissement(el)
  {
	  return el.closest('.formData').querySelector('.text-control');
  }


//  mise en forme des champs du formulaire en cas erreur ou validation
function showError(avert, avertform)
{
	  avert.style.display = 'block'
		avert.style.color = 'red'
		avertform.style.border = '3px solid #FF3012';
		avertform.style.backgroundColor = '#ff0202bd'		
}

function hidenError(avert, avertform)
{
	avert.style.display ='none';
		avertform.style.border = '3px solid #13FA39';
		avertform.style.backgroundColor = '#D6F4DC';
}

// affiche ou cache le message erreur et modifie la présentation
	
firstName.addEventListener('change', function() 
{	
	const avert = findAvertissement(firstName);
	const avertform = fAvertissement(firstName);

	if (!isFirstNameValid())
	{
		showError(avert, avertform);
		
		}else
	{
		hidenError(avert, avertform);
		
	}
})

lastName.addEventListener('change', function() {
	
	const avert = findAvertissement(lastName);
	const avertform = fAvertissement(lastName);
	
	if (!isLastNameValid())
	{
		showError(avert, avertform);
		
		}else
	{
		hidenError(avert, avertform);
		
	}
})


email.addEventListener('change', function(){
		
	const avert = findAvertissement(email);
	const avertform = fAvertissement(email);
		if (!isEmailValid())
	{
		showError(avert, avertform);
		
		}else
	{
		hidenError(avert, avertform);
		
	}
	})

birthdate.addEventListener('change', function(){
		
	const avert = findAvertissement(birthdate);
	const avertform = fAvertissement(birthdate);
		
		if (isBirthdateValid())
	{
		showError(avert, avertform);
		
		}else
	{
		hidenError(avert, avertform);
		
	}
	})

	quantity.addEventListener('change', function()
	{
		const avert  = quantity.closest('.formData').querySelector('.avertissement');
		const avertform  =  quantity.closest('.formData').querySelector('.text-control');
		
		if (!isFirstNameValid())
	{
		showError(avert, avertform);
		
		}else
	{
		hidenError(avert, avertform);
		
	}
	})


	
// validation du formulaire

submitButton.addEventListener('click', function ()
{
	
let formValid = parseInt(isFirstNameValid() && isLastNameValid() && isEmailValid() && isBirthdateValid() && isQantityValid() && isCityValid())
	// event.preventDefault() 
if (formValid == true)
{
	return alert("test valide");
	
}else 
{
	return alert("le test n'est pas bon")
}

})



	