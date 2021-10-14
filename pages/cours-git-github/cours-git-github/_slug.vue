<template>
    <article class="container my-5">
        <Button url="../git-et-github" />
        <h1 class="text-center">{{ lesson.title }}</h1>
        <nuxt-content :document="lesson" />
    </article>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const lesson = await $content('cours-git-et-github', params.slug).fetch();

        return { lesson }
    }
}
</script>

<style>

</style>