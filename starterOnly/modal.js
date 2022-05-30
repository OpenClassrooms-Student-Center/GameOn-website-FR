// Bouton burger du menu
function navMenu()
{
    var x = document.getElementById("myTopnav");

    if(x.className === "topnav")
    {
        x.className += " responsive";
    }
    else
    {
        x.className = "topnav";
    }
}




// DOM Elements
const modalbg = document.querySelector(".bground");

const modalBtn = document.querySelectorAll(".btn-signup");

const formData = document.querySelectorAll(".formData");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal()
{
    modalbg.style.display = "block";
}

// close le modal avec X
function closeModal()
{
    modalbg.style.display = "none";
}








// écouter le formulaire et validation des champs
// function validateForm()
// {

//     alert('test');
//     let errNom = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
//     let errDateNaiss = "Vous devez entrer votre date de naissance.";
//     let errOption = "Vous devez choisir une option.";
//     let errConditions = "Vous devez vérifier que vous acceptez les termes et conditions.";

//     var first = document.getElementById("first").value;
//     var p = document.getElementById("password").value;

//     if(first== "")
//     {
//         alert(errNom);
//         return false;
//     }
//     if(p == "")
//     {
//         alert("Please enter you Password");
//         return false;
//     }

//     alert("All datas are valid!, send it to the server!")

//     return true;
// }

function validateForm()
{
    // alert('test');
    let errNom = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    let errDateNaiss = "Vous devez entrer votre date de naissance.";
    let errOption = "Vous devez choisir une option.";
    let errConditions = "Vous devez vérifier que vous acceptez les termes et conditions.";

    let first = document.forms["myForm"]["first"].value;

    alert(first);
    // if (x == "") {
    //   alert("Name must be filled out");
    //   return false;
    // }
  }