// Nabar qui se déploie/replie
function editNav() {
    let navbar = document.getElementById("myTopnav");
  
    if (navbar.className === "topnav") {
      navbar.className += " responsive";
  
    } else {
      navbar.className = "topnav";
    }
  }
  

// Je récupère les éléments du DOM et les stocke dans des variables
const navbar=document.querySelector("main-navbar");
const links=document.querySelectorAll("a"); // Je crée un tableau qui contient tous mes liens 
console.log(navbar); // Test

// grâce à forEach et je parcours les éléments
links.forEach(a => {
    // J'ajoute un écouteur d'évènement sur chaque lien qui déclenche la fonction au click
    a.addEventListener('click', function(){
        // Je parcours mes liens, je supprime la classe active pour chacun d'entre eux
        links.forEach(a=>a.classList.remove("active"));
        // J'ajoute la classe active au click sur mon lien
        this.classList.add("active");
    });

});

