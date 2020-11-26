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
const closeModal = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeModal.forEach((btn) => btn.addEventListener("click", hideModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function hideModal()
{
  modalbg.style.display = "none";
}



// When the button submit is pressed verifie those inputs
function validate(e) // this is the name of the function that whe are calling
{
    // Store the elements we want to change iside of a Variable
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

    //////////////// CONDITIONS  /////////////////
    if ( prenom.value == "" || prenom.value == null)// if there is an empty string OR no value at all in the input...
      {
        // ...add the html text to the ERROR class and add style 
        error.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prenom.";
        error.style.color = "red";
        error.style.fontSize = "1rem";
        return false;// dont send the form
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


      ////////////////////// City selector//////////////////////
      
      //DOM Elements
      let citySelector = document.getElementsByName("location");
      let errorCity = document.getElementById('errorCity');
      let check1 = 0;

      for(i=0; i<citySelector.length; i++)// FOR LOOP if the non of radio button is checked run te loop
        {
          if (citySelector[i].checked)
          {
            check1++;
            break;
          }
        }

      if (check1){}
      else{
        errorCity.innerHTML = "Vous devez entrer votre date de naissance.";
        errorCity.style.color = "red";
        errorCity.style.fontSize = "1rem";
        return false;
      }


      ////////////////////// CHECKBOX /////////////////////////
      ////////////////////////////////////////////////////////

      //DOM Elements
       let termsCheckbox = document.getElementById('termsChecked');
       let errorCheckbox = document.getElementById('errorCheckbox');

       if ( !termsCheckbox.checked)// if checkbox it's not checked 
        {
          // ...add the html text to the ERROR class and add style 
          errorCheckbox.innerHTML = "Vous devez accepter ça";
          errorCheckbox.style.color = "red";
          errorCheckbox.style.fontSize = "1rem";
          return false;// dont send the form
        }
       else
       {    
          return true;//  send the form
       }
          
}


