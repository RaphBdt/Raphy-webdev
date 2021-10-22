---
part: 1
id: 4
title: Cours 4

---
## Exceptions, interfaces et traits

Les exceptions :

    <?php
    function additionner(int $a, int $b)
    {
        throw new Exception('Les deux paramètres doivent être des nombres');
     
        return $a + $b;
    }
     
    // Nous allons essayer d'exécuter des instructions. Pour cela, nous devons les placer dans un bloc "try"
    try
    {
        echo additionner(12, 3), PHP_EOL;
        echo additionner('azerty', 54), PHP_EOL;
        echo additionner(4, 8);
    }
    // Puis nous allons essayer d'attraper les éventuelles exceptions qui seraient levées.
    // Pour cela, nous devons créer un bloc "catch", suivi entre parenthèses le type d'exception à attraper suivi d'une variable qui représentera cette exception.
    // A noter qu'en cas d'utilisation d'un bloc try, un bloc catch est obligatoire. Sinon un erreur sera levée.
    catch (Exception $e)
    {
        echo 'Une exception a été lancée. Message d\'erreur : ', $e->getMessage(); // getMessage est une méthode de la classe Exception servant à écrire à l'écran le message d'erreur
    }
     
    // A noter que la ligne 14 n'a jamais été exécutée.

C'est à dire que le script continue même après la ligne 23 si on continue à écrire du code. Néanmoins, la ligne 14 n'est pas exécutée car on est dans le bloc try.

Les exceptions personnalisées :

    class CustomException extends Exception
    {
        // On rend le message obligatoire
        public function __construct(string $message, int $code = 0)
        {
            parent::__construct($message, $code);
        }
     
        // On réécrit la fonction toString pour n'afficher que le message d'erreur
        public function __toString()
        {
            return $this->message . PHP_EOL;
        }
    }
     
    function additionner(int $a, int $b)
    {
        throw new CustomException('Les deux paramètres doivent être des nombres');
     
        return $a + $b;
    }
     
    try
    {
        echo additionner(12, 3), PHP_EOL;
        echo additionner('azerty', 54), PHP_EOL;
        echo additionner(4, 8);
    }
    // On n'attrape plus que les exceptions de notre classe CustomException
    catch (CustomException $e)
    {
        // Grace à la réécriture de la fonction __toString, plus besoin de faire echo $e->getMessage()
        echo $e;
    }
     
    echo 'Le script continue';

Plusieurs catchs :

    class CustomException extends Exception
    {
        public function __construct($message, $code = 0)
        {
            parent::__construct($message, $code);
        }
     
        public function __toString()
        {
            return $this->message . PHP_EOL;
        }
    }
     
    function additionner(int $a, int $b)
    {
        throw new CustomException('Les deux paramètres doivent être des nombres');
     
        return $a + $b;
    }
     
    try
    {
        echo additionner(12, 3), PHP_EOL;
        echo additionner('azerty', 54), PHP_EOL;
        echo additionner(4, 8);
    }
    catch (CustomException $e)
    {
        echo $e;
    }
    catch (Exception $e)
    {
        echo $e->getMessage() . PHP_EOL;
    }
     
    echo 'Le script continue';

### Finally 

    function additionner(int $a, int $b)
    {
        throw new InvalidArgumentException('Les deux paramètres doivent être des nombres');
     
        return $a + $b;
    }
     
    try
    {
        echo additionner(12, 3), PHP_EOL;
        echo additionner('azerty', 54), PHP_EOL;
        echo additionner(4, 8);
    }
    // Si une exception n'est pas attrapé, le bloc finally est exécuté avant que l'erreur fatale ne soit levée
    finally
    {
        echo 'Code exécuté quoi qu\'il arrive' . PHP_EOL;
    }
     
    // Instruction jamais exécutée
    echo 'Le script continue';

