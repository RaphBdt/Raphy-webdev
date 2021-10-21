---
part: 3
id: 12
title: Paralléliser plusieurs requêtes HTTP

---
On va enchaîner les requêtes HTTP en exécutant 2 requêtes GET en même temps (**en parallèle**) puis 1 requête POST une fois que les 2 requêtes précédentes sont terminées (**en séquence**).

## Enchaîner les requêtes avec les callbacks

Pour cet exemple, on part du principe qu'on a accès à deux fonctions (_get_ et _post_). Elles font respectivement une requête **GET** et **POST** et prennent un paramètre l'URL de la requête et une callback à exécuter quand on a le résultat (avec une variable d'erreur en premier paramètre).

    var GETRequestCount = 0;
    var GETRequestResults = [];
    
    function onGETRequestDone(err, result) {
        if (err) throw err;
        
        GETRequestCount++;
        GETRequestResults.push(result);
        
        if (GETRequestCount == 2) {
            post(url3, function(err, result) {
                if (err) throw err;
                
                // We are done here !
            });
        }
    }
    
    get(url1, onGETRequestDone);
    get(url2, onGETRequestDone);

Nous appelons 2 fois la fonction _GET_. Comme cette fonction est **asynchrone**, elle ne bloquera pas l'exécution du code. Ainsi, l'autre fonction _get()_ sera appelée alors que la première ne sera pas encore terminée.

Pour exécuter une requête _POST_ une fois les **2 requêtes _GET_ terminées**, on utilise la variable _GETRequestCount_ et dès qu'elle est égale à 2 (le nombre de requêtes GET), alors on exécute la requête _POST_.

## Enchaîner les requêtes avec les Promise

Grâce à **_Promise.all_**, on peut exécuter nos requêtes en parallèle et en séquence avec les Promise.

Pour cet exemple, on part du principe que nous avons accès à 2 fonctions (_get_ et _post)_ qui font respectivement une requête _GET_ et _POST_ quand on leur passe en paramètre l'URL de la requête. Ces fonctions retourneront une _Promise_ avec le résultat de la requête.

    Promise.all([get(url1), get(url2)])
        .then(function(results) {
            return Promise.all([results, post(url3)]];
        })
        .then(function(allResults) {
            // We are done here !
        });

_Promise.all_ prend en paramètre une liste de Promise et les exécute en parallèle. Elle retournera une nouvelle _Promise_ quand toutes les _Promise_ seront résolues.

Pour exécuter la requête POST une fois les requêtes GET terminées, il faut l'exécuter dans la fonction _then()_.

Ensuite, dans le prochain _then()_, on récupère une liste qui contient les résultats des requêtes _GET_ et le résultat de la requête _POST_ :  
_allResults = \[ \[ getResult1, getResult2 \], postResult \]_

### Enchaîner les requêtes avec les Promise

Dernière méthode : _async_ / _await_

Pour cet exemple, on part du principe qu'on a accès à deux fonctions (_get_ et _post_) qui font respectivement une requête _GET_ et une requête _POST_ quand on leur passe en paramètre l'URL de la requête. Ces fonctions sont asyncrhones (avec le mot clé _async_).

    async function requests() {
        var getResults = await Promise.all([get(url1), get(url2)]);
        var postResult = await post(url3);
        return [getResults, postResult];
    }
    
    requests().then(function(allResults) {
        // We are done here !
    });

On utilise aussi la fonction _Promise.all_, car c'est comme ça qu'on peut effectuer des fonctions asynchrones en parralèle. **_En réalité, async correspond en arrière plan à une Promise._**

Rappel : _await_ signifie qu'on attend la fin de l'exécution. La ligne 2 sera exécutée, et la 3 **ensuite**.

Quand on appelle la fonctions _requests()_, ici on utilise _then()_, mais on aurait aussi pu utiliser _await_ au sein d'une autre fonction avec le mot clé _async_.

Voilà, on a appris à enchaîner les requêtes avec 3 techniques différentes. À voir laquelle est la mieux. Perso, celle qui m'inspira le plus est **_async / await_**.