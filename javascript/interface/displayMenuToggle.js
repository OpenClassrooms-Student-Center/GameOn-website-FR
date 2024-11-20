/** JS.DOC
 * @module displayMenuToggle
 * @description Gère l'affichage du menu de navigation de l'element "nav" en ajoutant
 * ou retirant des classes lors de  l'interaction avec le bouton "#button-navToggle".
 */

/** JS.DOC
 * @constant {object} elems
 * @description Structure  contenant les éléments et les classes pour
 * gérer l'affiche et la fermeture de la navigation au format mobile.
 */
const elems = {
    btnToggle: {
        elem: document.querySelector("#button-navToggle"),
        classActive: "button-navToggle--activate",
    },
    nav: {
        elem: document.querySelector(".nav"),
        classActive: "nav--active",
    },
};

/** JS.DOC
 * @function displayMenuToggle
 * @description Attache  un gestionnaire  d'événements au bouton "toggle"  pour afficher ou masquer  le menu de navigation.
 * Si le bouton est cliqué, il bascule les classes actives pour afficher ou masquer le menu si déjà cliqué. Un gestionnaire
 * d'événements supplémentaire est attaché à "window" pour fermer le menu si l'utilisateur clique en dehors.
 */
export const displayMenuToggle = () => {
    elems.btnToggle.elem.addEventListener("click", (e) => {
        e.stopPropagation();
        // 🧩 close menu
        if (elems.btnToggle.elem.classList.contains(elems.btnToggle.classActive)) {
            elems.btnToggle.elem.classList.remove(elems.btnToggle.classActive);
            elems.nav.elem.classList.remove(elems.nav.classActive);
        }
        // 🧩 open menu
        else {
            elems.btnToggle.elem.classList.add(elems.btnToggle.classActive);
            elems.nav.elem.classList.add(elems.nav.classActive);
        }
    });
    // 🧩 close menu
    window.document.addEventListener("click", (e) => {
        if (!elems.nav.elem.contains(e.target)) {
            elems.btnToggle.elem.classList.remove(elems.btnToggle.classActive);
            elems.nav.elem.classList.remove(elems.nav.classActive);
        }
    });
};
