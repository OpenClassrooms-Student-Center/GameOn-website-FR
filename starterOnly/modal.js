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
const myForme = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



// when the button submit is pressed verifie those inputs
function validate(e) // this is the name of the function that whe are calling
{
    // store the elements we want to change iside of a Variable
    let prenom = document.getElementById('first');
    let error = document.getElementById('error');
    let nom = document.getElementById('last');
    let error2 = document.getElementById('error2');
    let email = document.getElementById('email');
    let error3 = document.getElementById('error3');
    let birthdate = document.getElementById('birthdate');
    let error4 = document.getElementById('error4');
    let quantity = document.getElementById('quantity');
    let error5 = document.getElementById('error5');
    let location1 = document.getElementById('location1');
    let error6 = document.getElementById('error6');

    // CONDITIONS
    // if there is nothing in the input fild show the error message and prevent the page form refreshing
    if ( prenom.value == "" || prenom.value == null)
      {
        error.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prenom.";
        error.style.color = "red";
        error.style.fontSize = "1rem";
        return false;
      }
    
    if ( nom.value == "" || nom.value == null) 
      {
        error2.innerHTML = " Veuillez entrer 2 caractères ou plus pour le champ du nom. ";
        error2.style.color = "red";
        error2.style.fontSize = "1rem";
        return false;
      }
    
     if ( email.value == "" || email.value == null)
      {
        error3.innerHTML = "Veuillez entre votre adresse mail!";
        error3.style.color = "red";
        error3.style.fontSize = "1rem";
        return false;
      } 
      
    if (birthdate.value == "" || birthdate.value == null)
      {
        error4.innerHTML = "Vous devez entrer votre date de naissance.";
        error4.style.color = "red";
        error4.style.fontSize = "1rem";
        return false; 
      }

    if (quantity.value == "" || quantity.value == null)
      {
        error5.innerHTML = "Rengseigner les info neccaiser";
        error5.style.color = "red";
        error5.style.fontSize = "1rem";
        return false; 
      }

      // Radio Buttons Validation

    let valid = false;


    if (document.getElementById('location1').checked)
      {
        valid = true;
      }
    else if (document.getElementById('location2').checked)
      {
        valid = true;
      }
    else if (document.getElementById('location3').checked)
      {
        valid = true;
      }
    else if (document.getElementById('location4').checked)
      {
        valid = true;
      }
    else if (document.getElementById('location5').checked)
      {
        valid = true;
      }
    else if (document.getElementById('location6').checked)
      {
        valid = true;
      }

      if (valid)
        {
          return true;
        }

      else (document.getElementById('error6'))
        {
          error6.innerHTML = "Vous devez choisir une option."
          error6.style.color = "red";
          error6.style.fontSize = "1rem";
          return false;
        };
   
};



