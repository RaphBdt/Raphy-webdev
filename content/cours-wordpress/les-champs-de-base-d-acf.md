---
part: 3
id: 1
title: Les champs de base d'ACF

---
Les deux gros avantages d'ACF sont que le client n'a qu'à remplir le contenu de son site sans avoir besoin / la possibilité de toucher au design ; on maîtrise entièrement le code généré contrairement à un page builder. En bref, c'est bien plus propre !

Voici comment on procède habituellement avec ACF : 

1. Tout d’abord on créé un groupe de champs et on y ajoute nos champs (contenus, images…) ;
2. On assigne ensuite ce groupe à une page, des articles, une catégorie en particulier…
3. Et enfin on modifie le template concerné via PHP pour afficher ces champs.

Pour récupérer un champ en PHP :

    <!-- Afficher une valeur -->
    <?php the_field( 'note' ); ?>
    
    <!-- Récupérer la valeur -->
    <?php $note = get_field( 'note' ); ?>

Une image : 

    <?php 
    	$image_id = get_field( 'pochette' ); // On récupère cette fois l'ID
    	if( $image_id ) {	
    		echo wp_get_attachment_image( $image_id, 'full' );
        }