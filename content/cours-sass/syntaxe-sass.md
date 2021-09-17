---
id: 4
title: Syntaxe Sass
---

Le navigateur ne comprend pas SASS. Il doit donc être par la suite transformé en CSS.
On peut dans un premier temps utiliser <a href="https://codepen.io">Codepen</a> car sait s'occuper de cette conversion.
Il existe deux types de fichier : *.sass* et *.scss*. Il y a une différence de syntaxe entre les deux : *.scss* ressemble au CSS, tandis que *.sass* simplifie les choses car on utilise pas d'acolades.

.scss :

```scss
.navbar-content {
      color: white;
      background-color: white;
}
```

.sass :

```sass
.navbar-content
    color: white
    background-color: black
```

Il est beaucoup plus fréquent de tomber sur du *.scss*. Nous allons donc à partir de maintenant toujours utiliser cette syntaxe, même si nous l'appelons SASS.

## Le nesting

Grâce à SASS, on peut imbriquer des sélecteurs, autrement dit, les nester.

```scss
ul {
      list-style: none;
      text-align: right;
      li {
          display: inline;
          font-size: 3rem;
          color: #D6FFF5;
      }
}
```

On bénéficie désormais d'une syntaxe plus propre et plus maintenable.