---
part: 2
id: 7
title: Les branches

---
Les branches correspondent à des copies de notre code principal à un instant T, où on peut tester nos idées sans impacter notre code principal.

Sous Git, la branche principale est appelée **main** (ou master si le dépôt est créé avant octobre 2020).

Il ne faut pas faire de modifications directement sur la branche main, mais sur d'autres branches et après divers tests on peut les intégrer sur la branche main.

L'idée c'est vraiment de **ne pas toucher à notre application en cours de production** et de créer une branche si on veut faire des tests ou une nouvelle fonctionnalité par exemple.

Pour connaître les branches présentes dans notre projet :

    git branch

**L'idéal est de créer une branche par fonctionnalité (si celle-ci est assez conséquente).**

Pour créer une branche (exemple fonctionnalité de cagnotte) :

    git branch cagnotte

Cette nouvelle branche n'est dans un premier temps pas dupliquée sur le dépôt distant.

Pour changer de branche :

    git checkout cagnotte

Dès lors, quand on est sur la branche cagnotte, toutes nos modifications n'impactent pas main et inversement.

## Réaliser un commit

Pour demander à git d'enregistrer les modifications sur notre nouvelle branche, il faut faire un commit :

    git commit -m “Réalisation de la partie cagnotte côté front end”

## Push de la nouvelle branche

Maintenant que le commit est fait, on peut envoyer les modifications réalisées sur le dépôt distant :

    git push -u origin cagnotte

## Fusionner le travail avec git merge

Dès qu'on a entièrement terminé de développer notre fonctionnalité, on peut intégrer la branche en question à la branche main.

Pour ça, on doit utiliser la commande "_git merge_" à partir de la branche dans laquelle on veut apporter les évolutions.

Dans la branche main :

    git merge cagnotte