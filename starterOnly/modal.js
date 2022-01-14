// DOM Elements
const toggleMenu = document.querySelectorAll(".toggleMenu")

const modalbg = document.getElementById("bground");
const modalThanks = document.getElementById("thanks");
const formData = document.querySelectorAll(".formData");
const modalBtn = document.querySelector(".btn-signup");
const closeModalBtn = document.querySelector("#closeModal");
const thanksCloseBtn = document.getElementById("closeAll");


/*TOGGLE MENU*/
toggleMenu.forEach((el) => el.addEventListener("click", () => {
  document.body.classList.toggle('menu-open');
}
));

/*EVENT MODAL*/
// launch modal event
modalBtn.addEventListener("click", launchModal);
//close modal event
closeModalBtn.addEventListener("click", closeModal);
// thanksCloseBtn.addEventListener("click", closeModal);


/*FONCTION MODAL*/
// launch modal form
function launchModal(){
  modalbg.style.display = "block";
  window.scrollTo(0, 0);
  modalbg.scrollTo(0, 0);
  document.body.classList.add('overflow');
}

//open modal thanks
function showModalThanks(){
  form.style.display= 'none';
  form.reset()
  modalThanks.style.display = 'block';
  document.querySelector('#closeAll').addEventListener("click", closeModal);
  document.querySelector('#closeModal').addEventListener("click", closeModal);
}

//close modal form
function closeModal(){
  form.style.display='block'
  modalbg.style.display = "none";
  modalThanks.style.display="none";
  closeModalBtn.removeEventListener("click", closeModal);
  document.body.classList.remove('overflow');
}


//variable formulaire
let form = document.forms["reserve"];
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
    error.style.color = "red";
    error.style.fontSize = '0.75rem';
    formErrors++;
  }else{
    error.innerHTML = "";
  }

  //label nom
  if(last.value == "" || textFormat.test(last.value) == false){
    error1.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    error1.style.color = "red";
    error.style.fontSize = '0.75rem';
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
    error2.style.color = "red";
    error.style.fontSize = '0.75rem';
    formErrors++;
  }else{
    error2.innerHTML = "";
  }

  //tournoi quantity
  if(quantity.value == ""){
    error3.textContent = 'Vous devez saisir un nombre.';
    error3.style.color = "red";
    error3.style.fontSize = '0.75rem';
    formErrors++;
  }else{
    error3.innerHTML = "";
  }

  //location

  
console.log(document.querySelector('input[type=radio]:checked'))

  
   if(document.querySelector('input[type=radio]:checked') === null) {
    errorMessage.textContent = "Vous devez choisir une option.";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "0.75rem";
    formErrors++;
  }else{
    errorMessage.innerHTML = '';
 }


  //Conditions and subscribe
  
  if(!terms.checked){
    errorTerms.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    errorTerms.style.color = "red";
    errorTerms.style.fontSize = "0.75rem";
    formErrors++;
  }else{
    errorTerms.innerHTML = "";
  }

  if (formErrors > 0){
    finalError.textContent = "vous devez renseigner tous les champs.";
    finalError.style.color = "red";
    finalError.style.fontSize = "0.75rem";
  }else{
    form.reset();
    showModalThanks();
  }
// window.location.reload
});
        
        

