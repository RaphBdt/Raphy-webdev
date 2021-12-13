---
part: 2
id: 2
title: Les fonctionnalités de thème WordPress

---
## Les Hooks et le fichier functions.php

Les hooks permettent de modifier le comportement natif de WordPress sans pour autant toucher au code source.

Il existe deux types de look.  
Les **Actions** : à des moments clés, on peut lancer notre propre fonction pour faire des choses supplémentaires dans WordPress.  
Les **Filtres** : qui permettent d’intercepter une valeur afin de la modifier.

Exemple de hook (tous les hooks s'écrivent dans functions.php) :

    <?php 
    function capitaine_remove_menu_pages() {
    	remove_menu_page( 'tools.php' );
        remove_menu_page( 'edit-comments.php' );
    }
    add_action( 'admin_menu', 'capitaine_remove_menu_pages' );

Notre fichier _functions.php_ risque vite de devenir lourd... Pour pallier ce problème, on peut le scinder :

    <?php 
    	// Configuration du thème
    	require_once get_template_directory() . '/inc/config.php';
    
    	// Types de publication et taxonomies
    	require_once get_template_directory() . '/inc/post-types.php';
    
    	// Fonctionnalités
    	require_once get_template_directory() . '/inc/features.php';

## Charger les scripts et les styles

**Pour déclarer ses feuilles de style CSS et ses scripts, il faut passer par _functions.php_ !**

    <?php
    function capitaine_register_assets() {
        
        // Déclarer jQuery
        wp_enqueue_script('jquery' );
        
        // Déclarer le JS
    	wp_enqueue_script( 
            'capitaine', 
            get_template_directory_uri() . '/js/script.js', 
            array( 'jquery' ), 
            '1.0', 
            true
        );
        
        // Déclarer style.css à la racine du thème
        wp_enqueue_style( 
            'capitaine',
            get_stylesheet_uri(), 
            array(), 
            '1.0'
        );
      	
        // Déclarer un autre fichier CSS
        wp_enqueue_style( 
            'capitaine', 
            get_template_directory_uri() . '/css/main.css',
            array(), 
            '1.0'
        );
    }
    add_action( 'wp_enqueue_scripts', 'capitaine_register_assets' );

La paramètre _array_ indique s'il y a des dépendances.

Si on veut par exemple charger un script sur certaines pages uniquement :

    <?php 
    
    function capitaine_register_assets() {
        
        // Déclarer jQuery
        wp_enqueue_script('jquery' );
        
        // Déclarer le JS
        wp_enqueue_script( 'capitaine', ... );
        
        // Seulement sur la page d'accueil
        if( is_front_page() ) {
        	wp_enqueue_script( 'diaporama', ... );
        }
    }
    add_action( 'wp_enqueue_scripts', 'capitaine_register_assets' );

## Gestion des images

On peut régler la taille des images dans _Réglages > Médias_. Il est recommandé d'augmenter la taille moyenne à 1200px et la grande taille à 1920px.

WordPress est très intelligent car il affiche automatiquement la bonne taille d'image pour l'utilisateur. Même si nous on ne voit que trois tailles d'images, WordPress en génère plus que ça et affiche à l'utilisateur le meilleur format. On n'a pas trop à se soucier de la taille des images qu'on affiche.

## Les menus et le moteur de recherche

Pour vois les menus, il faut aller dans _Apparence > Personnaliser > Menus._ Pour l'instant on ne peut pas les voir car on en n'a pas créé.

Pour déclarer des emplacements de menu, il faut aller dans _functions.php_ et mettre :

    <?php 
    
    register_nav_menus( array(
    	'main' => 'Menu Principal',
    	'footer' => 'Bas de page',
    ) );

Et ensuite on l'utilise, par exemple dans _header.php_ :

    <?php wp_nav_menu( array( 'theme_location' => 'main' ) ); ?>

Pour créer un moteur de recherche, il suffit d'ajouter cette fonction, par exemple dans _header.php_ :

    <?php get_search_form(); ?>

Et on peut même modifier la barre de recherche en créant un fichier _searchform.php_ :

    <form action="<?php echo home_url( '/' ); ?>" method="get">
        <label for="search">Rechercher :</label>
        <input type="text" name="s" id="search" value="<?php the_search_query(); ?>" />
        <input type="image" alt="Search" src="<?php bloginfo( 'template_url' ); ?>/images/search.png" />
    </form>

## Les sidebars et les widgets

Pour déclarer un widget (dans _functions.php_ évidemment) (je pense que c'est mieux de laisser les paramètres car sinon les widgets sont entourés d'une balise _<li>_) :

    <?php 
    register_sidebar( array(
      'id' => 'blog-sidebar',
      'name' => 'Blog',
      'before_widget'  => '<div class="site__sidebar__widget %2$s">',
      'after_widget'  => '</div>',
      'before_title' => '<p class="site__sidebar__widget__title">',
      'after_title' => '</p>',
    ) );

Pour l'utiliser :

    <?php dynamic_sidebar( 'blog-sidebar' ); ?>

## La pagination et la navigation entre articles

Pour ajouter la pagination dans archive.php, il suffit d'ajouter cette fonction (après la boucle WordPress) :

    <?php posts_nav_link(); ?>

Ou bien si on veut une pagination plus précise :

    <?php the_posts_pagination(); ?>

## Les commentaires

Pour gérer les réglages des commentaires, il faut aller dans _Réglages > Discussion_. Il est notamment conseillé ne mettre que 2 niveaux de commentaires.

Voici ce qu'il faut mettre dans _single.php_ pour activer les commentaires :

    <?php comments_template(); // Par ici les commentaires ?>

Pour ne pas avoir de spam, il faut mettre le plugin Akismet Spam et générer une clé d'API pour pouvoir la rentrer dans le plugin.  