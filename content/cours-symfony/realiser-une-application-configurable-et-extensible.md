---
part: 1
id: 3
title: Réaliser une application configurable et extensible

---
On va découvrir le composant **Dependency Injection** de Symfony et comment construire nos objets et les récupérer à l'aide du **container de services**.

## Configurer nos objets à l'aide du container de services

**Services = objet utilisé dans notre projet et dans lequel on aura besoin d'accéder.** Ce service est enregistré dans un container ainsi que sa "recette de cuisine" (les étapes nécessaires à sa construction : dépendances, méthodes et arguments à appeler).

Par exemple, cet objet un peu complexe à construire est un service !

    // src/Services/ComplexObject.php
    namespace App\Services;
    
    class ComplexObject
    {
        private $foo;
        private $bar;
        private $baz;
        private $other;
        
        public function __construct(
            Foo $foo,
            Bar $bar,
            Baz $baz,
            Other $other
        )
        {
            $this->foo = $foo;
            $this->bar = $bar;
            $this->baz = $baz;
            $this->other = $other;
        }
    
        public function doSomething() {
            // ...
        }
    }

_Pour vérifier qu'un service est bien disponible, la console Symfony a une commande dédiée : **debug:container**. Par exemple, si on veut savoir si le service Symfony\\Component\\PropertyInfo\\PropertyListExtractorInterface est disponible :_

    php bin/console debug:container Symfony\Component\PropertyInfo\PropertyListExtractorInterface

Si le service est présent dans le container de services, on peut l'injecter sans crainte dans nos classes :

    // src/Controller/HelloController.php
    namespace App\Controller;
    
    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    use Symfony\Component\Routing\Annotation\Route;
    
    class HelloController extends AbstractController
    {
        /**
         * Page d'accueil
         *
         * @Route("/", name="accueil")
         */
        public function home(ComplexObject $complexObject)
        {
            // $complexObject->doSomething();
        }
    }

Ceci est possible grâce à **l'autowriting** (autochargement des classes) !  
Si on va dans config > services.yaml, alors on peut s'appercevoir qu'il est activé par défaut.

Tous les arguments qui sont des objets typés de la fonction __construct seront automatiquement passés à ce service s'ils sont disponibles dans le container de services.

Dans notre projet, le framework parcourt l'ensemble des ressources définies :

    services:
        # Rend chaque classe disponible dans src/ disponible en tant que service
        App\:
            resource: '../src/*'
            exclude: '../src/{Entity,Migrations,Tests,Kernel.php}'

Si on veut déclarer une autre ressource ou la classe seule (rappel : on se trouve toujours dans services.yaml) :

    services:
        # Toutes les classes d'une dépendance Composer
        OtherLibrary\:
            resource: '../vendor/a/b/c'
    
        # Seulement une classe, tant qu'elle est trouvée par Composer.
        OtherLibrary\MyClass:

**Déclaration manuelle de paramètre**

Si, par exemple, un service nécessite l'email d'un administrateur :

    // src/Services/MailLogger
    namespace App\Services;
    
    class MailLogger
    {
        private $adminEmail;
    
        public function __construct($adminEmail)
        {
            $this->adminEmail = $adminEmail;
        }
    
        public function sendMail()
        {
            /* ... */    
        }
    }

Alors on doit la déclarer (deux façons possibles : soit seulement pour ce service, soit globalement) :

    # config/services.yaml
    services:
        # Disponible seulement pour ce service
        App\Services\MailLogger:
            arguments:
                $adminEmail: 'admin@openclassrooms.com'
        
        # Déclaration globale à tous les services
        # déclarés dans ce fichier
        _defaults:
            bind:
                $adminEmail: 'admin@openclassrooms.com'

Encore mieux : le container de services est capable de contenir des paramètres :

    # config/services.yaml
    parameters:
        admin_email: 'admin@openclassrooms.com'
    
    # Suffisant pour que le MailLogger soit bien instancié.
    services:
        _defaults:
            bind:
                $adminEmail: '%admin_email%'

