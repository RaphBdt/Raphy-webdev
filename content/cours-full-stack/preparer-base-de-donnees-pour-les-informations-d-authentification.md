---
part: 3
id: 11
title: Préparer base de données pour les informations d'authentification

---
## Stocker des mots de passe sécurisés

Il ne faut **jamais** stocker des mots de passe sous forme de texte brut. Il faut les stocker sous la forme de **hash** ou de chaîne chiffrée.

Pour ça, nous allons utiliser le package _bcrypt_. Celui-ci a pour objectif de chiffrer et de créer un hash des mots de passe en base de données. Quand un utilisateur se connectera, _bcrypt_ va créer un hash avec le mot de passe entré puis le comparera avec le hash stocké en base de données.

Ces deux hash ne sont pas les mêmes pour des raisons de sécurité. La puissance de _bcrypt_ c'est d'indiquer si les deux hash ont été générés à l'aide d'un même mot de passe initial.

## Créer un modèle de données

On créée un nouveau modèle _User.js_.

    const mongoose = require('mongoose');
    
    const userSchema = mongoose.Schema({
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    });
    
    module.exports = mongoose.model('User', userSchema);

Petite précision à la ligne de l'email... _unique: true_ signigie qu'il ne pourra pas y avoir plusieurs utilisateurs avec le même mail.   
Même si cette technique marche, on peut tout de même avoir des erreurs illisibles de la part de MongoDB. Pour corriger ce problème, on va installer le package suivant :

    npm install --save mongoose-unique-validator

Il faut ensuite l'importer dans notre modèle (en haut du fichier) :

    const uniqueValidator = require('mongoose-unique-validator');

Enfin, il faut appliquer ce validateur au schéma avant d'en faire un modèle (sur l'avant dernière ligne, juste avant l'export) :

    userSchema.plugin(uniqueValidator);

Avec ce modèle, on ne pourra pas avoir plusieurs utilisateurs avec la même adresse mail !