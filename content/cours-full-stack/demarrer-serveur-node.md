---
part: 1
id: 2
title: Démarrer serveur Node

---
Qu'est-ce que Node ?

**Node** est le **_runtime_** qui permet d'écrire toutes nos tâches côté serveur, en JavaScript, telles que la logique métier, la persistance des données et la sécurité. Il ajoute également des fonctionnalités que le JavaScript du navigateur standard ne possède pas.

**Express** est un **framework** reposant sur Node qui facilite la création et la gestion des serveurs Node.

## Initialiser notre projet

À partir du dossier _backend_, il faut taper la commande _npm init_. On peut tout laisser par défaut si on veut, mais le point d'entrée doit être _server.js_.

On peut également initialiser un dépôt Git en exécutant _git init_ là aussi depuis le dossier _backend_. Il faut aussi créer un fichier _.gitignore_ contant la ligne _node_modules_ car celui-ci deviendra très volumineux.

Enfin, il faut aussi créer dans le dossier _backend_ le fichier _server.js_ qui contiendra notre premier serveur node.

## Démarrer un serveur basique

Dans _server.js_, il faut mettre le code suivant :

    const http = require('http');
    
    const server = http.createServer((req, res) => {
        res.end('Voilà la réponse du serveur !');
    });
    
    server.listen(process.env.PORT || 3000);

Ici, on crée un serveur qui s'attend à recevoir des requêtes HTTP et à y répondre.

À la première ligne, on importe le package HTTP de Node.

À la deuxième ligne, grâce à notre objet "http", on crée un serveur. La méthode "createServer" prend comme argument la fonction qui sera appelée à chaque requête reçue par le serveur. Dans cet exemple, on utilise la méthode _end_ pour renvoyer une réponse.

Enfin, à la dernière ligne, on configure le serveur pour qu'il écoute le bon port : soit le 3000 ; soit un autre port par défaut (grâce à _process.env.PORT_).

On démarre le serveur avec : _node server_ à partir de la ligne de commande. Pour vérifier la réponse, on peut utiliser [Postman](https://www.postman.com/) (_pour le configurer, j'ai juste dû télécharger le logiciel et utiliser leur plateforme sur Google Chrome (pas safari) ; il faut indiquer le lien http://localhost:3000_).

Petit problème pour le moment : on doit à chaque fois relancer notre serveur pour actualiser sa réponse en cas de fichier(s) modifié(s).

## Installer nodemon

Pour simplifier le développement Node, on peut installer _nodemon_ :

    npm install -g nodemon

Au lieu d'utiliser la commande _node server_, on peut maintenant utiliser **_nodemon server_**.

Il surveillera la modification de nos fichiers et redémarrera le serveur quand il aura besoin d'être mis à jour.