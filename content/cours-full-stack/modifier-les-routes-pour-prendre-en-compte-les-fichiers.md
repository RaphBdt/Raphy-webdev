---
part: 4
id: 17
title: Modifier les routes pour prendre en compte les fichiers

---
Précédemment, dans notre application, on devait juste indiquer l'URL d'une image. Mais maintenant, comme on veut que les images soient directement envoyées sur notre serveur, il faut faire des modifications. En effet, il faut modifier la route POST pour prendre en compte et enregistrer l'URL des images pour chaque objet enregistré dans la base. De plus, le format des informations entrantes sera différent, car un fichier y est joint. Enfin, il faudra modifier la route PUT, car l'utilisateur peut modifier les informations sans changer l'image, ou bien avec un changement d'image. Cela signifie qu'il faudra gérer différement la requête entrante en fonction.

## Modifier route PUT

Il faut appliquer le middleware _multer-config.js_ aux routes concernées par l'envoie de fichiers. Attention à bien mettre _multer_ après _auth_, car sinon, cela signifierait qu'un utilisateur non authentifié pourrait envoyer des images. Pour l'instant, dans _routes/stuff.js_, on a juste à importer le middleware et à changer la route POST :

    const multer = require('../middleware/multer-config');
    
    router.post('/', auth, multer, stuffCtrl.createThing);

On va maintenant modifier la logique de création d'objet. En effet, il faut savoir que le format de la requête a été changé pour pouvoir envoyer un fichier avec la requête. Maintenant, sur le corps de la requête, on a _req.body.thing_ qui sera une chaine de caractère.

    exports.createThing = (req, res, next) => {
        const thingObject = JSON.parse(req.body.thing); // On extrait l'objet JSON du .thing
        delete thingObject._id;
        const thing = new Thing({
          ...thingObject,
          imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` // On indique l'URL de l'image générée par notre middleware multer. On génère ici une URL qui fonctionne aussi bien en local qu'en production. On a accès au nom du fichier grâce à req.file.filename
        });
        thing.save()
          .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
          .catch(error => res.status(400).json({ error }));
    };

_TIPS 1 :_ Quand une requête contient un fichier, les données entrantes sont sous la forme de _form-data_. _JSON.parse()_ permet de transformer des chaînes de caractères en JSON exploitable.

_TIPS 2 :_ Les backticks permettent d'écrire une chaîne complexe en JavaScript.

Ce qu'on a fait ne suffit pas encore. Pour rappel, **_app.js_ gère toutes les requêtes envoyées au serveur**. Pour dire à notre application Express de servir le dossier _images_ quand on fera une requête à _/images_, il faut créer un nouveau middleware (_dans app.js_) :

    app.use('/images', express.static(path.join(__dirname, 'images'))); // express.static() permet de servir un dossier static.

Toujours dans _app.js_, il faut bien penser à importer _path_ :

    const path = require('path'); // Nous donnes accès au chemin de notre système de fichiers

## Modifier la route PUT

Rappel : il y a deux situations à prendre en compte. Soit l'utilisateur a seulement modifié des informations de son objet sans changer l'image. Ou alors rajoute une image. Le format des requêtes ne seront pas les mêmes.

Dans _routes/stuff.js_, il faut ajouter _multer_ à la route PUT :

    router.put('/:id', auth, multer, stuffCtrl.modifyThing);

Voici le nouveau controller de la route PUT (dans _controllers/stuff.js_) :

    exports.modifyThing = (req, res, next) => {
        const thingObject = req.file ? // On teste si req.file existe. Si c'est le cas, il y a un fichier dans la requête.
          { 
            ...JSON.parse(req.body.thing), // Même raisonnement que la route POST
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
          } : { ...req.body }; // Si req.file n'existe pas, fait simplement une copie de req.body. 
        Thing.updateOne({ _id: req.params.id }, { ...thingObject, _id: req.params.id }) // On fait une copie du thingObject qu'on vient tout juste de créer avec la condition
          .then(() => res.status(200).json({ message: 'Objet modifié !'}))
          .catch(error => res.status(400).json({ error }))
    };

En résumé, ce code dit que si on trouve un fichier, on utilise la même logique que la route POST (on récupère la chaîne de caractère, on la parse en objet et on modifie l'imageUrl). Sinon on prend simplement le corps de la requête. L'update prendra alors l'objet (thingObject) qu'on a créé avec la condition.