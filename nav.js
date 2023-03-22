function editNav() {
    var NavBar = document.getElementById("myTopnav");
    var iconNavBar = document.getElementById("IconNavBar::active");
    if (NavBar.className === "topnav") {
      NavBar.className += " responsive";
      iconNavBar.style.color = "white";
      
    } else {
      NavBar.className = "topnav";
      
    }
  }

  