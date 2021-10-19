---
part: 3
id: 10
title: Utiliser git reset

---
_git reset_ permet de revenir en arrière à n'importe quel commit, elle permet d'annuler des changements.

## Les trois types de réinitialisation de Git

Cette commande peut être appelée de trois façons différentes : **--soft**, **--mixed** et **--hard**.

Schéma git reset :

![Schéma gti reset](https://user.oc-static.com/upload/2021/03/02/16146974090508_p3c3-2.png)

**reset --hard**

Il faut être sûr à 200% avant d'effectuer cette commande :

    git reset notreCommitCible --hard

Cette commande permet de **revenir à n'importe quel commit** mais en oubliant absolument tout ce qu'il s'est passé après !

**reset --mixed**

Cette commande permet de revenir juste après notre dernier commit ou le commit spécifié, sans supprimer les modifications en cours. Dans le cas de fichiers indexés mais pas encore commités, il permet aussi de désindexer les fichiers.

    git reset HEAD~

Si rien n'est spécifié après _git reset_, par défaut, il exécutera un _git reset --mixed HEAD\~_.

Le **HEAD** est un pointeur, une référence sur notre position actuelle dans le répertoire de travail Git.

Il faut savoir que par défaut HEAD pointe sur notre branche courante, main/master, mais peut être déplacé vers une autre branche ou un autre commit. C'est un peu comme notre ombre : elle nous suit où qu'on aille.

**reset --soft**

Cette commande nous permet de se déplacer sur un commit spécifique afin de voir le code à un instant donné, ou de créer une branche en partant d'un ancien commit. Elle ne supprime absolument rien.

## Les conflits

Évidemment, au moment de faire un _git merge_, tout ne se passe toujours comme sur des roulettes... Il y a souvent des conflits !

Si, par exemple, on crée une branche qui améliore une fonctionnalité, mais qui certains fichiers de cette amélioration se trouvent aussi sur la branche principale, alors au moment de merger on va rencontrer des conflits.

Git va voir qu'on essaie de modifier certaines lignes avec des choses différentes. Dès lors, à partir de notre éditeur, il faut déterminer quel code nous devons garder pour indiquer à Git quel code conserver.

Ensuite, il faut dire à Git qu'on a résolu le conflit avec :

    git add [fichier]
    git commit

Git va détecter qu'on a résolu les conflits et vous nous proposer un message de commit (qu'on peut modifier si on le souhaite).

## Ajout d'un mauvais fichier dans un commit

La solution à ce problème est d'utiliser _git revert_ ! Cela permet de revenir à l'état précédent, tout en créant un deuxième commit.

_git reset_ va revenir à l'état précédent sans créer de nouveau commit alors que git revert va créer un nouveau commit.

![Différence git reset /revert](https://user.oc-static.com/upload/2021/02/22/16140095008604_image15.jpg)

Si on fait un commit que nous ne voulons plus, il faut faire la commande :

    git revert HEAD

Une fois notre commit "annulé", on peut enlever le fichier et réaliser un nouveau commit.