## Étendre notre application grâce aux événements natifs

Cas concret : Si on développe un processus d'achat pour un site e-commerce, alors il y a une multitude d'actions qui s'effectuent : (stock produit, vérification si utilisateur est connecté, suggestions, etc...). **Chacune de ces actions est complètement indépendante des autres et ne devrait pas être liée ou couplée.**  
Pour gérer ce type de problématique, on peut utiliser le composant **EventDispatcher** qui implémente deux patterns de programmation : _Observateur_ et _Mediateur_.

Le composant EventDispatcher en bref :

![Composant EventDispatcher](https://user.oc-static.com/upload/2021/03/17/16159915638362_1C2_1.png)

Il faut savoir qu'une application Symfony dispose d'un **répartiteur d'événements** qui envoie une série d'**événements** natifs et métiers. Ensuite, des objets qui peuvent être des **écouteurs** ou encore des **souscripteurs d'événements** peuvent écouter ces événements et exécuter des fonctions en fonction des données.

Explication du schéma ci-dessus : l'écouteur 1 écoute l'événement 1, écouteur 2 l'événement 2, souscripteur l'événement 3. Les 3 écouteurs (le souscripteur est un écouteur) ont été ajoutés au répartiteur d'événements (on encore "EventDispatcher"). Quand le répartiteur envoie les événements, il donne l'information aux écouteurs qui peuvent réaliser des actions au bon moment sans avoir connaissance des autres écouteurs.

Pour créer un écouteur d'événements, il faut créer une simple classe PHP disposant de fonctions publiquent qui prennent en argument l'événment écouté :

    // src/EventListener/ExceptionListener.php
    namespace App\EventListener;
    
    use Some\Events\FooEvent;
    
    class BarListener
    {
        public function doSomething(FooEvent $event)
        {
            /* ... */
        }
    }

Pour qu'il soit considéré comme écouteur par le répartiteur d'événements, on doit enregistrer le service avec un "tag" particulier :

    # config/services.yaml
    services:
        App\EventListener\BarListener:
            tags:
                - { name: kernel.event_listener, event: foo, method: doSomething }

Le **name** est propre au framework, on déclare ce service en tant qu'écouteur. L'**event** est le nom de l'événement qui sera envoyé par le répartiteur. La **method** spécifie quelle classe sera exécutée.

**Une autre façon de réagir à un événement : Les souscripteurs d'événements. Ils sont plus adaptés pour écouter de multiples événements.**  
_La classe doit impérativement implémenter l'interface Symfony\\Component\\EventDispatcher\\EventSubscriberInterface_

    // src/EventSubscriber/ExceptionSubscriber.php
    namespace App\EventSubscriber;
    
    use Symfony\Component\EventDispatcher\EventSubscriberInterface;
    use App\Events\FooEvent;
    use App\Events\BarEvent;
    use Symfony\Component\HttpKernel\KernelEvents;
    
    class ExceptionSubscriber implements EventSubscriberInterface
    {
        public static function getSubscribedEvents()
        {
            // Liste des évènements, méthodes et priorités
            return [
               'foo' => [
                   ['doSomething', 10],
                   ['doOtherThing', 0],
               ],
               'bar' => [
                   ['doBarThing', -10]
                ],
            ];
        }
    
        public function doSomething(FooEvent $event) {}
    
        public function doOtherThing(FooEvent $event) {}
    
        public function doBarThing(BarEvent $event) {}
    }

Les valeurs 10, 0 ou -10 indiquent l'ordre de priorité. Il faut savoir que l'ordre le plus fort est 0 et qu'on doit mettre une valeur entre -255 et 255.

**Dans le cercle de vie d'une application Symfony, de nombreux événements sont disponibles pour nous permettre d'altérer le comportement de l'application. Voici les plus utiles :**

* **kernel.request :** envoyé avant que le contrôleur ne soit terminé
* **kernel.controller :** envoyé après détermination du contrôleur
* **kernel.response :** envoyé après que le contrôleur retourne un objet
* **kernel.terminate :** envoyé après que la réponse est envoyée à l'utilisateur
* **kernel.exception :** envoyé si une exception est lancée par l'application

Exemple d'application simple d'envoi de mail :

    // src/EventSubscriber/SummaryMailSubscriber
    namespace App\EventSubscriber;
    
    use Symfony\Component\EventDispatcher\EventSubscriberInterface;
    use Symfony\Component\HttpKernel\Event\PostResponseEvent;
    use Symfony\Component\HttpKernel\KernelEvents;
    
    class SummaryMailSubscriber implements EventSubscriberInterface
    {
        public static function getSubscribedEvents()
        {
            return [
                // 'kernel.terminate'
                KernelEvents::TERMINATE => [
                    ['sendProductPaidMail', 0],
                ];
            ];
        }
    
        public function sendProductPaidMail(PostResponseEvent $event)
        {
            // envoi de l'email
        }
    }

## Créer et déployer des événements spécifiques

Jusque là, on a vu comment écouter les événements, mais on a pas vu comment en créer un.

Ce qu'il faut retenir c'est qu'**un événement est un objet quelconque**. On est libre d'utiliser n'importe quel objet tant qu'il étend de la classe Event du composant EventDispatcher.

Pour créer un événement à envoyer quand l'utilisateur ajouter un produit à son panier :

    // src/Events/BasketProductAdded.php
    namespace App\Events;
    
    use Symfony\Component\EventDispatcher\Event;
    use App\Entity\Product;
    use App\Entity\Customer;
    
    class BasketProductAdded extends Event
    {
        const NAME = 'basket.product_added';
    
        private $product;
        private $customer;
    
        public function __construct(Product $product, Customer $customer)
        {
            $this->product = $product;
            $this->customer = $customer;
        }
    
        public function getProduct()
        {
            return $this->product;
        }
    
        public function getCustomer()
        {
            return $this->customer;
        }
    }

Et le contrôleur responsable de cette action :

    // src/Controller/BasketController.php
    
    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    use App\Events\BasketProductAdded;
    
    class BasketController extends AbstractController
    {
        public function add(EventDispatcherInterface $eventDispatcher)
        {
            /* ... */
            $event = new BasketProductAdded($product, $this->getUser());
            $eventDispatcher->dispatch($event, BasketProductAdded::NAME);
        }
    }

## Vin dieu, chapitre un peu compliqué à comprendre...

Pour résumer le tout, rien de tel que l'exercice de fin de chapitre. Le principe de l'exercice ressemble à l'ancien : on va afficher : "Comment vas-tu {user} ?". Néanmoins, on va utiliser une méthode différente. On va utiliser un événement appelé "comment-vas-tu.utilisateur" pour modifier la réponse retournée à l'utilisateur.

Voici l'événement :

    // src/Events/HowAreYou.php
    namespace App\Events;
    
    use Symfony\Contracts\EventDispatcher\Event;
    
    class HowAreYou extends Event
    {
        const NAME = "comment-vas-tu.utilisateur";
        private $user;
    
        public function __construct($user)
        {
            $this->user = $user;
        }
    
        public function getFeeling() {
            return 'Comment vas-tu ' . $this->user . ' ?';
        }
    }

Et voici un extrait (c'est la suite de mon Hello World) de mon Controller :

    namespace App\Controller;
    
    use Symfony\Component\HttpFoundation\Request;
    use Symfony\Component\HttpFoundation\Response;
    use Symfony\Component\Routing\Annotation\Route;
    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    use App\Events\HowAreYou;
    
    class HelloWorldController extends AbstractController
    {
    
        ...
    
        /**
        * How are you
        *
        * @Route("/how-are-you/{user}", name="how-are-you", methods={"GET"})
        */
       public function howAreYou($user)
       {
           $event = new HowAreYou($user);
           $theMessage = $event->getFeeling();
           return new Response($theMessage);
       }
    }

Ce qui est très intéressant, c'est qu'**avec cette méthode, on peut respecter à fond la règle qui dit que chaque action doit être complètement indépendante des autres**.