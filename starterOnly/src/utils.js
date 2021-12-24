export function editNav() {
    const x = document.getElementById("myTopnav"); // no vars since es6
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  // auto captitalize
export const capitalize = (element) => {
    const textContent = element.innerHTML;
    element.innerHTML = `${textContent
      .charAt(0)
      .toUpperCase()}${textContent.slice(1).toLowerCase()}`;
  };