function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);

// On mémorise le contenu initial de la modale pour pouvoir le restaurer
const modalBody = document.querySelector(".modal-body");
const initialModalHTML = modalBody ? modalBody.innerHTML : "";

// Sélecteur du formulaire
const form =
  document.querySelector(".modal-body form") || document.querySelector("form");

// ⬇️ AJOUT : indicateur pour savoir si on doit restaurer le HTML initial lors de la fermeture
let shouldRestoreOnClose = false;

function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
  // À chaque fermeture, on rétablit le formulaire visible
  if (modalBody && initialModalHTML && shouldRestoreOnClose) {
    modalBody.innerHTML = initialModalHTML;
    shouldRestoreOnClose = false;
  }
}

function validate() {
  let isValid = true;

  document.querySelectorAll(".formData").forEach((sec) => {
    sec.removeAttribute("data-error");
    sec.setAttribute("data-error-visible", "false");
  });

  // Prénom (min 2 caractères et lettres uniquement)
  const first = document.getElementById("first");
  const nameRe = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
  if (
    !first.value ||
    first.value.trim().length < 2 ||
    !nameRe.test(first.value.trim())
  ) {
    const sec = first.closest(".formData");
    sec.setAttribute(
      "data-error",
      "Veuillez entrer un prénom valide (2 caractères minimum, lettres uniquement)."
    );
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Nom (min 2 caractères et lettres uniquement)
  const last = document.getElementById("last");
  if (
    !last.value ||
    last.value.trim().length < 2 ||
    !nameRe.test(last.value.trim())
  ) {
    const sec = last.closest(".formData");
    sec.setAttribute(
      "data-error",
      "Veuillez entrer un nom valide (2 caractères minimum, lettres uniquement)."
    );
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Email (format standard)
  const email = document.getElementById("email");
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value || !emailRe.test(email.value)) {
    const sec = email.closest(".formData");
    sec.setAttribute("data-error", "Veuillez entrer une adresse email valide.");
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Date de naissance (non vide)
  const bdate = document.getElementById("birthdate");
  if (!bdate.value) {
    const sec = bdate.closest(".formData");
    sec.setAttribute(
      "data-error",
      "Vous devez entrer votre date de naissance."
    );
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Nombre de concours (doit être un nombre)
  const qtyField = document.getElementById("quantity");
  const qtyValue = qtyField.value.trim();
  if (qtyValue === "" || isNaN(qtyValue)) {
    const sec = qtyField.closest(".formData");
    sec.setAttribute("data-error", "Veuillez entrer un nombre valide.");
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Radio localisation (au moins une coche)
  const locs = document.getElementsByName("location");
  if (![...locs].some((r) => r.checked)) {
    const sec = locs[0].closest(".formData");
    sec.setAttribute("data-error", "Vous devez choisir une option.");
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // CGU (case requise)
  const terms = document.getElementById("checkbox1");
  if (!terms.checked) {
    const sec = terms.closest(".formData");
    sec.setAttribute(
      "data-error",
      "Vous devez accepter les conditions d'utilisation."
    );
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Si tout est validé, on affiche le message de succès
  if (isValid) {
    // 1) Nettoyer tous les champs immédiatement
    if (form) form.reset();

    // 2) Afficher le message de remerciement
    if (modalBody) {
      modalBody.innerHTML = `
        <p class="thank-you">Merci pour votre inscription</p>
        <button id="btn-close" class="btn-submit">Fermer</button>
      `;
      // 3) Au clic sur Fermer : fermer et rétablir le formulaire vierge
      document.getElementById("btn-close").addEventListener("click", () => {
        shouldRestoreOnClose = true;
        closeModal(); // closeModal rétablit déjà initialModalHTML + masque la modale
      });
    }
  }

  return false; // empêche le navigateur de recharger la page
}
