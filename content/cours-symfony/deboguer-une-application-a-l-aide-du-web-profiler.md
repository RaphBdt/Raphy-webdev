---
part: 1
id: 4
title: Déboguer une application à l'aide du Web Profiler

---
Le contrôleur frontal de Symfony se trouve dans _public/index.php_.

**L'environnement** correspond à la configuration sélectionnée lors de l'exécution de l'application. Par défaut, Symfony en fournit trois : _prod_, _dev_ et _test_.

À retenir : **l'application a une configuration spécifique en fonction de l'environnement sélectionné**.

Les trois environnements se situent dans _config > packages_ . on peut créer des dossiers supplémentaires si on souhaite ajouter des environnements.

On choisit notre environnement dans le fichier _.env_ à la racine de notre projet. Pour le moment, le seul élément qui nous intéresse est _APP_ENV_ :

    # .env
    
    ###> symfony/framework-bundle ###
    APP_ENV=prod # ou "dev" ou "test"
    # ...
    ###< symfony/framework-bundle ###

On a juste à modifier ce fichier pour changer d'environnement. Le mode de débogage est activé en environnement de test et de production.

## Le Profileur Web

Il s'agit d'une application d'aide au développement. Elle nous offre : une barre de débogage et une application web de profilage.

Elle affiche de nombreuses informations (chacune peuvent être développées au survol de la souris :

* Le code HTTP (si tout est OK ce sera en vert, sinon en rouge)
* Le nom de la route qui a été trouvée et exécutée par l'application "homepage"
* Informations de performance : temps d'exécution de la page (90 ms), consommation (2mb de mémoire vive), et occasionné 61 appels au cache applicatif
* Informations sur l'internationalisation : 16 clés de traduction ont été affichées
* Des informations sur la BDD : 3 requêtes SQL exécutées
* La version du framework utilisée

![Barre de débogage Symfony](https://user.oc-static.com/upload/2021/03/08/16151997938762_debug_toolbar.png)

Le **Profileur Web** est une application permettant de récolter, traiter et d'afficher des informations lors de l'exécution de l'application Symfony. Pour chaque profil établi, un token unique est créé et permet d'accéder aux informations du profil généré.

Les points importants :

* L'onglet "Performances" donne de nombreuses informations sur l'exécution de l'application.
* "Configuration" contient un lien vers la configuration PHP, en plus des modules installés (dit "bundle").
* "Routing" pour comprendre pourquoi la page affichée n'est peut-être pas celle demandée.
* Dans les en-têtes de la réponse HTTP, on retrouvera le token unique du profil généré.

## Serveur de développement

Bon à savoir : Symfony embarque un **serveur de débogage** qui affichera le résultat en console de tout élément qui aura été "dumpé" dans l'application. La function **dump()** est un _var_dump() amélioré fournit par Symfony._