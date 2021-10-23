---
part: 2
id: 6
title: Configurer notre base de données

---
Nous allons rendre notre application dynamique grâce à la couche de base de données que nous allons intégrer sur notre serveur : Mongo DB

Il est possible de télécharger et exécuter MongoDB sur sa machine, mais ici on utilisera la couche gratuite de MongoDB Atlas.

## Configurer MongoDB Atlas

Il faut se créer un compte sur [MongoDB](https://www.mongodb.com/cloud/atlas).

Ensuite, il faut créer un _cluster_ et le configurer avec l'**option AWS** et **uniquement avec les options gratuites**.

Après ça il faut aller dans **Database Access** et créer un utilisateur disposant de la capacité de lecture et d'écriture dans n'importe quelle base de données. Il faut choisir un nom d'utilisateur et un mot de passe (à retenir).

Enfin, il faut aller dans **Network Access**, cliquer sur _Add IP Adress_ et autoriser l'accès depuis n'importe où (_Add access from Anywhere_).

## Connecter notre API à notre cluster MongoDB

Depuis MongoDB Atlas, il faut cliquer sur **Connect** et choisir **Connect your application**. Il faut choisir la version la plus récente de Node.js, puis **Connection String Only** et faire une copie de la chaine retournée.

Maintenant, il faut retourner dans le répertoire **backend** de notre projet et installer le package Mongoose qui facilite les interactions avec notre base de données :

    npm install --save mongoose

Une fois l'installation terminée, il faut importer _mongoose_ dans _app.js_ :

    const mongoose = require('mongoose');

Ensuite, il faut ajouter le code suivant, toujours dans _app.js_, juste en dessous de la déclaration de la constante _app_. Il faut bien évidemment mettre notre propre lien et ne pas oublier de mettre le mot de passe qu'on a créé dans PASSWORD (on enlève les deux crochets également) :

    mongoose.connect('mongodb+srv://jimbob:<.PASSWORD>@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority',
      { useNewUrlParser: true,
        useUnifiedTopology: true })
      .then(() => console.log('Connexion à MongoDB réussie !'))
      .catch(() => console.log('Connexion à MongoDB échouée !'));

Si tout s'est bien passé on a le message "Connexion à MongoDB réussie !" dans notre console. On peut essayer de redémarrer le serveur si ça ne marche pas.