///////TOGGLE MENU for width'screen < 1000px


//DOM element
let navBarIcon = document.getElementById("hamburgerIcon");

//Function
//----Change the nav bar in fonction of the screen size 

export function editNav() {
    const x = document.getElementById("myTopnav");
    if (x.className.includes("topnav")) {
        x.className += " responsive"; //pb : a chaque nouveau click on rajoute une nouvelle class responsive
    } else {
        x.className = "topnav";
    }
}

//Event on click on navBarIcon
navBarIcon .onclick = editNav;
