---
part: 1
id: 3
title: Modifier le DOM

---
## Modifier le contenu d'un élément

Les deux propriétés qui nous permettent de modifier du contenu dans un élément sont **innerHTML** et **textContent**.

Elles fonctionnent exactement de la même façon et ont le même rôle, mais _innerHTML_ interprète l'HTML alors que _textContent_ ne le prend pas en considération.

**Définir une valeur à _innerHTML_ ou _textContent_ remplace directement le contenu actuel de l'élément par celui qu'on précise.**

Exemple d'utilisation :

    let elt = document.getElementById('main');
    elt.innerHTML = "<ul><li>Elément 1</li><li>Elément 2</li></ul>";

L'élément qui a l'id 'main' aura un nouveau contenu, le HTML devient :

    <div id="main">
        <ul>
            <li>Elément 1
            <li>Elément 2
        </ul>
    </div>

## Modifier les classes

Il est possible d'accéder à la liste des classes d'un élément avec la propriété **classList**.

    elt.classList.add("nouvelleClasse");    // Ajoute la classe nouvelleClasse à l'élément. On peut ajouter plusieurs classes si on le souhaite
    elt.classList.remove("nouvelleClasse"); // Supprime la classe nouvelleClasse que l'on venait d'ajouter. Pareil, on peut en supprimer plusieurs
    elt.classList.contains("nouvelleClasse");   // Retournera false car on vient de la supprimer
    elt.classList.replace("oldClass", "newClass"): // Remplacera oldClass par newClass si oldClass était présente sur l'élément

## Changer le style d'un élément

La propriété **style** nous permet de récupérer et modifier les différents styles d'un élément.

    elt.style.color = "#fff";      // Change la couleur du texte de l'élément à blanche
    elt.style.backgroundColor = "#000"; // Change la couleur de fond de l'élément en noir
    elt.style.fontWeight = "bold"; // Met le texte de l'élément en gras

## Modifier les attributs

Pour définir ou remplacer les attributs d'un élément, on peut utiliser la fonction **setAttribute**.

    elt.setAttribute("type", "password");   // Change le type de l'input en un type password
    elt.setAttribute("name", "my-password");    // Change le nom de l'input en my-password
    elt.getAttribute("name");               // Retourne my-password

Bon à savoir : il existe également la fonction **removeAttribute**

## Créer de nouveaux éléments

La fonction **document.createElement** permet de créer un élément. Elle prend en paramètre le nom de la balise de notre élément et nous renvoie l'élément nouvellement créé.

    const newElt = document.createElement("div");

**L'élément créé ne fait pas encore partie du document.** Pour le voir, il faut d'abord l'ajouter en tant qu'enfant à un élément.

## Ajouter des enfants

La fonction **appendChild** permet d'ajouter un élément à la liste des enfants du parent depuis lequel la fonction est appelée.

    const newElt = document.createElement("div");
    let elt = document.getElementById("main");
    
    elt.appendChild(newElt);

Avec ce code, on créé à la première ligne un élément div. À la dernière ligne, on rattache cet élément au DOM, on ajoute une _div_ aux enfants de l'élément qui a un id _#main_

## Supprimer et remplacer des éléments

Les fonctions **removeChild** et **replaceChild** nous permettent respectivement de supprimer et remplacer un élément.

    elt.removeChild(newElt);    // Supprime l'élément newElt de l'élément elt

    elt.replaceChild(document.createElement("article"), newElt);    // Remplace l'élément newElt par un nouvel élément de type article

**Pour avoir tous les détails nécessaires et des exemples pour chaque fonction, il faut se référer à la** [**doc Mozilla**](https://developer.mozilla.org/fr/).