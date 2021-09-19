---
id: 6
title: Utiliser BEM avec SASS
part: 1
---
Voici comment il est nécessaire d'établir son code CSS. Le principe est de combiner la méthodologie BEM et le nesting SASS :

    .block{
      background-color: #15DEA5;
      &__element {
      	color: #fff;
        &--modifier {
          background-color: #001534;
        }
      }
    }

Voici la conversion en CSS :

    .block {
    	background-color: #15DEA5;
    }
    
    .block__element {
    	color: #fff;
    }
    
    .block__element--modifier {
    	background-color: #001534;
    }

Un point également très intéressant (au delà de la simplicité de lecture et de maintenance avec BEM et le nesting) est la spécificité. En effet, ici, tous les sélecteurs ont la même spécificité, ce qui peut être pratique si on souhaite modifier un élément en particulier à l'avenir.

## Utiliser la spécificité quand on en a besoin

    .btn {
      &--outline {
        background: transparent;
        border: 2px solid #15DEA5;
        &.btn--disabled{
        	border: 2px solid grey;
        }
      }
    }

Principe de la spécificité CSS : Dans cette situation, le bouton qui a comme classe _.btn--outline_ et _.btn--disabled_ aura une bordure grise.