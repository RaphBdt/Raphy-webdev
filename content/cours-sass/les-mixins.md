---
part: 2
id: 8
title: Les mixins

---
Les mixins ressemblent un peu à des variables, sauf qu'ici on peut stocker des blocs entiers de code.

Par exemple, avec des variables Sass, on nous pourrait pas écrire ça :

    $heading-shadow: text-shadow: 0.55rem 0.55rem #15DEA5;

Alors qu'avec les mixins, ça donne ça :

     @mixin heading-shadow{
     	text-shadow: .55rem .55rem #15DEA5;
     }

Comme pour les variables, il est préférable de donner un nom qui correspond au rôle de la mixin.

Ensuite, il ne nous reste plus qu'à la déclarer dans notre code :

     .form {
       &__heading {
       	@include heading-shadow;
       }
     }

## Customiser la valeur par défaut de la mixin

Imaginons, nous avons, de base, ce code :

     .heading__header {
     	text-shadow: 0.55rem 0.55rem #fff;
     }
    
     .form__heading {
     	text-shadow: 0.55rem 0.55rem #15DEA5;
     }
    
     .about__heading {
     	text-shadow: 0.55rem 0.55rem #15DEA5;
     }
    
     .project__heading {
     	text-shadow: 0.55rem 0.55rem #15DEA5;
     }

C'est presque parfait pour utiliser une mixin. En effet, le premier sélecteur a une couleur d'ombre différente des autres. Pour ça, on peut appliquer un **argument** à notre mixin et le tour est joué :

     @mixin heading-shadow($colour){
     	text-shadow: .55rem .55rem $colour;
     }

     .heading{
       &__header {
       	@include heading-shadow(#fff);
       }
     }

On peut même appliquer une valeur par défaut afin de ne pas avoir à devoir indiquer à chaque fois une couleur.

     @mixin heading-shadow($colour: $colour-primary){
     	text-shadow: .55rem .55rem $colour;
     }

    .heading{
      &__header {
      	@include heading-shadow($colour-white);
      }
    }
    .form{
      &__heading {
      	@include heading-shadow;
      }
    }
    .about{
      &__heading {
      	@include heading-shadow;    
      }
    }
    .project{
      &__heading{
      	@include heading-shadow;
      }
    }

Quand on assigne pas d'argument, la couleur par défaut sera _$color-primary_. 

## Aller encore plus loin

Idéalement, les valeurs de couleur et de taille doivent être contenues dans des variables afin de pouvoir les modifier facilement à l'avenir. 

    $heading-shadow-size: 0.55rem;
    @mixin heading-shadow($colour: $colour-primary, $shadow-size: $heading-shadow-size){
    	text-shadow: $shadow-size $shadow-size $colour;
    }

 On peut désormais tout maintenir uniquement grâce à nos variables.