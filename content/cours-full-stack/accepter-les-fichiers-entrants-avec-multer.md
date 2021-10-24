---
part: 4
id: 16
title: Accepter les fichiers entrants avec multer

---
Dans cette dernier partie du cours, on va mettre en place un système de **téléchargement de fichiers**. Pour ça, on va utiliser _multer_, un package qui nous permet de gérer les fichiers entrants dans les requêtes HTTP.

## Configurer le middleware de gestion de fichiers

Il faut dans un premier temps installer multer :

    npm install --save multer

Il faut créer un dossier _images_ à la racine de notre dossier _backend_.

Ensuite, il faut créer un fichier _multer-config.js_ dans le dossier _middleware_.

    const multer = require('multer');
    
    const MIME_TYPES = { // On génère les extensions des fichiers en fonction de leurs MIME types (images/jpeg...)
        'image/jpg': 'jpg',
        'image/jpeg': 'jpg',
        'image/png': 'png'
    };
    
    const storage = multer.diskStorage({ // On créée un objet de configuration pour multer. La fonction de multer diskStorage signifie qu'on va enregistrer sur le disque.
        destination: (req, file, callback) => { // On indique dans quel dossier enregistrer les fichiers
            callback(null, 'images') // null signifie qu'il n'y a pas d'erreur
        },
        filename: (req, file, callback) => { // On indique à molter quel nom de fichier utiliser
            const name = file.originalname.split(' ').join('_'); // On prend le nom du fichier envoyé en éliminant les espaces
            const extension = MIME_TYPES[file.mimetype]; // On créée l'extension du fichier grâce à notre objet MIME_TYPES
            callback(null, name + Date.now() + '.' + extension); // Il s'agit du nom final du fichier. On rend ce nom unique grâce au timestamp Date.now()
        }
    });
    
    module.exports = multer({ storage }).single('image'); // On exporte en appelant la fonction multer, à laquelle on passe notre objet storage. Enfin, on appelle la fonction single pour indiquer qu'il s'agit d'un fichier unique avec le type de fichier 'image'

Ce code est entièrement commenté ligne par ligne.