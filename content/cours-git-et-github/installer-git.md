---
part: 1
id: 4
title: Installer Git

---
Pour installer Git, il faut se rendre sur [ce lien](https://git-scm.com/downloads).

## Initialiser Git

Pour travailler sur Git, on doit créer un dépôt local, c'est-à-dire un dossier dans lequel toutes nos modifications seront enregistrées. C'est ce qu'on appelle **initialiser un dépôt Git.**

Il faut avant toute chose **configurer notre identité de façon globale**. Pour ça, il faut utiliser l'option _--global_ pour que ce soit appliquer par défaut sur tous nos nouveaux projet (pour utiliser un autre nom d'utilisateur sur un projet spécifique, il faut réécrire la commande sans le _--global_).

    git config --global user.name "John Doe"
    git config --global user.email johndoe@example.com

Pour vérifier tous les paramètres, il faut utiliser la commande :

    git config --list

Pour configurer les couleurs (afin d'améliorer la lisibilité) :

    git config --global color.diff auto
    git config --global color.status auto
    git config --global color.branch auto

Pour configurer l'éditeur et l'outil de merge (permet de fusionner deux parties distinctes du projet :

    git config --global core.editor vim
    git config --global merge.tool vimdiff

Pour créer un dépôt local, il y a deux solutions. La première est de créer un dépôt local vide pour accueillir un nouveau projet et la deuxième est de cloner un dépôt distant (on verra ça plus tard).

Pour créer un dépôt local vide sur notre ordinateur, il suffit de créer un dossier sur notre ordinateur avec le nom du projet. Il faut ensuite ouvrir le terminal à partir de ce dossier et taper la commande suivante pour initialiser un projet Git :

    git init