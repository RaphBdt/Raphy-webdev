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

Principe d'encapsulation :

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

**Les accesseurs et les mutateurs**

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

**Les déclarations de type**

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

**Le constructeur**

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