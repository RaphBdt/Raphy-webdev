---
part: 2
id: 8
title: Modifier le point d'ancrage

---
## Découvrez le point d'ancrage (centre de l'animation)

    .btn {
      &:active {
        & + .progress {
          .progress__bar {
          	transform: scaleX(1);
          }
        }
      }
    }
    
    .progress {
      &__bar {
        transform: scaleX(0);
        transition: transform 1000ms cubic-bezier(.32, 0, .07, 1);
        transform-origin: 0% 50%;
      }
    }

Par défaut, **transform-origin** est à 50% 50%. La première valeur est la distance sur l'axe X à partir de la bordure gauche de l'élément et la seconde est la distance sur l'axe Y mesurée depuis le bord supérieur.  
Elle accepte plusieurs unités.

Il est également possible d'utiliser les mots clés **left** et **right** pour la première valeur (X) et **top** et **bottom** pour la seconde (Y).

## De la 3D

    @mixin facet {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .btn3d {
      position: relative;
      color: #ffffff;
      width: 300px;
      height: 100px;
      margin: 50px auto;
      perspective:500px; // Ajouter de l'effet 3D
      &:active {
        & > .btn3d__flip {
        	transform: rotateX(-90deg);
        }
      }
      &__flip {
        @include facet;
        transform-style: preserve-3d; // Obligatoire pour cette animation
        transform-origin: center bottom 50px;
        transition: transform 500ms cubic-bezier(.7, 0, .23, 1);
        &--off {
          @include facet;
          transform: rotateX(0deg) translateZ(50px); // Height / 2
          background: #EE6352;
        }
        &--on {
          @include facet;
          transform: rotateX(90deg) translateZ(50px); // Height / 2
          background: #59CD90;
        }
      }
    }

**transform-origin** doit obligatoirement avoir une valeur en unité réelle (pixels, centimètres...).