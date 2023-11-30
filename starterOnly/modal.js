function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closes = document.getElementById("cross");


// launch modal event  FUNCTION
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

cross.addEventListener("click",closeModal);



// launch modal form 
function launchModal() {
  modalbg.style.display = "block";
  console.log("test")
}

// launch switch modal to bye

function closeModal() {
  modalbg.style.display = "none";
  console.log("exit");

}

//Form validation functions


function validfirst() {
  if (first.value.length<2){
    document.getElementById("prenom").style.display="inline";
    console.log("invalid first name!")
  }
  else{
    document.getElementById("prenom").style.display="none";
    console.log("valid first name");
  }
}

var enterpressed=false;

first.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    console.log('Enter key pressed!');
    enterpressed=true;

  }
  if (enterpressed){
    validfirst();
  }
});





// switch modal form to bye

// function closeModal(e) {
//   console.log(e)
//   e.target.parentElement.parentElement.style.display = "none";
//   console.log("exit modal")
// }

