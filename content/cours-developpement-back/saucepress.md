---
part: 1
id: 5
title: SaucePress

---
## Lancement de l'app

 Tout tourne autour d'un fichier.  
1️⃣ Chargement de la requête client  
2️⃣ Exécute la page désirée  
3️⃣ Envoie une réponse au client

## Architecture du projet

* /vendor
  * /saucepress
* /src
  * /apps
  * /frontend
  * /backend
* /public
  * index.php

Le répertoire vendre est à PHP ce que node_modules est à JS.

Un module est un ensemble d'actions qui concerne une partie du site (News, commentaires...).

Un **Modèle** est un fichier qui permet d'interagir avec les données.

Nos **Vues** seront des fichiers PHP.

Les **Controllers** dans un MVC sont les chefs d'orchestre de l'application. 