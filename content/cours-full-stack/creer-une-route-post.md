---
part: 1
id: 5
title: Créer une route POST

---
Recevoir des données de l'application frontend

Sur l'application frontend développée dans le cadre de ce cours, il y a un formulaire qui envoie une demande POST (contenant un article à vendre) à notre route api/stuff.

Nativement, les données fournies avec la requête (= le cors de la requête) ne sont pas facilement exploitable à cause du format. Dès lors, il faut rajouter le package _body-parser_ au projet.

Dans le répertoire backend :

    npm install --save body-parser

Il faut ensuite l'importer en haut du fichier :

    const bodyParser = require('body-parser');

Ensuite, on ajoute un middleware global qui doit figurer juste après celui de la gestion des headers On se sert d'une méthode de body-parser pour transformer le corps de la requête en Json :

    app.use(bodyParser.json());

Maintenant que les données fournies sont exploitables grâce au format JSON, il faut ajouter un autre middleware qui traite uniquement les requêtes posts. Au lieu d'écrire _.use()_ (qui traite toutes les requêtes), on utilise _.post()_.

    app.post('/api/stuff', (req, res, next) => {
      console.log(req.body);
      res.status(201).json({
        message: 'Objet créé !'
      });
    });

Actuellement, on affiche la requête POST dans la console de Node, car on a pas encore la base de données.

**La route POST doit être placée au dessus du middleware pour les demandes GET.** Placer la route POST au dessus interceptera les demandes POST, en les empêchant d'atteindre le middleware GET

_TIPS :_ Le code HTTP 200 signifie que la requête est réussie. Le code HTTP 201 indique que la requête est réussie et a créée des données.