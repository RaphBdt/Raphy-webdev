---
part: 2
id: 7
title: Créer un schéma de données

---
L'un des avantages à utiliser **Mongoose** pour gérer notre base de données **MongoDB** est que nous pouvons implémenter des schémas de données stricts, qui permettent de rendre notre application plus robuste. Dans un premier temps, on va créer un schéma **Thing** pour tout objet mis en vente dans notre application.

## Créer un schéma Thing

La première étape pour utiliser Mongoose pour créer une interface avec notre base de données MongoDB, c'est de créer un schéma (un modèle de données). Cela va nous permettre d'intéragir avec notre base de données (lecture, modification...).

Le schéma Mongoose doit réfléter la structure des objects que nous avions renseignés dans le code manuellement (ceux-ci correspondent à un objet mis en vente sur l'application) :

    {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: '',
        price: 4900, // Le prix est en centime pour éviter tout problème (c'est plus simple que de mettre des prix après la virgule)
        userId: 'qsomihvqios',
    }
                

Pour créer un schéma, il faut, dans le répertoire _backend_ créer un dossier **_models_** et dans ce même dossier créer un fichier **_Thing.js_**.

Dans notre cas, il faut y coller ce code :

    const mongoose = require('mongoose'); // Nous importons Mongoose
    
    const thingSchema = mongoose.Schema({ // On créée un schéma de données.
        // On utilise la fonction Schema fournit par le package Mongoose.
        // On passe les différents champs auxquels notre schéma aura besoin.
        // L'id est automatiquement généré.
        title: { type: String, required: true }, // title est la clé qui sera le nom du champ. L'objet configure le titre (il doit être de type string et doit obligatoirement être rempli pour être ajouté en BDD)
        description: { type: String, required: true },
        imageUrl: { type: String, required: true },
        userId: { type: String, required: true },
        price: { type: Number, required: true },
    });
    
    module.exports = mongoose.model('Thing', thingSchema); // Pour pouvoir utiliser ce schéma comme modèle (l'utiliser pour lire, modifier dans la BDD...). Le premier argument passé à la fonction est le modèle, quant au deuxième argument, il s'agit du schéma.

_Ce code est commenté pour une meilleure compréhension, mais c'est en réalité très simple à comprendre : on créée un schéma de données qui contient les champs souhaités pour chaque Thing._