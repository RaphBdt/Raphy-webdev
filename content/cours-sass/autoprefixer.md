---
part: 3
id: 19
title: Autoprefixer

---
Certaines propriétés CSS s'affichent différement selon les navigateurs. Grâce à Autoprefixer, nous allons pallier à ça.

Par exemple, au moment où flexbox n'était pas généralisé, chaque navigateur avait sa façon d'interpréter les flexbox... Pour avoir un site visible par tous, il fallait faire tout ce code :

    .header {
    display: -webkit-box;
    
     display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    }

_webkit_ est pour Chrome et Safari, _ms_ pour Microsoft, _moz_ pour Firefox.

Autoprefixer va nous permettre d'ajouter **automatiquement** des préfixes dans notre CSS pour être sur que notre site soit visible sur tous les navigateurs (il faut juste lui fournir une feuille CSS et il s'occupe du reste).

## Installer Autoprefixer

On doit installer **Autoprefixer**, **PsstCSS** et **PostCSS-CLI** avec _npm_.

Pour installer les trois d'un coup (une fois installé sur l'ordinateur on a plus besoin de toucher aux packages) :

    npm install autoprefixer postcss postcss-cli -g

Ensuite, dans package.json, partie "scripts", on doit dire où est notre principale feuille de style (style.css), et dire où est-ce qu'il placera la nouvelle feuille CSS préfixée :

    "scripts": {
      "sass": "sass ./sass/main.scss:./public/css/style.css -w --style compressed",
      "prefix": "postcss ./public/css/style.css --use autoprefixer -d ./public/css/prefixed/"
    },

Enfin, grâce à la clé json **browerslist**, on indique le nombre d'anciennes versions de navigateurs à remonter. Par exemple, si on veut préfixer pour les quatre dernières (sans compter celle sur laquelle on est actuellement) de chaque navigateur :

    [...]
    "author": "",
    "license": "ISC",
    "browserslist": "last 4 versions"
    }

Enfin, il ne nous reste plus qu'à lancer autoprefix :

    npm run prefix

Et voilà, notre site web sera désormais compatibles avec les 4 anciennes versions de navigateurs !

Petite précision : Si par exemple flexbox n'est pas compatible avec une certaine version d'un navigateur, alors autoprefixer n'aura pas la capacité d'utiliser des propriétés différentes. **Les préfixes garantissent que les différentes implémentations d’une même propriété seront appelées dans leurs navigateurs respectifs.**