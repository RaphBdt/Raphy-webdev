---
part: 2
id: 4
title: Créer un nouveau proket avec Vue CLI

---
Aujourd'hui, les frameworks populaire ont une **interface de ligne de commande (CLI)**. Cela fournit une base standard facilitant le démarrage de projet.

## Installer Vue CLI

Prérequis : avoir Node.js d'installé.

    npm install -g @vue/cli

Pour voir la version :

    vue --version

## Créer un nouveau projet

Commande pour créer un projet (on met le nom qu'on veut) :

    vue create my-first-vue-cli-app

Il y a ensuite un ensemble de configurations à faire directement depuis le terminal :

1. Choisir l'option **Manually** (avec les flèches du clavier + la toucher Entrer).
2. Sélectionner CSS Pre-processors avec la barre espace.  
   **_TIPS :_** On peut mettre nos outils de tests d'intégration à cet endroit. Les bibliothèques recommandées sont : Jest pour les tests unitaires et Cypress pour les tests end-to-end (e2e).
3. Choisir une version de Vue.
4. Choisir Sass/SCSS (with node-sass).
5. Choisir ESLint with error prevention only.
6. Choisir Lint on save.
7. Il faut sauvegarder toute nos configurations dans un dossier dédié en choisissant "In dedicated config files".
8. Mettre "N" pour ne pas conserver ces informatins en pré-configuration puis cliquer sur Entrer afin de lancer l'installation.

## L'architecture d'une application Vue CLI

* **node_modules :** contient l'ensemble des dépendances (on aura à priori jamais à y aller).
* **public :** contient les fondations de l'application ➡️ le _favicon.ico_ et le fichier _index.html_.
* **src :** là où on passera 99% du temps
  * **assets :** répertoire où on met les ressources auxquels on aura besoin de faire référence dans notre app tel quel les images, vidéos, PDF...
  * **components :** contiendra les composants de notre application.
  * **main.js :** recense les options de configuration de Vue.
* **.gitignore :** contient une liste de fichiers et/ou répertoires qui ne seront pas attachés à un repository.
* **package.json :** fichier de configuration de base de notre projet qui comprend des métadonnées comme le nom et la version de notre projet, mais aussi les informations essentielles comme les scripts pouvant être exécutés (_serve_, _build_, ...) et les dépendances requises.
* On verra plus tard pour le fichier très important **App.vue**.

Grâce à Vue CLI, on peut facilement avoir un serveur de développement local avec :

    npm run serve

Un truc trop stylé c'est qu'il n'y a pas besoin de recharger son navigateur pour voir les modifications effectuées dans notre code.

Enfin, il est vivement recommandé d'installer [**Vue DevTools**](https://github.com/vuejs/devtools) sur son navigateur. Il s'agit d'une superbe boîte à outils pour les développeurs utilisant Vue.