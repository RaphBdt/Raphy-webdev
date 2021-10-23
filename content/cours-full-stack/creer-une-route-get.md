---
part: 1
id: 4
title: Créer une route GET

---
Rappel : Ce cours est basé sur une application front-end déjà réalisée (avec Angular). Pour lancer le serveur, il faut faire _ng serve_ et on accès à l'application à _http://localhost:4200_.

## Afficher des articles

Dans _app.js_, on peut remplacer tout le middleware par le suivant :

    app.use('/api/stuff', (req, res, next) => {
        const stuff = [
          {
            _id: 'oeihfzeoi',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: '',
            price: 4900, // Le prix est en centime pour éviter tout problème (c'est plus simple que de mettre des prix après la virgule)
            userId: 'qsomihvqios',
          },
          {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième objet',
            description: 'Les infos de mon deuxième objet',
            imageUrl: '',
            price: 2900,
            userId: 'qsomihvqios',
          },
        ];
        res.status(200).json(stuff);
      });
                

Dans la méthode _use_, le premier argument est l'URL visée par l'application (autrement appelée endpoint ou route sur notre API). Il s'agit donc de l'URL demandée par l'application front-end (dans notre cas, la route est http://localhost:3000/api/stuff).

Dans ce middleware, nous créons un tableau contenant 2 objets. C'est la forme des objets attendue par le frontend. Ce middleware attribue également un code 200 à la réponse et renvoie en réponse json notre tableau.

## Erreur de CORS

CORS = Cross Origin Ressource Sharing

Il s'agit d'un système de sécurité qui bloque les appels HTTP d'être effectués entre des serveurs différents. Dans notre cas, on a deux server : http://localhost:3000 et http://localhost:4200. Pour résoudre ce problème de sécurité qui nous contraint, on doit ajouter des headers à notre objet _response_.

Dans _app.js_, il faut ajouter le middleware suivant avant la route d'API :

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*'); // On dit que l'origine qui a le droit d'accéder à notre API c'est tout le monde.
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // On donne l'autorisation d'utiliser certains en-têtes (headers) sur l'objet requête.
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // On donne l'autorisation d'utiliser certaines autres méthodes.
        next();
      });

_Pour plus de détails, j'ai mis un commentaire par ligne._

Ce middleware résout donc notre problème de sécurité. Comme il n'y a pas de route spécifiée, ce middleware est appliqué à toutes les requêtes envoyées à notre serveur.