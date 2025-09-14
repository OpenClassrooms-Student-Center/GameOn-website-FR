function editNav() {
  // Récupèration de nav ayant l'ID "myTopnav"
  var x = document.getElementById("myTopnav");

  // Vérification si classe actuelle = "topnav"
  if (x.className === "topnav") {
    // Si oui, ajout de la classe "responsive"
    // classe devient "topnav responsive"
    x.className += " responsive";
  } else {
    // Sinon (la classe est déjà "responsive") -> réinitialisation à "topnav"
    // Retour à l'état initial

    x.className = "topnav";
  }
}
