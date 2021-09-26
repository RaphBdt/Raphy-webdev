---
part: 3
id: 15
title: Installer Sass

---
_Étape 1 :_ Ouvrir le dossier de notre site sur VS Code et ouvrir le terminal.

_Étape 2 :_ Initialiser un fichier npm package.json. Pour cette étape, il faut installer **npm** et donc d'abord télécharger node.js **(ce n'est pas si simple sur Mac, j'y reviens après)**.  
Maintenant, on peut installer le **package.json**. Ce fichier stocke les informations sur notre projet : nom, numéro de version, auteur, info de licence, dépendances externes... Il liste les **packages** (aussi appelés **dépendances**) nécessaires pour faire fonctionner notre code. Aussi appelés **librairies**, ce sont des collections de code qu'on peut utiliser pour exécuter notre propre code et donc gagner du temps (au lieu d'écrire nos fonctions nous-même).  
Il est temps de créer un fichier package en tapant **npm init** dans le terminal. Ensuite, il suffit de compléter les instructions (si on tape "entrer" ça met la valeur entre parenthèse par défaut et s'il n'y a pas de parenthèse ça laissera le champ vide). Il ne faut dans un premier temps pas se soucier du _repository git_.  
Et là, un fichier package.json est apparu. On peut d'ailleurs directement modifier les informations dans celui-ci.

    {
        "name": "writting-sass",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC"
    }

À mesure qu'on installera des packages (ou librairies), ils apparaîtront parmis les objets de dépendance. Exemple :

    "dependencies": {
        "bootstrap": "4.2.1",
    }

_Étape 3 :_ Installer Sass grâce à la commande **npm install sass -g**. Le _-g_ signifie "global" ce qui indique à npm d'installer le package globalement, c'est à dire sur l'ensemble de la machine (on n'aura plus à installer Sass).

Enfin, pour vérifier qu'on a bien Sass d'installé : **sass --version**.

## Mettre en route Sass

Dans notre fichier _package.json_, on peut enlever le test dans la partie script et le remplacer par Sass :

    {
        "name": "writting-sass",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
          "sass": "sass --watch ./sass/main.scss:./public/css/style.css"
        },
        "author": "",
        "license": "ISC",
    }

Ce qui est important à retenir, c'est qu'on indique l'emplacement du fichier main.sass et l'emplacement du fichier qu'on souhaite compiler.

On peut désormais lancer Sass grâce à **npm run sass** ! _npm_ indique qu'on veut exécuter une commande npm, _run_ c'est la commande et _sass_ est le nom du script qu'on veut exécuter.

Sass se tiendra désormais au courant de nos moindre modifications. Pour arrêter Sass, il faut faire **Ctrl+C** dans le terminal.

## Les différents modes de compilation

Quatre modes de compilation :

* _nested :_ Mode de compilation par défaut.
* _expanded :_ Ressemble au CSS qu'on aurait rédigé automatiquement.
* _compact :_ Il traduit le CSS avec un ensemble de règles par ligne.
* _compressed :_ CSS minifié aui maximum, c'est le mode de compilation recommandé quand on exporte sur le web.

## Compresser notre CSS

Pour choisir un mode de compilation, il faut ajouter à la fin du script **--style, suivi du style dans lequel on veut compiler**.

    "scripts": {
      "sass": "sass --watch ./sass/main.scss:./css/style.css --style compressed"
    },   

Ne pas oublier de relancer Sass pour que le changement soit pris en compte.

## Installer correctement le fucking npm / node.js sur un fucking Mac

Bon, Mac > PC certes, mais par contre il ne faut pas installer node.js et npm sur le site officiel. Il y a plein de bordel de droits d'accès aux packages et je n'ai toujours pas trouvé la solution pour que tout ça fonctionne correctement.  
Mais ce n'est pas grave ! Sur Mac, on dispose d'un installateur de packets appelé [Homebrew](https://brew.sh/index_fr) et il nous permet d'installer correctement node.js et npm. Dans un premier temps, il faut s'assurer d'avoir Xcode (on peut vérifier sur l'App Store Mac) et avoir Xcode sur notre terminal, pour ça il faut juste tapper **xcode-select --install**. Il y a ensuite une histoire comme quoi il faut accepter la politique de confidentialité et pour ça il faut juste copier / coller une ou deux fois la commande qu'ils nous proposent (au moment où j'ai installé pour la première fois Homebrew mais du coup normalement ça ne le demande qu'une seule fois).  
Ensuite, comme indiqué sur le site de Homebrew, il faut taper dans le terminal : **/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"**. À un moment on doit entrer le mot de passer administateur et appuyer sur "retour".  
Et là, si on est sur M1 il y a un petit truc qui merde... Ca nous dit en gros que Homebrew n'a pas réussi à s'installer au bon endroit. Pour résoudre le problème, dans le répertoire du nom d'utilisateur de l'administrateur du Mac, il faut créer un fichier **.zshrc** et mettre dans ce fichier **export PATH=/opt/homebrew/bin:$PATH**. Et là ce petit problème est corrigé. Le sujet Stackoverflow qui m'a aidé à résoudre le soucis : [https://stackoverflow.com/questions/65487249/getting-a-warning-when-installing-homebrew-on-macos-big-sur-m1-chip](https://stackoverflow.com/questions/65487249/getting-a-warning-when-installing-homebrew-on-macos-big-sur-m1-chip).  
Dernière étape : installer node.js et npm. Pour ça, il faut juste tapper **brew install node**.  
Désormais, on peut installer et utiliser Sass correctement grâce à npm. Voici la vidéo qui m'a aussi bien aidé : [https://www.youtube.com/watch?v=BIVfpvPnU0U](https://www.youtube.com/watch?v=BIVfpvPnU0U).