---
part: 2
id: 8
title: Valider les données saisies par nos utilisateurs

---
Pour envoyer des données à un service web, il faut obligatoirement les **valider**, c'est à dire vérifier leur **cohérence** par rapport à ce que le service web attend.

## Ne jamais faire confiance aux utilisateurs !

En effet, un utilisateur peut se tromper et donc faire planter le service web, ou bien il peut y avoir des pirates informatiques qui vont tout faire pour trouver une faille, etc...

Il faut bien comprendre qu'ici c'est juste la base de la programmation mais qu'**il faudra toujours avoir une validation poussée des données utilisateurs sur le service web**.

## Valider les données avec des événements

Par exemple, si on veut vérifier à chaque changement de caractère que le champ comment par "Hello" :

    myInput.addEventListener('input', function(e) {
        var value = e.target.value;
        if (value.startsWith('Hello ')) {
            isValid = true;
        } else {
            isValid = false;
        }
    });

## Validation plus poussée avec les Regex

C'est un outil puissant qui nous permet de faire tout type de vérification. Par exemple, pour vérifier qu'un texte commence par la lettre "e" et est suivi d'au moins 3 chiffres :

    function isValid(value) {
        return /^e[0-9]{3,}$/.test(value);
    }

Voici [la documentation](https://regexr.com/) pour tout savoir.

_TIPS :_ Si on veut mettre une Regex dans une condition :

    code.addEventListener('input', function(e) {
      let value = e.target.value;
      if (/^CODE-/.test(value)) {
        codeResult.innerHTML = "Code valide";
        btn.removeAttribute("disabled");
      } else {
        codeResult.innerHTML = "Code invalide";
        btn.setAttribute("disabled", "true");
      };
    });

## Les contraintes HTML 5

Depuis HTML 5, on peut passer directement par le HTML !

Pour ça, différents **attributs** sont ajoutés et permettent d'**empêcher la soumission d'un formulaire** si toutes les validations ne sont pas respectées.

Dans les _input_, on peut utiliser l'attribut type.

Au delà des valeurs _text_ et _password_, la balise _input_ peut prendre aussi comme valeur :

* _email_
* _tel_
* _URL_
* _date_
* _..._

En fonction du _type_ de l'_input_, on peut utiliser différents attributs pour perfectionner notre validation :

* _min / max :_ fonctionne avec des champs de type **nombre** et **date**. Permet de définir une valeur minimum et maximum.
* _min / max :_ fonctionne à peu près avec **tous les types de champ**. Cela rend obligatoire le remplissage du champ.
* _step :_ fonctionne avec les **dates** ou les **nombres**. Cela permet de définir une valeur d'incrémentation lorsqu'on change la valeur du champ via les flèches.
* _minlength / maxlength :_ fonctionne avec les **champs textuels** (_text_, _url_, _tel_, _email_). Cela permet de définir un nombre de caractères minimum et maximum autorisé

Tout comme avec les Regex en JavaScript, HTML5 nous permet de faire des vérifications poussées grâces à l'attribut _pattern_. Par exemple, si on veut que l'utilisateur ne puisse entrer que des chiffres et qu'il puisse y avoir 3 caractères maximum :

    <input type="text" pattern="[0-9]{,3}" />

[La documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation) à ce sujet.