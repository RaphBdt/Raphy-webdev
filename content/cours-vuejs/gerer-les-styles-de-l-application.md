---
part: 3
id: 8
title: Gérer les styles de l'application

---
## Configurer un préprocesseur

Bon alors pour faire du Sass, rien de plus simple... Dans _style_, il faut juste ajouter l'attribut _lang="scss"_.

## Gérer le CSS

On peut utiliser la technique des styles délimités en indiquant simplement l'attribut _scoped_ au bloc de style afin que le CSS ne s'applique qu'aux éléments du composant courant.

Cependant, cela n'empêchera pas les styles plus spécifiques de prendre le dessus si quelqu'un écrit des sélecteurs génériques plus spécifiques. Il est donc important d'utiliser les bonnes techniques d'architecture CSS !

L'un des inconvénients des **scoped styles** est donc le fait qu'elles peuvent être affectées par des styles présentant une plus grande spécificité. Cela peut poser des problèmes dans des cas bien précis. Pour pallier à ce problème, il existe les **modules CSS**. Voici la syntaxe à utiliser :

    // Dans le template
    	<h1 :class="$style.red">Mon titre en rouge</h1>
    
    
    <style module>
    .red {
      color: red;
    }
    </style>

Il est beaucoup plus courant d'utiliser les **scoped styles** que les **modules CSS**.

## Stratégie pour bien gérer les styles de notre application

Pour une meilleure maintenabilité, il est recommandé d'**écrire les styles directement dans la balise _style_ des composants en question**. C'est beaucoup plus lisible est compréhensible pour n'importe quel développeur qui passe derrière nous ou alors si on retourne sur notre code plusieurs mois / années après.

Il n'est désormais plus recommandé d'écrire notre CSS dans un fichier à part. Un utilisateur n'a en effet pas besoin de charger l'ensemble du CSS sur toutes les pages du site. Il reste quelques cas où on peut quand même s'en servir, notamment si on voit un grand nombre de réutilisations de styles à travers différents composants.