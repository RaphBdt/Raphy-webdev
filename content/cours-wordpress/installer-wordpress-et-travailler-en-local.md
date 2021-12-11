---
part: 1
id: 2
title: Installer WordPress et travailler en local

---
## Travailler en local

Il faut travailler en local. Imaginons par exemple que nous envoyions un fichier contenant un bug sur le FTP... Notre site risque de ne plus être accessible.

De plus, on peut faire tous les tests / MaJ que nous souhaitons pendant que nous avons une version en ligne qui tourne correctement.

Pour collaborer sur un projet, on pourra utiliser Git et GitHub.

## Local by Flywheel

L'outil vraiment indispensable que nous propose cet outil est les "Blueprints". Cela permet de dupliquer un site existant et donc d'avoir tous les plugins / pages / réglages indispensables.

Pour créer un nouveau site avec Local il suffit juste de cliquer sur le "+" et de choisir un titre. En réglage, on laisse "Preferred". Après ça on doit créer un utilisateur avec un nom et un mot de passe.

Dans _Préférences_ on peut choisir des identifiants par défaut (hors mot de passe).

Rappel : **1 mot de passe différent par site !**

Une fois qu'on aura créé notre thème, on pourra créer un Blueprint. Il suffira de le sélectionner pour partir de cette base. 

On peut même changer le nom de domaine très rapidement en cliquant sur _Change_ dans l'onglet _Site Setup._

On peut aussi montrer notre site en local à distance ! En bas de la fenêtre Local, il faut cliquer sur _Enable_ à côté de _Live Link_.

Pour permettre l'envoi de mails en local, il faut se rendre dans l'onglet _SSL_ et cliquer sur _Trust_.  
Dans _Utilities_, on peut capter les mails envoyés en local. 

Notre site WordPress se trouve dans le dossier _app/public_.

## Structure de WordPress côté fichiers 

_index.php_ reçoit toutes les requêtes.

_wp-config.php_ est le fichier de config de WordPress avec les identifiants de connexion à la BDD. 

_wp-config-sample.php_ ce fichier sert de modèle à la création du wp-config.php

_wp-login.php_ est le fichier qui permet d'établir la connexion avec l'interface d'admin.

_wp-signup.php_ est la page qui exécute le code permettant d'afficher un formulaire de création de compte.

Dans le dossier _wp-includes_, on retrouve la plupart des fonctionnalités de WordPress (articles, commentaires, catégories...) mais on ne va pas modifier de fichiers ici.

Le dossier _wp-admin_ est l'intergace d'administration du site. Pareil, on en va pas modifier de fichiers ici. 

Le dossier **wp-content** est celui où on va travailler.   
Nos thèmes seront dans _/wp-content/themes/_ (un seul sera actif). Pour activer un thème il faut aller dans _Apparence > Thèmes_ en back office.   
Il est recommandé de laisser 2 thèmes maximum ! (Un au cas où on ait un problème avec le principal)  
Notre bibliothèque de médias se trouve dans _wp-content/uploads/_.  
Le dossier _Mu-Plugins_ permet d'exécuter du code à chaque lancement de WordPress.  
Le dossier _Upgrades_ n'est pas vraiment intéressant mais WordPress en a besoin pour télécharger les mises à jour avant de les appliquer.  
_Langues_ va stocker les différences langues de l'interface d'administration et certains thèmes et extensions. 

**En résumé on ne doit toucher qu'à wp-config et à wp-content/ !**