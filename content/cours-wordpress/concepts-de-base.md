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

## La boucle WordPress et les templates tags

La boucle WordPress est le mécanisme qui va nous permettre d'afficher les données entrées via l'interface d'administration de WordPress.

Dans _page.php_ et _front-page.php_ on peut mettre ce code :

    <?php get_header(); ?>
    
    	<?php if( have_posts() ) : while( have_posts() ) : the_post(); ?>
        
        	<h1><?php the_title(); ?></h1>
        
        	<?php the_content(); ?>
    
    	<?php endwhile; endif; ?>
    
    <?php get_footer(); ?>

Les **templates tags** sont des fonctions incluses dans WordPress qui permettent d'afficher les contenus qu'on a administré dans l'interface d'édition. Il en existe des dizaines :

    the_content(), the_title()...

Dans _archive.php_ et _home.php_, on peut entre ce code :

    <?php get_header(); ?>
     	<h1>Le blog Capitaine WP</h1>
    
    	<?php if( have_posts() ) : while( have_posts() ) : the_post(); ?>
      
    		<article class="post">
    			<h2><?php the_title(); ?></h2>
          
            	<?php the_post_thumbnail(); ?>
                
                <p class="post__meta">
                    Publié le <?php the_time( get_option( 'date_format' ) ); ?> 
                    par <?php the_author(); ?> • <?php comments_number(); ?>
                </p>
                
          		<?php the_excerpt(); ?>
                  
          		<p>
                    <a href="<?php the_permalink(); ?>" class="post__link">Lire la suite</a>
                </p>
    		</article>
    
    	<?php endwhile; endif; ?>
    <?php get_footer(); ?>

Précision au niveau du the_excerpt : cette fonction affiche ce qui est indiqué dans le champ Extrait ou bien avant le bloc "lire la suite" dans Gutenberg.

Dans la page _single.php_, mettre :

    <?php get_header(); ?>
      <?php if( have_posts() ) : while( have_posts() ) : the_post(); ?>
        
        <article class="post">
          <?php the_post_thumbnail(); ?>
    
          <h1><?php the_title(); ?></h1>
    
          <div class="post__meta">
            <?php echo get_avatar( get_the_author_meta( 'ID' ), 40 ); ?>
            <p>
              Publié le <?php the_date(); ?>
              par <?php the_author(); ?>
              Dans la catégorie <?php the_category(); ?>
              Avec les étiquettes <?php the_tags(); ?>
            </p>
          </div>
    
          <div class="post__content">
            <?php the_content(); ?>
          </div>
        </article>
    
      <?php endwhile; endif; ?>
    <?php get_footer(); ?>

### Les Templates Tags les plus utilisés 

* `the_title()` : affiche le titre de l’article ou la page ;
* `the_content()` : affiche le contenu, écrit depuis l’éditeur visuel (Gutenberg ou TinyMCE) ;
* `the_post_thumbnail()` : affiche l’éventuelle image mise en avant ;
* `the_excerpt()` : affiche un extrait de l’article, soit le contenu du champ extrait, soit le début de l’article jusqu’à la balise Lire la suite ;
* `the_category()` : affiche une liste de la ou des catégories sélectionnées ;
* `the_tags()` : affiche une liste des éventuelles étiquettes de l’article ;
* `the_author()` : affiche le nom de l’auteur ;
* `the_author_link()` : affiche le nom de l’auteur avec un lien vers son site personnel ;
* `the_date()` : affiche une fois les dates où des articles ont été publiés ;
* `the_time()` : affiche la date de publication de chaque article ;
* `the_permalink()` : affiche l’URL vers l’article, à mettre dans une balise `<a>` ;
* `comment_number()` : affiche le nombre de commentaires publiés dans l’article ;
* `get_avatar()` : Récupère l’avatar d’un utilisateur depuis le service Gravatar ;

Si on veut récupérer la valeur sans directement l'afficher, alors un utilise _get_ au lieu de _the_.

## Les templates parts

Imaginons que nous souhaitons créer un formulaire d'abonnement à une Newsletter et qu'il figure dans plusieurs endroits sur notre site... Ce sera un peu lourd de copier / coller ce code dans nos différents fichiers PHP. C'est là que nos templates parts entrent en jeu.

Imaginons ce fichier _parts/newsletter.php_ :

    <form class="newsletter-form">
        <p>Des offres exclusives, des actus WordPress et du contenu bonus en avant-première</p>
        <input type="email" name="email" placeholder="E-mail">
        <input type="submit" value="Je m'abonne">
    </form>

Et bien pour l'utiliser dans nos pages il faut juste utiliser cette fonction :

    <?php get_template_part( 'parts/newsletter' ); ?>

Comme home.php et archive.php ont très très très souvent le même rendu côté front, alors on peut utiliser un template part dans home.php :

    <?php get_template_part( 'archive' ); ?>

Pareil pour search.php :

    <?php get_template_part( 'archive' ); ?>

## Les Conditional Tags

Les conditionnal tags sont des fonctions fournies par WordPress qui testent différentes situations comme "est-on sur la page d'accueil", "l'utilisateur est-il connecté"...

Exemple :

    <?php 
    if ( is_user_logged_in() ):
    	$current_user = wp_get_current_user(); 
        echo "Bonjour, " . $current_user->user_firstname;
    else:
        echo "Bonjour, visiteur !";
    endif;

Dans archive.php, on peut ajouter ce code qui permet de définir le titre à afficher :

    <?php 
        if ( is_category() ) {
            $title = "Catégorie : " . single_tag_title( '', false );
        }
        elseif ( is_tag() ) {
            $title = "Étiquette : " . single_tag_title( '', false );
        }
        elseif ( is_search() ) {
            $title = "Vous avez recherché : " . get_search_query();
        }
        else {
            $title = 'Le Blog';
        }
    ?>
    <h1><?php echo $title; ?></h1>

## Les templates de pages personnalisés

Même si WordPress nous offre nativement beaucoup de modèle de page différent, il est essentiel de savoir comment en créer de nouveaux. Par exemple, on voudrait peut-être avoir un page contact différente de _page.php_... Et bah il suffit d'ajouter ce code au début du fichier :

    <?php
    /*
      Template Name: Contact
    */

**Truc super cool que je viens de découvrir :** On peut créer un modèle de page pour un produit ! Pour ça :

    <?php
        /*
        Template Name: Product-well
        Template Post Type: product
        */
        get_header(); 
    ?>

## Les champs personnalisés : custom Fields

Les champs personnalisés permettent d'ajouter des informations dans une publication en plus du contenu principal. Néanmoins, c'est vite limité et on sera mené à basculer vers ACF.

Par défaut, les champs additionnels sont cachés. Il faut aller dans le trois points en haut à droite pour les afficher.

Cela marche sous la forme clé / valeur. Par exemple : "Note ➡️ 7". Et on peut en ajouter autant qu'on veut.  
C'est quand même vraiment limité car on peut mettre uniquement du texte dans les valeurs. 

Pour afficher, il faut utiliser ce code :

    <p>
        <strong>Note :</strong>
        <?php echo get_post_meta( get_the_ID(), 'note', true ); ?> / 10
    </p>

Le troisième paramètre indique si la valeur de ce champ est unique (ici il n'y aura pas deux notes).  Sinon, cela renvoie un tableau de données. 

**Il faut garder à l'esprit que ACF sera bien plus puissant.** 