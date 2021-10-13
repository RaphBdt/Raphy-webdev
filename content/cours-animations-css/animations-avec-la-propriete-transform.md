---
part: 2
id: 7
title: Animations avec la propriété transform

---
## Modifier la taille d'un élément avec scale

Comme vu précédemment, nous pouvons modifier la taille d'un élément.   
On peut aller plus loin en modifiant sa largeur et sa largeur et sa hauteur :   
Code source (SCSS) :

    .btn1 {
      &:hover + .box1 {
      	transform: scale(3, 0.5);
      }
    }
    
    .box1 {
    	transition: transform 330ms ease-in-out;
    }

Pour faire une modification dans une seule direction :

    .btn2 {
      &:hover + .box2 {
      	transform: scaleX(2); // Il existe aussi bien sûr scaleY(2).
      }
    }

## Modifier la position d'un élément

La fonction translate() prend deux valeurs en paramètres. La première est la distance sur l'axe X et l'autre la distance sur l'axe Y. On peut mettre plusieurs unités et même des pourcentages (en fonction de la taille de l'élément qu'on déplace).

    &:hover + .box3 {
    	transform: translate(150px, -7vh); // Existe aussi avec translateX() et translateY().
    }

Animation qui fait apparaître du texte :

    .btn4 {
      &:hover + .box4 {
        transform: scale(1);
        span {
        	transform: translateY(130px);
        }
      }
    }
    
    .box4 {
      transform: scale(0.1);
      transition: transform 330ms ease-in-out;
      overflow: hidden;
      span {
        display: inline-block; // Transform ne peut pas manipuler d'éléments inline.
        transform: translateY(400px);
        transition: transform 280ms ease-out 50ms;
      }
    }

## Faire pivoter des éléments avec rotate()

Il existe deux unités : **deg** et **turn** (1 turn = 360 deg).

    .btn5 {
      &:hover + .box5 {
      	transform: rotate(0deg); // Ou (0turn)
      }
    }
    
    .box5 {
      transform: rotate(-360deg); // Ou (-1turn)
      transition: transform 500ms ease-in-out;
    }

## Tout combiner

On ne peut assigner qu'une seule propriété transform à un élément. Si on veut par exemple faire grossir un élément et le faire tourner, il va falloir indiquer toutes les fonctions dans la propriété transform.

    .btn6 {
      &:hover + .box6 {
        transform: scale(1) rotate(0deg); // Le navigateur lit de droite à gauche... Donc il effectuera d'abbord la rotate, puis le scale.
        span {
        	transform: translateY(130px);
        }
      }
    }
    
    .box6 {
      transform: scale(0.1) rotate(-90deg); // D'abbord la rotate, puis le scale. 
      transition: transform 330ms ease-in-out;
      overflow: hidden;
      span {
        display: inline-block;
        transform: translateY(400px);
        transition: transform 280ms ease-out 50ms;
      }
    }

## Pencher

Pour faire pencher un élément, on peut utiliser skewX, skeyY et skey (qui prend 2 valeurs).

    .btn7 {
      &:hover + .box7 {
      	transform: skewX(45deg);
      }
    }
    
    .box7 {
    	transition: transform 500ms ease-in-out;
    }

## De la 3D !

Nous pouvons déplacer un élément en 3D grâce à **translate3d()** qui prend trois valeurs ou grâce à **translateZ** qui prend une valeur.  
La fonction **perspective()** indique au navigateur à quelle distance se trouve le spectateur. Plus un objet et proche et plus le mouvement aura l'air important.

    .btn8 {
      &:hover + .box8 {
      	transform: perspective(150px) rotateX(45deg);
      }
    }

Il existe aussi **scale3d()** et **rotate3d()**.