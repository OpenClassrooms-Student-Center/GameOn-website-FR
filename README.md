# Projet GameOn
1. Forkez ce repo ;
2. Il est conseillé d'utiliser VisualStudio Code et vous pouvez utiliser Docker, mais ce n'est pas obligatoire ;
3. Il n'y a aucune dépendance ;
4. Vous ne devez utiliser que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.

**TODO : <br>**
**#1 Fermer la modale<br>**
Ajouter la fonctionnalité au bouton (x)
<br>

**#2 Implémenter entrées du formulaire<br>**
(1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.<br>
(2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :<br>
Le formulaire doit être valide quand l'utilisateur clique sur "Submit"<br>
Les données doivent être saisies correctement :<br>
(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.<br>
(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.<br>
(3) L'adresse électronique est valide.<br>
(4) Pour le nombre de concours, une valeur numérique est saisie.<br>
(5) Un bouton radio est sélectionné.<br>
(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.<br>
Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.<br>

**#3 Ajouter validation ou messages d'erreur<br>**
Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :<br>
"Veuillez entrer 2 caractères ou plus pour le champ du nom."<br>
"Vous devez choisir une option."<br>
"Vous devez vérifier que vous acceptez les termes et conditions."<br>
"Vous devez entrer votre date de naissance."<br>

**#4 Ajouter confirmation quand envoie réussi<br>**
Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.")<br>

**# 5Tests manuels**<br>
Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, ainsi que dans les versions mobile et desktop. Corriger les erreurs d'affichage existantes.<br>
Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes)<br>
