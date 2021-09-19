<template>
  <article class="container my-5">
    <Button url="/html-css" />
    <h1 class="text-center">Sass</h1>
    <h3>Structurer et organiser le code</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 1">
          <nuxt-link :to="{ name: 'cours-html-css-cours-sass-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h2>Créer du code maintenable</h2>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 2">
          <nuxt-link :to="{ name: 'cours-html-css-cours-sass-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h2>Optimiser le code</h2>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 3">
          <nuxt-link :to="{ name: 'cours-html-css-cours-sass-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
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