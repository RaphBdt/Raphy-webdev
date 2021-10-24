---
part: 4
id: 13
title: Créer un datastore centralisé avec Vuex

---
Vuex est un gestionnaire d'état et une bibliothèque pour les applications Vue.js. En d'autres termes, le but unique de Vuex est de nous aider à créer un store centralisé qui nous permettra d'avoir cette "source unique de vérité" pour récupérer nos datas.

## Installer Vuex

Pour ajouter _Vuex_ à notre projet :

    vue add vuex

Cela doit modifier notre _src/main.js_. Le _store_ a été introduit en tant que nouvelle configuration de notre instance de Vue.

## Configurer Vuex

En plus d'avoir modifié le fichier _src/main.js_, le plugin a créé un fichier **_store/index.js_**. Il a cette forme :

    import Vue from 'vue'
    import Vuex from 'vuex'
    
    Vue.use(Vuex)
    
    export default new Vuex.Store({
        state: {
    
        },
        mutations: {
    
        },
        actions: {
    
        }
    })