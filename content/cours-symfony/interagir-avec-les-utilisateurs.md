---
part: 2
id: 6
title: Interagir avec les utilisateurs

---
Créer le premier formulaire

Imaginons un formulaire de création d'article pour un blog.

    // src/Entity/Article.php
    namespace App\Entity;
    
    class Article
    {
        private $author;
        private $content;
        private $title;
    
        public function getAuthor()
        {
            return $this->author;
        }
    
        public function setAuthor($author)
        {
            $this->author = $author;
        }
    
        // ...
    }

Cet objet n'est pas encore lié à Symfony. Il va falloir créer un **"type de formulaire"** à partir de notre objet.

Un type de formulaire est une classe qui permet de construire un formulaire en définissant les différents types de champs.

    // src/Form/ArticleType.php
    namespace App\Form;
    
    use App\Entity\Article;
    use Symfony\Component\Form\AbstractType;
    use Symfony\Component\Form\FormBuilderInterface;
    use Symfony\Component\OptionsResolver\OptionsResolver;
    use Symfony\Component\Form\Extension\Core\Type\TextType;
    use Symfony\Component\Form\Extension\Core\Type\TextareaType;
    
    class ArticleType extends AbstractType
    {
        public function buildForm(FormBuilderInterface $builder, array $options)
        {
            $builder
                ->add('title')
                ->add('content', TextareaType::class)
                ->add('author', TextType::class)
            ;
        }
        
        public function configureOptions(OptionsResolver $resolver)
        {
            $resolver->setDefaults([
                'data_class' => Article::class,
            ]);
        }
    }

Le composant form dispose d'un constructeur de formulaires (**le form builder**).

En passant la classe au résolveur d'options du formulaire, le constructeur est capable, à partir de la classe, de deviner quel type de champ il doit utiliser.

Par défaut, le type de champs rendu sera "texte" qui correspond à la classe TextType, mais on peut définir pour chaque propriété le type de rendu que l'on souhaite.

