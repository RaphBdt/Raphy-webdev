---
part: 4
id: 14
title: Récupérer des données depuis Vuex

---
## Stocker des données dans Vuex

En fait, c'est pas si difficile... Notre data store **général** est défini en tant que **state** dans l'objectif de configuration _store/index.js_. C'est exactement la même utilisation que **data** pour les datas stores **propres** à leurs composants.

Donc, dans _store/index.js_, si on veut stocker des données, ça se passe comme ça :

    import { createStore } from 'vuex'
    
    export default createStore({
      state: {
        day: 21,
        month: 8,
        year: 21
      }
    })

On aura accès à ces données à partir de n'importe quel composant de notre application. Donc là on se dit trop cool on va tout foutre là dedans, mais en fait non... Il faut réfléchir intelligemment. Ce qui rend l'architecture par composants aussi puissante est sa capacité à découper un certain nombre de sujets. **L'idée est de remonter les données à un niveau global uniquement lorsqu'on constate qu'il est nécessaire d'accéder aux données à partir de plusieurs composants.**

## Récupérer les données dans Vuex

Il existe deux façons de récupérer les données.

**La première : utiliser $store**

**_TIPS :_** Dans notre carrière de dév Vue, on va découvrir des propriétés qui sont précédées du symbole dollar, exemple : _this.$option_, _this.$parent_, _this.$children_... Il s'agit de propriétés spécifiques à l'instance de Vue sur laquelle on travaille, elles sont précédées du signe dollar afin de garantir que ces méthodes sont bien utilisées comme prévu.

Comme notre _store_ Vuex est injecté à un niveau global, on a accès à _$store_. Donc, pour récupérer nos données enregistrées ci-dessus, on doit faire :

    // Dans le template
    <p>La date stockée dans Vuex est le {{ $store.state.day }}-{{ $store.state.month }}-{{ $store.state.year }}.</p>

**Deuxième méthode (moins encombrante) : _mapState_** !

_mapState_ est une méthode qui nous permet de demander à Vuex les propriétés de state de notre choix, et il les ajoutera à nos propriétés calculées :

    // Dans le template
    <p>La date stockée dans Vuex est le {{ day }}-{{ month }}-{{ year }}.</p>
    
    // Dans le script
    import { mapState } from 'vuex'
    
    export default {
        computed: {
            ...mapState(['year', 'month', 'day'])
        }
    }

Et s'il y a un conflit au niveau des noms, on peut aussi résonner comme ça :

    // Dans le template
    <p>La date stockée dans Vuex est le {{ day }}-{{ uniqueMonth }}-{{ customYear }}.</p>
    
    // Dans le script
    import { mapState } from 'vuex'
    
    export default {
        computed: {
            ...mapState({
                customYear: 'year',
                uniqueMonth: 'month',
                day: 'day'
            })
        }
    }

## Les getters

Les _getters_ dans Vuex fonctionne de la même manière que les _propriétés calculées (computed)_ dans les composants.

    import { createStore } from 'vuex'
    
    export default createStore({
      state: {
        day: 21,
        month: 8,
        year: 21
      },
      getters: {
        formattedDate(state) { // IL EST OBLIGATOIRE DE PASSER state EN ARGUMENT
            return `${state.day}/${state.month}/${state.year}` // state remplace .this en quelque sorte
        },
      }
    })

Ensuite, tout comme _mapState_ pour les states, on va accéder à notre getter grâce à _mapGetters_ (là aussi on peut mettre des noms personnalisés grâce à un objet...) :

    // Dans le template
    <p>La date stockée dans Vuex est le {{ formattedDate }}.</p>
    
    // Dans le script
    import { mapGetters } from 'vuex'
    
    export default {
        computed: {
            ...mapGetters(['formattedDate'])
        }
    }