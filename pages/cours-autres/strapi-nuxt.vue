<template>
  <article class="container my-5">
    <Button url="/autres" />
    <h1 class="text-center">Tutoriel Strapi Nuxt</h1>
    <h3>Le backend</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 1">
          <nuxt-link :to="{ name: 'cours-autres-cours-strapi-nuxt-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h3>Le frontend</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 2">
          <nuxt-link :to="{ name: 'cours-autres-cours-strapi-nuxt-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const lessons = await $content('cours-strapi-nuxt', params.slug)
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