---
part: 3
id: 12
title: Créer des utilisateurs

---
## Configurer les routes d'authentification

Il faut créer un nouveau controller : _user.js_.

Celui-ci a besoin de la fonction _signup_ pour l'enregistrement de nouveaux utilisateurs.

Il a aussi besoin de la fonction _login_ pour la connexion d'utilisateurs existants.

    exports.signup = (req, res, next) => {
    
    };
    
    exports.login = (req, res, next) => {
    
    };

Il faut créer le routeur correspondant (donc dans le dossier routes) : _user.js_. Voici le code à mettre dans ce fichier :

    const express = require('express');
    const router = express.Router();
    
    module.exports = router;

On peut maintenant l'importer dans _app.js_ (au dessus de la connexion à la BDD) :

    const userRoutes = require('./routes/user');

Ensuite on l'enregistre (toujours dans _app.js_ et juste au dessus de l'export) :

    app.use('/api/auth', userRoutes);

Enfin, il faut terminer de configurer _le routeur route user.js_ en déclarant le controlleur pour associer les fonctions aux différentes routes et il faut créer les routes _signup_ et _login_.**Voici le routeur user.js final :**

    const express = require('express');
    const router = express.Router();
    const userCtrl = require('../controllers/user');
    
    router.post('/signup', userCtrl.signup);
    router.post('/login', userCtrl.login);
    
    module.exports = router;

## Créer des utilisateurs

Il faut installer le package de cryptage de mot de passe :

    npm install --save bcrypt

Ensuite, dans le controller _user.js_, on a besoin d'importer le modèle _User.js_ ainsi que d'importer le package _bcrypt_ :

    const bcrypt = require('bcrypt');
    
    const User = require('../models/User');

Il faut maintenant concevoir la logique de la fonction signup. Dans celle-ci il faut notamment hasher le mot de passe et enregistrer ce hash dans un User qu'on va lui-même enregistrer en base de données.

    exports.signup = (req, res, next) => {
        bcrypt.hash(req.body.password, 10) // On hash le mot de passe
            .then(hash => { // On récupère le hash du mot de passe qu'on va enregistrer dans un User qu'on va enregistrer dans la base de données.
                const user = new User({
                    email: req.body.email,
                    password: hash
                });
                user.save()
                    .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                    .catch(error => res.status(400).json({ error }));
            })
            .catch(error => res.status(500).json({ error }));
    };