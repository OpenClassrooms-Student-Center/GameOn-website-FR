/** JS.DOC
 * @module displayRegistrationModal
 * @description Gère l'affichage et la fermeture de  la modale d'inscription
 * à l'évènement, avec l'aide de gestionnaires d'événements de type "click".
 */

/** JS.DOC
 * @constant {Object} elems
 * @description Structure contenant les éléments pour gérer l'affiche
 * et  la fermeture de la  modale  d'inscription  et  leurs  classes.
 */
const elems = {
    buttons: {
        buttonOpenModal: document.querySelector("#button-openModal"),
        buttonCloseModal: document.querySelector("#button-closeModal"),
    },
    modal: {
        elem: document.querySelector("#aside-modalRegistration"),
        classActive: "aside-modalRegistration--activate",
    },
};

/** JS.DOC
 * @function displayRegistrationModal
 * @description Ajoute  un gestionnaire  d'événement lors  du click
 * pour ouvrir ou fermer la modale d'inscription pour un événement.
 */
export const displayRegistrationModal = () => {
    // 🧩 open modal
    elems.buttons.buttonOpenModal.addEventListener("click", () => {
        elems.modal.elem.classList.add(elems.modal.classActive);
        console.log("Modale ouverte :", elems.modal.elem);
    });
    // 🧩 close modal
    elems.buttons.buttonCloseModal.addEventListener("click", () => {
        elems.modal.elem.classList.remove(elems.modal.classActive);
        console.log("Modale fermée :", elems.modal.elem);
    });
};
