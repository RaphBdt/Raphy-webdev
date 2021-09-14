<template>
    <div>
        <b-card
            v-if="type === 'important'"
            :title="title"
            style="border: 1px solid #124559"
        >
            <b-card-text>
                <slot></slot>
            </b-card-text>

            <nuxt-link :to="url" class="stretched-link">Accéder à la fiche de révision</nuxt-link>
        </b-card>
        <b-card
            v-else
            :title="title"
        >
            <b-card-text>
                <slot></slot>
            </b-card-text>

            <nuxt-link :to="url" class="stretched-link">Accéder à la fiche de révision</nuxt-link>
        </b-card>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Titre du cours"
        },
        url: {
            type: String,
            default: "/"
        },
        type: {
            type: String,
            default: "normal"
        }
    }
}
</script>

<style>

</style>