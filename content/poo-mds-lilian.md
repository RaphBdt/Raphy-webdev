---
part: 1
id: 1
title: POO MDS Lilian

---
## Créons notre première classe

    class Lampe
    {
        public $pied;
        public $luminosite = '250 lumen';
        
        public function eclairer()
        {
        	echo 'La pièce est maintenant allumée';
        }
        
        public function clignoter()
        {
        
        }
    }
     
    $lampe = new Lampe(); // Instancie la classe
    $lampe->pied = 'Droit';
    $lampe->eclairer(); // Affiche "La pièce est maintenant allumée"

### Principe d'encapsulation

    class Lampe
    {
        private $pied;
        private $luminosite = '250 lumen';
        
        public function eclairer()
        {
        	echo 'La pièce est maintenant allumée';
        }
        
        public function clignoter()
        {
        
        }
    }
     
    $lampe = new Lampe();
    $lampe->pied = 'Droit'; // Erreur fatale

### **Les accesseurs et les mutateurs**

    class Lampe
    {
        private $pied;
        private $luminosite = '250 lumen';
        
        public function getPied()
        {
        	return $this->pied;
        }
        
        public function getLuminosite()
        {
        	return $this->luminosite;
        }
    }
     
    $lampe = new Lampe();
    $luminosite = $lampe->getLuminosite();
    echo $luminosite; // Affiche 250 lumen;
    
    class Lampe
    {
        private $pied;
        private $luminosite;
        
        public function setPied($pied)
        {
        	$this->pied = $pied;
        }
        
        public function setLuminosite($luminosite)
        {
        	$this->luminosite = $luminosite;
        }
    }
     
    $lampe1 = new Lampe();
    $lampe1->setLuminosite(250);
     
    $lampe2 = new Lampe();
    $lampe2->setLuminosite(1500);
     
    echo $lampe1->getLuminosite(); // Affiche 250;
    echo $lampe2->getLuminosite(); // Affiche 1500;

### Les déclarations de type

L'idée c'est de contraindre le retour de nos méthodes.

    class Lampe
    {
        private string $pied;
        private int $luminosite;
        
        public function setPied(string $pied): void
        {
        	$this->pied = $pied;
        }
        
        public function setLuminosite(int $luminosite): void
        {
        	$this->luminosite = $luminosite;
        }
    }
     
    $lampe1 = new Lampe();
    $lampe1->setLuminosite(250); // Ok
     
    $lampe2 = new Lampe();
    $lampe2->setLuminosite('A'); // Exception TypeError lancée

### Le constructeur

