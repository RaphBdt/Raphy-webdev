---
part: 3
id: 18
title: Le responsive

---
Sass nous permet d'imbriquer le responsive directement dans nos blocs BEM. Dès lors, on a pas besoin de changer l'organisation initiale !

    .proj-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      @media (max-width: 599px) {
          grid-template-columns: 1fr;
      }
    }

## Une façon encore plus stylée de faire du responsive

Sass nous permet d'aller encore plus loin... Grâce aux maps et aux mixins, nous pouvons avoir un code encore plus propre et en plus on peut changer les des tailles d'écran pour les breakpoints !

    $breakpoints: (
      mobile: 599px
    );
    
    @mixin mobile-only {
      @media screen and (max-width: map-get($breakpoints, mobile)){
          @content;
      }
    }
    .proj-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      @include mobile-only{
          grid-template-columns: 1fr;
      }
    }

Ici, il y a quelque chose que nous n'avions encore jamais vu : **@content**. Il s'agit d'une directive et on s'en sert en tant que placeholder. Elle déploie tout le code écrit dans la mixin (dans notre exemple : _grid-template-columns: 1fr;_). Et ça, c'est le feu vin dieu !