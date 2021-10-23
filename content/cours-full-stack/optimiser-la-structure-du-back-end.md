---
part: 3
id: 10
title: Optimiser la structure du back-end

---
L'authentification est assez complexe à mettre en place sur Node.js. Actuellement, toute notre logique se situe dans le fichier _app.js_. Celui-ci va vite devenir trop volumineux, il faut donc rendre la chose plus modulaire.

## Configurer le routage

Premièrement, créons un nouveau dossier **_routes_** à la racine du répertoire backend. À l'intérieur de celui-ci, il faut créer un fichier **_stuff.js_**.

Pour implémenter des routes dans ce fichier, il faut créer un routeur :

    const express = require('express');
    const router = express.Router();

**Désormais, au lieu d'utiliser par exemple _app.get_ ou _app.post_, il faut utiliser _router.get_, _router.post_...  
Il faut également changer toutes les routes : _'/api/stuff/:id'_ deviendra seulement _':/id'_ (*).**

Maintenant, il faut couper toute notre logique de route dans _app.js_ et la coller dans _stuff.js_ (avec "router" au lieu de "app" et avec les nouvelles routes).

Il faut ensuite exporter le router avec :

    module.exports = router;

**L'importation de notre modèle (dans le cadre de ce cours : Thing) doit désormais figurer dans stuff.js et non dans staff.js (bien penser à modifier le chemin d'accès).**

Dans _app.js_, il faut maintenant importer le router :

    const stuffRoutes = require('./routes/stuff');

**(*) Si on peut se permettre de mettre des routes simples dans _stuff.js_, c'est parce que dans _app.js_ on ajoute cette ligne suivante tout en bas (juste au dessus de l'export) :**

    app.use('/api/stuff', stuffRoutes);

Dans le code ci-dessus, on importe le routeur et on lui associe une route ('/api/stuff').

Notre code est désormais mieux agencé. Voici le _stuff.js_ à ce stade :

    const express = require('express');
    const router = express.Router();
    
    const Thing = require('../models/Thing');
    
    router.post('/', (req, res, next) => {
      delete req.body._id;
      const thing = new Thing({
        ...req.body
      });
      thing.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
    });
    
    router.put('/:id', (req, res, next) => {
      Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({ error }))
    });
    
    router.delete('/:id', (req, res, next) => {
      Thing.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
    });
    
    router.get('/:id', (req, res, next) => {
      Thing.findOne({ _id: req.params.id })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
    });
    
    router.get('/', (req, res, next) => {
        Thing.find()
          .then(things => res.status(200).json(things))
          .catch(error => res.status(400).json({ error }));
    });
    
    module.exports = router;

Et le _app.js_ à ce stade :

    const express = require('express');
    const bodyParser = require('body-parser');
    const mongoose = require('mongoose');
    
    const stuffRoutes = require('./routes/stuff');
    
    mongoose.connect('mongodb+srv://Raphy73:zyuUXMRuD8qnoKQY@cluster0.jgfs5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      { useNewUrlParser: true,
        useUnifiedTopology: true })
      .then(() => console.log('Connexion à MongoDB réussie !'))
      .catch(() => console.log('Connexion à MongoDB échouée !'));
    
    const app = express(); // Notre application
    
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); 
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
    });
    
    app.use(bodyParser.json());
    
    app.use('/api/stuff', stuffRoutes);
    
    module.exports = app;

## Configurer les contrôleurs

Premièrement, il faut créer un dossier _controllers_ à la racine du dossier backend, puis créer un fichier _struff.js_ à l'intérieur de celui-ci.

L'idée c'est de séparer la logique routing de la logique métier.

**Cas concret :**

Dans _controllers/stuff.js_, exportons une fonction qui s'occupe de gérer la route POST :

    const Thing = require('../models/Thing');
    
    exports.createThing = (req, res, next) => {
        delete req.body._id;
        const thing = new Thing({
          ...req.body
        });
        thing.save()
          .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
          .catch(error => res.status(400).json({ error }));
    }

Dans _routes/stuff.js_, on peut remplacer la ligne qui importe le modèle Thing par une autre qui importe le controller :

    const stuffCtrl = require('../controllers/stuff');

Notre route ressemble désormais est désormais largement simplifiée :

    router.post('/', stuffCtrl.createThing);

On a un code désormais beaucoup plus modulaire et donc simple à maintenir !

**Voici le contrôleur final :**

    const Thing = require('../models/Thing');
    
    exports.createThing = (req, res, next) => {
        delete req.body._id;
        const thing = new Thing({
          ...req.body
        });
        thing.save()
          .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
          .catch(error => res.status(400).json({ error }));
    };
    
    exports.modifyThing = (req, res, next) => {
        Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet modifié !'}))
          .catch(error => res.status(400).json({ error }))
    };
    
    exports.deleteThing = (req, res, next) => {
        Thing.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
          .catch(error => res.status(400).json({ error }));
    };
    
    exports.getOneThing = (req, res, next) => {
        Thing.findOne({ _id: req.params.id })
          .then(thing => res.status(200).json(thing))
          .catch(error => res.status(404).json({ error }));
    };
    
    exports.getAllThings = (req, res, next) => { // Le premier argument est l'URL visée par l'application (autrement appelée endpoint ou route sur notre API). app.use traite toutes les requêtes
        Thing.find()
          .then(things => res.status(200).json(things))
          .catch(error => res.status(400).json({ error }));
    };

**Et voici le routeur final :**

    const express = require('express');
    const router = express.Router();
    
    const stuffCtrl = require('../controllers/stuff');
    
    router.post('/', stuffCtrl.createThing);
    router.put('/:id', stuffCtrl.modifyThing);
    router.delete('/:id', stuffCtrl.deleteThing);
    router.get('/:id', stuffCtrl.getOneThing);
    router.get('/', stuffCtrl.getAllThings);
    
    module.exports = router;