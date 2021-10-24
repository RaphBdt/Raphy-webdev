---
part: 3
id: 9
title: Passer des datas entre les composants

---
Dans les composants, nous pouvons définir plus de paramètres pour les props. Nous pouvons notamment obliger à passer un certain **type** de données mais aussi préciser si la prop est requise ou non :

    export default {
      name: 'HelloWorld',
      props: {
        msg: {
            String, // Peut aussi prendre Number, Function, Boolean, Object et Array
            required: true,
        }
      }
    }

À la place du _required_, on peut donner une valeur par défaut à notre prop. Voici un exemple détaillé de ce qu'on peut faire :

    export default {
        props: {
            list: {
                type: Array,
                default: () => []
            },
            title: {
                type: String,
                required: true
            },
            count: {
                type: Number,
                default: 1
            }
        }
    }

_Array_ a une valeur par défaut qui utilise une fonction anonyme pour retourner un tableau vide. En effet, les valeurs par défaut des _Arrays_ et des _Objects_doivent être retournées par une fonction pour que cela fonctionne correctement.