---
part: 2
id: 5
title: Dynamiser nos vues avec Twig

---
##   
Qu'est-ce que Twig ?

Twig est un moteur de gabarit développé en PHP inclus par défaut avec Symfony.

Son intérêt est de séparer la logique et la réprésentation.

Pourtant, on a toujours besoin d'un peu de code dynamique pour intégrer les pages web :

* Boucler sur une liste d'éléments
* Afficher une portion de code selon une condition
* Formater une date en fonction de la date locale utilisée par le visiteur du site...

Twig est plus adapté que PHP en tant que moteur de gabarit, car il a une syntaxe claire et concise, supporte de nombreuses fonctionnalités telles que la notion d'héritage et enfin, il sécurise nos variables.

La syntaxe :

* **_{{ ... }}_ :** Affiche une expression
* **_{% ... %}_ :** Exécute une action
* **_{# ... #}_ :** Commentaire

Exemple :

    {# Ceci est un exemple de gabarit Twig #}
    {% set collection = [1, 2, 3] %}
    
    <ul>
    {% for item in collection %}
        <li>{{ item }}</li>
    {% endfor %}
    </ul>
    
    {# 
        Va afficher seulement ce code HTML:
    
        <ul>
            <li>1</li><li>2</li><li>3</li>
        </ul>
    #}

Afficher une "Hello world" :

    // src/Controller/HelloController.php
    namespace App\Controller;
    
    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    use Symfony\Component\Routing\Annotation\Route;
    
    class HelloController extends AbstractController
    {
        /**
         * Hello world, avec Twig cette fois :)
         *
         * @Route("/hello/{name}", name="hello")
         */
        public function hello($name)
        {
            $this->render('hello.html.twig', ['name' => $name]);
        }
    }

Gabarit Twig correspondant :

    {# /templates/hello.html.twig #}
    
    Hello {{ name }}!

Symfony cherche les gabarits dans **_le dossier templates_**. La fonction **_render_** prend en paramètre le chemin et un tableau de paramètres, qui sont disponibles dans le gabarit.

Les opérateurs :

    {% for key, element in elements %}
        {% if loop.index % 2 %}
            Element pair
        {% else %}
            Element impair
        {% endif %}
    {% else %}
        Il n'y a aucun élément à afficher.
    {% endfor %}

* in, is
* Mathématiques : + ; - ; / ; % ; // ; * ; **
* Logique : and, or, not
* Opérateurs plus utilitaires : \~, ?:...

**Les tags sont des éléments de langages propres à Twig :**

* **block :** définit un espace surchargeable
* **do, if, else :** élément de langage identique à PHP
* **import :** permet d'importer un fichier comprenant des macros
* **set :** permet de définir une ou plusieurs variables
* **spaceless :** supprime tous les espaces entre les tags HTML
* **verbatim :** ne sera pas pris en compte pas Twig

## Les macros, fonctions et filtres

Il est possible d'étendre Twig avec trois types d'extensions différentes : les fonctions, les filtres et les macros.

    {% for i in range(1, 10) %}
        {{ i }}
    {% endfor %}
    
    {# Twig supporte les paramètres nommés #}
    {{ renderWithOptions(foo = 'foo', bar = 'bar', baz = 'baz') }}
                

Les fonctions les plus utilisées :

* [constant](https://twig.symfony.com/doc/2.x/functions/constant.html) : appelle une constante PHP
* [include](https://twig.symfony.com/doc/2.x/functions/include.html) : retourne le rendu du fichier
* [include](https://twig.symfony.com/doc/2.x/functions/dump.html) : dump
* [min](https://twig.symfony.com/doc/2.x/functions/min.html) / [max](https://twig.symfony.com/doc/2.x/functions/max.html) : équivalent des fonctions PHP min() et max()

Une fonction peut la valeur d'une variable, un **filtre** change seulement son affichage. On utilise "pipe" **|** pour appliquer un filtre.

    {{ 'foo'|capitalize|reverse }} {# "Oof" #}
                

Parmis les filtres disponibles nativement, voici les plus utilisés :

* [date](https://twig.symfony.com/doc/2.x/filters/date.html) : formate une date
* [first](https://twig.symfony.com/doc/2.x/filters/first.html) : afficher le premier élément
* [last](https://twig.symfony.com/doc/2.x/filters/last.html) : affiche le dernier élément
* [length](https://twig.symfony.com/doc/2.x/filters/length.html) : affiche la longueur d'un tableau, d'une chaine de caractères
* [number_format](https://twig.symfony.com/doc/2.x/filters/number_format.html) : permet de fromatter un nombre

Voici ce que peut nous permettre de faire Twig (c'est vraiment cool) :

    {% set tableau, article = [1,2,3], {
        'titre': 'Etendre Twig',
        'contenu': 'Il est possible ...'
        }
    %}
    
    {{ tableau.2 ~ ' ' ~ tableau|first  }} {# "2 1" #}} 
    
    {{ article.titre }} {# "Etendre Twig" #}
    {{ article.contenu }} {# "Il est possible ..." #}
                

Pour créer notre propre fonctions et filtres, il faut [**créer une extension Twig**](https://symfony.com/doc/current/templating/twig_extension.html#create-the-extension-class).

Il faut aussi savoir qu'il est possible de créer des macros. Il s'agit d'un type d'extension qui répond à un besoin plus spécifique : automatiser une tâche répétitive.

## L'héritage de gabarit

**Partie ultra importante.**

Définir des **blocks** et utiliser la fonction **parent()** permet de customiser et de rendre réutilisable les gabarits.

_Le template parent.html.twig :_

    {# /templates/parent.html.twig #}
    <html>
        <head>
        <title>{% block titre %}Parent{% endblock%}</title>
        {% block stylesheets %}
            <link rel="stylesheet" href="styles.css" type="text/css" media="all" />
        {% endblock %}
        </head>
        <body>
            {% block contenuPrincipal %}
                Contenu du body
            {% endblock %}
            {% block javascripts %}{% endblock %}
        </body>
    </html>
                

_La page "Product" qui utilise "Parent" :_

    {# /templates/produit.html.twig #}
    {% extends 'parent.html.twig' %}
    
    {% block titre %}Page Produit{% endblock%}
    
    {% block stylesheets %}
        {{ parent() }}
        <link rel="stylesheet" href="produit.css" type="text/css" media="all" />
    {% endblock%}
    
    {% block contenuPrincipal %}
        Ceci est la page Produit!
    {% endblock %}
    
    {% block javascripts %}
    <script src="build/produit.js" />
    {% endblock %}
                

Cela donnera le fichier HTML suivant :

    <html>
        <head>
            <title>Page Produit</title>
            <link rel="stylesheet" href="styles.css" type="text/css" media="all" />
            <link rel="stylesheet" href="produit.css" type="text/css" media="all" />
        </head>
        <body>
            <p>Ceci est la page Produit!</p>
            <script src="build/produit.js" />
        </body>
    </html>
                

La fonction **_parent()_** permet de récupérer le contenu du bloc dans le gabarit parent.

Dans notre exemple, la titre de la page par défaut est "Parent" si le bloc n'est pas surchargé. Le corps de la page est par défaut vide. Nous avons cinservé l'appel au fichier "style.css" à l'aide de la fonction parent().