[Voici tous les types de champ disponibles](https://symfony.com/doc/current/reference/forms/types.html)

Il faut savoir que chaque type de champs dispose de nombreuses options qui permettent encore de configurer l'affichage. Par exemple, si on souhaite afficher un message d'aide :

    $builder->add('title', null, [
        'help' => "Le titre de l'article, utilisé dans l'url",
    ]);

Pour afficher le formulaire dans un template Twig, il faut le créer dans un contrôleur et fournir à Twig une "représentation" de l'objet formulaire créé.

    // src/Controller/FormController.php
    namespace App\Controller;
    
    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    use Symfony\Component\HttpFoundation\Request;
    use Symfony\Component\Routing\Annotation\Route;
    use App\Form\ArticleType;
    use App\Entity\Article;
    
    class FormController extends AbstractController
    {
        /**
         * @Route("/form/new")
         */
        public function new(Request $request)
        {
            $article = new Article();
            $article->setTitle('Hello World');
            $article->setContent('Un très court article.');
            $article->setAuthor('Zozor');
    
            $form = $this->createForm(ArticleType::class, $article);
    
            return $this->render('default/new.html.twig', array(
                'form' => $form->createView(),
            ));
        }
    }

Et le template Twig correspondant :

    {# templates/default/new.html.twig #}
    {{ form(form) }}

Nous pouvons dès à présent accéder à l'URL !

## Valider les formulaires simplement

Le formulaire est créé, mais il n'est même pas possible de le soumettre (pas de bouton "Créer") et les données seront de toute façon ignorées par le contrôleur.

Première étape : ajouter un bouton de type "submit". Pour ça, il faut remplacer notre ancien code Twig par celui-là (j'ai rien de spécial à dire, c'est assez explicite) :

    {# templates/default/new.html.twig #}
    <html>
        <head></head>
        <body>
            {{ form_start(form) }}
                {{ form_row(form.title) }}
                {{ form_row(form.content) }}
                {{ form_row(form.author) }}
    
                <button type="submit" class="btn btn-primary">Créer</button>
            {{ form_end(form) }}
        </body>
    </html>

Deuxième étape : la récupération des données. Pour ça, il faut mettre à jour notre contrôleur Symfony avec ce code :

    // src/Controller/FormController.php
    
    /**
     * @Route("/form/new")
     */
    public function new(Request $request)
    {
        $article = new Article();
        $article->setTitle('Hello World');
        $article->setContent('Un très court article.');
        $article->setAuthor('Zozor');
    
        $form = $this->createForm(ArticleType::class, $article);
    
        $form->handleRequest($request);
    
        if ($form->isSubmitted() && $form->isValid()) {
            dump($article);
        }
    
        return $this->render('default/new.html.twig', array(
            'form' => $form->createView(),
        ));
    }

La fonction **_handleRequest()_** met à jour le formulaire à l'aide des informations reçues.

Ensuite, nous vérifions que le formulaire a bien été soumis (**_$form->isSubmitted()_**) et qu'il est valide (**_$form->isValid()_**).

Quand on envoie le formulaire, on a désormais accès aux données envoyées via le WebProfiler.

Pour **valider un formulaire**, nous devons utiliser le composant **_Validator_**. Celui-ci nous simplifie ENORMEMENT la tâche. Faire une validation en PHP natif est assez long et chiant. Ici, il suffit d'utiliser les annotations fournies par le composant Validator **au niveau de l'objet à valider**.

    // src/Entity/Article.php
    namespace App\Entity;
    
    use Symfony\Component\Validator\Constraints as Assert;
    
    class Article
    {
        /**
         * @Assert\Length(
         *     min = 10,
         *     max = 70,
         *     minMessage = "Ce titre est trop court",
         *     maxMessage = "Ce titre est trop long"
         * )
         */
        private $title;
        
        /**
         * @Assert\NotBlank(message = "Le contenu ne peut être vide.")
         */
        private $content;
        
        /**
         * @Assert\NotBlank(message = "Un auteur doit être associé à l'article")
         */
        private $author;
    
        /* ... */
    }
                

Toutes les contraintes ont une propriété **message** qui permet de redéfinir le message d'erreur qui sera retourné.

La méthode **validate** prend 2 arguments : **la valeur** (chaîne de caractères, un tableau ou un objet) et **une collection de contraintes** de validation.

Lorsque nous soumettons un formulaire et que nous appelons la fonction **isValid** du formulaire Symfony, les contraintes de validation déclarées dans la classe **Article** sont appliquées sur l'objet **$article** qui a été retrouvé à partir des données de la requête utilisateur.

[Liste des contraintes de validation](https://symfony.com/doc/current/reference/constraints.html)

Par défaut, les messages d'erreur retournés aux utilisateurs sont des messages d'erreur HTML5.

S'il est important pour nous d'avoir des messages d'erreur personnalisés, alors une solution est de désactiver la validation HTML5 avec l'attribut "**novalidate**" (ça se passe évidemment dans notre Twig) :

    {{ form_start(form, {'attr': {'novalidate': 'novalidate'}}) }}

## Customiser le rendu du formulaire

Twig a des fonctions dédiées au composant Form. Ceci permet de construire un thème de formulaire par exemple. Sans le savoir, on en utilise déjà un : _form_div_layout.html.twig_.

Pour chaque type de formulaire livré avec Symfony, un thème de formulaire définit comment il doit être rendu avec Twig. Ce n'est pas tout : Symfony intègre plusieurs thèmes (Bootstrap 3, 4 et Foundation 5).

Activons le thème Bootstrap 4 : _config > packages > twig.yaml_

    # config/packages/twig.yaml
    twig:
        debug: '%kernel.debug%'
        strict_variables: '%kernel.debug%'
        form_themes: ['bootstrap_4_layout.html.twig'] # accepte plusieurs thèmes

Maintenant, il ne reste plus qu'à activer Bootstrap 4 dans notre gabarit.

    <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    </head>

Et maintenant le formulaire est beaucoup plus joli !

Pour customiser l'affichage d'un champ spécifique (car ici on passe par un template de formulaire), alors il va falloir redéfinir le gabarit utilisé pour ce champ précis dans le gabarit du formulaire concerné.

On peut même aller encore plus loin et intégrer un formulaire qui génère une collection de formulaires.