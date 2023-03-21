function editNav() {
    var NavBar = document.getElementById("myTopnav");
    var iconNavBar = document.getElementById("iconNavBar");
    if (NavBar.className === "topnav") {
      NavBar.className += " responsive";
      iconNavBar.style.display = "block";
    } else {
      NavBar.className = "topnav";
      iconNavBar.style.display = "none";
    }
  }

  