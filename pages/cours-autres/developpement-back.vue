<template>
  <article class="container my-5">
    <Button url="/autres" />
    <h1 class="text-center">Développement back</h1>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 1">
          <nuxt-link :to="{ name: 'cours-autres-cours-developpement-back-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const lessons = await $content('cours-developpement-back', params.slug)
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