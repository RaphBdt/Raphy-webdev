---
part: 1
id: 1
title: Première application Vue.js

---
## Les applications monopages

Générallement, quand un utilisateur se déplace de page en page sur un site, il les regénère totalement à chaque fois. Par exemple, si l'utilisateur envoie un formulaire, la simple page qui gère la réponse devra être chargée dans son intégralité. Ainsi, l'expérience utilisateur est détériorée (pages longues à charger...).

Ainsi, le concept d'_applications monopages_ (_Single Page Applications_) entre en jeu. Le concept fondamental des SPA est le suivant :

* Les utilisateurs chargent une page web une seule fois.
* Ce sont les contenus qui sont mis à jour et non la page entière.
* JavaScript contrôle le lancement de nouvelles pages au sein du même domaine, cela ne nécessite ainsi plus de rafraîchissement complet de la page.

**Les SPA sont le plus souvent construites grâce à des frameworks frontend.**

## Notre framework : Vue

Il existe de nombreux frameworks frontend : React, Angular, Vue, Polymer... Mais Vue est celui qui a la courbe d'apprentissage la plus facile. Il est extrêment intuitif. Dès lors :

* Devenir contributeur d'un projet devient est beaucoup plus accessible.
* Même les personnes n'ayant pas beaucoup de connaissances en JavaScript peuvent contribuer à un projet avec un minimum d'accompagnement.
* Les développeurs peuvent passer plus de temps à être productifs plutôt qu'à apprendre à utiliser un nouveau outil.

[Voici la documentation de Vue.js](https://vuejs.org/).

## Ajouter Vue à notre site

Pour l'installer sur notre site, on peut se référer à cette page : [guide d'installation de Vue.js](https://vuejs.org/v2/guide/installation.html#CDN). En fait, il suffit d'ajouter une seule ligne de code (juste avant la fermeture du _body_) (il faut évidemment mettre la bonne version de Vue.js) :

    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>

Sur la console des Dev Tools de Google Chrome, on peut faire un test dans la console pour savoir si on a bien installé le framework en tapant simplement (si on nous retourne une fonction, c'est que tout est OK) :

    Vue

## Définir où Vue apparaîtra sur notre page

On a chargé Vue sur le site, mais ce n'est pas encore une application monopage. Il faut en effet définir de quels éléments HTML le framework est responsable.

Pour ça, il faut commencer par ouvrir une nouvelle balise _script_ (après celle de l'intégration de Vue.js).

Dans celle-ci, on va assigner une nouvelle instance de Vue à la constante app. Ensuite, on déclare l'emplacement de la page sur laquelle Vue est installé.

    const app = new Vue({ 
    	el: '#app'
    })

On aurait pu utiliser n'importe quel sélecteur (sauf la balise body et html), mais **utiliser un sélecteur ID (_#_) est la meilleure méthode**, car notre application devra être reconnue de façon unique sur la page.

## Stocker des données

Pour stocker les données, il faut ajouter une propriété _data_ qui a comme valeur un objet :

    const app = new Vue({
      el: '#app',
      data: {
        message: 'Bonjour ✌️', // String
        answerToLife: 42, // Number
        groceries: ['Pommes', 'Bananes', 'Noix de coco'], // Arrays
        timeForLunch: false, // Boolean
        info: { // Object
          topic: 'VueJS',
          length: 5
        }
      }
    })

Pour afficher les données dans notre application web, il faut utiliser la syntaxe en "moustache" (entre deux accolades). Par exemple, si on veut afficher le _message_ dans un _h1_ (attention à bien être dans _#app_) :

    // Au sein d'une balise h1 elle-même à l'intérieur d'une div avec un id "app"
    {{ message }}

Ces deux accolades peuvent aussi être utilisées pour afficher le rendu d'expressions JavaScript basiques :

    //Réaliser le calcul
    {{ (2 + 8) * 10 }}
    
    //Appeler des méthodes de string
    {{ "alexia".toUpperCase() }}
    
    // Opérateurs ternaires
    {{ 2 > 0 ? 'Deux est plus grand que zéro' : 'Vous ne verrez jamais cette phrase' }}