Le constructeur est une _méthode magique_ !

    class Lampe
    {
        private string $pied;
        private int $luminosite;
        
        public function __construct(string $pied, int $luminosite)
        {
        	$this->pied = $pied;
            $this->luminosite = $luminosite;
        }
        
        public function setPied(string $pied): void
        {
        	$this->pied = $pied;
        
        
        public function setLuminosite(int $luminosite): void
        {
        	$this->luminosite = $luminosite;
        }
    }
     
    $lampe1 = new Lampe('droit', 250);
    $lampe2 = new Lampe('droit', 1500);
    $lampe3 = new Lampe('angle', 800);
    $lampe4 = new Lampe('angle', 1000);

### Les constantes de classe

    class Character
    {
        private int $strength;
        private int $xp = 0;
        
        const LOW_STRENGTH = 10;
        const MEDIUM_STRENGTH = 50;
        const HIGH_STRENGTH = 90;
     
        public function __construct(int $strength)
        {
            $this->strength = $strength;
        }
     
        public function getStrength(): int
        {
            return $this->strength;
        }
     
        public function getXp(): int
        {
            return $this->xp;
        }
     
        public function setXp(int $xp): void
        {
            $this->xp = $xp;
        }
     
        public function gainXp(): void
        {
            $this->xp += 1; // Equivalent de $this->experience = $this->experience + 1 OU $this->experience++;
            if ($this->xp == 5) {
                $this->strength += 1;
                $this->xp = 0;
            }
        }
    }
     
    $char = new Character(Character::HIGH_STRENGTH);
    echo $char->getStrength(); // Affiche 90;

### Les attributs et méthodes statiques

    class MaClasse
    {
        public static function something(): string
        {
            echo 'Hello Word';
        }
    }
     
    MaClasse::something(); // Affiche "Hello World"

    class MaClasse
    {
        public static string $text = 'Hello World';
    }
     
    echo MaClasse::$text; // Affiche "Hello World"

Pour accéder à un attribut statique dans une méthode statique, il faut utiliser le mot clé self :

    class MaClasse
    {
        private static string $text = 'Hello World';
     
        public static function something(): string
        {
            echo self::$text;
        }
    }
     
    MaClasse::something(); // Affiche Hello World

## Analysons un objet

    	
    // On crée une instance de la classe DateTime. Ainsi, $start est un objet de type DateTime
    // $start ne contient pas l'objet, mais seulement l'identifiant de cet objet
    $start = new DateTime();
     
    // On assigne l'identifiant de $start à $end
    // En conséquence, $end et $start ont le même identifiant et représente donc le même objet !
    $end = $start;
     
    // On modifie l'objet représenté par l'identifiant contenu dans $end
    // $start représentant le même objet, "on modifie" également $start !
    // En réalité, $start n'étant qu'un identifiant, il n'est pas modifié évidemment. Seulement son objet vers lequel il pointe l'est.
    $end->add(new DateInterval('P2D'));

**Pour résoudre ce problème de référence :**

    $start = new DateTime();
     
    // On clone le contenu de $start dans $end
    $end = clone $start;
    $end->add(new DateInterval('P2D'));
     
    // On affiche les deux dates
    echo '$start : ' . $start->format('d/m/Y') . PHP_EOL;
    echo '$end : ' . $end->format('d/m/Y');
     
    // Résultat :
    // $start : 19/10/2021
    // $end : 21/10/2021

## Comparer des objets 

    <?php
     
    class A
    {
        public $attribut1;
        public $attribut2;
    }
     
    // On crée deux objets parfaitement identique
    $a = new A;
    $a->attribut1 = 'attribut1';
    $a->attribut2 = 'attribut2';
     
    $b = new A;
    $b->attribut1 = 'attribut1';
    $b->attribut2 = 'attribut2';
     
    $c = $a;
     
    ($a === $b) ? print_r('$a === $b') : print_r('$a !== $b') ; // Ce n'est pas égal car on a trois = et que ce sont des instances différentes
    echo PHP_EOL;
    ($a === $c) ? print_r('$a === $c') : print_r('$a !== $c') ;

## Les méthodes magiques

### Constructor, destructor

    Class MaClasse
    {
        // La màthode magique __construct est appelée lors de l'instanciation de MaClasse, à la création de l'objet
        // On l'appelle le constructeur
        public function __construct()
        {
            echo 'Construction de MaClasse / ';
        }
     
        // La méthode magique __desctruct est appelée lors de la destruction de l'objet
        // On l'appelle le destructeur
        public function __destruct()
        {
            echo 'Desctruction de MaClasse';
        }
    }
     
    $obj = new MaClasse(); // Affiche "Contruction de MaClasse / Destruction de MaClasse"
    

### Accesseurs et mutateurs

    	
    <?php
     
    Class MaClasse
    {
        public $public;
        private $prive;
     
        // La méthode magique __set est appelée lorsque qu'on l'on essaie d'attribuer une valeur
        // à un attribut non existant ou auquel on ne peut accéder
        public function __set($attribut, $valeur)
        {
            echo 'On a tenté d\'assigner à l\'attribut "' . $attribut . '" la valeur "' . $valeur . '"' . PHP_EOL;
        }
     
        // La méthode magique __get est appelée lorsque l'on essaie d'accéder à un attribut
        // non existant ou auquel on ne peut accéder
        public function __get($attribut)
        {
            echo 'L\'attribut "' . $attribut . '" n\'existe pas ou n\'est pas accessible';
        }
    }
     
    $obj = new MaClasse();
     
    $obj->public = 'Public';
    echo $obj->public.PHP_EOL; // Affiche "Public"
     
    $obj->prive = 'Privé'; // Affiche "On a tenté d'assigner à l'attribut "prive" la valeur "Privé"
    echo $obj->prive.PHP_EOL; // Affiche "L'attribut "prive" n'existe pas ou n'est pas accessible"
    echo $obj->attributNonExistant.PHP_EOL; // Affiche "L'attribut "attributNonExistant" n'existe pas ou n'est pas accessible"