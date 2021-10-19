---
part: 1
id: 1
title: Découvrir le contrôle de versions

---
## Qu'est-ce qu'un gestionnaire de versions ?

**Un gestionnaire de version (en anglais _versioning_) est un programme qui permet aux développeurs de conserver un historique des modifications et des versions de tous leurs fichiers.**

Le gestionnaire de versions garde en mémoire :

* chaque modification de chaque fichier ;
* pourquoi elle a eu lieu ;
* et par qui !

Dès lors si on est seul, on peut garder l'historique de nos modifications ou revenir à une version précédente. En équipe, cela permet aussi de **fusionner**les modifications des personnes qui travaillent simultanément sur un même fichier.

Le gestionnaire de versions a donc trois grandes fonctionnalités :

* Revenir à une version précédente en cas de problème
* Suivre l'évolution du code étape par étape
* Travailler à plusieurs sans risquer de supprimer les modifications des autres

Quant à nous, nous allons utiliser le gestionnaire de versions le plus populaire : **Git**.

C'est un programme qui a une structure **décentralisée**. Cela signifie que l'historique du code n'est pas conservé dans un unique emplacement, mais que chaque copie du code effectuée correspond à un nouveau dépôt dans lequel est conservé l'historique des modifications.

## L'utilité de Git dans le travail d'équipe

L'avantage du contrôleur de versions est que chaque membre peut modifier les fichiers, envoyer et recevoir des mises à jour. Il n'y a aucun risque d'écraser les modifications de l'autre. **Quand l'équipe regroupe toutes leurs parties du code, leurs versions précédentes sont archivés.**

## Différence entre Git et GitHub

**Git est un gestionnaire de versions.** On l'utilise pour créer un dépôt local et gérer les versions des fichiers.

**GitHub est un service en ligne** qui va héberger notre dépôt. On parle de **dépôt distant** puisqu'il n'est pas stocké localement.

Avec Git, on prépare notre code. Acec GitHub, on stocke notre code.