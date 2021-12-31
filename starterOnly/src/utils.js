export function editNav() {
  const nav = document.getElementById("myTopnav"); // no vars since es6
  nav.classList.toggle("responsive"); // Simplifying burger menu logic using classlist toggle.
}

// Auto captitalize first letter
export const capitalize = (element) => {
  const textContent = element.innerHTML;
  element.innerHTML = `${textContent.charAt(0).toUpperCase()}${textContent
    .slice(1)
    .toLowerCase()}`;
};
