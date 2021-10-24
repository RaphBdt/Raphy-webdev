---
part: 2
id: 6
title: Gérer la navigation avec le routeur Vue

---
## Créer le routage de notre application monopage

Le terme "Application monopages" indique qu'une seule page est chargée. Cette dernière est mise à jour dynamiquement en fonction des besoins. Néanmoins, un utilisateur a besoin d'URL différentes pour distinguer les différentes pages les unes des autres.

La solution s'appelle : **vue-router**

## Installer Vue Router

Pour ajouter vue-router :

    vue add router

Et choisir l'option "n" pour history mode.

## Anatomie du routeur

Le fichier _main.js_ a un peu changé et on a un nouveau dossier _router_ avec un fichier _index.js_. On peut voir que pour chaque route, il y a un objet qui contient ses propriétés :

* _path_ : le chemin qui correspond à l'adresse URL de la route.
* _name_
* _component_ : composant qui sera rendu lorsqu'un utilisateur visite la route.

## Fonctionnement de Vue Router

Si on retourne dans _App.vue_, on voit deux nouveaux composants liés à vue-router. _router-link_ qui se charge de la navigation dans l'application et _router-view_ qui indique où afficher le composant auquel est associé la route quand on visite une URL.

    <template>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </template>

## Créer des routes dynamiques

Imaginons que nous ayons une page produit type mais avec plusieurs produits... Il est alors nécessaire de créer une route dynamique du type produit/nom-du-produit (dans _router/index.js_) :

    const router = new VueRouter({
        routes: [
            // les parties dynamiques commencent par un deux-points
            { path: '/item/:name', component: ItemDetail }
        ]
    })

Cela permet au composant _ItemDetail_ d'extraire les paramètres à utiliser :

    Item: {{ $route.params.name }}

**_TIPS :_** Pour activer le mode historique du routeur, il faut aller dans _routeur/index.js_ et faire :

    const router = new VueRouter({
      mode: 'history',
      routes
    })

En fait, il y a deux modes : le mode historique HTML5 ou le mode hash. Le mode hash permet de s'assurer que le routeur fonctionne sur tous les navigateurs, quelle que soit la configuration du serveur.