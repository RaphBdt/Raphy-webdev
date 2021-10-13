---
part: 3
id: 11
title: Les keyframes

---
Les transitions CSS passe d'une valeur à une autre. Les @keyframes permettent de concevoir des animations avec plusieurs étapes.

## Fonctionnement différent entre les transitions et les keyframes

    .btn {
      &:active {
        & + .progress {
          .progress__bar {
          	animation: progress-bar 1000ms;
          }
        }
      }
    }
    
    @keyframes progress-bar {
      0% {
      	transform: scaleX(0);
      }
      17% {
      	transform: scaleX(.18);
      }
      24% {
      	transform: scaleX(.4);
      }
      46% {
      	transform: scaleX(.81);
      }
      100% {
      	transform: scaleX(1);
      }
    }

Les transitions s'anniment quand on assigne une valeur à une propriété **et que celle-ci change** dans l'élément déclencheur. Pour les @keyframes, quand _animation-name_ et _animation-duration_ sont assignés à un sélecteur, **toutes** les propriétés et valeurs contenues dans chaque keyframe sont appliquées pendant toute la durée de l'animation.

Les propriétés CSS à l'intérieur de @keyframe remplaceront toutes celles sur le sélecteur où elles sont assignées.

## Animer avec plusieurs propriétés

    .progress__bar2 {
    	opacity: 0;
    }
    
    @keyframes progress-bar2 {
      0% {
      	transform: scaleX(0);
      }
      17% {
      	transform: scaleX(.18);
      }
      24% {
      	transform: scaleX(.4);
      }
      46% {
      	transform: scaleX(.81);
      }
      85%, 100% {
      	opacity: 1;
      }
      100% {
      	transform: scaleX(1);
      }
    }

Si aucun keyframe de début ou de fin n'est fourni (exemple ici avec l'opacité), l'animation commence ou se termine avec les valeurs de propriété assignées au sélecteur.