<template>
  <article class="container my-5">
    <Button url="/autres" />
    <h1 class="text-center">Symfony</h1>
    <h3>Développer première application avec Symfony</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 1">
          <nuxt-link :to="{ name: 'cours-autres-cours-symfony-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h3>Dynamiser les pages avec twig et Doctrine ORM</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 2">
          <nuxt-link :to="{ name: 'cours-autres-cours-symfony-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const lessons = await $content('cours-symfony', params.slug)
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