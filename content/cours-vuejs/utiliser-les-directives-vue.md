---
part: 1
id: 3
title: Utiliser les directives Vue

---
## Toutes les directives :

* v-if, v-else-if, v-else
* v-show
* v-for
* v-bind
* v-on
* v-model

## Conditionner l'affichage du contenu

La directive **_v-if_** évalue la déclaration qui lui est assignée. (**Les directives sont déclarées comme pour les classes / id en CSS : dans les balises HTML**)

    v-if="costOfApples > 0" // Affiche l'élément si le coût des pommes est supérieur à 0

On peut également utiliser **_v-else-if_** et **_v-else_**.

    v-if="userPermission === 'default'"
    v-else-if="userPermission === 'admin'"
    v-else

**_v-show_** ressemble à _v-if_, mais il est généralement utilisé dans le but de contrôler la visibilité d'un élément faison l'objet d'une permutation fréquente (modal...).

    <button @click="showModal = !showModal">Display Modal</button>
    <div v-show="showModal" class="modal">...</div>
    
    // JS 
    const app = new Vue({
        el: '#app',
        data: {
            showModal: false
        }
    })

En fait, la principale différence c'est que _v-show_ permute la visibilité de l'élément HTML grâce au CSS alors que _v-if_ supprime complètement l'élément du DOM.

## Boucler sur notre contenu

La directive **_v-for_** permet de boucler. Imaginons maintenant que dans les datas nous ayons un tableau d'objets tel quel :

    data: {
        shoppingCart : [
            {
                label: 'Apples',
                cost: 10,
                url: '/apples.html'
            },
            {
                label: 'Bananas',
                cost: 2,
                url: '/bananas.html'
            },
            {
                label: 'Coconuts',
                cost: 28,
                url: '/coconuts.html'
            }
        ]
    },
                

Pour boucler, on a juste à faire (sur un li par exemple) :

    v-for="item in shoppingCart"

Néanmoins, la fonction _totalPrice()_ qu'on avait conçue au chapitre précédent n'est désormais plus fonctionnelle... Il faut l'adapter en conséquence :

    computed: {
        totalPrice() {
            let total = 0;
            this.shoppingCart.forEach(item => {
                total += item.cost
            })
            return total
        }
    }

## Définir les attributs HTML de façon dynamique

Enfin, on peut utiliser **_v-bind_** pour que l'attribut _href_ ait des valeurs dynamiques. Par exemple, toujours dans la boucle _for_ (dans un _li_), on peut spécifier un lien pour chaque produit :

    v-bind:href="item.url"

Juste laisse les _:_ marche aussi très bien :

    :href="item.url"

## Écouter des événements et y répondre

La directive **_v-on_** permet de déclencher une action au click sur un élément.

Déclenchons une méthode qui montre une couleur au click :

    <button v-on:click="showColor">Cliquer ici !</button>
    // --- JS ---
    const app = new Vue({
        el: '#app',
        data: {
            favoriteColor: 'rouge'
        },
        methods: {
            showColor() {
                alert(this.favoriteColor)
            }
        }
    })

**_TIPS :_ Il est possible d'écrire des méthodes dans notre constante app grâce à _"methods:"_**.

On peut aussi écrire **_@click="..."_**

Pour déclencher un événement quand un utilisateur appuie sur son clavier on peut utiliser la directive **_@keyup_**.

    <.input id="change-color" type="text" @keyup.enter="changeColor" />
    // --- JS ---
    const app = new Vue({
        el: '#app',
        data: {
            favoriteColor: 'rouge'
        },
        methods: {
            changeColor() {
                this.favoriteColor = document.getElementById('change-color').value
            }
        }
    })

**_TIPS :_** Ajouter le _.enter_ à _@keyup_ singifie qu'il faut appuyer sur "Entrer" pour que la méthode soit effectuée.

Bon à savoir également : **pour intéragir avec une autre méthode ou propriété calculée, il suffit t'utiliser là encore le préfixe _this_**.

## Mettre à jour les données dans des formulaires

Pour notre exemple qui modifie la couleur préférée en fonction de la donnée saisie dans la balise input, on peut utiliser la directive **_v-model_** pour se simplifier la vie :

    <h2>Ma couleur préférée : {{ favoriteColor }}</h2>
    <input id="change-color" type="text" v-model="favoriteColor" />
    // --- JS ---
    const app = new Vue({
        el: '#app',
        data: {
            favoriteColor: 'rouge'
        }
    })

En effet, _v-model_ permet de modifier automatiquement _favoriteColor_ en fonction de la donnée saisie par l'utilisateur.

**_TIPS :_** Il est possible de convertir les données d'un _v-model_ en _number_ grâce à _v-model.number_. Cas concret :

    // Nous sommes dans une boucle :
    <input
        v-model.number="item.quantity"
        id="add-item-quantity"
        type="number"
    />

**_TIPS :_** Il est possible de passer des arguments quand on appelle une méthode lors d'un événement. Cas concret :

    // Pareil, nous sommes toujours dans une boucle
    <button @click="addToShoppingCart(item.quantity)">
        Ajouter au panier
    </button>