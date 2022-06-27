---
part: 2
id: 1
title: Mettre en place le frontend

---
Nuxt is a static site generator. It has the advantage of offering fast and fluid navigation to our user. Let's start creating our frontend 💪

## Create the project

Put this commande in your terminal :

```
npm init nuxt-app
```

You will be presented with a set of choices. For this tutorial, I used the Tailwind CSS framework, so I recommend you choose that as well.

## Create the pages and components

We are entering the major part of the project. For this tutorial, I suggest you make a simple blog with a homepage and an "animals" category. We will display a card per article and when we click on it we will access the content.


In pages > index.vue :
```
<template>
  <div>
    <div class="bg-white">
      <div class="max-w-2xl mx-auto py-24 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="mt-11 grid items-start grid-cols-1 gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          <Article v-for="article in articles.data" :key="article.id" :id="article.id" :title="article.attributes.title" :image="article.attributes.image.data.attributes.formats.thumbnail.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      articles: [],
    }
  },
  async mounted () {
    try {
      this.articles = await this.$strapi.$articles.find({populate: '*'});
    } catch (error) {
      this.error = error
    }
    console.log(this.articles);
  }
}
</script>
```