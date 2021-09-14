<template>
    <nuxt-link :to="url"><b-button>{{ title }}</b-button></nuxt-link>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Retour"
        },
        url: {
            type: String,
            default: "/"
        }
    }
}
</script>

<style scoped>
    button {
        background-color: #739877;
        border: 1px solid #739877;
    }

    button:hover {
        background-color: #5C755F;
        border: 1px solid #5C755F;
    }
</style>