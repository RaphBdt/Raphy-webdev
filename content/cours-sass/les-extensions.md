---
part: 2
id: 9
title: Les extensions

---
Le problème avec les mixins c'est qu'une fois le CSS compilé, il y a beaucoup de code généré :

    @mixin .typography {
        color: $colour-primary;
        font-size: 2rem;
        font-weight: 100;
        line-height: 1.7;
    }
    
    
    
    h1 {
    	@include .typography;
    }
    textarea {
      	@include .typography;
    }
    button {
      	@include .typography;
    }
    input {
      	@include .typography;
    }

    h1 {
        color: #15dea5;
        font-size: 2rem;
        font-weight: 100;
        line-height: 1.7;
    }
    textarea {
        color: #15dea5;
        font-size: 2rem;
        font-weight: 100;
        line-height: 1.7;
    }
    button {
        color: #15dea5;
        font-size: 2rem;
        font-weight: 100;
        line-height: 1.7;
    }
    input {
        color: #15dea5;
        font-size: 2rem;
        font-weight: 100;
        line-height: 1.7;
    }

Pour pallier à ce problème d'optimisation, on peut utiliser les extensions Sass.

    .typography {
        color: $colour-primary;
        font-size: 2rem;
        font-weight: 100;
        line-height: 1.7;
    }
    h1 {
      	@extend .typography;
    }
    textarea {
      	@extend .typography;
    }
    button {
      	@extend .typography;
    }
    input {
      	@extend .typography;
    }

Dans le code complié ça nous donnera un résultat plus optimisé :

    .typography, h1, textarea, button, input {
        color: #15dea5;
        font-size: 2rem;
        font-weight: 100;
        line-height: 1.7;
    }

À retenir : **Mixin duplique un ensemble de règles alors que @extend duplique le sélecteur**.

Néanmoins, l'objectif de .typography n'est pas de modifier un élément, mais plutôt de servir de **placeholder (un terrain de base quoi)**. Dès lors, ce n'est pas très propre d'écrire le code de cette manière car ça peut porter à confusion si on veut faire des modifications plusieurs mois plus tard.

Sass a encore une fois la solution car il a un placeholder intégré. Il se matérialise avec le préfixe _%_.

    %typography {
        color: $colour-primary;
        font-size: 2rem;
        font-weight: 100;
        line-height: 1.7;
    }
    h1 {
        @extend %typography;
    }
    textarea {
      	@extend %typography;
    }
    button {
      	@extend %typography;
    }
    input {
      	@extend %typography;
    }