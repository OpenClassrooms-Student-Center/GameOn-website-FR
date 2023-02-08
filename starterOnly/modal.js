function editNav() {
	let x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// Elements du DOM
const modalbg = document.querySelector(".bground");
const closeBtnModal = document.querySelector(".btn-close");
const modalBtn = document.querySelectorAll(".modal-btn");

const form = document.querySelector("form");
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const qtyParticipation = document.getElementById("quantity");
const locationParticipation = document.querySelectorAll(".location");
const [terms, newletter] = document.querySelectorAll(".terms");


// Événement d'ouvrir de la modale
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
	modalbg.style.display = "block";
}

// Événement de fermeture de la modale
closeBtnModal.addEventListener("click", closeModal);

function closeModal() {
	modalbg.style.display = "none";
}

const formData = new FormData();

/* Submit/Soumission

	Si la fonction "validate()" retourne "true" un message de confirmation apparaitra et les données du formulaire seront affiché dans la console (sous forme de tableau, un input = un tableau)
*/
form.addEventListener("submit", (e) => {
	e.preventDefault();

	const isValid = validate();

	if (isValid) {
		const message = document.createElement("h2");
		message.textContent = "Merci ! Votre réservation a été reçue.";
		message.classList.add("success");
		form.replaceWith(message);
		// form.submit();
	}
});

/**
 * Vérifie si une chaine de caractère donnée est vide ou non.
 * @function
 * @param {string} value La valeur à vérifier.
 * @returns {boolean} Retourne `true` si la chaine est vide, `false` sinon.
 * 
 * @example
 * console.log(isEmpty("")) // true
 * console.log(isEmpty("truc")) // false
 */
const isEmpty = (value) => !value.length;

/**
 * Cette fonction vérifie si une valeur donnée est une adresse email valide en utilisant une expression régulière.
 * @function
 * @param {string} value La valeur à vérifier.
 * @returns {boolean} Retourne `true` si la valeur est une adresse email valide, `false` sinon.
 *
 * @example
 * const email = "exemple@domaine.com";
 * const resultat = isEmail(email);
 * console.log(resultat); // true
 */
const isEmail = (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);

/**
 * Vérifie la validité du champ `firstname`.
 * @returns {boolean} - Retourne `true` si l'entré `firstname` est valide, `false` sinon.
 */
function checkFirstname() {
	const firstnameValue = firstname.value.trim();

	if (isEmpty(firstnameValue)) {
	  setError(firstname, "Veuillez renseigner votre prénom");
	  return false;
	}

	if (firstnameValue.length < 2) {
	  setError(firstname, "Le prénom doit contenir au minimum 2 caractères");
	  return false;
	}

	formData.append("firstname", firstnameValue);
	setSuccess(firstname);
	return true;
}

/**
 * Vérifie la validité du champ `lastname`.
 * @returns {boolean} - Retourne `true` si l'entré `lastname` est valide, `false` sinon.
 */
function checkLastname() {
	const lastnameValue = lastname.value.trim();

	if (isEmpty(lastnameValue)) {
		setError(lastname, "Veuillez renseigner votre nom");
		return false;
	}

	if (lastnameValue.length < 2) {
		setError(lastname, "Le nom doit contenir au minimum 2 caractères");
		return false;
	}

	formData.append("lastname", lastnameValue);
	setSuccess(lastname);
	return true;
}

/**
 * Vérifie la validité du champ `email`.
 * @returns {boolean} - Retourne `true` si l'entré `email` est valide, `false` sinon.
 */
function checkEmail() {
	const emailValue = email.value.trim();

	if (isEmpty(emailValue)) {
		setError(email, "Veuillez renseigner votre adresse email");
		return false;
	}

	if (!isEmail(emailValue)) {
		setError(email, "Adresse email invalide");
		return false;
	}

	formData.append("email", emailValue);
	setSuccess(email);
	return true;
}

/**
 * Vérifie la validité du champ `birthdate`.
 * @returns {boolean} - Retourne `true` si l'entré `birthdate` est valide, `false` sinon.
 */
