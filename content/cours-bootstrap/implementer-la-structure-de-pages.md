---
part: 2
id: 4
title: Implémenter la structure de pages

---
## Les conteneurs

Envelopper nos contenus dans une div avec la classe **.container** permet de centrer le contenu à l'écran et ajoutant des marges horizontales automatiques. Cela permet d'aérer la lecture de notre site. En utilisant la classe **.container-fluid** au lieu de .container, il n'y aura pas de marges horizontales.

    <div class="container">
        Ici notre contenu 
    </div>
    
    
    <div class="container-fluid">
        Ici notre contenu, sans marges horizontales
    </div>
                

## La grille de Bootstrap

Cette grille fonctionner avec un système de **lignes** et de **colonnes**. Dans une ligne, il peut y avoir au maximum **12 colonnes** et il peut évidemment y avoir une infinité de lignes (une page web n'a pas de limites). Les colonnes sont donc enfants des lignes et les lignes sont enfants des container. Pour déclarer une ligne, il faut attribuer la classe **.row** et pour déclater une colonne, il faut utiliser **.col**.

    <div class="container">
       <div class="row">
          <div class="col">
             Première colonne
          </div>
          <div class="col">
             Deuxième colonne
          </div>
       </div>
    </div>         

Comme il y a systématiquement 12 colonnes dans une ligne, alors, dans notre exemple, la première colonne prendra en réalité 6 colonnes, tout comme la deuxième. Soit 50% chacune.

Néanmoins, dans un site, les contenus ne sont pas toujours de la même largeur... Il est possible de spécifier à Bootstrap combien de colonnes doit prendre un élément. Par exemple, si on veut qu'un élément prenne 2 tiers de la largeur, alors il faudra lui attribuer 8 colonnes (ce sont les 2/3 de 12) :

    <div class="container">
       <div class="row">
          <div class="col-8">
             Première colonne
          </div>
          <div class="col-4">
             Deuxième colonne
          </div>
       </div>
    </div>
                

Si on intègre la page d'accueil vue dans le derniers cours, alors ça donnera ça sur la grille Bootstrap :

![Intégration page d'accueil sur Bootstrap](https://user.oc-static.com/upload/2020/05/06/1588755586312_image6.png)