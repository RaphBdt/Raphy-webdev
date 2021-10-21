---
part: 4
id: 13
title: Optimiser le code

---
## Linter, minifier, bundler, transpiler

### Linter

Le _linter_ est un programme qui va **analyser** notre code et **détecter** les erreurs de syntaxe, les variables non utilisées, les variables qui n'existent pas, la mauvaise organisation du code, le non-respect des bonnes pratiques d'écriture de code...

Ressources : [JSLint](https://www.jslint.com/), [ESLint](https://eslint.org/)

### Minifier

Programme qui va essayer de rentre notre **code le plus léger possible**, en retirant les espaces, les retours à la lignes inutiles, en renommant nos variables avec des noms plus courts...

Ressources : [node-minify](https://github.com/srod/node-minify), [UglifyJS](https://github.com/mishoo/UglifyJS#readme)

### Bundler

**Il est important de réduire au maximum le nombre de fichiers qui composent notre code.** En effet, si le navigateur n'a besoin de charger qu'un seul fichier, notre application web sera beaucoup plus rapide à charger.

Ressource : [Webpack](https://webpack.js.org/)

### Transpiler

Pour coder avec la dernière version de JavaScript tout en étant **compatible** avec tous les navigateurs, il faut utiliser un _transpiler_.

Ressource : [Babel](https://babeljs.io/)