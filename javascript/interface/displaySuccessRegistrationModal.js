/** JS.DOC
 * @module displaySuccessRegistrationModal
 * @description Gère l'affichage  du message de remerciement d'inscription. Il ajoute les
 * classes CSS nécessaires pour afficher une modal et un message de succès, puis supprime
 * toutes les classes liées à la modal lorsque les boutons de fermeture sont cliqués.
 */

/** JS.DOC
 * @constant {Object} elems
 * @description Structure contenant les éléments et classes
 * pour  gérer  l'affiche et la  fermeture de la  modale de
 * remerciement d'inscription.
 */
const elems = {
    modal: {
        elem: document.querySelector("#aside-modalRegistration"),
        classActive: "aside-modalRegistration--activate",
    },
    form: {
        elem: document.querySelector("#formRegistration"),
        class: "formRegistration",
        classIsValid: "formRegistration--isValid",
    },
    successMsg: {
        elem: document.querySelector("#successRegistration"),
        classActive: "successRegistration--activate",
    },
    buttons: {
        btnClosesuccessMsg: document.querySelector("#button-closeSuccessRegistration"),
        btnCloseModal: document.querySelector("#button-closeModal"),
    },
};

/** JS.DOC
 * @function displaySuccessRegistrationModal
 * @description Gère l'affichage du message de succès après la validation du formulaire.
 * Ajoute les classes CSS nécessaires pour afficher la modal et le message de succès, et
 * attache des gestionnaires  d'événements pour retirer les classes activées lorsque les
 * boutons de fermeture sont cliqués.
 * @returns {boolean}
 */
export const displaySuccessRegistrationModal = () => {
    elems.form.elem.classList.add(elems.form.classIsValid);
    elems.successMsg.elem.classList.add(elems.successMsg.classActive);
    // 🧩 clear the names classes of the elements of the modal
    for (const key in elems.buttons) {
        const button = elems.buttons[key];
        button.addEventListener("click", (e) => {
            elems.form.elem.classList.remove(elems.form.classIsValid);
            elems.successMsg.elem.classList.remove(elems.successMsg.classActive);
            elems.modal.elem.classList.remove(elems.modal.classActive);
        });
    }
};
