---
part: 2
id: 6
title: Optimiser les performances du navigateur pour nos animations

---
L'idéal est d'avoir des animations à 60 FPS (60 images par seconde).

Pour afficher un site, le navigateur travaille de cette façon :  
1 - Prend connaissance du HTML / CSS   
2 - Il détermine la taille des éléments et où les placer   
3 - Il transforme les éléments en pixels en utilisant les styles de l'étape 1 et les positions et dimensions déduites de l'étape 2   
4 - Il combine tous les éléments pour composer la page qui s'affiche dans le navigateur

Le site [csstriggers.com](https://csstriggers.com/) présente les étapes de chaque propriétés CSS.

Concrètement, cela veut dire que si, par exemple, on veut changer la width de notre bouton au survol de la souris, alors le navigateur recalcule le layout, le paint et la composition... Ce qui n'est pas optimal.  
**L'objectif est donc de se limiter à animer des proriétés qui ne déclenchent pas de calculs de layout ou de paint.** Cela signifie animer des priopriétés qui font parties de l'étape **composition**. Les plus adaptées sont donc **transform** et **opacity**.