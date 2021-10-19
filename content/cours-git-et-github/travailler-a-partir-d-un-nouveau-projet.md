---
part: 2
id: 5
title: Travailler à partir d'un nouveau projet

---
## Le fonctionnement de Git

Le fonctionnement de Git est composé de 3 zones.

**Le working directory :**

Cela correspond au dossier du projet sur notre ordinateur.

**Le Stage ou index :**

Représente tous les fichiers modifiés qu'on souhaite voir dans notre prochaine version de code.

**Le Repository :**

Il s'agit d'une nouvelle version d'un projet.

Ces 3 zones sont présentes sur l'ordinateur, en local.

_Cas concret :_

On a un projet avec 3 fichiers : fichier1, fichier2 et fichier3. Depuis le working directory, on fait une modification sur fichier 1, puis une autre sur fichier2. Maintenant, on veut sauvegarder cette version grâce à Git (le stocker dans le repository).   
Pour commencer, il faut **indexer (= stage)** fichier1 et fichier2. Une fois les fichiers indexés, on peut créer une nouvelle version du projet.

## Initialiser un dépôt

Autre cas concret : on a un répertoire où on a fait un _git init_ et on vient d'ajouter un fichier _index.html_ et un _style.css_. On souhaite maintenant créer une nouvelle version de notre projet. Il faut donc indexer les fichiers. Pour ça :

    git add index.html
    git add styles.css

Les deux fichiers sont maintenant dans le stage !

Maintenant, on veut créer une nouvelle version en passant ces fichiers dans le repository :

    git commit -m “Ajout des fichiers html et css de base”

On vient de faire un commit avec un message descriptif. Le "-m" permet de taper ce message directement dans le terminal sans avoir besoin d'ouvrir un éditeur.

L'objectif est maintenant d'envoyer notre commit sur le dépôt distant ! On dit qu'il faut "pusher" notre commit.

Dans un premier temps, il faut "relier" le dépôt local au dépôt distant (qui est déjà créé sur GitHub). Pour ça, il faut aller dans le repository créé sur GitHub, copier le lien qu'il nous donne, puis taper la commande suivante (avec le lien précédemment copié) :

    git remote add origin [lien]

Il faut enfin taper la commande suivante :

    git branch -M main

Et voilà c'est tout bon ! Le dépôt local est maintenant relié au dépôt distant. On peut envoyer des commits du repository vers le dépôt distant GitHub avec la commande suivante :

    git push -u origin main

C'est bon, on a bien envoyé le code de notre commit vers le dépôt distant !

Maintenant, imaginons que l'on souhaite simplement changer le titre h1 de l'_index.html_, alors il faut :

\#1 Indexer le fichier :

    git add index.html  

\#2 Créer une nouvelle version :

    git commit -m “Modification du titre H1”

\#3 Envoyer la nouvelle version sur le dépôt distant :

    git push origin main

Et c'est tout bon !

Voici une image qui résume tout :

![Schéma Git](https://user.oc-static.com/upload/2021/03/08/16152280847683_GIT_2.png)