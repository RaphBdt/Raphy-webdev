---
part: 3
id: 8
title: Pratiquer et corriger les erreurs sur un dépôter local

---
Rappel : avant de créer une branche, il faut au minimum indexer un fichier puis le commiter.

Dans le cas où on utilise l'éditeur pour écrire le message d'un commit, on peut quitter l'éditeur et sauvegarder le message en tapant : _:x_.

Pour supprimer une branche :

    git branch -d brancheTest

Si on a déjà fait des modifications dans la branche qu'on souhaite supprimer, on peut utiliser la commande suivante :

    git branch -D brancheTest

La suppression de cette branche entraînera la suppression de tous les fichiers et modifications que nous n'aurions pas commités sur cette branche.

## Modification de la branche principale par erreur

**Dans le cas où nous avons ajouté un élément, non indexé encore, sur notre branche principale par erreur et que nous voulons transférerer ces modifitcations sur une autre branche :**

Premièrement, on peut regarder ce qui a été modifié avec :

    git status

Ensuite, on doit faire "**une remise**" :

    git stash

Si on refait _git status_, alors on ne voit plus rien.

Maintenant, il faut créer ou se déplacer sur la branche sur laquelle on souhaite appliquer notre remise et faire :

    git stash list

Cela donne la liste de toutes les remises en attente, ensuite on a juste à en choisir une et taper la commande suivante :

    git stash apply stash@{0}

**Maintenant, dans le cas où on a fait des modifications sur la branche principale et qu'en plus on a commité :**

Regardons l'ensemble de nos derniers commits avec (triés par ordre chronologique inversé) :

    git log

Récupérons l'identifiant du commit (aussi appelé clé de _hash_).

Maintenant, supprimons nle commit de notre branche en question :

    git reset --hard HEAD^

Le _HEAD^_ indique que c'est bien le dernier commit que nous voulons supprimer.

Déplaçons nous maintenant sur la branche sur laquelle on souhaite on souhaite appliquer le commit et appliquons le :

    git reset --hard ca83a6df

Il faut bien évidemment mettre la bonne clé de hash en question (seuls les 8 premiers caractèrent suffisent).

## Le dernier message de mon commit est erroné

Si on vient de faire un commit et qu'on souhaite modifier son message :

    git commit --amend -m "Votre nouveau message de commit"

## J'ai oublié un fichier dans mon dernier commit

Dans ce cas, il faut encore utiliser la commande _git --amend_. Elle permet en fait de modifier le dernier commit.

Les deux étapes pour ajouter un fichier à notre dernier commit sont :

    git add FichierOublie.txt
    git commit --amend --no-edit

Le _--no-edit_ indique qu'on a pas besoin de modifier le message du dernier commit.

La commande _git commit --amend_ est utile pour d'autres choses à propos de notre dernier commit.