---
part: 4
id: 11
title: Classes utilitaires

---
Les classes utilitaires permettent de faire beaucoup de choses (couleurs, formes, positionnement, taille...). On s'est déjà servi de quelques-unes : _.bg-*_, _.w-*_ et _.d-*_.

## Espacements

Grâce à Bootstrap, on peut facilement espacer des éléments avec les **classes utilitaires d'espacement**. Ces classes utilisent le format suivant :

* Pour les écrans xs : **{propriété}{côté}-{taille}**
* Pour les écrans sm, md, lg et xl : **{propriété}{côté}-{point d’arrêt}-{taille}**

Les propriétés possibles :

* **m :** marge externe (margin)
* **p :** marge interne (padding)

Les côtés possibles :

* **t :** haut de la marge (top)
* **b :** bas de la marge (bottom)
* **l :** gauche de la marge (left)
* **r :** droite de la marge (right)
* **x :** marges horizontales
* **y :** marges verticales
* **laisser vide :** marges verticales et horizontales

Les tailles possibles :

* **0 :** supprime la / les marge(s)
* **1 :** 0,25rem
* **2 :** 0,5rem
* **3 :** 1rem
* **4 :** 1,5rem
* **5 :** 3rem
* **auto** règle la / les marge(s) sur auto

On peut ajouter les classes utilitaires d'espacement aux éléments de la page (lignes, boutons, cartes...). Rappel : on peut inclure un point d'arrêt, ce qui nous permet par exemple d'ajouter une marge uniquement dans des cards s'empilent, etc...

**Exemple :**

* _margin-top: 1.5rem :_ .mt-4
* _padding: 1.5rem :_ .p-3
* _padding-top: 0; padding-bottom: 0;_ .py-0
* _margin-left: auto; margin-right: auto;_ .mx-auto

## Les bordures et les ombres

Pour ajouter une border à un élément ou modifier la bordure par défaut, il faut utiliser la classe **.border-{valeur}**. Valeur prend l'une des valeurs de couleurs par défaut de Bootstrap (primary, secondary...) + white pour faire une bordure blanche.

Pour les ombres, il en existe 4 :

* Aucune ombre : **.shadow-none**
* Petite ombre : **.shadow-sm**
* Ombre moyenne : **.shadow**
* Grande ombre : **.shadow-lg**

## Classe "lien étendu"

La classe utilitaire lien étendu rend l'intégralité d'un bloc cliquable.

Si on ajoute la classe **.stretched-link** à l'élément _a_ d'un composant tel qu'une carte, alors ce composant devient cliquable dans son intégralité.