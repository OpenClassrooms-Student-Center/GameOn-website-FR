/** JS.DOC
 * @import importe les modules relatifs
 * à l'interface utilisateur.
 */
import { navEventLinks } from "./interface/navEventLinks.js";
import { displayMenuToggle } from "./interface/displayMenuToggle.js";
import { displayRegistrationModal } from "./interface/displayRegistrationModal.js";

navEventLinks();
displayMenuToggle();
displayRegistrationModal();

/** JS.DOC
 * @import importe le module contenant la logique
 * du formulaire  d'inscription  à un  événement.
 */
import { formRegistrationEvent } from "./setting/formRegistrationEvent.js";

formRegistrationEvent();
