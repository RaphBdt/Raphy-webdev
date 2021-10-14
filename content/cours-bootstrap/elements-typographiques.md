---
part: 3
id: 7
title: Éléments typographiques

---
## Les titres

Bootstrap propose par défaut des styles pour les éléments __h*__ (pas besoin d'utiliser de classes). Néanmoins, si on le souhaite, on peut appliquer sur une balise p le style d'un h* :

    <p class="h3">Paragraphe avec une titre stylisé </p>
    // Affiche un paragraphe mais avec le style d'un h3

## Les listes

Bootstrap propose également par défaut du style pour les éléments **ul** et **ol**. On peut également si on le souhaite supprimer les styles de la liste en ajoutant la classe **.list-unstyled** au _ul_ ou _ol_. Il est également possible de créer une liste _inline_ en ajoutant une classe **.list-inline** à la balise _ul_ et la classe **.list-inline-item** aux _li_.

    <ul class=”list-inline”>
       <li class=”list-inline-item”>Je </li>
       <li class=”list-inline-item”>suis </li>
       <li class=”list-inline-item”>une liste </li>
       <li class=”list-inline-item”>inline </li>
    </ul>

## Formater les éléments

Alignement :

* **.text-left :** Aligner le texte à gauche d'un élément.
* **.text-center :** Aligner le texte au centre dans un élément.
* **.text-right :** Aligner le texte à droite dans un élément.

Si on veut qu'à partir d'une certaine résolution notre alignement change, alors on peut combiner ces quatre modificateur de classes _-sm_, _-md_, _lg_, _-xl_avec l'une des classes d'alignement de texte _.left_, _.center_, _.right_.

* **.text-sm-left :** Aligner le texte à gauche sur toutes les petites zones de visualisation (sm) ou plus grandes.
* **.text-md-center :** Aligner le texte au centre sur toutes les zones de visualisation moyennes (md) ou plus grandes.
* **.text-lg-right :** Aligner le texte à droite sur toutes les grandes zones de visualisation (lg) ou plus grandes.
* **.text-xl-center :** Aligner le texte au centre sur toutes les zones de visualisation très grandes (xl).

Si on veut aligner au centre le contenu du texte d'un élément sur une zone de visualisation très petite et l'aligner à gauche sur des grandes zones de visualisation :

    <p class=”text-center text-lg-left”>
       [L’alignement du contenu dépend de la zone de visualisation]
    </p>
                

Gérer l'épaisseur de la police :

* **font-weight-bold :** Texte en gras.
* **font-weight-bolder :** Texte d'épaisseur plus grasse que l'élément parent.
* **font-weight-normal :** Texte d'épaisseur normale.
* **font-weight-light :** Texte d'épaisseur légère.
* **font-weight-lighter :** Texte d'épaisseur plus légère que l'élément parent.

Pour passer le format d'un texte en italique, on utilise la classe **.font-italic**.

    <p>
       [Parfois, vous aurez envie de mettre span class="font-italic">des mots en italique /span> dans votre contenu !]
    </p>