---
part: 3
id: 12
title: Utiliser les propriétés de l'animation CSS

---
## La différence entre les @keyframes et les transitions

Les transitions sont destinées à s'intégrer de manière subtile entre une valeur de départ et une valeur de fin. Les transitions sont liées à l'état d'un élément et aux différences dans ses valeurs assignées.  
Quant aux @keyframes, une fois déclenchées, l'animation progresse jusqu'à qu'elle soit terminée ou interrompue. Quand elle est terminée ou interrompue, l'animation disparaît (contrairement aux transitions). Cela explique la barre qui disparaît dans le chapitre précédent.

## Déclencher les animations dès le chargement de la page

    .progress {
      &__bar {
      	animation: progress-bar 1000ms;
      }
    }

Quand on assigne une animation avec keyframe à un élément, il déclenchera l'animation au chargement dans le navigateur.

## Ajouter un délai

    $prog-bar-dur: 1000ms;
    $prog-bar-delay: 150ms;
    $cat-delay: $prog-bar-dur + $prog-bar-delay;
    .cat {
    	animation: cat 1000ms $cat-delay;
    }
    
    @keyframes cat{
      0% {
      	transform: translateX(-9999px);
      }
      100% {
      	transform: translateX(0);
      }
    }

Ce n'est pas ce que nous attendions, car notre image apparaît au chargement de la page, puis disparaît et revient. En effet, quand l'animation n'est pas en train d'être animée, les éléments reviennent à leur valeur de propriété assignée.

    .progress3 {
      &__bar3 {
      	animation: progress-bar3 $prog-bar-dur $prog-bar-delay both;
      }
    }
    
    $prog-bar-dur: 1000ms;
    $prog-bar-delay: 150ms;
    $cat-delay: $prog-bar-dur + $prog-bar-delay*2;
    .cat3 {
    	animation: cat 0ms $cat-delay both;
    }

Pour résoudre le problème, nous avons utilisé la propriété CSS **animation-fill-mode**. Le principe est d'étendre les valeurs de début, de fin (ou les deux) d'une animation. Elle peut donc prendre la valeur _backwards_, _forwards_ ou _both_. Dans notre cas, nous avons ajouté both à la propriété animation pour étendre l'animation au début et à la fin. Tout est désormais fonctionnel

Nous pouvons encore affiner notre animation. Il est possible d'assigner une fonction de timing pour, par exemple, donner un air plus sacadé à la barre de progression. On peut directement ajouter la fonction _cubic-bezier()_ à **animation**, ou assigner une fonction de timing (grâce à **animation-timing-function**) directement à un pourcentage d'un keyframe (ils ont tous leur propre fonction timing).   
Par exemple, pour avoir une barre de progression avec un ressenti plus authentique :

    @keyframes progress-bar{
      0% {
      	transform: scaleX(0);
      }
      17% {
      	transform: scaleX(.18);
      }
      24% {
        transform: scaleX(.40);
        animation-timing-function: cubic-bezier(.9,0,.1,1);
      }
      46% {
        transform: scaleX(.81);
        animation-timing-function: cubic-bezier(.25,0.25,1);
      }
      100% {
      	transform: scaleX(1);
      }
    }