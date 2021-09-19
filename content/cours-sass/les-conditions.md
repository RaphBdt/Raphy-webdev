---
part: 2
id: 12
title: Les conditions

---
Prenons un cas concret : si un texte a une couleur sombre, alors il lui faut une ombre claire pour qu'elle soit correctement visible. Si on a une couleur de texte claire, alors on assombrit la couleur de son ombre. L'objectif est de bien distingurer le texte et l'ombre.

Notre code doit dire : Si la luminosité de la couleur passée en argument est inférieur à 25%, alors on l'éclaircit de 10%. Sinon, on assombrit la couleur de 10%.

    @mixin heading-shadow($colour: $colour-primary, $size: $heading-shadow-size){
      @if ( lightness($colour) < 25% ) {
          $colour: lighten($colour, 10%);
      } @else {
          $colour: darken($colour, 10%);
      }
      text-shadow: $size $size $colour;
    }
    
    .form {
      &__heading {
          @include heading-shadow($colour-secondary);
      }
    }

## En savoir plus sur les conditions

les opérateurs de comparaison :

==

!=

>

<

>=

<=

On peut enchaîner deux conditions en utilisant **and** :

    @if ( lightness($colour) < 25% ) and ( lightness($colour) > 10% ) {...}

ou **or** :

    @if ( lightness($colour) < 25% ) or ( saturation($colour) > 10% ) {...}        

Bon à savoir : nous ne somme pas obligés d'avoir un @else. Si la condition n'est pas remplie, alors elle sera tout simplement ignorée.