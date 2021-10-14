---
part: 1
id: 6
title: Composants UI

---
## La navigation

Bootstrap comprend un composant de barre de navigation puissant et réactif. Pour la déclarer, on doit utiliser la classe **.navbar** dans un élément _nav_. La barre de navigation doit également avoir une classe **.navbar-expand** pour être responsive, on peut lui spécifier un point d'arrêt, comme par exemple _.navbar-expand-md_.

    <nav class="navbar navbar-expand">
       ...
    </nav>  

Il existe une classe **.navbar-brand** le nom de la marque. Les éléments de navigation doivent être placés dans les éléments _ul_, _li_ et _a_ :

    <nav class="navbar navbar-expand">
       <a class="navbar-brand" href="index.html">Info School </a>
       <ul class="navbar-nav">
          <li class="nav-item active">
             <a class="nav-link" href="index.html">Accueil </a>
          </li>
          <li class="nav-item">
             <a class="nav-link" href="#">Cours </a>
          </li>
       </ul>
    </nav>

La classe **.active** indique sur quelle page nous sommes actuellement.

Pour ajouter une couleur de fond à notre barre de navigation, on peut ajouter nos propres styles CSS, ou alors utiliser les couleurs prédéfinies de Bootstrap (c'est particulièrement utile lors de prototypages). [Voici la liste de toutes les couleurs disponibles](https://getbootstrap.com/docs/4.3/utilities/colors/#background-color). D'ailleurs, ces classes peuvent s'appliquer à tous les éléments et non seulement la navbar.

    <nav class="navbar navbar-expand bg-dark">
       ...
    </nav>

En plus de la couleur de fond, on peut spécifier si notre navbar est plutôt claire ou foncée. Dans l'exemple précédent, on a choisit un bg dark, donc doit spécifier que notre navbar est foncée avec **.navbar-dark** (sinon c'est **.navbar-light**), pour ajuster les couleurs des éléments de navigation (marque et liens de navigation).

    <nav class="navbar navbar-expand bg-dark navbar-dark">
       ...
    </nav>

Si on veut que notre navbar occupe de le plein écran, on doit s'y prendre de cette façon :

    <div class="bg-dark">
        <div class="container">
           <div class="row">
              <nav class="col navbar navbar-expand navbar-dark">
                 ...contenu de la barre de navigation...
              </nav>
           </div>
        </div>
     </div>
     
     <div class="container">
        ...contenu de la page...
     </div>
                

## Créer une navigation responsive

La navbar se comporte de cette façon : lorsqu'elle est sur un grand écran, elle affiche tout son contenu, sinon elle affiche un menu burger.

Si on ne spécifie pas de modificateur à la classe **navbar-expand**, alors le menu entier s'affiche au délà des écrans "très petits". On peut spécifier on nouveau point d'arrêt de cette façon : **navbar-expand-lg**.

Il faut ajouter le bouton de bascule de navigation, après l'élément _a_ qui a la classe _navbar-brand_.

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
       <span class="navbar-toggler-icon">
    </button>

Ensuite, il faut ajouter les classes _collapse_ et _navbar-collapse_ au div qui englobe la liste des liens de navigation, sans oublier d'ajout l'id target par le button (ici _#navbarContent_) :

    <div id="navbarContent" class="collapse navbar-collapse">
       <ul class="navbar-nav">
          ...navigation...
       </ul>
    </div>

**Le code de notre navbar finale :**

    <nav class="col navbar navbar-expand navbar-dark">
       <a class="navbar-brand" href="index.html">Info School /<a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
          <span class="navbar-toggler-icon"> </span>
       </button>
       <div id="navbarContent" class="collapse navbar-collapse">
          <ul class="navbar-nav">
             <li class="nav-item active">
                <a class="nav-link" href="index.html">Accueil </a>
             </li>
             <li class="nav-item">
                <a class="nav-link" href="#">Cours </a>
             </li>
          </ul>
       </div>
    </nav>

Pour ajouter un jumbotron sur une page (c'est une partie située en haut juste en dessus du menu et qui a pour objectif de retenir l'attention), on doit utiliser la classe **.jumbotron** :

    <div class="jumbotron">
       <h1>Bienvenue sur Info School ! </h1>
    </div>

Cela rend ça :

![Jumbotron](https://user.oc-static.com/upload/2020/04/28/15880663953011_image13.png)

## Les cards

Pour créer une card, il faut utiliser la classe **.card**. À l'intérieur de celle-ci, dans le corps (**.card-body**) on peut ajouter un titre avec **.card-title** et du texte avec **.card-texte**. Exemple :

    <div class="card">
       <div class="card-body">
          <h5 class="card-title">Titre de la carte </h5>
          <p class="card-text">Contenu textuel de la carte </p>
       </div>
    </div>