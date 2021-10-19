<template>
    <div class="my-5">
        <b-container>
            <h1 class="text-center mb-3">JavaScript</h1>
            <b-row>
                <b-col lg=4 class="mb-3">
                    <lesson-card title="JavaScript pour le web" type="important">Manipuler le DOM ; communiquer avec un service web grâce à une API ; programmation asynchrone ; et mettre en place les bons outils pour travailler.</lesson-card>
                </b-col>
                <b-col lg=4 class="mb-3">
                    <lesson-card title="Full stack" type="important">Créer un serveur Express simple ; créer une API RESTfull ; mettre en place un système d'authentification ; ajouter une gestion des fichiers utilisateurs.</lesson-card>
                </b-col>
                <b-col lg=4 class="mb-3">
                    <lesson-card title="Vue.js" type="important">Construire une première application Vue.js ; Vue CLI ; créer des composants réutilisables ; gérer les données de l'application.</lesson-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import LessonCard from '../components/LessonCard.vue'
export default {
  components: { LessonCard },

}
</script>

<style>

</style>