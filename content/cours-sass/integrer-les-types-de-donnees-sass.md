---
part: 3
id: 16
title: Intégrer les types de données Sass

---
## Les listes

**Une liste** est tout simplement une liste de valeurs (utile quand par exemple on veut un padding avec quatre valeurs différentes). Son écriture est très flexible :

    /* Les quatre syntaxes fonctionnent */
    $syntax-01: 1rem 2rem 3rem 4rem;
    $syntax-02: 1rem, 2rem, 3rem, 4rem;
    $syntax-03: (1rem 2rem 3rem 4rem);
    $syntax-04: (1rem, 2rem, 3rem, 4rem);
    
    .syntax-01 {
        padding: $syntax-01;
    }

Cela fonctionne comme un tableau, par exemple on peut utiliser uniquement la dernière valeur pour indiquer une taille de police :

    $font-size: 7rem 5rem 4rem 2rem;
    .form{
      &__field {
          & label {
            font-size: nth($font-size, 4);
          }
      }
    }

Et oui, Sass n'a pas de case 0 dans son tableau contrairement aux autres langages de programmation...

## Les maps

les listes sont assez difficiles à lire et ne sont pas explicites. C'est pour ça qu'il existe les meps !

    $font-size: (logo:7rem, heading:5rem, project-heading:4rem, label:2rem);

Pour accéder à une valeur, il faut utiliser **map-get()**. Cette fonction nécessite deux arguments : le nom de la map (exemple : $font-size) et le nom de la clé (exemple : label).

    font-size: map-get($font-size, label);

On peut même aller encore plus loin et mettre des maps dans des maps...

    $colour-primary: #15DEA5;
    $colour-secondary: #001534;
    $colour-accent: #D6FFF5;
    $colour-white: #fff;
    $colour-invalid: #DB464B;
    $txt-input-palette: (
      active: (
          bg: $colour-primary,
          border: $colour-primary,
          txt: $colour-white,
      ),
      focus: (
          bg: $colour-primary,
          border: $colour-primary,
          txt: $colour-white,
      ),
      invalid: (
          bg: $colour-invalid,
          border: $colour-white,
          txt: $colour-white,
      )
    );

Pour déployer ces palettes, on peut utiliser une mixin :

    @mixin txt-input-palette($state) {
      $palette: map-get($txt-input-palette, $state);
      border: .1rem solid map-get($palette, border);
      background-color: map-get($palette, bg);
      color: map-get($palette, txt);
    }

Et il ne nous reste plus qu'à appeler notre mixin dans le CSS (en mettant bien l'argument que nous souhaitons).

    .form {
      &__field {
          & input {
            @include txt-input-palette(focus);
          }
      }

On a désormais un code plus que jamais maintenable et simple à lire.

En résumé, les maps ressemblent aux listes, sauf que chaque valeur réçoit un nom qu'on appelle une **clé** et une clé peut recevoir n'importe quel type de données (même d'autres listes et maps).