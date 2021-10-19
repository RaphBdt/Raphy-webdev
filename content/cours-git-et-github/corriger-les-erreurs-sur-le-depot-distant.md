---
part: 3
id: 9
title: Corriger les erreurs sur le dépôt distant

---
## Corriger les erreurs en local et à distance

Immaginons qu'on push sur GitHub un commit qui comporte des des fichiers avec des erreurs...

Premièrement, il faut avertir ses collègues dans le cas où il y a plusieurs personnes sur le projet.

Il est également possible d'annuler son commit public avec la commande **git revert**. Cette commande annule un commit en créant un nouveau commit. Il s'agit donc d'une méthode sûr, car elle n'a aucun impact sur l'historique.

    git revert HEAD^

Dès lors, il faut mieux utiliser _git revet_ pour annuler des changements apportés à une branche publique et _git reset_ pour faire de même, mais dans le cas d'une branche privée.

**Il faut garder à l'esprit que _git revert_ sert à annuler des changements commités, tandis que _git reset HEAD_ permet d'annuler des changements non commités.**

Néanmoins attention, car _git revert_ peut effacer nos fichiers dans le répertoire de travail ! Il faut donc les commit ou faire une remise.

## L'accès à distance ne fonctionne pas

Si l'accès à distance ne fonctionne pas, cela peut être à cause d'un problème d'authentification de notre réseau. Pour le résoudre, il faut créer une paire de **clés SSH**. Cette dernière permet d'assurer une connexion sécurisée entre notre réseau et un dépôt distant sécurisé. C'est très utile quand on a besoin de s'authentifier sur une machine tierce, car ça nous évite d'avoir à nous identifier systématiquement.

Générer une clé SSH :

    ssh-keygen -t rsa -b 4096 -C "contact@example.com"

Ensuite, il faut appuyer sur Entrer et taper deux fois un nouveau mot de passe.

Après, il faut se rendre dans le répertoire indiqué.

Dans celui-ci, il y a deux fichiers : l'un avec notre clé privée (id_rsa.txt) et un contenant notre clé publique (id_rsa.pub)

Il faut ouvrir le fichier .pub est copier la clé. Il faut maintenant aller sur GitHub > cliquer sur l'avatar > Settings > SSH and GPG keys > New SSH Key > New SSH key > Choisir un titre et coller la clé publique > Enfin, il faut confirmer le mot de passe. La clé est désormais associée à notre compte GitHub.