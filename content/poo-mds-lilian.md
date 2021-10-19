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