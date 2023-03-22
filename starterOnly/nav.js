//Récupération de l'eventlistener pour editer le hamburger responsive
const iconNav = document.getElementById("IconNavBar");
iconNav.addEventListener("click", editNav);


function editNav() {
    var NavBar = document.getElementById("myTopnav");
    let iconNavBar = document.getElementById("IconNavBar::active");
    if (NavBar.className === "topnav") {
      NavBar.className += " responsive";
      iconNavBar.style.color = "white";
      
    } else {
      NavBar.className = "topnav";
      
    }
  }

  