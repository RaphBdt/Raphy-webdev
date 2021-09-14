<template>
    <div class="my-5">
        <b-container>
            <Button url="html-css" />
            <h1 class="text-center mb-3">Sass</h1>
            <div class="lessons">
              <div class="part-1">
                <h2>Structurer et organiser le code</h2>
                <ol>
                  <li v-for="lesson of lessons">
                  <nuxt-link :to="{ name: 'sass-slug', params: { slug: lesson.slug } }">
                    {{ lesson.title }}
                  </nuxt-link>
                  </li>
                </ol>
              </div>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
      const lessons = await $content('sass', params.slug)
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