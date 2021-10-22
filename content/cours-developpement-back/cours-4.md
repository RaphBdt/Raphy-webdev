---
part: 1
id: 1
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