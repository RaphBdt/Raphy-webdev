---
part: 1
id: 5
title: Récupérer les données des utilisateurs avec les événements

---
## Comprendre ce que sont les données liées à un événement

Comme on l'a vu dans le chapitre précédent, quand on reçoit un événement, la fonction callback reçoit un paramètre contenant des informations sur cet événement. Chaque événement implémente l'objet _Event_ (donc chaque événement possède les fonctions et propriétés de cet objet). Par exemple, l'utilisation de _preventDefault_ et _stopPropagation_ sont possibles grâce à l'objet _Event._

## Détécter le mouvement de la souris

Il faut écouter l'événemnt **mousemove** ; cet événement nous fournit un objet de type **MouseEvent**. Cet objet nous permet de récupérer :

* **clientX / clientY :** position de la souris dans la coordonnées locales (contenu du DOM)
* **offsetX / offsetY :** position de la souris par rapport à l'élément sur lequel on écoute l'événement
* **pageX / pageY :** position de la souris par rapport au document entier
* **screenX / screenY :** position de la souris par rapport à la fenêtre du navigateur
* **movementX / movementY :** position de la souris par rapport à la position de la souris lors du dernier événement

Exemple

    elt.addEventListener('mousemove', function(event) {
        const x = event.offsetX; // Coordonnée X de la souris dans l'élément
        const y = event.offsetY; // Coordonnée Y de la souris dans l'élément
    });

## Lire du contenu d'un champ de texte

Voici la [liste de événements](https://developer.mozilla.org/fr/docs/Web/Events).

L'événement [**change**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) nous permet de faire exactement ce que l'on souhaite : il est déclenché lorsqu'un champ (input, select...) perd le focus.  
Dans la doc, on voit que pour accéder à la valeur de l'élément cible, il faut s'y prendre de cette façon : **event.target.value**

Dans le cas où on veut récupérer la valeur dès que l'utilisateur ajouter ou supprime une lettre, il faut utiliser l'événement **input**. Exemple :

    input.addEventListener('input', function(event) {
        output.innerHTML = event.target.value; 
    });