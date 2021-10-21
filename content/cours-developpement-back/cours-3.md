---
part: 1
id: 1
title: Cours 3

---
## Rappel sur le self

    Class A
    {
        public static function test()
        {
            self::whoAmI();
        }
    
        public static function whoAmI()
        {
            echo 'A';
        }
    }
    
    Class B extends A
    {
        public static function whoAmI()
        {
            echo 'B';
        }
    }
    
    B::test();

Ici, ça affiche "A".

    Class A
    {
        public static function test()
        {
            static::whoAmI();
        }
    
        public static function whoAmI()
        {
            echo 'A';
        }
    }
    
    Class B extends A
    {
        public static function whoAmI()
        {
            echo 'B';
        }
    }
    
    B::test();

Alors qu'ici ça affiche "B".

Nous ne sommes pas obligés d'être dans une méthode statique pour utiliser la résolution statique.

**Le mot clé self s'exécute dans le contexte de la classe dans lequel il se trouve. Alors que le mot clé static s'exécute dans le contexte de la classe dans lequel il est appelé.**

    Class A
    {
        public static function finalTest()
        {
            static::whoAmI();
        }
     
        public static function whoAmI()
        {
            echo 'A';
        }
    }
     
    Class B extends A
    {
        public static function test()
        {
            parent::finalTest();
        }
     
        public static function whoAmI()
        {
            echo 'B';
        }
    }
     
    Class C extends B
    {
        public static function whoAmI()
        {
            echo 'C';
        }
    }
     
    C::test();

Ici ça affiche C. 

    Class A
    {
        public static function finalTest()
        {
            static::whoAmI();
        }
     
        public static function whoAmI()
        {
            echo 'A';
        }
    }
     
    Class B extends A
    {
        public static function test()
        {
            self::finalTest();
        }
     
        public static function whoAmI()
        {
            echo 'B';
        }
    }
     
    Class C extends B
    {
        public static function whoAmI()
        {
            echo 'C';
        }
    }
     
    C::test();

Ici ça affiche C. 

    Class A
    {
        public static function finalTest()
        {
            static::whoAmI();
        }
     
        public static function whoAmI()
        {
            echo 'A';
        }
    }
     
    Class B extends A
    {
        public static function test()
        {
            A::finalTest();
        }
     
        public static function whoAmI()
        {
            echo 'B';
        }
    }
     
    Class C extends B
    {
        public static function whoAmI()
        {
            echo 'C';
        }
    }
     
    C::test();

Ici ça affiche A.

    class TestParent
    {
        public function __construct()
        {
            static::qui();
        }
     
        public static function qui()
        {
            echo 'TestParent';
        }
    }
     
    class TestChild extends TestParent
    {
        public function __construct()
        {
            static::qui();
        }
     
        public function test()
        {
            $o = new TestParent();
        }
     
        public static function qui()
        {
            echo 'TestChild';
        }
    }
     
    $o = new TestChild;
    $o->test();

Ici ça affiche TestChild puis TestParent. 

## Les espaces de noms

L'idée c'est d'avoir la possibilité d'appeler plusieurs classes par le même nom. 

    namespace Application;
    class User
    {}
    
    namespace Messenger;
    class User
    {}
    
    $applicationUser = new \Application\User;
    $messengerUser = new \Messenger\User;
    
    $date = new DateTime(); // Erreur
    $date = new \DateTime(); // Ok

Quand on se trouve dans une interface de nom, il mettre un \\ pour se mettre dans l'interface de nom globale.

Dans notre exemple, dès la ligne 5, on se trouve dans le namespace Messenger.

    namespace App\SubNamespace\Application;
    class User
    {}
    
    use \Application\User;
    $user = new User();

Dans ce nouvel exemple, on se trouve toujours dans la namespace App\\SubNamespace\\Application, même si on instancie une classe du namespace \\Application\\User.

_En pratique :_

On commence toujours par écrire le namespace, car comme ça tout ce qui se trouve en dessous se trouve dans le namespace déclaré. 

Ensuite, on déclare tous nos use pour pouvoir utiliser les classes qui se trouvent dans les autres namespaces. 

## Persistance des données

### Hydratation

Hydrater un objet revient à lui apporter tout ce dont il a besoin pour fonctionner. 

Hydrater un objet revient à lui donner tous les éléments dont il a besoin pour fonctionner (ses attributs).

    class Bar
    {
        private int $id;
        private string $nom;
        private string $adresse;
     
        public function __construct(array $data)
        {
            $this->hydrate($data);
        }
     
        private function hydrate(array $data)
        {
            // On parcours le tableau de data
            foreach ($data as $key => $value)
            {
                // Pour chaque colonne, on construit le nom de la méthode avec la clé du tableau :
                // setId, setNom, setAdresse
                // ucfirst est une fonction qui met en majuscule la premiere lettre d'une chaine de caractères
                $method = 'set' . ucfirst($key);
     
                // On vérifie si la màthode existe
                if (method_exists($this, $method))
                {
                    // Si elle existe, on appelle la méthode avec la valeur correspondant à la clé du tableau
                    $this->$method($value);
                }
            }
        }
     
        public function getId(): int
        {
            return $this->id;
        }
     
        public function setId(int $id)
        {
            $this->id = $id;
        }
     
        public function getNom(): string
        {
            return $this->nom;
        }
     
        public function setNom(string $nom)
        {
            $this->nom = $nom;
        }
     
        public function getAdresse(): string
        {
            return $this->adresse;
        }
     
        public function setAdresse(string $adresse)
        {
            $this->adresse = $adresse;
        }
    }
     
    $request = $db->query('SELECT id, nom, adresse FROM bars');
     
    while ($data = $request->fetch(PDO::FETCH_ASSOC))
    {
        $data = [];
        $data['id'] = 27;
        $data['nom'] = 'Lilian';
        $data['adresse'] = '110 rue de la soif';
     
        $bar = new Bar($data);
     
        echo $bar->getId() . '<br>' . $bar->getNom() . '<br>' . $bar->getAdresse();
    }

### Les Managers

**RAPPEL : UNE CLASSE = UN RÔLE**

**Il y a un Manager par classe.**

    // Structure de base de notre manager
    class BarManager
    {
        public function __construct(private PDO $dao)
        {
        }
     
        public function add(Bar $bar): void
        {
            $q = $this->dao->prepare('INSERT INTO bars(nom, adresse) VALUES(:nom, :adresse)');
            $q->bindValue(':nom', $bar->getNom());
            $q->bindValue(':adresse', $bar->getAdresse());
            $q->execute();
        }
     
        public function get(int $id): Bar
        {
            $q = $this->dao->prepare('SELECT nom, adresse FROM bars WHERE id = :id');
            $q->bindValue(':id', $id);
            $q->execute();
            $data = $q->fetch(PDO::FETCH_ASSOC);
     
            return new Bar($data);
        }
     
        public function update(Bar $bar): void
        {
            $q = $this->dao->prepare('UPDATE bars SET nom = :nom, adresse = :adresse WHERE id = :id');
            $q->bindValue('id', $bar->getId());
            $q->execute();
        }
     
        public function delete(Bar $bar): void
        {
            $this->dao->exec('DELETE FROM bars WHERE id = ' . $bar->getId());
        }
        
        public function getAll(): array
        {
            $bars = [];
            $q = $this->dao->prepare('SELECT nom, adresse FROM bars ORDER BY nom');
            $q->execute();
     
            while ($data = $q->fetch(PDO::FETCH_ASSOC))
            {
                $bars[] = new Bar($data);
            }
     
            return $bars;
        }
    }