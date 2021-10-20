---
part: 1
id: 1
title: Cours 2

---
## Les méthodes magiques (suite)

Pour vérifier si une méthode ou une méthode statique existe :

    Class MaClasse
    {
        public $public = 'Public';
        private $prive = 'Privé';
     
        // Cette méthode magique est appelé lorsqu'une méthode inexistante ou a laquelle on n'a pas accès est appelée
        public function __call($methode, $arguments)
        {
            var_dump($arguments);
            echo 'La méthode "' . $methode . '" n\'existe pas ou n\'est pas accessible. Les arguments étaient : ' . implode(' - ', $arguments);
        }
     
        // Cette méthode magique est appelé lorsqu'une méthode statique inexistante ou a laquelle on n'a pas accès est appelée
        static public function __callStatic($methode, $arguments)
        {
            echo 'La méthode "' . $methode . '" n\'existe pas ou n\'est pas accessible. Les arguments étaient : ' . implode(' - ', $arguments);
        }
    }
     
    $obj = new MaClasse();
    $obj->BlaBla("arg1", 23); // Affiche "La méthode "BlaBla" n'existe pas ou n'est pas accessible. Les arguments étaient : arg1 - 23"
    MaClasse::StaticBlaBla(1,2,'Test'); // Affiche "La méthode "StaticBlaBla" n'existe pas ou n'est pas accessible. Les arguments étaient : 1 - 2 - Test"

Méthode magique couramment utilisée __toString :

    class User
    {
        private string $firstname;
        private string $lastname;
     
        public function __toString(): string
        {
            return $this->getFirstname().' '.$this->getLastname();
        }
     
        public function getFirstname(): string
        {
            return ucfirst(strtolower($this->firstname));
        }
     
        public function setFirstname(string $firstname): void
        {
            $this->firstname = $firstname;
        }
     
        public function getLastname(): string
        {
            return strtoupper($this->lastname);
        }
     
        public function setLastname(string $lastname): void
        {
            $this->lastname = $lastname;
        }
    }
     
    $user = new User();
    $user->setFirstname('lilian');
    $user->setLastname('di rosa');
     
    // Sans méthode magique toString
    echo $user->getFirstname().' '.$user->getLastname(); // Affiche "Lilian DI ROSA"
     
    // Avec toString
    echo $user; // Affiche "Lilian DI ROSA"

Les deux méthodes magiques sont les plus importantes pour __toString et __construct