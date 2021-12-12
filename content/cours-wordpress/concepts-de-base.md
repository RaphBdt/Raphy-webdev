---
part: 2
id: 1
title: Concepts de base

---
## Créer la base de son thème

Créons un nouveau dossier dans les thèmes de WordPress.  
Il faut créer quelques fichiers :

* index.php
* style.css
* functions.php
* screenshot.png (de 880x660px)

C'est dans le fichier _style.css_ qu'on doit indiquer toutes les informations à propos de notre thème.

    /*
    Theme Name: Capitaine
    Theme URI: https://capitainewp.io
    Author: Maxime BERNARD-JACQUET
    Author URI: https://dysign.fr
    Description: Mon premier thème !
    Requires at least: WordPress 5.0
    Version: 1.0
    */

Dans _index.php_ on va mettre le minimum pour le moment :

    <!DOCTYPE html>
    <html>
    <head></head>
    <body>
    	<h1>Coucou !</h1>
    </body>
    </html>

Dans _functions.php_ :

    // Ajouter la prise en charge des images mises en avant
    add_theme_support( 'post-thumbnails' );
    
    // Ajouter automatiquement le titre du site dans l'en-tête du site
    add_theme_support( 'title-tag' );

**Attention : Dans le fichiers qui contiennent exclusivement du PHP, comme functions.php, on ne referme pas la balise PHP à la fin du fichier.**

On peut maintenant activer notre thème dans Apparence > Thèmes.

## L'en-tête et le pied de page

On va créer deux nouveaux fichiers : _header.php_ et _footer.php_, qui seront appelés sur l'ensemble des pages de notre site. 

Dans _header.php_ :

    <!DOCTYPE html>
    <html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        
        <?php wp_head(); ?>
    </head>
    
    <body <?php body_class(); ?>>
        
        <?php wp_body_open(); ?>

Dans _footer.php_ :

    	<?php wp_footer(); ?>
    </body>
    </html>

On peut maintenant modifier _index.php_ et mettre :

    <?php get_header(); ?>
    
    <h1>Coucou</h1>
    
    <?php get_footer(); ?>

Il faut aussi penser à régler le site sur la langue française dans _Réglages > Général > Langue du site._

Grâce à la génération automatique de classes CSS, on peut par exemple ajuster notre menu fix lorsque la barre d'administration WordPress apparaît :

    .menu {
        position: fixed;
        top: 0px;
    }
    
    .admin-bar .menu {
    	top: 32px; /* on prend en compte le décalage */
    }

Tips : en terme de performances, il est plus intéressant de charger en priorité les fichiers CSS en haut de page et les scripts JS en bas de page. 

### On va maintenant ajouter un logo en haut du site 

On va créer un dossier _img_ à la racine du thème et mettre notre logo.

Ajoutant ce code avant l'ouverture du body :

    <body <?php body_class(); ?>>
      <header class="header">
        <a href="<?php echo home_url( '/' ); ?>">
          <img src="<?php echo get_template_directory_uri(); ?>/img/logo.svg" alt="Logo">
        </a>  
      </header>

## Créons du faux contenu

Pour avoir un aperçu de ce qu'on va faire, il faut créer des pages, articles et catégories fictifs. 

Dans _Réglages > Lecture_, on peut changer le type de page qu'on veut en page d'accueil / articles.

## Le Template Hierarchy

WordPress affiche des modèles différents en fonction de la page demandée. Page standard, liste des articles, catégories, affichage d'un article...

**Le Template Hierarchy est un processus du coeur de WordPress qui lui permet de déterminer quel modèle de page utiliser en fonction de la page sélectionnée.**

Voici le Template Hierarchy de WordPress en version simplifiée :

![](https://capitainewp.io/wp-content/uploads/2019/02/template-hierarchy-simplifie.png)

On va maintenant créer tous les fichiers nécessaire dans notre thème :

* archive.php ;
* front-page.php ;
* home.php ;
* page.php ;
* single.php.

Dans chacun d'eux ils faut mettre ce code :

    <?php get_header(); ?>
    	<h1>ARCHIVE</h1>
    <?php get_footer(); ?>