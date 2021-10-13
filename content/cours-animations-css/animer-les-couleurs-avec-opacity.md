---
part: 2
id: 10
title: Animer les couleurs avec opacity

---
Animer les couleurs avec **opacity** va nous permettre de se rapprocher au maximum de l'objectif des 60 FPS.  
Pour ça, nous devons utiliser le pseudoélément **::after**. Un pseudoélément ressemble à une balise div, mais elle est générée directement depuis le HTML. La création d'un pseudoélément se fait avec le préfixe **::**. Une autre chose très importante : le pseudoélément after doit obligatoirement avec du contenu pour fonctionner (_content: "";_).

    .btn {
      text-align: center;
      width: 200px;
      margin: 50px auto;
      cursor: pointer;
      padding: 20px;
      border-radius: 10rem;
      background-color: $green;
      position: relative;
      z-index: 1;
      &:hover {
        &::after {
        	opacity: 1;
        }
      }
      &::after {
        border-radius: 10rem;
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: darken($green, 10);
        opacity: 0;
        z-index: -1;
        transition: opacity 250ms;
      }
    }

## Aller plus loin

Nous pouvons créer un dégradé dans le background.

    background: radial-gradient(circle, lighten($green, 5) 0%, darken($green, 15) 100%);

    .btn3 {
      &:hover {
        & + .manazteam {
          &::before {
          	opacity: 0;
          }
        }
      }
    }
    .manazteam {
      margin: 0 auto;
      position: relative;
      z-index: -1;
      background-size: cover;
      background-repeat: no-repeat;
      width: 400px;
      height: 400px;
      border-radius: 3rem;
      &::before {
        @include pseudo-pos;
        opacity: 1;
        border-radius: 3rem;
        z-index: 1;
        background: $green;
        transition: opacity 2000ms;
      }
    }

L'image est intégré en background-image directement depuis le HTML.