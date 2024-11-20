/** JS.DOC
 * @module inputsValidate
 * @description Gère les éléments du formulaire et valide chacun des champs de saisie à l'aide de regex. Chaque champ
 * inclut ses éléments HTML, ses classes pour gérer les erreurs, et  une méthode de validation adaptée à son contenu.
 */

/** JS.DOC
 * @constant {object} firstName
 * @function isValid
 * @description Valide le prénom saisi dans le champ de saisie en s'assurant qu'il contient
 * entre 2  et 20 caractères, y compris les caractères  spéciaux comme  accents ou espaces.
 */
export const firstName = {
    input: {
        elem: document.querySelector("#input-firstName"),
        classErr: "input--err",
    },
    textErr: {
        elem: document.querySelector("#msgErr-firstName"),
        classErr: "msgErr--active",
    },
    isValid: function () {
        const value = this.input.elem.value.trim().toLowerCase();
        const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ -]{2,20}$/;
        return regex.test(value);
    },
};

/** JS.DOC
 * @constant {object} lastName
 * @function isValid
 * @description Valide le nom de famille saisi dans le champ de saisie en s'assurant qu'il contient
 * entre  2  et  20  caractères, y compris  les  caractères  spéciaux  comme  accents  ou  espaces.
 */
export const lastName = {
    input: {
        elem: document.querySelector("#input-lastName"),
        classErr: "input--err",
    },
    textErr: {
        elem: document.querySelector("#msgErr-lastName"),
        classErr: "msgErr--active",
    },
    isValid: function () {
        const value = this.input.elem.value.trim().toLowerCase();
        const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ -]{2,20}$/;
        return regex.test(value);
    },
};

/** JS.DOC
 * @constant {object} email
 * @function isValid
 * @description Valide l'email  saisi  en vérifiant qu'il respecte un  format d'email
 * standard avec un maximum de 40 caractères pour le nom de domaine et l'utilisateur.
 */
export const email = {
    input: {
        elem: document.querySelector("#input-email"),
        classErr: "input--err",
    },
    textErr: {
        elem: document.querySelector("#msgErr-email"),
        classErr: "msgErr--active",
    },
    isValid: function () {
        const value = this.input.elem.value.trim().toLowerCase();
        const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9._-]{1,40}@[A-Za-zÀ-ÖØ-öø-ÿ0-9._-]{1,40}\.[A-Za-z]{2,6}$/;
        return regex.test(value);
    },
};

/** JS.DOC
 * @constant {object} birthDate
 * @function isValid
 * @description Valide la date de naissance saisie en
 * vérifiant  qu'elle  respecte le format AAAA-MM-JJ.
 */
export const birthDate = {
    input: {
        elem: document.querySelector("#input-birthDate"),
        classErr: "input--err",
    },
    textErr: {
        elem: document.querySelector("#msgErr-birthDate"),
        classErr: "msgErr--active",
    },
    isValid: function () {
        const value = this.input.elem.value;
        const regex = /^\d{4,4}-\d{2,2}-\d{2,2}$/;
        return regex.test(value);
    },
};

/** JS.DOC
 * @constant {object} eventQuantity
 * @function isValid
 * @description Valide la quantité  saisie  dans le champ
 * en s'assurant qu'il s'agit d'un nombre positif valide.
 */
export const eventQuantity = {
    input: {
        elem: document.querySelector("#input-eventQuantity"),
        classErr: "input--err",
    },
    textErr: {
        elem: document.querySelector("#msgErr-eventQuantity"),
        classErr: "msgErr--active",
    },
    isValid: function () {
        const value = this.input.elem.value;
        const regex = /^[0-9]\d{0,99}/;
        return regex.test(value);
    },
};

/** JS.DOC
 * @constant {object} location
 * @function isValid
 * @description Valide  que  l'utilisateur a  sélectionné au moins
 * une des options proposées dans les champs de type bouton radio.
 */
export const location = {
    input: {
        elem: document.querySelectorAll(".input-location"),
    },
    textErr: {
        elem: document.querySelector("#msgErr-location"),
        classErr: "msgErr--active",
    },
    isValid: function () {
        const elems = Array.from(this.input.elem);
        return elems.some((elem) => elem.checked);
    },
};

/** JS.DOC
 * @constant {object} termsCondition
 * @function isValid
 * @description Vérifie que l’utilisateur a coché
 * la case d'acceptation des termes et conditions.
 */
export const termsCondition = {
    input: {
        elem: document.querySelector("#input-termsCondition"),
    },
    textErr: {
        elem: document.querySelector("#msgErr-termsCondition"),
        classErr: "msgErr--active",
    },
    isValid: function () {
        return this.input.elem.checked;
    },
};
