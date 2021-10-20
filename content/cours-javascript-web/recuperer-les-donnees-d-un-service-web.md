---
part: 2
id: 7
title: Récupérer les données d'un service web

---
Pour créer une requête HTTP et récupérer les données, il faut utiliser l'API **Fetch**.

## Qu'est-ce que Fetch ?

Fetch est un **ensemble d'objets et de fonctions** mis à disposition par JavaScript afin d'exécuter des requêtes HTTP de manière asynchrone.

**Asynchrone** signifie qu'on peut exécuter du code (ici une requête) sans bloquer l'exécution de la page, en attendant la réponse du service web.

L'API Fetch va nous permettre d'exécuter des requêtes HTTP sans avoir besoin de recharger la page du navigateur. Cela signifie un site plus réactif et agréable à utiliser !

## Envoyer une première requête

Il faut utiliser la méthode GET.

    fetch("http://url-service-web.com/api/users");

Ce code permet d'envoyer une requête HTTP de type GET au service web se trouvent à l'adresse : [http://url-service-web.com/api/users](http://url-service-web.com/api/users "http://url-service-web.com/api/users")

Fetch permet de simplifier les choses. Avant, il devait y avoir une ligne pour créer un nouvel objet de type XMLHttpRequest, une ligne où on demandait d'ouvrir une connexion vers un service web et enfin l'envoi de la requête au service web.

## Récupérer les données au format JSON

Il faut maintenant récupérer et interpréter les résultats de la requête.

Le format le plus courant pour recevoir des données et le **format JSON**.

Voici à quoi ressemble le format JSON :

    {
        "name": "Mon contenu",
        "id": 1234,
        "message": "Voici mon contenu",
        "author": {
            "name": "John"
        },
        "comments": [
            {
                "id": 45,
                "message": "Commentaire 1"
            },
            {
                id: 46,
                "message": "Commentaire 2"
            }
        ]
    }

L'avantage du JSON c'est qu'on a pas besoin de le **parser**, comme on le ferait en XML par exemple. C'est à dire, de **lire** et **comprendre** afin de faire des données ce qu'on veut. Pour le JSON, c'est différent, car c'est une syntaxe qui vient **des objets en JavaScript**.

Le deuxième avantage est sa **légèreté**.

**Récupérer le résultat de la requête :**

Avec ce que l'on vient de voir, ce n'est plus très difficile d'utiliser le résultat de la requête pour en faire ce qu'on veut. Pour cela, Fetch va nous renvoyer une **Promise**.

La _Promise_ est un objet qui fournit une fonction then qui sera exécutée quand le résultat aura été obtenu, et un fonction _catch_ qui est appelée s'il y a une erreur.

Voici comment procéder avec un service qui fait un simple echo :

    fetch(“https://mockbin.com/request”)
      .then(function(res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function(value) {
        console.log(value);
      })
      .catch(function(err) {
        // Une erreur est survenue
      });

Comme on peut le voir, l'URL passée à la fonction _fetch()_ correspond au service que l'on souhaite (logique). **Le type de requête est GET car c'est ce qui est le cas par défaut avec Fetch.**

Ensuite, la fonction _then()_ permet de récupérer le résultat de la requête en vérifiant que tout s'est bien passé avec _res.ok_. Ce résultat _json_ étant lui aussi une _Promise_, nous le retournons et récupérons sa vraie valeur dans la fonction _then()_ suivante.

_Petit tips concernant la ligne où il y a le console.log_. On pourrait demander une réponse plus précise. Par exemple, si on veut récupérer le "salut" dans ce service web : [https://mockbin.com/request?greetings=salut](https://mockbin.com/request?greetings=salut "https://mockbin.com/request?greetings=salut"), alors il faudrait le récupérer comme on le ferait avec un objet JavaScript classique :

    console.log(value.queryString.greetings);

_Second tips :_ la fonction _JSON.parse(value)_ permet de transformer du texte JSON en un objet JavaScript.

_Troisième tips : dans ce cas, la console va afficher..._

    fetch("http://url-de-mon-service")
    
        .then(function(res) {
    
            console.log(res.json());
    
        });

...une Promise qui sera résolue avec l’objet JavaScript qui correspond à la réponse à la requête GET (parsée depuis du JSON)