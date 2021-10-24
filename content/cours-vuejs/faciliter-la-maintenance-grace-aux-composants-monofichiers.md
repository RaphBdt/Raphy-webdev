---
part: 2
id: 5
title: Faciliter la maintenance grâce aux composants monofichiers

---
## Le problème de la complexité

Dans un site, il y a un certain nombre d'éléments qui se répètent, comme par exemple le menu. Si on le modifie sur une page, alors il faut le modifier sur l'ensemble de nos fichiers... C'est difficilement maintenable.

## La solution : les composants

**Les composants** permettent d'encapsuler un ensemble d'éléments HTML, de façon réutilisable et facilement maintenable. Grâce à eux, nous pouvons concevoir de vrais application scalables (= qui peuvent être déployées à une grande échelle) et maintenables.

Les fichiers _.vue_ sont des **composants monofichiers**. Cela nous permet d'encapsuler la logique pour une partie de l'application dans un fichier unique.

Tous les composants Vue contiennent :

* Un bloc template - Pour notre HTML
* Un bloc script - Pour notre JavaScript
* Un bloc style - Pour notre CSS

## Utiliser les composants monofichiers

**Les composants peuvent être utilisés par d'autres composants.** Pour ça, il faut l'importer et le déclarer dans nos _components_ (dans la balise _script_) :

    import HelloWorld from './components/HelloWorld.vue'
    
    export default {
        name: 'App',
        components: {
            HelloWorld
        }
    }

On peut ensuite l'utiliser dans notre _template_ (comme on le ferait pour n'importe quel élément HTML) :

    <HelloWorld msg="Hello!" />

Peut importe le nombre de lignes de codes que contient le composant HelloWorld, on l'a récupéré très simplement !

## Gérer la communication entre nos composants : les props

**_Props_** est un attribut qu'on peut définir au niveau du composant qui sera transmis directement au template.

    // ./components/NavLink.vue
    
    // DANS LE SCRIPT
    export default {
    	name: 'NavLink',
    	props: ['url', 'text']
    }
    
    // DANS LE TEMPLATE
    <a :href="url">{{ text }}</a>

Il sera utilisé comme ceci (en veillant à bien avoir déclaré et importé le composant dans le template en question) :

    <NavLink url="/" text="Accueil" />
    <NavLink url="/about" text="À propos" />
    <NavLink url="/contact" text="Contact" />
                

Notre application devient donc ulta simple à maintenir car un seul fichier contient toutes les configurations dont nous avons besoin. Par ailleurs, ce fichier sera appliqué dans toute notre application... Plus besoin de créer un menu par page sur notre site !

## Tips exercice pratique

Quand on utiliser le CDN :

    const app = new Vue({
    	el: "#app",
    	data: {
    	    address: "18 avenue du Beurre, Paris, France",
    	    email: "hello@cafewithavue.bakery",
    	    phone: "01 88 88 88 88",
            },
    })

Quand on utilise Vue CLI :

    export default {
        name: "App",
        components: {
            MenuItem
        },
        data() {
            return {
                address: "18 avenue du Beurre, Paris, France",
                email: "hello@cafewithavue.bakery",
                phone: "01 88 88 88 88",
            };
        },
    };

Si on met des images dans le dossier _public_, alors on peut indiquer un chemin relatif (par exemple ici l'image est dans _public/images/croissant.jpg_) :

    export default {
        name: "App",
        components: {
            MenuItem
        },
        data() {
            return {
                image: {
                    source: "/images/croissant.jpg",
                    alt: "Un croissant",
                },
            };
        },
    };

Bon à savoir également : @ est un alias vers /src (par exemple si on a besoin d'importer des composants...).

Il est possible de transmettre des fonctions dans les props :

    <MenuItem 
        v-for="item in simpleMenu"
        :addToShoppingCart="addToShoppingCart" // addToShoppingCart est une fonction
        :name="item.name"
        :image="item.image"
        :inStock="item.inStock"
        :quantity="item.quantity"
        :key="item.name"
    />

Voici les props du composant MenuItem :

    props: ["addToShoppingCart", "image", "inStock", "name", "quantity"]