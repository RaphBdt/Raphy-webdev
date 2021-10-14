---
part: 4
id: 9
title: Composants interactifs

---
## Les boutons

Il y a deux façon d'afficher des boutons avec Bootstrap : avec un élément _button_ ou _a_. Dans les deux cas, il faut ajouter la classe **.btn** ainsi qu'un classe indiquant la couleur du bouton. [Voici la documentation de Bootstrap pour les boutons](https://getbootstrap.com/docs/4.3/components/buttons/), dans laquelle on peut retrouver toutes les couleurs disponibles.

    <button type="button" class="btn btn-primary">Bouton </button>
    <a class="btn btn-primary" href="#" role="button">Lien </a>

## Les caroussels

    <div class="carousel slide" data-ride="carousel">
       <div class="carousel-inner">
          <div class="carousel-item active">
             <img src="..." class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
             <img src="..." class="d-block w-100" alt="...">
          </div>
       </div>
    </div>

L'un des éléments du carrousel doit obligatoirement contenir la classe **.active**.  
L'élément _img_ doit contenir la classe **.d-block**. Celle-ci fournit à l'élément une valeur d'affichage de bloc. Il existe d'autres classes __d-*__ pour d'autres valeurs d'affichage dans Bootstrap : [voir la documentation](https://getbootstrap.com/docs/4.3/utilities/display/).  
L'élément _img_ doit aussi contenir la classe **.w-100**. Il existe également les classes _w-75_, _w-50_, _w-25_ et _w-auto_, qui fournissent à un élément des valeurs de largeur relatives à son élément parent.

Si on veut ajouter des éléments de navigation :

    <div id="carouselControls" class="carousel slide" data-ride="carousel">
       <div class="carousel-inner">
          [... éléments carrousel ...]
       </div>
       <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"> /span>
          <span class="sr-only">Précédent /span>
       </a>
       <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"> /span>
          <span class="sr-only">Suivant /span>
       </a>
    </div>

Il faut que l'id de la div parente du caroussel soit la même que celle des href des balises a des liens de navigation.

## Les alertes

Pour créer un alerte avec Bootstrap, on ajoute une classe **.alert** à une div, ainsi qu'un attribut **role="alert"**. Il faut également spécifier la couleur, avec une class __.alert-*__... Comme pour les _.button-*_ et _.bg-*_, on peut mettre les valeurs suivantes : _primary_, _secondary_, _success_, _danger_, _warning_, _info_, _light_, _dark_.

    <div class="alert alert-success" role="alert">
       Félicitations ! Vous avez réussi !
    </div>

Si on veut faire en sorte que l'utilisateur puisser fermer l'alerte, alors il faut ajouter les classes **.alert-dismissible**, **.fade** et **.show** à la _div_ parente de l'alerte. Ensuite, il faut intégrer l'élément _button_ avec la classe **.close** et des attributs :

    <div class="alert alert-success alert-dismissible fade show" role="alert">
       <h5 class="alert-heading">Prérequis /h5>
       <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">× /span>
       </button>
    </div>

Dans cet exemple, on remarque qu'on a utilisé la classe _.alert-heading_ pour le titre. En réalité, Bootstrap est vraiment très puissant car il nous propose ce genre de classe pour la majeure partie des composants (ça permet d'améliorer le rendu ou l'intégration de texte, d'image...). Il existe aussi la classe _.alert-link_ par exemple.