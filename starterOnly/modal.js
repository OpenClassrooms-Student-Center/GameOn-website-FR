// DOM Elements
const modalbg   		= document.querySelector(".bground");
const modalBtn  		= document.querySelectorAll(".modal-btn");
const formData  		= document.querySelectorAll(".formData");
const firstName    		= document.querySelector('#first');
const lastName     		= document.querySelector('#last');
const email        		= document.querySelector('#email');
const birthdate    		= document.querySelector('#birthdate');
const quantity     		= document.querySelector('#quantity');
const avertissements	= document.querySelectorAll('.avertissement');
const submitButton   	= document.querySelector('.btn-submit');
const cities         	= document.querySelectorAll(`input[name="location"]`);
const city         		= document.querySelector(`input[name="location"]`);
const agreement 		= document.getElementById('checkbox1');
const closeMod 			= document.querySelector(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//evenement qui ferme le modal
closeMod.addEventListener("click", closeModal)

// boucle pour faire disparaitre les messages d'avertissement

avertissements.forEach(function (avertissement){ 
	avertissement.style.display = "none";
}) 

// ecoute de l'entree et diffusion du message d'erreur
firstName.addEventListener('change', function() 
{	
	hideError(firstName);
	
	if (!isFirstNameValid())
	{
		showError(firstName);
	}
})

lastName.addEventListener('change', function () 
{
	hideError(lastName);
	
	if (!isLastNameValid())
	{
		showError(lastName);
	}
})


email.addEventListener('change', function ()
{
	hideError(email);
	
	if (!isEmailValid())
	{
		showError(email);
	}
})

birthdate.addEventListener('change', function ()
{
	hideError(birthdate);
		
	if (!isBirthdateValid())
	{
		showError(birthdate);
	}
})

quantity.addEventListener('change', function()
{
	hideError(quantity);
		
	if (!isQuantityValid())
	{
		showError(quantity);
	}
})

agreement.addEventListener('change', function ()
{
	hideError(agreement);
		
	if (!isAgreementValid())
	{
		showError(agreement);
	}
})

// validation du formulaire complet
submitButton.addEventListener('click', function (e)
{
	e.preventDefault();
	hideError(city);

	if (!isCityValid())
	{
		showError(city)
	}
	
	if (!(isFirstNameValid()
		&& isLastNameValid()
		&& isEmailValid()
		&& isBirthdateValid()
		&& isQuantityValid()
		&& isCityValid()
		&& isAgreementValid())
	) {
		return;
	}

	console.log('le formulaire est valide',  {
		"firstName": firstName.value,
		"lastName": lastName.value,
		"email": email.value,
		"birthdate": birthdate.value,
		"quantity": quantity.value,
		"city": city.value,
		"agreement": agreement.value,

	})

	showConfirmation();
})

// fermeture du modal
function closeModal(){
	modalbg.style.display = "none";
}

function editNav() {
	var x = document.querySelector("#myTopnav");
	if (x.className === "topnav") {
		x.className += "responsive";
	} else {
		x.className = "topnav";
	}
}

//retour au parent formData + recherche avertissement et text control
function findEl(el, needle)
{
	return el.closest('.formData').querySelector(needle);
}

// fonction pour les message erreurs
function hideError(el)
{
	const avert = findEl(el, '.avertissement');
	const avertform = findEl(el, '.text-control');

	avert.style.display = 'none';
	
	if (avertform)
	{
		avertform.style.border = '3px solid #13FA39';
		avertform.style.backgroundColor = '#D6F4DC';
	}
}

// function de validation du contenu des champs
function isAgreementValid()
{
	return agreement.checked;	
}

function isFirstNameValid() 
{
	return isNameValid(firstName.value); 
}

function isLastNameValid() 
{
	return isNameValid(lastName.value); 
}

function isNameValid(value) 
{
	const regexFirst = /^[a-zA-Z ]{2,30}$/;

	return regexFirst.test(value.trim(' '));
}

function isEmailValid()
{
	const regexmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return regexmail.test(email.value);
}

function isBirthdateValid()
{
	const regexbirthdate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
	const currentYear = new Date().getFullYear();
	if (!regexbirthdate.test(birthdate.value))
	{
		return false;
	}

	if (birthdate.value.split('-')[0] > (currentYear - 20))
	{
		return false
	}

	if (birthdate.value.split('-')[0] < (currentYear - 150))
	{
		return false
	}

	return true;
}

function isQuantityValid()
{
	const regexquantity = /^[0-99][0-9]?$/;
	return regexquantity.test(quantity.value);
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

// fonction demarrage modal
function launchModal() {
	modalbg.style.display = "block";
}

//fonction message erreur
function showError(el)
{
	const avert = findEl(el, '.avertissement');
	const avertform = findEl(el, '.text-control');
	
	avert.style.display = 'block'
	if (avertform) {
		avertform.style.border = '3px solid #FF3012';
		avertform.style.backgroundColor = '#ff0202bd'		
	}
}
// fonction affichage modale validation
function showConfirmation()
{
	document.querySelector('.modal-body').innerHTML = '<h3>Merci pour votre inscription</h3>'
	document.querySelector('.modal-body h3').style.cssText = `padding: 300px 0px; text-align: center`
}