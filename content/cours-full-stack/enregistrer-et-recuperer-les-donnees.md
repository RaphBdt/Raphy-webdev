---
part: 2
id: 8
title: Enregistrer et récupérer les données

---
Grâce à notre modèle Thing, on va facilement pouvoir enregistrer et récupérer des données. Commençons avec la route POST.

## Enregistrement des Things dans la base de données

_Retour dans le fichier app.js_

Il faut dans un premier temps importer le modèle qu'on a créé au cours précédent :

    const Thing = require('./models/Thing');

On peut supprimer tout qu'on avait écrit précédemment dans la route post.

_Grâce à l'application frontend, les requêtes qui arrivent à cette route post ont dans le corps de la requête les informations pour le nouveau Thing qui va être ajouté à la base._

Pour pouvoir exploiter le corps de la requête, il faut créer une nouvelle instance de notre modèle Thing. On lui passe un objet qui va contenir tous les éléments auxquels on a besoin. Grâce à **_...req.body_**, on copie tous les champs du corps de la requête et ça va détailler tous les éléments (titre, description...).  
_L'opérateur spread "..." est utilisé pour faire une copie._

    app.post('/api/stuff', (req, res, next) => {
      const thing = new Thing({
        ...req.body
      });
    }); 

Malheureusement, notre application frontend nous renvoie un id qui ne sera pas le bon (rappel : MongoDB le génère lui-même automatiquement), donc il faut enlever _id_ du corps de la requête.

    delete req.body._id;

Maintenant, il faut enregistrer cet objet dans la base de données. C'est tout simple, il faut juste utiliser la méthode save de cet objet. Elle retourne une Promise, on doit donc spécifier si tout s'est bien passé ou pas avec _then_ et _catch_.

_Bon à savoir :_ La base de données MongoDB est fractionnée en **collections**. Le nom de la collection est défini par défaut sur le pluriel du nom du même modèle (ici _Things_).

      thing.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));

**Notre route POST finale :**

    app.post('/api/stuff', (req, res, next) => { 
      delete req.body._id;
      const thing = new Thing({
        ...req.body
      });
      thing.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
    }); 

_TIPS :_ Pour le moment, c'est normal que dans la console on ait "Form submission canceled because the form is not connected".

## Récupération de la liste de Things en vente

On va maintenant modifier la route GET, qui renvoie les données, en commençant par supprimer ce qu'on avait mis en dur.

On va utiliser une méthode fournit par notre modèle pour trouver des objets :

    app.use('/api/stuff', (req, res, next) => {
        Thing.find()
          .then(things => res.status(200).json(things))
          .catch(error => res.status(400).json({ error }));
    });

Il y a là aussi une Promise avec then et catch. Le tableau des things retourné par la base est récupéré grâce au then.

## Récupération d'un Thing spécifique

Pour le moment, l'affichage d'un seul élément ne fonctionne pas. L'application frontend doit avoir un appel GET différent pour trouver un Thing individuel. Il faut donc implémenter cette route.

Il faut donc créer un autre app.get() (**d'ailleurs, on peut modifier notre dernier app.use en app.get également, car on veut juste que la route ne réponde aux requêtes GET**).

Ici, il faut écrire une route dynamique : _/api/stuff/:id_. Pour avoir accès à l'id de la route :

    req.params.id

**Résultat final pour l'affichage d'une page produit :**

    app.get('/api/stuff/:id', (req, res, next) => {
      Thing.findOne({ _id: req.params.id }) // On veut que l'id de l'objet en vente soit le même que celui de la route.
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
    });