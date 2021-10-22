<template>
  <article class="container my-5">
    <Button url="/javascript" />
    <h1 class="text-center">Full stack</h1>
    <h3>Créer un serveur Express</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 1">
          <nuxt-link :to="{ name: 'cours-javascript-cours-full-stack-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h3>Créer une API RESTful</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 2">
          <nuxt-link :to="{ name: 'cours-javascript-cours-full-stack-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h3>Système d'authentification</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 3">
          <nuxt-link :to="{ name: 'cours-javascript-cours-full-stack-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h3>Ajouter une gestion des fichiers utilisateurs</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 4">
          <nuxt-link :to="{ name: 'cours-javascript-cours-full-stack-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const lessons = await $content('cours-full-stack', params.slug)
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