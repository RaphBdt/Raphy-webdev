---
part: 4
id: 15
title: Compiler et exécuter le code

---
Webpack est un **bundler**. il va permettre de compiler notre code en un seul fichier, **gérer nos ressources** (images, styles css...) avec des _loaders_, et va nous permettre de gérer différentes phases d'optimisation : bundler, minifier et transpiler.

## Préparation du terrain

Il faut faire le _npm init_.

Ensuite, il faut **installer Webpack** avec cette commande :

    npm install webpack webpack-cli --save-dev

Le projet de base :

    project
    |- package.json
    |- index.html
    |- src
        |- index.js
        |- query.js

index.html :

    <!doctype html>
    <html>
    <head>
        <title>My project
    </head>
    <body>
        <script src="./dist/app.bundle.js"></script>
    </body>
    </html>

src/index.js :

    import retrieveContent from './query.js';
    
    async function showContent() {
      try {
        const content = await retrieveContent();
    
        let elt = document.createElement('div');
        elt.innerHTML = content.join('<br />');
    
        document.getElementsByTagName('body')[0].appendChild(elt);
      } catch (e) {
        console.log('Error', e);
      }
    }
    
    showContent();

src/query.js :

    export default async function retrieveContent() {
      const url = "https://baconipsum.com/api/?type=all-meat¶s=2&start-with-lorem=1";
    
      const response = await fetch(url);
      return response.json();
    }

Ici, on utilise _fetch()_ avec _await_, car quand il y a des Promise on peut utiliser _async_ / _await_.

## Compilation du projet avec Webpack

Il faut créer le fichier de configuration à Webpack pour savoir comment compiler le projet : _webpack.config.js_ à la **racine**.

webpack.config.js

    const path = require('path');
    
    module.exports = {
      mode: "production",
      entry: {
        app: "./src/index.js"
      },
      output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
      }
    };

Ce fichier indique principalement que Webpack va se servir de _./src/index.js_ comment **point d'entrée** de notre application et bundler notre code dans un fichier final : _./dist/app.bundle.js_. _name_ étant une **variable** qui sera dans notre cas remplacée par _app_ car c'est le nom que l'on a indiqué pour notre fichier _index.js_.

Il faut maintenant **exécuter** Webpack.

Dans le fichier _package.json_

    "scripts": {
        "test": "...",
        "build": "webpack"
    }

Tout ce qui se trouve dans _scripts_ peut être exécuté avec la commande **_npm run script_name_**. Du coup dans notre cas pour exécuter Webpack il faut taper la commande :

    npm run build

Dès lors, un fichier _dist/_ est crée (c'est ici que notre index.html va récupérer le fichier JavaScript). Celui-ci réunit nos deux fichiers JavaScript en un !

On peut faire ça car on utilise **_import_** & **_export_**.

On peut voir dans le fichier _index.js_ qu'on importe le fichier (autrement appelé _module_) _query.js_ sous le nom de _retrieveContent_. Dans le fichier _query.js_, on peut voir qu'on a exporté la fonction _retrieveContent_, ce qui la rend disponible à l'import.

## Transpiler avec Babel

Pou utiliser Babel, il faut l'installer. On a aussi besoin d'installer le **loader** Babel qui permet de l'intégrer à Webpack. Il est en effet possible d'étendre les capacités de Webpack avec des **plugins** et des **loaders**.

    npm install --save-dev babel-loader @babel/core @babel/preset-env babel-polyfill

Il faut ajouter Babel à la configuration de Webpack. Pour ça, il faut ajouter des **rule**, qui sont en fait des règles de Webpack indiquant les loaders à utiliser pour les types de fichiers que l'on souhaite. En gros, dès qu'on importe un module dans notre code, Webpack va regarder dans la liste des _rules_ s'il y en a une qui correspond à tel type de fichier et lui appliquer les loaders qui lui correspondent.

Dans notre cas, on veut exécuter Babel pour tous les fichiers JavaScripts du projet (sauf _node_modules_, car ce sont les dépendances NPM).

webpack.config.js

    const path = require('path');
    
    module.exports = {
      mode: "production",
      entry: {
        polyfill: "babel-polyfill",
        app: "./src/index.js"
      },
      output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"]
              }
            }
          }
        ]
      }
    };

On peut passer des options aux loaders. Ici, on charge le preset de base qui va nous permettre de transpiler notre code.

On a ajouté une entrée dans l'objet _entry_ : _polyfill: "babel-polyfill"_. Cela veut dire qu'au moment de la compilation, deux fichiers seront générés : _index.js_et le polyfill de Babel. Ce dernier permet d'assurer la compatibilité de certains éléments (par exemple _async_ / _await_. Pour prendre en compte ce fichier de polyfill, il faut mettre à jour le fichier _index.html_ afin de le charger aussi (avant notre code) :

    <body>
        <script src="./dist/polyfill.bundle.js"></script>
        <script src="./dist/app.bundle.js"></script>
    </body>

Maintenant, tous les navigateurs vont correctement afficher la page web. Il ne nous reste pas qu'à utiliser de nouveau la commande **_npm run build_**.

## Webpack-dev-server

Trop cool, on a un environnement opti :

* Minification du code
* Possibilité de packager notre code
* Possibilité de séparer très facilement notre code en plusieurs fichiers afin de bien l'organiser.
* Possibilité d'utiliser des bibliothèques grâce à NPM
* Transpiler notre code pour pouvoir utiliser les versions next gen de JavaScipt

Maintenant, on va voir comment avoir un serveur qui va permettre recharger automatiquement notre navigateur à chaque modification !

Il faut installer le module :

    npm install --save-dev webpack-dev-server

Ajouter une nouvelle commande au fichier _package.json_ :

    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack",
        "start": "webpack-dev-server"
    }

_start_ est un peu spéciale car elle est exécutée simplement avec un simple _npm start_.

_webpack-dev-server_ considère que les fichiers générés par Webpack sont à la racine du server, il faut donc mettre à jour le fichier _index.html_.

    <body>
        <script src="/polyfill.bundle.js"></script>
        <script src="/app.bundle.js"></script>
    </body>

Une fois ça fait on peut lancer le serveur de développement avec :

    npm start

Il suffira ensuite de se rendre à l'adresse : http://localhost:8080/

**_TIPS :_** Il y a un problème avec les versions de webpack. Pour que ça marche, dans le fichier _package.json_ dans la partie _scripts_, j'ai dû remplacer _"start": "webpack-dev-server"_ par _"start": "webpack serve"_. [Sujet Stackoverflow](https://stackoverflow.com/questions/40379139/cannot-find-module-webpack-bin-config-yargs).