---
part: 3
id: 1
title: Concepts de base

---
## Créer la base de son thème

Créons un nouveau dossier dans les thèmes de WordPress.  
Il faut créer quelques fichiers :

* index.php
* style.css
* functions.php
* screenshot.png (de 880x660px)

C'est dans le fichier _style.css_ qu'on doit indiquer toutes les informations à propos de notre thème.

    /*
    Theme Name: Capitaine
    Theme URI: https://capitainewp.io
    Author: Maxime BERNARD-JACQUET
    Author URI: https://dysign.fr
    Description: Mon premier thème !
    Requires at least: WordPress 5.0
    Version: 1.0
    */

Dans _index.php_ on va mettre le minimum pour le moment :

    <!DOCTYPE html>
    <html>
    <head></head>
    <body>
    	<h1>Coucou !</h1>
    </body>
    </html>