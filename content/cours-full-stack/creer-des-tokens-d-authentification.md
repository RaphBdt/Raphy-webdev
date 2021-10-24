---
part: 3
id: 14
title: Créer des tokens d'authentification

---
Aujourd'hui, l'authentification par Token est un moyen très sécurisé. Le principe est le suivant : quand un utilisateur se connecte, il reçoit un encodé depuis le serveur que le front-end va lier à chaque requête. Ensuite, le serveur peut vérifier ce token pour chaque requête authentifiée.

## Créer des tokens d'authentification

Notre objectif est que toutes les requêtes effectuées par le front-end soient vérifiées pour s'assurer qu'elles sont authentifiées. C'est à dire que lorsque l'utilisateur est connecté, le front-end va envoyer un token à chaque requête pour confirmer à l'API que la requête est authentifiée.

Pour faire des tests, on peut aller sur Google Chrome, inspecter l'élément, puis aller dans "Networks". Ici, on a l'ensemble des requêtes. Si on clique sur l'une des dernières, on peut voir dans "Request Headers" notre token (ligne "Authorization").  
Il s'agit en fait du token renvoyé par le back-end au front-end. Ensuite, le front-end le renvoie de nouveau dans la requête à destination de l'API pour récupérer les bonnes informations.

Ce qu'on veut maintenant, c'est encoder un token qu'on peut vérifier pour être certain que l'utilisateur s'est bien authentifié.

Pour ça, il faut installer le package :

    npm install --save jsonwebtoken

Dans le controller _user.js_, il faut importer le package :

    const jwt = require('jsonwebtoken');

Ensuite, au lieu de renvoyer une chaine de caractère en tant que token, on va appeler une fonction du package jsonwebtoken.

    exports.login = (req, res, next) => {
        User.findOne({ email: req.body.email }) // Trouver l'utilisateur dans la base de données
            .then(user => {
                if (!user) { // Si le mail de l'utilisateur n'est pas répertorié en BDD
                    return res.status(401).json({ error: 'Utilisateur non trouvé !' }) // On dit qu'on ne le trouve pas
                }
                bcrypt.compare(req.body.password, user.password) // On utilise bcrypt pour comparer le mdp envoyé par l'utilisateur qui essaye de se connecter avec le hash enregistré avec le user qu'on a reçu
                    .then(valid => {
                        if (!valid) { // Si la comparaison n'est pas bonne
                            return res.status(401).json({ error: 'Mot de passe incorrect !' }) // On dit que le mot de passe n'est pas bon 
                        }
                        res.status(200).json({ // Si la comparaison est bonne, on renvoie l'ID de l'utilisateur est un token.
                            userId: user._id,
                            token: jwt.sign(
                                { userId: user._id },
                                'RANDOM_TOKEN_SECRET',
                                { expiresIn: '24h' }
                            )
                        });
                    })
                    .catch(error => res.status(500).json({ error }));
            })
            .catch(error => res.status(500).json({ error }));
    };

Le premier argument de la fonction est les données qu'on veut encoder. Le deuxième argument est la clé secrète de l'encodage. Le troisième argument indique quand expire le token.  
Petite précision pour le premier argument : on encode le userId. L'intérêt est que si on créée un objet avec un utilisateur, on ne va pas pouvoir le modifier avec un autre utilisateur.

On peut faire maintenant un nouveau test avec Google Chrome pour voir si le token est chiffré.