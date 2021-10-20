---
part: 1
id: 1
title: Configurer environnement de développement

---
Il faut installer le _runtime_ de Node.

## Installer Node

[Cliquer ici pour savoir comment installer npm et Node.js correctement.](file:///Users/raphaelbeaudet/Library/Mobile%20Documents/com\~apple\~CloudDocs/Raphy-webdev/html_css/sass/installer-sass.html) Cela a pour effet d'installer le runtime JavaScript de Node ce qui permet également d'exécuter les serveurs Node. En même temps, ça installe **Node Package Manager** (_npm_).

## Installer Angular

Dans le cadre de ce cours, on va avoir besoin de la **CLI Angular** pour pouvoir faire tourner le serveur de développement sur lequel sera exécuté le code du front-end.

    npm install -g @angular/cli

## Cloner l'application front-end

Créer un répertoire _go-fullstack_.

Créer un sous-repertoire _frontend_. À partir de ce dernier, entrer la commande :

    git clone https://github.com/OpenClassrooms-Student-Center/go-fullstack-fr-frontend.git frontend

On peut ensuite procéder comme suit :

    cd frontend
    npm install
    ng serve

_TIPS :_ Au moment de faire d'installer les dépendances avec _npm install_, j'ai eu un message d'erreur. Pour le corriger, il faut mettre à jour la version des dépendances dans packages.json. "jasmine-core": "\~3.7.1" et "karma-jasmine-html-reporter": "^1.6.0". Sujet Stackoverflow qui m'a bien aidé : [https://stackoverflow.com/questions/67433893/unable-to-resolve-dependency-tree-error-for-creating-new-angular-project](https://stackoverflow.com/questions/67433893/unable-to-resolve-dependency-tree-error-for-creating-new-angular-project "https://stackoverflow.com/questions/67433893/unable-to-resolve-dependency-tree-error-for-creating-new-angular-project")

Après avoir tapé la commande _ng serve_, on a accès à l'application avec le lien http://localhost:4200.

Enfin, il faut créer un dossier _backend_ à l'intérieur du répertoire _go-fullstack_.

Il faut que le terminal effectuant _ng serve_ soit toujours actif comme ça notre code est actualisé en temps réel.