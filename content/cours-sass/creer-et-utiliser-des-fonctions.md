---
part: 2
id: 7
title: Créer et utiliser des fonctions

---
Une fonction est un bout de code qui effectue une tâche quand elle est exécutée.

Une fonction **retourne** une valeur grâce à **@return**.

**Différence entre une fonction et une mixin :**  
Une fonction retourne **une valeur**, tandis qu'une mixin génère **plusieures lignes de code** CSS.

Voici un exemple d'utilisation avec ce qu'on avait fait au chapitre précédent :

    @function lightness-shift($colour){
      @if ( lightness($colour) < 25% ) {
          @return lighten($colour, 10%);
      }@else{
          @return darken($colour, 10%);
      }
    }          

    @mixin heading-shadow($colour: lightness-shift($colour-primary), $size: $heading-shadow-size){
      color: $colour;
      text-shadow: $size $size $colour;
    }
                

On a désormais un code beaucoup plus propre et maintenable.