---
part: 1
id: 5
title: Modifier accélération et décélération

---
Les principales fonctions de timing par défaut

Exemple d'utilisation (SCSS) :

    transition: transform 1000ms linear;  

**linear :** Vitesse constante.   
**ease-in-out :** Accélération et décélération subtiles (c'est la fonction de timing préférée de beaucoup d'animateurs).   
**ease in :** Seulement accélération.   
**ease-out :** Seulement décélération.   
**ease :** Fonction par défaut. Décélération plus prononcée. 

## Créer notre propre rythme

Le site [cubic-bezier.com](https://cubic-bezier.com/#.17,.67,.83,.67) nous permet de créer des accélérations / décélérations sur-mesures.   
Pour ça, nous avons juste à jouer avec la courbe et à coller les valeurs cubic-bezier() dans notre transition. Exemple :

    $trans-dur: 2000ms;
    .strength {
      transform: translateY(100%);
      transition: transform $trans-dur cubic-bezier(0, .75, .08, 1);
    }

Ici, l'élément .strenght montera sur l'axe Y et aura une décélération très lente.