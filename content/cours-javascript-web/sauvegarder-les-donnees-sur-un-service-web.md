---
part: 2
id: 9
title: Sauvegarder les données sur un service web

---
Il est possible d'envoyer des données à un service web en les ajoutant à notre requête !

Néanmoins, ça ne se fait pas avec toutes les méthodes (_qu'on appelle aussi des verbs)_. La méthode **GET** permet seulement de recevoir des données. La méthode **POST** et **PUT** permettent d'en envoyer et d'en recevoir.  
Grâce à ces deux dernières, nous allons ajouter des données dans le corps de la requête.

## Envoyer des données avec la requête POST

    fetch("http://url-service-web.com/api/users", {
    	method: “POST”,
    	headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/json' 
    },
    	body: JSON.stringify(jsonBody)
    });

On passe le contenu à envoyer au service avec _fetch()_. Comment on souhaite **envoyer du JSON**, il faut transformer l'objet JavaScript en JSON.

Pour ça, on utilise la fonction _JSON.stringify(json)_. Il faut aussi prévenir le service web qu'il va **recevoir du JSON**. Cela se fait grâce aux **headers**. Les headers en question sont :

* _Content-Type :_ avec la valeur application/json
* _Accept :_ avec la valeur application/json

Ces options sont envoyées avec la requête grâce au second paramètre de la fonction _fetch()_. Ce paramètre est un objet qui permet de définir :

* **La méthode HTTP et le body**, c'est à dire les données qu'on souhaite envoyer
* **Les headers** qui donnent un peu plus d'information sur notre requête

Voici un [lien codepen](https://codepen.io/fabienhenon/pen/GRNepeG) pour avoir un exemple de requête / réponse.