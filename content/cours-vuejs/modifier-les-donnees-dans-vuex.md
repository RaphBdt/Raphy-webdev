---
part: 4
id: 15
title: Modifier les données dans Vuex

---
Pour modifier les données dans notre state de Vuex, on doit utiliser les **mutations**.

Par exemple, on va créer un compteur qui prend prend une valeur à chaque clic sur un bouton :

    export default createStore({
      state: {
        count: 0
      },
      mutations: {
        INCREASE_COUNT(state) { // La convention consiste à utiliser uniquement des majuscules et des _ pour ne pas confondre les mutations avec d'autres fonctions. Il faut bien penser à mettre "state" en argument.
            state.count += 1
        }
      },
      actions: {
    
      }
    })

C'est cool, mais ça reste limité. En effet, comment faire si on ne veut pas tout le temps mettre +1, mais par exemple des fois +2, +5... Pour ça, on peut ajouter un deuxième argument : le **payload**.

    export default createStore({
        state: {
            count: 0
        },
        mutations: {
            INCREASE_COUNT(state, payload) {
                state.count += Number(payload)
            }
        },
        actions: {
    
        }
    })

Dans cet exemple, nous autorisons l'utilisateur à :

* transmettre de combien nous voulons que _state.count_ soit incrémentée ;
* fixer une valeur par défaut de 1 ;
* convertir la valeur en nombre pour éviter les problèmes.

Ensuite, dans notre composant, il faut créer une fonction (par exemple : _incrementCount_) qui sera appelée au clic sur un bouton (avec un simple _@click="incrementCount"_) :

    export default {
        methods: {
            incrementCount() {
                this.$store.commit("INCREMENT_COUNT", 5); // On appelle une mutation avec this.$store.commit, puis on précise le nom de la mutation, et si besoin, un payload
            }
        }
    }

**_TIPS :_** Les mutations sont des transactions synchrones. Elles ne peuvent pas contenir de code asynchrone comme la récupération de données à partir d'une API. Elles doivent utiliser une _action_ pour récupérer les données et ensuite acter une mutation qui met à jour le state.

## Les actions

Enfin, la dernière pièce du pzzle est les **actions** !

* **State = data store global**
* **Les accesseurs = même fonctionnalité que les propriété calculées**
* **Mutation = mettre à jour le state**
* **Actions = coordonnent la logique derrière les mutations. C'est un quelque store l'équivalent de _methods_ pour me data store d'un composant unique.**

## Définir une action

    export default new Vuex.Store({
        state: {
            count: 0
        },
        mutations: { // S'occupe de change le state
            INCREASE_COUNT(state, amount = 1) {
                state.count += Number(amount)
            }
        },
        actions: { // Gère la logique
            incrementCount(context, amount) { // IncrementCount est le nom de l'action ; context donne accès aux mêmes méthodes et propriétés dans l'instance du store Vuex (commit, state, getters...) ; amount (on peut l'appeler comme on veut) est le payload que nous devons transmettre à la mutation afin qu'elle augmente de la bonne valeur
                context.commit('INCREMENT_COUNT', amount)
            }
        }
    })

## L'utilité d'une action

    export default new Vuex.Store({
        state: {
            count: 0
        },
        mutations: {
            INCREASE_COUNT(state, amount = 1) {
                state.count += Number(amount)
            },
            DECREASE_COUNT(state, amount = 1) {
                state.count -= Number(amount)
            }
        },
        actions: {
            updateCount(context, amount) {
                if (amount >= 0) {
                    context.commit('INCREASE_COUNT', amount)
                } else {
                    context.commit('DECREASE_COUNT', amount)
                }
            }
        }
    })

Nous pourrions rendre la mutation générique à quelque chose comme _CHANGE_COUNT_, mais en regardant l'historique, cela nous fournirait moins de détails, ce qui rend les choses plus difficiles à débugger. Par conséquent, il est préférable que les mutations gardent un seul usage. **Il faut laisser la logique aux actions.**

Pour plus de simplicité au niveau de la lecture du code, on peut remplacer l'argument "state" par { commit } dans notre action _updateCount_ :

    export default new Vuex.Store({
        state: {
            count: 0
        },
        mutations: {
            INCREASE_COUNT(state, amount = 1) {
                state.count += Number(amount)
            },
            DECREASE_COUNT(state, amount = 1) {
                state.count -= Number(amount)
            }
        },
        actions: {
            updateCount({ commit }, amount) {
                if (amount >= 0) {
                    commit('INCREASE_COUNT', amount)
                } else {
                    commit('DECREASE_COUNT', amount)
                }
            }
        }
    })

**Pour utiliser les actions dans les composants :**

    // Dans le template
        <div>
            <p>{{ count }}</p>
            <button @click="sendUpdateCountAction">Increment</button>
        </div>
    
    
    // Dans le script
    import { mapState } from 'vuex'
    
    export default {
        computed: {
            ...mapState(['count'])
        },
        methods: {
            sendUpdateCountAction() {
                this.$store.dispatch('updateCount')
            }
        }
    }

**DONC SOYONS CLAIRS, MAINTENANT ON NE DOIT PLUS DECLARER DE MUTATIONS DIRECTEMENT DANS NOTRE APPLICATION VUE, ON PASSE PAR LES ACTIONS CAR CE SONT EUX QUI GERENT LA LOGIQUE.**

Tout comme _mapState_ et _mapGetter_, il existe un équivalent pour les actions : _mapActions_.

    // Dans le template
        <div>
            <p>{{ count }}</p>
            <button @click="updateCount">Increment</button>
        </div>
     
    // Dans le script
    import { mapState, mapActions } from 'vuex'
     
    export default {
        computed: {
            ...mapState(['count'])
        },
        methods: {
            ...mapActions(['updateCount'])
        }
    }

**_TIPS :_** Contrairement aux mutations, les actions sont asynchrones.