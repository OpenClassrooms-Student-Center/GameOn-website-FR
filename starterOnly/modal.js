function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//////////////////// LAUNCH THE MODEL //////////////////////
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


// WHEN THE BUTTON SUBMIT IS PRESSED VERIFY THE INPUTS
function validate()
{
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
    else{error.innerHTML = " ";}
    
    if ( nom.value == "" || nom.value == null)
      {
        error2.innerHTML = " Veuillez entrer 2 caractères ou plus pour le champ du nom. ";
        error2.style.color = "red";
        error2.style.fontSize = "1rem";
        return false;
      }
    else{error2.innerHTML = " ";}

    if ( email.value == "" || email.value == null)
      {
        error3.innerHTML = "Veuillez entre votre adresse mail!";
        error3.style.color = "red";
        error3.style.fontSize = "1rem";
        return false;
      } 
    else{error3.innerHTML = "";}  

    if (birthdate.value == "" || birthdate.value == null) 
      {
        error4.innerHTML = "Vous devez entrer votre date de naissance.";
        error4.style.color = "red";
        error4.style.fontSize = "1rem";
        return false; 
      }
    else{error4.innerHTML = "";} 

    if (quantity.value == "" || quantity.value == null)
      {
        error5.innerHTML = "Vous devez remplir les informations necceaire";
        error5.style.color = "red";
        error5.style.fontSize = "1rem";
        return false; 
      }
    else{error5.innerHTML = "";}  


    ///////////////////// City selector////////////////////////////
    let citySelector = document.getElementsByName("location");
    let errorCity = document.getElementById('errorCity');
    let check1 = false;

      for(i=0; i<citySelector.length; i++)// FOR LOOP if the non of radio buttons is checked run te loop
        {
          if (citySelector[i].checked)
             {
               check1 = true;
             }
        }
      if (check1 == false)
         {
           errorCity.innerHTML = "Vous devez choisire la ville.";
           errorCity.style.color = "red";
           errorCity.style.fontSize = "1rem";
           return false;
         }
      else
        {
          errorCity.innerHTML = " ";
        }

    ///////////////////////// TERMS AND CONDITIONS ////////////////////////////////
    let termsCheckbox = document.getElementById('termsChecked');
    let errorCheckbox = document.getElementById('errorCheckbox');

      if ( !termsCheckbox.checked)// if checkbox it's not checked 
       {
         errorCheckbox.innerHTML = "Vous devez accepter les conditions d'utilisation.";
         errorCheckbox.style.color = "red";
         errorCheckbox.style.fontSize = "1rem";
         return false;
       }
       else{errorCheckbox.innerHTML = "";} 
}



//////////////////////////////// OPEN SUCCES DIV ////////////////////////////
    let succesMessage = document.getElementById('confirmation-message');
    let test1 = false;
    let test2 = false;

     if (test1 == test2)
        {
           succesMessage.style.display = "block";
            modalbg.style.display = "none";
        } 
     else
         {
            succesMessage.style.display = "none";
         } 



///////////////////////  CLOSE THE SUCCES MESSAGE BOX /////////////////////
    
    //close succes message BUTTON
    document.getElementById('close_button_succes').addEventListener('click', () => {
    if (succesMessage.style.display === "block")
        {
          succesMessage.style.display = 'none';
        }
    else
        {
          succesMessage.style.display = 'none';
        }
    })

    //close succes message X icon
    document.getElementById('X-close').addEventListener('click', () => {
     if (succesMessage.style.display === "block")
         {
           succesMessage.style.display = 'none';
         }
     else
        {
           succesMessage.style.display = 'none';
        }
     })

   




















