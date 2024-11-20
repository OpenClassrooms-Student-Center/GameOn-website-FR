/** JS.DOC
 * @module formRegistrationEvent
 * @description Gère l'événement de soumission du formulaire d'inscription. Valide les champs
 * du formulaire et affiche des messages d'erreur en cas  de saisies incorrectes. Si tous les
 * champs sont  valides, une modal de  confirmation s'affiche pour informer  l'utilisateur du
 * succès de  l'inscription, puis les champs du formulaire sont réinitialisés.
 */

import { firstName, lastName, email, birthDate, eventQuantity, location, termsCondition } from "../validator/inputsValidate.js";
import { inputsReset } from "../validator/inputsReset.js";
import { displayError, removeError } from "../interface/displayError.js";
import { displaySuccessRegistrationModal } from "../interface/displaySuccessRegistrationModal.js";

/** JS.DOC
 * @constant {function} formRegistrationEvent
 * @description Définit  l'événement de  soumission du  formulaire. Cette fonction initialise  un écouteur
 * sur le formulaire  d'inscription pour valider les champs saisis par l'utilisateur. Si des erreurs  sont
 * détectées, elles sont affichées avec des messages d'erreur appropriés. Si tous les champs sont valides,
 * une modal de succès est affichée, puis les champs sont réinitialisés.
 */
export const formRegistrationEvent = () => {
    const form = document.querySelector("#formRegistration");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let isValid = true;
        const inputs = [firstName, lastName, email, birthDate, eventQuantity, location, termsCondition];
        // 🧩 Validation of inputs
        for (const input of inputs) {
            if (!input.isValid()) {
                isValid = false;
                displayError(input);
            } else {
                removeError(input);
            }
        }
        // 🧩 display success modal
        if (isValid) {
            displaySuccessRegistrationModal();
            inputsReset(inputs);
        }
    });
};
