<template>
    <div class="my-5">
        <b-container>
            <h1 class="text-center mb-3">HTML / CSS</h1>
            <b-row>
                <b-col lg=4 class="mb-3">
                    <lesson-card title="Sass" type="important" url="/cours-html-css/sass">Structuer et organiser son code ; le rendre maintenable ; et l'optimiser.</lesson-card>
                </b-col>
                <b-col lg=4 class="mb-3">
                    <lesson-card title="Animations CSS" type="important" url="/cours-html-css/animations-css">Animations de base ; transitions, rotations, opacité ; et keyframes.</lesson-card>
                </b-col>
                <b-col lg=4 class="mb-3">
                    <lesson-card title="Bootstrap" type="important" url="/cours-html-css/bootstrap">Avantages de Bootstrap ; le responsive ; les composants UI ; UX ; fonctionnalités et thèmes personnalisés.</lesson-card>
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