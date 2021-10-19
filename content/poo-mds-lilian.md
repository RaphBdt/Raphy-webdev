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