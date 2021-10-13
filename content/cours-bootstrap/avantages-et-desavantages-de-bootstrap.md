---
part: 1
id: 2
title: Avantages et désavantages de Bootstrap

---
## Avantages

**Temps de développement réduit :** grâce à Bootstrap, on peut se concentrer sur les fonctionnalités principales et sur la structure du site. C'est lui qui fait le travail d'assurer la compatibilité entre navigateurs.

**Simple à mettre en place :** Pour faire fonctionner Bootstrap, on a juste besoin d'un lien vers le **fichier CSS minifié** du framework dans le document HTML. Il existe plusieurs manières d'inclure Bootstrap dans un projet, mais la plus rapide et la plus simple est d'utiliser un lien vers le fichier CSS minifié hébergé sur [BootstrapCDN](https://www.bootstrapcdn.com/).  
CDN signifie _content delivery network (réseau de distribution de contenu)_. C'est un système de serveurs qui fournit du contenu web à un utilisateur en fonction de différents facteurs (géolocalisation...) qui garantissent un débit plus élevé et une meilleure disponibilité.

Dans un premier temps, il faut déclarer le CSS Bootstrap dans le _head_ **avant** nos autres fichiers CSS. _Il faut évidemment copier le bon lien de la bonne version dans le CDN_ :

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">        

Ensuite, il faut déclarer Bundle. Il s'agit de toutes les dépendances JavaScript dont Bootstrap a besoin. Cela doit être ajouté dans une balise _script_, juste avant la fermture de _body_ :

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js" integrity="sha384-LtrjvnR4Twt/qOuYxE721u19sVFLVSA4hf/rRt6PrZTmiPltdZcI7q7PXQBYTKyf" crossorigin="anonymous">        

**Communcauté nombreuse et active :** Bootstrap est le framework CSS le plus populaire, il y a donc par exemple beaucoup de sujets le concernant sur [Stackoverflow](https://stackoverflow.com/). Il possède une [documentation officielle](https://getbootstrap.com/docs/4.3/getting-started/introduction/) complète. Enfin, le créateur et mainteneur de Bootstrap est **Mark Otto** et est aussi le directeur principal de la conception chez GitHub (en gros c'est une grosse personnalité du web).

**Personnalisable :** de nombreux [thèmes](https://themes.getbootstrap.com/) sont à notre disposition (il y en a également chez d'autres fournisseurs). Comment Bootstrap est open source et personnalisable, on peut créer entièrement un thème ou apporter des modifications aux autres.

## Désavantages

**Similarité :** Si on utilise le thème et les couleurs par défaut, il y a des chances pour qu'on retrouve le thème qu'on a choisi sur d'autres sites. On doit donc personnaliser la bibliothèque en ajoutant des composants et des styles pour le rendre plus unique.

**Courbe d'apprentissage :** Il faut apprendre le framework. Mais bon c'est ça la beauté du métier du dév web... Nous sommes des éternels étudiants.