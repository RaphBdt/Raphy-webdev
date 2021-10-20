---
part: 1
id: 2
title: Accéder aux éléments du DOM

---
Chaque élément du DOM est un **objet** JavaScript avec ses propriétés et ses fonctions pour le manipuler.

## Le document

**Le document** est le point de départ du DOM, il représente la page entière. Il contient les fonctions dont on a besoin pour retrouver les éléments qu'on cherche.

### Première fonction : document.getElementById()

Cette fonction recherche un élément par son id. C'est pratique car il ne doit y avoir qu'un id par page, donc cette fonction est très précise.

Si on part du code HTML suivant : _/p id="my-anchor">My content /p>_   
Alors on pourra trouver cet élément avec le code JavaScript suivant :

    const myAnchor = document.getElementById('my-anchor');

[Documentation Mozilla](https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById)

### Deuxième fonction : document.getElementsByClassName()

Même principe, mais pour les classes.

Si on part du code HTML suivant :

    <div>
        <div class="content">Contenu 1</div>
        <div class="content">Contenu 2</div>
        <div class="content">Contenu 3</div>
    </div>

Alors on pourra retrouver la **liste** des éléments ayant la classe _content_ avec le code JavaScript suivant :

    const contents = document.getElementsByClassName('content');
    const firstContent = contents[0];

[Documentation Mozilla](https://developer.mozilla.org/fr/docs/Web/API/Document/getElementsByClassName)

### Troisième fonction : document.getElementsByTagName()

Avec cette méthode, on recherche le nom d'une balise. Comme dans l'exemple précédent, on récupère la liste des éléments correspondants.

Si on part du code HTML suivant :

    <div>
        <article>Contenu 1</article>
        <article>Contenu 2</article>
        <article>Contenu 3</article>
    </div>       

On pourra récupérer la liste des éléments de type _article_ avec le code JavaScript suivant :

    const articles = document.getElementsByTagName('article');
    const thirdArticle = articles[2];

[Documentation Mozilla](https://developer.mozilla.org/fr/docs/Web/API/Document/getElementsByTagName)

#### Quatrième fonction : document.querySelector()

Il s'agit de la méthode la plus puissante, car on peut faire une recherche en mélangeant plusieurs procédés. Il s'agit d'un sélecteur qui permet de cibler certains éléments.

Par exemple, avec le code HTML suivant :

    <div id="myId">
        <p>
            <span><a href="#">Lien 1</a></span>
            <a href="#">Lien 2</a>
            <span><a href="#">Lien 3</a></span>
        </p>
        <p class="article">
            <span><a href="#">Lien 4</a></span>
            <span><a href="#">Lien 5</a></span>
            <a href="#">Lien 6</a>
        </p>
        <p>
            <a href="#">Lien 7</a>
            <span><a href="#">Lien 8</a></span>
            <span><a href="#">Lien 9</a></span>
        </p>
    </div>
                

Et la recherche JavaScript suivante :

    const elt = document.querySelector("#myId p.article > a");

Alors on nous retournera _Lien 6_.

**querySelector() ne renvoie par une liste des résultats, mais le premier élément qui correspond à la recherche.**

Pour retourner une liste de résultats avec une fonction qui marche exactement de la même manière, il faut utiliser : **querySelectorAll**.

[Documentation Mozilla](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector)

## La recherche depuis un élément

Il n'y a pas qu'avec _document_ que nous pouvons faire des recherches. Chaque élément est un objet JavaScript avec ses propriétés et ses fonctions.

**Voici les propriétés de recherche depuis un élément :**

* **element.children :** retourne liste des enfants de cet élément
* **element.parentElement :** retourne élément parent
* **element.nextElementSibling / element.previousElementSibling :** nous permet de naviguer vers l'élément suivant / précédent de même niveau que notre élément

Exemple :

    <div id="parent">
        <div id="previous">Précédent</div>
        <div id="main">
            <p>Paragraphe 1</p>
            <p>Paragraphe 2</p>
        </div>
        <div id="next">Suivant</div>
    </div>

    const elt = document.getElementById('main');

Alors, on aura ça :

* _elt.children :_ retourne les éléments de type p
* _elt.parentElement :_ retourne la div qui a l'id parent
* _elt.nextElementSibling :_ retourne l'élément qui a l'id next
* _elt.previousElementSibling :_ retourne l'élément qui a l'id previous