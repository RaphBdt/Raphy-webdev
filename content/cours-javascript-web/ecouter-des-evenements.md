---
part: 1
id: 4
title: Écouter des événements

---
Un événement est une **réaction** à une **action** soumise par l'utilisateur. Exemple : le clic sur un bouton, la saisie d'un texte dans un formulaire...

En JavaScript, un événement est représente par un nom (_click, mousemove..._) et une fonction qu'on appelle **callback**. Par défaut, un événement est propagé : si on n'indique pas à l'événement que nous le traitons, alors il sera transmis à l'élément parent et ainsi de suite jusqu'à l'élément racine.

C'est nous qui spécifions la fonction **callback**. Elle est appelée à chaque fois que l'action que l'on désire est exécutée (clique sur un élément...).

## Réagir lors d'un clic sur un élément

Pour réagir lors d'un clic sur un élément, il faut **l'écouter**. Pour ça, il existe la fonction **addEventListener()**. Elle permet découter tous les types d'événement (les clics par exemple).

_Réagir à un événement, c'est faire une action lorsque celui-ci se déclenche. Écouter, c'est vouloir être averti quand l'événement se déclenche._

**addEventListener(event, callback)** prend en pramaètre le nom de l'événement à écouter et la fonction à appeler lorsque l'événement est exécuté.

**L'événement onclick**

    const elt = document.getElementById('mon-lien');    // On récupère l'élément sur lequel on veut détecter le clic
    elt.addEventListener('click', function() {          // On écoute l'événement click
        elt.innerHTML = "C'est cliqué !";               // On change le contenu de notre élément pour afficher "C'est cliqué !"
    });

Néanmoins, dans certains cas, cette méthode présente un problème : si, par exemple, l'utilisateur clique sur un lien ou un bouton, alors il sera redirigé sur la page en question (même si notre fonction est bien éxécutée).  
La fonction callback prend un paramètre. Ce dernier correspond au contenu de l'événement qui vient de se produire et il nous offre des fonctions et propriétés intéressantes. Cet objet contient une fonction **preventDefault()** qui fait exactement ce que l'on veut ! On demande au gestionnaire de ne pas éxecuter le comportement par défaut.

    const elt = document.getElementById('mon-lien');    // On récupère l'élément sur lequel on veut détecter le clic
    elt.addEventListener('click', function(event) {     // On écoute l'événement click, notre callback prend un paramètre que nous avons appelé event ici
        event.preventDefault();                         // On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris
    });  

Cela marcherait aussi très bien par exemple pour l'événement _onsubmit_, pour empêcher l'envoi d'un formulaire sur un serveur.

Pour stopper le phénomère de propogation, de la même manière que _preventDefault()_, on a accès à une autre fonction très utile de l'objet que notre fonction reçoit en paramètre : **stopPropagation()**.  
Cas concret : Si on a configuré un élément qui, lorsqu'on clique dessus, affiche un message et que celui-ci a un élément enfant qui doit lui aussi afficher un message quand on clique dessus... Alors si on clique sur l'élément enfant, suite au phénomène de propagation, le message va s'afficher puis notre élément parent va lui aussi recevoir l'événement au clic et encore changer le message.  
La solution est donc :

    elementInterieur.addEventListener('click', function(event) {
        event.stopPropagation();
        elementAvecMessage.innerHTML = "Message de l'élément intérieur";
    });