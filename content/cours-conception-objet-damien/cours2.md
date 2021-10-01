---
part: 1
id: 3
title: Exercices jour 2
---

# Exercice de début de cours

```kotlin
/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

interface OnClickListener {
    fun onClick()
}

class Button() {
    private var onClickListener : OnClickListener? = null // Private empêche la var d'être appelée hors de la classe
    
    fun setOnClickListener(listener : OnClickListener) {
        this.onClickListener = listener
    }
    
    fun click() { 
		this.onClickListener?.onClick()
    }
}

class View() {
    init {
        val button = Button()
        button.setOnClickListener(object: OnClickListener { // On met Object parce qu'un interface ne peut pas s'instancier toute seule
            override fun onClick() {
                println("coucou")
            }
        })
    button.click()
        val button2 = Button()
        button2.setOnClickListener(object: OnClickListener { // On met Object parce qu'un interface ne peut pas s'instancier toute seule
            override fun onClick() {
                println("Salut")
            }
        })
    button2.click()
    }
}

fun main() {
    View()
}
```


## Le principe de Liskov Substitution Principle

Ce qu'il ne faut pas faire :
```kotlin
/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

open class Rectangle(var width: Int, var height: Int) {
    open fun area(): Int {
        return this.width * this.height;
    }
}

class Square(var side: Int): Rectangle(side, side) {
    override public fun area() : Int {
        return side * side
    }
}

object Geometry { // Il s'agit d'un singleton car on crée la classe et on l'instancie en même temps.
    fun doubleSize(rectangle: Rectangle) {
        rectangle.height = rectangle.height * 2
        rectangle.width = rectangle.width * 2
    }
}

fun main() {
    println("Hello, world!!!")
    
    var rectangle1 = Rectangle(10, 20)
    var square2 = Square(10)
    println(rectangle1.area())
    println(square2.area())
    
    Geometry.doubleSize(rectangle1)
    println(rectangle1.area())
    
    Geometry.doubleSize(square2)
    println(square2.area())
}
```


Ce qu'il faut faire :
```kotlin
/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

open class Rectangle(var width: Int, var height: Int) {
    open fun area(): Int {
        return this.width * this.height;
    }
}

class Square(var side: Int): Rectangle(side, side) {

}

object Geometry { // Il s'agit d'un singleton car on crée la classe et on l'instancie en même temps.
    fun doubleSize(rectangle: Rectangle) {
        rectangle.height = rectangle.height * 2;
        rectangle.width = rectangle.width * 2;
    }
}

fun main() {
    println("Hello, world!!!");
    
    var rectangle1 = Rectangle(10, 20);
    var square2 = Square(10);
    println(rectangle1.area());
    println(square2.area());
    
    Geometry.doubleSize(rectangle1);
    println(rectangle1.area());
    
    Geometry.doubleSize(square2);
    println(square2.area());
}
```