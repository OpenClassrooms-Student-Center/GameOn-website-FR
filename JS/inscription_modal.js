// --- Déclarer et exporter la fonction pour ouverture globale
function launchInscriptionModal() {
  const modalbg = document.querySelector(".bground");
  // on récupère la modale via sa classe
  if (modalbg) modalbg.classList.add("show");
  // si modalbg existe, on lui ajoute la classe 'show' pour l'afficher
}

// on rend la fonction accessible globalement (depuis le navigateur)
// pour pouvoir l'appeler depuis n'importe quel script ou bouton
window.launchInscriptionModal = launchInscriptionModal;

// --- Fermer la modale après DOM ready
document.addEventListener("DOMContentLoaded", () => {
  // attend que tout le DOM soit chargé avant de manipuler les éléments

  const modalbg = document.querySelector(".bground");
  if (!modalbg) return;
  // si la modale n'existe pas sur cette page, on quitte la fonction pour éviter les erreurs

  const closeBtn = modalbg.querySelector(".close");
  // on récupère le bouton "fermer" à l'intérieur de la modale
  const modalBtn = document.querySelectorAll(".modal-btn");
  // on récupère tous les boutons qui ouvrent la modale

  // Fonction fermer modale
  function closeFormModal() {
    modalbg.classList.remove("show");
    // On enlève la classe show pour cacher la modale
  }

  // BOUTONS OUVRIR MODAL
  // Pour chaque bouton modalBtn
  modalBtn.forEach((btn) =>
    btn.addEventListener("click", launchInscriptionModal)
  );
  // écouteur d'événement click sur modalBtn -> launchInscriptionModal s'exécute
  // -> ajoute la classe 'show' à la modale et l'affiche

  // Bouton fermeture
  // on vérifie que le bouton "fermer" existe
  if (closeBtn) closeBtn.addEventListener("click", closeFormModal);
  // si oui -> écouteur d'événement 'click'
  // click -> fonction closeFormModal est exécutée
  // -> retire la classe 'show'et la modale disparaît

  // Fermer via Échap
  // écoute les appuis de touches
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeFormModal();
  });
  // si la touche appuyée est 'Escape' -> closeFormModal s'execute
  // -> fermeture
});
