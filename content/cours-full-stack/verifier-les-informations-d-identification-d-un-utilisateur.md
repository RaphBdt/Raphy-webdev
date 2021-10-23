---
part: 3
id: 13
title: Vérifier les informations d'identification d'un utilisateur

---
## Implémenter la fonction login

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
                            token: 'TOKEN'
                        });
                    })
                    .catch(error => res.status(500).json({ error }));
            })
            .catch(error => res.status(500).json({ error }));
    };

Voici la logique de la fonction login. Dans celle-ci il on regarde si l'utilisateur existe, si le mot de passe est correct et si c'est le cas, on renvoie l'ID de l'utilisateur et un token. Le code est commenté pour avoir plus de détails.

Avant d'aller plus loin, il est conseiller de supprimer tous les éléments créés, car ils ne sont pas associés au bon ID utilisateur.