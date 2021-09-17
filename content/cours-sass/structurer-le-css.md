---
id: 1
title: Structurer le CSS
---

Les **sélecteurs CSS** déterminent à quels éléments s'appliquent un ensemble de règles. La **spécificité** mesure à quel point un sélecteur est spécifique.

L'objectif est d'appliquer la règle du **DRY** (Don't repeat yourself).

```css
.btn {
    background-color: #001534;
    color: #15DEA5;
    padding: 1.5rem;
}
                    
.btn-wide {
    width: 100%;
}
                    
/* And... */
.btn-rounded {
    border-radius: 3rem;
}
```

```html
class="btn btn-rounded btn-wide"
```

Dans cet exemple, on ne repête pas le code entre nos sélecteurs alors qu'on a la possibilité d'avoir plusieurs boutons.

## La spécificité
Quand des règles **contradictoires** s'appliquent à un élément, le navigateur appliquera **la règle la plus spécifique**.

Les 4 piliers de la spécificité (du plus au moins spécifique) : 
1. **Le style inline** (du CSS directement dans le HTML)
2. **Les id** (les #)
3. **Les classes, pseudoclasses et attributs** (les .)
4. **Les éléments et pseudoéléments** (div, p, a...)

```css
#submit-button {
      background-color: #15DEA5;
}
    
.button {
      background-color: #DB464B;
}
```

Ici, le *#submit-button* est plus spécifique.

```css
#submit-button {
    background-color: #15DEA5;
}

                #submit-button.button { 
    background-color: #DB464B;
}

// Dans le HTML on a un bouton qui a :
id="submit-button" class="button"
```

Ici, le *#submit-button.button* est plus spécifique.
À noter quelque chose de très important : il n'y a pas d'espace entre les noms et les classes dans le sélecteur CSS, sinon, l'ensemble de règles ne s'appliquerait qu'aux éléments auxquels a été assignée la deuxième classe. Ici, on souhaite que l'élément contienne toutes les règles du sélecteur.

```css
.button { 
    background-color: #DB464B;
}
                .submit {
    background-color: #15DEA5;
}
```

Dans ce cas, c'est *.submit* qui gagne (car il est après).