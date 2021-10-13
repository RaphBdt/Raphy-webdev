---
part: 2
id: 5
title: Mise en page responsive

---
Bootstrap approche une méthode mobile-first qui nous permet de créer facilement des sites totalement responsives.

Voici les plages de taille officielles de Bootstrap :

* **Taille Très petite :** inférieure à 576px, aucun modificateur de classe
* **Taille Petite :** supérieure ou égale à 576px, modificateur de classe _-sm_
* **Taille Moyenne :** supérieure ou égale à 768px, modificateur de classe _-md_
* **Taille Grande :** supérieure ou égale à 992px, modificateur de classe _-lg_
* **Taille Très grande :** supérieure ou égale à 1200px, modificateur de classe _-xl_

Un **point d'arrêt** est un point de discontinuité, modification ou interruption. Dans le développement frontend, c'est un point (qui représente une largeur d'écran) à partir duquel la mise en page change.

## En pratique

Pour tester le responsive, on peut utiliser les outils de Google pour les développeurs : Afficher > Outils pour les développeurs > Outils de développement > Toggle device toolbar > On ajuste ensuite notre page pour faire les tests.

Nous ne sommes pas obligés de spécifier toutes les tailles d'écran au moment de la conception du site... On peut uniquement choisir celles qui nous intéressent.

Avec la grille Bootstrap, il est important de comprendre qu'elle fonctionne de la **plus petite taille d'écran vers la plus grande**. C'est l'approche **mobile-first**. Cela veut dire par exemple que si on n'ajoute pas de modificateur de classe relatif à une taille d'écran supérieur, alors Bootstrap affichera les éléments et composants de la grille dans les plus petits écrans et **conservera la même mise en page sur les plus grands écrans**.

Par exemple, si une div possède une classe ayant un modificateur _-md_, elle s'appliquera à tous les écrans qui ont une taille minimum de 768px.

    <div class="container">
       ...
       <div class="row">
          <div class="col-6 col-md-4 col-lg-3">
            Une des deux colonnes
          </div>
          <div class="col-6 col-md-8 col-lg-9">
             Une des deux colonnes
          </div>
       </div>
    </div>

Dans cette sitution :

* De 0px à 767px : la ligne est divisée en deux colonnes égales
* De 768px à 991px : la ligne est divisée en deux colonnes, une de 33,33% et une de 66,66%
* À partir de 992px : la ligne est divisée en deux colonnes, une de 25% et une de 75%.

Il faut bien toujours vérifier que la somme totale des colonnes sur une ligne soit de 12 peut importe le format (ou bien alors une colonne peut prendre elle même 12 si on veut qu'elle se superpose avec les autres).

Autre exemple (un classique) : on veut trois cards de tailles égales, mais elles doivent se superposer sur mobile :

    [...] 
        <div class="col-12 col-lg-4">
            INFO CARD 1
        </div>
        <div class="col-12 col-lg-4">
            INFO CARD 2
        </div>
        <div class="col-12 col-lg-4">
            INFO CARD 3
        </div>
    [...] 