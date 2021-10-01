---
part: 1
id: 2
title: Présentation fonctionnelle
---

La programmation fonctionnelle est une évolution de la programmation objet

Elle repose sur plusieurs principes :

## Immutabilité

=> Ce concept permet de s'assurer de la valeur des variables au début et à a la fin de nos actions. Cela permet d'avoir un code plus robuste, plus stable et donc plus maintenable.


**Non**
```javascript
let classe = ["Jean", "Marc"]
classe.push("Julie")
```

**Oui**
```javascript
let classe = ["Jean", "Marc"]
let nouvelle_classe = [...classe, "Julie"]
```


## Les fonctions pures 

=> N'a pas d'effets secondaires et ne dépend pas du contexte extérieur

**Non**
```javascript
Date.now()
```

**Oui**
```javascript
let push = function (tableau, clef) {
    return [...tableau, clef]
}
```

## Les fonctions d'ordre supérieur 

Consiste à passer une ou plusieurs fonctions en paramètre. C'est à dire :

```javascript
let array = [1,2,3,4,5,6]

let isEven = function(v) {
  return v % 2 == 0
}

let evens = array.filter(isEven)
```