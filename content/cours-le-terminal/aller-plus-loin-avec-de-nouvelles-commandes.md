---
part: 2
id: 6
title: Aller plus loin avec de nouvelles commandes

---
## Afficher le manuel d'une commande

    man [commande]

Cette fonction indique le fonctionnement d'une commande et permet de connaitre l'ensemble des options disponibles.

Pour naviguer, on utilise la flèche haut / bas et pour quitter le manuel, on appuie sur la touche q.

## Connaître le contenu d'un fichier

    cat fichier.txt

Permet d'afficher le contenu du fichier (ici fichier.txt).

    less fichier.txt

Même principe, mais affichage différent. Comme pour _man_, le terminal va utiliser un mode de visualisation. On navigue grâce aux flèches et on quitte avec q.

## Les redirections

    ls -l > liste.txt

Redirige le résultat de la commande vers un fichier (ici liste.txt). Si le fichier n'existe pas, alors il est automatiquement créé.

## Chercher un élément à l'intérieur d'un fichier

    grep cours liste.txt

Recherche un mot (ici cours) dans le ou les fichier(s) spécifié(s) (ici liste.txt).

Si on veut rechercher un mot dans **tout le répertoire** dans lequel nous nous situons :

    grep cours *