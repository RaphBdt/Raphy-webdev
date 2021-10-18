---
part: 1
id: 3
title: Naviguer dans le système

---
Pour afficher tous les éléments d'un répertoire, il faut utiliser la commande :

    ls

On peut aussi regarder le contenu d'un répertoire qui se situe dans notre répertoire, avec la commande :

    ls html_css

Par exemple ici on regarde le contenu du répertoire html_css (qui se situe dans le répertoire où nous sommes actuellement).

Si on fait la commande :

    la -a

Cela nous affiche, en plus de tous les autres éléments, **"."** et **".."** ainsi que tous les autres éléments masqués.  
"." est le dossier courant, ".." est le dossier parent.

La commande :

    ls -l

Permet d'afficher plus d'informations. Ce qu'il faut juste retenir pour l'instant c'est que si ça commence par "d", alors ça correspond à un dossier et si ça commence par "-", alors ça correspond à un fichier.

Il est possible de combiner les commandes (par exemple _ls -la_

Pour se déplacer dans les différents répertoires, il faut utiliser la commande :

    cd 2019 // on se déplace dans le dossier "2019"
    cd .. // on se déplace dans le répertoire parent

On peut aussi spécifier un chemin plus précis :

    cd OpenClassrooms/2019/

Quand le nom d'un élément contient un espave, on doit utiliser les guillement :

    ls "2019/Récits de vacances"

**Raccourcis très utiles :** si on appuie sur la flèche du haut, alors on remonte d'un cran dans l'historique et si on appuie sur la flèche du bas, alors on redescend.  
La touche TAB permet d'auto compléter la commande. Si on veut voir la liste des options disponibles (par exemple si on a un répertoire "cours1" et "cours2"), alors si on en est à "ls cou", on peut appuyer deux fois sur TAB et ça nous indiquera les options disponibles.  
_ctrl + r_ permet de faire une recherche dans l'historique de commande. Il faut appuyer sur _Entrée_ pour en sortir.  
_ctrl + a et ctrl + e_ permettent respectement d'aller automatiquement au début ou à la fin de la ligne de commande qu'on est en train de taper.