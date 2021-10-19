<template>
    <article class="container my-5">
        <Button url="../symfony" />
        <h1 class="text-center">{{ lesson.title }}</h1>
        <nuxt-content :document="lesson" />
    </article>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const lesson = await $content('cours-symfony', params.slug).fetch();

        return { lesson }
    }
}
</script>

<style>

</style>