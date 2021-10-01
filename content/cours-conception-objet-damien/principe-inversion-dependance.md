---
part: 1
id: 5
title: Exercices principe inversion dépendance
---

TIPS DIFFERENCE ABSTRACT ET INTERFACE 

Une classe abstraite est impossible à instancier. 
Sans constructeur il n'y a pas d'instanciation possible. 

```kotlin
interface IBidule {
    fun machin() : Int
}

abstract class Toto() {
    fun blague() {
        println("La tête à toto")
    }
}

fun main() {
    val iBidule = IBidule()
    val toto = Toto()
    toto.blague()
    toto.uneAutreBlague() 
}

fun main() : IBidule {
    override fun machin() {

    }
}

class Truc() : Toto() {
    override fun blague() {
        println("Salut")
    }
}
```

---------------------


Principe inversion dépendance

```kotlin

/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

class Lamp {
    fun stateOn() {
        println("Jour")
    }

    fun stateOff() {
        println("Nuit")
    }
}

class LampButton (private val lamp: Lamp) {

    private var state = false
    
    //Toggle Lamp on / off
    fun toggle() {
        state = !state
        if (state) {
            lamp.stateOn()
        } else {
            lamp.stateOff()
        }
    }
}

class Fan {
    fun stateOn() {
        println("VRRRRRRRRRRRRRRR")
    }

    fun stateOff() {
        println("Pfiouuuuuu.....")
    }
}

class FanButton (private val fan: Fan) {

    private var state = false
    
    //Toggle Lamp on / off
    fun toggle() {
        state = !state
        if (state) {
            fan.stateOn()
        } else {
            fan.stateOff()
        }
    }
}

fun main() {
    val lamp = Lamp()
    val lampButton = LampButton(lamp)

    val fan = Fan()
    val fanButton = FanButton(fan)

    lampButton.toggle()
    fanButton.toggle()
}

```

## Questionnaire 

### Question 1
Oui, nous pouvons utiliser la classe Lamp séparement, car elle est totalement indépendante de toute autre classe.

Non, nous n'avons pas besoin de paramètre pour instancier la classe. 


### Question 2 
Oui, nous pouvons également utiliser la classe Fan séparément, car elle est elle aussi indépendance.

Là non plus nous n'avons besoin d'aucun paramètre pour instancier la classe.


### Question 3
Non, nous ne pouvons pas utiliser la classe Button séparemment, car elle dépend d'un objet créé avec la classe Fan ou Lamp.
Oui, on a besoin d'un objet en argument pour instancier la classe Button.

### Question 4 
Si un modèle de lampe sort sur le marché, nous pourions créer une nouvelle classe qui étend de la classe Lamp.
Nous pouvons tout simplement ajouter une nouvelle classe dans le cas où nous ne devons pas utiliser l'héritage. 
```kotlin

class NeoLamp {
    fun stateOn() {
        println("NEON JOUR")
    }

    fun stateOff() {
        println("NEON NUIT")
    }
}
```

### Question 5 
Dans le cas où nous avons 100 nouvelles lampes d'un coup, il va être trop long de créer un nouvel interrupteur pour chaque. 
Nous pourions envisager d'utiliser une classe qui ve être hérité de toutes les autres.

### Question 6
Si nous modifions le comportement de la classe qui va être héritée de toutes les autres, cela risque de compromettre le déroulement de toutes les autres classes qui en dépendent. Nous pouvons dès lors utiliser une interface. 

### Question 7 & 8
```kotlin
/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

interface IEquipment {
    fun stateOn()
    fun stateOff()
}

class Lamp : IEquipment {
    override fun stateOn() {
        println("Jour")
    }

    override fun stateOff() {
        println("Nuit")
    }
}

class Fan : IEquipment {
    override fun stateOn() {
        println("VRRRRRRRRRRRRRRR")
    }

    override fun stateOff() {
        println("Pfiouuuuuu.....")
    }
}

class Button (private val equipement : IEquipment) {

    private var state = false
    
    //Toggle Lamp on / off
    fun toggle() {
        state = !state
        if (state) {
            equipement.stateOn()
        } else {
            equipement.stateOff()
        }
    }
}

fun main() {
    val lamp = Lamp()
    val lampButton = Button(lamp)

    val fan = Fan()
    val fanButton = Button(fan)

    lampButton.toggle()
    fanButton.toggle()
}
```

