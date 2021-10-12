<template>
  <article class="container my-5">
    <Button url="/html-css" />
    <h1 class="text-center">Animations CSS</h1>
    <h3>Animations de base</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 1">
          <nuxt-link :to="{ name: 'cours-html-css-cours-animations-css-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h3>Transitions, rotations et opacité</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 2">
          <nuxt-link :to="{ name: 'cours-html-css-cours-animations-css-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h3>Réaliser des animations dynamiques avec les keyframes</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 3">
          <nuxt-link :to="{ name: 'cours-html-css-cours-animations-css-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const lessons = await $content('cours-animations-css', params.slug)
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