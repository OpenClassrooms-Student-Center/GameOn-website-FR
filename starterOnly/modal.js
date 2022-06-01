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

// const formData = document.querySelectorAll(".formData");



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





// je vérifie le forumlaire quand il est envoyé
function validateForm(event)
{
    event.preventDefault()

    // regexs
    let regName = /^[a-zA-Z]{2}/;
    let regDate = /[0-9]{2}[0-9]{2}[0-9]{4}/;
    let regQuantity = /^[0-9]$|^[1-9][0-9]$|^(100)$/;

    // j'initialise le texte d'erreur
    let message ="";

    // je récupere le nom
    let firstName = document.getElementById("firstname").value;

    // Vérif Prenom
    if (!regName.test(firstName))
    {
        message = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
    else
    {
        message = "";
        var firstnameValid = true;
    }
    document.getElementById("err-firstname").innerHTML = message;

    // je récupere le prénom
    let lastName = document.getElementById("lastname").value;

    // Vérif Nom
    if (!regName.test(lastName))
    {
        message = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
    else
    {
        message = "";
        var lastnameValid = true;
    }
    document.getElementById("err-lastname").innerHTML = message;
   
    // Je récupere le mail
    let email = document.getElementById("email").value;

    // Vérif Email
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(mailformat))
    {
        message = "Mail invalide";
    }
    else
    {
        message = "";
        var emailValid = true;
    }
    document.getElementById("err-email").innerHTML = message;


    // Je récupere le nombre de tournois
    let quantity = document.getElementById("quantity").value;

    // Vérif nombre de tournois
    if(!regQuantity.test(quantity))
    {
        message = "Vous devez renseigner un nombre entre 0 et 99";
    }
    else
    {
        message = "";
        var quantityValid = true;
    }
    document.getElementById("err-quantity").innerHTML = message;


    // Ville de tournois
    let a = document.getElementById("location-1");
    let b = document.getElementById("location-2");
    let c = document.getElementById("location-3");
    let d = document.getElementById("location-4");
    let g = document.getElementById("location-5");
    let f = document.getElementById("location-6");
  
    // Ville checked ou pas
    if(a.checked == true || b.checked == true || c.checked == true || d.checked == true || g.checked == true || f.checked == true)
    {
        message = "";
        var cityValid = true;
    }
    else
    {
        message = "Veuillez selectionner une ville";
    }
    document.getElementById("err-location").innerHTML = message;


    // Je récupere la checkbox CGU
    let cgu = document.getElementById("cgu").value;
    // Vérif CGU
    if(!this.cgu.checked)
    {
        message = "Vous devez vérifier que vous acceptez les termes et conditions.";
    }
    else
    {
        message = "";
        var cguValid = true;
    }
    document.getElementById("err-cgu").innerHTML = message;

    // tout est ok on ferme le formulaire et on affiche le message de confirmation
    if (firstnameValid == true && lastnameValid == true && emailValid == true && quantityValid == true && cityValid == true && cguValid == true )
    {
        alert("le form est validé");
        document.getElementById("form-valid").style.display = "none";
        document.getElementById("confirmation").style.display = "block";
    }
}