### Question 9 
Si nous ajouter la fonction changeColor l'interface IEquipement, ne sera plus valable pour notre ventilateur, car il n'a pas besoin de changer de couleur. 


### Question 10
Ce design pattern permet de créer des groupes de façon homogènes, car ils implémentent une interface commune.

Cela peut être utile dans notre cas afin que le ventilateur  n'ait pas la méthode changeColor() qui ne lui servitait à rien

### Question 11
Cette façon de faire permet d'avoir une méhode de travail agile. Elle permet de garder une cohérence entre les classes appartenenant à un même "groupe", mais en plus on peut adapter les fonctionnalités en créant de nouvelles interfaces.

Cas concret : cela peut être utile si nous avons une classe Utilisateur qui regroupe à la fois les clients et les employés. Ceux-ci implémentent la même interface. Néanmoins, dans le cas où nous voulons ajouter une fonctionnalités qui affiche le poste des employés (mais évidemment pas celui des clients), alors nous devrons créer une nouvelle interface. 


### Question 12


Ce que j'ai essayé de faire : 
```kotlin
/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

interface IEquipment {
    fun stateOn()
    fun stateOff()
}

interface IButtonAdapter {
    fun turnOn()
    fun turnOff()
}

interface IEquipementColorAdapter:  {
    
}

interface IEquipmentWithColor : IEquipment {
    fun switchColor(color: String)
}

class Lamp : IEquipment {
    override fun stateOn() {
        println("Jour")
    }

    override fun stateOff() {
        println("Nuit")
    }
}

class ButtonColorAdapter(val equipmentWithColor: IEquipmentWithColor):  {
    
}

class HueLamp : IEquipment {
    var color = "blanc"
    override fun stateOn() {
        println("jour" + this.color)
    }
    
    override fun stateOff() {
        println("nuit")
    }
    
    override fun switchColor(color: String) {
        this.color = color
    }
}

class Fan : IEquipment {
    override fun stateOn() {
        println("VRRRRRRRRRRRRRRR")
    }

    override fun stateOff() {
        println("Pfiouuuuuu.....")
    }
}

class Button(private val adapter: IButtonAdapter) {

    private var state = false
    
    fun toggle() {
        state = !state
        if (state) {
            adapter.turnOn()
        } else {
            adapter.turnOff()
        }
    }
}

class ButtonColor : Button, IEquipementColorAdapter {
    fun toggle() {
        state = !state
        if (state) {
            adapter.turnOn()
        } else {
            adapter.turnOff()
        }
    }
}

class ButtonAdapter(private val equipment: IEquipment) : IButtonAdapter {

    override fun turnOn() {
        equipment.stateOn()
    }

    override fun turnOff() {
        equipment.stateOff()
    }
}

class ButtonColorAdapter {
    
}

class ButtonColor {
    
}

fun main() {
    val lampButtonAdapter = ButtonAdapter(Lamp())
    val fanButtonAdapter = ButtonAdapter(Fan())

    val lampButton = Button(lampButtonAdapter)
    val fanButton = Button(fanButtonAdapter)

    lampButton.toggle()
    fanButton.toggle()
    
    
    
    val hueLamp = HueLamp()

    val hueLampButtonColorAdapter = ButtonColorAdapter(hueLamp)
    val hueLampButtonColor = ButtonColor(hueLampButtonColorAdapter)
    hueLampButtonColor.changeColor("Rouge")
    hueLampButtonColor.toggle()

    val hueLampButtonAdapter = ButtonAdapter(hueLamp)
    val hueLampButton = Button(hueLampButtonAdapter)
    hueLampButton.toggle()
    hueLampButton.toggle()
}
```