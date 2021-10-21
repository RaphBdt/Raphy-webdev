---
part: 4
id: 14
title: Gérer les dépendances

---
On connaît les outils pour optimiser le développement, mais il faut maintenant savoir comment en profiter.

## NPM

NPM est un **gestionnaire de paquets**. C'est un programme qui permet d'installer facilement des modules pour le JavaScript, dont ceux dont on a parlé dans le chapitre précédent. Un module est écrit par un développeur et permet de répondre à une problématique commune.

NPM est compris dans Node.js, un programme qui permet d'écrire des applications en JavaScript. Il suffit donc de se rendre sur [la page de téléchargement de Node.js](https://nodejs.org/en/).

## Initialiser son projet

NPM a besoin d'un fichier _package.json_ afin d'avoir des informations sur le projet : nom, version, modules à installer...

Pour créer ce fichier, il faut entrer dans le terminal :

    npm init

## Installer un module

Pour installer un nouveau module, il suffit de faire :

    npm install module_name --save-dev

_--save-dev_ signigie que l'on souhaite que NPM sauvegarde cette dépendance dans le fichier _package.json_ en tant que dépendance de développement. Il existe aussi _--save_ qui ajoute la dépendance en tant que dépendance de production.

Quand on récupère pour la première fois un projet depuis un repository git, on peut installer toutes les dépendances ajoutées dans le fichier _package.json_ du projet en question :