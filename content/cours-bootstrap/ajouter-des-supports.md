---
part: 3
id: 8
title: Ajouter des supports

---
## Les images

On peut ajouter notre logo dans la navbar du site :

    <nav class="navbar">
       <a class="navbar-brand" href="index.html">
          <img src="/path/to/logo.png" width="40" height="30" alt="Site logo">
          Info School
       </a>
    </nav>

Pour ajouter des images aux cards, on a juste à utiliser la classe **.card-img-top** dans un élément _img_.

    <div class="card">
       <img class=”card-img-top” src=”...” alt=”...”>
       <div class="card-body">
          [contenu de la carte]
       </div>
    </div>

## Les vidéos

Pour intégrer des vidéos **responsives** avec Bootstrap, on a juste à utiliser la classe **.embed-responsive** et la classe **.embed-responsive-item** pour adapter le style sur un élément _iframe_ (ou embed / video / object).

    <div class="embed-responsive">
       <iframe class="embed-responsive-item" src="..." allowfullscreen> </iframe>
    </div>

On a même la possibilité de contrôler le ratio d'affichage :

* **21:9 :** .embed-responsive-21by9
* **16:9 :** .embed-responsive-16by9
* **4:3 :** .embed-responsive-4by3
* **1:1 :** .embed-responsive-1by1

## Ajouter des icônes

Pour nous acquérir les icônes, on peut soit utiliser la commande **npm install bootstrap-icons** soit télécharger directement les fichiers sources du dossier [GitHub](https://github.com/twbs/icons).

Ensuite, on peut soit les utiliser avec un élément _img_ :

    <img src="/assets/img/bootstrap.svg" alt="" width="32" title="Bootstrap">

Ou alors avec élément _svg_, qui nous permet alors de customiser l'icône (taille, couleur...).

    <svg class="bi bi-bootstrap" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M14 3H6a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3zM6 2a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V6a4 4 0 00-4-4H6z" clip-rule="evenodd"/>
      <path fill-rule="evenodd" d="M10.537 14H7.062V5.545h3.398c1.588 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.482 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM8.375 6.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.568-1.237-1.541-1.237H8.375zm1.898 6.229H8.375v-2.725h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z" clip-rule="evenodd"/>
    </svg>

Par exemple, si on veut rendre notre svg vert, on peut lui appliquer la classe _.text-primary_ :

    <svg class="bi bi-bootstrap text-primary" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">... </svg>