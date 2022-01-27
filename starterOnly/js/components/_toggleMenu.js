///////TOGGLE MENU for width'screen < 1000px


//DOM element
let navBarIcon = document.getElementById("hamburgerIcon");
const x = document.getElementById("myTopnav");


//Function
//----Change the nav bar in fonction of the screen size 
export function editNav() {
      
    if (x.className.includes("topnav")) {
        x.classList.toggle("responsive");
    } else {
        x.className = "topnav";
    }
}

//Event on click on navBarIcon
navBarIcon .onclick = editNav;
