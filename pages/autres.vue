<template>
    <div class="my-5">
        <b-container>
            <h1 class="text-center mb-3">Autres</h1>
            <b-row>
                <b-col lg=4 class="mb-3">
                    <lesson-card type="important" title="Symfony">Première application ; Twig, Doctrine, ORM ; et mise en production.</lesson-card>
                </b-col>
                <b-col lg=4 class="mb-3">
                    <lesson-card type="important" title="API REST">Utiliser des API REST ; formuler des requêtes et envoyer des réponses ; concevoir une API REST.</lesson-card>
                </b-col>
                <b-col lg=4 class="mb-3">
                    <lesson-card title="Conception objet" url="/cours-autres/conception-objet">Notions clés du développement web. Cours réalisé par Damien pour MyDigitalSchool.</lesson-card>
                </b-col>
                <b-col lg=4 class="mb-3">
                    <lesson-card title="Développement back" url="/">POO en PHP. Création d'un framework. Cours réalisé par Lilian pour MyDigitalSchool.</lesson-card>
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