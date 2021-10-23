---
part: 2
id: 9
title: Modifier et supprimer des données

---
## Mettre à jour

Il faut ajouter une route PUT.

    app.put('/api/stuff/:id', (req, res, next) => {
      Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({ error }))
    });

Le premier argument de la méthode _updateOne()_ est l'objet de comparaison, le deuxième est la nouvelle version de l'objet en spécifiant que le nouvel id est bien celui des paramètres de la requête (pour être sûr de ne pas changer d'id).

## Suppression

Il faut ajouter une route DELETE.

    app.delete('/api/stuff/:id', (req, res, next) => {
      Thing.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
    });

La méthode _deleteOne()_ de notre modèle fonctionne comme _findOne()_ et _updateOne()_ dans le sens où nous lui passons un objet correspondant au document à supprimer. On envoit ensuite une réponse de réusitte ou d'échec au front-end.

Notre application **CRUD** (create, read, update, delete) est complète !

_TIPS POUR EXERCICE PRATIQUE :_ La version du package qui fait office de serveur n'est pas bonne. Dans _package.json_, il faut changer la version de "run-script-os" => **"run-script-os": "^1.1.5"** (il ne faut pas oublier de refaire _npm install_ et _npm start_).