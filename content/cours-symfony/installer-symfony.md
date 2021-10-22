---
part: 1
id: 1
title: Installer Symfony

---
Installation

Dans un premier temps, il faut PHP sur sa machine. Pour ça, j'ai utilisé la commande de l'excellent [Homebrew](https://formulae.brew.sh/formula/php). Il faut savoir qu'Apple installe nativement PHP avec MacOS, mais à ce qu'il paraît ce ne sera plus le cas prochainement. C'est donc bien de savoir comment installer PHP nous-même.

Ensuite, il faut installer Composer. Pour ça pareil, je passe par le merveilleux [Homebrew](https://formulae.brew.sh/formula/composer).

Pour vérifier si c'est tout bon :

    php -v
    composer --version

On peut enfin installer Symfony grâce à un logiciel appelé [Symfony CLI](https://symfony.com/download). _Ce logiciel permet de créer des applications Symfony à partir de squelettes applicatifs (bases de travail), il propose un serveur local pour exécuter nos projets et un outil pour vérifier les problèmes de sécurité._

Installer Symfony CLI sur notre ordinateur :

    curl -sS https://get.symfony.com/cli/installer | bash

Dans le terminal, nous avons un message qui propose d'installer Symfony globalement en déplaçant le fichier grâce à une ligne de commande :

    mv /Users/raphaelbeaudet/.symfony/bin/symfony /usr/local/bin/symfony

Alors dans mon cas le dossier "bin" n'existait pas donc j'ai dû le créer puis taper la ligne de commande et ça a marché.

Et ça y est, on peut entrer dans le vif du sujet en créant notre projet (il faut évidemment être dans le bon répertoire) :

    symfony new --full mon-super-projet

Ensuite, il faut se déplacer **à l'intérieur** de notre projet, et lancer notre serveur.

    cd mon-super-projet
    symfony server:start

Si le port n'est pas occupé, on peut retrouver notre application à cette adresse : **http://localhost:8000/**. Pour stopper le serveur local, il faut utiliser la commande **Ctrl + C**.

## La structure du framework

Il est important de comprendre qu'il n'y a pas qu'une seule version du framework, mais plusieurs **squelettes applicatifs**. Pour un projet web, le squelette recommandé est le **website skeleton**.

* **Le dossier "bin" :** Contient les exécutables disponibles dans le projet. Il y a ceux fournis nativement avec le framework, mais aussi les autres dépendances.
* **Le dossier "config" :** Contient **toute la configuration** de l'application : le framework, les dépendances primordiales (Doctrine, Twig, Monolog) et les routes.
* **Le dossier "public" :** Il contient un fichier chargé de recevoir toutes les requêtes des utilisateurs. _Seul ce dossier doit être accessible de l'extérieur_.
* **Le dossier "migrations" :** On retrouve dans ce dossier les migrations du projet générées à chaque changement effectués sur la base de données avec l'ORM Doctrine.
* **Le dossier "src" :** **C'est ici que se trouve notre application !** _Contrôleurs, formulaires, écouteurs d'évènements, modèles, tous les services et le "moteur" de l'application : le kernel._
  * Controller Entity Kernel.php Repository
* **Le dossier "tests" :** Dans ce dossier ce trouve les tests unitaires, d'intégration et d'interfaces. Par défaut, l'espace du nom du dossier tests est App\\Tests et celui du dossier src est App.
* **Le dossier "templates" :** Contient les gabarits utilisés dans le projet. Si dans un contrôleur on fait **$this->render('foo.html.twig');**, alors le gabarit sera localisé dans le dossier **templates/foo.html.twig**.
* **Le dossier "translations" :** Symfony fournit un composant capable de gérer de nombreux formats de traductions.
* **Le dossier "var"** : Contient les fichier de **cache**, de **log** et, si le framework est configuré pour gérer les sessions PHP, les fichiers de **sessions**.
* **Le dossier "vendor"** : Contient notre chargeur de dépendance, ou "autoloader" et l'ensemble des dépendances installées avec Composer. On peut aussi découvrir nos dépendances grâce à la commande **composer show**.

À savoir pour l'avenir : il existe un plugin Composer appelé [Symfony Flex](https://symfony.com/doc/current/setup/flex.html), capable d'écouter les évènements Composer (installation, mise à jour, suppression d'une dépendance...).