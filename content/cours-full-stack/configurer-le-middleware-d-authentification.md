---
part: 3
id: 15
title: Configurer le middleware d'authentification

---
La dernière étape pour implémenter l'authentification dans notre application est de créer un middleware qui vérifie le token envoyé par l'application front-end. On vérifie non-seulement qu'il s'agit d'un token valable, mais aussi que si un userId est envoyé avec la requête il corresponde bien à celui encodé dans le token.

Il faut créer un nouveau dossier appelé _middleware_ avec un fichier _auth.js_ à l'intérieur de celui-ci.

    const jwt = require('jsonwebtoken'); // Importe le package 
    
    module.exports = (req, res, next) => { // On exporte un middleware
        try {
            const token = req.headers.authorization.split(' ')[1]; // On récupère le token dans le header authorization
            const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET')  // On décode le token. On veut vérifier le token avec la clé secrète utilisée pour la création du token (il faut que ce soit la même que celle de la fonction login).
            const userId = decodedToken.userId;  // On récupère le userId présent dans le token.
            if (req.body.userId && req.body.userId !== userId) { // S'il y a un userId avec la requête, on veut vérifier qu'elle correspond bien à celle du token
                throw 'User ID non valable !'; // On retourne une erreur et on ne veut pas authentifier la requête.
            } else {
                next(); // Il faut savoir que pour chaque requête sur une route protégée, on va d'abbord passer par le middleware de ce fichier. Si on arrive à cette ligne, on peut passer la requête au prochain middleware.
            }
        } catch (error) {
            res.status(401).json({ error: error | 'Requête non authentifiée' }) // Si on reçoit une erreur on l'envoie, sinon on va juste dire 'Requête non authentifiée'.
        }
    };

Ce code représente notre middleware d'authentification. Il est commenté ligne par ligne pour mieux comprendre.

Pour les routes qu'on veut protéger, il faut rajouter le middleware qu'on vient de créer avant le controller.

Pour ça, dans un premier temps, il faut importer le middleware (ici dans _routes/stuff.js_, car ce sont ces routes qu'on veut protéger) :

    const auth = require('../middleware/auth');

Et puis on l'applique sur les routes qu'on veut protéger :

    router.post('/', auth, stuffCtrl.createThing);
    router.put('/:id', auth, stuffCtrl.modifyThing);
    router.delete('/:id', auth, stuffCtrl.deleteThing);
    router.get('/:id', auth, stuffCtrl.getOneThing);
    router.get('/', auth, stuffCtrl.getAllThings);

C'est à dire que, concrètement, il faut être connecté pour pouvoir utiliser ces routes.