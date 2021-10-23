---
part: 1
id: 3
title: Créer une application Express

---
En réalité, coder des serveurs web en Node est long et laborieux. Express nous simplifie la vie et nous permet de déployer nos API beaucoup plus rapidement.

## Installer Express

Pour ajouter et installer Express à notre projet, il faut taper la commande :

    npm install --save express

Il faut maintenant créer un fichier _app.js_ dans le répertoire _backend_. Il faut insérer ce code :

    const express = require('express');
    
    const app = express();
    
    module.exports = app;

La première ligne importe Express.  
La deuxième ligne est notre application.  
Enfin, la dernière ligne exporte l'application pour qu'on puisse y accéder depuis les autres fichiers

## Exécuter l'application Express sur le serveur Node

Il faut modifier le fichier server.js de cette façon :

    const http = require('http');
    const app = require('./app');
    
    app.set('port', process.env.PORT || 3000);
    const server = http.createServer(app);
    
    server.listen(process.env.PORT || 3000);

Dans la troisième ligne, on dit à l'application Express sur quel port elle doit tourner.  
Dans l'avant dernière ligne, on passe au serveur notre application.

Faire cette action n'est pas encore suffisante, car dans _app.js_ on n'a pas encore configuré de moyen de répondre. Dès lors, il faut que le fichier _app.js_soit comme ça :

    const express = require('express');
    
    const app = express();
    
    app.use((req, res) => {
       res.json({ message: 'Votre requête a bien été reçue !' }); 
    });
    
    module.exports = app;

Notre serveur Node gère correctement notre application Express en on récupère bien un objet JSON au moment de faire une requête.

## Ajouter des middleware

Une application Express est une série de fonctions appelées **_middleware_**. Chaque élément de middleware reçoit les objets _request_, _response_ et peut tous les lire / manipuler / analyser. Le middleware Express reçoit aussi la méthode _next_ qui permet à chaque middleware de passer au middleware suivant.

    const express = require('express');
    
    const app = express();
    
    app.use((req, res, next) => { 
        console.log('Requête reçue !'); 
        next(); // next permet de passer au middleware suivant
    });
    
    app.use((req, res, next) => {
        res.status(201); // Change le status 
        next();
    });
    
    app.use((req, res, next) => {
        res.json({ message: 'Votre requête a bien été reçue !' });
        next();
    });
    
    app.use((req, res) => {
        console.log('Réponse envoyée avec succès !');
    });
    
    module.exports = app;

Par exemple, cette application contient 4 éléments de middleware et s'exécutent dans l'ordre grâce à _next()_.

_TIPS :_ pour voir apparaître les messages dans les _console.log_, il faut faire une requête au serveur (grâce à Postman par exemple).

## Améliorer server.js

Notre code dans _server.js_ doit être :

    const http = require('http');
    const app = require('./app');
    
    const normalizePort = val => {
      const port = parseInt(val, 10);
    
      if (isNaN(port)) {
        return val;
      }
      if (port >= 0) {
        return port;
      }
      return false;
    };
    const port = normalizePort(process.env.PORT || '3000');
    app.set('port', port);
    
    const errorHandler = error => {
      if (error.syscall !== 'listen') {
        throw error;
      }
      const address = server.address();
      const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
      switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges.');
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(bind + ' is already in use.');
          process.exit(1);
          break;
        default:
          throw error;
      }
    };
    
    const server = http.createServer(app);
    
    server.on('error', errorHandler);
    server.on('listening', () => {
      const address = server.address();
      const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
      console.log('Listening on ' + bind);
    });
    
    server.listen(port);

Description rapide :

La fonction _normalizePort_ renvoie un port valide, qu'il soit fourni sous la forme d'un numéro ou d'une chaine. La fonction _errorHandler_ gère mieux et erreurs et les enregistre dans le serveur. Un écouteur d'évènements est également enregistré, consignant le port ou le canal nommé sur lequel le serveur s'exécute dans la console.

Tout est configuré ! On peut désormais ajouter des fonctionnalités appropriées à l'application Express.