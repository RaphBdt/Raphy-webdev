---
part: 1
id: 2
title: Première page Symfony

---
Comment Symfony retourne une réponse à l'utilisateur ?

Symfony est basé sur le processus HTTP requête / réponse.

Le navigateur demande au serveur d'afficher une page web.

En "langage" HTTP, quand un utilisateur accède à un site, alors il émet une **requête** qui contient des informations : la méthode HTTP (GET, POST, PUT ou DELETE), l'URL, le type de contenu attendu (HTML) et le navigateur.

Ensuite, suite à toutes les informations récupérées, le serveur retourne une réponse HTTP. La réponse est généralement une page HTML, qui contient également le code de statut HTTP :

* **200 :** Page retournée sans erreur du serveur
* **404 :** Ressource non trouvée sur le serveur
* **3XX :** Redirection des ressources
* **4XX :** Erreur côté utilisateur/client
* **5XX :** Erreur côté serveur

Symfony facilite la vie. Il est doté d'un composant **HttpFoundation** qui simplifie grandement l'utilisation et la manipulation des requêtes et des réponses.

La classe **Request** centralise l'accès à toutes les super variables de PHP.

La classe **Response** permet de retourner une réponse valide à l'utilisateur en termes de langage HTTP.

    use Symfony\Component\HttpFoundation\Request;
    use Symfony\Component\HttpFoundation\Response;
    
    $request = Request::createFromGlobals();
    $name = $request->get('name');
    $response = new Response();
    
    $response->setContent(
        '<\html><\body>Hello'
        . $name
        .'<\/body><\/html>'
    );
    $response->setStatusCode(Response::HTTP_OK);
    $response->headers->set('Content-Type', 'text/html');
    
    // Retourne une réponse HTTP valide
    $response->send();

## Lier une URL à une action

Pour effectuer une action en fonction d'une URL, Symfony nous offre un contrôleur frontal très puissant et extensible.

Le framework nous offre un composant **Routing** très puissant et qui nous permet de lier une URL à une action PHP.

    // src/Controller/HelloController.php
    namespace App\Controller;
    
    use Symfony\Component\HttpFoundation\Request;
    use Symfony\Component\HttpFoundation\Response;
    use Symfony\Component\Routing\Annotation\Route;
    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    
    class HomeController extends AbstractController
    {
        /**
         * Page d'accueil
         * 
         * @Route("/home", name="accueil")
         */
        public function home()
        {
            return new Response(" Bienvenue sur la page d'accueil ! ");
        }
    
        /**
         * Page d'accès à un article
         * 
         * @Route("/article/{articleId}", name="show-article")
         */
        public function show($articleId)
        {
            // Nous retrouvons la valeur de la variable $articleId à partir de l'URI
            // Par exemple /article/1234 => $articleId = '1234'
    
            return new Response(" Voici le contenu de l'article avec l'ID $articleId ");
        }
    }

L'annotation Route s'utilise dans un bloc de commentaire particulier. **Il commence par 2 astériques** et permet de définir les paramètres et contraintes de la route pour laquelle l'action (dans notre exemple _home_ et _show_) se déclenche.

Une route accepte des expressions régulières très puissantes :

    /**
     * @Route(
     *  "/article/{articleId<\d+>}",
     *  name="show-article",
     *  methods={"GET"}
     * )
     */
    public function show($articleId = 1)
    {
        // ...
    }

Les pré-requis de la route sont : que la valeur $articleId soit un entier supérieur, que la valeur par défaut est de 1 si non trouvé et que la méthode HTTP doit être GET.

Il faut savoir que les contrôleurs Symfony ne sont pas des contrôleurs frontaux. Ils ne sont pas en charge d'écouter la requête utilisateur. Sous le capot se cache donc notre moteur : le **kernel**. Il a la responsabilité d'appeler la bonne action du contrôleur et de retourner une réponse à l'utilisateur.

## Tips

Pour faire fonctionner ce système, il n'y a **normalement** pas besoin de BDD. Pourtant, ça ne marche pas chez moi sans faire les configurations nécessaires. Dès lors, il faut **lancer un serveur Mamp** pour que notre application puisse accéder à la BDD. Ensuite, dans le fichier **.env** (à la racine de Symfony), il faut commenter la ligne (#) de DATABASE_URL qui concerne postgresql et décommenter celle qui concerne MySQL. Ensuite, il faut mettre les bons identifiants. Dans le cas de Mamp :

    DATABASE_URL="mysql://root:root@127.0.0.1:3306/hello-world?serverVersion=5.7"

Attention, _3306_ peut être différent. À vérifier selon l'ordi sur lequel on est.

Et ensuite, on peut commencer à pratiquer tout ce qu'on a vu dans ce chapite, directement dans src > Controller > {Créer Controller et écrire son code}.

S'il y a un problème avec les routes, alors vous pouvez essayer d'installer un package à la racine du projet symfo :

    composer require doctrine/annotations

[Doc officielle.](https://packagist.org/packages/doctrine/annotations)