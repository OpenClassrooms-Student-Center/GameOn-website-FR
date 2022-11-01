<div align="center">
  <img width="200" src="./starterOnly/assets/img/Logo.png" alt="GameOn logo">
</div>
<h1 align="center" style="margin-top: 0px;">Projet 4</h1>

<img width="100%" src="./starterOnly/assets/img/16395717662959_HomePage.png" alt="GameOn website" align="center">

## Objectif
Compléter la partie Front-End. Ton travail consiste à ajouter le code JavaScript manquant pour que le formulaire soit pleinement fonctionnel.
[Le repo à forké servant de base](https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/) et [Les issues sur le repo GitHub qui décrivent ce qu'il reste à faire](https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/issues).

## Cahier des charges

### 🟥  Issue #1
#### Fermer la modale

Ajouter la fonctionnalité au bouton (x)

### 🟥 Issue #2
#### Implémenter entrées du formulaire

1 - Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire. 

2 - Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :
-   Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
-   Les données doivent être saisies correctement :  
    (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.  
    (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.  
    (3) L'adresse électronique est valide.  
    (4) Pour le nombre de concours, une valeur numérique est saisie.  
    (5) Un bouton radio est sélectionné.  
    (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
-   Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

### 🟥 Issue #3
#### Ajouter validation ou messages d'erreur

Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :
-   "Veuillez entrer 2 caractères ou plus pour le champ du nom."
-   "Vous devez choisir une option."
-   "Vous devez vérifier que vous acceptez les termes et conditions."
-   "Vous devez entrer votre date de naissance."

### 🟥 Issue #4
#### Ajouter confirmation quand envoi réussi

Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.").

### 🟥 Issue #5
#### Tests manuels

-   Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, ainsi que dans les versions mobile et desktop. Corriger les erreurs d'affichage existantes.
-   Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes).