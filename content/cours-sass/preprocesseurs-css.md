---
id: 3
title: Les préprocesseurs CSS
---

Grâce aux préprocesseurs, on peut rédiger du code de façon plus cohérente visuellement en utilisant des fonctionnalité comme le **nesting** (imbriquer du code l'un dans l'autre en créant une hiérarchie, comme en HTML).

On passe de ça :

```css
    .nav {
          padding-right: 6rem;
          flex: 2 1 auto;
          text-align: right;
    }
    .nav .nav__link {
          display: inline;
          font-size: 3rem;
          padding-left: 1.5rem;   
    }
    .nav .nav__link .nav__link--active {
          color: #001534;
    }
```

À ça :

```scss
    .nav {
          padding-right: 6rem;
          flex: 2 1 auto;
          text-align: right;
          .nav__link {
              display: inline;
              font-size: 3rem;
              padding-left: 1.5rem;
              .nav__link--active {
                color: #001534;;
              }
          }
    }
```

## Autres fonctionnalités des préprocesseurs

Les variables
```scss
    $mint: #15DEA5;
    .header {
      background-color: $mint
    }
```

Les boucles

```scss
    $colours: (
      mint: #15DEA5,
      navy: #001534,
      seafoam: #D6FFF5,
      white: #fff,
      rust: #DB464B
    );

    @each $colour, $hex in $colours {
      .btn--#{$colour} {
          background-color: $hex;
      }
    }
````

Les conditions

```scss
    @if (lightness(#15DEA5) > 25%) {
          .header {
              color: #fff;
              background-color: $mint;
          }
        
    }@else{
          .header {
            color: #000;
            background-color: $mint;
          } 
    }
```

Ici, nous allons apprendre à utiliser le préprocesseur SASS.