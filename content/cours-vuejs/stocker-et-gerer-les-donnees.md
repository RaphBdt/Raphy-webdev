---
part: 1
id: 2
title: Stocker et gérer les données

---
## Garder les données à jour

Quand on écrit du HTML simple, les données sont "**codées en dur**"" ou "**statiques**"". Cette méthode devient très difficile à gérer dans le temps, à mesure que les données sont propagées au sein d'une application.

Imaginons que nous écrivons une liste de produit avec un prix pour chacun d'eux en HTML. En dessous, nous indiquons le prix total, lui aussi en HTML pur... Si on modifie le prix d'un produit, alors on devra tout recalculer nous-même puis changer de nouveau les données.

## Les données réactives

Les données réactives réagissent à toute modification et mettent à jour les valeurs concernées en conséquence. Par exemple, si on reprend notre liste de produits, la modification du prix d'un produit entraînera une mise à jour automatique du prix final.

## Le lien entre les données réactives et Vue

Créons un data store :

    const app = new Vue({
        el: '#app',
        data: {
            costOfApples: 5,
            costOfBananas: 2,
            costOfCoconuts: 8
        }
    })

Ensuite, on peut afficher les prix pour chaque produit :

    {{ costOfApples }}
    {{ costOfBananas }}
    {{ costOfCoconuts }}

Enfin, on peut calculer le prix total du panier de façon dynamique :

    {{ costOfApples + costOfBananas + costOfCoconuts }}

Si on change le prix d'un produit, le total du panier sera automatiquement recalculé !

Néanmoins, ce serait encore plus propre d'avoir juste à mettre _{{ totalPrice }}_.

## Les propriétés calculées

Les **propriétés calculées** (=computed properties) permettent de définir une valeur réutilisable qui est mise à jour en fonction d'autres propriétés _data_.