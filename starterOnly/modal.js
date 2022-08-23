// DOM Elements
const modalbg   	= document.querySelector(".bground");
const modalBtn  	= document.querySelectorAll(".modal-btn");
const formData  	= document.querySelectorAll(".formData");
let firstName      	= document.querySelector('#first');
let lastName       	= document.querySelector('#last');
let email          	= document.querySelector('#email');
let birthdate      	= document.querySelector('#birthdate');
let quantity       	= document.querySelector('#quantity');
let avertissements 	= document.querySelectorAll('.avertissement');
let submitButton   	= document.querySelector('.btn-submit');
let cities         	= document.querySelectorAll(`input[name="location"]`);
const closeMod 		= document.querySelector(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//evenement qui ferme le modal
closeMod.addEventListener("click", closeModal)

// boucle pour faire disparaitre les messages d'avertissement

avertissements.forEach(function (avertissement){ 
	avertissement.style.display = "none";
}) 

firstName.addEventListener('change', function() 
{	
	const avert = findEl(firstName, '.avertissement');
	const avertform = findEl(firstName, '.text-control');
	hidenError(avert, avertform);
	
	if (!isFirstNameValid())
	{
		showError(avert, avertform);
	}
})

lastName.addEventListener('change', function () 
{
	const avert = findEl(lastName, '.avertissement');
	const avertform = findEl(lastName, '.text-control');
	hidenError(avert, avertform);
	
	if (!isLastNameValid())
	{
		showError(avert, avertform);
	}
})


email.addEventListener('change', function ()
{
	const avert = findEl(email, '.avertissement');
	const avertform = findEl(email, '.text-control');
	hidenError(avert, avertform);
	
	if (!isEmailValid())
	{
		showError(avert, avertform);
	}
})

birthdate.addEventListener('change', function ()
{
	console.log('&&', birthdate.value)
	const avert = findEl(birthdate, '.avertissement');
	const avertform = findEl(birthdate, '.text-control');
	hidenError(avert, avertform);
		
	if (!isBirthdateValid())
	{
		showError(avert, avertform);
	}
})

quantity.addEventListener('change', function()
{
	const avert  = quantity.closest('.formData').querySelector('.avertissement');
	const avertform  =  quantity.closest('.formData').querySelector('.text-control');
	hidenError(avert, avertform);
		
	if (!isQuantityValid())
	{
		showError(avert, avertform);
	}
})


submitButton.addEventListener('click', function (e)
{
	e.preventDefault();
	let formValid = (isFirstNameValid() && isLastNameValid() && isEmailValid() && isBirthdateValid() && isQuantityValid() && isCityValid())
	console.log('FN', isFirstNameValid())
	console.log('LN', isLastNameValid())
	console.log('EM', isEmailValid())
	console.log('BI', isBirthdateValid())
	console.log('QTY', isQuantityValid())
	console.log('CIT', isCityValid())
		
	console.log(formValid)
		
	// if (formValid)
	// {
	// 	return alert("test valide");
	// }else 
	// {
	// 	return alert("le test n'est pas bon");
	// }
})


function closeModal(){
	modalbg.style.display = "none";
}

function editNav() {
	var x = document.querySelector("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

function findEl(el, needle)
{
	return el.closest('.formData').querySelector(needle);
	//return el.closest('.formData').querySelector('.avertissement');
}

function hidenError(avert, avertform)
{
	avert.style.display ='none';
		avertform.style.border = '3px solid #13FA39';
		avertform.style.backgroundColor = '#D6F4DC';
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

	return regexFirst.test(value);
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

function launchModal() {
	modalbg.style.display = "block";
}

function showError(avert, avertform)
{
	  avert.style.display = 'block'
		avert.style.color = 'red'
		avertform.style.border = '3px solid #FF3012';
		avertform.style.backgroundColor = '#ff0202bd'		
}