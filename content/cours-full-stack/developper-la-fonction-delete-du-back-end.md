---
part: 4
id: 18
title: Développer la fonction delete du back-end

---
Quand un utilisateur supprime l'un de ses objets, il faut s'assurer de la suppression du fichier image afin de ne pas surcharger le serveur inutillement.

## Modifier la route DELETE

Pour bien montrer que ce qu'on va faire fonctionne, il vaut mieux supprimer tous les objets actuellement créés dans la base de données et aussi dans notre fichier images.

Dans notre controller _stuff.js_, on importe le package _fs_ pour pouvoir accéder au système de fichiers :

    const fs = require('fs');

Dans notre _deleteThing_, on va chercher l'objet à supprimer pour avoir l'URL de l'image, comme ça on aura accès au nom du fichier et on pourra ainsi le supprimer.

    exports.deleteThing = (req, res, next) => {
        Thing.findOne({ id: req.params.id }) // On trouver l'objet grâce à son id
          .then(thing => { // On récupère un thing
            const filename = thing.imageUrl.split('/images/')[1]; // On récupère l'imageUrl du thing retourné par la base. On sait que l'imageUrl aura une partie '/images/'. La méthode split() nous renvoit un tableau de 2 valeurs (ce qu'il y a avant et après '/images/'). Donc on recupère le deuxième élément du tableau avec [1] pour récupérer uniquement le nom du fichier !
            fs.unlink(`images/${filename}`, () => { // fs.unlink permet de supprimer un fichier. Le premier argument c'est la chaîne de caractères qui correspond au chemin de ce fichier. Le deuxième argument c'est le callback (ce qu'on doit faire après avoir supprimé le fichier)
              Thing.deleteOne({ _id: req.params.id }) // On supprime le Thing de la base de données.
                .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
                .catch(error => res.status(400).json({ error }));
            });
          })
          .catch(error => res.status(500).json({ error }));
    };