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