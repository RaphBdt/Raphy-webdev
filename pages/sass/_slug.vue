<template>
  <article>
      <nuxt-content :document="lesson" />
  </article>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const lesson = await $content('sass', params.slug).fetch();

        return { lesson }
    }
}
</script>

<style>

</style>