---
part: 5
id: 12
title: Créer son propre thème de conception

---
Maintenant qu'on sait utiliser Bootstrap, on va le personnaliser pour l'adapter à notre projet et pour rendre notre site unique. [Voici des exemples](https://themes.getbootstrap.com/) de ce que l'on peut faire avec Bootstrap.

## Configurer le projet pour pouvoir le personnaliser

Jusqu'à présent, on utilisait les fichiers compilés de Bootstrap CDN. À présent, on va utiliser Sass pour la génération des variables. Pour utiliser Sass avec Bootstrap, ce dernier doit être installé dans notre projet en utilisant **npm**.  
**npm** et **Sass** doivent donc être installés sur notre machine. _J'ai expliqué tout ça dans les chapitres précédents._

La première étape consiste à taper dans le terminal (à la racine du répertoire du projet) :

    npm init

Ensuite on suit les étapes... _Pareil, j'en ai parlé dans les chapitres précédents, ça ne change pas ici._

Il faut maintenant **installer Bootstrap dans notre projet.**

    npm install --save bootstrap

Ceci créée un répertoire **node_modules** qui contient un sous-répertoire **Bootstrap**. Ce dernier contient un dossier **dist** qui contient les fichiers de Bootstrap compilés, ainsi qu'un dossier **scss** dans lequel on retrouve les fichiers sources de Bootstrap.

À la racine du projet, il faut avoir un dossier **scss** et un dossier **css**.  
Dans le dossier scss, il faut créer un fichier **style.scss** et inclure cette ligne de code (pour inclure Bootstrap dans notre projet) :

    @import "../node_modules/bootstrap/scss/bootstrap.scss"

Ensuite, on peut lancer Sass avec :

    sass --watch scss:css

**Attention : Il faut prendre du recul par rapport à tout ça. Le cours sur Sass est plus intéressant à ce niveau. Ici, ce qui nous intéresse au final c'est juste de récupérer Bootstrap dans notre projet pour pouvoir le modifier.**

Ensuite, il ne nous reste plus qu'à déclarer le bon fichier css dans notre _head_ :

    <link rel="stylesheet" href="css/style.css" />

À la place de :

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

## Personnaliser les pages

Pour modifier les valeurs par défaut de Bootstrap, rien de plus simple : il faut se rendre dans le fichier **node_modules/bootstrap/scss/_variables.scss**. Ici, on voit quelles variables on souhaite modifier (elles sont définies à l'aide de l'indicateur **!default**).

Ensuite, il faut donner une nouvelle valeur aux variables dans un fichier nommé **_variable_overrides.scss** qu'on doit créer à la racine du dossier _sass_. Enfin, on doit importer ce dossier et il faut l'importer avant le fichier bootstrap :

    @import "variable_overrides";   // <-- ajouter cette ligne tout en haut du fichier
    @import "../node_modules/bootstrap/scss/bootstrap.scss";

## Modifier les polices

Cela fonctionne exactement de la même façon. Par exemple, si on veut mettre la police Time/Times New Roman serif standard, alors il faut ajouter dans le fichier **_variable_overrides.scss** :

    $headings-font-family: "Times New Roman", Times, serif;

_Rappel : On trouve le nom de cette variable dans le fichier **_variables.scss** de Bootstrap._

## Adapter le thème avec les options Sass

Le fonctionnement des options Sass fonctionne de façon binaire : **true** ou **false**. Par exemple, si on souhaite enlever les bordures sur tous les éléments qui en possèdent, on peut mettre _false_ à la fonction en question :

    $enable-rounded: false !default;

On fait bien les modifications dans le **_variable_overrides.scss**.