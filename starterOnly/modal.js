// DOM Elements
let toggleMenu = document.querySelector('.toggleMenu')

let modal = document.querySelector('#modal')
let openModalBtn = document.querySelector('#openModal')
let closeModalBtn = document.querySelectorAll('.closeModal')

let form = document.forms['reserve']
let modalThanks = document.querySelector('#thanks')

/*Fonction Open Modal*/
function openModal(){
  document.body.classList.add('modal-open')
  document.body.classList.add('overflow')
  window.scrollTo(0, 0);
  modal.scrollTo(0, 0);

  form.reset()
  form.style.display = ''
  modalThanks.style.display = 'none'
}

/*Fonction toggle Modal*/
function showModalThanks(){
  form.style.display = 'none'
  modalThanks.style.display = ''
}

/*Fonction close Modal*/
function closeModal(){
  document.body.classList.remove('modal-open')
  document.body.classList.remove('overflow')
}


/*listener Modal*/

/*Toggle Menu*/
toggleMenu.addEventListener('click', e => {
  document.body.classList.toggle('menu-open')
})

/*Open Modal*/
openModalBtn.addEventListener("click", openModal)

/*close Modal*/
closeModalBtn.forEach(el => {
  el.addEventListener('click', closeModal)
})



/*Validation form and listener*/

form.addEventListener("submit", function(e){
  e.preventDefault();
  
  // Expression for fields
  const verifMail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
  const textFormat = /^[a-z\é\è\-\^\']{2,}$/i
  
  //Form flag validation
  let formFlag = true
  
  // Firstname - min 2 char & not empty
  if(!form.elements['first'].value.trim().match(textFormat)){
  formFlag = false
  firstError.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom'
  }else{
    firstError.innerHTML = ''
  }

  // Lastname - min 2 char & not empty
  if(!form.elements['last'].value.trim().match(textFormat)){
    formFlag = false
    lastError.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
  }else{
    lastError.innerHTML = ''
  }

  // email validity
  if(!form.elements['email'].value.trim().match(verifMail)){
  formFlag = false
  mailError.textContent = 'L\'adresse email n\'est pas Valide.'
  }else{
    mailError.innerHTML = ''
  }

  //label birthday
  if(birthdate.value == ""){
    formFlag = false
    birthError.textContent = 'Vous devez entrer votre date de naissance.'
  }else{
    birthError.innerHTML = ""
  }


  //tournoi quantity
  let quantity = form.elements['quantity'].value
  if(quantity == ''|| isNaN(quantity) || Number.isInteger(quantity)){
  formFlag = false
  quantityError.textContent = 'Vous devez saisir un nombre.'
  }else{
  quantityError.innerHTML = ""
  }


  //location
  if(document.querySelector('input[type=radio]:checked') === null) {
  formFlag = false
  locationError.textContent = "Vous devez choisir une option."
  }else{
    locationError.innerHTML = ''
  }


  //Conditions and subscribe
  if(!form.elements['terms'].checked){
  formFlag = false;
  errorTerms.textContent = "Vous devez vérifier que vous acceptez les termes et conditions."
  }else{
  errorTerms.innerHTML = ""
  }

  //Check validation errors
  if(!formFlag){
    return false
  }

  showModalThanks ()
})
        
        

