---
part: 5
id: 13
title: Personnaliser les fonctionnalités

---
Des fonctionnalités Bootstrap sont faites grâce à du JavaScript et plus précisemment grâce à la bibliothèque jQuery et Popper.js. Généralement, les composants qui utilisent du JavaScript ont un attribut HTML __data-*__, comme le carrousel par exemple.

## Filtrer du contenu avec jQuery

Il faut déjà ajouter une barre de recherche :

    <div class="row mb-3">
       <div class="col">
          <input class="form-control" id="searchInput" type="text" placeholder="Search..">
       </div>
    </div>
                

Ensuite, il faut ajouter un bout de code jQuery pour faire fonctionner le système.

    $(document).ready(function(){
      $("#searchInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#lessonList .col-12").filter(function() {
        	$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
                

Il faut l'inclure entre deux balises script, juste avant la fermeture du body.

Dans cet exemple, on cherche à filtrer les cards de différentes lessons sur un site d'apprentissage. Dans le row qui englobe toutes les cards, il faut ajouter l'ID lessonList.

[Voici un exemple sur GitHub.](https://github.com/amandinelemoult2109/bootstrap/blob/master/part-5/chapitre-2/filter/lessons.html)