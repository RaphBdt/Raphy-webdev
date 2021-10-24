---
part: 2
id: 7
title: Déterminer quand le code doit s'exécuter

---
## Le cycle de vie d'un composant

**Les frameworks JavaScript permettent d'exécuter du code à différents moments.**

Le cycle de vie d'un composant :

* **Create** : Durée pendant laquelle un composant est en construction.
* **Mount** : Moment durant lequel le composant va être rendu sur notre page.
* **Destroy** : Moment où le composant va être retiré de la page.

## Les hooks de cycle de vie

Pour assurer la meilleure expérience utilisateur possible, les frameworks comme Vue proposent des **hooks de cycle de vie**. Ils permettent d'accéder à des événements spécifiques autour de ces étapes. Par exemple, cas régulier : on peut déclencher du code qui fait appel à des API avant même l'apparition du composant sur la page (dans ce cas il faut utiliser _beforeMount_).

Les principaux hooks :

* _beforeCreate_
* _created_
* _beforeMount_
* _mounted_
* _beforeDestroy_
* _destroyed_

Évidemment, certaines actions ne sont pas possibles pendant certains hooks du cycle de vie. Par exemple, modifier les attributs d'un élément HTML pendant _beforeCreate_ serait impossible car l'élément n'existe pas encore.

![Hooks de cycle de vie](https://user.oc-static.com/upload/2020/04/27/15879912651268_2C4_798_EN-01.png)

## Utiliser des hooks de cycle de vie

Dans _script_ :

    export default {
        data: { msg: 'Bonjour !' },
        beforeCreate() { console.log('Je ne suis pas encore  créé') },
        created() { console.log('Je suis créé !') },
        beforeMount() { console.log('Je vais bientôt être monté sur le DOM!') },
        mounted() { console.log('Je suis monté sur le DOM!') },
        beforeDestroy() { console.log('Je suis sur le point de disparaître du DOM !') },
        destroyed() { console.log('Je suis supprimé') }
    }

À l'intérieur de nos hooks de cycle de vie, on peut écrire n'importe quel code JavaScript, dont faire référence à n'importe quelle propriété standard de Vue (data, computed...) avec le préfixe _this_, comme partout ailleurs.

## Cas concret

La notion peut être un peu abstraire... Par exemple voici un cas concret : on peut se servir des hooks de cycle de vie sur le composant _MenuItem.vue_(exercice suivi dans ce cours) pour vérifier si on est à un jour pair. Si c'est le cas, on applique une réduction sur les prix de nos produits. Faire la vérification de la date du jour avant que le composant soit rendu sur notre page permet d'optimiser l'expérience utilisateur.

    export default {
    	name: "MenuItem",
    	props: ["addToShoppingCart", "image", "inStock", "name", "price", "quantity"],
    	data() {
    		return {
    			onSale: false
    		}
    	},
    	computed: {
    		generatedPrice() {
    			if (this.onSale) {
    				return (this.price * 0.9).toFixed(2)
    			} else {
    				return this.price
    			}
    		}
    	},
    	beforeMount() {
    		const today = new Date().getDate()
    		if (today % 2 === 0) {
    			this.onSale = true
    		}
    	}
    }