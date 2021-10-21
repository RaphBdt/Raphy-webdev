---
part: 3
id: 11
title: Gérer du code asynchrone

---
## Les callbacks

C'est la méthode la plus vieille mais il faut la connaître. Un callback est simplement une fonction que l'on définit. Son principe est de **passer en paramètre** une fonction asynchrone. Quand la fonction asynchrone aura terminé sa tâche, elle va appeler la fonction callback en passant un **résultat**. Par exemple, les événements, que nous avons vus précédemment sont un exemple typique de fonction asynchrone à laquelle on passe une fonction callback.

    element.addEventListener('click', function(e) {
        // Do something here ... 
    });

La fonction qui est envoyée à _addEventListener_ est une callback. Elle n'est pas appelée tout de suite, elle est appelée plus tard dès que l'utilisateur clique sur l'élément. Cela ne bloque pas l'exécution du code et c'est donc asynchrone.

Les callbacks sont **la base de l'asynchrone** et sont très utilisées.

_Par exemple, la fonction que nous passons en paramètre à setTimeout est une callback_

Les callbacks sont faciles à comprendre et à utiliser, mais elles souffrent d'un gros problème de lisibilité du code.

    elt.addEventListener('click', function(e) {
        mysql.connect(function(err) {
            mysql.query(sql, function(err, result) {
                fs.readFile(filePath, function(err, data) {
                    mysql.query(sql, function(err, result) {
                        // etc ...
                    });
                });
            });
        }); 
    });

Dans cet exemple, dès que l'utilisateur clique sur un élément on ouvre une connexion MySQL, puis on récupère les données de la base de données, puis on lit le contenu dans un fichier, etc...

Pour gérer les **erreurs** avec les callbacks, la méthode la plus utilisée est de prendre **2 paramètres** dans notre callback. Le 2ème paramètre est la donnée et le 1er est l'erreur. Si elle n'est pas _null_ ou _undefined_, elle contiendra un message d'erreur indiquant qu'une erreur est intervenue.

Si on reprend l'exemple ci-dessus avec le module ls :

    fs.readFile(filePath, function(err, data) {
        if (err) {
            throw err;
        }
        // Do something with data
    });

## Promise

Les promises sont plus puissantes.

Quand on exécute du code asynchrone, celui-ci va nous retourner une "promesse" qu'un résultat sera envoyé prochainement. Cette promesse est en fait un objet _Promise_ qui peut être resolve avec un résultat ou reject avec une erreur.

Quand on **récupère une promise**, on peut utiliser sa fonction _then()_ pour exécuter du code dès que la promesse est résolue et sa fonction _catch()_ dès qu'une erreur est survenue.

    functionThatReturnsAPromise()
        .then(function(data) {
            // Do somthing with data 
        })
        .catch(function(err) {
            // Do something with error
        });

Cette fonction **renvoie** une Promise. On peut utiliser sa fonction _then()_ en **lui passant une fonction qui sera exécutée dès qu'un résultat sera reçu (avec le résultat en question passé à notre fonction)**. La fonction _cache()_ fonctionne de la même manière, mais elle renvoie une erreur si un problème est survenu.

Le gros avantage est qu'on peut **chaîner** les Promise.

    returnAPromiseWithNumber2()
        .then(function(data) { // Data is 2
            return data + 1;
        })
        .then(function(data) { // Data is 3
            throw new Error('error');
        })
        .then(function(data) {
            // Not executed  
        })
        .catch(function(err) {
            return 5;
        })
        .then(function(data) { // Data is 5
            // Do something
        });

La fonction _returnAPromiseWithNumber2()_ va nous renvoyer une Promise qui va être résolue avec le nombre 2.

\#1 : La première fonction _then()_ récupère la valeur.  
\#2 : Cela retourne une nouvelle Promise qui est immédiatement résolue avec 3.  
\#3 : Le _then()_ suivant retourne une erreur.  
\#4 : Dès lors, c'est le _catch()_ qui sera exécuté et non le _then()_. Celui-ci retourne une nouvelle valeur qui est transformée en Promise qui est immédiatement résolu avec la valeur 5.  
\#5 : Le dernier _then()_ va exécuter cette valeur.

Dès lors, pour **gérer les erreurs** avec les Promise, il faut lancer une **exception** et l'attraper (dans la fonction _catch()_ de la Promise).

## Async/await

_async_ et _await_ sont 2 nouveaux mots clés qui permettent de gérer le code asynchrone de manière beaucoup plus intuitive, en bloquant l'exécution d'un code asynchrone jusqu'à ce qu'il retourne un résultat !

    async function fonctionAsynchrone1() {/* code asynchrone */}
    async function fonctionAsynchrone2() {/* code asynchrone */}
    
    async function fonctionAsynchrone3() {
     const value1 = await fonctionAsynchrone1();
     const value2 = await fonctionAsynchrone2();
     return value1 + value2;
    }

Fonctionnement hyper simple : **déclaration d'une fonction asynchrone = async**, **appelle d'une fonction asynchrone = await**.

La levée d'une erreur se fait aussi par une **exception**.

Pour intercepter cette erreur il suffit d'exécuter dans notre code asynchrone un bloc _try {} catch (e) {}_, l'erreur étant envoyée dans le _catch()_.

## Tips : Les deux dernières leçons sont un peu difficiles à comprendre, donc voici un cas concret !

Objectif de l'exercice : créer une fonction asynchrone (du nom de _compute()_) qui additionne les valeurs de deux autres fonctions asynchrones. On se servira de la valeur de retour de notre fonction _compute()_ comme Promise, pour afficher le résultat de la promesse dans le contenu HTML de l'élément ayant pour ID _result_.

    async function getNumber1() {
      return 10;
    }
    
    async function getNumber2() {
      return 4;
    }
    
    const result = document.getElementById('result');
    
    async function compute() {
      const value1 = await getNumber1();
      const value2 = await getNumber2();
      return value1 + value2;
    }
    
    compute()
      .then(function(data) {
        result.innerHTML = data;
      });