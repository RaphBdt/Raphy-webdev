---
part: 1
id: 1
title: Exercices jour 1
---

# Exercice 1

```kotlin
/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

class RubisKube constructor (val size: String, val mainColor: String ){
    init {
        println("La taille de ce rubiskube est $size, sa principale couleur est le $mainColor")
    }
}

fun main(){
 	val rubisKube1 = RubisKube("petit", "rouge")
	val rubisKube2 = RubisKube("grand", "bleu")
}
```


Correction

```kotlin
data class RubiksCube (val numberOfSquare:Int = 6, val edge:Int = 4) {
    
    override fun toString(): String {
        return "numberOfSquare : " + this.numberOfSquare
    }
    
}

fun main(){
 	val rubiksCube = RubiksCube()
    println(rubiksCube)
    
   	val rubiksCube2 = RubiksCube(4)
    println(rubiksCube2)
}
```


# Exercice 2
```kotlin
/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

class RubisKube constructor (val size: String, val mainColor: String, val edgeSize: Int ){
    init {
        println("La taille de ce rubiskube est $size, sa principale couleur est le $mainColor")
    }
    
    fun calculateVolume(edgeSize: Int): Int {
        val volum = edgeSize * edgeSize * edgeSize
        println("L'aire du volume est: $volum")
        return volum
    }
}

fun main(){
 	val rubisKube1 = RubisKube("petit", "rouge", 6)
	val rubisKube2 = RubisKube("grand", "bleu", 6)
    rubisKube2.calculateVolume(5)
}
```

# Exercice 3
```kotlin
/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

class RubisKube constructor (val size: String, val mainColor: String, val height: Int, val width: Int, val tall: Int ){
    init {
        println("La taille de ce rubiskube est $size, sa principale couleur est le $mainColor")
    }
    
    fun calculateVolume(height: Int, width: Int, tall: Int): Int {
        val volum = height * width * tall
        println("L'aire du volume est: $volum")
        return volum
    }
}

fun main(){
 	val rubisKube1 = RubisKube("petit", "rouge", 6, 5, 4)
	val rubisKube2 = RubisKube("grand", "bleu", 6, 5, 4)
    rubisKube2.calculateVolume(2, 2, 3)
}
```

# Exercice 4
```kotlin
/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

class RubisKube constructor (val size: String, val mainColor: String, val width: Int, val length: Int, val height: Int ){
    init {
        println("La taille de ce rubiskube est $size, sa principale couleur est le $mainColor")
    }
    
    fun calculateVolume(width: Int, length: Int, height: Int): Float {
        var base = (width * length) / 2f
        val volum = (base * height) / 3f
        println("L'aire du volume est: $volum")
        return volum
    }
}

fun main(){
 	val rubisKube1 = RubisKube("petit", "rouge", 6, 5, 4)
	val rubisKube2 = RubisKube("grand", "bleu", 6, 5, 4)
    rubisKube2.calculateVolume(3, 2, 4)
}
```

Ce qu'on aurait aussi pu faire c'est une classe pour chaque type de rubiskube

# Exercice 5

(j'ai eu besoin du corrigé pour le terminer celui-là)

```kotlin
/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

class RubisKube constructor (val size: String, val mainColor: String, val edgeSize: Float ): HasVolume{
    
    init {
        println("La taille de ce rubiskube est $size, sa principale couleur est le $mainColor")
    }
    
    override fun calculateVolume(): Float { // Override permet de réécrire le "contrat", il prend le dessus sur calculateVolume
        val volum = edgeSize * edgeSize * edgeSize
        println("L'aire du volume est: $volum")
        return volum
    }
}

class RubisKubeRectangle constructor (val size: String, val mainColor: String, val height: Float, val width: Float, val tall: Float ): HasVolume {  
    init {
        println("La taille de ce rubiskube est $size, sa principale couleur est le $mainColor")
    }
    
    override fun calculateVolume(): Float {
        val volum = height * width * tall
        println("L'aire du volume est: $volum")
        return volum
    }
}

class RubisKubeTriangle(val size: String, val mainColor: String, val width: Float, val length: Float, val height: Float ): HasVolume {
    var volum:Number? = 0
    
    init {
        println("La taille de ce rubiskube est $size, sa principale couleur est le $mainColor")
    }
    
    override fun calculateVolume(): Float {
        var base = (width * length) / 2f
        val volum = (base * height) / 3f
        println("L'aire du volume est: $volum")
        return volum
    }
}

interface HasVolume { /* Une interface n'a pas de constructeur, c'est une sorte de "contrat" qu'on signe... On nous assure ici de nous retourner un Float */
    fun calculateVolume() : Float
}

fun calculateVolume(rubisKube:HasVolume) : Float {
	return rubisKube.calculateVolume()
}

fun main(){
 	val rubisKube1 = RubisKube("petit", "rouge", 6f)
	val rubisKube2 = RubisKubeRectangle("grand", "bleu", 6f, 5f, 4f)
    val rubisKube3 = RubisKubeTriangle("grand", "bleu", 6f, 5f, 4f)
    
    println(calculateVolume(rubisKube1))
    println(calculateVolume(rubisKube2))
    println(calculateVolume(rubisKube3))
}
```