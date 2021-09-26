---
part: 3
id: 14
title: Système 7-1

---
Sass permet de séparer notre code en fichiers séparés pour le catégoriser et l'organiser.

Pour ordonner tous ces fichiers, on peut utiliser le **système 7-1**. Le "7" correspond aux sept dossiers pour ranger nos fichiers.

Voici l'organisation du système 7-1 (tips : on peut les créer rapidement depuis le terminal grâce à la commande _mkdir \[nom du dossier\]_) :

* **base/ :** contient les fichiers qui définissent les fondations de notre site. _Exemple :_ Police de caractères, les normes qui s'appliquent sur tout le site (box-sizing)...
* **utils/ :** variables, fonctions, mixins et %placeholders pour les extensions (si on en utilise).
* **layouts/ :** dossier où on met les blocs BEM qui contiennent ce qui est réutilisable. _Exemple :_ un header pour les mises en page de grande taille, un footer...
* **components/ :** dossier où on met les blocs BEM indépendants. _Exemple :_ un formulaire va dans le dossier layouts car il utilise d'autres blocs pour fonctionner. Par contre, un bouton est indépendant et peut donc être placé dans components.
* **pages/ :** contient les blocs de code qui ne s'appliquent qu'à une seule page. _Exemple :_ un bloc de citation sur la page d'accueil, une grille de projets sur la page réalisations...
* **themes/ :** on stocke ici le code thématique. _Exemple :_ un style customisé pour Noël ou pour l'été.
* **vendors/ :** on stocke ici les feuilles de style externes. _Exemple :_ Bootstrap, jQuery UI...

## Réorganiser les fichiers

Cas concret : pour ranger nos variables, on créé un fichier __variables.scss_ qu'on met dans le dossier _utils_. L'underscore devant le nom du fichier signifie qu'il s'agit d'un **fichier individuel**. En effet, ici notre fichier est individuel car il fait partie d'une codebase globale. Sass appelle les fichiers individuels **les partiels**.

    $color-primary: #15DEA5;
    $color-secondary: #001534;
    $color-accent: #D6FFF5;
    $color-white: #fff;
    $color-invalid: #DB464B;
    
    $heading-shadow-size: .55rem;
                

Maintenant, il faut déclarer à Sass où se trouve nos variables. Pour ça, dans le fichier _main.scss_, qui se trouve à la racine de tous les dossiers, il faut indiquer :

    @import "./utils/variables";
                

À noter : Le (.) indique à Sass que le chemin commence dans le même dossier que main.scss. **On utilise pas d'underscore ni d'extension de fichier lorsqu'on indique dans le chemin le nom du fichier du partiel.**

**Attention :** lors de l'import des fichiers, si, par exemple, on importe d'abord le formulaire (_@import "./layouts/form";_) puis les variables (_@import "./utils/variables";_) alors on aura une erreur car notre formulaire utilise des variables. Cela veut dire qu'il faut d'abord déclarer les variables dans le _main.scss_.

D'une manière générale, voici quel ordre il faut adopter lors de l'import :

* Utils (1 : Variables, 2 : Fonctions, 3 : Mixins, 4 : Placeholders)
* Vendors
* Base
* Composants
* Layout
* Pages
* Thèmes

Une fois l'emble du code bien séparé en partiels et importé, le fichier _main.scss_ ne doit contenir que des imports.

    @import "./utils/variables";
    @import "./utils/functions";
    @import "./utils/mixins";
    @import "./utils/extensions";
    @import "./base/base";
    @import "./base/typography";
    @import "./components/buttons";
    @import "./layouts/header";
    @import "./layouts/nav";
    @import "./layouts/container";
    @import "./layouts/form";
    @import "./pages/work";
    @import "./pages/about";
    @import "./pages/project";