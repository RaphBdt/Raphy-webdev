---
part: 3
id: 10
title: Émettre des événements vers des composants parents

---
On sait communiquer depuis les composants parents vers les composants enfants. On va maintenant voir comment faire le sens inverse grâce aux événements personnalisés.

## Les événements, c'est quoi ?

[Rappel sur ce que sont les événements en JavaScript](file:///Users/raphaelbeaudet/Library/Mobile%20Documents/com\~apple\~CloudDocs/Raphy-webdev/javascript/javascript_web/ecouter-des-evenements.html).

En développement, les événements sont des actions ou des occurrences qui se produisent pendant l'utilisation d'un site web (clique, appuie sur une touche, formulaire soumis, fenêtre redimensionnée...).

Lorsque ces actions se produisent, des événements sont **émis** pour qu'on puisse y répondre. Un **objet événement** est alors automatiquement passé aux événements. Il contiendra des fonctionnalités supplémentaires ou des informations sur l'événement.

## Créer des événements personnalisés

Avant tout, rappel : _@_ est un raccourci de _v-on_.

On va faire un cas pratique. Mettons qu'on ait deux composants : l'événement enfant **ChildComponent** et l'événement parent **ParentComponent**.

On va se servir de la fonctionnalité _$emit_ de Vue. Elle permet de définir nos propres événements personnalisés faisant l'objet d'une émission.

La fonction _$emit_ prend deux paramètres : le **nom de l'événement** (qui doit être défini en _kebab-case_) & un **payload** qu'on peut utiliser pour passer des données à l'écouteur de l'événement (généralement défini comme un objet pour passer autant de propriétés qu'on veut).

Dans notre _ChildComponent.vue_ :

    // Template
    <button @click="emitCustomEvent">Emit Event</button>
    
    // Script
    export default {
        methods: {
            emitCustomEvent() {
                this.$emit('custom-event-name', { message: 'Mon message personnalisé' })
            }
        }
    }
                

Et notre _ParentComponent.vue_ :

    // Template
    <ChildComponent @custom-event-name="setMessage" /> // Il faut évidemment mettre le nom de l'événement personnalisé sur le composant émettant l'événement.
    
    // Script
    import ChildComponent from './ChildComponent'
    
    export default {
        components: { ChildComponent },
        data () {
            return {
                message: 'Hello'
            }
        },
        methods: {
            // Définit la méthode utilisée par le payload pour mettre à jour la propriété data
            setMessage(payload) {
                this.message = payload.message
            }
        }
    }
                

Cette méthode ne fonctionne que lorsqu'on communique directement depuis un composant enfant vers un composant parent. Il ne faut pas s'attendre à ce que notre événement soit émis dans l'ensemble de l'application.