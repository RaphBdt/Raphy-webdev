<template>
    <div class="my-5">
        <b-container>
            <h1 class="text-center mb-3">Autres</h1>
            <b-row>
                <b-col lg=4 class="mb-3">
                    <lesson-card type="important" title="Symfony" url="/cours-autres/symfony">Première application ; Twig, Doctrine, ORM ; et mise en production.</lesson-card>
                </b-col>
                <b-col lg=4 class="mb-3">
                    <lesson-card title="Conception objet" url="/cours-autres/conception-objet">Notions clés du développement web. Cours réalisé par Damien pour MyDigitalSchool.</lesson-card>
                </b-col>
                <b-col lg=4 class="mb-3">
                    <lesson-card title="Développement back" url="/cours-autres/developpement-back">POO en PHP. Création d'un framework. Cours réalisé par Lilian pour MyDigitalSchool.</lesson-card>
                </b-col>
                <b-col lg=4 class="mb-3">
                    <lesson-card title="Développement WordPress" url="/cours-autres/wordpress">Développement entier d'un thème WordPress. Cours réalisé par Capitaine WP.</lesson-card>
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