---
part: 2
id: 9
title: Analyser les performances de nos animations

---
Pour analyser les performances de nos animations sur des vieux appareils par exemple, nous pouvons utiliser la boîte à outils **DevTools** de Google.

Dans Google Chrome : clic droit > Performance > Cocher la case "Screenshots" (car on fait de l'animation) > CPU : Choisir X6 (pour simuler un CPU 6 fois moins puissant) > Lancer un nouvel enregistrement.

Suite à ça, lancer notre animation sur le navigateur et stopper l'enregistrement quand c'est terminé.  
Les résultats apparaissent également dans l'onglet **Performances**. Nous pouvons sélectionner une zone en particulier en maintenant enfoncé le clic de notre souris. Ensuite, on peut voir le nombre de FPS de notre animation grâce aux cases vertes plus bas.

Pour voir au détail ce qui se passe sur nos images, on peut regarder la section **main** et zoomer au maximum. Si nous avons bien fait les choses, il ne devrait pas y avoir de layout / calculs de pain (juste un calcul de composition).