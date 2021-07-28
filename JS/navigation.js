const hamburger = document.querySelector('.hamburger');
const navbarMenu = document.querySelector('.navbar__menu');
// Une fonction en Javascript est aussi un objet, on peut donc « mentionner » son nom comme une variable
// on donne en argument le nom de la fonction qui devra être exécutée. Ceci fait référence à l'objet fonction correspondant. Attention la fonction n'est pas exécutée à ce moment, donc pas de parenthèses !
hamburger.addEventListener("click", mobileMenu);

// fonction callback
function mobileMenu() {
    hamburger.classList.toggle("active");
    navbarMenu.classList.toggle("active");
}