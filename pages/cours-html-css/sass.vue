<template>
  <article class="container my-5">
    <Button url="/html-css" />
    <h1 class="text-center">Sass</h1>
    <h3>Structurer et organiser le code</h3>
    <ol>
      <li v-for="(lesson, idx) in lessons" :key="idx">
        <nuxt-link :to="{ name: 'cours-html-css-cours-sass-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
      </li>
    </ol>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const lessons = await $content('cours-sass', params.slug)
      .sortBy('id', 'asc')
      .fetch();

    return {
      lessons 
    }
  }

}
</script>

<style>

</style>