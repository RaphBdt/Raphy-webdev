---
part: 2
id: 3
title: 'Les types de publications et taxonomies '

---
Par défaut il n'y a que les pages et les articles mais on peut créer de nouveaux types de publications.

En effet, c'est très souvent utilisé, notamment pour, par exemple, mettre en avant des réalisations, des biens immobiliers, des programmes...

Il est également possible de créer de nouvelles taxonomies. Elles permettent de classer des articles, ou autres CPT (customs post type).

## Déclarer un CPT

    <?php 
    
    function capitaine_register_post_types() {
    	
        // CPT Portfolio
        $labels = array(
            'name' => 'Portfolio',
            'all_items' => 'Tous les projets',  // affiché dans le sous menu
            'singular_name' => 'Projet',
            'add_new_item' => 'Ajouter un projet',
            'edit_item' => 'Modifier le projet',
            'menu_name' => 'Portfolio'
        );
    
    	$args = array(
            'labels' => $labels,
            'public' => true,
            'show_in_rest' => true,
            'has_archive' => true,
            'supports' => array( 'title', 'editor','thumbnail' ),
            'menu_position' => 5, 
            'menu_icon' => 'dashicons-admin-customizer',
    	);
    
    	register_post_type( 'portfolio', $args );
    }
    add_action( 'init', 'capitaine_register_post_types' ); // Le hook init lance la fonction

Pour voir notre nouveau custom post type, il faut régénérer le _.htaccess_ en régénérant les permaliens !

Par défaut, on a le même rendu que archive.php. Dans notre cas, pour avoir une présentation différente, il faut créer un nouveau fichier : **archive-portfolio.php.** Et pour qu'une réalisé du portfolio ait une présentation différente d'un article, il faut créer le fichier **single-portfolio.php.**

## Créer des taxonomies

    <?php 
    function capitaine_register_post_types() {
    	$labels = array( ... );
        $args = array( ... );
        
        register_post_type( 'portfolio', $args );
        
        // Déclaration de la Taxonomie
        $labels = array(
            'name' => 'Type de projets',
            'new_item_name' => 'Nom du nouveau Projet',
        	'parent_item' => 'Type de projet parent',
        );
        
        $args = array( 
            'labels' => $labels,
            'public' => true, 
            'show_in_rest' => true,
            'hierarchical' => true, 
        );
    
        register_taxonomy( 'type-projet', 'portfolio', $args );
    }
    add_action( 'init', 'capitaine_register_post_types' );

Pour assigner notre nouvelle taxonomie à un ou plusieurs CPT :

    <?php 
    
    // Assigner à un CPT
    register_taxonomy( 'type-projet', 'portfolio', $args );
    
    // Assigner à plusieurs CPT
    register_taxonomy( 'type-projet', array( 'portfolio', 'autre' ), $args );

Enfin, pour afficher côté frontend nos taxonomies :

    <!-- Version simple -->
    <?php the_terms( get_the_ID() , 'type-projet' ); ?>
    
    <!-- Contrôle de l'affichafge avant / séparateur / après -->
    <?php the_terms( get_the_ID() , 'type-projet', 'Type de projet :', ', ', '' ); ?>

Il faut là aussi régénérer le **.htaccess** pour ne pas avoir de problèmes.