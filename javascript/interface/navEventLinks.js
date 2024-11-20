/** JS.DOC
 * @module navEventLinks
 * @description Gère les  événements de survol pour les liens  de navigation dans le menu supérieur.
 * Ajoute une classe active au lien survolé et retire cette classe lorsque la souris quitte le lien.
 * Le premier lien reçoit une classe par défaut lorsqu'aucun autre lien n'est actif.
 */

/** JS.DOC
 * @constant {Object} className
 * @description L'objet  définit les noms de classes utilisés
 * pour interragir par la suite avec les liens de navigation.
 */
const className = {
    link: "nav__link",
    linkActive: "nav__link--active",
    linkActiveDefault: "nav__link--activeDefault",
};

/** JS.DOC
 * @function navEventLinks
 * @description Attache des gestionnaires d'événements de survol et de sortie aux  liens de navigation.
 * Lorsque le lien est survolé, il ajoute la classe active, et supprime la classe active lors du départ
 * de la souris. La classe active par défaut est également gérée pour le premier lien.
 */
export const navEventLinks = () => {
    const links = document.querySelectorAll("." + `${className.link}`);
    // console.log(links);
    links.forEach((link) => {
        // 🧩 event mouseover
        link.addEventListener("mouseover", (e) => {
            if (links[0] && !link[0]) {
                links[0].classList.remove(className.linkActiveDefault);
            }
            link.classList.add(className.linkActive);
        });
        // 🧩 event mouseout
        link.addEventListener("mouseout", (e) => {
            link.classList.remove(className.linkActive);
            links[0].classList.add(className.linkActiveDefault);
        });
    });
};
