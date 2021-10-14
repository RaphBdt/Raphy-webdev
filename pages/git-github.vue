<template>
    <div class="my-5">
        <b-container>
            <h1 class="text-center mb-3">Git / GitHub</h1>
            <b-row>
                <b-col lg=4 class="mb-3">
                    <lesson-card title="Le terminal" type="important" url="/cours-git-github/le-terminal">Découverte du terminal ; manipulation des fichiers avec le terminal.</lesson-card>
                </b-col>
                <b-col lg=4 class="mb-3">
                    <lesson-card title="Git et GitHub" type="important" url="/cours-git-github/git-et-github">Premiers pas ; commandes de bases ; ereurs courrantes.</lesson-card>
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