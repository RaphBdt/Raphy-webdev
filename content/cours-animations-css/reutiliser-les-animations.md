---
part: 3
id: 13
title: Réutiliser les animations

---
    .form {
      &__group {
        & input {
          &:not(:focus):invalid { 
          	animation: headshake 100ms cubic-bezier(.4,.1,.6,.9) 2;
          }
        }
      }
    }
    
    @keyframes headshake {
      25% {
      	transform: translateX(1%);
      }
      75% {
      	transform: translateY(1% * -1);
      }
    }

La propriété **animation-iteration-count** permet de répéter un kayframe un certain nombre de fois.  
Petit rappel de la propriété **animation** de l'exemple ci dessus : _headshake_ appalle le keyframe, _100ms_ est la durée du keyframe, _cubic-bezier(.4,.1,.6,.9)_est la fonction de timing pour affiner notre animation et enfin, _2_ est le nombre de fois que nous répétons le keyframe.

## Répéter des animations à l'infini

    .load {
      &__bar {
        animation: bars 1000ms backwards infinite ease-in-out alternate;
        @for $i from 1 through 5 {
          &--#{$i} {
              animation-delay: 200ms * $i;
          }
          &--#{$i}-inv {
          animation-delay: 200ms * $i;
          animation-direction: alternate-reverse;
          background-color: $blue;
          }
        }
      }
    }
    
    @keyframes bars {
      0% {
      	transform: scaleY(0.5);
      }
    
      100% {
      	transform: scaleY(1.0);
      }
    }

Pour indiquer au navigateur que l'on souhaite que notre animation soit infinit, il faut lui assigner le mot clé **infinite**. Néanmoins, dans notre cas, ça ne suffit pas. Il faut aussi entrer la propriété **animation-direction** avec comme valeur _alternate_ (allers-retours). L'inverse d'alternate et _alternate-reverse_. Il existe aussi _reverse_.

    .spin {
      animation: spin 3s linear infinite paused;
      &:hover {
      	animation-play-state: running;
      }
    }
    
    @keyframes spin {
      from{
      	transform: rotate(0deg);
      }
      to {
      	transform: rotate(360deg);
      }
    }

Grâce à **animation-play-state**, nous pouvons décider de stopper ou de jouer une animation.

**Résumé de la propriété animation (ordre) : _animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, animation-play-state_.**