function checkBirthdate() {
	const birthdateValue = birthdate.value;
	const birthdateDate = new Date(birthdateValue);
	const now = new Date();

	if (isEmpty(birthdateValue)) {
		setError(birthdate, "Veuillez renseigner votre date de naissance");
		return false;
	}

	if(birthdateDate >= now) {
		setError(birthdate, "La date de naissance doit être inférieur à la date du jour");
		return false;
	}

	formData.append("birthdate", birthdateValue);
	setSuccess(birthdate);
	return true;
}

/**
 * Vérifie la validité du champ `participation`, la valeur donnée doit être comprise entre 0 et 100.
 * @returns {boolean} Retourne `true` si l'entré `participation` est valide, `false` sinon.
 */
function checkParticipation() {
	const qtyParticipationValue = qtyParticipation.value;

	if (isNaN(qtyParticipationValue)) {
		setError(qtyParticipation, "La valeur indiquée n'est pas un nombre valide")
		return false;
	}
	if (!(parseInt(qtyParticipationValue) >= 0 && parseInt(qtyParticipationValue) <= 100)) {
		setError(qtyParticipation, "Entrer une valeur comprise entre 0 et 100");
		return false;
	}

	formData.append("participation", qtyParticipationValue);
	setSuccess(qtyParticipation);
	return true;
}

/**
 * Vérifie la validité du champ `location`, pour ça l'une des checkbox doit être cochée.
 * @returns {boolean} Retourne `true` si l'entré `location` est valide, `false` sinon.
 */
function checkLocation() {
	const { isChecked, elementRadio } = checkRadio([...locationParticipation]);

	if (!isChecked) {
		setError(locationParticipation[0], "Choisissez le lieu du tournoi");
		return false;
	}

	formData.append("location", elementRadio.value);
	setSuccess(elementRadio);
	return true;
}

/**
 * Vérifie la validité du champ `terms`, pour ça la checkbox correspondant au label "J'ai lu et accepté les conditions d'utilisation." doit être cochée.
 * @returns {boolean} - Retourne `true` si l'entré `terms` est valide, `false` sinon.
 */
function checkTerms() {
	if (!terms.checked) {
		setError(terms, "Veuillez accepter les conditions d'utilisation");
		return false;
	}

	const obj = { term: true, newletter: newletter.checked };
	Object.keys(obj).forEach((key) => formData.append(key, obj[key]));
	setSuccess(terms);
	return true;
}

/**
 * Vérifie qu'un élément radio a été coché.
 * @param {NodeListOf<HTMLInputElement>} elements NodeList d'éléments radio à tester.
 * @returns {{ isChecked: boolean, elementRadio: HTMLInputElement }} Objet avec deux propriétés :
 * `isChecked` : indique si un élément radio a été coché (`true`) ou non (`false`).
 * `elementRadio` : référence à l'élément radio coché (`HTMLInputElement`), ou `null` si aucun élément n'a été coché.
 */
function checkRadio(elements) {
	for (const radio of elements) {
		if (radio.checked) return { isChecked: true, elementRadio: radio };
	}

	return { isChecked: false, elementRadio: null };
}

/**
 * Valide l'ensemble des champs d'un formulaire, si l'une des fonctions de validation retourne `false` la soumission du formulaire ne pourra pas être effectuée.
 * @returns {boolean} Retourne `true` si tous les champs sont valides, sinon `false`.
 */
function validate() {
	const results = [
		checkFirstname(),
		checkLastname(),
		checkEmail(),
		checkBirthdate(),
		checkParticipation(),
		checkLocation(),
		checkTerms()
	];

	for (const res of results) {
		if (!res) return false;
	}

	return true;
}

/**
 * Affiche une erreur pour un élément donné.
 * @param {HTMLInputElement} element L'élément qui correspond à l'erreur.
 * @param {string} message Le message d'erreur à afficher.
 */
function setError(element, message) {
	const formControl = element.parentElement;
	formControl.setAttribute("data-error", message);
	formControl.setAttribute("data-error-visible", true);
}

/**
 * Retire l'erreur précédemment affichée pour un élément donné.
 * @param {HTMLInputElement} element L'élément qui correspond à l'erreur.
 */
function setSuccess(element) {
	const formControl = element.parentElement;

	if (formControl.hasAttribute("data-error")) {
		formControl.removeAttribute("data-error");
	}
}