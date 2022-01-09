

// DOM Elements
const modalbg = document.getElementById("bground");
const closeModalBtn = document.querySelector(".closeModal");
const modalBtn = document.querySelector(".btn-signup");
const formData = document.querySelectorAll(".formData");
const toggleMenu = document.querySelectorAll(".toggleMenu");
const modalThanks = document.getElementById("thanks");


/*TOGGLE MENU*/
toggleMenu.forEach((el) => el.addEventListener("click", (e) => {
  document.body.classList.toggle('menu-open');
}
));

/*EVENT MODAL*/
// launch modal event
modalBtn.addEventListener("click", launchModal);
//close modal event
closeModalBtn.addEventListener("click", closeModal);
//Thank modal





/*FONCTION MODAL*/

// launch modal form
function launchModal(){
  modalbg.style.display = "block";
  window.scrollTo(0, 0);
  modalbg.scrollTo(0, 0);
  document.body.classList.add('overflow');
}

//close modal form
function closeModal(){
  modalbg.style.display = "none";
  closeModalBtn.removeEventListener("click", closeModal);
  document.body.classList.remove('overflow');
}

//modal thanks
function showModalThanks(){
  form.style.display= 'none';
  modalThanks.style.display = 'block';
  document.querySelector('#closeAll').addEventListener("click", closeModal);
}


function showModalForm(){
modalThanks.style.display = 'none';
form.style.display = 'block';
}

//variable formulaire
let form = document.forms["reserve"];

//format text et mail
let verifMail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
let textFormat = /^[a-zA-Z\é\è\-\^\']{2,30}$/;

form.addEventListener("submit", function(e){
  e.preventDefault();

  //constantes
  const first = form.querySelector('input[name="first"]');
  const last = form.querySelector('input[name="last"]');
  const email = form.querySelector('input[name="email"]');
  const birthdate = form.querySelector('input[name="birthdate"]');
  const quantity = form.querySelector('input[name="quantity"]');

  const error = document.getElementById("error");
  const error1 = document.getElementById("error1");
  const error2 = document.getElementById("error2");
  const error3 = document.getElementById("error3");

  let formErrors = 0;

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
    error.style.fontSize = '0.75rem';;
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
  
  if(
    !document.getElementById("location1").checked ||
    !document.getElementById("location2").checked ||
    !document.getElementById("location3").checked ||
    !document.getElementById("location4").checked ||
    !document.getElementById("location5").checked ||
    !document.getElementById("location6").checked)
    {
    formErrors++;
    errorMessage.textContent = "Vous devez choisir une option.";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "0.75rem";
  }else{
    errorMessage.innerHTML = '';
  }

  if(!terms.checked){
    errorTerms.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    errorTerms.style.color = "red";
    errorTerms.style.fontSize = "0.75rem";
    formErrors++;
  }else{
    errorTerms.innerHTML = "";
  }

  if (formErrors > 0){
  }else{
    form.reset();
    showModalThanks()
  }

});
        
        

