---
part: 4
id: 12
title: Le principe de state management

---
Le principal objectif du state management est de **s'assurer que l'application utilise les bonnes données à tout moment**.

Sur cette base, nous pouvons définir le **state** (_ou état en français_) commen un instantané du data store à un moment donné.

**Exemple :**

    // Dans le template
        <div>
            <h1>{{ pageTitle }}</h1>
            <ul>
                <ListItem
                    v-for="item in list"
                    :key="item"
                    :item="item"
                />
            </ul>
        </div>
    
    
    // Dans le script
    import ListItem from './components/ListItem.vue'
    
    export default {
        name: 'GroceryList',
        components: {
            ListItem
        },
        data() {
            return {
                list: ['pommes', 'bananes', 'cerises'],
                pageTitle: 'Ma liste de courses'
            }
        }
    }

Ici, à première vue, on aurait deux instances d'état : le composant parent _GroceryList_ et le composant enfant _ListItem_. En fait, il y en a 4 :

1. GroceryList
2. ListItem item="pommes"
3. ListItem item="bananes"
4. ListItem item="cerises"

## Récupérer les datas à la source unique de vérité

Le concept fondamental derrière une source unique de vérité est d'éviter la duplication inutile des données de l'application. En effet, le fait de stocker plusieurs copies des mêmes données dans une application est souvent la principale cause de bugs dans un système.

## En résumé

Le système de gestionnaire de state idéal devrait être capable de :

* Créer un espace de stockage de données unique qui servira de sources unique de vérité pour toutes les données partagées ;
* permettre à n'importe quel composant de récupérer les données directement ;
* permettre à n'importe quel composant de modifier le data store unique directement.

**Vue dispose d'un système de state management capable de faire tout ça à notre place : Vuex.**