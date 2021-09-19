---
id: 5
title: Les combinateurs
part: 1
---

```css
// COMBINATEUR PARENT
.parent {
      background-color: #15DEA5;
}

// COMBINATEUR DESCENDANT
.parent .descendant {
      color: #fff;
}

// COMBINATEUR PARENT > ENFANT
.parent > .child {
      color: #D6FFF5;
}

// COMBINATEUR ADJACENT
.parent + .adjacent {
      color: #001534;
}
```

Dans le troisième cas, si le deuxième élément est un enfant du premier, alors il adoptera une couleur spécifique
Dans le quatrième cas, si le deuxième élément est immédiatement précédé du premier, alors il adoptera la couleur spécifiée.
Différence entre enfant et descendant : c'est comme en français : je suis l'enfant de mes parent mais pas l'enfant de mes grands-parents. Je suis le descendant de mes parents et de mes grands-parents.

En SASS :

```scss
    .parent {
          background-color: #15DEA5;
          .descendant {
              color: #fff;
          }
          >.child {
              color: #D6FFF5;
          }
          +.adjacent {
              color: #001534;
          }
    }
```

## L'esperluette

Quand on veut utiliser une pseudoclass (tel que *:hover*), on doit utiliser l'esperluette &. Cela permet de concaténer le sélecteur parent avec le pseudosélecteur.

```scss
ul {
    list-style: none;
    text-align: right;
    li {
        display: inline;
        font-size: 3rem;
        color: #D6FFF5;
        &:hover {
            color: #001534;
        }
    }
}
```

## Ne pas abuser du nesting
En pratique, si on imbrique au delà de deux niveaux de profondeur, on doit se questionner sur la façon dont a été fait notre code car il y a des chances que ce soit trop spécifique.