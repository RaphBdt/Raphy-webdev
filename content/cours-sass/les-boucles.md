---
part: 3
id: 17
title: Les boucles

---
Syntaxe pour écrire une boucle dans Sass :

    @each $key, $value in $map {
    }

**$key** et **$value** sont les éléments que l'on déclare. **$map** est l'endroit où on va les cherche. Cela donne : _"pour chaque $key et $velue dans cette $map"._

## Utiliser les maps grâce avec les boucles

Petit rappel de la map qu'on avait fait au cours précédent :

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

On s'en était servi pour créer des inputs de texte. Avec les boucles, on peut facilement générer les trois états des inputs (active, focus et invalid) :

    @mixin txt-input-palette($palettes) {
      @each $state, $palette in $palettes{
          border: .1rem solid map-get($palette, border);
          background-color: map-get($palette, bg);
          color: map-get($palette, txt);
      }
    }
    .form {
      &__field {
          & input {
            @include txt-input-palette($txt-input-palette);
          }
      }
    }

Sauf qu'en réalité ça ne donne pas ce qu'on attend...

    .form__field input {
        border: 0.1rem solid #15DEA5;
        background-color: #001534;
        color: #15DEA5;
        border: 0.1rem solid #15DEA5;
        background-color: #15DEA5;
        color: #fff;
        border: 0.1rem solid #15DEA5;
        background-color: #15DEA5;
        color: #fff;
        border: 0.1rem solid #fff;
        background-color: #DB464B;
        color: #fff;
    }

Et c'est normal. On ne spécifie à aucun moment l'état de l'input dans notre boucle. En réalité, on devrait avoir trois blocs de code ! La solution est donc d'utiliser l'esperluette (&) pour avoir le code attendu. On doit également utiliser la **syntaxe d'interpolation** ➡️ **#{variable}** (= substitution d'une variable, et oui : on doit bien savoir l'état de l'input dans notre boucle).

    @mixin txt-input-palette($palettes) {
      @each $state, $palette in $palettes{
          &:#{$state}{
            border: .1rem solid map-get($palette, border);
            background-color: map-get($palette, bg);
            color: map-get($palette, txt);
          }
      }
    }
    .form {
          &__field {
              & input {
                @include txt-input-palette($txt-input-palette);
              }
          }
    }

Et désormais nous avons le résultat attendu dans notre .css :

    .form__field input:active {
        border: 0.1rem solid #15DEA5;
        background-color: #15DEA5;
        color: #fff;
    }
    .form__field input:focus {
        border: 0.1rem solid #15DEA5;
        background-color: #15DEA5;
        color: #fff;
    }
    .form__field input:invalid {
        border: 0.1rem solid #fff;
        background-color: #DB464B;
        color: #fff;
    }