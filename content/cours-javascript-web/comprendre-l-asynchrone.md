---
part: 3
id: 10
title: Comprendre l'asynchrone

---
## JavaScript est synchrone et monolitique

Cela signie qu'il n'y a qu'**un seul fil d'exécution**. Chaque ligne est exécutée **l'un après l'autre**.

Pourtant, il est très facile de faire de l'asynchrone en JavaScript.

Dans tous les cas, avec JavaScript, nous sommes obligés de faire du code synchrone, donc raisonner ligne par ligne. Par contre, **dans le cas où une fonction est asynchrone**, alors la ligne suivante **n'attendra pas** que la ligne asynchrone ait fini son exécution. Exemple :

    let productId = 1;
    let productPrice = getProductPriceAsync(productId);
    doSomething(productPrice);
                

Supposons que _getProductPriceAsync()_ soit asynchrone, alors la ligne suivante sera exécutée avant la fin de l'exécution de la fonction asynchrone. Mais il n'est pas encore possible d'utiliser la veleur de _productPrice_ (on verra au chapitre suivant comme ça marche).

Pour parvenir à faire ça avec un langage synchrone, il faut utiliser l'**event loop**

## L'event loop

Pour faire du code aynchrone, il faut en fait placer les fonctions dans **une sorte de file d'attente** qui va exécuter toutes les fonctions qu'elle contient les unes après les autres. C'est ce qu'on appelle l'**_event loop_**.

## Jouer avec l'event loop

La fonction **_setTimeout_** est la plus répandue pour faire du code asynchrone.

Elle prend deux paramètres :

* **La fonction à exécuter :** la fonction exécutée de manière asynchrone (et qui sera ajoutée à la file d'attente).
* **Le délai :** en ms, avant d'exécuter la fonction

    setTimeout(function() {
        console.log("I'm here!")
    }, 5000);
    
    console.log("Where are you?");

Dans cet exemple, le "Where are you" sera appelé avant le "I'm here" (il apparaîtra 5 secondes après).

La fonction **_setTimeout_** nous retourne une valeur permettant d'identifier le code asynchrone que l'on veut exécuter. Il est possible de passer cet identifiant en paramètre à la fonction **_clearTimeout_** si on souhaite annuler l'exécution asynchrone de la fonction avant qu'elle ne soit exécutée.

[Documentation fonction setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp)

**Autres méthodes** (très peu utilisées)

[setInterval](https://www.w3schools.com/jsref/met_win_setinterval.asp)

[setImmediate](https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate)

## Le cas de l'I/O

L'I/O correspond aux événements liés à l'**input** et l'**output**. Cela correspond notamment à la lecture/écriture des fichiers, aux requêtes HTTP...

Quand on a utilisé la fonction _fetch_ lors d'une requête HTTP, celle-ci ne bloquait pas l'exécution du code. C'est donc **une fonction asynchrone**.

_fetch()_ retourne une **Promise** qui est une autre façon de faire de l'asynchrone car les fonctions _then()_ et _catch()_ sont appelées plus tard lorsque le travail est terminé.

De la même manière, tout ce qui touche à l'I/O peut être exécuté de manière asynchrone.