Quoi qu'il arrive, s'il y a une erreur fatale, notre finally va s'exécuter juste avant l'arrêt du script.   
C'est généralement utilisé pour les opérations de nettoyage du genre déconnexion de la BDD avant de rencontrer une erreur fatale...

Il existe des exceptions prédéfinies :  
➡️   
Exemple : [https://www.php.net/manual/fr/reserved.exceptions.php](https://www.php.net/manual/fr/reserved.exceptions.php "https://www.php.net/manual/fr/reserved.exceptions.php")

    // Lien de la documentation : http://fr2.php.net/manual/fr/spl.exceptions.php
    // Il faut autant que possible utiliser les exceptions prédéfinies adaptée à la situation.
    function additionner(int $a, int $b)
    {
        // Ici l'exception est une instance de la classe InvalidArgumentException, qui hérite de la classe Exception
        throw new InvalidArgumentException('Les deux paramètres doivent être des nombres');
     
        return $a + $b;
    }
     
    try
    {
        echo additionner(12, 3), PHP_EOL;
        echo additionner('azerty', 54), PHP_EOL;
        echo additionner(4, 8);
    }
    catch (InvalidArgumentException $e)
    {
        echo 'Il est mort, Jim !' . PHP_EOL;
    }
     
    echo 'Le script continue';

## Les interfaces

Les interfaces permettent d'imposer des structures à ses classes.

Un héritage représente un sous ensemble d'éléments. Tandis qu'une interface permet d'attribuer des points communs entre nos classes (exemple : avancer).

    // Déclaration d'une interface à l'aide du mot clé "interface"
    interface MonInterface
    {
        // Toutes les méthodes d'une interfaces doivent être publiques, non abstraites et non finales !
        public function methode($arg);
    }
     
    // Pour implanter une interface, on utilise le mot clé "implements"
    class MaClasse implements MonInterface
    {
        // Toutes les méthodes d'une interface doivent être implémenter dans la classe.
        // Sinon, une erreur fatale est levée
        public function methode($arg)
        {
     
        }
    }
     
    // Si notre classe doit hériter d'une autre classe, on doit d'abord déclarer l'héritage avant d'implanter notre interface
    class MaClasse2 extends MaClasse implements MonInterface
    {
        public function methode($arg)
        {
     
        }
    }
     
    // Il est tout à fait possible d'implémenter plusieurs interfaces
    // /!\ A condition qu'aucune méthode ne porte le même nom
    interface MonInterface2
    {
        public function test();
    }
     
    class MaClasse3 implements MonInterface, MonInterface2
    {
        public function methode($arg)
        {
     
        }
     
        public function test()
        {
     
        }
    }
     
    // Les interfaces peuvent posséder des constantes d'interfaces.
    // Les classes implémantant cette interface ne peuvent pas réécrire les constantes d'interface
    interface MonInterface3
    {
        const CONSTANTE = 1;
    }
     
    class MaClasse4 implements MonInterface3
    {
        // Ce code lève une erreur fatale
        //const CONSTANTE = 1;
    }
     
    echo MonInterface3::CONSTANTE; // Affiche 1
    echo MaClasse4::CONSTANTE; // Affiche 1

**Les interfaces obligent les classes qui les implémente à suivre un comportement.**

Une interface peut avoir plusieurs mères. 

## Les traits

Dans cet exemple : on créée deux méthodes identiques dans deux classes différentes.

    class User
    {
        private $username;
     
        public function __construct()
        {
            $log = "[" . (new DateTime())->format('d/m/Y H:i:s') . "] [INFO] L'utilisateur " . $this->username . " vient de se connecter";
            file_put_contents('debug.log', $log, FILE_APPEND);
        }
    }
     
    class Match
    {
        private $team1;
        private $team2;
        private $score;
     
        public function test()
        {
            $log = "[" . (new DateTime())->format('d/m/Y H:i:s') . "] [INFO] L'équipe " . $this->team1 . " a battu l'équipe " . $this->team2 . " sur le score de " . $this->score;
            file_put_contents('debug.log', $log, FILE_APPEND);
        }
    }

**Un trait est un moyen d'externaliser du code.**

    trait MonTrait
    {
        public function hello()
        {
            echo 'Hello world !';
        }
    }
     
    class A
    {
        // L'utilisation d'un trait dans une classe se fait à l'aide du mot clé "use"
        use MonTrait;
    }
     
    class B
    {
        use MonTrait;
    }
     
    $a = new A;
    $a->hello(); // Affiche « Hello world ! ».
     
    $b = new b;
    $b->hello(); // Affiche aussi « Hello world ! ».

    trait Log
    {
        public function log($severity, $text)
        {
            $str = "[" . (new DateTime())->format('d/m/Y H:i:s') . "] [" . $severity . "] " . $text;
            file_put_contents('debug.log', $str, FILE_APPEND);
        }
    }
     
    class User
    {
        use Log;
        private $username;
     
        public function __construct()
        {
            $this->log('INFO', "L'utilisateur " . $this->username . " vient de se connecter");
        }
    }
     
    class Match
    {
        use Log;
        private $team1;
        private $team2;
        private $score;
     
        public function test()
        {
            $this->log('INFO', "L'équipe " . $this->team1 . " a battu l'équipe " . $this->team2 . " sur le score de " . $this->score);
        }
    }

Utiliser plusieurs traits :

    trait A
    {
        public function test()
        {
            echo 'Test A';
        }
    }
     
    trait B
    {
        public function test()
        {
            echo 'Test B';
        }
    }
     
    class MaClasse
    {
        use A, B;
    }
     
    $o = new MaClasse();
    $o->test(); // Erreur fatale : trait method format has not been applied, because there are collisions with other trait methods
     
    class MaClasse2
    {
        // Pour résoudre les conflits, nous définissions des méthodes "prioritaires"
        use A, B
        {
            A::test insteadof B;
        }
    }
     
    $o = new MaClasse2();
    $o->test(); // Affiche 'Test A'

Ordre de priorité des méthodes pour les traits :

    trait A
    {
        public function test()
        {
            echo 'Test A';
        }
    }
     
    class MaClasse
    {
        use A;
     
        public function test()
        {
            echo 'Test MaClasse';
        }
    }
     
    $o = new MaClasse();
    $o->test(); // Affiche 'Test MaClasse' : Les méthodes de classes sont prioritaires par rapport aux méthodes de trait

    trait A
    {
        public function test()
        {
            echo 'Test A';
        }
    }
     
    class Mere
    {
        public function test()
        {
            echo 'Test classe mère';
        }
    }
     
    class Fille extends Mere
    {
        use A;
    }
     
    $o = new Fille();
    $o->test(); // Affiche 'Test A' : Les méthodes de trait sont prioritaires par rapport aux méthodes de la classe mère;

Attributs de traits :

    trait A
    {
        private $attr = 'Attribut du trait A';
     
        public function getAttr()
        {
            return $this->attr;
        }
    }
     
    class MaClasse
    {
        use A;
    }
     
    $o = new MaClasse();
    echo $o->getAttr();
     
    // Une classe qui utilise un trait ne peut redéfinir un attribut
    class MaClasse2
    {
        use A;
     
        private $attr = 'Attribut du trait A'; // Erreur stricte (peut ne pas s'afficher suivant configuration de PHP)
        private $attr = 'Test'; // Erreur fatale
     
        // A noter qu'il est impossible de définir des "priorités" comme pour les méthodes
    }

Imbrication de traits :

    trait A
    {
        public function testA()
        {
            echo 'Test A';
        }
    }
     
    trait B
    {
        use A;
     
        public function testB()
        {
            echo 'Test B';
        }
    }
     
    class MaClasse
    {
        use B;
    }
     
    $o = new MaClasse();
    $o->testA(); // Affiche "Test A"
    $o->testB(); // Affiche "Test B"