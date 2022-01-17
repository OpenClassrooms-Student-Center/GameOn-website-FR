// DOM Elements
let toggleMenu = document.querySelector('.toggleMenu')

let modal = document.querySelector('#modal')
let openModalBtn = document.querySelector('.openModal')
let closeModalBtn = document.querySelectorAll('.closeModal')

let form = document.forms['reserve']
let thanks = document.querySelector('#thanks')

const modalThanks = document.getElementById("thanks");
const formData = document.querySelectorAll(".formData");
const thanksCloseBtn = document.getElementById("closeAll");

/*Fonction Open Modal*/
function openModal(){
  document.body.classList.add('modal-open')
  document.body.classList.add('overflow');
  window.scrollTo(0, 0);
  modal.scrollTo(0, 0);
  form.reset()
  modal.style.display = 'block'
  modalThanks.style.display = 'none'
}

/*Fonction toggle Modal*/
function showModalThanks(){
  form.style.display= 'none'
  modalThanks.style.display = 'block'
}

/*Fonction close Modal*/
function closeModal(){
  document.body.classList.remove('modal-open')
  document.body.classList.remove('overflow');
  
}


/*listener Modal*/

/*Toggle Menu*/
toggleMenu.addEventListener('click', e => {
  document.body.classList.toggle('menu-open')
})

/*Open Modal*/
openModalBtn.addEventListener("click", openModal)

/*close Modal*/
closeModalBtn.forEach(element => {
  element.addEventListener('click', closeModal)
})





//format text et mail
let verifMail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
let textFormat = /^[a-zA-Z\é\è\-\^\']{2,30}$/;

console.log("azeaze")

form.addEventListener("submit", function(e){
  e.preventDefault();
  let formErrors = 0;

  //constantes
  const first = form.querySelector('input[name="first"]');
  const last = form.querySelector('input[name="last"]');
  const email = form.querySelector('input[name="email"]');
  const birthdate = form.querySelector('input[name="birthdate"]');
  const quantity = form.querySelector('input[name="quantity"]');
  const radioLocation = document.querySelectorAll('input[type="radio"]');
  const terms = document.getElementById('terms');

  const error = document.getElementById("error");
  const error1 = document.getElementById("error1");
  const error2 = document.getElementById("error2");
  const error3 = document.getElementById("error3");
  const errorMessage = document.getElementById("errorMessage");
  const finalError = document.getElementById("finalError");


  //label prenom
  if(first.value == "" || textFormat.test(first.value) == false){
    error.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
    formErrors++;
  }else{
    error.innerHTML = "";
  }

  //label nom
  if(last.value == "" || textFormat.test(last.value) == false){
    error1.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    formErrors++;
  }else{
    error1.innerHTML = "";
  }

  //label mail
  if(!email.value.trim().match(verifMail)){
    alert("l'adresse email n'est pas valide");
    e.removeEventListener();
  }

  //label birthday
  if(birthdate.value == ""){
    error2.textContent = 'Vous devez entrer votre date de naissance.';
    formErrors++;
  }else{
    error2.innerHTML = "";
  }

  //tournoi quantity
  if(quantity.value == ""){
    error3.textContent = 'Vous devez saisir un nombre.';
    formErrors++;
  }else{
    error3.innerHTML = "";
  }

  //location

  
console.log(document.querySelector('input[type=radio]:checked'))

  
   if(document.querySelector('input[type=radio]:checked') === null) {
    errorMessage.textContent = "Vous devez choisir une option.";
    formErrors++;
  }else{
    errorMessage.innerHTML = '';
 }


  //Conditions and subscribe
  
  if(!terms.checked){
    errorTerms.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    formErrors++;
  }else{
    errorTerms.innerHTML = "";
  }

  if (formErrors > 0){
    finalError.textContent = "vous devez renseigner tous les champs.";
  }else{
    form.reset();
    showModalThanks();
  }
// window.location.reload
});
        
        

