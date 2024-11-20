/** JS.DOC
 * @module displayError
 * @description Gère l'affichage et la suppression des messages
 * d'erreur ainsi que des styles liés aux champs de formulaire.
 */

/** JS.DOC
 * @constant {function} displayError
 * @description Ajoute les classes CSS définies pour indiquer une erreur sur un champ de formulaire.
 * La  fonction  applique  une  classe  d'erreur à  l'élément  avec  un  message  d'erreur  associé.
 */
export const displayError = (elem) => {
    if (elem.input.classErr) {
        elem.input.elem.classList.add(elem.input.classErr);
    }
    if (elem.textErr.classErr) {
        elem.textErr.elem.classList.add(elem.textErr.classErr);
    }
};
/** JS.DOC
 * @constant {function} removeError
 * @description Supprime les classes CSS définies pour indiquer une erreur sur un champ de formulaire.
 * La fonction  enlève la classe d'erreur  de l'élément de saisie  et  du  message  d'erreur  associé.
 */
export const removeError = (elem) => {
    if (elem.input.classErr) {
        elem.input.elem.classList.remove(elem.input.classErr);
    }
    if (elem.textErr.classErr) {
        elem.textErr.elem.classList.remove(elem.textErr.classErr);
    }
};
