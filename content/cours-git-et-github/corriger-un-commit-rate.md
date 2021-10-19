---
part: 3
id: 11
title: Corriger un commit raté

---
Git dispose de techniques de **journalisation**. La journalisation désigne l'enregistrement dans un fichier ou une base de données de tous les éléments affectant une application. Le journal désigne le fichier contenant ces enregistrements.

## Git reflog

La commande :

    git log

fait apparaître les commits les plus récents en premier. Cette commande afficher chaque commit avec son **identifiant SHA**, l'auteur du commit et la date et le message du commit.

_Le SHA c'est le long code qui nous permet de revenir en arrière sur un commit précis._

Il existe un outil encore plus puissant : **git reflog**

    git reflog

Celui-ci est encore plus complet que _git log_, car il va afficher vraiment TOUT ce qu'on a pu faire en local : modifications de message, nos merges, resets... Il affiche lui aussi un identifiant SHA, grâce à qui on peut revenir très facilement à une action précise (en prenant juste les 8 premiers caractères du code). C'est donc un joker très intéressant en cas d'erreur.

    git checkout e789e7c

## Git blame

La commande _git blame_ permet d'**examiner le contenu d'un fichier ligne par ligne** .

    git blame monFichier.php

Cette commande affiche pour chaque ligne modifée :

* son ID
* l'auteur
* l'horodatage
* le numéro de la ligne
* le contenu de la ligne

## git cherry-pick

Dans le cas de projets très conséquents et spécifiques, il est possible de ne pas vouloir merger une branche entière mais d'avoir seulement besoin d'un ou deux commits spécifiques. Ce processus s'appelle **cherry-pick**.

Ce processus n'est en réalité pas très apprécié dans la communauté des développeurs, car elle duplique **des commits existants**. C'est bien de la connaître mais il faut privilégier _git merge_.

Cas concret : sur la branche "Mes évolutions", on a seulement besoin de montrer au client une seule évolution, mais pas toutes les autres, alors on peut faire un cherry-pick de un ou deux commit sur la branche principale (encore une fois grâce aux identifiants SHA et il faut bien évidemment se situer sur la branche où on souhaite dupliquer les commits) :

    git cherry-pick d356940 de966d4

Ici, les commits sont donc dupliqués sur la branche master, mais il sont également toujours conservé sur la branche "Mes évolutions", car cherry-pick duplique les commits.