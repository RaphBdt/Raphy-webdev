<template>
  <article class="container my-5">
    <Button url="/html-css" />
    <h1 class="text-center">Bootstrap</h1>
    <h3>Avantages de Bootstrap</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 1">
          <nuxt-link :to="{ name: 'cours-html-css-cours-bootstrap-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h3>Le responsive</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 2">
          <nuxt-link :to="{ name: 'cours-html-css-cours-bootstrap-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h3>Composants UI</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 3">
          <nuxt-link :to="{ name: 'cours-html-css-cours-bootstrap-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h3>Interactivité</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 4">
          <nuxt-link :to="{ name: 'cours-html-css-cours-bootstrap-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h3>Fonctionnalités et thèmes personnalisés</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 5">
          <nuxt-link :to="{ name: 'cours-html-css-cours-bootstrap-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const lessons = await $content('cours-bootstrap', params.slug)
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