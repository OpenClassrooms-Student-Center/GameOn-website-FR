/** JS.DOC
 * @module inputsReset
 * @description Gère la réinitialisation des valeurs des champs
 * du  formulaire en  parcourant  chacun des  champs de saisie.
 */

/** JS.DOC
 * @constant {function} inputsReset
 * @description Réinitialise  les valeurs des champs  de saisie dans un  formulaire. La fonction
 * prend un tableau  d'objets représentant les champs du formulaire et vide  la valeur de chaque
 * champ en les réinitialisant à une chaîne vide. Elle est utilisée après une soumission réussie
 * du formulaire.
 */
export const inputsReset = (inputs) => {
    inputs.forEach((inputName) => {
        inputName.input.elem.value = "";
        console.log(`Rénitialiser la valeur de : ${inputName.input.elem.id}`);
    });
};
