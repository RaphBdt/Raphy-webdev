<template>
  <article class="container my-5">
    <Button url="/autres" />
    <h1 class="text-center">WordPress</h1>
    <h3>Découvrir WordPress</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 1">
          <nuxt-link :to="{ name: 'cours-autres-cours-wordpress-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h3>Créer son thème</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 2">
          <nuxt-link :to="{ name: 'cours-autres-cours-wordpress-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h3>Advanced custom fields</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 3">
          <nuxt-link :to="{ name: 'cours-autres-cours-wordpress-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h3>Concepts avancés</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 4">
          <nuxt-link :to="{ name: 'cours-autres-cours-wordpress-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h3>Page builders et Gutenberg</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 5">
          <nuxt-link :to="{ name: 'cours-autres-cours-wordpress-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h3>Mettre en ligne son site WordPress</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 6">
          <nuxt-link :to="{ name: 'cours-autres-cours-wordpress-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
    <h3>Les extensions incontournables</h3>
    <ol>
      <span v-for="(lesson, idx) in lessons" :key="idx">
        <li v-if="lesson.part === 7">
          <nuxt-link :to="{ name: 'cours-autres-cours-wordpress-slug', params: { slug: lesson.slug }}">{{ lesson.title }}</nuxt-link>
        </li>
      </span>
    </ol>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const lessons = await $content('cours-wordpress', params.slug)
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