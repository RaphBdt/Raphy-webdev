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

Par défaut, on a le même rendu que archive.php. Dans notre cas, pour avoir un menu différent, il faut créer un nouveau fichier : **archive-portfolio.php.**