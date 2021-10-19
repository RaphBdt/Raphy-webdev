---
part: 2
id: 6
title: Travailler à partir d'un projet existant

---
Accéder à un dépôt distant

On va maintenant voir comment **accéder à un dépôt distant**.

Il faut dans un premier temps initialiser notre répertoire courant en local avec la commande :

    git init

Ensuite, il faut récupérer l'URL du dépôt distant sur GitHub. Il faut se rendre sur la page du dépôt distant sur lequel on souhaite travailler > Code > Copier l'url fournit.

Il faut maintenant taper la commande :

    git remote add OC https://github.com/OpenClassrooms-Student-Center/ProjetOpenSource.git

Il faut bien évidemment remplacer le lien par le notre, mais aussi le nom "OC" qui représente le nom court qu'on utilisera pour appeler notre dépôt.

Attention : cette ligne ne copie pas le dépôt, mais **indique au dépôt que l'on pointe vers le dépôt distant**.

Avant de copier le dépôt, il faut se placer sur la branche locale "main" pour éviter tout conflit :

    git branch -M main

## Copier le dépôt local

Il faut maintenant dupliquer le dépôt distant sur le dépôt local.

Pour ça, il faut utiliser la commande :

    git pull OC main

Et voilà c'est tout bon !

**_Tips :_** il est également possible pour dupliquer le dépôt distant sur le dépôt local de faire la commande :

    git clone https://github.com/xxxxxx/monDepotDistant