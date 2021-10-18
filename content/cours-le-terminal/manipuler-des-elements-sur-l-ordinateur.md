---
part: 2
id: 5
title: Manipuler des éléments sur l'ordinateur

---
## Déplacer du contenu avec mv

Deux paramètres : ce qu'on veut déplacer et l'endroit où on veut le déplacer.

Par exemple, si on a un fichier monfichier.txt et un dossier test. Si on veut déplacer monfichier.txt à l'intérieur du dossier test :

    mv monfichier.txt test/

Pour déplacer plusieurs fichiers en même temps... Par exemple, si on a les fichiers fichier1.txt & fichier2.txt :

    mv fich* test

On peut aussi faire l'inverse : déplacer tous les fichiers qui terminent par .txt dans le dossier test vers notre dossier actuel :

    mv test/*.txt .

Le caractère __*__ s'appelle aussi **"wildcards"** ou **"jokers"**. Il remplace une partie du nom d'un fichier.

## Copier du contenu avec cp

Dans notre répertoire on a un fichier fichier1.txt et un dossier destination. Pour copier le fichier1.txt dans le dossier destination :

    cp fichier1.txt destination/

Si on reste dans notre répertoire et qu'on l'on souhaite dupliquer notre fichier mais avec un nom différent :

    cp fichier1.txt fichier2.txt

Pour copier un répertoire :

    cp -r destination/ destination2

Le -r est obligatoire. Il indique que l'on souhaite bien copier le dossier avec l'ensemble de son contenu (s'il en a).

## Supprimer des fichiers et des répertoires avec rm

Si on veut supprimer un fichier :

    rm monfichier.txt

Si on souhaite supprimer un dossier :

    rm -r test/