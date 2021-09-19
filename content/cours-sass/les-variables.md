---
part: 2
id: 7
title: Les variables

---
Pour déclarer une variable dans Sass, il suffit d'utiliser le symbole **$**.

\`\`\`scss

 $color-primary: #15DEA5;

\`\`\`

On peut bien évidemment à la place d'une couleur mettre du padding, une taille de texte...

Ensuite, il suffit d'utiliser notre variable dans le code.

\`\`\`scss

 .form__field textarea {

 width: 100%;

 color: $color-primary;

 background: #001534;

 border: 0.1rem solid $color-primary;

 outline: none;

 padding: 1.5rem;

 margin-bottom: 0.75rem;

 }

\`\`\`

**Point important :** Dans cette situation, notre variable correspond à du vert menthe, mais ça aurait été une erreur d'appeler cette variable <em>$mint</em> (vert menthe en anglais). Si nous souhaitons changer les couleurs de notre site dans le futur, cela veut dire qu'il faudra rechanger toutes les variables dans le code. La solution est donc de donner comme nom le rôle de la variable (_$color-primary_, _$font-size-h1_...).

À savoir : Sass accepte en tout huit types de données (mais on s'en sert de seulement cinq en pratique) :

* Les couleurs
* Les chaînes de caractères (strings)
* Les nombres
* Les listes et maps
* Et trois autres : les booléens (boolean), les nulls et les fonctions