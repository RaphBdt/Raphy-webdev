---
part: 2
id: 11
title: Les fonctions

---
Sass possèdes de nombreux outils qui nous permettent de, par exemple, assombrir, désaturer ou encore inverser des couleurs... Ces outils s'appellent des **fonctions**. Il s'agit de bouts de codes préfabriqués qui effectuent une tâche et nous revoient une valeur.

Fonctions **darken** ➡️ assombrit une couleur :

    @mixin heading-shadow($colour:$colour-primary, $size: $heading-shadow-size){
        text-shadow: $size $size darken($colour, 10%);
    }

Comment fonctionne la fonction darken ?  
Au délà de l'hexa et du RGB, il existe une autre façon de renseigner les couleurs : le hsl(). Cela prend trois valeurs : la teinte, la saturation et la clarté. Darken modifie juste le dernier paramètre; convertit la nouvelle couleur en hexa et **nous retourne la valeur**.

Il existe énormément de fonctions Sass : [https://sass-lang.com/documentation/modules](https://sass-lang.com/documentation/modules "https://sass-lang.com/documentation/modules").