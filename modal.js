function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements////////////

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

//concerns closing modal
const cross = document.getElementById("cross");
const cross2=document.getElementById("cross2");

//concerns switching modals
const hi =document.querySelector(".hi");
const bye =document.querySelector(".bye");
const cparti = document.getElementById("cparti");

//form data

const form = document.getElementById("reserve");  //ensemble 
const first = document.getElementById("first");
const last = document.getElementById("last");
const mail = document.getElementById("email");
const bdate = document.getElementById("birthdate");
const tournaments = document.getElementById("quantity");
const locations = document.querySelectorAll("location");





////////////OTHER VARIQBLES//////////////////////


document.getElementById("terms").required=true; // require terme and conditions to be accepted
document.getElementById("quantity").min = "1"; // 
document.getElementById("quantity").max = "99"; 
let locationchecked=false;

const validated =new Set();
const regexmel=new RegExp("[a-z0-9._-]+@[a-z0-9]+\.[a-z0-9]+");
let mailvalue = mail.value;



//EVENT LISTENERS/////////

//pas de reload
form.addEventListener("submit", (event) => {
  event.preventDefault();   
  console.log("No reload");
});

//

first.addEventListener("change",validfirst);
last.addEventListener("change",validlast);
mail.addEventListener("change",validmel);
quantity.addEventListener("change",validquantity);




// launch modal event  
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

cross.addEventListener("click",closeModal);
//cparti.addEventListener("click",switchmodal);
cross2.addEventListener("click",closeModal);

/////////////////////////////FUNCTIONS///////////////////////



// launch modal form 
function launchModal() {
  modalbg.style.display = "block";
  hi.style.display = "block";
  console.log("test");
}

// close modal 

function closeModal() {
  modalbg.style.display = "none";
  bye.style.display="none";
  console.log("exit");

}

//switch modal hi to bye

function switchmodal(){
  hi.style.display="none";
  bye.style.display="flex";
  ;
  console.log("Merci pour votre inscription!");

}


//Form validation functions////////////

function validfirst() {
  if (first.value.length<2){
    document.getElementById("prenom").style.display="inline";
    console.log("invalid first name!");
  }
  else{
    console.log("valid first name");
    validated.add("first");
    console.log(validated)
  }
};

function validlast(){
  if (last.value.length<2){
    document.getElementById("nom").style.display="inline";
    console.log("invalid last name!")
  }
  else{
    
    console.log("valid last name");
    validated.add("last");
    console.log(validated);
  }
};

function validmel(){
if(!regexmel.test(mailvalue)){
  document.getElementById("mel").style.display="inline";
  console.log("Invalid email");
}
else{
  console.log("Valid email");
  validated.add("mail");
}
};

function validbdate(){};

function validquantity(){};


let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    try {
        event.preventDefault()

        validfirst(first)

        validlast(last)

        validmel(mail)

        validbdate(bdate)
        
        validquantity(locations)
        


        // traitement du formulaire
        // ...
    } catch (error) {
        console.log("Une erreur est survenue : " + error.message)
    }
})









//chekc for enter pressed

// first.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     console.log('Enter key pressed!');
//     enterpressed=true;

//   }
//   if (enterpressed){
//     validfirst();
//   }
// });











// switch modal form to bye

// function closeModal(e) {
//   console.log(e)
//   e.target.parentElement.parentElement.style.display = "none";
//   console.log("exit modal")
// }

