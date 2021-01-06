# GameOn

Troisième projet réalisé dans le cadre de mon parcours Développeur d'applications Front-end en alternance avec OpenClassrooms

**Contexte** : GameOn est une PME spécialisée dans les conférences & les concours de jeux. Après plusieurs retours négatifs de la part d'utilisateurs, l'entreprise a fait le choix de modifier sa page d'accueil ainsi que son formulaire d'inscription afin de coller aux attentes des utilisateurs. 

Le but du travail est de : 
- Reprendre le travail déjà effectué par un autre développeur

- Faire des tests manuels pour modifier la mise en page (mobile & desktop) & vérifier le fonctionnement des boutons et champs d'inscritpion en testant les valeurs correctes et incorrectes

- Ajouter une confirmation quand envoi réussi : Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. *"Merci ! Votre réservation a été reçue."*)

- Ajouter validation ou des messages d'erreur : Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples : *"Veuillez entrer 2 caractères ou plus pour le champ du nom."* *"Vous devez choisir une option"* *"Vous devez vérifier que vous acceptez les termes et conditions."* *"Vous devez entrer votre date de naissance."*

- Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.  

- Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :

Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
Les données doivent être saisies correctement :
(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
(3) L'adresse électronique est valide.
(4) Pour le nombre de concours, une valeur numérique est saisie.
(5) Un bouton radio est sélectionné.
(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.

- Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

- Ne pas oublier de fermer la modale
