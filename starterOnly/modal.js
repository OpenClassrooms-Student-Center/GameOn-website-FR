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