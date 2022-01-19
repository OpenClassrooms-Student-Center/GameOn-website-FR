//----NAV BAR
/*Change the nav bar in fonction of the screen size */
/*(icone "hamburger"( Ipad and Iphone) or not (computer))*/
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") { /*si la class topnav(=header) est égale à celle de la var*/
      x.className += " mobile";/*alors ajouter la class mobile*/
    } 
    else {
      x.className = "topnav";
    }
}